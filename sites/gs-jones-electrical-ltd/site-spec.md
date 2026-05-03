# Site Spec — `G S Jones Electrical Ltd`

This document is generated in Phase 2 of `PROCESS.md` by Cursor, using the site brief as input. It locks in every content and design decision *before* any HTML is written, so you can review and tweak cheaply. It's also the exact artifact Agent 6 will eventually produce and consume internally when building real client sites.

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**
This site commits to a dark-craft aesthetic — deep near-black backgrounds that suggest a dimmed room before the lights go on, with warm amber accents that read as live copper, lit tungsten, a well-wired space. It is not slick, not corporate, not the bright-blue template every other Bristol sparky defaults to. It is the visual equivalent of Gary's own work: controlled, purposeful, clean. Space Grotesk headings carry real weight without shouting; Lora body copy reads with warmth and authority. The amber only lands where it matters — CTAs, key numbers, accreditation signals — so every time it appears, it means something.

**The differentiator:**
The amber-on-charcoal palette, used with absolute restraint. Most Bristol electrician sites are blue-and-white safety notices. This one feels like the inside of a room Gary just wired — dark, warm, everything working.

**What this site is deliberately not:**
The bright-blue/white generic electrician template. No hi-vis yellow, no stock photo of a hard-hatted man pointing at a fuse box, no carousel of corporate logos, no "leading provider of electrical solutions" copy.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary: #C8871A;     /* warm amber — CTAs, active states, accented icons, numbers */
  --color-primary-hover: #E09A2A; /* lighter amber — hover states on buttons and links */
  --color-secondary: #252530;   /* mid charcoal — card backgrounds, alt section fills */
  --color-accent: #C8871A;      /* same as primary — alias for icon/highlight use */
  --color-text: #EFEDE6;        /* warm off-white — all body copy */
  --color-text-muted: #8A8984;  /* warm mid-grey — captions, secondary info, micro-quotes */
  --color-bg: #111116;          /* near-black — page background */
  --color-bg-alt: #1A1A22;      /* deep charcoal — section background alternation */
  --color-border: #2C2C38;      /* subtle border — card edges, dividers */
}
```

*Palette notes: The near-black primary canvas (`--color-bg`) is the defining choice — not a dark navy, not grey, but the colour of a room before the lights are tested. The amber (`--color-primary`) is warm and industrial — closer to aged brass than safety yellow. Usage rule: amber is used only for primary CTAs, icon accents, key statistics, and accreditation signal elements. Never use amber for body text. `--color-text-muted` is used for micro-quotes, location lines in cards, and supporting copy — warm grey rather than cold, in keeping with the amber-lit feel.*

### Typography

**Display font:** `Space Grotesk` from Google Fonts — weights `600, 700`
**Body font:** `Lora` from Google Fonts — weights `400, 500`

*Typography notes: Space Grotesk has the industrial geometric character the brief calls for — it reads as solid and purposeful without being flashy. Its slightly irregular letterforms (the G, S, and J in particular) give it personality missing from Inter or Roboto. Lora provides the warm contrast: a bracketed serif with good rhythm at paragraph sizes, it makes the body copy feel considered and trustworthy rather than utilitarian. The pairing creates the "sturdy display, readable body" hierarchy the brief describes. Use Space Grotesk for all headings (H1–H4), the nav, and CTAs; Lora for body paragraphs, service card one-liners, and testimonial quotes.*

### Other tokens

```css
:root {
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Lora', serif;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.75rem;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.2);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.35);
  --max-width: 1200px;
  --spacing-unit: 1rem;
}
```

---

## 3. File structure

```
sites/gs-jones-electrical-ltd/
├── index.html
├── services.html
├── about.html
├── gallery.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── maps-config.js           (Google Maps only; gitignored; copy from templates/maps-config.example.js)
├── images/
│   └── (none — all images served from R2 library; see Section 7)
├── favicon.svg                  (amber lightning bolt monogram on near-black — see note below)
├── sitemap.xml
├── robots.txt
├── gs-jones-electrical-site-brief.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

*Favicon: `favicon.svg` — a simple lightning bolt / zap glyph in `--color-primary` (#C8871A) on a `--color-bg` (#111116) square background. Compact enough to read at 16×16px. No `favicon.ico` required for this build — modern browsers handle SVG favicons.*

---

## 4. Page specifications

> **Universal requirements — every page without exception:**
> - `<a class="skip-link" href="#main">Skip to content</a>` must be the **first child of `<body>`**
> - `<main id="main">` must wrap all content between the closing `</header>` and opening `<footer>` tags
>
> These are hard requirements for WCAG compliance and achieving a PageSpeed accessibility score of 100.

### 4.1 Home (`index.html`)

**Page title:** `Electrician in Bristol — G S Jones Electrical`
**Meta description:** `Domestic electrician based in Bedminster, serving Bristol and South Bristol for 25+ years. Consumer units, EICRs, fault finding. Call for a free quote.`

**Section structure:**

1. **Header + navigation**
   - Wordmark: `G S Jones Electrical` in Space Grotesk 700, amber on dark nav bar
   - Nav links: Home, Services, About, Gallery, Contact
   - CTA button (top right): `Call Gary` → `tel:07971000442`

2. **Hero section**
   - Full-width dark hero with R2 hero image (overlay: `rgba(17,17,22,0.62)`)
   - Headline: *Bristol's domestic electrician. On time, every time.*
   - Subheadline: *Gary Jones — 25 years in the trade, based in Bedminster. Consumer unit upgrades, EICRs, fault finding and everything in between.*
   - CTA buttons: `Get a free quote` → `contact.html` (amber filled) | `See our services` → `services.html` (ghost/outline)
   - Hero image: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/hero.webp`

3. **Trust strip** (single row, dark background, 4 columns)
   - `25+` Years in the trade
   - `100%` Checkatrade recommendation rate
   - Part P registered — self-certifying
   - Based in Bedminster, BS3
   - *(Each stat: large amber number/label in Space Grotesk 700, small descriptor in Lora below)*

4. **Services overview** (3 featured service cards + link)
   - Section heading: *What Gary does*
   - 3 featured cards: Consumer Unit Upgrades, EICRs, Fault Finding & Repairs (icons: `zap`, `file-check`, `search`)
   - Each card: Lucide icon (amber, 40px), card title, one-liner, `--color-bg-alt` background
   - Footer link: `See all eight services →` → `services.html`

5. **About teaser**
   - Section heading: *No call centre. No subcontractors. Just Gary.*
   - Copy: *G S Jones Electrical has served Bristol homes since 2014 — but Gary Jones has been in the trade for over two decades. When you call, Gary answers. When he says he'll be there at 8am, he's there at 8am. When the job's done, it's done right, and he leaves the place cleaner than he found it. That's the deal, every time.*
   - About image (right column on desktop): `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/about.webp`
   - Link: `More about Gary →` → `about.html`

6. **Gallery teaser**
   - Section heading: *Real jobs, real Bristol homes*
   - 3 cards displayed (cards 1–3 from the full 6 — icon + job type + location + micro-quote)
   - `See all our work →` link → `gallery.html`
   - **No images at demo stage** — icon/text cards only

7. **Testimonials** (2 featured quotes, dark background)
   - Section heading: *What Bristol homeowners say*
   - Quote 1: *"Every aspect of Gary's work was excellent. He was easy to contact, arrived on time, and the quote was promptly delivered and fairly priced. Delightful man — the complete professional."* — via Checkatrade
   - Quote 2: *"Gary turned up on time, completed the job and left the area clean and tidy. Very nice guy and would be very happy to recommend him."* — Verified reviewer, BS14, Checkatrade
   - Layout: two side-by-side quote cards with amber opening quotation mark, Lora italic body, muted attribution

8. **CTA section** (full-width, cta-bg image with dark overlay)
   - Headline: *Need a Bristol electrician you can trust?*
   - Copy: *Call for a no-obligation quote. Gary covers Bedminster, Southville, Totterdown, Brislington, Knowle, Bishopston, Clifton and wider South Bristol.*
   - CTA button: `Call 07971 000 442` → `tel:07971000442` (large amber filled button)
   - Background: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/cta-bg.webp` with `rgba(17,17,22,0.72)` overlay

9. **Footer**
   - Wordmark + tagline: *G S Jones Electrical Ltd — Bristol's sparky, done right.*
   - Address: Bedminster, Bristol, BS3 2NG
   - Phone: 07971 000 442
   - Email: gjones_54@msn.com
   - Hours: Mon–Fri 8am–6pm *(confirm with Gary)*
   - Facebook: facebook.com/GSJoneselectrical
   - Accreditation badges: Checkatrade, NICEIC *(pending confirmation)*
   - Copyright: © 2025 G S Jones Electrical Ltd. Site by NeoBookworm.

---

### 4.2 Services (`services.html`)

**Page title:** `Electrical Services Bristol — G S Jones Electrical`
**Meta description:** `Consumer unit upgrades, EICRs, lighting, sockets and more. Gary Jones — Bristol domestic electrician, 25+ years experience. Call for a free quote today.`

**Section structure:**

1. **Header + navigation** (same as all pages)

2. **Page intro** (dark, simple)
   - Heading: *Electrical work done right, first time.*
   - Subheading: *Whether it's a single socket or a full consumer unit upgrade, every job gets Gary's full attention.*

3. **Services card grid** (2×4 desktop, 2×4 tablet, 1 column mobile)

| # | Lucide icon | Card title | One-liner |
|---|---|---|---|
| 1 | `zap` | Consumer Unit Upgrades | Replace your fuse board with a modern, safe consumer unit — required for insurance, rewires, and adding new circuits. |
| 2 | `search` | Fault Finding & Repairs | Strange trip-outs, dead sockets, flickering lights? Gary tracks down faults and fixes them properly. |
| 3 | `lightbulb` | Lighting Installation & Upgrades | Indoor and garden lighting from pendant rewires to full LED upgrades — installed to look and work right. |
| 4 | `plug` | Socket & Switch Installation | Extra sockets where you need them, USB sockets, relocations, and switch upgrades — all Part P certified. |
| 5 | `file-check` | EICR Certificates | Electrical Installation Condition Reports for homeowners and landlords. Completed efficiently, certificate issued promptly. |
| 6 | `fan` | Extractor Fan Installation | Kitchen and bathroom extractor fans — new installs, replacements, and repairs, all wired to regulation. |
| 7 | `home` | Kitchen & Extension Electrics | New circuits, cooker points, extra sockets and lighting for extensions and kitchen refits. All notifiable work self-certified under Part P. |
| 8 | `bell` | Smoke Detector Installation | Mains-wired, interlinked smoke and heat detectors — the right protection for your home, fitted by a registered competent person. |

   - Card anatomy: amber icon (40px), Space Grotesk 600 title, Lora one-liner, `--color-bg-alt` background, subtle border

4. **Specialisms callout** (single-column, highlight box or dark card)
   - Heading: *A note on notifiable work*
   - Copy: *As a Part P registered competent person, Gary can self-certify notifiable electrical work — consumer unit replacements, new circuits, and work in special locations like bathrooms — without you needing to separately notify your local authority. Every job comes with the right paperwork. If you're a landlord, Gary can also provide the EICR your tenants need.*

5. **Accreditation strip** (Checkatrade badge, NICEIC badge, Part P text badge)

6. **CTA section**
   - Heading: *Book Gary for your job*
   - Copy: *Call or use the form — Gary responds promptly and will give you an honest, accurate quote.*
   - Buttons: `Get a free quote` → `contact.html` | `Call 07971 000 442` → `tel:07971000442`

7. **Footer** (same as all pages)

---

### 4.3 About (`about.html`)

**Page title:** `About Gary Jones — Bedminster Electrician, Bristol`
**Meta description:** `Gary Jones has been rewiring Bristol homes for over 25 years. Checkatrade-registered, Part P certified, based in BS3. Find out why Bristol recommends him.`

**Section structure:**

1. **Header + navigation**

2. **About hero** (split layout: copy left, about image right on desktop)
   - Heading: *Two decades. Every type of Bristol home.*
   - Copy: *Gary Jones has been working in Bristol's homes since before most of his customers had a smartphone. Victorian terraces in Totterdown, purpose-built flats in Bedminster, pre-war semis in Knowle — he knows what Bristol's homes look like behind the skirting boards, and he works with that knowledge rather than around it.*
   - About image: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/about.webp`

3. **Gary's story**
   - Heading: *The business behind the name*
   - Copy: *G S Jones Electrical Ltd was incorporated in June 2014, but the reputation it formalised had been building for years. Gary started in the trade in the late 1990s and has spent his career in domestic work — the kind where you're in someone's home, working around their life, and where trust matters as much as competence. His Checkatrade profile tells the story: reviewers mention punctuality, tidiness, fair pricing, and clear communication, again and again, in their own words. His Facebook recommendation rate is 100%.*

4. **Why Gary** (3-column icon grid, `--color-bg-alt` background)
   - Column 1 — `clock` icon: *On time, every time.* — "I'll be there when I say I will" isn't a slogan, it's the standard Gary has held for 25 years.
   - Column 2 — `shield-check` icon: *Clean, careful work.* — Every job is left tidy. No mess, no exposed wiring, no half-finished explanations.
   - Column 3 — `message-circle` icon: *Straight answers.* — You'll get an honest quote, a clear timeline, and a call back. No fudged estimates, no disappearing act.

5. **How it works** (3-step horizontal flow)
   - Step 1: *Call or message Gary* — He'll talk through what you need and arrange a visit to quote.
   - Step 2: *Get a clear, fair quote* — No hidden extras. Gary quotes the job as he sees it.
   - Step 3: *Job done, paperwork issued* — Gary completes the work, certifies it properly, and leaves everything as he found it — or better.

6. **Accreditations section**
   - Heading: *Registered, certified, and covered*
   - Checkatrade CSS badge + "100% recommendation rate"
   - NICEIC CSS badge *(pending Gary's confirmation)*
   - Part P competent person scheme — text badge
   - 18th Edition Wiring Regulations — text badge
   - Companies House registered: G S Jones Electrical Limited (09068515)
   - Public liability insurance — stated in copy

7. **CTA section** (same dark treatment as home)
   - Heading: *Ready to book Gary?*
   - Copy: *Call or message — Gary will get back to you quickly.*
   - Buttons: `Get a free quote` → `contact.html` | `Call 07971 000 442` → `tel:07971000442`

8. **Footer** (same as all pages)

---

### 4.4 Contact (`contact.html`)

**Page title:** `Contact G S Jones Electrical — Bristol Electrician`
**Meta description:** `Get a free quote from Gary Jones — Bristol's trusted domestic electrician. Serving Bedminster, Southville, Totterdown and wider South Bristol. Call today.`

**Section structure:**

1. **Header + navigation**

2. **Contact details** (split layout: details left, map right)
   - Heading: *Get in touch*
   - Phone: 07971 000 442 (large, amber, click-to-call)
   - Email: gjones_54@msn.com
   - Area: Based in Bedminster, BS3 2NG — serving South Bristol and surrounding areas
   - Hours: Mon–Fri 8am–6pm *(confirm with Gary)*
   - Facebook: facebook.com/GSJoneselectrical
   - Short copy: *Gary answers his own calls. If he's on a job and can't pick up, leave a message and he'll call back the same day.*

3. **Contact form** (below or alongside details)
   - Name (text input, required)
   - Phone number (tel input, required)
   - Email address (email input, required)
   - Type of job (select dropdown, required): Consumer unit upgrade / Fault finding / Lighting installation / Sockets & switches / EICR / Extractor fan / Kitchen & extension electrics / Smoke detectors / Other
   - Brief description of the job (textarea, placeholder: "Tell Gary a bit about what you need — location, any specific concerns, rough timescale.")
   - Preferred contact method (radio: Phone / Email)
   - Submit button: `Send enquiry`
   - Form success message: *"Thanks — Gary will be in touch shortly."*
   - *(Static HTML form — Netlify Forms attribute `netlify` on `<form>` tag)*

4. **Service area map** (Google Maps, below the form)
   - Map type: **Google Maps** — radius circle centred on Bedminster (51.4420, -2.5991), radius 12 miles (19,312 metres)
   - Optional town markers (if adding): Bedminster, Southville, Totterdown, Brislington, Knowle, Bishopston, Clifton
   - API key: via `js/maps-config.js` (gitignored; copy from `templates/maps-config.example.js`)
   - Map container `aria-label`: "G S Jones Electrical service area — 12 miles from Bedminster, Bristol"
   - Legend copy: *Gary covers approximately 12 miles from Bedminster — if you're unsure whether you're in the area, just call.*
   - Fallback when no API key: show the legend text only; map div hidden via JS when key is absent

5. **Footer** (same as all pages)

---

### 4.5 Gallery (`gallery.html`)

**Page title:** `Our Work — G S Jones Electrical, Bristol`
**Meta description:** `Recent electrical jobs across South Bristol — consumer units, lighting, EICRs and more. All work by Gary Jones, domestic electrician based in Bedminster.`

**Section heading:** *What Gary's been up to*

**Page strapline (optional, beneath H1):** *Recent jobs across Bedminster, Brislington, Totterdown and wider South Bristol.*

**Card grid layout:**
- Desktop: 3 columns
- Tablet (≤768px): 2 columns
- Mobile (≤480px): 1 column, full width

**Cards (6 total):**

> ⚠️ **Demo stage rule:** Gallery cards are **icon + text only**. Zero `<img>` tags in the gallery section or page at demo stage. When real client photos are available at productionisation, each card receives an `<img>` above the icon and the icon is removed — no structural changes required.

| # | Lucide icon | Job type heading | Location | Micro-quote |
|---|---|---|---|---|
| 1 | `zap` | Consumer Unit Upgrade | Brislington, BS14 | "Gary arrived on time and left the area clean and tidy." |
| 2 | `lightbulb` | Kitchen & Extension Lighting | Bedminster, BS3 | "Great communicator, professional and great end product." |
| 3 | `search` | Fault Finding & Repair | Totterdown, BS4 | "Had it working within minutes — very friendly." |
| 4 | `file-check` | Electrical Condition Report (EICR) | Knowle, BS4 | "Arrived on time, gave his quote promptly and fairly." |
| 5 | `plug` | Socket & Switch Installation | Southville, BS3 | "Reasonable price and Gary is always very polite." |
| 6 | `fan` | Extractor Fan Installation | Bishopston, BS7 | "Quick, tidy and efficient. Highly recommended." |

**Card anatomy (each card must include):**
- Lucide icon (trade-appropriate, sized ~48px, coloured `var(--color-primary)`)
- Job type heading (H3, Space Grotesk 600)
- Location line (with small `map-pin` Lucide icon or 📍 emoji, `var(--color-text-muted)`)
- Micro-quote (italicised Lora, `var(--color-text-muted)`, smaller text)

**"Back to home" link:** Include a visible text link `← Back to home` → `index.html` at the top of the page body (below the nav, above the H1).

---

## 5. SEO Outputs

### Per-page SEO

| Page | Title tag (≤65 chars) | Meta description (140–155 chars, includes CTA) | og:title | og:description |
|---|---|---|---|---|
| Home (`index.html`) | `Electrician in Bristol — G S Jones Electrical` | `Domestic electrician based in Bedminster, serving Bristol and South Bristol for 25+ years. Consumer units, EICRs, fault finding. Call for a free quote.` | G S Jones Electrical — Electrician in Bristol | Domestic electrician in Bedminster, Bristol. 25+ years experience. Consumer units, EICRs, fault finding and more. Call for a free quote. |
| Services (`services.html`) | `Electrical Services Bristol — G S Jones Electrical` | `Consumer unit upgrades, EICRs, lighting, sockets and more. Gary Jones — Bristol domestic electrician, 25+ years experience. Call for a free quote today.` | Electrical Services Bristol — G S Jones Electrical | Consumer unit upgrades, EICRs, lighting, sockets and more. Bristol domestic electrician, 25+ years experience. |
| About (`about.html`) | `About Gary Jones — Bedminster Electrician, Bristol` | `Gary Jones has been rewiring Bristol homes for over 25 years. Checkatrade-registered, Part P certified, based in BS3. Find out why Bristol recommends him.` | About Gary Jones — G S Jones Electrical, Bristol | Gary Jones — Bristol domestic electrician for over 25 years. Checkatrade-registered, Part P certified, based in Bedminster. |
| Gallery (`gallery.html`) | `Our Work — G S Jones Electrical, Bristol` | `Recent electrical jobs across South Bristol — consumer units, lighting, EICRs and more. All work by Gary Jones, domestic electrician based in Bedminster.` | Our Work — G S Jones Electrical, Bristol | Recent electrical jobs across Bedminster, Brislington, Totterdown and South Bristol by Gary Jones, domestic electrician. |
| Contact (`contact.html`) | `Contact G S Jones Electrical — Bristol Electrician` | `Get a free quote from Gary Jones — Bristol's trusted domestic electrician. Serving Bedminster, Southville, Totterdown and wider South Bristol. Call today.` | Contact G S Jones Electrical — Bristol Electrician | Get a free quote from Gary Jones — Bristol's trusted domestic electrician. Serving Bedminster and wider South Bristol. |

### LocalBusiness JSON-LD schema

Paste this block verbatim into the `<head>` of every page (update the `url` field per page if desired):

```json
{
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "name": "G S Jones Electrical Ltd",
  "description": "Domestic electrician based in Bedminster, Bristol, serving South Bristol and surrounding areas for over 25 years.",
  "telephone": "07971000442",
  "email": "gjones_54@msn.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bedminster",
    "addressRegion": "Bristol",
    "postalCode": "BS3 2NG",
    "addressCountry": "GB"
  },
  "areaServed": "Bedminster, Southville, Totterdown, Brislington, Knowle, Bishopston, Clifton and wider South Bristol",
  "url": "[fill in after Netlify deploy]",
  "priceRange": "££",
  "openingHours": "Mo-Fr 08:00-18:00"
}
```

---

## 6. Copy bank

All unique microcopy gathered in one place for easy review:

- **Main CTA text:** `Get a free quote`
- **Secondary CTA text:** `Call 07971 000 442`
- **Header nav CTA text:** `Call Gary`
- **Form submit button:** `Send enquiry`
- **Form success message:** `Thanks — Gary will be in touch shortly.`
- **404 page message:** `This page doesn't exist — but Gary probably can fix whatever brought you here. Head back home or give him a call.`
- **Footer tagline:** `G S Jones Electrical Ltd — Bristol's sparky, done right.`
- **Gallery teaser link text:** `See all our work →`
- **Gallery page strapline:** `Recent jobs across Bedminster, Brislington, Totterdown and wider South Bristol.`
- **Services page teaser link text:** `See all eight services →`
- **About page link text (from home):** `More about Gary →`

---

## 7. Image manifest

All images are served from the NeoBookworm R2 library. No bespoke images required — the `electrician` trade category is established.

**Trade category slug:** `electrician`
**R2 base:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library`

| Section | Image URL | Alt text | Notes |
|---|---|---|---|
| Hero | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/hero.webp` | Electrician working in a Bristol home | Full-width, 1920×1080px. Dark overlay at 62% opacity. |
| About | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/about.webp` | Gary Jones, domestic electrician, Bristol | Used in About teaser (home) and About page hero. 800×600px. |
| CTA background | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/electrician/cta-bg.webp` | Used as CSS background-image — no alt required | Applied as `background-image` with 72% dark overlay. |

**Shared assets:** None used for this build — the electrician trade images are sufficient. The `shared/owner.webp` portrait is available as an optional swap for the About image if a candid tradesperson portrait suits better once reviewed.

> **`width` and `height` attributes:** Hero `<img>` tag: `width="1920" height="1080"`. About `<img>` tag: `width="800" height="600"`. CTA background used as CSS `background-image` on a container — no `<img>` tag, no attributes required.

> **Gallery — no images at demo stage.** The gallery teaser (index.html) and full gallery page (gallery.html) use icon/text cards only. No R2 URLs are assigned to gallery cards.

---

## 8. Accreditations

CSS badges from the NeoBookworm badge library only. No real trademark logos.

- **Checkatrade** — footer of every page; accreditations section on About page; accreditation strip on Services page
- **NICEIC** *(pending confirmation with Gary — include as placeholder; remove if not registered)* — same positions as Checkatrade
- **Part P** — text badge or CSS badge; About page accreditations section; Services specialisms callout
- **18th Edition Wiring Regulations** — text badge; About page accreditations section

*If Gary confirms neither NICEIC nor NAPIT: replace NICEIC badge with "Competent Person Scheme Registered" text badge and include a note in copy about self-certification under Part P.*

---

## 9. Interactive elements

- **Mobile navigation menu:** hamburger toggle (three-line icon), full-screen overlay on open; close on nav link click or outside tap
- **Click-to-call links:** all phone number instances use `<a href="tel:07971000442">` — test on mobile
- **Contact form:** Netlify Forms (`netlify` attribute on `<form>` tag); no JS required for submission; form success message via Netlify redirect or inline state
- **Google Maps service area (contact.html):** radius circle centred on Bedminster (51.4420, −2.5991), radius 19,312 metres (12 miles); optional town markers; API key loaded from `js/maps-config.js` (gitignored); map hidden gracefully if key is absent; `ResizeObserver` + `google.maps.event.trigger(map, 'resize')` + `map.fitBounds(circle.getBounds(), {padding: 40})` for correct framing; classic `google.maps.Marker` pattern (no Map ID required, no `AdvancedMarkerElement`)

---

## 10. Accessibility notes

- **Colour contrast:** `--color-text` (#EFEDE6) on `--color-bg` (#111116) ≈ 16:1 — well above WCAG AA (4.5:1). `--color-primary` (#C8871A) on `--color-bg` (#111116) ≈ 4.7:1 — passes AA for large text and UI components; do **not** use amber for body-size text on dark backgrounds
- **Image alt text:** specified per image in Section 7 above — builder copies from there, does not write alt text ad hoc
- **`width` and `height` on `<img>` tags:** specified in Section 7; mandatory to prevent CLS
- **Gallery cards:** Lucide icons must have `aria-hidden="true"` (purely decorative); the job type heading provides the accessible card label
- **Map container:** `aria-label="G S Jones Electrical service area — 12 miles from Bedminster, Bristol"` (see Section 4.4)
- **Skip link:** `<a class="skip-link" href="#main">Skip to content</a>` as first child of `<body>` — every page; visually hidden until focused
- **Form labels:** every form input must have an explicit `<label for="...">` — no placeholder-only labelling
- **Focus indicators:** ensure `:focus-visible` styles are visible and high-contrast against dark backgrounds — amber outline on dark background is suitable
- **Lucide icons in nav/CTA:** any icon used without adjacent visible text must have `aria-label` on the parent element

---

## 11. Open questions

The following need Nick's decision or Gary's confirmation before the HTML build starts:

1. **NICEIC or NAPIT registration** — the most important trust signal for a Bristol domestic electrician. Confirm with Gary which scheme (if any) he belongs to. The spec assumes NICEIC as placeholder; update badge if it's NAPIT, or replace with Part P text badge only.
2. **18th Edition certification** — standard for any active UK domestic electrician; worth confirming explicitly for copy accuracy.
3. **Operating hours** — spec assumes Mon–Fri 8am–6pm. Confirm with Gary before copy is locked.
4. **Second Companies House director** — brief notes a second director (b. Oct 1984, appointed May 2017). Is this person customer-facing or entirely behind the scenes? Copy currently assumes Gary is sole public face.
5. **Phone number status** — 07971 000 442 appears to be Gary's direct mobile. If this is the number he's happy to publish, no change needed. If he wants a separate business line, this must be resolved before SEO copy is locked (NAP consistency requirement).
6. **Google Business Profile** — brief flags this as absent. Worth raising at first contact as a free quick win before the site goes live.

---

*Spec complete. Review, tweak if needed, commit as `gs-jones-electrical-ltd: spec generated`, and move to Phase 3 of PROCESS.md.*
