import random
import numpy as np
import torch
from torch.utils.data import Dataset, DataLoader
import sys
sys.path.append("/root/sunxh/")


from .anomaly_aug import Unsupervised_augmentation, SupervisedFineTune_DataAug

kmer_encode_dic={'A': 0, "C": 1, "G": 2, "T": 3}
def to_tensor(x_aug):
    signal_j, kmer_j, mean_j, std_j, intense_j, dwell_j, base_quality_j = x_aug
    signal_j = torch.tensor(signal_j, dtype=torch.float32)
    kmer_j = torch.tensor(kmer_j, dtype=torch.long)
    mean_j = torch.tensor(mean_j, dtype=torch.float32)
    std_j = torch.tensor(std_j, dtype=torch.float32)
    intense_j = torch.tensor(intense_j, dtype=torch.float32)
    dwell_j = torch.tensor(dwell_j, dtype=torch.float32)
    base_quality_j = torch.tensor(base_quality_j, dtype=torch.float32)
    return [signal_j, kmer_j, mean_j, std_j, intense_j, dwell_j, base_quality_j]
def load_predict_data(file):
    X,Y=[],[]
    with open(file) as f:
        for line in f:
            line=line.rstrip()
            items=line.split("\t")
            read_id=line.split("\t")[0]
            contig=line.split("\t")[1]
            position=line.split("\t")[2]
            motif=line.split("\t")[3]
            signals="|".join(items[9:14]).split("|")
            signal=np.array([float(signal) for signal in signals])
            kmer = items[3]
            kmer=np.array([kmer_encode_dic[base] for base in kmer])
            mean = np.array([float(item) for item in items[4].split("|")])
            std = np.array([float(item) for item in items[5].split("|")])
            intense = np.array([float(item) for item in items[6].split("|")])
            dwell = np.array([float(item) for item in items[7].split("|")])/200.0
            base_quality = np.array([float(item) for item in items[8].split("|")])/40.0
            x=[signal, kmer, mean, std, intense, dwell,base_quality]
            X.append(x)
            Y.append("|".join([contig,position,motif,read_id]))
    return X,Y
def load_data_unsupervised(data_files, data_length): 
    X = []
    Y = []
    file_data_counts = {}
    total_data_count = 0  
    for file,labels in data_files:
        with open(file) as f:
            count = 0
            for line in f:
                if line.startswith("#") or line.startswith("read_id") or line.startswith("sig_-2"):
                    continue
                line = line.rstrip()
                items = line.split("\t")
                signals = "|".join(items[9:14]).split("|")
                signal = np.array([float(signal) for signal in signals])
                kmer = items[3]
                kmer = np.array([kmer_encode_dic[base] for base in kmer])
                mean = np.array([float(item) for item in items[4].split("|")])
                std = np.array([float(item) for item in items[5].split("|")])
                intense = np.array([float(item) for item in items[6].split("|")])
                dwell = np.array([float(item) for item in items[7].split("|")]) / 200.0
                base_quality = np.array([float(item) for item in items[8].split("|")]) / 40.0
                x = [signal, kmer, mean, std, intense, dwell, base_quality]
                X.append(x)
                Y.append(labels)
                count += 1
                if count >= data_length:  
                    break
            file_data_counts[file] = count
            total_data_count += count
    combined = list(zip(X, Y))
    random.shuffle(combined)
    X[:], Y[:] = zip(*combined)
    for file, count in file_data_counts.items():
        print(f"Loaded {count} records from file {file}")
    return (X,Y)
def load_data_supervised(data_files, data_length, validation_split=0.0, balance_type="none"):
    X = []
    Y = []
    file_data_counts = {}  
    total_data_count = 0  
    positive_samples = []  
    negative_samples = []  
    for file, label in data_files:
        with open(file) as f:
            count = 0
            for line in f:
                if line.startswith("#") or line.startswith("read_id") or line.startswith("sig_-2"):
                    continue
                line = line.rstrip()
                items = line.split("\t")
                signals = "|".join(items[9:14]).split("|")
                signal = np.array([float(signal) for signal in signals], dtype=np.float32)
                kmer = items[3]
                kmer = np.array([kmer_encode_dic[base] for base in kmer], dtype=np.int32)
                mean = np.array([float(item) for item in items[4].split("|")], dtype=np.float32)
                std = np.array([float(item) for item in items[5].split("|")], dtype=np.float32)
                intense = np.array([float(item) for item in items[6].split("|")], dtype=np.float32)
                dwell = np.array([float(item) for item in items[7].split("|")], dtype=np.float32) / 200.0
                base_quality = np.array([float(item) for item in items[8].split("|")], dtype=np.float32)/40.0

                x = [signal, kmer, mean, std, intense, dwell, base_quality]
                if label == 1: 
                    positive_samples.append((x, label))
                else:
                    negative_samples.append((x, label))
                count += 1
                if count >= data_length:
                    break
            file_data_counts[file] = count
            total_data_count += count
    combined = positive_samples + negative_samples
    random.shuffle(combined)
    X, Y = zip(*combined)
    
    for file, count in file_data_counts.items():
        print(f"Loaded {count} records from file {file}")
    
    num_samples = len(X)
    val_size = int(num_samples * validation_split)
    
    X_train = X[val_size:]
    Y_train = Y[val_size:]
    X_val = X[:val_size]
    Y_val = Y[:val_size]
    
    return (X_train, Y_train), (X_val, Y_val)
class UnlabeledDataset(Dataset):
    def __init__(self, x,y):
        self.x = x
        self.y = y
        self.augmenter = Unsupervised_augmentation(
            jitter_ratio=0.1, 
            scaling_ratio=0.1, 
            max_segments=5, 
            frequency_mask_ratio=0.1, 
            frequency_add_ratio=0.1
            )
    def __getitem__(self, index):
        x = self.x[index]
        y = self.y[index]
        signal, kmer, mean, std, intense, dwell, base_quality = x
        if not isinstance(signal, torch.Tensor):
            signal = torch.tensor(signal, dtype=torch.float32)
            
        signal = signal.unsqueeze(0).unsqueeze(2)
        t1,t2 = self.augmenter(signal)
        kmer = torch.tensor(kmer, dtype=torch.long)
        mean = torch.tensor(mean, dtype=torch.float32)

        std = torch.tensor(std, dtype=torch.float32)

        intense = torch.tensor(intense, dtype=torch.float32)


        dwell = torch.tensor(dwell, dtype=torch.float32)

        base_quality = torch.tensor(base_quality, dtype=torch.float32)

        x_t1 = [t1, kmer, mean,std,intense,dwell,base_quality]
        x_t2 = [t2, kmer, mean,std,intense,dwell,base_quality]

        return x_t1,x_t2,y

    def __len__(self):
        return len(self.x)
class SupervisedDataset(Dataset):
    def __init__(self, x, y, augment=False, num_aug=2):
        self.x = x
        self.y = y
        self.augment = augment
        self.num_aug = num_aug if augment else 1

    def __getitem__(self, index):
        if self.augment:
            sample_idx = index // self.num_aug
            aug_idx = index % self.num_aug
        else:
            sample_idx = index
            aug_idx = 0
            
        x = self.x[sample_idx]
        y = self.y[sample_idx]
        
        signal, kmer, mean, std, intense, dwell, base_quality = x
        signal = torch.tensor(signal, dtype=torch.float32)

        if self.augment:
            augmented_signals = SupervisedFineTune_DataAug(signal.unsqueeze(1))
            t = augmented_signals[aug_idx]
            
        else:
            t = signal  
        kmer = torch.tensor(kmer, dtype=torch.long)
        mean = torch.tensor(mean, dtype=torch.float32)
        std = torch.tensor(std, dtype=torch.float32)
        intense = torch.tensor(intense, dtype=torch.float32)
        dwell = torch.tensor(dwell, dtype=torch.float32)
        base_quality = torch.tensor(base_quality, dtype=torch.float32)

        features = [t.flatten(), kmer, mean, std, intense, dwell, base_quality] 
        features_org = [signal,kmer,mean,std,intense,dwell,base_quality]

        y = torch.tensor(y, dtype=torch.float32).squeeze()  

        return features,features_org, y
    def __len__(self):
        return len(self.x)*self.num_aug
    
class PredictDataset(Dataset):
    def __init__(self, x,y):
        self.x = x
        self.y = y
    def __getitem__(self, index):
        x = self.x[index]
        y = self.y[index]
        signal, kmer, mean, std, intense, dwell, base_quality = x
        if not isinstance(signal, torch.Tensor):
            signal = torch.tensor(signal, dtype=torch.float32)
        signal = signal.unsqueeze(0).unsqueeze(2)
        kmer = torch.tensor(kmer, dtype=torch.long)
        mean = torch.tensor(mean, dtype=torch.float32)
        std = torch.tensor(std, dtype=torch.float32)
        intense = torch.tensor(intense, dtype=torch.float32)
        dwell = torch.tensor(dwell, dtype=torch.float32)
        base_quality = torch.tensor(base_quality, dtype=torch.float32)
        x_t1 = [signal, kmer, mean,std,intense,dwell,base_quality]
        return x_t1,y
    def __len__(self):
        return len(self.x)
    
