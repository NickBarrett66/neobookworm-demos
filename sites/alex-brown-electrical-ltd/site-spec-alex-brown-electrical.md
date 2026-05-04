# Site Spec — `Alex Brown Electrical Services Ltd`

Generated in Phase 3 of `PROCESS.md` from `site-brief-alex-brown-electrical.md`. Locks in every content and design decision before any HTML is written.

---

## 1. Creative direction

**Aesthetic statement:**
This site operates on authority, not personality. Deep charcoal backgrounds with sharp white type and a single warm amber accent — the visual equivalent of a tidy van parked outside a tidy job. Nothing gratuitous, nothing wasted. The geometry is tight: all-caps display type set at narrow tracking, grid-locked layouts, clean negative space. It looks like someone who's been doing this for six years and has nothing to prove. The amber is a deliberate nod to the trade — filament, spark, live wire — without being clichéd. Every competitor in the Westbury market is running on the same corporate-blue template; this one isn't.

**The differentiator:**
The 100% recommendation record, surfaced early and worn lightly. Not a boast — a quiet fact. Paired with the NICEIC/RECC trust strip it communicates: this electrician is both technically certified *and* personally reliable. That combination is the whole site in a sentence.

**What this site is deliberately not:**
Not the generic electrician template (stock photo of a smiling man in a hard hat, corporate blue, "we pride ourselves"). Not aspirational or corporate. Not trying to look bigger than one director and a van. Authentically small, authentically excellent.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary:     #D4861B;  /* Warm amber — CTAs, icons, accents, active states */
  --color-secondary:   #1E1E1E;  /* Dark charcoal — alt backgrounds, cards, footer */
  --color-accent:      #F0A83A;  /* Lighter amber — hover states, highlights */
  --color-text:        #F0EDE8;  /* Warm off-white — all body text on dark backgrounds */
  --color-text-muted:  #8A8680;  /* Stone grey — micro-quotes, secondary labels */
  --color-bg:          #121212;  /* Near-black — primary page background */
  --color-bg-alt:      #1A1A1A;  /* Slightly lighter charcoal — section alternates */
  --color-border:      #2E2E2E;  /* Subtle dark border for cards and dividers */
  --color-text-dark:   #1A1A1A;  /* Dark text — used on amber CTA buttons */
}
```

**Palette notes:** The dark base commands authority appropriate to safety-critical work. Amber is used sparingly — only on CTAs, icon fills, active nav states, and pull-quote rule lines. It should never appear as body text on a dark background. The warm off-white (`--color-text`) is slightly cream, not pure white — keeps the eye comfortable over long reads. Contrast ratio for `--color-text` on `--color-bg`: ≈ 15:1 (well above WCAG AA). Confirm `--color-primary` on `--color-bg`: amber `#D4861B` on `#121212` ≈ 5.5:1 — passes AA for large/bold text at the sizes used.

### Typography

**Display font:** `Syne` from Google Fonts — weights `700, 800`
**Body font:** `DM Sans` from Google Fonts — weights `400, 500`

**Pairing notes:** Syne at 700–800 has a sharp geometric presence — wide apertures, slightly idiosyncratic letterforms — that reads as confident without veering corporate. Set in all-caps for H1/H2 with `letter-spacing: 0.04em`, it locks in as a proper display face rather than a utility sans. DM Sans as the workhorse body font is clean and highly legible at small sizes, pairs naturally with the geometry of Syne, and is distinctly *not* Inter (the sector default). Both are free, well-hinted, and fast-loading.

### Other tokens

```css
:root {
  --font-display:   'Syne', sans-serif;
  --font-body:      'DM Sans', sans-serif;
  --radius-sm:      0.25rem;
  --radius-md:      0.375rem;
  --radius-lg:      0.75rem;
  --shadow-sm:      0 1px 3px rgba(0,0,0,0.4);
  --shadow-md:      0 4px 16px rgba(0,0,0,0.5);
  --max-width:      1200px;
  --spacing-unit:   1rem;
}
```

---

## 3. File structure

```
sites/alex-brown-electrical-ltd/
├── index.html
├── services.html
├── about.html
├── gallery.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── maps-config.js          (Google Maps key — gitignored; copy from templates/maps-config.example.js)
├── images/
│   └── (none — all images served from R2 library; see Section 7)
├── favicon.svg                  (wordmark: "AB" monogram in Syne 800 — amber on charcoal)
├── sitemap.xml
├── robots.txt
├── site-brief-alex-brown-electrical.md
├── site-spec-alex-brown-electrical.md
├── build-checklist.md
└── qa-launch-checklist.md
```

*No `favicon.ico` required — SVG favicon is sufficient for the browsers in the target market. Confirm before Phase 4 if different.*

---

## 4. Page specifications

> **Universal requirements — every page without exception:**
> - `<a class="skip-link" href="#main">Skip to content</a>` must be the **first child of `<body>`**
> - `<main id="main">` must wrap all content between the closing `</header>` and opening `<footer>` tags
> - The **GA4 snippet** (see Section 5) must be present in `<head>` on every page
> - JSON-LD schema block (see Section 5) must be present in `<head>` on every page
> - Phone number `07739 532373` must appear identically in every page header and footer
> - Demo intercept: every `tel:` link and form submit must trigger the JS demo modal (see Section 9)

---

### 4.1 Home (`index.html`)

**Page title:** `Electrician in Westbury, Wiltshire — Alex Brown Electrical`
**Meta description:** `NICEIC-registered electrician in Westbury. EV chargers, consumer units, rewires and EICR reports. Covering a 20-mile radius. Call for a free quote.` *(152 chars)*

**Section structure:**

1. **Header + navigation**
   - Wordmark: `Alex Brown Electrical` — Syne 800, all-caps, amber `--color-primary` on `--color-bg`
   - Nav links: Home · Services · About · Gallery · Contact
   - Header CTA button: `Call 07739 532373` — amber fill, dark text

2. **Hero section**
   - Background: hero image (`electrician/hero.webp`) with dark overlay (`rgba(0,0,0,0.62)`)
   - Headline (H1): `ELECTRICS DONE PROPERLY.` — Syne 800, all-caps, `--color-text`, very large (clamp 2.8rem → 5.5rem)
   - Subheadline: `Six years of domestic and commercial electrical work across Westbury and Wiltshire. NICEIC registered. No surprises on the invoice.` — DM Sans 400, `--color-text`, max-width 600px
   - CTA buttons: `Get a quote` (amber fill) · `See our work` (outline/ghost)
   - Hero image URL: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/hero.webp`

3. **Trust strip**
   - Horizontal band, `--color-secondary` background, small Syne 700 text
   - Four items separated by `·`: `6+ years trading` · `100% Facebook recommended` · `NICEIC registered` · `Westbury-based`
   - No icons — purely typographic, understated

4. **Services overview (3 highlighted)**
   - H2: `What we do.`
   - Three cards in a row (icon + title + one-liner):
     - `zap` — **EV Charger Installation** — *"Approved Renewable Energy Consumer Code installer. Home and workplace charging points — supply, fit, commission."*
     - `panel-top` (or `cpu`) — **Consumer Unit Upgrades** — *"Old fuseboard? We'll replace it to modern standards — certified, notified, done properly."*
     - `clipboard-check` — **EICR Reports** — *"Full electrical inspection reports for landlords, buyers, and insurers. Certificate issued same day where possible."*
   - Link below: `See all services →` pointing to `services.html`

5. **About teaser**
   - Split: left text, right image (`electrician/about.webp`, `width="600" height="400"`)
   - H2: `The electrician your neighbour recommended.`
   - Copy: *"Alex Brown set up in 2019 — not because he planned to, but because the referrals got consistent enough to make going Ltd the obvious next step. Six years on, 100% Facebook recommendations and not a single website to his name. Until now."*
   - CTA: `Find out more →` pointing to `about.html`

6. **Gallery teaser section**
   - H2: `Recent jobs`
   - 3 cards displayed (cards 1–3 from the full 6 — see Section 4.5)
   - Link below: `See all our work →` pointing to `gallery.html`
   - No images — icon/text cards only

7. **CTA band**
   - Background: cta-bg image (`electrician/cta-bg.webp`) with dark overlay (`rgba(0,0,0,0.70)`)
   - H2: `Ready to get started?`
   - Copy: `Call Alex for a no-nonsense quote. No pushy sales, no surprises.`
   - CTA button: `Call 07739 532373` — large, amber fill
   - Demo note beneath button: `(Demo site — calls are not connected)`

8. **Footer**
   - Left: wordmark + tagline: *"Electrical work done properly, across Westbury and Wiltshire."*
   - Centre: nav links
   - Right: phone · email · address · Facebook link
   - Bottom row: accreditation badges (NICEIC · RECC) + `© 2025 Alex Brown Electrical Services Ltd` + `Website by NeoBookworm.uk`

---

### 4.2 Services (`services.html`)

**Page title:** `Electrical Services in Westbury — Alex Brown Electrical`
**Meta description:** `Consumer unit upgrades, EV charger installation, full rewires, EICR reports and fault finding across Westbury and Wiltshire. Call Alex for a free quote.` *(154 chars)*

**Section structure:**

1. **Header + navigation** (shared)

2. **Page hero (slim)**
   - H1: `WHAT WE DO.`
   - Subheadline: `Domestic and commercial electrical work across Westbury, Warminster, Trowbridge and beyond.`
   - Dark background, no image — purely typographic

3. **Services card grid (7 cards, 3-col desktop → 2-col tablet → 1-col mobile)**

   | # | Lucide icon | Service title | Description |
   |---|---|---|---|
   | 1 | `zap` | Electrical Installation | New circuits, socket outlets, light fittings and full installations for homes and commercial premises. Certified to BS 7671. |
   | 2 | `plug-zap` | EV Charger Installation | Approved Renewable Energy Consumer Code installer. Home and workplace charging points — supply, fit, and commission. |
   | 3 | `panel-top` | Consumer Unit Upgrades | Replace your old fuseboard with a modern consumer unit. Works certified and notified under Part P Building Regulations. |
   | 4 | `cable` | Full & Partial Rewires | Older property? A full or partial rewire brings your wiring up to current standards — safely and neatly. |
   | 5 | `clipboard-check` | EICR Reports | Electrical Installation Condition Reports for landlords, homebuyers and insurers. Certificate issued same day where possible. |
   | 6 | `search` | Fault Finding & Repairs | Tripping breakers, dead circuits, or intermittent faults — Alex will find the cause and fix it properly. |
   | 7 | `lightbulb` | Lighting & Outdoor Electrics | Spotlights, outdoor sockets, security lighting, garden circuits. Neat, weatherproofed, done right. |

4. **EICR callout panel**
   - Distinct amber-bordered panel breaking the grid
   - Heading: `Landlord? You need an EICR.`
   - Copy: *"Electrical Installation Condition Reports are a legal requirement for all rental properties in England. If your certificate is due for renewal — or if you've never had one — call Alex. Reports issued with minimal disruption to tenants."*
   - CTA: `Book an EICR →` pointing to `contact.html`

5. **Accreditation strip**
   - NICEIC badge · RECC badge · Part P compliance note
   - Small body copy: *"All work is certified and notified under Part P of the Building Regulations. Full public liability insurance."*

6. **CTA band** (same pattern as homepage, lighter variant)

7. **Footer** (shared)

---

### 4.3 About (`about.html`)

**Page title:** `About Alex Brown Electrical — Westbury Electrician`
**Meta description:** `Six years of electrical work across Westbury and Wiltshire, built on word of mouth and 100% Facebook recommendations. NICEIC registered. Find out more.` *(154 chars)*

**Section structure:**

1. **Header + navigation** (shared)

2. **Page hero (slim)**
   - H1: `SIX YEARS. 100% RECOMMENDED.`
   - Subheadline: *"There's no secret to it — turn up when you say you will, do the work properly, and leave the place tidy."*

3. **Story section**
   - Split layout: left text block, right `about.webp` image (`width="600" height="400"`)
   - H2: `Started on word of mouth. Still running on it.`
   - Three paragraphs:
     1. *"Alex Brown set up his electrical business in January 2019 — right at that point in a tradesman's career when the referrals are consistent enough to make going Ltd the obvious next move. He's been Westbury-based his whole career, and the 20-mile radius he covers today is built on relationships, not advertising."*
     2. *"Six years on, not a single website to his name — and a 100% recommendation rate on Facebook. That's the kind of track record most established firms spend years trying to manufacture."*
     3. *"Alongside core domestic and commercial electrical work, Alex is an Approved Code Scheme member under the Renewable Energy Consumer Code — certified to install EV chargers and solar systems as well as the full range of general electrical work. The trade is changing; he's ahead of it."*

4. **Three pillars / values**
   - H2: `How the work gets done.`
   - Three items (icon + heading + copy):
     - `clock` — **Shows up.** — *"You'll get an honest arrival time. That's the time Alex will arrive. Rare enough to be worth saying."*
     - `shield-check` — **Does it properly.** — *"All work is certified and notified under Part P. No shortcuts, no bodged fixes, no calling someone else to sort it later."*
     - `sparkles` (or `check-circle`) — **Leaves it tidy.** — *"You'll know the job's been done. You won't know anyone's been in your house."*

5. **Review pull-quote panel**
   - Large amber quotation mark, blockquote styling
   - Quote: *"Alex has installed new spotlight lighting in my house, a new consumer unit, hall and landing smoke detectors, and RING floodlight cameras. Each visit he has been highly professional, great communication and advice throughout. 100% satisfaction. Very highly recommended."*
   - Attribution: `— Westbury homeowner`
   - Background: `--color-secondary`

6. **Accreditation strip** (NICEIC · RECC · Ltd company note)

7. **CTA band** (same pattern)

8. **Footer** (shared)

---

### 4.4 Contact (`contact.html`)

**Page title:** `Contact Alex Brown Electrical — Electrician in Westbury`
**Meta description:** `Get in touch with Alex Brown Electrical in Westbury, Wiltshire. Covering a 20-mile radius. Call 07739 532373 or fill in the form for a free quote.` *(147 chars)*

**Section structure:**

1. **Header + navigation** (shared)

2. **Page hero (slim)**
   - H1: `GET IN TOUCH.`
   - Subheadline: `Based in Westbury. Covering Warminster, Trowbridge, Melksham, Frome, Bradford on Avon and the surrounding area.`

3. **Contact split: form (left) + details (right)**

   **Form fields:**
   - Name (text, required)
   - Phone (tel, required)
   - Email (email, required)
   - Service required (select, required): Electrical Installation · EV Charger Installation · Consumer Unit Upgrade · Rewire · EICR Report · Fault Finding & Repairs · Lighting & Outdoor Electrics · Other
   - Message (textarea, optional — label: "Anything else we should know?")
   - Submit: `Send message`
   - Demo note above submit button: `This is a demo site — this form does not send.`

   **Contact details:**
   - Phone: `07739 532373` (tel: link with demo intercept)
   - Email: `alexbrown.electricals@gmail.com`
   - Address: `2 Cleveland Way, Westbury, Wiltshire, BA13 2GH`
   - Hours: `Monday – Friday, 9am – 5pm`
   - Facebook: `facebook.com/alexbrownelectricalservices`

4. **Service area map**
   - **Google Maps** — 20-mile radius circle centred on Westbury (BA13 2GH, approximately `51.2605° N, 2.1571° W`)
   - Amber circle stroke (`--color-primary`), subtle amber fill with low opacity
   - Town markers (classic `google.maps.Marker` + small amber SVG pin icons): Westbury · Warminster · Trowbridge · Melksham · Frome · Bradford on Avon
   - API key via `js/maps-config.js` (gitignored) — copy from `templates/maps-config.example.js`
   - Map container: `aria-label="Service area map — Alex Brown Electrical covers a 20-mile radius from Westbury"`
   - Legend: `"We cover approximately 20 miles from Westbury — including the towns shown."`
   - Fallback when no key: `<p class="map-fallback">Map unavailable — we cover approximately 20 miles from Westbury, including Warminster, Trowbridge, Melksham, Frome and Bradford on Avon.</p>`

5. **Footer** (shared)

---

### 4.5 Gallery (`gallery.html`)

**Page title:** `Our Work — Alex Brown Electrical, Westbury`
**Meta description:** `Consumer units, EV chargers, full rewires and more across Westbury and Wiltshire. Browse our recent jobs and call Alex for a free quote today.` *(143 chars)*

**Section heading:** `Work done right, across Wiltshire.`
**Page strapline:** `Every job — from a single socket to a full rewire — done the same way.`

**Card grid layout:**
- Desktop: 3 columns
- Tablet (≤768px): 2 columns
- Mobile (≤480px): 1 column, full width

**Cards (6 total):**

| # | Lucide icon | Job type heading | Location | Micro-quote |
|---|---|---|---|---|
| 1 | `zap` | Consumer unit upgrade | Westbury | "Sorted quickly, everything explained clearly." |
| 2 | `plug-zap` | EV charger installation | Warminster | "Competitive price, clean install." |
| 3 | `lightbulb` | Full rewire | Trowbridge | "Turned up when he said he would — rare." |
| 4 | `clipboard-check` | EICR inspection & report | Frome | "Certificate issued same day, no hassle." |
| 5 | `home` | New build first & second fix | Westbury | "Professional from first call to last." |
| 6 | `sun` | Solar PV & battery installation | Melksham | "Knew exactly what we needed." |

> ⚠️ **Demo stage rule:** All gallery cards are icon + text only. Zero `<img>` tags in the gallery section at demo stage. When real client photos are available at productionisation, each card receives an `<img>` above the icon; no structural changes required.

**Card anatomy (each card):**
- Lucide icon (~48px, `aria-hidden="true"`, coloured `var(--color-primary)`)
- Job type heading (H3)
- Location line (with `📍` or small `map-pin` Lucide icon)
- Micro-quote (italicised, `var(--color-text-muted)`)
- Card background: `var(--color-secondary)`, border `var(--color-border)`, hover: slight amber border glow

**"Back to home" link:** Visible text link `← Back to home` above the section heading (below nav).

---

## 5. SEO Outputs

### Per-page SEO

| Page | Title tag (≤65 chars) | Meta description (140–155 chars) | og:title | og:description |
|---|---|---|---|---|
| Home (`index.html`) | `Electrician in Westbury, Wiltshire — Alex Brown Electrical` (59) | `NICEIC-registered electrician in Westbury. EV chargers, consumer units, rewires and EICR reports. Covering a 20-mile radius. Call for a free quote.` (148) | `Electrician in Westbury, Wiltshire — Alex Brown Electrical` | `NICEIC-registered electrician in Westbury. EV chargers, consumer units, rewires and EICR reports. Covering a 20-mile radius. Call for a free quote.` |
| Services (`services.html`) | `Electrical Services in Westbury — Alex Brown Electrical` (56) | `Consumer unit upgrades, EV charger installation, full rewires, EICR reports and fault finding across Westbury and Wiltshire. Call Alex for a free quote.` (152) | `Electrical Services in Westbury — Alex Brown Electrical` | `Consumer unit upgrades, EV charger installation, full rewires, EICR reports and fault finding across Westbury and Wiltshire.` |
| About (`about.html`) | `About Alex Brown Electrical — Westbury Electrician` (51) | `Six years of electrical work across Westbury and Wiltshire, built on word of mouth and 100% Facebook recommendations. NICEIC registered. Find out more.` (152) | `About Alex Brown Electrical — Westbury Electrician` | `Six years of electrical work across Westbury and Wiltshire, built on 100% Facebook recommendations. NICEIC registered.` |
| Gallery (`gallery.html`) | `Our Work — Alex Brown Electrical, Westbury` (43) | `Consumer units, EV chargers, full rewires and more across Westbury and Wiltshire. Browse our recent jobs and call Alex for a free quote today.` (143) | `Our Work — Alex Brown Electrical, Westbury` | `Consumer units, EV chargers, full rewires and more across Westbury and Wiltshire. Browse our recent jobs.` |
| Contact (`contact.html`) | `Contact Alex Brown Electrical — Electrician in Westbury` (56) | `Get in touch with Alex Brown Electrical in Westbury, Wiltshire. Covering a 20-mile radius. Call 07739 532373 or fill in the form for a free quote.` (147) | `Contact Alex Brown Electrical — Electrician in Westbury` | `Get in touch with Alex Brown Electrical in Westbury, Wiltshire. Covering a 20-mile radius. Call for a free quote.` |

### LocalBusiness JSON-LD schema

Paste verbatim into `<head>` of every page:

```json
{
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "name": "Alex Brown Electrical Services Ltd",
  "description": "NICEIC-registered electrician based in Westbury, Wiltshire, offering domestic and commercial electrical work, EV charger installation, consumer unit upgrades, EICR reports and fault finding across a 20-mile radius.",
  "telephone": "07739 532373",
  "email": "alexbrown.electricals@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2 Cleveland Way",
    "addressLocality": "Westbury",
    "addressRegion": "Wiltshire",
    "postalCode": "BA13 2GH",
    "addressCountry": "GB"
  },
  "areaServed": "Westbury, Warminster, Trowbridge, Melksham, Frome, Bradford on Avon, Wiltshire",
  "url": "[To be filled after Netlify deploy]",
  "priceRange": "££",
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [
    "https://www.facebook.com/alexbrownelectricalservices"
  ]
}
```

### GA4 snippet

Measurement ID provided 

```html
-- GA4: G-VQ91NBYHCL 
```

---

## 6. Copy bank

- **Main CTA text:** `Get a quote`
- **Secondary CTA text:** `See our work`
- **Header CTA (persistent):** `Call 07739 532373`
- **Form submit button:** `Send message`
- **Form success message:** `Thanks — Alex will be in touch shortly.`
- **Demo modal heading:** `Demo site`
- **Demo modal body (tel):** `This is a demo site for NeoBookworm.uk. Calls are not connected. To find out how to get a site like this, visit neobookworm.uk`
- **Demo modal body (form):** `This is a demo site for NeoBookworm.uk. This form does not send. To find out how to get a site like this, visit neobookworm.uk`
- **Demo modal CTA:** `Visit NeoBookworm.uk`
- **Footer tagline:** `Electrical work done properly, across Westbury and Wiltshire.`
- **Gallery teaser link text:** `See all our work →`
- **Gallery page strapline:** `Every job — from a single socket to a full rewire — done the same way.`
- **404 page message:** `Page not found. Head back to the homepage or call Alex on 07739 532373.`

---

## 7. Image manifest

**Trade category slug:** `electrician`
**R2 base:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library`

| Section | Image URL | Dimensions (px) | Notes |
|---|---|---|---|
| Hero | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/hero.webp` | `width="1920" height="1080"` | Full-width; dark overlay `rgba(0,0,0,0.62)` |
| About | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/about.webp` | `width="600" height="400"` | Right column of split layout on about.html and index.html about teaser |
| CTA background | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/cta-bg.webp` | `width="1920" height="800"` | Dark overlay `rgba(0,0,0,0.70)` + white text |

**Shared assets — not used for this site:** The brief specifies no van/tools/portrait assets by name; all three trade-category images above are sufficient for the five-page build. Add shared assets at productionisation if Alex supplies custom photography.

**Alt text:**
- Hero: `"Alex Brown Electrical — domestic wiring work in progress"`
- About: `"An electrician working on a consumer unit installation"`
- CTA bg: `""` (empty alt — purely decorative background, text overlaid)

---

## 8. Accreditations

From the CSS accreditation badge library only. Never real trademark logos.

- **NICEIC** — footer of every page; services page accreditation strip; about page accreditation strip. *Note: NICEIC registration listed in brief (Section 4) as "display NICEIC badge prominently" — confirm via niceic.com during outreach if not already confirmed. If not registered, replace with Part P compliance text badge only.*
- **Renewable Energy Consumer Code (RECC)** — footer of every page; services page accreditation strip; about page accreditation strip. *Check the badge library for a CSS RECC badge; if not present, render as a styled text badge: `Renewable Energy Consumer Code — Approved Installer`. Do not use the real RECC logo.*
- **Part P Building Regulations** — services page, body copy only (not a badge — no Part P CSS badge exists). Mention inline: *"All electrical work certified and notified under Part P Building Regulations."*

---

## 9. Interactive elements

- **Mobile navigation:** hamburger toggle, full-height overlay drawer, close on overlay click or Escape key
- **Demo intercept (required):** JS modal triggered on every `tel:` link click and form submit. See copy bank (Section 6) for modal heading, body, and CTA text. Single implementation in `js/main.js`.
- **Google Maps (contact.html only):** 20-mile radius circle + town markers. See Section 4.4. Loader via CDN (`maps.googleapis.com/maps/api/js`), key from `js/maps-config.js` (gitignored). Classic `google.maps.Marker` pattern — no Map ID required. Fallback `<p class="map-fallback">` shown when key absent. `ResizeObserver` to handle container resize and `google.maps.event.trigger(map, 'resize')` + refit bounds if map sits in a flex column.
- **Smooth scroll:** for any in-page anchor links, `scroll-behavior: smooth` in CSS is sufficient

---

## 10. Accessibility notes

- **Colour contrast:** `--color-text` (`#F0EDE8`) on `--color-bg` (`#121212`) ≈ 15.1:1 — passes AAA. `--color-primary` (`#D4861B`) on `--color-bg` ≈ 5.5:1 — passes AA for large/bold text (used only on large headings and CTA buttons). Confirm amber on amber-fill button: `--color-text-dark` (`#1A1A1A`) on `--color-primary` (`#D4861B`) ≈ 5.3:1 — passes AA.
- **Images:** All R2 `<img>` tags must carry the `alt` text specified in Section 7, plus `width` and `height` attributes as specified — prevents CLS.
- **Gallery cards:** Lucide icons must have `aria-hidden="true"` (decorative). The H3 job type heading provides the accessible card label.
- **Map:** Container must carry `aria-label` as specified in Section 4.4. Text fallback must be visible when map fails to load.
- **Form:** All inputs require associated `<label>` elements (not placeholder text as label). Required fields marked with `required` attribute and visual indicator.
- **Focus styles:** Dark theme means default browser focus outlines may be invisible — ensure a visible `outline` or `box-shadow` focus style in amber (`var(--color-primary)`) on all interactive elements.
- **Skip link:** `.skip-link` must be the first child of `<body>` and visually hidden until focused (standard skip-link CSS pattern).

---

## 11. Open questions

- **NICEIC registration:** Brief lists it as an instruction to display the badge, but notes it may need verification (Section 11). Confirm via niceic.com search before build. If not registered, amend trust strip and accreditation strip wording accordingly. A: this has been verified
- **MCS accreditation (Microgeneration Certification Scheme):** Brief Section 11 mentions "MCS accredited" in the context of the RECC note. If confirmed, add MCS badge alongside RECC — this is a strong differentiator for the solar/EV segment. Check badge library. A: this is confirmed
- **GA4 Measurement ID:** A: this is the GA4 M ID: G-VQ91NBYHCL
- **Domain:** `alexbrownelectrical.co.uk` or `alexbrownelectrics.co.uk` suggested in brief — check availability and confirm before adding canonical URLs to pages.
- **Google Business Profile:** None found. Worth flagging to Alex during outreach — it would compound the local SEO impact of this site considerably. Not a blocker for build.

---

*Spec complete. Review, tweak if needed, then commit as `alex-brown-electrical-ltd: spec generated` and move to Phase 4 of `PROCESS.md`.*
