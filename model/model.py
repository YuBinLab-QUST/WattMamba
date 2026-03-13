import torch
import os
import sys
current_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.abspath(os.path.join(current_dir, os.pardir))
sys.path.insert(0, project_root)
from model.Wave_multi_scale import Down_wt
from model.ma_layer import MA_Layer3
import torch.nn as nn
from model.DataEmbedding import StatsGRU
class RMSNorm(nn.Module):
    def __init__(self,
                 d_model: int,
                 eps: float = 1e-5):
        super().__init__()
        self.eps = eps
        self.weight = nn.Parameter(torch.ones(d_model))

    def forward(self, x):
        output = x * torch.rsqrt(x.pow(2).mean(-1, keepdim=True) + self.eps) * self.weight
        return output

class WaveCrossMamba(nn.Module):
    def __init__(self, device,d_model=64,vocab_size=5, embedding_size=4):
        super(WaveCrossMamba, self).__init__()
        self.d_model = d_model
        self.device = device
        self.wavalet = Down_wt(in_ch=1, out_ch=64)
        self.gru = StatsGRU(input_dim=9,hidden_dim=64,output_dim=64)
        self.layers = nn.ModuleList([
            MA_Layer3(
                d_model=64,
                d_state=16,
                d_conv=4,
                dropout=0.3,
            ) for _ in range(1)
        ])
        self.embed = nn.Embedding(vocab_size, embedding_size)
        self.linear = nn.Linear(9, d_model)
        self.projection_head = nn.Sequential(
            nn.Linear(768, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(),
            nn.Dropout(p=0.4),
            nn.Linear(512, 256),
            nn.BatchNorm1d(256),
            nn.ReLU(),
            nn.Linear(256, 256),
        )
        self.init_weights()
    def init_weights(self):
        for m in self.modules():
            if isinstance(m, nn.Linear):
                nn.init.xavier_uniform_(m.weight)
                if m.bias is not None:
                    nn.init.zeros_(m.bias)
            elif isinstance(m, nn.Conv1d):
                nn.init.kaiming_normal_(m.weight, mode='fan_out', nonlinearity='relu')
                if m.bias is not None:
                    nn.init.zeros_(m.bias)
            elif isinstance(m, nn.Embedding):
                nn.init.xavier_uniform_(m.weight)
            elif isinstance(m, nn.BatchNorm1d):
                nn.init.constant_(m.weight, 1.0)
                nn.init.constant_(m.bias, 0.0)

    def forward(self, x, kmer, mean, std, intense, dwell, base_quality):
        x_signal = x
        x_signal = x_signal.squeeze(1)
        x_signal = x_signal.permute(0,2,1)
        x_signal = self.wavalet(x_signal)
        x_signal = x_signal.permute(0,2,1)

        kmer_embedded = self.embed(kmer)
        mean = mean.view(-1, kmer.size(1), 1).float()
        std = std.view(-1, kmer.size(1), 1).float()
        intense = intense.view(-1, kmer.size(1), 1).float()
        dwell = dwell.view(-1, kmer.size(1), 1).float()
        base_quality = base_quality.view(-1, kmer.size(1), 1).float()
        features = torch.cat((kmer_embedded, mean, std, intense, dwell, base_quality), dim=2)
        out,hidden_state = self.gru(features)
        hidden_state = hidden_state.unsqueeze(1)
        signal_features = x_signal
        for layer in self.layers:
            signal_features = layer(signal_features,hidden_state)
        mean = signal_features.mean(dim=1)
        signal_features = signal_features[:, -1, :]
        output = torch.cat([signal_features,out,mean],dim=-1)
        feature = self.projection_head(output)
        return feature,feature
class AnomalyDetectionModel(nn.Module):
    def __init__(self, feature_dim, num_classes=2, dropout=0.5):
        super(AnomalyDetectionModel, self).__init__()
        self.classifier = nn.Sequential(
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.BatchNorm1d(128),                 
            nn.Dropout(p=dropout),            
            nn.Linear(128, num_classes)        
        )
        self._init_weights()
    def _init_weights(self):
        for m in self.classifier:
            if isinstance(m, nn.Linear):
                nn.init.xavier_uniform_(m.weight)
                if m.bias is not None:
                    nn.init.zeros_(m.bias)

    def forward(self, feaures):
        return self.classifier(feaures)
