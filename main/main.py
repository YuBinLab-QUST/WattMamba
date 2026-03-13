import torch
import sys
import os
import time
import argparse
from torch.utils.data import DataLoader
from collections import Counter

current_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.abspath(os.path.join(current_dir, os.pardir))
sys.path.insert(0, project_root)
from model.model import WaveCrossMamba, AnomalyDetectionModel
from utils.dataloader import (
    UnlabeledDataset,
    SupervisedDataset,
    load_data_supervised,
    load_data_unsupervised,
)
from anomaly_detection import test_model
from train import (
    train_model_with_contrastive_anomaly_detection,
    fine_tune,
    fine_tune_two,
)

torch.cuda.empty_cache()


# ------------------------------------------------------------
# Data loading helpers
# ------------------------------------------------------------
def load_unlabeled_dataloader(data_files, data_length, batch_size):
    """
    Build a DataLoader for unsupervised / unlabeled-style training.

    Args:
        data_files: list of tuples (file_path, label) used by load_data_unsupervised.
        data_length: number of samples (or max length) to load.
        batch_size: batch size.

    Returns:
        DataLoader for UnlabeledDataset.
    """
    X_train, y_train = load_data_unsupervised(data_files, data_length)
    print("Training set label distribution:", Counter(y_train))
    dataset = UnlabeledDataset(X_train, y_train)
    loader = DataLoader(
        dataset,
        batch_size=batch_size,
        shuffle=True,
        num_workers=16,
        pin_memory=True,
        drop_last=True,
    )
    return loader


def load_supervised_dataloaders(
    data_files, data_length, batch_size, augment=True, val_split=0.2, num_aug=3
):
    """
    Build DataLoaders for supervised training and validation.

    Args:
        data_files: list of tuples (file_path, label).
        data_length: number of samples (or max length) to load.
        batch_size: batch size.
        augment: whether to enable augmentation for the training set.
        val_split: validation split ratio.
        num_aug: number of augmentations per sample (training only).

    Returns:
        (train_loader, val_loader)
    """
    (X, Y), (X_val, Y_val) = load_data_supervised(
        data_files, data_length, validation_split=val_split
    )
    print("Training set label distribution:", Counter(Y))

    train_dataset = SupervisedDataset(X, Y, augment=augment, num_aug=num_aug)
    val_dataset = SupervisedDataset(X_val, Y_val, augment=False, num_aug=1)

    train_loader = DataLoader(
        train_dataset,
        batch_size=batch_size,
        shuffle=True,
        num_workers=20,
        pin_memory=True,
        drop_last=True,
    )
    val_loader = DataLoader(
        val_dataset,
        batch_size=batch_size,
        shuffle=False,
        num_workers=2,
        pin_memory=True,
        drop_last=True,
    )
    return train_loader, val_loader


# ------------------------------------------------------------
# Model loading helper
# ------------------------------------------------------------
def load_models(device, pretrain_path=None, finetune_path=None):
    """
    Initialize feature extractor + classifier, and optionally load checkpoints.

    Args:
        device: torch device.
        pretrain_path: checkpoint path for feature extractor (optional).
        finetune_path: checkpoint path for classifier (optional).

    Returns:
        (feature_extractor, classifier)
    """
    feature_extractor = WaveCrossMamba(device=device, d_model=128).to(device)
    classifier = AnomalyDetectionModel(feature_dim=128, num_classes=2).to(device)

    if pretrain_path:
        feature_extractor.load_state_dict(torch.load(pretrain_path, map_location=device))
    if finetune_path:
        classifier.load_state_dict(torch.load(finetune_path, map_location=device))

    return feature_extractor, classifier


# ------------------------------------------------------------
# Training / evaluation entrypoints
# ------------------------------------------------------------
def unsupervised_train(args, device):
    """
    Run unsupervised pretraining (contrastive + anomaly detection style training).
    """
    print("Starting unsupervised training...")
    data_files = [
        (args.pretrain_data1, 0),
        (args.pretrain_data2, 0),
    ]
    loader = load_unlabeled_dataloader(data_files, int(2e6), args.batch_size)
    print("Unlabeled training data loaded.")

    model = WaveCrossMamba(device=device, d_model=128).to(device)
    optimizer = torch.optim.AdamW(model.parameters(), lr=args.learning_rate)

    print("Training unsupervised model...")
    train_model_with_contrastive_anomaly_detection(
        model,
        loader,
        optimizer,
        device,
        args.epoch,
        temperature=0.1,
        patience=5,
        batch_size=args.batch_size,
        model_path=args.pretrain_model_path
    )


def fine_tune_train(args, device):
    """
    Run supervised fine-tuning (single-stage).
    """
    print("Starting supervised fine-tuning...")
    feature_extractor, classifier = load_models(device, pretrain_path=args.pretrain_model_path)

    data_files = [(args.train_data_mod, 1), (args.train_data_unmod, 0)]
    train_loader, val_loader = load_supervised_dataloaders(data_files, int(2.5e5), args.batch_size)
    print("Data loaded.")
    fine_tune(
        feature_extractor,
        classifier,
        device,
        train_loader,
        val_loader,
        num_epochs=args.epoch,
        lr=args.learning_rate,
        modified=args.modified,
    )


def two_stage_fine_tune(args, device):
    """
    Run two-stage fine-tuning (load pretrained + existing finetuned classifier, then continue training).
    """
    print("Starting two-stage fine-tuning...")
    feature_extractor, classifier = load_models(device,pretrain_path=args.pretrain_model_path,finetune_path=args.finetune_model_path,)
    data_files = [(args.train_data_mod, 1), (args.train_data_unmod, 0)]
    train_loader, val_loader = load_supervised_dataloaders(
        data_files,
        int(args.length),
        args.batch_size,
        augment=True,
        val_split=0.2,
        num_aug=2,
    )
    fine_tune_two(
        feature_extractor,
        classifier,
        device,
        train_loader,
        val_loader,
        num_epochs=args.epoch,
        lr=args.learning_rate,
        modified=args.modified,
    )


def evaluate(args, device):
    """
    Evaluate the model on the test set.
    """
    print("Starting model evaluation...")
    feature_extractor, classifier = load_models(device,pretrain_path=args.pretrain_model_path,finetune_path=args.finetune_model_path,)
    data_files = [(args.test_data_mod, 1), (args.test_data_unmod, 0)]
    (X_test, Y_test), _ = load_data_supervised(data_files, int(3000), validation_split=0.0)
    test_dataset = SupervisedDataset(X_test, Y_test, augment=False, num_aug=1)
    test_loader = DataLoader(
        test_dataset,
        batch_size=args.batch_size,
        shuffle=False,
        num_workers=8,
        pin_memory=True,
    )

    print("Test data loaded.")
    test_model(pretrain_model=feature_extractor, model=classifier, test_loader=test_loader, device=device)


def main(args):
    """
    Dispatch to different running modes.
    """
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    if args.run == "pretrain":
        unsupervised_train(args, device)
    elif args.run == "fine":
        fine_tune_train(args, device)
    elif args.run == "two_fine":
        two_stage_fine_tune(args, device)
    elif args.run == "test":
        evaluate(args, device)
    else:
        print(f"Unrecognized run mode: {args.run}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="WattmaMod: Multi-type RNA Modification Detection")
    parser.add_argument("--run",default="fine",help=('Mode to run: pretrain (unsupervised pretraining), fine (supervised fine-tuning),two_fine (two-stage fine-tuning), test (evaluation)'),)
    parser.add_argument("--pretrain_data1",default="hek293t1.tsv",help="Path to the first unlabeled pretraining dataset",)
    parser.add_argument("--pretrain_data2",default="hek293t2.tsv",help="Path to the second unlabeled pretraining dataset",)
    parser.add_argument("--train_mod",default="/root/sunxh/WattmaMod/dataset/fine.ivet.m5c.tsv",help="Path to labeled modified training data",)
    parser.add_argument("--train_unmod",default="/root/sunxh/WattmaMod/dataset/fine.ivet.unmod.c.tsv",help="Path to labeled unmodified training data",)
    parser.add_argument("--test_mod",default="/root/sunxh/WattmaMod/dataset/test.ivet.m1a.tsv",help="Path to labeled modified test data",)
    parser.add_argument("--test_unmod",default="/root/sunxh/WattmaMod/dataset/test.ivet.unmod.a.tsv",help="Path to labeled unmodified test data",)
    parser.add_argument("--pretrain_model_path",default="/mnt/sunxh/sunxh/wattmamba/save_result/save_model/m5c_model.pth",help="Path to the pretrained feature extractor checkpoint",)
    parser.add_argument("--finetune_model_path",default="/mnt/sunxh/sunxh/wattmamba/save_result/save_model/m5c_classier.pth",help="Path to the fine-tuned classifier checkpoint",)
    parser.add_argument("--batch_size",type=int,default=512,help="Batch size for training and evaluation",)
    parser.add_argument("--epoch",type=int,default=50,help="Number of training epochs",)
    parser.add_argument("--learning_rate",type=float,default=0.001,help="Learning rate for the optimizer",)
    parser.add_argument("--gpu",default="0",help='GPU device id(s) to use, e.g.0, 1',)
    parser.add_argument("--modified",default="hm5c",help="RNA modification type used for training",)
    parser.add_argument("--length",default="2000",help="Input sequence length",)
    parser.add_argument("--seed",type=str,default="run",help="Random seed (string accepted; you may want to use int)",)
    args = parser.parse_args()
    os.environ["CUDA_VISIBLE_DEVICES"] = args.gpu
    main(args)
