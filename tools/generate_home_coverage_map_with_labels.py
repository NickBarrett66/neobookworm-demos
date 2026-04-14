from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageFilter


def pill(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    *,
    font: ImageFont.ImageFont,
    pad_x: int = 10,
    pad_y: int = 6,
    fill: tuple[int, int, int] = (245, 242, 236),
    outline: tuple[int, int, int] = (185, 176, 167),
    text_fill: tuple[int, int, int] = (35, 40, 45),
) -> tuple[int, int, int, int]:
    x, y = xy
    l, t, r, b = draw.textbbox((0, 0), text, font=font)
    w = r - l
    h = b - t
    box = (x, y, x + w + pad_x * 2, y + h + pad_y * 2)
    radius = (box[3] - box[1]) // 2
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=2)
    draw.text((x + pad_x, y + pad_y - 1), text, font=font, fill=text_fill)
    return box


def main() -> int:
    src = Path(
        r"C:\Users\Nick\.cursor\projects\c-Users-Nick-Dropbox-00-Neobookworm-Neobookworm-Demos-neobookworm-demos\assets"
    ) / "c__Users_Nick_AppData_Roaming_Cursor_User_workspaceStorage_6e624db6233c9994cacf087ff4fcdf28_images_image-848e59ea-86d7-4ee5-a93d-83acb98416e1.png"
    dst = Path(
        r"C:\Users\Nick\Dropbox\00 Neobookworm\Neobookworm Demos\neobookworm-demos\sites\lee-morgan-heating-and-plumbing-ltd\images\home-coverage-map.jpg"
    )

    im = Image.open(src).convert("RGB")
    w, h = im.size

    # Crop to the centre region. The screenshot already contains Leaflet labels, so we
    # "erase" them after resizing (below) and then redraw clean non-overlapping pills.
    box = (
        int(w * 0.14),
        int(h * 0.06),
        int(w * 0.86),
        int(h * 0.87),
    )
    cropped = im.crop(box)

    out = ImageOps.fit(
        cropped,
        (1200, 675),
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.52),
    )

    # Build a blurred copy for "content-aware-ish" label removal.
    blurred = out.filter(ImageFilter.GaussianBlur(radius=6))

    def erase(old_box: tuple[int, int, int, int]) -> None:
        out.paste(blurred.crop(old_box), old_box)

    # Remove the original Leaflet tooltip labels baked into the screenshot.
    # (Boxes tuned for the current screenshot + crop → 1200x675 output.)
    erase((360, 0, 840, 96))    # Royal Wootton Bassett (plus residual blur)
    erase((780, 0, 1040, 96))   # Swindon
    erase((120, 28, 500, 150))  # Chippenham
    erase((260, 52, 620, 190))  # Calne + nearby remnants
    erase((480, 54, 960, 200))  # Marlborough (includes faint duplicate text)
    erase((300, 110, 660, 250)) # Devizes
    # Extra small ghosts that can survive the broad erase boxes.
    erase((600, 140, 820, 230)) # Marlborough leftover text
    erase((340, 170, 560, 260)) # Devizes leftover text
    erase((390, 230, 530, 285)) # Devizes final tiny ghost

    draw = ImageDraw.Draw(out)

    # Use a nicer, legible font if available.
    try:
        font = ImageFont.truetype("arial.ttf", 26)
    except Exception:
        font = ImageFont.load_default()

    # Redraw clean labels with deliberate spacing (no overlap).
    pill(draw, (390, 18), "Royal Wootton Bassett", font=font, pad_x=14, pad_y=8)
    pill(draw, (850, 18), "Swindon", font=font, pad_x=14, pad_y=8)
    pill(draw, (160, 98), "Chippenham", font=font, pad_x=14, pad_y=8)
    pill(draw, (360, 132), "Calne", font=font, pad_x=14, pad_y=8)
    pill(draw, (640, 150), "Marlborough", font=font, pad_x=14, pad_y=8)
    pill(draw, (400, 230), "Devizes", font=font, pad_x=14, pad_y=8)

    dst.parent.mkdir(parents=True, exist_ok=True)
    out.save(dst, "JPEG", quality=82, optimize=True, progressive=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

