import torch
from torch import nn
import warnings
warnings.filterwarnings('ignore')
from pytorch_wavelets import DWT1D
import torch.nn.functional as F
class Down_wt(nn.Module):
    def __init__(self, in_ch, out_ch, seq_len=500):
        super(Down_wt, self).__init__()
        self.seq_len = seq_len  
        self.wt = DWT1D(J=4, mode='zero', wave='db4')  
        self.cnn_1d = nn.Sequential(
            nn.Conv1d(in_channels=5,out_channels=64,kernel_size=3,stride=1,padding=0),
            nn.ReLU(),
            nn.MaxPool1d(kernel_size=2,padding=1),
            nn.Dropout(p=0.3),
            nn.Conv1d(in_channels=64,out_channels=64,kernel_size=2,stride=1,padding=0),
            nn.ReLU(),
        )
        self.channel_att = nn.Sequential(
            nn.Linear(5, 16),  
            nn.ReLU(),
            nn.Linear(16, 5),
            nn.Sigmoid()
        )
    def forward(self, x):
        yL, yH = self.wt(x)  
        yH1, yH2, yH3,yH4 = yH[0], yH[1], yH[2],yH[3]  
        yL = F.interpolate(yL, size=200, mode='linear', align_corners=False)
        yH1 = F.interpolate(yH1, size=200, mode='nearest')
        yH2 = F.interpolate(yH2, size=200, mode='nearest')
        yH3 = F.interpolate(yH3, size=200, mode='nearest')
        yH4 = F.interpolate(yH4, size=200, mode='nearest')
        multi_scale_feat = torch.cat([yL, yH1, yH2, yH3,yH4], dim=1) 
        channel_weights = self.channel_att(multi_scale_feat.mean(dim=-1))  
        weighted_feat = multi_scale_feat * channel_weights.unsqueeze(-1)
        output = self.cnn_1d(weighted_feat)
        return output
    
if __name__ == '__main__':
    block = Down_wt(1, 128)  
    input = torch.rand(500, 1, 500)
    output = block(input)
    print(output.shape)