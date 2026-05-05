# Site Spec — `Top Gas Heating & Plumbing Ltd`

This document is generated in Phase 2 of `PROCESS.md` by Cursor, using the site brief as input. It locks in every content and design decision *before* any HTML is written, so you can review and tweak cheaply. It's also the exact artifact Agent 6 will eventually produce and consume internally when building real client sites.

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**
This site commits to **workhorse warmth** — the visual language of a trade that shows up, does the job, and doesn't make a performance of it. The palette is drawn from the gas hob igniting: deep charcoal backgrounds, a flame-amber accent that never shouts, and off-white content sections that feel like a freshly plastered wall rather than a showroom. Typography is condensed and unapologetic — Barlow Condensed in heavy weights gives the headings the feel of van lettering, type you'd trust to be there in the rain. Every layout decision reinforces the same message: solid, local, two decades deep. Nothing is here to impress. Everything is here to reassure.

**The differentiator:**
The **twenty-year anchor** — every section quietly returns to it. Not as a boast, but as a plain fact. The headline isn't "expert engineers" or "premium service"; it's *twenty years, still Bristol's first call.* This is the one thing no competitor can fake, and this site makes sure you feel it from the first line.

**What this site is deliberately not:**
Not the template plumber site (blue/white, stock photo of a man pointing at a boiler, "your local plumbing experts"). Not glossy or polished. Not corporate. Closer in spirit to a respected local restaurant that's been in the same spot for two decades: it doesn't need to shout.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary: #1C1C1C;    /* Deep charcoal — hero backgrounds, nav, dark sections */
  --color-secondary: #2B2B2B;  /* Slightly lifted charcoal — dark card backgrounds, footers */
  --color-accent: #D96714;     /* Flame amber — gas hob orange; CTAs, pull quotes, icon highlights only */
  --color-text: #1C1C1C;       /* Body text on light backgrounds */
  --color-text-muted: #5A5450; /* Supporting text, captions, micro-quotes — warm grey-brown */
  --color-text-inverse: #F5F0EB; /* Body text on dark/charcoal backgrounds */
  --color-bg: #FAF8F5;         /* Main content background — warm off-white */
  --color-bg-alt: #F0EDE8;     /* Alternate section background — slightly deeper cream */
  --color-border: #DDD8D2;     /* Subtle warm border for cards and dividers */
}
```

*Palette notes: The accent `#D96714` is used sparingly — it appears on CTA buttons, the Gas Safe badge highlight, pull quote borders, and active nav state only. It must never appear on body text. Dark sections (`--color-primary`, `--color-secondary`) use `--color-text-inverse` for all text. Contrast on the dark hero: `#F5F0EB` on `#1C1C1C` is approximately 14:1, well above WCAG AA. Contrast of `--color-accent` on `--color-primary`: approximately 4.7:1 — passes AA for large text (headings) but should not be used for small body copy on charcoal.*

### Typography

**Display font:** `Barlow Condensed` from Google Fonts — weights `600, 700, 800`
**Body font:** `Barlow` from Google Fonts — weights `400, 500`

*Notes: Barlow Condensed was chosen for its compressed, high-authority feel — the kind of type you'd see on the side of a well-maintained trade van. It scales confidently from a two-word hero headline to a service card title. Barlow (the companion non-condensed family) as body type gives perfect visual coherence — same skeleton, different expression. Together they read as a single considered choice rather than two fonts pasted together. No italics in headings. Reserve italics for the micro-quotes on gallery cards.*

### Other tokens

```css
:root {
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body: 'Barlow', sans-serif;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.75rem;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.10);
  --max-width: 1200px;
  --spacing-unit: 1rem;
}
```

---

## 3. File structure

```
sites/top-gas-heating-ltd/
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
├── favicon.svg                  (wordmark: "TG" monogram in --color-accent on --color-primary square)
├── favicon.ico                  (optional fallback for older clients)
├── sitemap.xml
├── robots.txt
├── site-brief-top-gas-heating.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

*Favicon: `favicon.svg` — square with `--color-primary` fill, "TG" monogram in `--color-accent` using Barlow Condensed 800. Simple and legible at 16px. `favicon.ico` to be generated from the SVG and included for older browser support.*

---

## 4. Page specifications

> **Universal requirements — every page without exception:**
> - `<a class="skip-link" href="#main">Skip to content</a>` must be the **first child of `<body>`**
> - `<main id="main">` must wrap all content between the closing `</header>` and opening `<footer>` tags
> - The **GA4 snippet** (see Section 5) must be present in `<head>` on every page
>
> These are hard requirements for WCAG compliance and achieving a PageSpeed accessibility score of 100.

---

### 4.1 Home (`index.html`)

**Page title:** `Boiler Installer & Gas Engineer, Bristol | Top Gas Heating`
**Meta description:** `Gas Safe registered gas engineers in Bristol with 20 years' experience. Boiler installations, repairs, servicing and CP12 certificates. Call 0117 961 2862 for a free quote.` *(177 chars — trim to: "Gas Safe registered Bristol gas engineers since 2005. Boiler installs, repairs, servicing & CP12. Family-run. Call 0117 961 2862 today." = 136 chars — acceptable)*

**Section structure:**

1. **Header + navigation**
   - Wordmark: "TOP GAS" in Barlow Condensed 800, `--color-accent` + "HEATING & PLUMBING" in Barlow Condensed 600, `--color-text-inverse`, on `--color-primary` background
   - Nav links: Home | Services | About | Gallery | Contact
   - Header CTA button: "Call 0117 961 2862" — `--color-accent` fill, `--color-primary` text, no border radius (or minimal `--radius-sm`); links to `tel:01179612862`
   - Sticky on scroll; mobile: hamburger toggle revealing full-width overlay menu

2. **Hero section**
   - Background: `hero.webp` (R2) with a 55% dark overlay (`--color-primary` at opacity 0.55)
   - Headline (H1): *"Twenty Years. Still Bristol's First Call."*
   - Subheadline: *"Gas Safe registered engineers based in Kingswood, covering Bristol and the surrounding area. Boiler installations, repairs, central heating — done properly, by people who've been doing it since 2005."*
   - CTA buttons: Primary — "Call 0117 961 2862" (`tel:01179612862`); Secondary — "See our services" → `services.html`
   - Trust strip below buttons: three inline items separated by a vertical rule — `Gas Safe Reg. 215587` | `Trading since 2005` | `100% recommendation rate`

3. **Services overview strip**
   - Section heading (H2): *"What We Do"*
   - Subheading: *"From a new boiler to a dripping tap. Gas Safe registered and family-run."*
   - Three teaser cards (icon + heading + one-liner), linking to the relevant anchor on `services.html`:
     - Flame icon — "Boiler Installation & Servicing" — *"New boilers fitted and existing boilers kept running. All makes."*
     - Thermometer icon — "Central Heating" — *"Full heating system installations and upgrades across Bristol."*
     - ShowerHead icon — "Plumbing" — *"Bathrooms, leaks, and everything in between."*
   - Link below cards: "See all services, including CP12 and emergency callouts →" → `services.html`

4. **Story / trust section**
   - Left: `about.webp` (R2), right: text column (reverses on mobile)
   - H2: *"A Family Business. A Local Reputation."*
   - Copy: *"Top Gas started in 2005, and it's still the same family running it now. Daniel took over from his father Dennis — no announcements, no press release, just a quiet handover the way trades work. We're based in Kingswood and most of our work still comes the same way it always did: someone tells a neighbour.*
   *In twenty years of trading through recessions, lockdowns, and a Bristol housing market that never sits still, we haven't changed much. We answer the phone. We turn up when we say we will. We don't make a mess of your house.*
   *That's it. Give us a call."*
   - Link: "More about us →" → `about.html`

5. **Gallery teaser section**
   - Section heading (H2): *"Work We're Proud Of"* (from brief Section 10)
   - 3 cards displayed (cards 1–3 from the full 6 — see Section 4.5 for full gallery card spec)
   - "See all our work →" link pointing to `gallery.html`
   - **No images at demo stage** — icon/text cards only

6. **CTA band**
   - Background: `cta-bg.webp` (R2) with `--color-primary` at ~65% overlay
   - H2: *"Need a gas engineer in Bristol?"*
   - Copy: *"We cover Kingswood, Fishponds, Staple Hill, Warmley, Downend, Clifton, and all of greater Bristol. One call and we'll sort it."*
   - CTA buttons: "Call 0117 961 2862" (primary, `--color-accent`) + "Email us" → `mailto:dantopgas@gmail.com` (secondary, outlined)

7. **Footer**
   - Wordmark (text only)
   - Address: 86 Charlton Road, Kingswood, Bristol, BS15 1HF
   - Phone: 0117 961 2862
   - Email: dantopgas@gmail.com
   - Hours: Mon–Fri 8am–6pm
   - Links: Home | Services | About | Gallery | Contact
   - Gas Safe CSS badge (from NeoBookworm badge library)
   - Copyright: © 2025 Top Gas Heating & Plumbing Ltd · Website by [NeoBookworm.uk](https://neobookworm.uk)

---

### 4.2 Services (`services.html`)

**Page title:** `Boiler Installation, Heating & Plumbing in Bristol | Top Gas`
**Meta description:** `Gas Safe registered heating engineers covering Bristol. Boiler installation, repairs, servicing, central heating, CP12 certificates and emergency callouts. Call 0117 961 2862.` *(178 chars — trim: "Boiler installation, repairs, CP12 certificates and central heating from Gas Safe registered engineers in Bristol. Call 0117 961 2862 today." = 141 chars ✓)*

**Section structure:**

1. **Header** (shared component — consistent across all pages)

2. **Page hero strip**
   - Narrow dark band (`--color-primary`), text only — no hero image on interior pages
   - H1: *"Our Services"*
   - Strapline: *"Gas Safe registered. Bristol-based. Twenty years in the trade."*

3. **Services card grid**
   - 3-column desktop / 2-column tablet / 1-column mobile
   - Each card: Lucide icon (~40px, `--color-accent`) + H2 service title + two-sentence description + optional note
   - Six cards:

   | # | Lucide icon | Service title | Copy |
   |---|---|---|---|
   | 1 | `Flame` | Boiler Installation | *"Whether you're replacing an old boiler or installing one in a new build, we'll advise on the right unit and fit it properly. All makes and models. Gas Safe registered."* |
   | 2 | `Wrench` | Boiler Repair & Servicing | *"Regular servicing keeps your boiler running efficiently and your warranty valid. If it's broken, we'll diagnose and fix it — no unnecessary upselling."* |
   | 3 | `Thermometer` | Central Heating Installation | *"Full central heating systems installed and upgraded. Radiators, pipework, controls — we handle all of it. Older homes and new builds."* |
   | 4 | `Droplets` | General Plumbing | *"Bathroom installations, leaks, pipework, and the jobs that don't fit neatly into any other category. If it involves water in a home, we can help."* |
   | 5 | `ClipboardCheck` | Landlord CP12 Certificates | *"We issue Gas Safety Certificates (CP12) for landlords and letting agents across Bristol. Certificated, documented, and done in one visit."* |
   | 6 | `AlertTriangle` | Boiler Breakdowns | *"Cold house, no hot water — it needs fixing today. Call us and we'll do our best to get to you the same day. Bristol and surrounding area."* |

4. **Gas Safe note**
   - Short paragraph in a warm-toned box: *"All our work is carried out by Gas Safe registered engineers (Reg. No. 215587). Gas Safe registration is a legal requirement for anyone working on gas appliances in the UK — if you're ever unsure, you can verify any engineer at gassaferegister.co.uk."*

5. **CTA band** (same as index, reused component)

6. **Footer** (shared)

---

### 4.3 About (`about.html`)

**Page title:** `About Top Gas | Gas Engineers in Bristol Since 2005`
**Meta description:** `Top Gas Heating & Plumbing has been serving Bristol since 2005. A family business run by Daniel Southard, Gas Safe registered, with a 100% recommendation record. Read our story.` *(178 chars — trim: "Top Gas Heating has served Bristol since 2005. Family-run by Gas Safe registered engineer Daniel Southard. Find out more about the team." = 136 chars ✓)*

**Section structure:**

1. **Header** (shared)

2. **Page hero strip** (dark band, text only)
   - H1: *"About Top Gas"*
   - Strapline: *"Kingswood-born. Bristol-built. Twenty years and counting."*

3. **Origin story section**
   - H2: *"Started by a Father. Still Run by the Family."*
   - Copy (two paragraphs): *"Top Gas Heating & Plumbing was founded in 2005 by Dennis Southard, a heating engineer who'd spent his career doing the job properly and wanted a firm that did the same. His son Daniel came on board and took over as the active director in 2020 — the kind of handover that happens quietly, without a press release, the way trades work.*
   *We're based in Kingswood, five miles east of Bristol city centre, and most of our work still comes the same way it always has: someone mentions us to a neighbour. That suits us fine. We don't advertise much. We don't need to."*
   - Right column: `about.webp` (R2)

4. **The way we work section**
   - H2: *"How We Do Things"*
   - Three-column icon grid (Lucide icons, `--color-accent`):
     - `PhoneCall` — "We answer the phone" — *"Call us directly. You won't be routed through a call centre."*
     - `Clock` — "We turn up when we say" — *"We know your time matters. If we say 9am, we mean 9am."*
     - `Sparkles` — "We leave the place clean" — *"We work in people's homes. We treat them accordingly."*

5. **Gas Safe registration feature**
   - H2: *"Gas Safe Registered"*
   - Copy: *"All work on gas appliances in the UK must legally be carried out by a Gas Safe registered engineer. Our registration number is 215587 — you can verify it any time at gassaferegister.co.uk. We've held Gas Safe registration throughout our 20 years of trading."*
   - Gas Safe CSS badge displayed prominently

6. **Area served**
   - Brief paragraph: *"We're based in Kingswood, BS15, and cover all of greater Bristol — including Fishponds, Staple Hill, Warmley, Downend, Clifton, Horfield, and the surrounding areas. Not sure if we cover you? Give us a call and we'll tell you straight."*

7. **CTA band** (shared component)

8. **Footer** (shared)

---

### 4.4 Contact (`contact.html`)

**Page title:** `Contact Top Gas | Gas Engineer & Plumber in Bristol`
**Meta description:** `Get in touch with Top Gas Heating & Plumbing in Kingswood, Bristol. Call 0117 961 2862, email dantopgas@gmail.com, or use our contact form. Gas Safe registered.` *(162 chars — trim: "Call or email Top Gas Heating & Plumbing, Kingswood, Bristol. Gas Safe registered. Phone: 0117 961 2862. Request a quote online." = 128 chars ✓)*

**Section structure:**

1. **Header** (shared)

2. **Page hero strip** (dark band, text only)
   - H1: *"Get in Touch"*
   - Strapline: *"We're based in Kingswood, Bristol. Give us a call or use the form below."*

3. **Contact split layout** (two-column: form left, details right — stacks on mobile)

   **Contact form fields:**
   - Name (text, required) — placeholder: "Your name"
   - Phone number (tel, required) — placeholder: "Best number to reach you"
   - Email address (email, required) — placeholder: "Your email address"
   - Service needed (select, required) — options: "Please select…" | "Boiler Installation" | "Boiler Repair or Service" | "Central Heating" | "General Plumbing" | "Landlord CP12 Certificate" | "Boiler Breakdown" | "Other"
   - Message (textarea, optional) — placeholder: "Anything else we should know? (optional)"
   - Submit button: "Send message" — `--color-accent` fill

   **Contact details panel:**
   - Phone (linked): 0117 961 2862
   - Email (linked): dantopgas@gmail.com
   - Address: 86 Charlton Road, Kingswood, Bristol, BS15 1HF
   - Hours: Monday–Friday, 8am–6pm
   - Gas Safe badge

4. **Service area map**
   - **Google Maps** with radius circle
   - Centre point: Kingswood, Bristol (lat `51.4579`, lng `-2.4853`)
   - Radius: **8 miles** (covers Clifton, Fishponds, Downend, Warmley, Staple Hill, Bath fringe)
   - Town markers (classic `google.maps.Marker` + SVG icon, no Map ID required):
     - Bristol City Centre
     - Kingswood
     - Fishponds
     - Staple Hill
     - Warmley
     - Downend
     - Clifton
   - Map legend copy: *"We cover Kingswood and greater Bristol — approx. 8-mile radius from BS15."*
   - Map container `aria-label`: `"Service area map showing Top Gas Heating coverage around Bristol"`
   - API key via `js/maps-config.js` (gitignored); no key = map container hidden with a fallback text block (do not show broken map UI)
   - Use the pattern from `sites/fraynes-lofts-ltd/contact.html` for layout and legend

5. **Footer** (shared)

---

### 4.5 Gallery (`gallery.html`)

**Page title:** `Our Work — Top Gas Heating & Plumbing, Bristol`
**Meta description:** `Boiler installations, central heating systems, bathroom fits and gas safety certificates across Bristol. Browse our recent jobs and call 0117 961 2862 for a quote.` *(164 chars — trim: "Boiler installations, central heating and plumbing work across Bristol. Browse recent jobs from Top Gas Heating. Call 0117 961 2862 for a free quote." = 148 chars ✓)*

**Section heading:** *"Twenty Years of Jobs Done Right"* (from brief Section 10)

**Page strapline:** *"A selection of what we've been up to. Most of our work comes via recommendation — these are the jobs the customers still talk about."*

**Card grid layout:**
- Desktop: 3 columns
- Tablet (≤768px): 2 columns
- Mobile (≤480px): 1 column, full width

**Cards (6 total):**

> ⚠️ **Demo stage rule:** Gallery cards are **icon + text only**. Zero `<img>` tags in the gallery section or page at demo stage. When real client photos are available at productionisation, each card receives an `<img>` above the icon and the icon is removed — no structural changes required.

| # | Lucide icon | Job type heading | Location | Micro-quote |
|---|---|---|---|---|
| 1 | `Flame` | New Boiler Installed | Kingswood, Bristol | *"Just what we needed — no fuss, no mess."* |
| 2 | `Wrench` | Boiler Breakdown Repair | Fishponds, Bristol | *"Back up and running the same afternoon."* |
| 3 | `ShowerHead` | Bathroom Fitted | Staple Hill, Bristol | *"Beautiful finish and cleaned up after themselves."* |
| 4 | `Thermometer` | Central Heating Installed | Warmley, Bristol | *"Been warm every winter since."* |
| 5 | `ClipboardCheck` | Landlord Gas Safety Certificate | Clifton, Bristol | *"Reliable, certificated, sorted in one visit."* |
| 6 | `Gauge` | Annual Boiler Service | Downend, Bristol | *"Same engineer, every year. That's how we like it."* |

**Card anatomy (each card must include):**
- Lucide icon (trade-appropriate, sized ~48px, coloured `var(--color-accent)`)
- Job type heading (H3)
- Location line (📍 pin emoji or small Lucide `MapPin` icon, `--color-text-muted`)
- Micro-quote (italicised, `--color-text-muted`, smaller than body text)

**"Back to home" link:** Visible link back to `index.html` at the top of the page body (below the nav), above the H1.

---

## 5. SEO Outputs

### Per-page SEO

| Page | Title tag (≤65 chars) | Meta description (140–155 chars, includes CTA) | og:title | og:description |
|---|---|---|---|---|
| Home (`index.html`) | `Boiler Installer & Gas Engineer, Bristol \| Top Gas Heating` | `Gas Safe registered Bristol gas engineers since 2005. Boiler installs, repairs, servicing & CP12. Family-run. Call 0117 961 2862 today.` | Top Gas Heating & Plumbing — Bristol Gas Engineers | Gas Safe registered gas engineers in Bristol. Boiler installations, repairs, CP12 and central heating from a family business with 20 years' experience. |
| Services (`services.html`) | `Boiler Installation, Heating & Plumbing in Bristol \| Top Gas` | `Boiler installation, repairs, CP12 certificates and central heating from Gas Safe registered engineers in Bristol. Call 0117 961 2862 today.` | Our Services — Top Gas Heating & Plumbing, Bristol | Gas Safe registered engineers covering boiler installation, repair, servicing, central heating, CP12 certificates and emergency callouts across Bristol. |
| About (`about.html`) | `About Top Gas \| Gas Engineers in Bristol Since 2005` | `Top Gas Heating has served Bristol since 2005. Family-run by Gas Safe registered engineer Daniel Southard. Find out more about the team.` | About Top Gas Heating & Plumbing | A family-run gas engineering business based in Kingswood, Bristol, serving the area since 2005. Gas Safe registered. 100% recommendation record. |
| Gallery (`gallery.html`) | `Our Work — Top Gas Heating & Plumbing, Bristol` | `Boiler installations, central heating and plumbing work across Bristol. Browse recent jobs from Top Gas Heating. Call 0117 961 2862 for a free quote.` | Our Work — Top Gas Heating & Plumbing | Recent boiler installations, central heating systems, bathrooms and gas safety certificates completed by Top Gas Heating across greater Bristol. |
| Contact (`contact.html`) | `Contact Top Gas \| Gas Engineer & Plumber in Bristol` | `Call or email Top Gas Heating & Plumbing, Kingswood, Bristol. Gas Safe registered. Phone: 0117 961 2862. Request a quote online today.` | Contact Top Gas Heating & Plumbing, Bristol | Based in Kingswood, BS15. Call 0117 961 2862 or use our online form. Gas Safe registered engineers covering all of greater Bristol. |

*Note: meta descriptions above are approximate — builder to check character count at `charactercounttool.com` and adjust to 140–155 chars. The og: fields above are intentionally longer (no 155-char cap for og:description).*

### LocalBusiness JSON-LD schema

Paste this block verbatim into the `<head>` of every page:

```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Top Gas Heating & Plumbing Ltd",
  "description": "Gas Safe registered gas engineers and boiler installers serving Bristol and surrounding areas since 2005.",
  "telephone": "01179612862",
  "email": "dantopgas@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "86 Charlton Road",
    "addressLocality": "Kingswood",
    "addressRegion": "Bristol",
    "postalCode": "BS15 1HF",
    "addressCountry": "GB"
  },
  "areaServed": "Bristol and surrounding areas including Kingswood, Fishponds, Staple Hill, Warmley, Downend and Clifton",
  "url": "https://top-gas-heating-njb-demo.netlify.app/",
  "priceRange": "££",
  "openingHours": "Mo-Fr 08:00-18:00"
}
```

### GA4 snippet

No Measurement ID confirmed in the brief. Add the following placeholder comment into `<head>` on every page and backfill before Phase 7 QA:

```html
<!-- GA4: G-VQ91NBYHCL pending — add before QA -->
```

When confirmed, replace with:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VQ91NBYHCL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VQ91NBYHCL');
</script>
```

*A missing or placeholder GA4 tag is a QA blocker — must be resolved before Phase 7.*

---

## 6. Copy bank

All unique microcopy gathered in one place for easy review:

- **Main CTA text:** "Call 0117 961 2862"
- **Secondary CTA text:** "See our services"
- **Tertiary CTA text:** "Email us" → `mailto:dantopgas@gmail.com`
- **Form submit button:** "Send message"
- **Form success message:** "Thanks — we'll be in touch shortly. If it's urgent, call us on 0117 961 2862."
- **404 page message:** "Page not found. Head back to the home page or call us on 0117 961 2862."
- **Footer tagline:** "Gas Safe registered. Bristol-based. Trading since 2005."
- **Gallery teaser link text:** "See all our work →"
- **Gallery page strapline:** "A selection of what we've been up to. Most of our work comes via recommendation — these are the jobs the customers still talk about."
- **Trust strip items:** "Gas Safe Reg. 215587" | "Trading since 2005" | "100% recommendation rate"
- **Mobile nav close label:** "Close menu"

---

## 7. Image manifest

All images are served from the NeoBookworm R2 library.

**Trade category slug:** `gas-engineer`
**R2 base:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library`

| Section | Image URL | Notes |
|---|---|---|
| Hero | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/gas-engineer/hero.webp` | Full-width; `width="1920" height="1080"`; dark overlay 55%; `alt="Gas engineer inspecting a boiler in a Bristol home"` |
| About | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/gas-engineer/about.webp` | Half-width column on about.html and index.html story section; `width="960" height="720"`; `alt="Top Gas heating engineer at work in a Bristol property"` |
| CTA background | `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/gas-engineer/about.webp` | Full-width band; dark overlay 65%; `width="1920" height="600"`; `alt=""` (decorative — `aria-hidden="true"` on `<img>`) |

**Shared assets — none required at demo stage.** The story of this business is carried by copy and the three trade images above. The van and tools assets are available if the About page needs a second visual; skip unless layout requires it.

> **`width` and `height` attributes:** Every `<img>` tag must include `width` and `height` attributes matching the image's natural pixel dimensions (prevents CLS). Use the dimensions specified in the Notes column above.

> **Gallery — no images at demo stage.** Gallery cards are icon/text only. No R2 URLs assigned to gallery cards until productionisation.

---

## 8. Accreditations

CSS badges from the NeoBookworm badge library:

- **Gas Safe** — footer of every page + services page Gas Safe note box + about.html Gas Safe section. This is the only confirmed accreditation. Display Gas Safe Reg. No. 215587 adjacent to the badge wherever it appears.

*No additional badges (Checkatrade, TrustATrader, CIPHE, etc.) confirmed in brief. Do not display placeholders. Gas Safe alone is the primary trust anchor for this trade — it is legally meaningful and sufficient.*

---

## 9. Interactive elements

- **Mobile navigation menu:** hamburger toggle (Lucide `Menu` icon); full-screen overlay on open with `--color-primary` background; close button (Lucide `X`); trap focus while open; `aria-expanded` state toggled on button
- **Contact form:** client-side validation (required fields, email format); on success, replace form with success message (no page reload); `action` build Netlify Forms markup but comment out the netlify attribute and form-name hidden field for demo stage. Phone tel: links should render as styled buttons but with href="#" and disabled styling so they look real but don't dial.
- **Google Maps (contact.html):** radius circle + town markers; key via `js/maps-config.js` (gitignored); classic `google.maps.Marker` + SVG data-URL icons (no Map ID required); `map.fitBounds(circle.getBounds(), {padding: 40})`; fallback: if `window.__GMAPS_KEY__` is absent or map fails to load, hide map container and show: *"We cover Kingswood and greater Bristol — approximately 8 miles from BS15. Call us to confirm coverage."*
- **Smooth scroll:** anchor links use `scroll-behavior: smooth` via CSS (no JS needed)

---

## 10. Accessibility notes

- **Colour contrast — dark sections:** `--color-text-inverse` (`#F5F0EB`) on `--color-primary` (`#1C1C1C`) ≈ 14:1. Passes WCAG AA and AAA.
- **Colour contrast — light sections:** `--color-text` (`#1C1C1C`) on `--color-bg` (`#FAF8F5`) ≈ 17:1. Passes.
- **Accent on dark:** `--color-accent` (`#D96714`) on `--color-primary` (`#1C1C1C`) ≈ 4.7:1. Passes AA for large text (≥24px or ≥18.5px bold). Do not use accent for small body copy on charcoal.
- **Skip link:** `<a class="skip-link" href="#main">` — must be the first child of `<body>` on every page; visible on keyboard focus only (use CSS clip/transform technique)
- **`alt` attributes for R2 images:**
  - Hero: `"Gas engineer inspecting a boiler in a Bristol home"`
  - About: `"Top Gas heating engineer at work in a Bristol property"`
  - CTA background: `""` with `role="presentation"` (purely decorative)
- **Gallery Lucide icons:** `aria-hidden="true"` on all SVG icons in gallery cards (decorative); job type H3 provides the accessible card label
- **Service cards (services.html):** Lucide icons `aria-hidden="true"`; heading text carries the accessible meaning
- **Map container:** `aria-label="Service area map showing Top Gas Heating coverage around Bristol"` on the wrapper div
- **Form labels:** every input must have an explicit `<label>` with matching `for`/`id` pair — no placeholder-only labelling
- **CLS prevention:** `width` and `height` on every `<img>`; no layout shift from images or fonts (use `font-display: swap` on Google Fonts import)

---

## 11. Open questions

- **GA4 Measurement ID** — not in the brief. Request from Daniel or set up a new GA4 property before Phase 7 QA. Build with placeholder comment.
- **Contact form backend** — confirm whether to use Netlify Forms (free tier, easiest for this stack) or a mailto fallback. Netlify Forms requires `netlify` attribute on `<form>` and a hidden `form-name` field.
- **Domain** — `topgasheating.co.uk` suggested in brief. Confirm availability and whether Daniel will register it. The Netlify deploy URL used during QA should be replaced with the production domain in the JSON-LD `url` field and sitemap before launch.
- **Real testimonials** — brief notes Facebook video testimonials. At productionisation, consider quoting one with Daniel's permission. At demo stage, no testimonials section is included (the micro-quotes on gallery cards are the only social proof).

---

*Spec complete. Review, tweak if needed, commit as `top-gas-heating-ltd: spec generated`, and move to Phase 3 of PROCESS.md.*
