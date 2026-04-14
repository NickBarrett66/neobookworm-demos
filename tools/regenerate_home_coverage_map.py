from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


def load_font(px: int) -> ImageFont.ImageFont:
    for name in ("arial.ttf", "segoeui.ttf", "calibri.ttf"):
        try:
            return ImageFont.truetype(name, px)
        except Exception:
            pass
    return ImageFont.load_default()


def pill(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    *,
    font: ImageFont.ImageFont,
    fill: tuple[int, int, int] = (246, 241, 231),
    outline: tuple[int, int, int] = (47, 63, 78),
    outline_alpha: int = 70,
    text_fill: tuple[int, int, int] = (19, 32, 44),
    pad_x: int = 14,
    pad_y: int = 8,
) -> tuple[int, int, int, int]:
    x, y = xy
    l, t, r, b = draw.textbbox((0, 0), text, font=font)
    w = r - l
    h = b - t
    box = (x, y, x + w + pad_x * 2, y + h + pad_y * 2)
    radius = (box[3] - box[1]) // 2

    # Pillow doesn't support alpha outlines directly on RGB; approximate with lighter outline colour.
    oc = (
        int(outline[0] + (255 - outline[0]) * (1 - outline_alpha / 255)),
        int(outline[1] + (255 - outline[1]) * (1 - outline_alpha / 255)),
        int(outline[2] + (255 - outline[2]) * (1 - outline_alpha / 255)),
    )
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=oc, width=2)
    draw.text((x + pad_x, y + pad_y - 1), text, font=font, fill=text_fill)
    return box


def main() -> int:
    # Source: the contact map screenshot (with both regions highlighted).
    src = Path(
        r"C:\Users\Nick\.cursor\projects\c-Users-Nick-Dropbox-00-Neobookworm-Neobookworm-Demos-neobookworm-demos\assets"
    ) / "c__Users_Nick_AppData_Roaming_Cursor_User_workspaceStorage_6e624db6233c9994cacf087ff4fcdf28_images_image-848e59ea-86d7-4ee5-a93d-83acb98416e1.png"

    dst = Path(
        r"C:\Users\Nick\Dropbox\00 Neobookworm\Neobookworm Demos\neobookworm-demos\sites\lee-morgan-heating-and-plumbing-ltd\images\home-coverage-map.jpg"
    )

    im = Image.open(src).convert("RGB")
    w, h = im.size

    # Crop away UI chrome and (critically) the baked-in Leaflet tooltip labels.
    # We’ll redraw our own labels so nothing overlaps and nothing is blurry underneath.
    crop = (
        int(w * 0.12),
        int(h * 0.18),
        int(w * 0.88),
        int(h * 0.88),
    )
    cropped = im.crop(crop)

    out = ImageOps.fit(
        cropped,
        (1200, 675),
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.40),
    )

    # The source screenshot includes the permanent Leaflet tooltips. Remove them by
    # cloning nearby "clean" map pixels (no blur so it doesn't look messy).
    def clone(src_box: tuple[int, int, int, int], dst_box: tuple[int, int, int, int]) -> None:
        patch = out.crop(src_box)
        if patch.size != (dst_box[2] - dst_box[0], dst_box[3] - dst_box[1]):
            patch = patch.resize((dst_box[2] - dst_box[0], dst_box[3] - dst_box[1]))
        out.paste(patch, dst_box)

    # Source patches from the lower (label-free) area of Wiltshire fill.
    # (Boxes tuned for the current crop → 1200×675 output.)
    clean_1 = (470, 520, 760, 590)
    clean_2 = (520, 440, 780, 510)

    # Remove baked-in labels (roughly).
    clone(clean_1, (120, 120, 360, 185))  # Chippenham (baked)
    clone(clean_1, (300, 150, 500, 210))  # Calne (baked)
    clone(clean_2, (560, 150, 820, 215))  # Marlborough (baked)
    clone(clean_1, (350, 200, 560, 270))  # Devizes (baked)
    clone(clean_2, (380, 0, 720, 95))     # Top baked label remnants

    draw = ImageDraw.Draw(out)
    font = load_font(26)

    # Redraw clean labels (non-overlapping)
    pill(draw, (420, 32), "Royal Wootton Bassett", font=font)
    pill(draw, (900, 44), "Swindon", font=font)
    pill(draw, (170, 160), "Chippenham", font=font)
    pill(draw, (355, 200), "Calne", font=font)
    pill(draw, (650, 240), "Marlborough", font=font)
    pill(draw, (410, 315), "Devizes", font=font)

    # Explicit Swindon highlight: a subtle copper halo around the Swindon pin.
    # (Approx pin position in the output.)
    sw_x, sw_y = 705, 115
    halo_r = 22
    halo_fill = (184, 107, 61, 70)  # copper w/ alpha
    halo_outline = (184, 107, 61, 210)
    overlay = Image.new("RGBA", out.size, (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.ellipse(
        (sw_x - halo_r, sw_y - halo_r, sw_x + halo_r, sw_y + halo_r),
        fill=halo_fill,
        outline=halo_outline,
        width=3,
    )
    out = Image.alpha_composite(out.convert("RGBA"), overlay).convert("RGB")

    dst.parent.mkdir(parents=True, exist_ok=True)
    out.save(dst, "JPEG", quality=82, optimize=True, progressive=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

