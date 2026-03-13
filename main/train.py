import os
import sys
import csv
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from tqdm import tqdm
from sklearn.metrics import accuracy_score
current_dir = os.path.dirname(os.path.abspath(__file__))        
project_root = os.path.abspath(os.path.join(current_dir, os.pardir))
sys.path.insert(0, project_root)
from utils.contrastive_loss import NTXentLoss, ContrastiveLoss
from pathlib import Path
ROOT_DIR = Path(project_root)
SAVE_DIR = ROOT_DIR / "save_model"
SAVE_DIR.mkdir(parents=True, exist_ok=True)


def append_metrics_csv(csv_path, row_dict, fieldnames):
    os.makedirs(os.path.dirname(csv_path), exist_ok=True)
    write_header = (not os.path.exists(csv_path)) or (os.path.getsize(csv_path) == 0)
    with open(csv_path, "a", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        if write_header:
            w.writeheader()
        w.writerow(row_dict)
def freeze(pretrain_model, anomaly_model):
    for param in pretrain_model.parameters():
        param.requires_grad = False
    for param in pretrain_model.projection_head.parameters():
        param.requires_grad = True
    return [p for p in pretrain_model.parameters() if p.requires_grad] + list(anomaly_model.parameters())

def init_optimizer_and_scheduler(params, lr=0.001, weight_decay=1e-4):
    optimizer = torch.optim.AdamW(params, lr=lr, weight_decay=weight_decay)
    scheduler = torch.optim.lr_scheduler.ReduceLROnPlateau(optimizer, mode='min', factor=0.1, patience=3, verbose=True,threshold=1e-6,min_lr=1e-6)
    return optimizer, scheduler


def _to_device(x, device, squeeze_dim=None, float_tensor=False):
    if isinstance(x, torch.Tensor):
        tensor = x
    elif isinstance(x, np.ndarray):
        tensor = torch.from_numpy(x)
    elif isinstance(x, (list, tuple)):
        tensor = torch.tensor(x)
    else:
        raise TypeError(f"_to_device:  {type(x)}")

    if squeeze_dim is not None and tensor.dim() > squeeze_dim:
        tensor = tensor.squeeze(squeeze_dim)
    if float_tensor:
        tensor = tensor.to(device=device, dtype=torch.float32)
    else:
        tensor = tensor.to(device)

    return tensor



def preprocess_data(features, device, data_org=None):
    def process(group):
        signals, kmer, mean, std, intense, dwell, base_quality = group
        signals = _to_device(signals, device, squeeze_dim=1, float_tensor=True)
        kmer = _to_device(kmer, device)
        mean = _to_device(mean, device)
        std = _to_device(std, device)
        intense = _to_device(intense, device)
        dwell = _to_device(dwell, device)
        base_quality = _to_device(base_quality, device)
        return signals, kmer, mean, std, intense, dwell, base_quality

    group1 = process(features)
    if data_org is not None:
        group2 = process(data_org)
        return tuple(torch.cat([g1, g2], dim=0) for g1, g2 in zip(group1, group2))
    else:
        return group1
    
def train_model_with_contrastive_anomaly_detection(model, unlabeled_loader, optimizer, device,epochs=20, temperature=0.1, patience=5, batch_size=512, model_path=None):
    ntxent = NTXentLoss(device, batch_size, temperature, use_cosine_similarity=True)
    scheduler = optim.lr_scheduler.ReduceLROnPlateau(
        optimizer, mode='min', factor=0.5, patience=3, verbose=True,
        threshold=1e-6, min_lr=1e-6
    )
    best_loss = float('inf')
    epochs_no_improve = 0

    for epoch in range(1, epochs + 1):
        model.train()
        running_loss, total_samples = 0.0, 0
        for x_t1, x_t2, _ in tqdm(unlabeled_loader, desc=f"Epoch {epoch}/{epochs}"):
            signals, kmer_all, mean_all, std_all, intense_all, dwell_all, base_quality_all = \
                preprocess_data(x_t1, device, x_t2)
            features_all, _ = model(signals, kmer_all, mean_all, std_all, intense_all, dwell_all, base_quality_all)
            x1, x2 = torch.chunk(features_all, 2)
            loss = 0.5 * (ntxent(x1, x2) + ntxent(x2, x1))
            optimizer.zero_grad()
            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
            optimizer.step()
            running_loss += loss.item() * batch_size
            total_samples += batch_size

        epoch_loss = running_loss / total_samples
        scheduler.step(epoch_loss)
        if epoch_loss < best_loss:
            best_loss = epoch_loss
            epochs_no_improve = 0
            torch.save(model.state_dict(), model_path)
        else:
            epochs_no_improve += 1
            if epochs_no_improve >= patience:
                break
    return best_loss

def val_fine_tune(model, fine_tune_model, val_loader, device, criterion):
    model.eval()
    fine_tune_model.eval()
    val_loss = 0.0
    all_preds, all_labels = [], []
    with torch.no_grad():
        for features, org, targets in tqdm(val_loader, desc="Evaluating", leave=False):
            x, kmer, mean, std, intense, dwell, base_quality = org
            x = _to_device(x, device)
            kmer = _to_device(kmer, device)
            mean = _to_device(mean, device)
            std = _to_device(std, device)
            intense = _to_device(intense, device)
            dwell = _to_device(dwell, device)
            base_quality = _to_device(base_quality, device)
            targets = _to_device(targets, device)
            if targets.dtype != torch.long:
                targets = targets.long()
            x = x.unsqueeze(2)
            logits, _ = model(x, kmer, mean, std, intense, dwell, base_quality)
            y_pred = fine_tune_model(logits)
            loss = criterion(y_pred, targets)
            val_loss += loss.item() * targets.size(0)
            preds = torch.argmax(y_pred, dim=1)
            all_preds.append(preds.cpu())
            all_labels.append(targets.cpu())

    avg_loss = val_loss / len(val_loader.dataset)
    all_preds = torch.cat(all_preds).numpy()
    all_labels = torch.cat(all_labels).numpy()
    accuracy = accuracy_score(all_labels, all_preds) * 100
    print(f" avg_loss: {avg_loss:.6f},accuracy : {accuracy:.2f}%")
    return avg_loss, accuracy

def fine_tune(model, fine_tune_model, device, train_loader, val_loader, num_epochs, lr, modified):

    model, fine_tune_model = model.to(device), fine_tune_model.to(device)
    optimizer_model, scheduler_model = init_optimizer_and_scheduler(model.parameters(), lr, 1e-5)
    optimizer_head, scheduler_head = init_optimizer_and_scheduler(fine_tune_model.parameters(), lr, 1e-5)
    criterion = nn.CrossEntropyLoss()
    contrastive_loss = ContrastiveLoss()

    best_val_acc = 0.0
    early_stop_counter = 0
    best_val_loss = float('inf')
    train_losses, val_losses, train_accuracies, val_accuracies, epochs_list = [], [], [], [], []

    for epoch in range(1, num_epochs + 1):
        model.train()
        fine_tune_model.train()
        total_loss = 0.0
        all_preds, all_labels = [], []
        for features, data_org, targets in tqdm(train_loader, desc="Training", leave=False):
            signals, kmer_all, mean_all, std_all, intense_all, dwell_all, base_quality_all = \
                preprocess_data(features, device)
            targets = _to_device(targets, device)
            if targets.dtype != torch.long:
                targets = targets.long()
            signals = signals.unsqueeze(2)
            optimizer_model.zero_grad()
            optimizer_head.zero_grad()
            logits, _ = model(signals, kmer_all, mean_all, std_all, intense_all, dwell_all, base_quality_all)
            loss_contrast = contrastive_loss(logits, targets)
            y_pred = fine_tune_model(logits)
            loss_ce = criterion(y_pred, targets)
            loss = loss_ce + 0.8 * loss_contrast
            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
            optimizer_model.step()
            optimizer_head.step()
            total_loss += loss.item() * targets.size(0)
            preds = torch.argmax(y_pred, dim=1)
            all_preds.append(preds.cpu())
            all_labels.append(targets.cpu())

        avg_train_loss = total_loss / len(train_loader.dataset)
        all_preds = torch.cat(all_preds).numpy()
        all_labels = torch.cat(all_labels).numpy()
        train_acc = accuracy_score(all_labels, all_preds) * 100
        print(f"avg_train_loss: {avg_train_loss:.6f}, train_acc: {train_acc:.2f}%")
        avg_val_loss, val_acc = val_fine_tune(model, fine_tune_model, val_loader, device, criterion)
        scheduler_model.step(avg_val_loss)
        scheduler_head.step(avg_val_loss)
        train_losses.append(avg_train_loss)
        val_losses.append(avg_val_loss)
        train_accuracies.append(train_acc)
        val_accuracies.append(val_acc)
        epochs_list.append(epoch)
        if avg_val_loss < best_val_loss:
            best_val_loss = avg_val_loss
            early_stop_counter = 0
        else:
            early_stop_counter += 1
            print(f"stop: {early_stop_counter}/4")
        if early_stop_counter >= 4:
            break
        if val_acc > best_val_acc:
            best_val_acc = val_acc
            torch.save(model.state_dict(), SAVE_DIR / f"backdone_{modified}.pth")
            torch.save(fine_tune_model.state_dict(), SAVE_DIR / f"classier_{modified}.pth")
            print("best model")
    return 0

def fine_tune_two(model, fine_tune_model, device, train_loader, val_loader, num_epochs, lr, modified):
    model, fine_tune_model = model.to(device), fine_tune_model.to(device)
    trainable_params = freeze(model, fine_tune_model)
    optimizer, scheduler = init_optimizer_and_scheduler(trainable_params, lr)
    criterion = nn.CrossEntropyLoss()
    contrastive_loss = ContrastiveLoss()
    best_val_acc = 0.0
    early_stop_counter = 0
    best_val_loss = float('inf')
    for epoch in range(1, num_epochs + 1):
        model.train()
        fine_tune_model.train()
        total_loss = 0.0
        all_preds, all_labels = [], []
        for features, data_org, targets in tqdm(train_loader, desc="Training", leave=False):
            signals, kmer_all, mean_all, std_all, intense_all, dwell_all, base_quality_all = \
                preprocess_data(features, device)
            targets = _to_device(targets, device)
            if targets.dtype != torch.long:
                targets = targets.long()
            signals = signals.unsqueeze(2)
            optimizer.zero_grad()
            logits, _ = model(signals, kmer_all, mean_all, std_all, intense_all, dwell_all, base_quality_all)
            loss_contrast = contrastive_loss(logits, targets)
            y_pred = fine_tune_model(logits)
            loss_ce = criterion(y_pred, targets)
            loss = loss_ce + 0.8 * loss_contrast
            loss.backward()
            torch.nn.utils.clip_grad_norm_(trainable_params, max_norm=1.0)
            optimizer.step()
            total_loss += loss.item() * targets.size(0)
            preds = torch.argmax(y_pred, dim=1)
            all_preds.append(preds.cpu())
            all_labels.append(targets.cpu())
        avg_train_loss = total_loss / len(train_loader.dataset)
        all_preds = torch.cat(all_preds).numpy()
        all_labels = torch.cat(all_labels).numpy()
        train_acc = accuracy_score(all_labels, all_preds) * 100
        print(f"avg_train_loss: {avg_train_loss:.6f}, train_acc: {train_acc:.2f}%")
        avg_val_loss, val_acc = val_fine_tune(model, fine_tune_model, val_loader, device, criterion)
        scheduler.step(avg_val_loss)
        if avg_val_loss < best_val_loss:
            best_val_loss = avg_val_loss
            early_stop_counter = 0
        else:
            early_stop_counter += 1
            print(f"stop: {early_stop_counter}/4")
        if early_stop_counter >= 4:
            break
        if val_acc > best_val_acc:
            best_val_acc = val_acc
            torch.save(model.state_dict(), SAVE_DIR / f"backdone_{modified}.pth")
            torch.save(fine_tune_model.state_dict(), SAVE_DIR / f"classier_{modified}.pth")
            print("best model saved")
    return avg_val_loss
