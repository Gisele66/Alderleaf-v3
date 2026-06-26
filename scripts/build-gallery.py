"""Crop work photos to uniform gallery card size (1024x605)."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "images"
OUT = SRC / "gallery"
TARGET = (1024, 605)
TARGET_AR = TARGET[0] / TARGET[1]

# filename, focal_x, focal_y (0–1; tune so equipment/work stays in frame)
GALLERY = [
    ("20220322_085210.jpg", 0.5, 0.5),
    ("20220424_102637.jpg", 0.5, 0.4),
    ("20220424_102807.jpg", 0.5, 0.5),
    ("20220630_114805.jpg", 0.5, 0.5),
    ("20220709_090309.jpg", 0.5, 0.42),
    ("20221006_093805.jpg", 0.5, 0.45),
    ("6b0445ea24c7f2e33f7fc735e4e72e09.0.jpg", 0.5, 0.5),
    ("9fc1f638893ab9895455ee06a2c2224f.0.jpg", 0.5, 0.5),
    ("b3145e40139125f9766498d86f06de23.0.jpg", 0.5, 0.5),
    ("brushing-land-clearing.jpg", 0.5, 0.45),
    ("Chris-tree-trimming.jpg", 0.5, 0.35),
    ("IMG_1955.jpg", 0.5, 0.5),
    ("IMG_2003.jpg", 0.5, 0.5),
    ("IMG_5803.jpg", 0.5, 0.5),
    ("IMG_5866.jpg", 0.65, 0.45),
    ("info-05.jpg", 0.5, 0.5),
    ("land-clearing-service.jpg", 0.5, 0.45),
    ("Land-Clearing.jpg", 0.5, 0.45),
    ("Lawn-Care-2.jpg", 0.5, 0.5),
    ("Lawn-Care.jpg", 0.5, 0.5),
    ("lawn-sprinklers.jpg", 0.5, 0.55),
    ("Property-maintenance2.jpg", 0.5, 0.45),
    ("Tree-Removal-2.jpg", 0.5, 0.4),
    ("tree-work-yard.jpg", 0.5, 0.5),
    ("tree_removal-1.jpg", 0.5, 0.4),
    ("Truck-pic-rear-2.jpg", 0.5, 0.55),
    ("Woodchipping.jpg", 0.4, 0.5),
]


def focal_crop(img: Image.Image, fx: float, fy: float) -> Image.Image:
    w, h = img.size
    current_ar = w / h

    if current_ar > TARGET_AR:
        new_w = int(round(h * TARGET_AR))
        new_h = h
        cx = fx * w
        left = int(round(cx - new_w / 2))
        left = max(0, min(left, w - new_w))
        box = (left, 0, left + new_w, new_h)
    else:
        new_w = w
        new_h = int(round(w / TARGET_AR))
        cy = fy * h
        top = int(round(cy - new_h / 2))
        top = max(0, min(top, h - new_h))
        box = (0, top, new_w, top + new_h)

    return img.crop(box).resize(TARGET, Image.Resampling.LANCZOS)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name, fx, fy in GALLERY:
        src = SRC / name
        if not src.exists():
            print(f"skip missing: {name}")
            continue
        with Image.open(src) as img:
            img = img.convert("RGB")
            cropped = focal_crop(img, fx, fy)
            cropped.save(OUT / name, quality=88, optimize=True)
            print(f"ok: {name}")


if __name__ == "__main__":
    main()
