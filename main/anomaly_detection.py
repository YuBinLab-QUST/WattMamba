import torch
import numpy as np
import torch
from sklearn.metrics import f1_score, precision_score, recall_score, precision_recall_curve
from collections import Counter

import torch.nn.functional as F
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    classification_report,
    confusion_matrix,
    roc_auc_score,
    roc_curve
)
from sklearn.metrics import confusion_matrix, classification_report, roc_auc_score, precision_recall_curve, auc
import os
import numpy as np
import pandas as pd
from sklearn.metrics import (
    confusion_matrix, classification_report,
    roc_auc_score, roc_curve,
    precision_recall_curve, auc
)

def test_model(pretrain_model, model, test_loader, device,
              out_dir="/mnt/sunxh/sunxh/project/ipynb_result",
              tag="wattmamod"):
    os.makedirs(out_dir, exist_ok=True)

    model.to(device)
    pretrain_model.to(device)

    all_labels = []
    all_preds = []
    all_probs = []

    model.eval()
    pretrain_model.eval()

    with torch.no_grad():
        for batch_idx, (data, rog, targets) in enumerate(test_loader):
            x, kmer, mean, std, intense, dwell, base_quality = data
            x = x.to(device)
            kmer = kmer.to(device)
            mean = mean.to(device)
            std = std.to(device)
            intense = intense.to(device)
            dwell = dwell.to(device)
            base_quality = base_quality.to(device)
            targets = targets.to(device)
            if targets.dtype != torch.long:
                targets = targets.long()
            x = x.unsqueeze(2)
            logits, ff = pretrain_model(x, kmer, mean, std, intense, dwell, base_quality)
            y_pred = model(logits).to(device)

            probs = torch.softmax(y_pred, dim=1).detach().cpu().numpy()[:, 1]

            all_labels.extend(targets.detach().cpu().numpy())
            all_preds.extend(np.argmax(y_pred.detach().cpu().numpy(), axis=1))
            all_probs.extend(probs)

    all_labels = np.array(all_labels, dtype=int)
    all_preds = np.array(all_preds, dtype=int)
    all_probs = np.array(all_probs, dtype=float)

    cm = confusion_matrix(all_labels, all_preds)
    tn, fp, fn, tp = cm.ravel()

    print("\nPerformance on all samples:")
    print("Confusion Matrix:")
    print(cm)
    print("\nClassification Report:")
    print(classification_report(all_labels, all_preds))

    # ROC / PR
    fpr, tpr, _ = roc_curve(all_labels, all_probs)
    roc_auc = auc(fpr, tpr)

    precision, recall, _ = precision_recall_curve(all_labels, all_probs)
    pr_auc = auc(recall, precision)

    positivity_rate = tp / (tp + fn) if (tp + fn) > 0 else 0.0
    prec_val = tp / (tp + fp) if (tp + fp) > 0 else 0.0
    rec_val  = tp / (tp + fn) if (tp + fn) > 0 else 0.0
    f1_val   = (2 * tp / (2 * tp + fp + fn)) if (2 * tp + fp + fn) > 0 else 0.0

    print(f"Precision: {prec_val}")
    print(f"Recall: {rec_val}")
    print(f"F1 Score: {f1_val}")
    print(f"ROC-AUC: {roc_auc}")
    print(f"PR-AUC: {pr_auc}")
    print(f"Positivity Rate: {positivity_rate}")

    pr_path  = os.path.join(out_dir, f"{tag}.inosine.pr.csv")
    roc_path = os.path.join(out_dir, f"{tag}.inosine.roc.csv")

    df_pr = pd.DataFrame({"recall": recall, "precision": precision})
    df_pr["pr_auc"] = pr_auc
    df_pr.to_csv(pr_path, sep="\t", index=False, float_format="%.15g")

    df_roc = pd.DataFrame({"fpr": fpr, "tpr": tpr})
    df_roc["roc_auc"] = roc_auc
    df_roc.to_csv(roc_path, sep="\t", index=False, float_format="%.15g")

    print("saved:", pr_path, roc_path)
    return roc_auc, pr_auc

