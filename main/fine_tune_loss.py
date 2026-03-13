import torch
import torch.nn as nn
import torch.nn.functional as F

class ContrastiveLoss(nn.Module):
    def __init__(self, margin=0.5):
        super(ContrastiveLoss, self).__init__()
        self.margin = margin
    def forward(self, x, labels):
        batch_size, dim = x.size()
        cosine_similarity = F.cosine_similarity(x.unsqueeze(1), x.unsqueeze(0), dim=2)
        cosine_distance = 1 - cosine_similarity
        labels_matrix = labels.unsqueeze(1) == labels.unsqueeze(0)  
        labels_matrix = labels_matrix.float()  
        mask = torch.eye(batch_size, device=x.device).bool()
        labels_matrix = labels_matrix.masked_fill(mask, 0.0)
        cosine_distance = cosine_distance.masked_fill(mask, 0.0)
        positive_loss = labels_matrix * torch.pow(cosine_distance, 2)
        negative_loss = (1.0 - labels_matrix) * torch.pow(torch.clamp(self.margin - cosine_distance, min=0.0), 2)
        loss_contrastive = positive_loss + negative_loss
        loss = torch.mean(loss_contrastive)
        return loss