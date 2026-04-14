from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageFilter


def _blur_patch(im: Image.Image, box: tuple[int, int, int, int]) -> Image.Image:
    # Take a patch just below the label area, blur it, and use it as a soft "erase"
    # so the background blends reasonably well.
    x1, y1, x2, y2 = box
    w = x2 - x1
    h = y2 - y1
    src_box = (x1, min(im.height - 1, y2 + 6), x1 + w, min(im.height, y2 + 6 + h))
    patch = im.crop(src_box)
    if patch.size != (w, h):
        patch = patch.resize((w, h))
    return patch.filter(ImageFilter.GaussianBlur(radius=2.2))


def main() -> int:
    src = Path("sites/lee-morgan-heating-and-plumbing-ltd/images/home-coverage-map.jpg")
    im = Image.open(src).convert("RGB")

    # These boxes are tuned for the current generated 1024x576-ish crop.
    # If you regenerate the base crop, re-tune these coordinates.
    # (x1, y1, x2, y2)
    box_rwb = (410, 6, 620, 60)  # "Royal Wootto..." label
    box_swindon = (545, 6, 705, 60)  # "Swindon" label (overlaps)

    # Extract the two labels
    rwb = im.crop(box_rwb)
    sw = im.crop(box_swindon)

    # Erase originals with blurred background patches
    im.paste(_blur_patch(im, box_rwb), box_rwb)
    im.paste(_blur_patch(im, box_swindon), box_swindon)

    # Paste back in non-overlapping positions
    # Move RWB slightly left; move Swindon slightly right.
    im.paste(rwb, (360, 10))
    im.paste(sw, (660, 10))

    # Save over the same file (keep it lightweight)
    im.save(src, "JPEG", quality=82, optimize=True, progressive=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

