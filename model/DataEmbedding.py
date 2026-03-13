import torch
import torch.nn.functional as F
import torch.nn as nn
import math

class PositionalEmbedding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super(PositionalEmbedding, self).__init__()
        pe = torch.zeros(max_len, d_model).float()
        pe.requires_grad = False
        position = torch.arange(0, max_len).float().unsqueeze(1)
        div_term = (torch.arange(0, d_model, 2).float() * -(math.log(10000.0) / d_model)).exp()
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0)
        self.register_buffer('pe', pe)
    def forward(self, x):
        return self.pe[:, :x.size(1)]
class TokenEmbedding(nn.Module):
    def __init__(self, c_in, d_model):
        super(TokenEmbedding, self).__init__()
        padding = 1 if torch.__version__ >= '1.5.0' else 2
        self.tokenConv = nn.Conv1d(in_channels=c_in, out_channels=d_model,kernel_size=3, padding=padding, padding_mode='circular', bias=False)
        for m in self.modules():
            if isinstance(m, nn.Conv1d):
                nn.init.kaiming_normal_(m.weight, mode='fan_in', nonlinearity='leaky_relu')
    def forward(self, x):
        x = self.tokenConv(x.permute(0, 2, 1)).transpose(1, 2)
        return x
class DataEmbedding(nn.Module):
    def __init__(self, c_in, d_model, dropout=0.05):
        super(DataEmbedding, self).__init__()
        self.value_embedding = TokenEmbedding(c_in=c_in, d_model=d_model)
        self.position_embedding = PositionalEmbedding(d_model=d_model)
        self.layer_norm = nn.LayerNorm(d_model)
        self.dropout = nn.Dropout(p=dropout)
    def forward(self, x):
        x = self.value_embedding(x) + self.position_embedding(x)
        x = self.layer_norm(x)
        return self.dropout(x)
class StatsGRU(nn.Module):
    def __init__(self, input_dim=9, hidden_dim=64, output_dim=128):
        super(StatsGRU, self).__init__()
        self.lstm = nn.LSTM(input_size=input_dim,hidden_size=64,batch_first=True,bidirectional=True,dropout=0.3)
        self.linear = nn.Linear(128,64)
    def forward(self, x_stats):
        output, (h_n,c_n) = self.lstm(x_stats)  
        hidden_state = h_n.permute(1, 0, 2)  
        hidden_state = hidden_state.reshape(hidden_state.shape[0], -1)  
        output = output.reshape(hidden_state.shape[0], -1)
        hidden_state=self.linear(hidden_state)
        return output,hidden_state 
if __name__ == '__main__':
    block = StatsGRU(256, 5,9)  
    input = torch.rand(500, 1, 500)
    output,hidden_state = block(input)
    print(hidden_state.shape)