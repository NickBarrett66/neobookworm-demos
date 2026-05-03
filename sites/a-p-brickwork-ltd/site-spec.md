# Site Spec — `A P Brickwork`

This document is generated in Phase 2 of `PROCESS.md` by Cursor, using the site brief as input. It locks in every content and design decision *before* any HTML is written, so you can review and tweak cheaply. It's also the exact artifact Agent 6 will eventually produce and consume internally when building real client sites.

**Business:** A P Brickwork (trading style per brief; incorporated **A & P Brickwork Ltd**, Companies House **07731537**)  
**Trade:** Driveway & paving specialist — permeable / SuDS-aware surfacing, block paving, patios, brickwork & groundworks  
**Service area:** Shinfield, Reading, Berkshire — Shinfield, Earley, Caversham, Wokingham, Bracknell and surrounding areas (~15-mile radius); RG1, RG2, RG4, RG6, RG10, RG40, RG41, RG42, RG12

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**  
**Aggregate editorial** — a site that reads like a workshop notebook translated for homeowners: warm stone and mortar neutrals, strong horizontal rhythm, and typography that feels stamped rather than styled. Photography is limited to the R2 trade hero/about/CTA set — no lifestyle fluff — so layout weight sits on clear headings, short paragraphs, and honest technical detail (especially sub-base and drainage). The mood is local craftsman confidence: fifteen years of repeat work, nothing to prove with hype.

**The differentiator:**  
**“Drainage-first driveways, plain English.”** Permeable and SuDS-compliant work is the sharp edge of the offer — presented as sound regulation-aware practice, not buzzwords — paired with a recurring **sub-base / groundwork truth** (corners aren’t cut where failures start).

**What this site is deliberately not:**  
Not glossy “dream driveway” sales tone, not corporate blues or greens, not competitor-style gallery arms races at demo stage, not fake review quotes or directory badges the business doesn’t hold — and **no** allusion to negative third-party reviews.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary: #4E342E;    /* aged brick / burnt umber — headings, nav, key UI text */
  --color-secondary: #3E3836;  /* slate mortar — footer, dark bands, secondary chrome */
  --color-accent: #B85C38;     /* fired clay highlight — CTAs, rules, icon strokes, links */
  --color-text: #2B2624;       /* body copy */
  --color-text-muted: #5C5654; /* supporting lines, captions */
  --color-bg: #F7F2EC;         /* warm off-white aggregate — page canvas */
  --color-bg-alt: #EDE6DD;     /* cards, alternating strips */
  --color-border: #D9D0C7;     /* hairlines, card edges */
}
```

*Notes on the palette:* drawn from **brief Section 6** — warm stone, aged brick, dark mortar, clean warm grey-white. **Usage:** `--color-accent` for buttons, key links, section rules, and Lucide icon colour on cards — avoid long passages of accent-coloured body text. Dark footer may use `--color-secondary` background with light text and `dk` badge variants if the badge library supports them.

### Typography

**Display font:** `Barlow Semi Condensed` from Google Fonts — weights `600, 700`  
**Body font:** `Source Serif 4` from Google Fonts — weights `400, 600`

*Notes on the pairing:* matches the brief’s ask for a **sturdy condensed sans** for authority at headline sizes plus a **readable serif** for long reassurance copy. `Barlow Semi Condensed` stays industrial-clear without feeling tech-generic; `Source Serif 4` carries credibility for methodology paragraphs (SuDS, build-up layers). Usage: display for H1–H3, buttons, nav; serif for body and lead paragraphs.

### Other tokens

```css
:root {
  --font-display: 'Barlow Semi Condensed', sans-serif;
  --font-body: 'Source Serif 4', serif;
  --radius-sm: 0.125rem;
  --radius-md: 0.25rem;
  --radius-lg: 0.5rem;
  --shadow-sm: 0 1px 2px rgba(43, 38, 36, 0.06);
  --shadow-md: 0 8px 24px rgba(43, 38, 36, 0.08);
  --max-width: 1140px;
  --spacing-unit: 1rem;
}
```

*Notes:* tighter radii than “startup SaaS” defaults — edges feel a bit more **paving slab / engineering** than bubble UI.

---

## 3. File structure

```
sites/a-p-brickwork-ltd/
├── index.html
├── services.html
├── about.html
├── gallery.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── maps-config.js           (Google Maps — gitignored; copy from `templates/maps-config.example.js`)
├── images/
│   └── (none — all hero/about/CTA imagery from R2; see Section 7)
├── favicon.svg
├── favicon.ico                  (optional — older clients)
├── sitemap.xml
├── robots.txt
├── site-brief.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

*Favicon:* **`favicon.svg`** — simple monogram **AP** or wordmark **A P Brickwork** in `--color-primary` on `--color-bg` (or inverted for dark favil context). Ship **`favicon.ico`** only if generated; `<link>` tags in Phase 4 must match shipped files exactly.

---

## 4. Page specifications

> **Universal requirements — every page without exception:**
> - `<a class="skip-link" href="#main">Skip to content</a>` must be the **first child of `<body>`**
> - `<main id="main">` must wrap all content between the closing `</header>` and opening `<footer>` tags

### 4.1 Home (`index.html`)

**Page title:** *(see Section 5)*  
**Meta description:** *(see Section 5)*

**Section structure:**

1. **Header + navigation**
   - Wordmark: **A P Brickwork** (link to `index.html`)
   - Nav: Home, Services, About, Gallery, Contact
   - CTA button: **Get a quote** → `contact.html`

2. **Hero section**
   - **Eyebrow:** Shinfield · Reading · Berkshire
   - **Headline:** Driveways and paving built from the ground up.
   - **Subheadline:** Permeable and SuDS-aware surfacing, block paving, and groundwork — fifteen years of straight answers and solid sub-bases.
   - **Primary CTA:** Call **07990 761750**
   - **Secondary CTA:** Email your enquiry → `contact.html`
   - **Hero image:** R2 `driveway-paving/hero.webp` — full width; dark gradient overlay optional at bottom for legibility

3. **Trust strip (credentials band)**
   - Short line: **NVQ-qualified · Trading since 2011 · Ltd company**
   - Supporting sentence: Sub-base and drainage done properly — that’s where most driveways fail.
   - Optional compact badge slot: **Fully Insured** (CSS library) **only if** insurance verified before launch — otherwise omit badge and keep copy generic (“Insurance details available on request” if needed; see Section 11).

4. **Services snapshot**
   - **H2:** What we do
   - Three concise blocks (title + one sentence each), linking to anchors or `services.html`:
     - Permeable & SuDS-compliant driveways
     - Block paving driveways & patios
     - Brickwork & groundworks
   - Link: **Full service list** → `services.html`

5. **Differentiator — permeable / SuDS**
   - **H2:** Permeable doesn’t have to be complicated.
   - Copy: Plain-English explanation that planning and drainage rules increasingly expect responsible surfacing; AP Brickwork builds compliant solutions without treating it like a sales gimmick.
   - Pull quote style (accent rule): *Block paving done right starts with the sub-base — we don’t cut corners there, because that’s where most driveways fail.*

6. **Gallery teaser**
   - **Section heading:** Recent Jobs *(brief Section 10 homepage teaser)*
   - **Cards:** items **1–3** from Section 4.5 table (Lucide icon + job heading + location; no micro-quotes)
   - Link: **See all our work →** `gallery.html`
   - **No photos** — icon/text only

7. **CTA band**
   - Background: R2 `driveway-paving/cta-bg.webp` with **dark overlay** (~55–65% opacity) and **white text**
   - **H2:** Ready to talk through your job?
   - One line: Covering Reading, Wokingham, Bracknell, and nearby — quotes without pressure.
   - Buttons: **07990 761750** (tel link) · **Send a message** → `contact.html`

8. **Footer**
   - Phone, email (`info@permeable-driveways.co.uk`), service area line (no customer-facing street address in primary footer — optional muted “Registered office” line if desired for Ltd transparency)
   - Accreditation / trust row (Section 8)
   - Copyright © current year **A P Brickwork** / **A & P Brickwork Ltd**

---

### 4.2 Services (`services.html`)

**Page title / meta:** Section 5.

**Section structure:**

1. Header + nav *(same as Home)*

2. **Page hero**
   - **H1:** Services
   - Lead: Everything starts with preparation — excavation, levels, and drainage — before any paving goes down.

3. **Services card grid** — **3 cards**, Lucide icons, title + one-line description each:

| # | Lucide icon | Title | One-liner |
|---|-------------|-------|-----------|
| 1 | `droplets` | Permeable & SuDS-compliant driveways | Block paving, resin bound, and gravel systems installed with drainage and regulation expectations in mind. |
| 2 | `layout-grid` | Block paving driveways & patios | New installs and replacements with neat edging, proper falls, and clean joints. |
| 3 | `brick-wall` | Brickwork & groundworks | Walls, edging, and foundations — the structural work that keeps paving stable for years. |

4. **Process strip (optional second band)**
   - **H2:** How we work
   - Numbered steps (4): Site assessment → Excavation & sub-base → Drainage & bedding → Paving & finishing  
   - Tone: matter-of-fact, no jargon wall.

5. **Secondary CTA**
   - Link to `contact.html` / tel

6. Footer

---

### 4.3 About (`about.html`)

**Page title / meta:** Section 5.

**Section structure:**

1. Header + nav

2. **Hero block**
   - **H1:** About A P Brickwork
   - Lead: A Shinfield-based craftsman — fifteen years of repeat work on the back of solid, no-drama groundwork.

3. **Split layout: image + story**
   - **Image:** R2 `driveway-paving/about.webp` — `width`/`height` per Section 7
   - **Copy blocks:**
     - **Since 2011:** Incorporated as **A & P Brickwork Ltd**; trading as **A P Brickwork** for homeowners.
     - **Specialism:** Permeable and SuDS-aware driveways sit alongside traditional block paving — technical competence without the hard sell.
     - **How we sound:** Measured, precise, quietly proud of the finish — matching brief tone of voice.

4. **Values / approach**
   - Short bullets: Understated · Technically competent · Local · Dependable

5. **No fake claims**
   - Do not invent review quotes or awards.

6. Footer

---

### 4.4 Contact (`contact.html`)

**Page title / meta:** Section 5.

**Section structure:**

1. Header + nav

2. **H1:** Contact

3. **Intro**
   - Phone **07990 761750** and email **info@permeable-driveways.co.uk**
   - Line: Serving RG and Berkshire areas listed in the brief; approximate **15-mile** radius from Reading / Shinfield.

4. **Contact form**
   - Fields: **Name** (required), **Email** (required), **Phone** (optional), **Postcode** (required), **Project type** (select: Driveway / Patio / Brickwork / Permeable / Other), **Message** (textarea, required), **Consent** (checkbox — GDPR-style consent to be contacted about the enquiry)
   - Submit button copy: **Send enquiry**
   - Client-side validation + success message copy in Section 6

5. **Map / service area**

   - **Google Maps** — radius circle + optional town markers (recommended for clarity given postcode list).
   - **Centre:** near **Shinfield / Reading** (use coordinates aligned with service area — e.g. vicinity of RG2 for Shinfield; tune in Phase 4).
   - **Radius:** ~**15 miles** (~24140 m).
   - **Optional markers:** Reading, Wokingham, Bracknell, Earley, Caversham (simple SVG/data-URL markers per repo pattern — no Map ID required).
   - **Legend:** “Approximate coverage — call to confirm your postcode.”
   - **`aria-label`** on map container: e.g. “Map showing approximate service area around Reading and Berkshire.”
   - **Fallback** when no API key in local preview: static placeholder box with same legend + “Map unavailable — please call.”
   - **Implementation:** `js/maps-config.js` — never commit keys; copy from `templates/maps-config.example.js`.

6. Footer

**Note:** Brief left map blank; this spec **opts in** to Google Maps for conversion clarity. If Nick prefers zero third-party map, replace with text-only postcode list + optional Leaflet regional map later — flag in Section 11.

---

### 4.5 Gallery (`gallery.html`)

**Page title / meta:** Section 5.

**Section heading:** Work Across Reading & Berkshire *(brief Section 10)*

**Optional strapline under H1:** Job types and locations we cover — photo gallery added when client assets are ready.

**Card grid layout:**
- Desktop: 3 columns  
- Tablet (≤768px): 2 columns  
- Mobile (≤480px): 1 column, full width  

**“Back to home” link:** Visible above gallery grid: ← Back to home → `index.html`

**Cards (6 total):**

| # | Lucide icon | Job type heading | Location | Micro-quote |
|---|-------------|------------------|----------|-------------|
| 1 | `layers` | Permeable Block Paving Driveway | Shinfield | — |
| 2 | `droplets` | SuDS-Compliant Resin Bound Surface | Earley | — |
| 3 | `square` | Patio Paving & Edging | Caversham | — |
| 4 | `brick-wall` | Garden Wall & Brickwork | Wokingham | — |
| 5 | `truck` | Driveway Excavation & Sub-Base | Bracknell | — |
| 6 | `circle-check` | Block Paving Repair & Re-sand | Woodley | — |

**Card anatomy:** Lucide icon ~48px, `aria-hidden="true"`; job **H3**; location line with 📍 or inline location icon; no italic quote block when micro-quote empty.

---

## 5. SEO Outputs

### Per-page SEO

| Page | Title tag (≤65 chars) | Meta description (140–155 chars, includes CTA) | og:title | og:description |
|------|----------------------|--------------------------------------------------|----------|----------------|
| Home (`index.html`) | Permeable Driveways & Block Paving Reading — A P Brickwork | SuDS-compliant permeable driveways and block paving across Reading & Berkshire. NVQ-qualified, fifteen years. Call 07990 761750 for a quote. | Permeable Driveways & Block Paving Reading — A P Brickwork | SuDS-compliant permeable driveways and block paving across Reading & Berkshire. NVQ-qualified, fifteen years. Call 07990 761750 for a quote. |
| Services (`services.html`) | Driveway & Paving Services Berkshire — A P Brickwork | Permeable driveways, block paving and patios across Berkshire. Drainage-aware installs from excavation to finish. Call 07990 761750 for a quote. | Driveway & Paving Services Berkshire — A P Brickwork | Permeable driveways, block paving and patios across Berkshire. Drainage-aware installs from excavation to finish. Call 07990 761750 for a quote. |
| About (`about.html`) | About A P Brickwork \| Reading Driveway Specialist | About A P Brickwork — Shinfield driveway specialist since 2011. NVQ-qualified paving and groundwork across Berkshire. Call 07990 761750 today. | About A P Brickwork \| Reading Driveway Specialist | About A P Brickwork — Shinfield driveway specialist since 2011. NVQ-qualified paving and groundwork across Berkshire. Call 07990 761750 today. |
| Gallery (`gallery.html`) | Recent Jobs \| Driveways & Paving — A P Brickwork | Browse driveway, patio and groundwork jobs across Reading & Berkshire — permeable paving, repairs and re-sanding. Call 07990 761750 for a quote. | Recent Jobs \| Driveways & Paving — A P Brickwork | Browse driveway, patio and groundwork jobs across Reading & Berkshire — permeable paving, repairs and re-sanding. Call 07990 761750 for a quote. |
| Contact (`contact.html`) | Contact A P Brickwork \| Driveway Quotes Reading | Request a driveway quote covering RG postcodes around Reading & Berkshire. Call 07990 761750 or email info@permeable-driveways.co.uk — quick replies. | Contact A P Brickwork \| Driveway Quotes Reading | Request a driveway quote covering RG postcodes around Reading & Berkshire. Call 07990 761750 or email info@permeable-driveways.co.uk — quick replies. |

*Meta descriptions in this table are within **140–155 characters** as generated — recount after any copy edit.*

### LocalBusiness JSON-LD schema

Paste into `<head>` of **every** page (`url` may be canonical per deploy):

```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "A P Brickwork",
  "description": "Driveway and paving contractor specialising in permeable SuDS-compliant surfacing, block paving, patios, and brickwork across Reading and Berkshire.",
  "telephone": "+447990761750",
  "email": "info@permeable-driveways.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "62 Ducketts Mead",
    "addressLocality": "Shinfield, Reading",
    "addressRegion": "Berkshire",
    "postalCode": "RG2 9GY",
    "addressCountry": "GB"
  },
  "areaServed": [
    "Reading",
    "Shinfield",
    "Earley",
    "Caversham",
    "Wokingham",
    "Bracknell",
    "Woodley",
    "Berkshire"
  ],
  "url": "https://YOUR-NETLIFY-URL.example/",
  "priceRange": "££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ]
}
```

*Notes:* `@type` **`GeneralContractor`** aligns with construction/driveway positioning from brief SEO inputs (HomeAndConstructionBusiness-style intent). **`openingHoursSpecification`** is a **placeholder** typical for solo trades — confirm real hours with owner (Section 11). Replace `url` after Netlify deploy. If `streetAddress` should not appear publicly, remove from schema and keep text-only service-area framing on pages — confirm with Nick.

---

## 6. Copy bank

- **Main CTA text:** Get a quote / Call **07990 761750**
- **Secondary CTA text:** Send a message / Email your enquiry
- **Form submit button:** Send enquiry
- **Form success message:** Thanks — your message has been sent. We’ll get back to you as soon as we can.
- **404 page message:** That page isn’t here — head back home or call **07990 761750** if you need A P Brickwork.
- **Footer tagline:** Drainage-first driveways · Reading & Berkshire *(optional one line; omit if crowded)*
- **Gallery teaser link text:** See all our work →
- **Gallery page strapline:** *(optional — see Section 4.5)*

---

## 7. Image manifest

**Trade category slug:** `driveway-paving`  
**R2 base:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library`

| Section | Image URL | Notes |
|---------|-----------|-------|
| Hero | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/driveway-paving/hero.webp` | Full-width hero; natural dimensions from asset — add `width`/`height` after confirming file |
| About | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/driveway-paving/about.webp` | Same |
| CTA background | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/driveway-paving/cta-bg.webp` | 1920×1080-style wide; dark overlay + white heading/button text |

**Shared assets (optional):**

| Asset | URL | Use |
|-------|-----|-----|
| Van (exterior) | `{R2 base}/shared/van.webp` | Optional small strip on Contact (“Local visits across Berkshire”) — not required |
| Tools | `{R2 base}/shared/tools.webp` | Omit unless layout needs texture |
| Owner portrait | `{R2 base}/shared/owner.webp` | **Do not use** — not this client |
| British home exterior | `{R2 base}/shared/british-home-exterior.webp` | Omit unless a subtle decorative panel is wanted |

**Gallery — no images at demo stage** (icon/text only).

---

## 8. Accreditations

Use **only** NeoBookworm CSS badge snippets — never trademark logo images.

- **Fully Insured** (`nb-insured` or nearest equivalent in library) — footer on every page **only after** public liability cover is confirmed; otherwise omit and use plain copy (Section 11).

**Plain text trust lines (footer or About)** — not badges:

- **NVQ-qualified** *(brief — no CSS badge assumed)*
- **A & P Brickwork Ltd** · Companies House **07731537** · active since 2011

**Not used:** Gas Safe, NICEIC, TrustMark, CHAS, Checkatrade — **not** claimed in brief.

---

## 9. Interactive elements

- **Mobile navigation:** Hamburger → overlay / drawer; focus trap friendly; close on Escape where feasible.
- **Google Maps loader** (Contact): script from CDN + site-specific init in `main.js` or inline module pattern consistent with other sites; **`maps-config.js`** exposes key via `window.__GMAPS_KEY__` or repo-standard pattern.
- **Contact form:** vanilla JS validation + success state (no backend — Netlify Forms or static demo behaviour per Phase 4 decision).
- **Lucide icons:** SVG sprites or inline per repo convention.

---

## 10. Accessibility notes

- Confirm **4.5:1** contrast for `--color-text` on `--color-bg`; confirm white on dark CTA band meets large-heading rules.
- **Hero / About / CTA-bg images:** descriptive `alt` text referencing driveway/paving context (not generic “image”).
- **All `<img>`:** explicit `width` and `height`** once dimensions known from R2 assets.
- **Gallery:** icons `aria-hidden="true"`; headings carry card meaning.
- **Map:** visible legend text; don’t rely on colour alone for coverage messaging.
- **Skip link + `#main`:** mandatory on every page.

---

## 11. Open questions

1. **Trading name casing:** Brief Section 11 says “always use **A p Brickwork**” — confirm whether the live wordmark should use lowercase **p** or standard **A P Brickwork** for professionalism. A: Use A P Brickwork
2. **Public liability insurance:** Verify before shipping **Fully Insured** badge or specific £ cover copy. A: fully insured badge
3. **Opening hours:** Confirm real schedule vs placeholder Mo–Fr 08:00–18:00 in JSON-LD. A: stick to placeholder
4. **Registered address visibility:** Confirm whether **62 Ducketts Mead** appears on-site / in schema or stays internal-only (brief says not customer-facing). A: internal only
5. **Google Maps vs none:** Brief map field was empty — confirm opting **in** to Maps or strip map block for a lighter Contact page. A: opt in to maps

---

*Spec complete. Review, tweak if needed, commit as `a-p-brickwork-ltd: spec generated`, and move to Phase 3 of `PROCESS.md`.*
