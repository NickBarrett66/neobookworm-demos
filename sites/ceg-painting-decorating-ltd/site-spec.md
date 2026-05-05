# Site Spec — `C.E.G Painting & Decorating`

This document is generated in Phase 2 of `PROCESS.md` by Cursor, using the site brief as input. It locks in every content and design decision *before* any HTML is written.

---

## 1. Creative direction

**Aesthetic statement:**
Linen and sage. This site reads like the inside of a well-kept Wiltshire home — warm off-white backgrounds, a dusty sage green accent, generous whitespace, and typography that feels made rather than generated. The overall effect is quiet confidence: a business with nothing to prove and no interest in shouting. Every layout decision reinforces the same message as the copy — this decorator is thorough, unhurried, and takes preparation seriously. The site does not try to be impressive. It tries to be trusted.

**The differentiator:**
The stillness. Most trade sites are working hard to convince you. This one just presents the facts — a decade of local work, a straight price, someone who turns up. The whitespace is deliberate; the copy is short and plainspoken. The sage green is the colour of a Farrow & Ball tin, not a branded workwear polo. The site feels finished in the same way a well-painted room does: nothing out of place, nothing unnecessary.

**What this site is deliberately not:**
Not a bold-blue-and-white "Power of Painting" corporate-feeling trade site. Not a site that uses words like "bespoke," "transform," or "solutions." Not template-looking. The two local competitors (nih-decorating.co.uk, wiltshiredecorating.co.uk) are functional but generic — this site should feel quieter, more considered, and more confident.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary:     #2C2A27;   /* Deep warm charcoal — headings, nav, footer bg, CTA buttons */
  --color-secondary:   #7A9175;   /* Dusty sage green — icons, accent borders, badges, pull elements */
  --color-accent:      #5A6E57;   /* Darker sage — hover states, active borders, focus rings */
  --color-text:        #2C2A27;   /* Same as primary — main body text */
  --color-text-muted:  #7A7570;   /* Warm mid-grey — subheadlines, captions, micro-quotes */
  --color-bg:          #FAFAF8;   /* Near-white with warmth — main page background */
  --color-bg-alt:      #F2EDE6;   /* Warm linen — alternate section background */
  --color-border:      #E0D9D0;   /* Warm light border — card edges, rule lines, dividers */
}
```

**Palette notes:** The palette is inspired by decorator's materials — linen dust sheets, Farrow & Ball sage, warm plaster. `--color-secondary` (#7A9175) achieves a 3.5:1 contrast ratio against `--color-bg` — sufficient for large text (≥24px regular, ≥18px bold) per WCAG AA, but **not** for body text. Usage rule: `--color-secondary` is for icons, decorative elements, borders, and large display headings only — never for body copy or interactive labels. All CTAs use `--color-primary` (charcoal) background with `--color-bg` (warm white) text for a clear pass on contrast. The CTA band uses the R2 cta-bg image with a dark overlay — white text over the overlay will exceed 4.5:1.

### Typography

**Display font:** `Cormorant Garamond` from Google Fonts — weights `600, 700`
**Body font:** `DM Sans` from Google Fonts — weights `400, 500`

**Pairing notes:** Cormorant Garamond is a humanist serif with genuine calligraphic roots — it has the craft character the brief asks for without the over-familiarity of Playfair Display. It reads like a label on a quality paint tin: precise, unhurried, slightly old-world. DM Sans is clean and neutral; paired with Cormorant it recedes helpfully, letting the display type carry the character. Usage rule: Cormorant Garamond for all H1–H3 and pull quotes only. DM Sans for all body copy, nav, buttons, and small-print. Do not set body copy in Cormorant — the optical sizes are mismatched and it breaks the hierarchy.

### Other tokens

```css
:root {
  --font-display:   'Cormorant Garamond', Georgia, serif;
  --font-body:      'DM Sans', system-ui, sans-serif;
  --radius-sm:      0.25rem;
  --radius-md:      0.5rem;
  --radius-lg:      1rem;
  --shadow-sm:      0 1px 2px rgba(44, 42, 39, 0.06);
  --shadow-md:      0 4px 16px rgba(44, 42, 39, 0.10);
  --max-width:      1200px;
  --spacing-unit:   1rem;
}
```

---

## 3. File structure

```
sites/ceg-painting-decorating-ltd/
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
├── favicon.svg                  (CEG monogram — sage green on warm white; see notes below)
├── sitemap.xml
├── robots.txt
├── site-brief-ceg-painting-decorating.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

**Favicon:** `favicon.svg` — a tight monogram "CEG" in Cormorant Garamond 700, `--color-primary` (`#2C2A27`) on a `--color-bg-alt` (`#F2EDE6`) square with rounded corners. No `favicon.ico` required. Phase 4 `<link>` tag: `<link rel="icon" type="image/svg+xml" href="favicon.svg">`.

---

## 4. Page specifications

> **Universal requirements — every page without exception:**
> - `<a class="skip-link" href="#main">Skip to content</a>` must be the **first child of `<body>`**
> - `<main id="main">` must wrap all content between the closing `</header>` and opening `<footer>` tags
> - The **GA4 snippet** (see Section 5) must be present in `<head>` on every page
> - The **LocalBusiness JSON-LD** (see Section 5) must be present in `<head>` on every page
> - Phone number `07875 461486` must appear verbatim in the site header (or nav CTA) and footer on every page

### 4.1 Home (`index.html`)

**Page title:** `Painter Decorator Corsham — C.E.G Painting & Decorating`
**Meta description:** `Trusted painter and decorator based in Corsham, covering Chippenham, Bath and Wiltshire. Over a decade of quality work. Call for a free quote.` *(142 chars)*

**Section structure:**

1. **Header + navigation**
   - Wordmark: "C.E.G" in Cormorant Garamond 700 + "Painting & Decorating" in DM Sans 400, smaller, beneath or beside
   - Nav links: Home · Services · About · Gallery · Contact
   - CTA button (top right): "Get a free quote" → `contact.html`
   - Phone number visible in header on desktop: `07875 461486`

2. **Hero section**
   - Headline: *"The finish is everything."*
   - Subheadline: *"C.E.G Painting & Decorating has been working in homes across Corsham and Wiltshire for over a decade. We come when we say, stick to the price, and leave the place as we found it."*
   - Primary CTA: "Get a free quote" → `contact.html`
   - Secondary CTA: "See our work" → `gallery.html`
   - Layout: text left column (~50%), hero image right column (~50%) on desktop; stacked on mobile with image below text
   - Hero image: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/painter-decorator/hero.webp` — `width="960" height="640"` — `alt="Painter applying careful finish to a wall interior"`

3. **Trust bar (3 icons)**
   - Full-width, `--color-bg-alt` background, subtle `--color-border` top/bottom rule
   - Three items, equal-width columns:
     - Lucide `calendar` icon — "In business since 2013" / "Over a decade of local work"
     - Lucide `shield-check` icon — "Fully insured" / "Public liability covered as standard"
     - Lucide `map-pin` icon — "Based in Corsham" / "Covering Chippenham, Bath & Wiltshire"
   - Icon colour: `--color-secondary`; label text: DM Sans 500

4. **Services overview**
   - Section heading: *"What we do"*
   - Intro paragraph: *"Interior and exterior work, wallpapering, preparation and repair — C.E.G covers the full range of decorating for homes and commercial properties across Corsham and the surrounding area."*
   - Three feature cards (first three services): Interior Painting, Exterior Masonry & Timber, Wallpapering
   - Each card: Lucide icon + title + one-line description (see services.html for full copy)
   - Cards on `--color-bg-alt` background with `--color-border` border
   - Footer link: "All our services →" → `services.html`

5. **About teaser**
   - Layout: two columns — text left, about image right (desktop); text above, image below (mobile)
   - Small label above heading: *"About C.E.G"* in DM Sans 500, `--color-secondary`, uppercase, tracked
   - Section heading: *"A decorator who's been doing this long enough to know what good work looks like."*
   - Body copy: *"C.E.G Painting & Decorating was started by Aaron McBride in 2013, and it's been going ever since — not on advertising, but on the kind of word of mouth that happens when someone's pleased with the work. Aaron works on his own, which means one point of contact from first call to final coat. No subcontractors, no surprises."*
   - CTA link: "About us →" → `about.html`
   - Image: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/painter-decorator/about.webp` — `width="800" height="600"` — `alt="Decorator carefully preparing a room before painting"`

6. **Gallery teaser**
   - Section heading: *"A decade of finishing rooms right"*
   - Subheadline: *"A selection of recent jobs across Corsham, Chippenham, and the surrounding villages."*
   - 3 cards displayed — cards 1, 2, 3 from Section 4.5 gallery spec (icon + heading + location + micro-quote)
   - "See all our work →" link → `gallery.html`
   - **No images — icon/text cards only at demo stage**

7. **CTA band**
   - Background: `cta-bg.webp` with `rgba(44, 42, 39, 0.72)` dark overlay; white text on top
   - Image: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/painter-decorator/cta-bg.webp` — `width="1920" height="600"` — `alt=""` (decorative; `aria-hidden="true"` or CSS background)
   - Heading: *"Ready to get started?"*
   - Body: *"Drop us a message with what you're after and we'll arrange a time to come and take a look. Free quotes, no obligation."*
   - CTA button: "Get in touch" → `contact.html`
   - Prefer CSS `background-image` for this section rather than an `<img>` tag, so `alt` / hidden approach is not needed

8. **Footer**
   - Left: wordmark + tagline *"Corsham's decorator. In business since 2013."*
   - Centre: nav links (Home · Services · About · Gallery · Contact)
   - Right: contact details — `07875 461486`, `c.e.gdecorating@hotmail.com`, Corsham, Wiltshire
   - Accreditation badges row (see Section 8)
   - Bottom bar: *"© 2026 C.E.G Painting & Decorating. Website by [NeoBookworm](https://neobookworm.uk)."*

---

### 4.2 Services (`services.html`)

**Page title:** `Painting & Decorating Services — C.E.G, Corsham`
**Meta description:** `Interior and exterior painting, wallpapering, and preparation work across Corsham, Chippenham, and Wiltshire. Get in touch for a free quote today.` *(147 chars)*

**Section structure:**

1. **Header + navigation** (as all pages)

2. **Page hero (text only — no image)**
   - Background: `--color-bg-alt`; generous padding
   - H1: *"What we do"*
   - Intro paragraph: *"From a fresh interior repaint to exterior masonry work on a Corsham stone cottage — C.E.G covers the full range of decorating services. The prep takes as long as it takes. That's what makes the finish last."*

3. **Services card grid**
   - Desktop: 3 columns; Tablet (≤768px): 2 columns; Mobile (≤480px): 1 column
   - 5 cards total — cards sit on `--color-bg` with `--color-border` border and `--shadow-sm`
   - **Card 1:** Icon `paintbrush` — *"Interior Painting & Decorating"*
     - *"Walls, ceilings, and woodwork finished to a standard that lasts. We work through rooms in order, keep the rest of the house protected, and clean up properly at the end of every day."*
   - **Card 2:** Icon `sun` — *"Exterior Painting & Decorating"*
     - *"Masonry, render, and timber all need different preparation — particularly in a Wiltshire climate. We assess the surface first, use the right primer, and apply paints suited to outdoor exposure."*
   - **Card 3:** Icon `layers` — *"Wallpapering"*
     - *"Standard lining paper or specialist hang — the approach is the same: proper preparation of the surface before a roll is unrolled. Pattern matching and awkward corners are part of the job, not an extra."*
   - **Card 4:** Icon `wrench` — *"Preparation & Repair"*
     - *"Filling, sanding, priming, and making good before any paint goes on. This is the part most decorators rush. It's also the difference between a finish that looks good for a year and one that lasts five."*
   - **Card 5:** Icon `building-2` — *"Residential & Commercial"*
     - *"Most of our work is in homes, but the same standard applies to commercial jobs. C.E.G has operated as a limited company since 2013 — the right level of cover for residential and commercial clients alike."*

4. **Trust strip**
   - Full-width, `--color-primary` background, `--color-bg` text
   - Three items inline: "Fully insured" · "In business since 2013" · "All work guaranteed"

5. **CTA section**
   - Heading: *"Tell us about your job"*
   - Body: *"Whether it's a single room or a full exterior, drop us a message and we'll come and take a look. Free quotes, no obligation."*
   - CTA button: "Get a free quote" → `contact.html`

6. **Footer** (as all pages)

---

### 4.3 About (`about.html`)

**Page title:** `About C.E.G Painting & Decorating — Corsham, Wiltshire`
**Meta description:** `Aaron McBride has been decorating homes across Corsham and Wiltshire since 2013. Quality prep, clean finish, straight price. Call to talk about your job.` *(154 chars)*

**Section structure:**

1. **Header + navigation**

2. **Page hero (text only)**
   - Background: `--color-bg-alt`
   - H1: *"About C.E.G"*
   - Intro: *"Corsham-based. In business since 2013. Built on referrals."*

3. **Main story — two column (text left, image right)**
   - Image: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/painter-decorator/about.webp` — `width="800" height="600"` — `alt="Decorator at work on an interior room, brush in hand"`
   - Body copy (three short paragraphs):

     *"C.E.G Painting & Decorating was started by Aaron McBride in 2013 — as a limited company, which is still how it operates today. No advertising, no leaflet drops. The work came in through word of mouth and stayed that way because the standard stayed consistent."*

     *"Aaron works across Corsham and the surrounding area: Chippenham, Box, Melksham, Calne, Bath. The properties vary — Cotswold stone, Victorian terraces, modern new builds — but the approach stays the same. Good preparation. Careful application. Tidy as you go."*

     *"Working on your own means one person is responsible for the job from start to finish. That's the arrangement, and it's the one that produces the best results. If you'd like to talk about a job, drop a message or give us a ring — we'll come and have a look and give you a straight price."*

4. **Credentials / trust signals**
   - Background: `--color-bg-alt`
   - Section heading: *"Why choose C.E.G?"*
   - Four credential tiles (icon + title + short label):
     - Lucide `award` — *"Over a decade trading"* / "Limited company since October 2013"
     - Lucide `shield-check` — *"Fully insured"* / "Public liability insurance as standard"
     - Lucide `thumbs-up` — *"90% Facebook recommendation"* / "Consistent local satisfaction rating"
     - Lucide `user` — *"Owner-operated"* / "Aaron handles every job personally — no subcontractors"
   - **Conditional:** If PDA membership confirmed before build — add Lucide `badge-check` tile: *"PDA Member"* / "Painting & Decorating Association"
   - **Conditional:** If TrustMark registration confirmed before build — add Lucide `check-circle` tile: *"TrustMark Registered"* / "Government-endorsed quality scheme"

5. **CTA section**
   - Heading: *"Let's talk about your job."*
   - Body: *"Drop us a message or call — we'll arrange a time to come and take a look."*
   - CTA: "Get in touch" → `contact.html`

6. **Footer**

---

### 4.4 Contact (`contact.html`)

**Page title:** `Contact C.E.G Painting & Decorating — Corsham`
**Meta description:** `Get a free quote from C.E.G Painting & Decorating, based in Corsham. Covering Chippenham, Bath, and Wiltshire. Message us or call 07875 461486 today.` *(150 chars)*

**Section structure:**

1. **Header + navigation**

2. **Page hero (text only)**
   - H1: *"Get in touch"*
   - Intro: *"Drop us a message with what you're after and we'll get back to you to arrange a time to come and look at the job."*

3. **Two-column contact section**
   - Left (~55%): Contact form
     - Fields (all required unless noted):
       - Name (text, `placeholder="Your name"`)
       - Phone (tel, `placeholder="Your phone number"`)
       - Email (email, `placeholder="Your email address"`)
       - Message / job description (textarea, `placeholder="Tell us about the job — which rooms, rough size, any prep work needed"`, rows=5)
     - Submit button: "Send message" (see Section 6 copy bank)
     - Form action: Netlify Forms (`netlify` attribute) or configured backend; specify in Phase 4
   - Right (~45%): Contact details panel
     - Phone: `07875 461486` (large, tappable on mobile — `<a href="tel:07875461486">`)
     - Email: `c.e.gdecorating@hotmail.com` (`<a href="mailto:c.e.gdecorating@hotmail.com">`)
     - Location: *"Based in Corsham, Wiltshire"*
     - Hours: *"Monday to Friday, 9am–5pm"*
     - Facebook: [@CorshamDecorators](https://www.facebook.com/CorshamDecorators/) (icon + link)

4. **Service area map**
   - **Approach: Google Maps** — radius circle + town markers; key via gitignored `js/maps-config.js` (copy from `templates/maps-config.example.js`)
   - **Centre point:** Corsham, Wiltshire — `lat: 51.4325, lng: -2.1937`
   - **Radius:** 15 miles (~24,140 metres)
   - **Circle styling:** `fillColor: '#7A9175'` (sage), `fillOpacity: 0.12`, `strokeColor: '#5A6E57'`, `strokeWeight: 2`
   - **Town markers (optional, classic `google.maps.Marker` with small SVG data-URL icon):** Corsham (centre), Chippenham, Box, Melksham, Calne, Bath
   - **Legend copy (below or beside map):** *"We cover Corsham and the surrounding area — roughly a 15-mile radius including Chippenham, Bath, Box, Melksham, and Calne. Not sure if you're in range? Drop us a message."*
   - **Map container:** `aria-label="Service area map showing C.E.G Painting and Decorating coverage around Corsham, Wiltshire"` — `role="application"`
   - **Fallback (no API key):** Hide map container; show static text: *"We cover a 15-mile radius around Corsham, including Chippenham, Bath, Box, Melksham, and Calne."*
   - **Framing:** `map.fitBounds(circle.getBounds(), { padding: 40 })` after render

5. **Footer**

---

### 4.5 Gallery (`gallery.html`)

**Page title:** `Our Work — C.E.G Painting & Decorating, Corsham`
**Meta description:** `Interior repaints, exterior masonry, wallpapering, and woodwork across Corsham, Chippenham, and Box. Browse recent jobs and get in touch for a quote.` *(149 chars)*

**Section heading:** *"Work we're proud of"*
**Page strapline:** *"A selection of jobs from across Corsham and the surrounding area."*

**"Back to home" link:** Visible text link at top of `<main>`, below nav: "← Back to home" → `index.html`

**Card grid layout:**
- Desktop: 3 columns
- Tablet (≤768px): 2 columns
- Mobile (≤480px): 1 column, full width

**Cards (6 total):**

> ⚠️ **Demo stage rule:** Gallery cards are **icon + text only**. Zero `<img>` tags in the gallery section at demo stage.

| # | Lucide icon | Job type heading | Location | Micro-quote |
|---|---|---|---|---|
| 1 | `paintbrush` | Full interior repaint | Corsham | "Left the place cleaner than he found it." |
| 2 | `house` | Exterior masonry & woodwork | Chippenham | "Finished on time, stuck to the price." |
| 3 | `layers` | Wallpaper hang — feature wall | Box | "Took the time to get the pattern right." |
| 4 | `sparkles` | New build finishing | Calne | "Knew exactly what prep the fresh plaster needed." |
| 5 | `door-open` | Woodwork & skirting refresh | Melksham | "Woodwork looks brand new — you'd never know it wasn't." |
| 6 | `wrench` | Preparation & repair before repaint | Corsham | "Sorted the cracks before he touched a brush." |

**Card anatomy (every card):**
- Lucide icon — `aria-hidden="true"`, sized ~48px, coloured `var(--color-secondary)`
- Job type heading — H3, Cormorant Garamond 600
- Location line — DM Sans 400, `var(--color-text-muted)`, prefixed with 📍 or small Lucide `map-pin` icon (`aria-hidden="true"`)
- Micro-quote — italicised, smaller text (~0.875rem), `var(--color-text-muted)`
- Card background: `--color-bg` with `--color-border` border, `--shadow-sm`, `--radius-md`

---

## 5. SEO Outputs

### Per-page SEO

| Page | Title tag (≤65 chars) | Meta description (140–155 chars) | og:title | og:description |
|---|---|---|---|---|
| Home (`index.html`) | `Painter Decorator Corsham — C.E.G Painting & Decorating` | `Trusted painter and decorator based in Corsham, covering Chippenham, Bath and Wiltshire. Over a decade of quality work. Call for a free quote.` | `C.E.G Painting & Decorating — Corsham` | `Trusted painter and decorator in Corsham, Wiltshire. Over a decade of local work. Get a free quote.` |
| Services (`services.html`) | `Painting & Decorating Services — C.E.G, Corsham` | `Interior and exterior painting, wallpapering, and preparation work across Corsham, Chippenham, and Wiltshire. Get in touch for a free quote today.` | `Services — C.E.G Painting & Decorating` | `Interior painting, exterior masonry, wallpapering, and prep work. Covering Corsham and Wiltshire.` |
| About (`about.html`) | `About C.E.G Painting & Decorating — Corsham, Wiltshire` | `Aaron McBride has been decorating homes across Corsham and Wiltshire since 2013. Quality prep, clean finish, straight price. Call to talk about your job.` | `About C.E.G — Corsham's decorator since 2013` | `Owner-operated, insured, and built on referrals. Over a decade of decorating in Corsham and Wiltshire.` |
| Gallery (`gallery.html`) | `Our Work — C.E.G Painting & Decorating, Corsham` | `Interior repaints, exterior masonry, wallpapering, and woodwork across Corsham, Chippenham, and Box. Browse recent jobs and get in touch for a quote.` | `Our Work — C.E.G Painting & Decorating` | `Recent decorating jobs across Corsham, Chippenham, Box, Melksham, and Calne. Quality prep and finish.` |
| Contact (`contact.html`) | `Contact C.E.G Painting & Decorating — Corsham` | `Get a free quote from C.E.G Painting & Decorating, based in Corsham. Covering Chippenham, Bath, and Wiltshire. Message us or call 07875 461486 today.` | `Contact C.E.G — Free Quote, Corsham` | `Get in touch with C.E.G Painting & Decorating. Free quotes for jobs in Corsham, Chippenham, Bath, and Wiltshire.` |

### LocalBusiness JSON-LD schema

Paste verbatim into `<head>` of every page:

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "C.E.G Painting & Decorating",
  "description": "Painter and decorator based in Corsham, Wiltshire, serving Chippenham, Bath and surrounding villages since 2013.",
  "telephone": "07875 461486",
  "email": "c.e.gdecorating@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "17 South St",
    "addressLocality": "Corsham",
    "addressRegion": "Wiltshire",
    "postalCode": "SN13 9HB",
    "addressCountry": "GB"
  },
  "areaServed": "Corsham, Chippenham, Bath, Box, Melksham, Calne, Wiltshire",
  "url": "[fill in after Netlify deploy]",
  "priceRange": "££",
  "openingHours": "Mo-Fr 09:00-17:00"
}
```

### GA4 snippet

Measurement ID available at spec stage. Add to every page `<head>` 

```html
<!-- GA4: G-VQ91NBYHCL confirmed -->

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

---

## 6. Copy bank

- **Main CTA text:** "Get a free quote"
- **Secondary CTA text:** "See our work"
- **Nav CTA (header button):** "Get a free quote"
- **Form submit button:** "Send message"
- **Form success message:** "Thanks — we'll be in touch shortly to arrange a time to come and look at the job."
- **404 page message:** "That page doesn't exist — but we do. Head back home or give us a ring on 07875 461486."
- **Footer tagline:** "Corsham's decorator. In business since 2013."
- **Gallery teaser link text:** "See all our work →"
- **Gallery page strapline:** "A selection of jobs from across Corsham and the surrounding area."
- **About teaser small label:** "About C.E.G"
- **Services footer link:** "All our services →"
- **CTA band heading:** "Ready to get started?"
- **CTA band body:** "Drop us a message with what you're after and we'll arrange a time to come and take a look. Free quotes, no obligation."

---

## 7. Image manifest

**Trade category slug:** `painter-decorator`
**R2 base:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library`

| Section | Image URL | `width` | `height` | Notes |
|---|---|---|---|---|
| Hero (index.html) | `{R2 base}/painter-decorator/hero.webp` | 960 | 640 | Right column of two-col hero layout; `loading="eager"` |
| About teaser (index.html) | `{R2 base}/painter-decorator/about.webp` | 800 | 600 | Right column of about teaser; `loading="lazy"` |
| About main (about.html) | `{R2 base}/painter-decorator/about.webp` | 800 | 600 | Right column of main story section; `loading="eager"` |
| CTA band (index.html) | `{R2 base}/painter-decorator/cta-bg.webp` | 1920 | 600 | CSS `background-image` with dark overlay; no `<img>` tag — set `background-size: cover` |

**Shared assets:** Not required for this site at demo stage. If an owner portrait or van shot becomes available at productionisation, they can be added to the about.html section without structural changes.

**Alt text for all `<img>` tags (copy verbatim into Phase 4 HTML):**
- Hero image: `alt="Painter applying careful finish to a wall interior"`
- About image (both pages): `alt="Decorator at work on an interior room, brush in hand"`

> **Gallery — no images at demo stage.** All gallery cards are icon/text only. Zero `<img>` tags in any gallery section until productionisation.

---

## 8. Accreditations

Badges drawn from the NeoBookworm CSS badge library only. **Never real trademark logos.**

| Badge | Condition | Placement |
|---|---|---|
| **"In business since 2013"** | Always show | Footer of every page; About page credentials section |
| **"Fully insured"** | Always show (standard for Ltd company) | Footer of every page; About page credentials section |
| **PDA Member** | **Confirm before build** — check if Aaron McBride / ACM Painting holds current PDA membership | Footer + About page if confirmed; omit if not |
| **TrustMark** | **Confirm before build** — not confirmed at research stage | Footer + About page if confirmed; omit if not |
| **Checkatrade** | Not found; omit unless confirmed during onboarding | — |

**Build note:** If neither PDA nor TrustMark can be confirmed before Phase 4, the footer badge row runs with just "In business since 2013" and "Fully insured." This is sufficient — do not add speculative badges.

---

## 9. Interactive elements

- **Mobile navigation:** Hamburger toggle (Lucide `menu` icon) → full-width overlay or slide-down menu. Close on outside click, close button, and Escape key. Focus trapped while open.
- **Google Maps (contact.html):** Radius circle map as specified in Section 4.4. API key via `js/maps-config.js` (gitignored). Use classic `google.maps.Marker` — no Map ID required. See LEARNINGS.md 2026-04-18 for pitfalls.
- **Contact form:** Client-side validation (required fields, email format). Netlify Forms or equivalent. No third-party JS form library.
- **Smooth scroll:** Native CSS `scroll-behavior: smooth` only — no JS library.

---

## 10. Accessibility notes

- **Colour contrast:**
  - `--color-text` (`#2C2A27`) on `--color-bg` (`#FAFAF8`): ~16:1 — passes AAA ✓
  - `--color-text` on `--color-bg-alt` (`#F2EDE6`): ~12:1 — passes AAA ✓
  - `--color-secondary` (`#7A9175`) on `--color-bg`: ~3.5:1 — passes AA for large text only; **do not use for body copy** ✓ (see Section 2 palette notes)
  - White (`#FAFAF8`) on CTA button (`--color-primary` `#2C2A27`): ~16:1 — passes AAA ✓
  - White text on CTA band dark overlay (72% opacity over dark image): will exceed 4.5:1 — verify in build ✓
- **Skip link:** `<a class="skip-link" href="#main">Skip to content</a>` first child of `<body>` on every page. Visually hidden until focused (standard `.skip-link` CSS pattern).
- **Images:** All `<img>` tags must include `alt`, `width`, and `height` as specified in Section 7. No decorative images with non-empty alt text.
- **Gallery icons:** All Lucide icons must have `aria-hidden="true"` — the job type H3 provides the accessible card label.
- **Map:** Container has `aria-label` and `role="application"` as specified in Section 4.4. Fallback text visible when map is unavailable.
- **Links:** All links must have descriptive text — no "click here" or "read more" without context.
- **Form:** All inputs must have associated `<label>` elements. Error messages linked to inputs via `aria-describedby`.

---

## 11. Open questions

1. **PDA membership** — is Aaron McBride / ACM Painting & Decorating Ltd a current PDA member? Determines whether the PDA badge appears.
2. **TrustMark** — is the business TrustMark registered? Same.
3. **GA4 Measurement ID** — not available at brief stage. Backfill before Phase 7 QA.
4. **Netlify domain** — `corshamdecorators.co.uk` or `ceg-decorating.co.uk` are both natural anchors; domain availability should be checked before deploy and the JSON-LD `url` field updated accordingly.
5. **Facebook photos** — the @CorshamDecorators Facebook page may contain work photos suitable for productionisation. Worth screenshotting during research for Phase 3 reference.

---

*Spec generated: May 2026 | NeoBookworm pipeline | C.E.G Painting & Decorating | Phase 2 complete.*
*Review, tweak if needed, commit as `ceg-painting-decorating-ltd: spec generated`, and move to Phase 3 of PROCESS.md.*
