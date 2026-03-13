import torch
import torch.nn.functional as F
import torch.nn as nn

class NTXentLoss(torch.nn.Module):

    def __init__(self, device, batch_size, temperature, use_cosine_similarity):
        super(NTXentLoss, self).__init__()
        self.batch_size = batch_size
        self.temperature = temperature
        self.device = device
        self.softmax = torch.nn.Softmax(dim=-1)
        self.mask_samples_from_same_repr = self._get_correlated_mask().type(torch.bool)
        self.similarity_function = self._get_similarity_function(use_cosine_similarity)
        self.criterion = torch.nn.CrossEntropyLoss(reduction="sum")

    def _get_similarity_function(self, use_cosine_similarity):
        if use_cosine_similarity:
            self._cosine_similarity = torch.nn.CosineSimilarity(dim=-1)
            return self._cosine_simililarity
        else:
            return self._dot_simililarity

    def _get_correlated_mask(self):
        N = 2 * self.batch_size
        diag = torch.eye(N, device=self.device)
        l1 = torch.eye(N, device=self.device).roll(shifts=-self.batch_size, dims=1)
        l2 = torch.eye(N, device=self.device).roll(shifts=self.batch_size, dims=1)
        mask = diag + l1 + l2
        mask = (1 - mask).type(torch.bool)
        return mask

    @staticmethod
    def _dot_simililarity(x, y):
        v = torch.tensordot(x.unsqueeze(1), y.T.unsqueeze(0), dims=2)

        return v

    def _cosine_simililarity(self, x, y):

        v = self._cosine_similarity(x.unsqueeze(1), y.unsqueeze(0))
        return v

    def forward(self, zis, zjs):
        representations = torch.cat([zjs, zis], dim=0)

        similarity_matrix = self.similarity_function(representations, representations)

        l_pos = torch.diag(similarity_matrix, self.batch_size)
        r_pos = torch.diag(similarity_matrix, -self.batch_size)
        positives = torch.cat([l_pos, r_pos]).view(2 * self.batch_size, 1)

        negatives = similarity_matrix[self.mask_samples_from_same_repr].view(2 * self.batch_size, -1)

        logits = torch.cat((positives, negatives), dim=1)
        logits /= self.temperature

        labels = torch.zeros(2 * self.batch_size).to(self.device).long()
        loss = self.criterion(logits, labels)

        return loss / (2 * self.batch_size)

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