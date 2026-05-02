# Site Spec — `Harvey's Kitchen Fitters Ltd`

This document is generated in Phase 2 of `PROCESS.md` by Cursor, using the site brief as input. It locks in every content and design decision *before* any HTML is written, so you can review and tweak cheaply. It's also the exact artifact Agent 6 will eventually produce and consume internally when building real client sites.

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**
This site is a warm craft portfolio — the digital equivalent of a tradesman who slides a laminated photo album across the table before saying a word. The design takes its cues from Bath itself: stone, timber, unhurried solidity. The palette is built from deep forest green and walnut brown, against a warm cream that reads like Bath stone in afternoon light. Typography is Cormorant Garamond for headings — a literary serif with age and refinement — and Lato for body copy: clean and direct without a trace of startup energy. Sections are generous and unhurried. Nothing shouts. The site earns trust through composure, not performance. This is what 25 years in one city looks like.

**The differentiator:**
The "Full Project Management" positioning — made tangible on every page. Most kitchen fitters fit kitchens. Harvey's manage the whole job. This is the single claim that separates them from sole traders and national franchises alike, and the site puts it front and centre from the hero strip downwards.

**What this site is deliberately not:**
Not a national chain microsite. Not Wren Kitchens. Not aspirational lifestyle copy and glossy render images. Not exclamation marks. This site has no interest in selling the dream — it's selling the craft and the 25-year track record of a family team who've seen every Bath kitchen constraint and never missed a deadline.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary:     #2C4A2C;  /* Deep Forest Green — nav, headings, primary buttons, accent sections */
  --color-secondary:   #3D2E24;  /* Dark Walnut Brown — footer background, deep contrast panels */
  --color-accent:      #C17F24;  /* Warm Amber — CTAs, stat highlights, pull quote borders, hover links on dark */
  --color-text:        #1E1A17;  /* Near-black with warmth — all body text on light backgrounds */
  --color-text-muted:  #6B5F54;  /* Warm mid-grey — captions, subheads, secondary info */
  --color-bg:          #FAF7F2;  /* Bath stone cream — main page background */
  --color-bg-alt:      #F0EAE0;  /* Deeper cream — alternating sections, trust strip */
  --color-border:      #D9D0C4;  /* Warm light border — card borders, dividers */
}
```

*Palette notes: inspired by Bath stone, aged timber, and forest greenery — the natural materials that surround the kitchens Harvey's fits. Forest green is committed and specific — it avoids the navy-grey clichés of most trade sites. Amber accent is used sparingly: CTAs, one pull quote per page, stat call-outs only. Never use amber on body text. The cream backgrounds are not pure white — that cold clinical look is exactly what this site is pushing against.*

### Typography

**Display font:** `Cormorant Garamond` from Google Fonts — weights `400, 600, 700`
**Body font:** `Lato` from Google Fonts — weights `400, 700`

*Pairing notes: Cormorant Garamond is a refined, literary high-contrast serif — it reads as heritage and craft without feeling stiff. It's a step more distinctive than Playfair Display and has better texture at large display sizes. Lato pairs cleanly as body — it's warm and humanist (no geometric startup feel) and at 400 weight is highly legible at small sizes. Display font handles all H1–H3. Lato handles body, captions, buttons, nav. Never mix them on the same typographic element.*

### Other tokens

```css
:root {
  --font-display:   'Cormorant Garamond', Georgia, serif;
  --font-body:      'Lato', system-ui, sans-serif;
  --radius-sm:      0.25rem;
  --radius-md:      0.5rem;
  --radius-lg:      1rem;
  --shadow-sm:      0 1px 3px rgba(44, 74, 44, 0.08);
  --shadow-md:      0 4px 16px rgba(44, 74, 44, 0.12);
  --max-width:      1200px;
  --spacing-unit:   1rem;
}
```

---

## 3. File structure

```
sites/harveys-kitchen-fitters/
├── index.html
├── services.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── maps-config.js           (Google Maps only; gitignored; copy from templates/maps-config.example.js)
├── images/
│   └── (none — all images served from R2 library; see Section 7)
├── favicon.svg                  (H monogram in --color-primary on cream; Cormorant Garamond style)
├── sitemap.xml
├── robots.txt
├── site-brief.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

*Favicon: `favicon.svg` — a capital "H" letterform in `--color-primary` (#2C4A2C) on a `--color-bg` (#FAF7F2) square background. Use Cormorant Garamond 700 weight style as reference for the letterform shape. No favicon.ico required — SVG only for this build.*

---

## 4. Page specifications

### 4.1 Home (`index.html`)

**Page title:** `Kitchen Fitters in Bath — Harvey's Kitchen Fitters`
**Meta description:** `Family-run kitchen fitters serving Bath and surrounding areas for 25+ years. Full project management. Call 07976 358749 for a free quote.`

**Section structure:**

1. **Header + navigation**
   - Wordmark: "Harvey's" in Cormorant Garamond 700 + "Kitchen Fitters" in Lato 400 on same line, forest green on cream
   - Nav links: Home, Services, About, Contact
   - CTA button (header): "Call 07976 358749" — amber fill, links to `tel:07976358749`
   - Skip link: `<a class="skip-link" href="#main">Skip to content</a>` as first child of `<body>`

2. **Hero section**
   - Image: `hero.webp` (R2 kitchen-fitter — full-width, 16:9 cropped, dark overlay at 35%)
   - Headline: *"Fitting Kitchens in Bath for Over 25 Years."*
   - Subheadline: *"Harvey's is a family business — we manage the whole job. From the first measure to the last worktop trim, you deal with us."*
   - CTA buttons: "Get a Free Quote" (amber, → contact.html) | "See Our Services" (outline white, → services.html)
   - Alt text: "A beautifully fitted modern kitchen with timber cabinets and stone worktop, installed by Harvey's Kitchen Fitters in Bath"

3. **Trust strip**
   - Background: `--color-bg-alt`
   - 4 stat blocks, horizontal on desktop / 2×2 on mobile:
     - "25+ Years" / Trading in Bath
     - "Family Run" / Small team, personal service
     - "Bath & Beyond" / Somerset, Wiltshire, Bristol
     - "Fully Managed" / One call, every trade

4. **About teaser — "You're Not Hiring a Fitter. You're Hiring a Team."**
   - Two-column layout: copy left, `about.webp` right (or `owner.webp` — see Section 7 note)
   - Body copy: *"Adam Harvey has been at this trade since before most kitchen showrooms existed. We're small enough to care about the detail, experienced enough to handle anything Bath's Victorian terraces can throw at us — and organised enough to manage the whole project, not just the fitting. Plumbing, electrics, tiling: we coordinate it all so you don't have to."*
   - Link: "Meet the team →" → about.html
   - Alt text: "Harvey's kitchen fitter at work in a Bath kitchen during installation"

5. **Services preview — "What We Do"**
   - Background: `--color-primary` (dark green section)
   - 3 cards on a dark background, white text, amber icon
   - Card 1: icon `wrench` — "Full Kitchen Fitting" — *"We supply and fit, or work with your chosen units. One point of contact, start to finish."*
   - Card 2: icon `clipboard-check` — "Full Project Management" — *"We coordinate plumbing, electrics, and tiling. One number, not six."*
   - Card 3: icon `building-2` — "Contract & Developer Work" — *"Multi-unit projects for developers and landlords, handled without drama."*
   - Link below cards: "All five services →" → services.html

6. **How we work — 3-step process**
   - Background: `--color-bg`
   - Section heading: *"Three Steps. No Surprises."*
   - Step 1 — **We Measure:** *"A thorough survey of your space — your layout, constraints, and quirks. No guesswork, no assumptions."*
   - Step 2 — **We Plan:** *"A clear quote, a realistic schedule, and coordination of every trade needed. You know what's happening and when."*
   - Step 3 — **We Fit:** *"Clean, precise installation from a team who've seen every Bath kitchen before. Exactly as agreed."*
   - Step numbers in large Cormorant Garamond, amber; titles in Cormorant Garamond forest green

7. **CTA band**
   - Background: `cta-bg.webp` (R2) with `--color-secondary` overlay at 70%
   - Headline: *"Ready for a Kitchen That's Actually Fitted Properly?"*
   - Subhead: *"Call us on 07976 358749 — or send a message and we'll come and take a look."*
   - CTA button: "Get a Free Quote" (amber fill, → contact.html)
   - Alt text on bg image: decorative, `alt=""`

8. **Footer**
   - Background: `--color-secondary` (dark walnut), cream text
   - Col 1: Wordmark + tagline: *"Bath's kitchen fitters. Family-run since the 1990s."*
   - Col 2: Navigation links
   - Col 3: Contact — phone, email, social links (Facebook, Instagram)
   - Accreditation badges row (see Section 8)
   - Base: © 2025 Harvey's Kitchen Fitters Ltd · Companies House: 08621460 · Website by [NeoBookworm](https://neobookworm.uk)

---

### 4.2 Services (`services.html`)

**Page title:** `Kitchen Fitting Services in Bath — Harvey's Kitchen Fitters`
**Meta description:** `From supply-and-fit to full project management — Harvey's cover every stage of your kitchen installation in Bath. Call for a free quote.`

**Section structure:**

1. **Header + navigation** (same as all pages)

2. **Page hero**
   - Background: `--color-primary` (forest green panel, no image)
   - Headline: *"Everything Your Kitchen Needs"*
   - Subhead: *"From a straightforward fit-only install to a full project managed from scratch — we've covered it all for Bath homeowners and developers since the 1990s."*

3. **Services card grid**
   - Section heading: *"Our Services"*
   - 5 cards in a responsive grid (3-col desktop / 2-col tablet / 1-col mobile)
   - Each card: icon (Lucide), title (Cormorant Garamond H3), one-liner, expanded body copy

   **Card 1 — Full Kitchen Supply & Fit**
   Icon: `wrench`
   One-liner: *"We source quality units and handle the full installation — one team, one invoice."*
   Body: *"Whether you're starting from scratch or replacing an existing kitchen, we manage supply through our trade accounts — including Howdens Joinery — and handle every stage of the fit. You choose the style and finish; we handle the rest."*

   **Card 2 — Fit-Only Service**
   Icon: `hammer`
   One-liner: *"Already chosen your units? We'll install them to the same standard regardless of where you bought them."*
   Body: *"Flat-pack from IKEA, a bespoke range from a local joinery, a Howdens order you've placed yourself — we'll fit it properly and leave the kitchen looking like it was always there."*

   **Card 3 — Full Project Management**
   Icon: `clipboard-check`
   One-liner: *"Plumbing, electrics, tiling — we coordinate every trade so you have one point of contact, not six."*
   Body: *"Most kitchen fitters fit kitchens. Harvey's manage the whole job. We've built trade relationships across Bath over 25 years — we coordinate the sequence, the access, and the scheduling so the job runs clean."*

   **Card 4 — Contract & Developer Work**
   Icon: `building-2`
   One-liner: *"Multi-unit projects for developers and landlords, completed on time and without drama."*
   Body: *"We work with developers on new builds and refurbishments across Bath and Somerset. Reliable, trade-standard installation at scale — with the same family business accountability you get on a domestic job."*

   **Card 5 — Design & Layout Advice**
   Icon: `ruler`
   One-liner: *"Twenty-five years of Bath kitchens means we know what works before a single unit is ordered."*
   Body: *"Victorian terraces, Georgian townhouses, new-build apartments — we've worked in every Bath property type. We'll advise on layout, flow, and practical constraints before anything is committed to order. No charge for early conversations."*

4. **Trust panel**
   - Background: `--color-bg-alt`
   - Inline image: `tools.webp` (R2 shared) — small, right-aligned
   - Copy: *"Every project we take on — domestic or contract — is managed personally by Adam Harvey. That's not a promise made in a marketing brochure. It's how a two-decade family business actually works."*
   - Link: "About Harvey's →" → about.html
   - Alt text: "Kitchen fitting tools laid out on a workbench"

5. **CTA band** (same structure as home page CTA band)

6. **Footer** (same as all pages)

---

### 4.3 About (`about.html`)

**Page title:** `About Harvey's Kitchen Fitters — Bath's Family Trade Since the 1990s`
**Meta description:** `25 years fitting kitchens across Bath and Somerset. Meet the Harvey family team and find out how we work. Family-run, fully managed, no shortcuts.`

**Section structure:**

1. **Header + navigation**

2. **Page hero**
   - Background: `--color-primary`
   - Headline: *"The Harvey Family. Bath's Kitchen Fitters."*
   - Subhead: *"We've been at this since the 1990s. Not because we had to be — because we're good at it."*

3. **Story section — "Family Business. Real Craft. No Shortcuts."**
   - Two-column: text left, `owner.webp` (R2 shared) right
   - Alt text: "Adam Harvey, owner of Harvey's Kitchen Fitters, Bath"
   - Body copy (two paragraphs):
     *"Harvey's Kitchen Fitters was founded by Adam Harvey and has been a fixture of the Bath trade scene for over 25 years. The Ltd company was formalised in 2013, but the reputation pre-dates it. When you've been fitting kitchens in the same city for that long, word gets around — not because you run marketing campaigns, but because people recommend you to their neighbours.*

     *We're a small team. You'll meet the same faces on day one and on the final day. Adam oversees every project personally — that's not a claim, it's how a family business works. We do domestic work for homeowners across Bath, Somerset, and Wiltshire, and we take on contract work for developers and landlords. The common thread: we manage the whole job. Plumbing, electrics, tiling, delivery — all coordinated by us."*

4. **What 25 years means — three-column feature**
   - Section heading: *"What 25 Years in Bath Actually Means"*
   - Three feature blocks (icon + heading + copy):
     - **Every property type** — *"Georgian townhouses, Victorian terraces, new builds, rental flats. If it's got a kitchen in Bath, we've probably worked in a version of it."*
     - **Every constraint** — *"Awkward alcoves, load-bearing walls, period features, difficult plumbing routes. Nothing we haven't solved before."*
     - **Trade relationships** — *"The good plumbers, electricians, and tilers in Bath don't advertise. We know who they are, and we've worked with them for years."*

5. **Our approach — simple text panel**
   - Background: `--color-bg-alt`
   - Section heading: *"How We Work"*
   - Subhead: *"Straightforwardly."*
   - Body: *"We come out, we measure, we quote honestly. We tell you what the job involves — including the awkward bits. We give you a schedule that accounts for every trade, not just the fitting. We show up when we say we will. We leave the kitchen clean. We don't disappear when something needs adjusting.*

     *We're not the cheapest option in Bath. We're the option where the job gets done right, once, without you needing to manage it yourself."*

6. **CTA band** (same as home and services)

7. **Footer**

---

### 4.4 Contact (`contact.html`)

**Page title:** `Contact Harvey's Kitchen Fitters — Bath & Somerset`
**Meta description:** `Get in touch with Harvey's Kitchen Fitters. Call 07976 358749 or send a message. We cover Bath, Somerset, Wiltshire and the Bristol fringe.`

**Section structure:**

1. **Header + navigation**

2. **Page hero**
   - Background: `--color-primary`
   - Headline: *"Get in Touch"*
   - Subhead: *"We cover Bath and roughly a 25-mile radius — Somerset, Wiltshire, and the Bristol fringe. Not sure if we cover your area? Just ask."*

3. **Contact details bar**
   - Three columns: Phone / Email / Social
   - Phone: `07976 358749` (linked `tel:07976358749`, displayed visually large)
   - Email: `harveyskitchenfitters@gmail.com`
   - Social: Facebook link + Instagram handle

4. **Two-column: form + map**
   - Left: Contact form
   - Right: Google Maps embed (25-mile radius from Bath)

   **Contact form fields:**
   - Full name (required, type="text")
   - Phone number (required, type="tel")
   - Email address (required, type="email")
   - Your postcode / area (required, type="text", placeholder "e.g. BA1, BS9, SN14")
   - Tell us about your kitchen project (required, textarea, 5 rows)
   - How did you hear about us? (optional, select: Google / Recommended / Facebook / Instagram / Other)
   - Submit: "Send Enquiry" button (amber fill)

   **Map / service area:**
   - **Google Maps** — radius circle centred on Bath city centre (`51.3781, -2.3597`), **25-mile radius**
   - Town markers: Bath, Bristol, Chippenham, Frome, Trowbridge, Radstock, Shepton Mallet
   - Map container: `aria-label="Service area map — Harvey's Kitchen Fitters covers Bath and a 25-mile radius"`
   - Fallback (no API key): static text panel — *"We cover Bath and the surrounding area: Somerset, Wiltshire, and the Bristol fringe. Call us on 07976 358749 to check your area."*
   - Legend copy: "Harvey's Kitchen Fitters — service area" with amber circle colour in legend
   - API key via `js/maps-config.js` (gitignored, copy from `templates/maps-config.example.js`)

5. **Footer**

---

## 5. SEO Outputs

### Per-page SEO

| Page | Title tag (≤65 chars) | Meta description (≤155 chars, includes CTA) | og:title | og:description |
|---|---|---|---|---|
| Home (`index.html`) | `Kitchen Fitters in Bath — Harvey's Kitchen Fitters` | `Family-run kitchen fitters serving Bath and surrounding areas for 25+ years. Full project management. Call 07976 358749 for a free quote.` | `Kitchen Fitters in Bath — Harvey's Kitchen Fitters` | `Family-run kitchen fitters covering Bath, Somerset and Wiltshire for 25+ years. Full project management from start to finish.` |
| Services (`services.html`) | `Kitchen Fitting Services in Bath — Harvey's Kitchen Fitters` | `From supply-and-fit to full project management — Harvey's cover every stage of your kitchen installation in Bath. Call for a free quote.` | `Kitchen Fitting Services — Harvey's Kitchen Fitters` | `Supply and fit, fit-only, contract work, and full project management. Serving Bath and surrounding areas since the 1990s.` |
| About (`about.html`) | `About Harvey's Kitchen Fitters — Bath's Family Trade` | `25 years fitting kitchens across Bath and Somerset. Meet the Harvey family team and find out how we work. Family-run, fully managed, no shortcuts.` | `About Harvey's Kitchen Fitters — Bath's Family Trade` | `Family-run kitchen fitters in Bath for over 25 years. Personal service, full project management, and a team who've seen every Bath kitchen.` |
| Contact (`contact.html`) | `Contact Harvey's Kitchen Fitters — Bath & Somerset` | `Get in touch with Harvey's Kitchen Fitters. Call 07976 358749 or send a message. We cover Bath, Somerset, Wiltshire and the Bristol fringe.` | `Contact Harvey's Kitchen Fitters — Bath & Somerset` | `Call 07976 358749 or send us a message. We cover Bath and a 25-mile radius including Somerset, Wiltshire and the Bristol fringe.` |

### LocalBusiness JSON-LD schema

Paste this block verbatim into the `<head>` of every page (update the `url` field per page if desired):

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Harvey's Kitchen Fitters Ltd",
  "description": "Family-run kitchen fitters serving Bath, Somerset, and Wiltshire for over 25 years — domestic, contract, and full project management.",
  "telephone": "07976 358749",
  "email": "harveyskitchenfitters@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bath",
    "addressRegion": "Somerset",
    "addressCountry": "GB"
  },
  "areaServed": "Bath and approximately 25-mile radius — Somerset, Wiltshire, and Bristol fringe",
  "url": "[Fill in after Netlify deploy]",
  "priceRange": "££",
  "openingHours": "Mo-Su 00:00-23:59"
}
```

*Notes: `HomeAndConstructionBusiness` is the most accurate schema.org type for a kitchen fitter. `priceRange` is `££` — mid-premium, consistent with the brief's Facebook `$$$` signal and positioning. Opening hours reflect the "Always open for enquiries" Facebook listing — this means enquiries only, not 24/7 installation. `url` to be filled in at deploy.*

---

## 6. Copy bank

- **Main CTA text:** "Get a Free Quote"
- **Secondary CTA text:** "See Our Services"
- **Nav CTA (header):** "Call 07976 358749"
- **Form submit button:** "Send Enquiry"
- **Form success message:** "Thanks — we'll be in touch within one business day."
- **404 page message:** "That page doesn't exist. Head back to the home page."
- **Footer tagline:** "Bath's kitchen fitters. Family-run since the 1990s."
- **About teaser link:** "Meet the team →"
- **Services preview link:** "All five services →"

---

## 7. Image manifest

All images served from the NeoBookworm R2 library. No Midjourney prompts required — trade category images must exist in R2 before Phase 4 starts (see `docs/r2-image-library-checklist.md`).

**Trade category slug:** `kitchen-fitter`
**R2 base:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library`

| Section | Image URL | Alt text | Notes |
|---|---|---|---|
| Hero (all pages) | `{R2 base}/kitchen-fitter/hero.webp` | "A beautifully fitted modern kitchen with timber cabinets and stone worktop, installed by Harvey's Kitchen Fitters in Bath" | Full-width hero; 35% dark overlay applied in CSS |
| About teaser (home) | `{R2 base}/kitchen-fitter/about.webp` | "Harvey's kitchen fitter at work in a Bath kitchen during installation" | Two-column image right |
| About page portrait | `{R2 base}/shared/owner.webp` | "Adam Harvey, owner of Harvey's Kitchen Fitters, Bath" | About page story section — owner portrait suits better here than trade about image |
| Services trust panel | `{R2 base}/shared/tools.webp` | "Kitchen fitting tools laid out on a workbench" | Small image, right-aligned in trust panel |
| CTA background (all pages) | `{R2 base}/kitchen-fitter/cta-bg.webp` | `alt=""` (decorative — dark overlay applied) | 70% `--color-secondary` overlay |

**Shared assets used:**

| Asset | URL | Used where |
|---|---|---|
| Owner portrait | `{R2 base}/shared/owner.webp` | About page, story section |
| Van (tools interior) | `{R2 base}/shared/tools.webp` | Services page, trust panel |

*Van exterior (`van.webp`) and British home exterior (`british-home-exterior.webp`) are not needed for this build — the kitchen-fitter trade images cover the required visual slots.*

---

## 8. Accreditations

Badges from the NeoBookworm CSS badge library only — no real trademark logos.

- **BiKBBI** (British Institute of Kitchen, Bedroom & Bathroom Installation) — footer of every page; services page below card grid. ⚠️ Confirm this badge exists in the CSS library before build; if not, omit and note as gap.
- **TrustMark** — footer of every page, alongside BiKBBI.
- **CHAS** — footer of every page if available in badge library.
- **Companies House Ltd** — display as plain text trust signal in footer: "Registered in England & Wales · Companies House: 08621460" — no badge needed, just the text line.

*Checkatrade and TrustATrader are deliberately excluded: the brief confirms no profile found on either platform. Gas Safe and NICEIC are not relevant — Harvey's are fitters, not gas/electrical trades.*

---

## 9. Interactive elements

- **Mobile navigation menu:** hamburger toggle (three-line icon), slides in a full-width nav overlay on open; closes on overlay click or second hamburger press; ARIA: `aria-expanded`, `aria-controls`, `aria-label="Toggle navigation"`
- **Google Maps (contact page):** Google Maps JS API; 25-mile radius circle centred on Bath; amber circle fill matching `--color-accent`; town markers using `google.maps.Marker` + small SVG data-URL icons (no Map ID required); key via `js/maps-config.js` (gitignored); fallback text panel if no key present; `ResizeObserver` to refit bounds if column width changes
- **Contact form:** basic client-side validation (required fields, email format); no third-party form service — `mailto:` fallback or Netlify Forms; on submit show success message inline (no page reload)
- **Smooth scroll:** `scroll-behavior: smooth` in CSS for anchor links; no JS needed

Other interactive features: vanilla JS only. No npm, no frameworks, no external libraries except Google Maps as documented.

---

## 10. Accessibility notes

- **Skip link:** `<a class="skip-link" href="#main">Skip to content</a>` as first child of `<body>` on every page; visible on focus only (CSS `clip` → visible on `:focus`)
- **`<main id="main">`** wraps all content between header and footer on every page
- **Colour contrast checks required:**
  - `--color-text` (#1E1A17) on `--color-bg` (#FAF7F2): expect high pass (dark on light)
  - `--color-accent` (#C17F24) on `--color-primary` (#2C4A2C): verify AA 3:1 minimum for large text (CTA buttons in header on dark backgrounds)
  - White text on `--color-primary` (#2C4A2C): expect pass — verify
  - White text on `--color-secondary` (#3D2E24): expect pass — verify
  - `--color-text-muted` (#6B5F54) on `--color-bg` (#FAF7F2): likely borderline — verify AA; increase contrast if needed
- **Image alt texts:** specified in Section 7 — builder copies verbatim, does not write alts from scratch
- **Map:** `aria-label` on map container; screen-reader fallback paragraph required (see Section 4.4)
- **Form:** all inputs have explicit `<label>` elements (not placeholder-only); required fields have `aria-required="true"`; error messages associated with inputs via `aria-describedby`
- **Lucide icons on service cards:** purely decorative — `aria-hidden="true"` on SVG; card title provides the accessible label

---

## 11. Open questions

- **BiKBBI badge:** Confirm it exists in the NeoBookworm CSS badge library before Phase 4 begins. If missing, either add it to the library or omit from this site and note it as a gap in the badge coverage doc.
- **About page portrait:** `owner.webp` (shared asset) is specified — this is a generic tradesperson portrait, not Adam Harvey. Accept as appropriate for a demo site, or flag if a more kitchen-specific portrait would serve better (the brief notes Harvey's Instagram has 62 posts of finished kitchens but no confirmed owner photos).
- **Contact form backend:** Netlify Forms is the assumed handler (consistent with other demo sites on Netlify). Confirm before Phase 4 if this site will use a different form handler.
- **Phone number display:** The brief gives `07976 358749` as the contact number — this is presented as a personal mobile. For the live prospect version this should be a Sonetel number. For the demo, display it as given.

---

*Spec complete. Review, tweak if needed, commit as `harveys-kitchen-fitters: spec generated`, and move to Phase 3 of PROCESS.md.*
