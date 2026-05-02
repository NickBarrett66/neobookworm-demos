# Site Spec — `[Business Name]`

This document is generated in Phase 2 of `PROCESS.md` by Cursor, using the site brief as input. It locks in every content and design decision *before* any HTML is written, so you can review and tweak cheaply. It's also the exact artifact Agent 6 will eventually produce and consume internally when building real client sites.

**The structure below is what the Phase 2 prompt asks Cursor to produce. When generated, it should be fully filled in — no placeholder sections.**

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**
*A confident description of the visual POV. What is this site trying to feel like, and why does that suit this business?*

**The differentiator:**
*The single memorable thing about this site — the element someone will remember after closing the tab.*

**What this site is deliberately not:**
*What generic trope it's pushing against.*

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary: #______;    /* description and use */
  --color-secondary: #______;  /* description and use */
  --color-accent: #______;     /* description and use */
  --color-text: #______;
  --color-text-muted: #______;
  --color-bg: #______;
  --color-bg-alt: #______;
  --color-border: #______;
}
```

*Notes on the palette: what inspired it, how it should feel, any usage rules (e.g. "accent only on CTAs and pull quotes, never on body text").*

### Typography

**Display font:** `[Font Name]` from Google Fonts — weights `[e.g. 700, 900]`
**Body font:** `[Font Name]` from Google Fonts — weights `[e.g. 400, 500]`

*Notes on the pairing: why these two, what mood they create, any usage rules.*

### Other tokens

```css
:root {
  --font-display: '[Font Name]', serif;
  --font-body: '[Font Name]', sans-serif;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --max-width: 1200px;
  --spacing-unit: 1rem;
}
```

---

## 3. File structure

```
sites/<site-name>/
├── index.html
├── services.html
├── about.html
├── gallery.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── uk-counties-leaflet.js   (optional — copy from shared/ if spec uses Leaflet county map)
│   ├── uk-counties-regional.js  (optional — copy from shared/ if spec uses regional preset)
│   └── maps-config.js           (optional — Google Maps only; gitignored; copy from `templates/maps-config.example.js`)
├── images/
│   └── (none — all images served from R2 library; see Section 7)
├── favicon.svg
├── favicon.ico          (optional — older clients)
├── site-brief.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

*Favicon:* list **`favicon.svg`** in this tree for every site (real asset: wordmark or monogram in brand colours). Add **`favicon.ico`** only if you ship it; Phase 4 `<link>` tags must match these paths exactly.

---

## 4. Page specifications

### 4.1 Home (`index.html`)

**Page title:**
**Meta description:**

**Section structure:**

1. **Header + navigation**
   - Logo / wordmark
   - Nav links: Home, Services, About, Gallery, Contact
   - CTA button: [text]

2. **Hero section**
   - Headline: *[exact copy]*
   - Subheadline: *[exact copy]*
   - CTA buttons: *[text and where they go]*
   - Hero image: *[R2 URL from Section 7]*

3. **[Next section name]**
   - *[full copy and structural notes]*

4. **Gallery teaser section**
   - Section heading: *[from brief Section 10 — homepage teaser heading]*
   - 3 cards displayed (cards 1–3 from the full 6 — icon + job type + location + optional micro-quote)
   - "See all our work →" link pointing to `gallery.html`
   - **No images at demo stage** — icon/text cards only
   - *(See Section 4.5 for full gallery card spec)*

5. *(etc — typically 4–7 sections on a home page)*

6. **Footer**
   - Contact details
   - Accreditation badges
   - Copyright and credits

### 4.2 Services (`services.html`)

*Title, meta, and section list with full copy. The core of this page is a **services card grid** — one card per service, each with an icon (from Lucide or the NeoBookworm icon library), a short title, and a one-line description. No images required — CSS/icon-based only.*

*Specify: number of service cards, icon choice per card, card titles, one-liner copy per card.*

### 4.3 About (`about.html`)

*Same structure: title, meta, section list with full copy.*

### 4.4 Contact (`contact.html`)

*Same structure. Contact form fields specified explicitly.*

**Map / service area (if any):**
- **None**, or specify: **Leaflet UK counties** (which counties/unitaries to highlight, which page), **regional preset** (`shared/js/uk-counties-regional.js` defaults), or **Google Maps** (centre point, radius in miles/metres, optional town markers, API key via `maps-config.js` only).
- Legend copy, accessibility (`aria-label` on map container), and fallback when no API key (for Google) — all specified here.

### 4.5 Gallery (`gallery.html`)

**Page title:**
**Meta description:**

**Section heading:** *[from brief Section 10 — full gallery section heading]*

**Card grid layout:**
- Desktop: 3 columns
- Tablet (≤768px): 2 columns
- Mobile (≤480px): 1 column, full width

**Cards (6 total — full spec drawn from brief Section 10):**

> ⚠️ **Demo stage rule:** Gallery cards are **icon + text only**. Zero `<img>` tags in the gallery section or page at demo stage. When real client photos are available at productionisation, each card receives an `<img>` above the icon and the icon is removed — no structural changes required.

| # | Lucide icon | Job type heading | Location | Micro-quote |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |

**Card anatomy (each card must include):**
- Lucide icon (trade-appropriate, sized ~48px, coloured `var(--color-accent)` or `var(--color-primary)`)
- Job type heading (H3 or strong element)
- Location line (with 📍 pin emoji or a small location icon)
- Micro-quote (if provided — italicised, smaller text, `var(--color-text-muted)`)

**"Back to home" link:** Include a visible link back to `index.html` at the top of the page body (below the nav).

---

## 5. SEO Outputs

*Generated from the brief. This section is the source of truth for all title tags, meta descriptions, og tags, and LocalBusiness schema across the site. Populate every field before the build starts — the builder copies from here, not from memory.*

### Per-page SEO

| Page | Title tag (≤65 chars) | Meta description (≤155 chars, includes CTA) | og:title | og:description |
|---|---|---|---|---|
| Home (`index.html`) | | | | |
| Services (`services.html`) | | | | |
| About (`about.html`) | | | | |
| Gallery (`gallery.html`) | | | | |
| Contact (`contact.html`) | | | | |

*Title tag rules: keyword first, business name last, separated by `—` or `\|`. Example: `Plumber in Swindon — Hartley Plumbing`. H1s are brand copy; title tags are for search — they should differ.*

*Meta description rules: one sentence, under 155 characters, ends with a clear CTA. Example: `Gas Safe registered plumber covering Swindon and Wiltshire. Available 7 days. Call for a free quote.`*

*Gallery page title tag example: `Our Work — Hartley Plumbing, Swindon`. Meta description example: `Boiler installs, bathroom refurbs, and heating repairs across Wiltshire. See our recent jobs.`*

### LocalBusiness JSON-LD schema

Paste this block verbatim into the `<head>` of every page (update the `url` field per page if desired):

```json
{
  "@context": "https://schema.org",
  "@type": "[Primary trade category from brief — e.g. Plumber, Electrician, GeneralContractor]",
  "name": "[Business name]",
  "description": "[One sentence describing the business and area served]",
  "telephone": "[Business phone number from brief Section 8]",
  "email": "[Email address from brief Section 7]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[Town]",
    "addressRegion": "[County]",
    "addressCountry": "GB"
  },
  "areaServed": "[Area served description from brief Section 8]",
  "url": "[Site URL — fill in after Netlify deploy]",
  "priceRange": "££",
  "openingHours": "[e.g. Mo-Fr 08:00-18:00, Sa 09:00-13:00]"
}
```

*Notes: `@type` should match the brief's "Primary trade category" field. `priceRange` is indicative — adjust if the brief implies budget or premium positioning. All fields derived from the brief; fill in completely before handing to the builder.*

---

## 6. Copy bank

All unique microcopy gathered in one place for easy review:

- **Main CTA text:**
- **Secondary CTA text:**
- **Form submit button:**
- **Form success message:**
- **404 page message:**
- **Footer tagline:**
- **Gallery teaser link text:** *(e.g. "See all our work →")*
- **Gallery page strapline:** *(optional one-liner beneath the gallery H1)*

---

## 7. Image manifest

All images are served from the NeoBookworm R2 library. No Midjourney prompts required unless this is the first site of this trade type and library images don't exist yet — in that case, source and upload before Phase 4 (see `docs/r2-image-library-checklist.md`).

**Trade category slug:** `[slug from brief Section 9]`
**R2 base:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library`

| Section | Image URL | Notes |
|---|---|---|
| Hero | `{R2 base}/{slug}/hero.webp` | Full-width, 1920×1080px |
| About | `{R2 base}/{slug}/about.webp` | Or use `shared/owner.webp` if portrait suits better |
| CTA background | `{R2 base}/{slug}/cta-bg.webp` | Used with dark overlay + white text |

**Shared assets (use where appropriate):**

| Asset | URL |
|---|---|
| Van (exterior) | `{R2 base}/shared/van.webp` |
| Van (interior / tools) | `{R2 base}/shared/tools.webp` |
| Owner portrait | `{R2 base}/shared/owner.webp` |
| British home exterior | `{R2 base}/shared/british-home-exterior.webp` |

**Notes on image placement:**
*(Specify here which shared assets are used and in which sections, if any.)*

> **Gallery — no images at demo stage.** The gallery teaser (index.html) and full gallery page (gallery.html) use icon/text cards only. No R2 URLs are assigned to gallery cards until productionisation. Do not add placeholder `<img>` tags to gallery cards.

---

## 8. Accreditations

List of CSS badges to include from the NeoBookworm badge library, and where each should appear on the site.

- **Gas Safe** — footer of every page, services page sidebar
- **[etc]**

---

## 9. Interactive elements

Anything that needs JavaScript:

- **Mobile navigation menu:** hamburger toggle, full-screen overlay on open
- **Maps (optional):** see **`shared/README.md`**. Allowed third-party scripts for maps only:
  - **Leaflet 1.9.x** (CDN) + vendored scripts from **`shared/js/`** for UK county / unitary boundaries (ONS)
  - **Google Maps JavaScript API** (CDN loader) for radius circle + markers; key in **`js/maps-config.js`** (gitignored; copy from **`templates/maps-config.example.js`**), never committed
- **[etc]**

Other interactive features: vanilla JS only, no npm libraries. Map libraries are exceptions only as above.

---

## 10. Accessibility notes

Any accessibility considerations specific to this design:

- Colour contrast: confirm `--color-text` on `--color-bg` meets WCOG AA
- All R2 images must have descriptive `alt` attributes specified here, not left to the builder
- Gallery cards: Lucide icons must have `aria-hidden="true"` (decorative); job type heading provides the accessible label for the card
- [etc]

---

## 11. Open questions

Anything the spec couldn't fully resolve from the brief and needs Nick's decision before build:

- *(none, or list them here)*

---

*Spec complete. Review, tweak if needed, commit as `<site-name>: spec generated`, and move to Phase 3 of PROCESS.md.*
