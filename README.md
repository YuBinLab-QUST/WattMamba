# WattMamba — High-Resolution RNA Modification Detection of Nanopore Sequencing with WattMamba

> Using *WattMamba* as the feature extractor, the pipeline combines contrastive learning with an anomaly-detection paradigm to enable self-training pretraining and supervised fine-tuning, supporting single-nucleotide detection of multiple modifications (m^6A, m^5C, m^1A, hm^5C, m^7G, inosine, Ψ).

---

## 1. Overview
- **self-training pretraining (`train`)**: contrastive representation learning + anomaly pretraining on unlabeled DRS segments.  
- **Single-stage fine-tuning (`fine`)**: train binary/multi-class classifiers on labeled data.  
- **Two-stage fine-tuning (`two_fine`)**: domain adaptation / low-shot refinement on top of pretrained weights.  
- **Evaluation (`test`)**: load feature extractor and classifier to evaluate on a held-out test set.

Core modules:
- `model/model`: backbone feature extractor (wavelet / cross-attention / SSM, etc.).  
- `utils/dataloader`: data loading & augmentation.  
- `train.py`: contrastive + anomaly training loops and fine-tuning.  
- `anomaly_detection.py`: evaluation logic.

---

## 2. Dependencies
- Python ≥ 3.9  
- PyTorch ≥ 2.1  
- Others: `numpy`, `scipy`, `pandas`, `tqdm`

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install numpy scipy pandas tqdm
```

---

## 3. Suggested Directory Layout
```text
WattMamba/
├── ipynb_result/                  # Jupyter Notebook: saved analysis results
├── model/                         # Core model definitions (WattMamba, AnomalyDetectionModel)
├── save_result/                   # Saved model artifacts
│   ├── other_base/                # hm5C, m7G, Inosine, Psu models
│   └── save_model/                # m1A, m6A, m5C and pre_trained models
├── train_test/                    # Training & evaluation scripts
│   ├── anomaly_detection.py
│   ├── main.py
│   ├── predict_site.py
│   └── train.py
│
└── utils/                         # Tools and data processing modules
    │
    │── anomaly_aug.py
    │── contrastive_loss.py
    │── dataloader.py
    │── fast5_signal.py
    │── raw_fast5_current_signal.py
    │── raw_signal_feature.py
    │── read_site.py
    │── signal_features.py
    │── train_test_split.py
    └── transcriptome_genome_location.py
```

---

## 4. Data Preparation
This repository expects **TSV** inputs.

- **pretraining**: list of `(path, label)` tuples, where `label` can denote positive/negative or data domain (for contrastive/anomaly formulation).  
- **Supervised training/evaluation**: paired list `[(path_mod, 1), (path_unmod, 0)]`.

> **Note**: `utils/dataloader.py` provides `load_data_unsupervised` / `load_data_supervised` to parse TSVs into model tensors `(X, y)`. Ensure your TSV columns match the implementation (e.g., raw current / event-level stats, length normalization or interpolation to a fixed length).

---

## 5. Usage
The entry script exposes four `--run` modes: `train | fine | two_fine | test`.

### 5.1 self-supervised pretraining
```bash
python main.py   --run train   --pretrain_data1 /path/to/pre.unmod.a.tsv   --pretrain_data2 /path/to/pre.m6a.tsv   --extra_data_mod /m6a.tsv   --extra_data_unmod /unmod.a.tsv   --batch_size 512 --epoch 30 --learning_rate 1e-3   --gpu 0 --pretrain_model_path /path/to/pre_trained.pth
```
Output: `save_result/pre_*.pth` (exact name depends on `train.py`).

### 5.2 Single-stage supervised fine-tuning
```bash
python main.py   --run fine   --pretrain_model_path /path/to/pre_trained.pth   --train_data_mod   /path/to/fine.ivet.m5c.tsv   --train_data_unmod /path/to/fine.ivet.unmod.c.tsv   --batch_size 512 --learning_rate 1e-3 --epoch 20   --modified m5c --gpu 0
```
Output: `save_result/fine_*.pth` (classifier head).

### 5.3 Two-stage fine-tuning
```bash
python main.py   --run two_fine   --pretrain_model_path /path/to/pre_*.pth   --finetune_model_path /path/to/fine_*.pth   --train_data_mod   /path/to/fine.hm5c.tsv   --train_data_unmod /path/to/fine.unmod.c.tsv   --batch_size 512 --learning_rate 1e-3 --epoch 20   --modified hm5c --gpu 0
```

### 5.4 Evaluation
```bash
python main.py   --run test   --pretrain_model_path /path/to/pre_*.pth   --finetune_model_path /path/to/fine_*.pth   --test_data_mod   /path/to/test.ivet.m1a.tsv   --test_data_unmod /path/to/test.ivet.unmod.a.tsv   --batch_size 512 --gpu 0
```
Metrics and logs are printed by `anomaly_detection.test_model`.

---

## 6. Arguments
| Argument | Default | Description |
|---|---:|---|
| `--run` | `fine` | Mode: `train` / `fine` / `two_fine` / `test` |
| `--pretrain_data1, --pretrain_data2` | example paths | Unlabeled TSVs for pretraining |
| `--extra_data_mod, --extra_data_unmod` | example paths | Additional unlabeled data |
| `--train_data_mod, --train_data_unmod` | example paths | Labeled TSVs for supervised training (1/0) |
| `--test_data_mod, --test_data_unmod` | example paths | Labeled TSVs for testing (1/0) |
| `--pretrain_model_path` | example path | Pretrained feature extractor weights |
| `--finetune_model_path` | example path | Fine-tuned classifier weights |
| `--batch_size` | `512` | Batch size for train/eval |
| `--epoch` | `30` | Training epochs (some modes override) |
| `--learning_rate` | `1e-3` | AdamW learning rate |
| `--gpu` | `"0"` | Visible GPU(s), e.g. `"0,1"` |
| `--modified` | `hm5c` | Target modification tag for current run |

---

## 7. Performance & Engineering Tips
- **DataLoader parallelism**: on Linux start with `num_workers=16`; on Windows reduce workers and keep the `if __name__ == "__main__":` guard (already present).  
- **Pinned memory**: `pin_memory=True` is enabled; consider `to(device, non_blocking=True)` if H2D becomes a bottleneck.  
- **Large batches**: lower `batch_size` or use gradient accumulation if VRAM is tight; increase `num_workers` and use fast storage for throughput.  
- **Resuming**: add epoch-level checkpoints via `torch.save/torch.load`; consider AMP to reduce memory.

---

## 8. Minimal Reproducible Workflow

**0) Data preprocessing**

- Use `ipynb_result/guppy_tombo_minimap2.ipynb` to prepare datasets (basecalling, alignment, resquiggle) and extract reads for downstream processing.
- Convert FAST5 to current-signal arrays using `utils/raw_fast5_current_signal.py`, then generate event-level and statistical feature TSVs via `utils/raw_signal_feature.py`.
- Split the dataset into training, validation, and testing subsets using `utils/train_test_split.py`.

```bash
# 1) Pretrain (optional)
python main.py --run train --pretrain_data1 pre.unmod.a.tsv --pretrain_data2 pre.m6a.tsv   --extra_data_mod fine.ivt.m6a.tsv --extra_data_unmod fine.ivt.unmod.a.tsv   --batch_size 512 --epoch 50 --learning_rate 1e-3 --gpu 0

# 2) Single-stage fine-tuning
python main.py --run fine --pretrain_model_path save_result/pre_ivet_m5c_wave.pth   --train_data_mod fine.ivet.m5c.tsv --train_data_unmod fine.ivet.unmod.c.tsv   --batch_size 512 --learning_rate 1e-3 --epoch 20 --gpu 0 --modified m5c

# 3) Evaluation
python main.py --run test --pretrain_model_path save_result/pre_ivet_m5c_wave.pth   --finetune_model_path save_result/fine_ivet_m5c_wave.pth   --test_data_mod test.ivet.m1a.tsv --test_data_unmod test.ivet.unmod.a.tsv   --batch_size 512 --gpu 0
```
