# Site Spec — `Frayne Lofts Ltd`

This document is generated in Phase 2 of `PROCESS.md` by Cursor, using the site brief as input. It locks in every content and design decision *before* any HTML is written, so you can review and tweak cheaply.

**Business:** Frayne Lofts Ltd (Loft Conversions & Home Extensions)  
**Service area:** Bath, Chippenham, Wiltshire + nearby towns (roughly 25-mile radius from Sutton Benger, SN15)

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**  
Warm industrial-craft for a high-value build market: limestone-toned space, sharp typography, and restrained “made well” details. It should feel like the kind of builder an architect would happily recommend—clear, calm, and quietly confident—because the real product here is trust: owner-led work, clean communication, and finishes you’d be proud to show.

**The differentiator:**  
An **owner-led promise** presented as the site’s central device: a bold, repeatable stamp-style line used across pages—**“Olly runs the job. Olly finishes the job.”** Paired with short, plain-English sections and a “what it’s like day-to-day” timeline that makes accountability tangible.

**What this site is deliberately not:**  
Not “builder blue” templates, not stock-brochure claims, not generic “we pride ourselves…” copy. No fake logos. No noisy gradients. No clutter—just structure, materials, and certainty.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary: #1E1C18;    /* soot-charcoal; headings, nav, primary text accents */
  --color-secondary: #2F3E3F;  /* deep slate; section headers, secondary panels */
  --color-accent: #B4573B;     /* kiln-clay; CTAs, links, pull quotes, small highlights only */
  --color-text: #1E1C18;       /* body text */
  --color-text-muted: #5C5A55; /* supporting copy, labels */
  --color-bg: #F4F0E8;         /* limestone wash; main background */
  --color-bg-alt: #EFE8DE;     /* warmer panel background; cards/stripes */
  --color-border: #D7D0C6;     /* hairline rules, separators */
}
```

*Notes on the palette:* inspired by Bath stone, timber, and site dust: warm light backgrounds with near-black structure. **Accent is “rare”:** buttons, active states, pull quotes, and small dividers—never large backgrounds and never long paragraphs in accent.

### Typography

**Display font:** `Fraunces` from Google Fonts — weights `600, 700`  
**Body font:** `Sora` from Google Fonts — weights `400, 500, 600`

*Notes on the pairing:* `Fraunces` brings crafted character (editorial, confident) without feeling posh; `Sora` keeps body copy crisp and modern. Usage rule: headings in display font, all UI and long copy in body font; **avoid all-caps paragraphs**—reserve caps for labels only.

### Other tokens

```css
:root {
  --font-display: 'Fraunces', serif;
  --font-body: 'Sora', sans-serif;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --shadow-sm: 0 1px 2px rgba(30, 28, 24, 0.06);
  --shadow-md: 0 10px 30px rgba(30, 28, 24, 0.10);
  --max-width: 1200px;
  --spacing-unit: 1rem;
}
```

---

## 3. File structure

```
sites/fraynes-lofts-ltd/
├── index.html
├── services.html
├── about.html
├── contact.html
├── gallery.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── maps-config.js            (optional — Google Maps only; gitignored; copy from `templates/maps-config.example.js`)
├── images/
│   ├── hero.jpg
│   ├── about-portrait.jpg
│   ├── service-01-dormer.jpg
│   ├── service-02-velux.jpg
│   ├── service-03-hip-to-gable.jpg
│   ├── service-04-extensions.jpg
│   ├── service-05-stairs-joinery.jpg
│   ├── service-06-ensuite.jpg
│   ├── gallery-01.jpg
│   ├── gallery-02.jpg
│   ├── gallery-03.jpg
│   ├── gallery-04.jpg
│   ├── gallery-05.jpg
│   ├── gallery-06.jpg
│   ├── gallery-07.jpg
│   ├── gallery-08.jpg
│   ├── gallery-09.jpg
│   └── gallery-10.jpg
├── favicon.svg
├── favicon.ico                   (optional — older clients)
├── site-brief.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

*Favicon:* ship `favicon.svg` as a simple **“FL” monogram** or **Frayne Lofts wordmark** in `--color-primary` with a small `--color-accent` detail (e.g. a single underline). Add `favicon.ico` only if you actually generate/ship it.

---

## 4. Page specifications

### 4.1 Home (`index.html`)

**Page title:**  
Frayne Lofts Ltd — Loft Conversions & Extensions | Bath & Wiltshire

**Meta description:**  
Owner-led loft conversions and home extensions across Bath and Wiltshire. Olly Frayne runs every job from survey to sign-off—clear communication, tidy sites, and work you’ll be proud of.

**Section structure:**

1. **Header + navigation**
   - Logo / wordmark: `Frayne Lofts Ltd` (text-based)
   - Nav links: Home, Services, About, Gallery, Contact
   - CTA button: **Get a fixed quote** → `contact.html#form`

2. **Hero section**
   - Headline: *Loft conversions, without the building-company drama.*
   - Subheadline: *You deal with Olly from the first survey to the final sign-off. Clear plan. Fixed price. Tidy site. Proper finish.*
   - CTA buttons:
     - **Get a fixed quote** → `contact.html#form`
     - **See recent work** → `gallery.html`
   - Trust line (small): *Serving Bath, Chippenham and the surrounding towns — based in Sutton Benger, SN15.*
   - Hero image: `images/hero.jpg`

3. **Owner-led promise (stamp + short proof)**
   - Stamp line (visual treatment): **Olly runs the job. Olly finishes the job.**
   - Copy:
     - *Most horror stories start the same way: you meet one person, then the job gets handed around until nobody owns the quality.*
     - *Frayne Lofts is different. It’s owner-led. One point of contact. Questions answered quickly. Decisions made on site—by the person who’ll stand behind them.*
   - Bullet proof points:
     - *Incorporated March 2019. Seven years of solid reviews.*
     - *A trusted crew of specialist trades—electrician, plumber, plasterer—managed to time and budget.*
     - *Clean working, waste removed daily, disruption kept under control.*

4. **What we build (service cards)**
   - Intro: *If you need space but don’t want to move, this is what we do.*
   - Cards (link to Services):
     - **Dormer loft conversions** — *Maximum usable floor space and headroom.*
     - **Velux / rooflight conversions** — *Lower-cost option where the roofline stays as it is.*
     - **Hip-to-gable conversions** — *Biggest gain, best ROI for many semis and detached homes.*
     - **House extensions** — *Single and double-storey rear/side extensions, built from the ground up.*
   - CTA: **View all services** → `services.html`

5. **How the job runs (simple timeline)**
   - Headline: *Here’s how it works.*
   - Steps:
     1. **Survey & straight answers** — *We look at headroom, structure, access, and what you want the room to do. Then we tell you what’s genuinely possible.*
     2. **Design & numbers** — *Clear scope. Clear inclusions. A fixed price you can plan around.*
     3. **Build, managed properly** — *Olly on site. Trades scheduled. Updates you can understand.*
     4. **Finish & sign-off** — *Snagging done. Certificates provided for relevant work. Site left clean.*

6. **Pull-quote reviews (real, human)**
   - Use 2–3 short pull quotes adapted from the brief (verbatim fragments are fine, keep them readable):
     - *“From the first time we met Olly… we felt we were in safe hands.”*
     - *“One point of contact for any questions or issues.”*
     - *“Managed the project to time and budget… additions were no trouble.”*
   - Link: **Read more on Facebook** (external)

7. **Conservation-area confidence (premium angle)**
   - Headline: *Bath homes need a careful touch.*
   - Copy:
     - *A lot of the properties around Bath are older—Georgian, Victorian, and everything in between. Rooflines matter. Neighbours notice. Paperwork matters too.*
     - *If your home sits in a conservation area (or needs a more sensitive approach), we’ll talk through options that respect the building and keep the finish looking “like it belongs”.*
   - CTA: **Talk through your property** → `contact.html#form`

8. **Footer**
   - Contact:
     - Phone: `07507 351851`
     - Email: `fraynelofts@gmail.com`
     - Service area: *Based in Sutton Benger, SN15 — serving Bath, Chippenham and surrounding towns.*
   - Accreditation badges: **Fully Insured** (CSS badge library only)
   - Copyright: *© Frayne Lofts Ltd*
   - Small credit line: *Demo site for NeoBookworm.uk*

### 4.2 Services (`services.html`)

**Page title:**  
Services — Loft Conversions & Extensions | Frayne Lofts Ltd

**Meta description:**  
Dormer, Velux and hip-to-gable loft conversions, loft bedrooms with en-suites, home offices, and house extensions across Bath and Wiltshire—owner-led from survey to sign-off.

**Section structure:**

1. **Header + navigation**
   - Same as Home
   - CTA button: **Get a fixed quote** → `contact.html#form`

2. **Hero / intro**
   - Headline: *The kind of work we’re asked for most.*
   - Subheadline: *We’ll tell you what’s possible, what’s sensible, and what it’s likely to cost—before anything gets complicated.*

3. **Service list (detailed sections)**
   - **Dormer loft conversions**
     - Summary: *The popular choice when you want proper, usable space—more headroom, more floor area, better layout options.*
     - Good for: *Terraced and semi-detached homes across Bath and Wiltshire.*
     - Includes: *structure, insulation, windows, staircase, plastering and finish to “ready to decorate” (subject to final scope).*
     - Image: `images/service-01-dormer.jpg`
   - **Velux / rooflight conversions**
     - Summary: *A lighter-touch option when the existing roofline can stay. Bright rooms, lower build complexity, great value where headroom already works.*
     - Image: `images/service-02-velux.jpg`
   - **Hip-to-gable conversions**
     - Summary: *Turns a hipped roof into a full gable end—one of the biggest space gains, often the best return for the right house type.*
     - Image: `images/service-03-hip-to-gable.jpg`
   - **Loft bedrooms (with storage)**
     - Summary: *A bedroom that feels like it was always meant to be there—proper staircase, sensible storage in the eaves, clean lines.*
     - Note: *Often paired with an en-suite (below).*
   - **Loft en-suites**
     - Summary: *Compact, well-planned, properly vented. Tiling done right. Details finished cleanly.*
     - Image: `images/service-06-ensuite.jpg`
   - **Home office loft conversions**
     - Summary: *A quiet room that works year-round—insulation, heating plan, power and lighting where you actually need it.*
   - **House extensions (single & double-storey)**
     - Summary: *Rear and side extensions from foundations up, built to fit the house rather than looking “added on”.*
     - Image: `images/service-04-extensions.jpg`
   - **Joinery & staircases (part of loft projects)**
     - Summary: *Stairs are where loft conversions feel cheap or feel right. We make sure they feel right.*
     - Image: `images/service-05-stairs-joinery.jpg`

4. **Project management (what “one point of contact” means)**
   - Headline: *One person accountable.*
   - Copy:
     - *You’ll speak to Olly. You’ll see Olly. If something needs deciding, you won’t be waiting for a “site manager” you’ve never met.*
     - *Specialist trades are booked and managed as part of the job—electrician, plumber and plasterer—so you’re not coordinating four calendars yourself.*

5. **What we don’t do**
   - Copy (neutral, clear):
     - *We focus on loft conversions and extensions. If you’re after general handyman work or tiny patch jobs, we’ll usually recommend someone better suited.*
   

6. **Footer**
   - Same as Home

### 4.3 About (`about.html`)

**Page title:**  
About — Frayne Lofts Ltd | Owner-led building in Bath & Wiltshire

**Meta description:**  
Frayne Lofts Ltd was set up in 2019 so clients could deal with the person responsible for quality. Meet Olly Frayne and see how an owner-led build runs in practice.

**Section structure:**

1. **Header + navigation**
   - Same as Home

2. **Intro**
   - Headline: *You’re not hiring a logo. You’re hiring a person.*
   - Subheadline: *Frayne Lofts exists because jobs run better when someone actually owns the outcome.*

3. **Olly’s story**
   - Copy:
     - *Olly started Frayne Lofts in 2019 after years working on larger projects where responsibility got diluted—survey by one person, quote by another, build “managed” by someone who isn’t there.*
     - *He set up Frayne Lofts so the person you meet at the start is the same person turning the key in the door at the end.*

4. **What clients notice (accountability + calm)**
   - Use short paragraphs and bullets:
     - *Clear answers, quickly.*
     - *A tidy site and a plan for keeping disruption down.*
     - *Trades coordinated so the job keeps moving.*
     - *A finish that looks intentional, not rushed.*

5. **Where we work**
   - Copy:
     - *Based in Sutton Benger (SN15), working across Bath, Chippenham, Corsham, Trowbridge, Frome, Keynsham, Melksham and the surrounding villages.*
     - *If you’re near the edge of the area, ask—if it’s a good fit, we’ll tell you.*

6. **Portrait + caption**
   - Image: `images/about-portrait.jpg`
   - Caption: *Olly Frayne — your point of contact from survey to sign-off.*

7. **Footer**
   - Same as Home

### 4.4 Contact (`contact.html`)

**Page title:**  
Contact — Get a fixed quote | Frayne Lofts Ltd

**Meta description:**  
Tell us about your loft conversion or extension. We’ll survey the space, explain what’s possible, and provide a clear fixed quote. Serving Bath and Wiltshire.

**Section structure:**

1. **Header + navigation**
   - Same as Home

2. **Contact intro**
   - Headline: *Get a fixed quote.*
   - Subheadline: *Tell us what you’re trying to achieve and where the property is. We’ll come back with next steps and a realistic plan.*

3. **Quick contact blocks**
   - Phone (primary): `07507 351851`
   - Email: `fraynelofts@gmail.com`
   - Service area line: *Based in Sutton Benger, SN15 — roughly 25 miles around, including Bath and Chippenham.*

4. **Contact form**
   - Form fields (explicit):
     - **Full name** (required)
     - **Phone number** (required)
     - **Email address** (required)
     - **Postcode** (required)
     - **What are you looking to build?** (required select): *Dormer conversion / Velux conversion / Hip-to-gable / Loft bedroom + en-suite / Home office / Extension / Not sure yet*
     - **Any constraints we should know?** (optional): *Planning / conservation area / access / timeline*
     - **Your message** (required textarea)
     - **How did you hear about us?** (optional select): *Facebook / Recommendation / Google / Other*
   - Microcopy under submit:
     - *We’ll reply within 2 working days. If you’re near the edge of our area, include your nearest town and we’ll confirm.*

5. **Map / service area**
   - **Approach:** Google Maps (radius circle + a few labelled markers)
   - **Centre point:** Sutton Benger, SN15 (use lat/lng in `js/maps-config.js`)
   - **Radius:** 25 miles (\(\approx 40233.6\) metres)
   - **Markers (optional):** Bath, Chippenham, Corsham, Trowbridge, Frome, Keynsham, Melksham
   - **Legend copy (above map):** *Coverage area (approx. 25 miles from Sutton Benger). If you’re slightly outside, ask—we’ll tell you straight.*
   - **Accessibility:** map container `aria-label="Map showing Frayne Lofts coverage area around Sutton Benger"`
   - **Fallback when no API key / map blocked:** show a styled panel with the same legend plus a text list of towns served.

6. **Footer**
   - Same as Home

### 4.5 Gallery (`gallery.html`)

**Page title:**  
Gallery — Loft conversions & extensions | Frayne Lofts Ltd

**Meta description:**  
Recent loft conversion and extension work across Bath and Wiltshire—dormers, rooflights, hip-to-gable conversions, stair details and finished rooms.

**Section structure:**

1. **Header + navigation**
   - Same as Home

2. **Intro**
   - Headline: *Work you can picture living in.*
   - Subheadline: *A few examples of the kind of spaces we build—light, calm rooms with proper details.*

3. **Gallery grid + captions**
   - Layout: 2–3 column responsive grid; each image has a short caption; click opens lightbox.
   - Images and captions:
     - `gallery-01.jpg` — *Completed rear dormer: clean lines, tidy roof work.*
     - `gallery-02.jpg` — *Loft bedroom with dormer light: bright, usable space.*
     - `gallery-03.jpg` — *Home office loft: daylight, clean plaster, practical layout.*
     - `gallery-04.jpg` — *Staircase detail: joinery that looks like it belongs.*
     - `gallery-05.jpg` — *Compact loft en-suite: smart use of space, crisp tiling.*
     - `gallery-06.jpg` — *Build-in-progress: structure, steels/timber, real process.*
     - `gallery-07.jpg` — *Velux conversion: rooflights bringing in sky and light.*
     - `gallery-08.jpg` — *Bath-style property context: conversion that respects the house.*
     - `gallery-09.jpg` — *Finish detail: lighting, skirting, paint-ready surfaces.*
     - `gallery-10.jpg` — *Extension exterior: brickwork and roofline tied in cleanly.*

4. **CTA stripe**
   - Headline: *Want to know what your loft can become?*
   - CTA: **Get a fixed quote** → `contact.html#form`

5. **Footer**
   - Same as Home

---

## 5. Copy bank

All unique microcopy gathered in one place for easy review:

- **Main CTA text:** Get a fixed quote
- **Secondary CTA text:** See recent work
- **Form submit button:** Send my details
- **Form success message:** Thanks — we’ve got your message. We’ll be in touch within 2 working days.
- **404 page message:** That page doesn’t exist. Use the menu, or head back to the home page.
- **Footer tagline:** Owner-led loft conversions & extensions across Bath and Wiltshire.

---

## 6. Image manifest

Complete list of every image needed for this site, with Midjourney prompts.

### Hero
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `hero.jpg` | Home page hero | 16:9 | Photorealistic UK loft conversion interior, finished dormer loft bedroom/home office, bright natural light from dormer window and one rooflight, clean plaster and crisp joinery, warm neutral tones inspired by Bath limestone, minimal tasteful styling (no showroom look), shot from low-mid height to emphasise ceiling height, calm editorial architectural photography, sharp detail, 24mm lens, soft afternoon light, no people, no text |

### Portraits / people
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `about-portrait.jpg` | About page owner photo | 4:5 | Photorealistic portrait of a UK builder (male, late 30s–40s), relaxed and approachable, wearing simple workwear (neutral tones), standing in a finished loft space with natural light, shallow depth of field, candid documentary feel (not corporate), warm colour grading, clean background, no logo text, no hard hat cliché |

### Services
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `service-01-dormer.jpg` | Dormer conversions section | 4:3 | Photorealistic exterior of a completed rear dormer on a UK terraced or semi-detached home, clean roofline, new tiles matching existing, neat flashing and gutters, realistic Bath/Wiltshire streetscape, overcast bright day, architectural photography, no people, no signage |
| `service-02-velux.jpg` | Velux / rooflight conversions section | 4:3 | Photorealistic loft interior looking up toward two rooflights/Velux windows, blue sky visible, clean reveals, soft daylight on warm off-white walls, minimal styling, crisp modern finish, architectural photography |
| `service-03-hip-to-gable.jpg` | Hip-to-gable conversions section | 4:3 | Photorealistic exterior of a UK semi-detached home showing hip-to-gable conversion result (gable end and roofline), integrated and believable, tidy brickwork/roof tiles, subtle realism, architectural photography |
| `service-04-extensions.jpg` | Extensions section | 4:3 | Photorealistic rear extension on a UK home (single or double-storey), clean join between old and new, warm brick tones, large glazing without looking “developer generic”, realistic garden context, architectural photography |
| `service-05-stairs-joinery.jpg` | Staircase / joinery section | 4:3 | Photorealistic staircase detail leading to loft, well-finished timber handrail and newel, clean balustrade, natural light, emphasis on craftsmanship and tidy edges, interior architectural photography |
| `service-06-ensuite.jpg` | Loft en-suite section | 4:3 | Photorealistic compact loft en-suite bathroom with sloped ceiling, skylight above, high-quality tiling, matte fixtures, warm neutral palette, tidy grout lines, soft daylight, no clutter, interior architectural photography |

### Gallery (10 images)
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `gallery-01.jpg` | Completed rear dormer exterior | 4:3 | Photorealistic completed rear dormer on a UK home, clean roofline, realistic materials, subtle sky, architectural photo, no people |
| `gallery-02.jpg` | Loft bedroom (dormer) | 4:3 | Photorealistic finished loft bedroom with dormer window, calm warm neutrals, built-in eaves storage, soft daylight, realistic lived-in styling (minimal), architectural photo |
| `gallery-03.jpg` | Loft home office | 4:3 | Photorealistic loft home office with simple desk, rooflight daylight, clean plaster, warm wood accents, quiet atmosphere, architectural photo |
| `gallery-04.jpg` | Staircase detail | 4:3 | Photorealistic close interior shot of loft staircase joinery, timber and paint finishes, crisp edges, warm light, craftsmanship focus |
| `gallery-05.jpg` | Loft en-suite | 4:3 | Photorealistic compact loft en-suite with skylight, quality tiles, matte fixtures, warm stone palette, clean finish |
| `gallery-06.jpg` | Build in progress | 4:3 | Photorealistic construction-in-progress loft conversion: exposed structural timber/steels, scaffolding glimpsed, safe tidy site, documentary style, no workers faces clearly visible |
| `gallery-07.jpg` | Velux interior sky view | 4:3 | Photorealistic view from inside loft up through rooflight to blue sky, clean reveals, warm plaster tones, minimal composition |
| `gallery-08.jpg` | Bath property context | 4:3 | Photorealistic exterior of a Bath-area terraced or semi-detached home with discreet conversion work, heritage-friendly feel, muted stone/brick tones, architectural photo |
| `gallery-09.jpg` | Finish detail | 4:3 | Photorealistic interior finish detail: recessed lighting, smooth plaster, skirting, crisp corners, warm neutral paint-ready surfaces, shallow depth of field |
| `gallery-10.jpg` | Extension exterior | 4:3 | Photorealistic rear extension exterior with clean brickwork and roof tie-in, realistic UK garden setting, architectural photo |

---

## 7. Accreditations

List of CSS badges to include from the NeoBookworm badge library, and where each should appear on the site.

- **Fully Insured** — footer of every page; also shown once near the Home hero as a small trust line

*(No other accreditations are confirmed in the brief; do not include any trademarked logos or unverified schemes.)*

---

## 8. Interactive elements

Anything that needs JavaScript:

- **Mobile navigation menu:** hamburger toggle, full-screen overlay on open, focus trap, close on ESC
- **Gallery lightbox:** click image to view full-size in overlay, arrow-key navigation, close on ESC, swipe optional
- **Contact form enhancements:** client-side required-field checks, inline error messages, success state (even if form is non-functional demo)
- **Google Maps (Contact page only):**
  - Load Google Maps JavaScript API only on `contact.html`
  - Configuration via `js/maps-config.js` (gitignored; copied from `templates/maps-config.example.js`)
  - Draw radius circle (25 miles) and optional town markers
  - Fallback panel when no API key (or script blocked) as specified in Contact page

Other interactive features: vanilla JS only, no npm libraries. Maps are the only third-party script exception.

---

## 9. Accessibility notes

- Colour contrast: ensure `--color-text` on `--color-bg` meets WCAG AA; keep `--color-accent` off long paragraphs to avoid contrast failures.
- Navigation: visible focus states; skip link (`Skip to content`) at top; mobile menu focus trap.
- Images: meaningful `alt` text for gallery items (describe what’s shown); decorative flourishes marked `aria-hidden="true"`.
- Forms: clear labels (not placeholders), field-level errors announced via `aria-live` region, sensible `autocomplete` attributes.
- Map: `aria-label` on container and text fallback list of towns for non-visual access.

---

## 10. Open questions

- **Planning / building regs handling:** the brief implies “handle the full application process” but marks it as unverified—confirm whether Frayne Lofts offers planning support, building regs liaison, or both.
- **Guarantees:** do you want to state a workmanship guarantee period (and what is it), or keep it neutral?
- **Hours:** “standard” in the brief—set explicit hours (e.g. Mon–Fri 8–5) or omit.
- **What you don’t do:** currently inferred; confirm preferred wording or remove the section.
- **Owner photo:** confirm whether Olly is comfortable being shown on the About page.
- **Map exact centre:** confirm Sutton Benger centre point (lat/lng) for the 25-mile circle.

---

*Spec complete. Review, tweak if needed, commit as `fraynes-lofts-ltd: spec generated`, and move to Phase 3 of PROCESS.md.*
