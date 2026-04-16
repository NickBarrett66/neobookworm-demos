# Site Spec — `Brush 2 Brush Decorating Services Ltd`

This document is generated in Phase 2 of `PROCESS.md` by Cursor, using the site brief as input. It locks in every content and design decision *before* any HTML is written, so you can review and tweak cheaply. It's also the exact artifact Agent 6 will eventually produce and consume internally when building real client sites.

**The structure below is what the Phase 2 prompt asks Cursor to produce. When generated, it should be fully filled in — no placeholder sections.**

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**  
Warm craft meets honest-work industrial, with an editorial finish. The site should feel like stepping into a bright Bristol terrace mid-transformation: dust sheets down, edges cut in perfectly, deep paint tones against clean off-whites. We lean on big, confident type, crisp layout, and subtle “decorator’s texture” details (roller stipple, tape edges, paint swatches) so the brand feels *work-proud and human* — not corporate, not “generic trades”.

**The differentiator:**  
A bold “cut-in line” motif: sharp colour blocks and tape-edge separators that look like freshly cut-in paintwork (used on section dividers, callouts, and CTA panels). It should be instantly recognisable and strongly tied to decorating craft.

**What this site is deliberately not:**  
Not the stock “trusted local decorator” brochure with blue gradients, random tool icons, and generic smiley hero photos. No faux-luxury minimalism either — this is grounded Knowle/BS4 pride, straight-talking and tidy.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary: #0E1B2A;    /* Deep navy: headlines, header, strong blocks */
  --color-secondary: #1F2A2E;  /* Charcoal/graphite: body accents, footer bg, dividers */
  --color-accent: #D07A2D;     /* Burnt ochre: CTAs, highlights, “cut-in” tape motif */
  --color-text: #101418;       /* Near-black: main body text */
  --color-text-muted: #55606A; /* Slate: meta text, captions, secondary labels */
  --color-bg: #F6F1E8;         /* Warm off-white: main background (plaster/paper feel) */
  --color-bg-alt: #FFF9F1;     /* Lighter warm panel: cards, callouts, form panels */
  --color-border: #D8D0C4;     /* Warm neutral border: card outlines, separators */
}
```

*Notes on the palette:*  
Inspired by Bristol Victorian interiors (warm off-white walls), “trade” seriousness (navy/charcoal), and the energy of fresh paint (burnt ochre). Usage rule: **accent only for CTAs, key highlights, and pull-quotes** (never long paragraphs). Primary navy carries the brand weight; backgrounds stay warm and bright to keep the site friendly.

### Typography

**Display font:** `Bricolage Grotesque` from Google Fonts — weights `700, 800`  
**Body font:** `Albert Sans` from Google Fonts — weights `400, 500, 600`

*Notes on the pairing:*  
`Bricolage Grotesque` is bold and warm (slightly rounded, craft-friendly) without turning childish. `Albert Sans` reads clean and straight-talking for service details and longer paragraphs. Usage rule: display font only for headlines, section titles, big pull-quotes; body font for everything else (including buttons for legibility).

### Other tokens

```css
:root {
  --font-display: 'Bricolage Grotesque', sans-serif;
  --font-body: 'Albert Sans', sans-serif;
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --shadow-sm: 0 1px 2px rgba(16,20,24,0.10);
  --shadow-md: 0 10px 30px rgba(16,20,24,0.14);
  --max-width: 1200px;
  --spacing-unit: 1rem;
}
```

---

## 3. File structure

```
sites/brush-to-brush-decorating-services-ltd/
├── index.html
├── services.html
├── about.html
├── contact.html
├── gallery.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── uk-counties-leaflet.js   (required — copy from shared/; Leaflet UK counties map)
│   └── uk-counties-regional.js  (optional — not used)
├── images/
│   ├── hero.jpg
│   ├── about-portrait.jpg
│   ├── about-team.jpg
│   ├── service-01-interior.jpg
│   ├── service-02-exterior.jpg
│   ├── service-03-wallpapering.jpg
│   ├── service-04-murals.jpg
│   ├── service-05-kitchen-spraying.jpg
│   ├── service-06-artex-removal.jpg
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
├── favicon.ico          (optional — older clients; include if generated)
├── site-brief.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

*Favicon:* ship **`favicon.svg`** (simple monogram or wordmark: “B2B” or “Brush 2 Brush” in navy + ochre on warm background). Include **`favicon.ico`** only if produced; HTML `<link>` tags must match.

---

## 4. Page specifications

### 4.1 Home (`index.html`)

**Page title:** Brush 2 Brush Decorating Services Ltd | Painter & Decorator in Bristol (BS4)  
**Meta description:** Family-run painters and decorators in Bristol. Interior/exterior painting, wallpapering, murals, kitchen unit spraying, artex removal and more. Fast quotes, tidy work, fair prices.

**Section structure:**

1. **Header + navigation**
   - Logo / wordmark: “Brush 2 Brush” with small “Decorating Services Ltd”
   - Nav links: Home, Services, About, Gallery, Contact
   - CTA button: **Get a quote**

2. **Hero section**
   - Headline: **Work-proud decorating. Straight lines, tidy finishes, fair prices.**
   - Subheadline: **Based in Knowle (BS4), serving Bristol, South Gloucestershire and North Somerset. Interior, exterior, wallpaper, murals, kitchen spraying — we’ll quote quickly and crack on.**
   - CTA buttons:
     - **Get a quote** → `contact.html` (jumps to form)
     - **See our work** → `gallery.html`
   - Hero image: `hero.jpg`
   - Trust line under CTAs: **Over 25 years of combined experience • Fully insured (£2m) • CSCS registered**

3. **The “You’re only as good as the last job” block (signature statement)**
   - Layout: big pull-quote in a navy panel with an ochre “cut-in” edge
   - Copy:
     - **“You’re only as good as the last job you’ve done.”**
     - **That’s how we work. We show up when we say we will, we protect your home properly, and we leave the place clean. If you want a decorator you can relax around, you’re in the right place.**

4. **Services snapshot (6-card grid)**
   - Intro copy: **From a single room refresh to full house exteriors — here’s what we do most.**
   - Cards (each has 1–2 lines + link to Services page anchor):
     - **Interior decorating**: Walls, ceilings, woodwork, feature walls — domestic and commercial.
     - **Exterior painting**: Doors, windows, fascias, render and full exterior repaints.
     - **Wallpapering**: Crisp pattern matching and clean edges for statement rooms.
     - **Murals**: Custom feature murals that make a room feel finished.
     - **Kitchen unit spraying**: A cost-effective upgrade without ripping out a kitchen.
     - **Artex removal**: Smooth modern ceilings and walls, properly prepped.
   - CTA under grid: **View all services** → `services.html`

5. **How it works (simple 3-step)**
   - Step 1: **Tell us what you need**  
     *A message and a few photos is perfect. If it’s bigger, we’ll pop out and take a proper look.*
   - Step 2: **Fast, clear quote**  
     *No waffle. We’ll explain what we’re doing, what we’re using, and what it’ll cost.*
   - Step 3: **We turn up, protect, prep, finish**  
     *We work efficiently and keep things tidy — then we leave your place spotless.*

6. **Local + coverage strip**
   - Copy (tight, confident):
     - **BS4 based. Bristol born-and-bred.**
     - **We work across Bristol, South Gloucestershire and North Somerset — from quick turnarounds to larger projects.**

7. **Reviews-style highlights (no platform embedding required)**
   - Intro: **The same things come up again and again.**
   - Three quote cards (written from brief themes, not attributed to named reviewers):
     - **“Quoted quickly, started when they said, finished fast.”**
     - **“Polite, professional — and left everything clean.”**
     - **“Fair price for a proper job. Would book again.”**
   - CTA: **Book a site visit** → `contact.html`

8. **Footer**
   - Contact details:
     - **Phone:** 07804688987
     - **Email:** brush2brushltd@gmail.com
     - **Hours:** Monday–Friday 7:30am–5:30pm, Saturday by arrangement
     - **Service area:** Based in Knowle, Bristol (BS4) — serving the surrounding areas
   - Accreditation badges (CSS-only)
   - Footer tagline: **Family-run decorating in Bristol — tidy work, straight answers.**
   - Copyright: **© Brush 2 Brush Decorating Services Ltd**
   - Credits: **Demo site by NeoBookworm.uk**

### 4.2 Services (`services.html`)

**Page title:** Services | Brush 2 Brush Decorating Services Ltd (Bristol)  
**Meta description:** Interior and exterior painting, wallpapering, murals, kitchen unit spraying, artex removal, coving, landlord turnarounds, flooring fitting and handyman work across Bristol and surrounding areas.

**Section structure:**

1. **Header + navigation**
   - Same as Home, CTA: **Get a quote**

2. **Services hero**
   - Headline: **The jobs we’re known for (and the ones we’re happy to help with).**
   - Subheadline: **We’re decorators first — but if it’s part of getting your place finished, we’ll tell you straight what we can do and what we’ll refer out.**

3. **Core decorating services (detailed blocks)**
   - Each block includes: what it covers, who it’s for, and a “good to know” line.

   **Interior painting & decorating**
   - Copy:  
     **Full room redecorations, feature walls, ceilings, woodwork and skirting — done properly, with the right prep.**  
     We’ll protect floors and furniture, sort minor surface issues, and leave you with clean lines and a finish that lasts.
   - Good to know: **If you’ve got a tight deadline (move-in, tenants, family visit), tell us — we’re used to fast turnarounds.**
   - Image: `service-01-interior.jpg`

   **Exterior painting**
   - Copy:  
     **Windows, doors, fascias, render and full exterior repaints.**  
     Exteriors are about prep and timing. We’ll plan around the weather, keep the site tidy, and get it looking sharp without dragging it out.
   - Good to know: **We’ve completed full house exteriors in as little as four days on the right job.**
   - Image: `service-02-exterior.jpg`

   **Wallpapering**
   - Copy:  
     **Feature walls or full rooms — straight, clean, and pattern-matched.**  
     If you’ve chosen a bold paper, the hanging needs to be as crisp as the design.
   - Good to know: **We’ll advise on wall prep so the paper sits right and stays put.**
   - Image: `service-03-wallpapering.jpg`

   **Murals (premium)**
   - Copy:  
     **Custom mural work that turns a room into something personal.**  
     We can work from your idea, reference images, or a simple theme — and we’ll build it into the room so it looks intentional, not stuck on.
   - Good to know: **This is one of our standout services — not many Bristol decorators offer it.**
   - Image: `service-04-murals.jpg`

   **Kitchen unit spraying (premium)**
   - Copy:  
     **A fresh kitchen look without a full kitchen replacement.**  
     We mask properly, prep thoroughly, and spray for a smooth, modern finish that changes the whole space.
   - Good to know: **Ideal if your cabinet layout works but the doors look tired.**
   - Image: `service-05-kitchen-spraying.jpg`

   **Artex removal**
   - Copy:  
     **Textured ceilings and walls smoothed out for a clean, modern finish.**  
     We’ll assess what’s there, prep correctly, and get you to a paint-ready surface.
   - Good to know: **Artex can be messy — we keep it controlled and leave the space tidy.**
   - Image: `service-06-artex-removal.jpg`

4. **Additional services (two-column list)**
   - **Coving & cornices:** Supply and fit for that finished, “proper room” look.  
   - **Landlord & property turnarounds:** Between-tenancy redecorations, HMOs, buy-to-let refreshes.  
   - **Hard flooring fitting:** Laminate, vinyl, engineered wood.  
   - **Handyman jobs:** Minor repairs, fixture hanging, light carpentry.

5. **What we don’t do (clear boundaries)**
   - Copy:  
     **We don’t do plumbing, electrics, or structural work.**  
     If your job needs a specialist trade alongside the decorating, we’ll say so early so the project runs smoothly.

6. **CTA panel**
   - Headline: **Want a quote this week?**
   - Copy: **Send a message with a few photos and your postcode — we’ll come back to you quickly.**
   - CTA buttons:
     - **Get a quote** → `contact.html`
     - **See our work** → `gallery.html`

7. **Footer**
   - Same as Home

### 4.3 About (`about.html`)

**Page title:** About | Brush 2 Brush Decorating Services Ltd (Family-run, Bristol)  
**Meta description:** Brush 2 Brush is a family-run decorating team based in Knowle (BS4). Over 25 years of combined experience, known for tidy work, fair pricing and reliable turnarounds.

**Section structure:**

1. **Header + navigation**
   - Same global header

2. **About hero**
   - Headline: **A family business that treats your home like it’s ours.**
   - Subheadline: **Brush 2 Brush was founded by two brothers-in-law who grew up around the trade and wanted to do things properly: fair prices, honest timelines, and finishes you’re proud of.**
   - Image: `about-team.jpg` (team in work gear, friendly + real)

3. **The story (narrative section)**
   - Copy:  
     Brush 2 Brush started the simple way — two family members with years on the tools, deciding to run work under their own name and reputation. We incorporated in 2021, but the experience goes back much further: **over 25 years of combined decorating experience**, built on real jobs in real Bristol homes.  
     We’ve grown steadily through word of mouth and platform referrals because we keep the basics solid: we quote clearly, we work efficiently, and we leave the place clean.

4. **Meet the team (human, grounded)**
   - Layout: three profile cards (no over-polish)
   - Copy:
     - **Matt Harding** (lead contact): *Straight-talking, organised, and obsessed with a clean finish. Matt’s the one who’ll usually come out, have a look, and get you booked in.*
     - **Dave Sanders** (co-owner): *Hands-on with quoting and planning. Dave keeps jobs running smoothly and makes sure the prep is right before anything gets painted.*
     - **Dan** (decorator): *Fast, tidy, and precise — the kind of decorator you “wouldn’t have known was there”, except for the perfect finish.*
   - Portrait image slot: `about-portrait.jpg` (use as a “lead” portrait; team shot covers the rest)

5. **What people notice (values as proof)**
   - Four “value tiles” with brief copy:
     - **Tidy by default**: *We protect properly and clean up after ourselves — every day, not just at the end.*
     - **Reliable**: *We turn up when we say we will and keep you updated if anything changes.*
     - **Fair pricing**: *We’re not here to upsell — we’re here to do a proper job for a fair price.*
     - **Happy to help**: *If something small makes the job better, we’ll sort it (and we’ll tell you first).*

6. **Pull-quote strip**
   - Copy: **“We’ll come out, have a look, give you a fair price, and crack on. Simple as that.”**

7. **CTA panel**
   - Headline: **Tell us what you’ve got in mind**
   - Copy: **One room or the whole place — we’ll talk it through and give you a clear quote.**
   - CTA: **Get a quote** → `contact.html`

8. **Footer**
   - Same as Home

### 4.4 Contact (`contact.html`)

**Page title:** Contact | Brush 2 Brush Decorating Services Ltd (Bristol)  
**Meta description:** Get a fast quote from Brush 2 Brush. Based in Knowle (BS4) and serving Bristol, South Gloucestershire and North Somerset. Call, email, or send photos via the contact form.

**Section structure:**

1. **Header + navigation**
   - Same global header

2. **Contact hero**
   - Headline: **Get a quote**
   - Subheadline: **Send a message with your postcode, what you need doing, and any photos you’ve got. We’ll come back to you quickly.**

3. **Contact methods (split panel)**
   - Left (direct):
     - **Call:** 07804688987  
       *Best for quick questions and booking a visit.*
     - **Email:** brush2brushltd@gmail.com
     - **Hours:** Monday–Friday 7:30am–5:30pm, Saturday by arrangement
     - **Service area:** Based in Knowle, Bristol (BS4)
   - Right (trust):
     - **Over 25 years combined experience**
     - **Fully insured — £2m public liability**
     - **CSCS registered**

4. **Contact form**
   - Fields (explicit):
     - Full name (required)
     - Phone number (required)
     - Email (required)
     - Postcode (required)
     - What do you need done? (required, textarea)
     - Where is it? (optional: “e.g. hallway, kitchen, exterior front, bedroom 2”)
     - Ideal timeframe (optional select): “ASAP”, “1–2 weeks”, “This month”, “Not sure yet”
     - How did you hear about us? (optional): “Word of mouth”, “MyBuilder”, “Rated People”, “Other”
   - Microcopy under submit: **If you can, add a couple of photos in your message — it helps us quote accurately.** (No file upload required in demo build; just text prompt.)
   - Submit button text: **Send my details**
   - Success message (spec for JS): **Thanks — we’ve got your message. We’ll be in touch as soon as we can.**
   - Spam prevention: honeypot field (hidden) + basic client-side required checks

5. **Map / coverage panel**
   - Headline: **Where we work**
   - Copy: **We’re based in BS4 (Knowle) and work across Bristol, South Gloucestershire and North Somerset. If you’re nearby and not sure, send your postcode — we’ll tell you straight.**

**Map / service area (if any):**
- **Leaflet UK counties / unitary map (ONS) — required**
  - Appears on: **Contact page** (this page only)
  - Areas to highlight:
    - **City of Bristol**
    - **South Gloucestershire**
    - **North Somerset**
  - Legend copy:
    - **Highlighted:** “Core service area”
    - **Muted:** “Outside our usual patch (ask anyway)”
  - Accessibility:
    - Map container has `aria-label="Map showing Brush 2 Brush core service area: Bristol, South Gloucestershire and North Somerset"`
    - Provide a text fallback directly under the map: **“Core service area: Bristol, South Gloucestershire, North Somerset.”**
  - Behaviour:
    - No scroll-jacking; zoom only on click/focus
    - Keyboard focus outline on map controls

6. **Footer**
   - Same as Home

### 4.5 Gallery (`gallery.html`)

**Page title:** Gallery | Brush 2 Brush Decorating Services Ltd (Before & after, Bristol)  
**Meta description:** A selection of Brush 2 Brush decorating work — interiors, exteriors, wallpapering, murals, kitchen spraying and crisp finishing details across Bristol and surrounding areas.

**Section structure:**

1. **Header + navigation**
   - Same global header

2. **Gallery hero**
   - Headline: **Recent work**
   - Subheadline: **Clean lines. Smooth finishes. The kind of work you notice every time you walk into the room.**

3. **Filterless grid + lightbox (keep it simple)**
   - Layout: 2 columns mobile, 3 columns tablet+, consistent aspect ratio thumbnails
   - Each image has:
     - Short caption (human, practical)
     - Opens in lightbox with longer caption (1–2 sentences)

4. **“What you’re looking at” note**
   - Copy:  
     **Every job is different — but the standard stays the same.**  
     Look for the prep, the edges, the woodwork lines, and how tidy the space is even mid-job.

5. **CTA panel**
   - Headline: **Want this finish in your place?**
   - Copy: **Tell us what you’re planning and your postcode — we’ll come back to you quickly.**
   - CTA: **Get a quote** → `contact.html`

6. **Footer**
   - Same as Home

---

## 5. Copy bank

All unique microcopy gathered in one place for easy review:

- **Main CTA text:** Get a quote
- **Secondary CTA text:** See our work
- **Form submit button:** Send my details
- **Form success message:** Thanks — we’ve got your message. We’ll be in touch as soon as we can.
- **404 page message:** Lost your footing? No stress — head back home or get in touch for a quote.
- **Footer tagline:** Family-run decorating in Bristol — tidy work, straight answers.

---

## 6. Image manifest

Complete list of every image needed for this site, with Midjourney prompts.

### Hero
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `hero.jpg` | Home page hero | 16:9 | Bright Bristol Victorian terrace living room, natural daylight through sash window, decorator’s hands using a roller applying a rich even coat of paint on a freshly prepared wall, dust sheets laid perfectly, painter’s tape razor-straight, warm off-white + deep navy accents, realistic, documentary photography style, shallow depth of field, ultra-detailed textures (roller stipple, clean edge), no logos, no text --ar 16:9 |

### Portraits / people
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `about-portrait.jpg` | About page lead portrait (Matt-style) | 4:5 | Friendly British tradesperson portrait, clean workwear (decorator whites with subtle navy/ochre detail), standing in a tidy freshly painted hallway of a Bristol terrace, natural window light, confident and approachable expression, realistic photo, no hard hat, no branding, shallow depth of field --ar 4:5 |
| `about-team.jpg` | About page team shot (2–3 people) | 3:2 | Two to three painters and decorators in clean work gear holding brushes/rollers, standing outside a freshly painted period Bristol property, warm daylight, approachable and real, documentary photography, no logos, no text --ar 3:2 |

### Services
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `service-01-interior.jpg` | Interior decorating block | 4:3 | Crisp interior room redecoration in progress, masked skirting, cut-in lines around ceiling, paint tray and quality brush on dust sheet, warm off-white walls with deep navy feature wall, realistic photography, tidy site, no logos --ar 4:3 |
| `service-02-exterior.jpg` | Exterior painting block | 4:3 | Bristol Victorian bay windows and front door freshly painted, clean lines on frames, period brickwork, soft overcast daylight (UK), realistic photo, no people, no logos --ar 4:3 |
| `service-03-wallpapering.jpg` | Wallpapering block | 4:3 | Close-up of wallpaper being hung with perfect pattern matching at a corner join, smoothing tool in hand, crisp seam, warm indoor light, realistic macro photography, no text --ar 4:3 |
| `service-04-murals.jpg` | Murals block | 4:3 | Custom mural being painted on an interior wall, brushes and paint pots in foreground, mural design emerging (tasteful modern botanical or abstract), tidy room setup, realistic photo, no logos --ar 4:3 |
| `service-05-kitchen-spraying.jpg` | Kitchen unit spraying block | 4:3 | Kitchen cabinet doors masked and prepared for spraying, smooth modern finish emerging (soft warm neutral), protective sheeting and tape, professional spray setup implied (no brand), realistic photography, clean and controlled --ar 4:3 |
| `service-06-artex-removal.jpg` | Artex removal block | 4:3 | Ceiling surface being smoothed from textured artex to flat finish, skim coat tools, controlled dust protection, tidy work zone, realistic photography, no logos --ar 4:3 |

### Gallery (8–12 images)
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `gallery-01.jpg` | Before/after style interior transformation (after shot) | 4:3 | Finished living room repaint, formerly tired magnolia now crisp warm off-white with deep navy accent, clean woodwork lines, soft daylight, realistic interior photo, cozy Bristol terrace feel, no people, no logos --ar 4:3 |
| `gallery-02.jpg` | Wallpaper precision detail | 4:3 | Close-up of perfectly matched wallpaper pattern across a seam, crisp corner detail, warm light, realistic macro photo, no text --ar 4:3 |
| `gallery-03.jpg` | Exterior bay window finish | 4:3 | Freshly painted Victorian bay window exterior, clean frames, period brick, UK light, realistic photo, no logos --ar 4:3 |
| `gallery-04.jpg` | Kitchen spraying transformation | 4:3 | After shot of kitchen cabinets resprayed, smooth modern finish, tidy kitchen styling (simple, real), warm daylight, realistic photo, no logos --ar 4:3 |
| `gallery-05.jpg` | Mural in progress (wider) | 4:3 | Wide shot of mural wall mid-paint with drop cloths neatly laid, paint pots and brushes, design emerging, realistic documentary photo, no logos --ar 4:3 |
| `gallery-06.jpg` | Coving/cornice detail | 4:3 | Close-up of new coving line where wall meets ceiling, perfect caulk/paint finish, warm off-white, realistic macro photo --ar 4:3 |
| `gallery-07.jpg` | Cutting-in detail around doorframe | 4:3 | Decorator hand cutting in around a doorframe with a fine brush, razor-sharp line, no tape, realistic close-up photography, no logos --ar 4:3 |
| `gallery-08.jpg` | Hall, stairs, landing transformation | 4:3 | Freshly decorated hallway with stairs and landing in a Bristol terrace, bright and clean, crisp woodwork, warm natural light, realistic interior photo --ar 4:3 |
| `gallery-09.jpg` | Tools of the trade (tidy) | 4:3 | Quality brushes, rollers, paint tins on a clean dust sheet, organized setup, warm neutral background, realistic still life photo, no branding --ar 4:3 |
| `gallery-10.jpg` | Large exterior work in progress | 4:3 | Exterior house repaint in progress with controlled setup (scaffolding implied), half-finished facade showing transformation, tidy site, realistic UK photo, no logos --ar 4:3 |

---

## 7. Accreditations

List of CSS badges to include from the NeoBookworm badge library, and where each should appear on the site.

- **CSCS Registered** — footer of every page; also in Home hero trust line; Contact trust panel  
- **Fully Insured** — footer of every page; Contact trust panel  
- **£2m Public Liability** (or closest available “Public Liability” badge) — Contact trust panel; About values section (small)  
- **MyBuilder** — footer of every page; Home reviews highlights section (small badge row)  
- **Rated People** — footer of every page; Home reviews highlights section (small badge row)  
- **NVQ Level 2/3** (if available as a badge; otherwise “NVQ Qualified”) — About page values section (small)  
- **First Aid Qualified** (if available) — About page values section (small)

(Do **not** use trademark logos; CSS badge library only.)

---

## 8. Interactive elements

Anything that needs JavaScript:

- **Mobile navigation menu:** hamburger toggle, full-screen overlay on open, focus-trapped while open, ESC closes
- **Gallery lightbox:** click image to view full-size in overlay, arrow-key navigation, ESC closes, caption displayed, focus management
- **Leaflet map (Contact):** UK county / unitary boundaries via vendored `uk-counties-leaflet.js` from `shared/`, with the three highlighted areas; legend and text fallback below
- **Contact form UX:** client-side required field checks, disable button on submit, show success message (demo only; no backend)

Other interactive features: vanilla JS only. Map libraries are exceptions only as above.

---

## 9. Accessibility notes

- Colour contrast: confirm `--color-text` on `--color-bg` meets WCAG AA; ensure accent buttons use navy text on ochre (or ochre on navy) with AA contrast
- Focus states: high-visibility focus ring (e.g. navy outline + subtle shadow) across all interactive elements
- Headings: clear hierarchy; avoid skipping levels
- Images: meaningful `alt` text (especially gallery thumbnails); decorative textures get empty `alt`
- Map: `aria-label` on container + visible text fallback listing service areas
- Motion: keep transitions subtle; respect `prefers-reduced-motion` (disable overlay animations)

---

## 10. Open questions

- Whether to include a generic **“All work guaranteed”** line. Current spec avoids a formal guarantee period and instead leans on cleanliness/reliability messaging. If you want it, add: **“If something isn’t right, tell us — we’ll put it right.”** (no time period stated).

---

*Spec complete. Review, tweak if needed, commit as `brush-to-brush-decorating-services-ltd: spec generated`, and move to Phase 3 of PROCESS.md.*
