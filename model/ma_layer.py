import torch
import torch.nn as nn
import warnings
import os
import sys
current_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.abspath(os.path.join(current_dir, os.pardir))
sys.path.insert(0, project_root)
warnings.filterwarnings('ignore')
from model.mamba2_simple import Mamba2Simple
from mamba_ssm import Mamba
class RMSNorm(nn.Module):
    def __init__(self, d_model: int, eps: float = 1e-5):
        super().__init__()
        self.eps = eps
        self.weight = nn.Parameter(torch.ones(d_model))
    def forward(self, x):
        output = x * torch.rsqrt(x.pow(2).mean(-1, keepdim=True) + self.eps) * self.weight
        return output
class GatedCrossAttention(nn.Module):
    """
    A gated cross-attention fusion module for integrating signal features
    with statistical features.

    This module adaptively fuses `x_signal` and `x_stats` by learning a
    gate score for each time step. The gate is computed from the concatenated
    signal and statistical representations, and is used to control how much
    statistical information is injected into the signal features. The fused
    output is then normalized with layer normalization.

    Args:
        d_model (int): Feature dimension of both the signal input and the
            statistical input.

    Inputs:
        x_signal (torch.Tensor): Signal feature tensor of shape
            (B, L, D), where B is the batch size, L is the sequence length,
            and D is the feature dimension.
        x_stats (torch.Tensor): Statistical feature tensor of shape
            (B, 1, D) or broadcastable to (B, L, D).

    Returns:
        torch.Tensor: Fused output tensor of shape (B, L, D).

    Note:
        - A scalar gate value is generated for each time step.
        - The statistical feature is expanded along the sequence dimension
          before fusion.
        - The output is computed with a residual-style fusion followed by
          layer normalization.
    """
    def __init__(self, d_model):
        super().__init__()
        self.gate_fc = nn.Sequential(
            nn.Linear(d_model * 2, d_model//2),  
            nn.ReLU(),
            nn.Linear(d_model//2, 1),
            nn.Sigmoid()
        )
        self.norm = nn.LayerNorm(d_model)  
    def forward(self, x_signal, x_stats):
        batch_size, seq_len, d_model = x_signal.shape
        x_stats_expanded = x_stats.expand(-1, seq_len, -1)
        gate_input = torch.cat([x_signal, x_stats_expanded], dim=-1)
        gate_scores = self.gate_fc(gate_input)
        gate_scores = gate_scores.squeeze(-1)
        gated_stats = gate_scores.unsqueeze(-1) * x_stats_expanded
        x_signal = self.norm(x_signal + gated_stats)
        return x_signal
class GatedCrossAttention(nn.Module):
    def __init__(self, d_model):
        super().__init__()
        self.gate_fc = nn.Sequential(
            nn.Linear(d_model * 2, d_model), 
            nn.ReLU(),
            nn.Linear(d_model, 1),
            nn.Sigmoid()
        )
        self.norm = nn.LayerNorm(d_model)  
    def forward(self, x_signal, x_stats):
        batch_size, seq_len, d_model = x_signal.shape
        x_stats_expanded = x_stats.expand(-1, seq_len, -1)  
        gate_input = torch.cat([x_signal, x_stats_expanded], dim=-1)  
        gate_scores = self.gate_fc(gate_input)  
        gate_scores = gate_scores.squeeze(-1)  
        gated_stats = gate_scores.unsqueeze(-1) * x_stats_expanded  
        x_signal = self.norm(x_signal + gated_stats)
        return x_signal
    
class MA_Layer3(nn.Module):
    def __init__(self, d_model, d_state, d_conv,headdim=8, dropout=0.3):
        super(MA_Layer3, self).__init__()
        self.cross_attn = GatedCrossAttention(d_model)
        self.mamba_layer = Mamba(d_model=d_model, d_state=16, d_conv=2,expand=1)
        self.dropout = nn.Dropout(dropout)
    def forward(self, x_signal, x_stats):
        attn_output = self.cross_attn(x_signal, x_stats)
        x_signal = self.mamba_layer(attn_output)
        return self.dropout(x_signal)
    
if __name__ == '__main__':
    x = torch.randn(20,100,128).to("cuda")
    features = torch.randn(20,5,128).to("cuda")
    model = MA_Layer3(128,64,4,2,0.5).to("cuda")
    output,features = model(x,features)
    print(output.shape,features.shape)

