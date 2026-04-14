from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageOps


def main() -> int:
    p = argparse.ArgumentParser(description="Crop/resize a map screenshot into home-coverage-map.jpg")
    p.add_argument("--src", required=True, help="Source image path (png/jpg)")
    p.add_argument("--dst", required=True, help="Destination jpg path")
    p.add_argument("--target-w", type=int, default=1200)
    p.add_argument("--target-h", type=int, default=675)
    p.add_argument("--left", type=float, default=0.14, help="Crop left as fraction of width")
    p.add_argument("--top", type=float, default=0.06, help="Crop top as fraction of height")
    p.add_argument("--right", type=float, default=0.86, help="Crop right as fraction of width")
    p.add_argument("--bottom", type=float, default=0.90, help="Crop bottom as fraction of height")
    p.add_argument("--quality", type=int, default=82)
    args = p.parse_args()

    src = Path(args.src)
    dst = Path(args.dst)
    dst.parent.mkdir(parents=True, exist_ok=True)

    im = Image.open(src).convert("RGB")
    w, h = im.size
    box = (
        int(w * args.left),
        int(h * args.top),
        int(w * args.right),
        int(h * args.bottom),
    )
    cropped = im.crop(box)
    out = ImageOps.fit(
        cropped,
        (args.target_w, args.target_h),
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.5),
    )
    out.save(dst, "JPEG", quality=args.quality, optimize=True, progressive=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

