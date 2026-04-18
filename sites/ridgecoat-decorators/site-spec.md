# Site Spec — Ridgecoat Decorators Ltd

Synthetic demo spec aligned with the built pages in `sites/ridgecoat-decorators/`. See `site-brief.md` for tone and fictional backstory.

---

## 1. Creative direction

**Aesthetic:** Same craft-industrial palette as the template: warm off-white plaster tones, navy/charcoal structure, ochre accents, “cut-in” panel motif, Bricolage Grotesque + Albert Sans.

**Differentiator:** Tape-edge / cut-in separators on key panels (inherited from CSS).

---

## 2. Design tokens

Unchanged from the source build (`css/styles.css`): `--color-primary` #0E1B2A, `--color-accent` #D07A2D, `--color-bg` #F6F1E8, etc.

---

## 3. File structure

```
sites/ridgecoat-decorators/
├── index.html
├── services.html
├── about.html
├── contact.html
├── gallery.html
├── css/styles.css
├── js/main.js
├── js/uk-counties-leaflet.js
├── images/*.svg          (placeholders; replace with photography if needed)
├── favicon.svg
├── site-brief.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

---

## 4. Brand & contact (synthetic)

| Field | Value |
|--------|--------|
| Wordmark | **Ridgecoat** + subtitle **Decorators Ltd** |
| Legal footer | © Ridgecoat Decorators Ltd |
| Phone | 07700900922 (`data-demo-block` on `tel:`) |
| Email | hello@ridgecoat-decor.example.com |
| Area copy | south Bristol **(BS4)**; counties map: **Bristol**, **South Gloucestershire**, **North Somerset** |
| Combined experience | **Over 20 years** (hero trust line, contact trust panel) |

**Home signature block (replaces old quote):** Lead line *“If the edges look rushed on day one, you’ll notice them every morning after.”* + supporting body about punctuality, protection, and cleanliness.

**About story:** Partnership formalised **2019** after parallel crews on Bristol refurbishments; no family-relation hook; team: **James Mercer**, **Tom Ellis**, **Alex Reed**.

**About pull-quote:** *“Tell us what you’re aiming for — we’ll survey it properly, price it plainly, and get the prep right before the first coat.”*

---

## 5. Map (contact page)

`initNeoUkCountiesMap("map-uk-counties", { highlighted: ["Bristol", "South Gloucestershire", "North Somerset"], scrollWheelZoom: false })`

`aria-label`: Map showing Ridgecoat Decorators core service area: Bristol, South Gloucestershire and North Somerset.

---

## 6. Images

All references use **`.svg` placeholders** in `images/` until real assets are supplied. OG image URLs point at the same files.

---

## 7. JavaScript

Vanilla only: mobile nav + focus trap, gallery lightbox, demo `tel:` / form blockers, contact form success UX (`data-demo-form`). File header: *Ridgecoat Decorators Ltd demo site*.

---

## 8. Accessibility

Inherited: skip link, heading hierarchy, map text fallback under Leaflet, `aria-label` on map container, reduced-motion friendly transitions in CSS.

---

*Spec for anonymised demo. Commit as `ridgecoat-decorators: synthetic spec` when ready.*
