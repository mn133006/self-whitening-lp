#!/usr/bin/env python3
"""初回体験カード右カラム用: マスターからポートレイト切り出し（左は指先付近を端に）。"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MASTER = ROOT / "public" / "pricing-intro-card.webp"
OUT = ROOT / "public" / "pricing-intro-card-vertical.webp"

# 左端：指より左の余りは切る（約 410px 〜 調整）。右は広めに確保して顔・身体を収める。
CROP_LEFT = 410
CROP_WIDTH = 928


def main() -> None:
    src = Image.open(MASTER).convert("RGB")
    w, h = src.size
    left = min(CROP_LEFT, max(0, w - CROP_WIDTH))
    crop_w = min(CROP_WIDTH, w - left)
    crop = src.crop((left, 0, left + crop_w, h))
    crop.save(OUT, quality=92, method=6)
    print(f"wrote {OUT} {crop.size} from master={src.size} left={left}")


if __name__ == "__main__":
    main()
