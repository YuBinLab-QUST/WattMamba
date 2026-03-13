import torch
import torch.nn.functional as F
import random
import numpy as np
import warnings
warnings.filterwarnings("ignore")

class Unsupervised_augmentation(object):
    def __init__(self, jitter_ratio=0.02, scaling_ratio=0.1, max_segments=5, 
                 frequency_mask_ratio=0.1, frequency_add_ratio=0.1):
        self.jitter_ratio = jitter_ratio
        self.scaling_ratio = scaling_ratio
        self.max_segments = max_segments
        self.frequency_mask_ratio = frequency_mask_ratio
        self.frequency_add_ratio = frequency_add_ratio
    def jitter(self, x, sigma):
        noise = torch.randn_like(x) * sigma
        return x + noise

    def scaling(self, x, sigma):
        factor = torch.randn(x.shape[0], 1, 1, device=x.device) * sigma + 1.0
        return x * factor

    def one_hot_encoding(self, X, num_classes):
        return F.one_hot(X, num_classes=num_classes).float()

    def permutation(self, x, max_segments):
        B, T, D = x.shape
        ret = torch.zeros_like(x)
        for i in range(B):
            num_segs = torch.randint(1, max_segments + 1, (1,)).item()
            if num_segs > 1:
                split_points = torch.sort(torch.randperm(T - 2)[:num_segs - 1]).values
                split_points = split_points.cpu().numpy().tolist()
                split_sizes = [split_points[0]]
                for j in range(1, len(split_points)):
                    split_sizes.append(split_points[j] - split_points[j - 1])
                split_sizes.append(T - split_points[-1])
                splits = torch.split(torch.arange(T, device=x.device), split_sizes)
                splits = list(splits)
                random.shuffle(splits)
                warp = torch.cat(splits)
                ret[i] = x[i, warp, :]
            else:
                ret[i] = x[i]
        return ret

    def remove_frequency(self, x, maskout_ratio=0.1):
        freq = torch.fft.fft(x, dim=1)
        mask = torch.rand(freq.shape, device=x.device) > maskout_ratio
        freq_masked = freq * mask
        x_masked = torch.fft.ifft(freq_masked, dim=1).real
        return x_masked

    def add_frequency(self, x, pertub_ratio=0.1):
        freq = torch.fft.fft(x, dim=1)
        mask = torch.rand(freq.shape, device=x.device) > (1 - pertub_ratio)
        random_phase = torch.rand(freq.shape, device=x.device) * 2 * torch.pi
        random_amplitude = torch.rand(freq.shape, device=x.device) * 0.1 * torch.abs(freq)
        freq_perturbed = mask * random_amplitude * torch.exp(1j * random_phase)
        freq_new = freq + freq_perturbed
        x_perturbed = torch.fft.ifft(freq_new, dim=1).real
        return x_perturbed

    def DataTransform_TD(self, sample):
        aug_1 = self.jitter(sample, sigma=self.jitter_ratio)
        aug_2 = self.scaling(sample, sigma=self.scaling_ratio)
        aug_3 = self.permutation(sample, max_segments=self.max_segments)

        aug_stack = torch.stack([aug_1, aug_2, aug_3], dim=1) 
        li = torch.randint(0, 3, (sample.shape[0],), device=sample.device)  
        li_onehot = self.one_hot_encoding(li, num_classes=3) 

        li_onehot = li_onehot.unsqueeze(-1).unsqueeze(-1) 
        li_onehot = li_onehot.expand(-1, -1, sample.size(1), sample.size(2))

        aug_T = (aug_stack * li_onehot).sum(dim=1) 
        assert aug_T.shape == sample.shape, f"Augmented signal shape {aug_T.shape} does not match original {sample.shape}"

        return aug_T

    def DataTransform_FD(self, sample):
        aug_1 = self.remove_frequency(sample, maskout_ratio=self.frequency_mask_ratio)
        aug_2 = self.add_frequency(sample, pertub_ratio=self.frequency_add_ratio)

        aug_stack = torch.stack([aug_1, aug_2], dim=1)  
        li = torch.randint(0, 2, (sample.shape[0],), device=sample.device)  
        li_onehot = self.one_hot_encoding(li, num_classes=2) 

        li_onehot = li_onehot.unsqueeze(-1).unsqueeze(-1)  
        li_onehot = li_onehot.expand(-1, -1, sample.size(1), sample.size(2)) 

        aug_F = (aug_stack * li_onehot).sum(dim=1)  
        assert aug_F.shape == sample.shape, f"Augmented signal shape {aug_F.shape} does not match original {sample.shape}"
        return aug_F

    def __call__(self, x):

        view1 = self.DataTransform_TD(x)
        view2 = self.DataTransform_FD(x)
        return view1, view2

def time_warp_s(x, sigma=0.005, knot=2, plot=False):
    from scipy.interpolate import CubicSpline
    orig_steps = np.arange(x.shape[0])

    random_warps = np.random.normal(loc=1.0, scale=sigma, size=(1, knot + 2, x.shape[1]))
    warp_steps = (np.ones((x.shape[1], 1)) * (np.linspace(0, x.shape[0] - 1., num=knot + 2))).T

    ret = np.zeros_like(x)
    for dim in range(x.shape[1]):
        time_warp = CubicSpline(warp_steps[:, dim], warp_steps[:, dim] * random_warps[0, :, dim])(orig_steps)
        scale = (x.shape[0] - 1) / time_warp[-1]
        ret[:, dim] = np.interp(orig_steps, np.clip(scale * time_warp, 0, x.shape[0] - 1), x[:, dim]).T
    return ret
def magnitude_warp_s(x, sigma=0.005, knot=2, plot=False):
    from scipy.interpolate import CubicSpline
    orig_steps = np.arange(x.shape[0])

    if not isinstance(x, np.ndarray):
        x = np.array(x, dtype=np.float32)

    random_warps = np.random.normal(loc=1.0, scale=sigma, size=(1, knot + 2, x.shape[1]))
    warp_steps = (np.ones((x.shape[1], 1)) * (np.linspace(0, x.shape[0] - 1., num=knot + 2))).T

    li = []
    for dim in range(x.shape[1]):
        li.append(CubicSpline(warp_steps[:, dim], random_warps[0, :, dim])(orig_steps))
    warper = np.array(li).T

    if not isinstance(warper, np.ndarray):
        warper = np.array(warper, dtype=np.float32)

    x_ = x * warper
    return x_

def SupervisedFineTune_DataAug(sample):
    if isinstance(sample, torch.Tensor):
        sample = sample.detach().cpu().numpy()

    t1 = time_warp_s(magnitude_warp_s(sample))
    t2 = time_warp_s(magnitude_warp_s(sample))
    t3 = time_warp_s(magnitude_warp_s(sample))
    t4 = time_warp_s(magnitude_warp_s(sample))
    t5 = time_warp_s(magnitude_warp_s(sample))
    t6 = time_warp_s(magnitude_warp_s(sample))
    sample = np.array(sample,dtype=np.float64)
    return t1,t2,t3,t4,t5,t6,sample
