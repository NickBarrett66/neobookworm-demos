# Site Spec — `Hartley Plumbing`

Generated from `sites/hartley-plumbing/site-brief.md`. This spec locks content + design before any HTML is written.

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**  
Hartley Plumbing’s site should feel like a well-run workshop: dark, calm, capable, and slightly warm around the edges. The design language is “industrial craft” — slate/charcoal surfaces, copper/terracotta highlights, crisp typography, and straightforward language that respects the reader’s time. Nothing glossy, nothing “premium lifestyle”: just competent work, done cleanly, priced upfront, and explained plainly — the same way Gareth operates on site.

**The differentiator:**  
A **“No surprises” pricing + cleanliness promise** presented like a stamped job card: a bold, memorable block on the home page (and repeated subtly site-wide) that makes the site feel practical and trustworthy rather than salesy.

**What this site is deliberately not:**  
Not a blue-and-white template plumber site with stock smiles, “luxury solutions,” or vague claims like “trusted local experts.” No corporate hero imagery, no over-polished marketing tone, no shouting discounts.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary: #1F252B;    /* deep slate: headers, nav, footer, primary surfaces */
  --color-secondary: #C46A3B;  /* burnt terracotta: CTAs, key highlights, “job card” stamp */
  --color-accent: #B07A3B;     /* warm brass/copper: icon strokes, subtle dividers, small accents */
  --color-text: #F3EFE7;       /* warm off-white: text on dark surfaces */
  --color-text-muted: #CFC6B9; /* muted warm grey: supporting copy, meta text */
  --color-bg: #14181C;         /* near-black charcoal: main background */
  --color-bg-alt: #1A2026;     /* slightly lighter slate: cards, panels, section alternation */
  --color-border: #2B343D;     /* cool slate border: hairlines, separators */
}
```

*Notes on the palette:*  
Inspired by workshop walls + copper fittings: dark, practical, and calming; warm highlights used with restraint. Usage rules: `--color-secondary` only for primary CTAs, key callouts, and tiny “stamp” moments; never for long paragraphs. Keep body copy high-contrast (`--color-text` on `--color-bg`) and reserve `--color-accent` for iconography and small UI details.

### Typography

**Display font:** `Fraunces` (Google Fonts) — weights `600, 700`  
**Body font:** `IBM Plex Sans` (Google Fonts) — weights `400, 500, 600`

*Notes on the pairing:*  
Fraunces gives headings a crafted, confident voice (not luxury, not retro), while IBM Plex Sans reads like clear instructions on a work order: modern, technical, human. Use Fraunces for H1/H2 and big callouts; Plex for everything else, including nav and forms.

### Other tokens

```css
:root {
  --font-display: 'Fraunces', serif;
  --font-body: 'IBM Plex Sans', sans-serif;

  --radius-sm: 0.25rem;
  --radius-md: 0.6rem;
  --radius-lg: 1.1rem;

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.25);
  --shadow-md: 0 10px 30px rgba(0,0,0,0.35);

  --max-width: 1100px;
  --spacing-unit: 1rem;

  --border-hairline: 1px solid var(--color-border);
  --letterspace-caps: 0.08em;
}
```

---

## 3. File structure

```
sites/hartley-plumbing/
├── index.html
├── services.html
├── about.html
├── contact.html
├── gallery.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── hero.jpg
│   ├── about-portrait.jpg
│   ├── service-01-burst-pipes-leaks.jpg
│   ├── service-02-no-hot-water.jpg
│   ├── service-03-radiators-balancing.jpg
│   ├── service-04-taps-toilets-showers.jpg
│   ├── gallery-01.jpg
│   ├── gallery-02.jpg
│   ├── gallery-03.jpg
│   ├── gallery-04.jpg
│   ├── gallery-05.jpg
│   ├── gallery-06.jpg
│   ├── gallery-07.jpg
│   ├── gallery-08.jpg
│   ├── gallery-09.jpg
│   ├── gallery-10.jpg
│   └── ... (if you decide to add 11–12 later)
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
Hartley Plumbing (Swindon & Wiltshire) — Same-day callouts, upfront pricing

**Meta description:**  
Straight-talking plumbing in Swindon and nearby villages. Same-day emergency slots, clear pricing before work starts, and a promise to leave your home clean. Call 01793 555247.

**Section structure:**

1. **Header + navigation**
   - Logo / wordmark: “Hartley Plumbing” (wordmark only; optional small pipe/copper dot detail)
   - Nav links: Home, Services, About, Gallery, Contact
   - CTA button: **Call now: 01793 555247** (tel:)

2. **Hero section**
   - Headline: **Plumbing sorted — today if we can.**
   - Subheadline: **Same-day emergency slots in Swindon. Clear pricing before we start. We leave your place clean.**
   - CTA buttons:
     - Primary: **Call 01793 555247** → `tel:01793555247`
     - Secondary: **See services** → `services.html`
   - Hero image: `hero.jpg`
   - Small trust line (beneath CTAs): **£6m public liability. 12‑month workmanship guarantee.**

3. **The “No surprises” job card**
   - Visual: a bordered panel styled like a job sheet, with a small terracotta “STAMP” label
   - Heading: **No surprises.**
   - Copy (3 short bullets):
     - **Upfront price** — we diagnose first, tell you the cost, then you decide.
     - **Same-day where possible** — we keep slots for genuine emergencies.
     - **Clean finish** — we treat your home like it’s ours.
   - Note line: **If it can wait, we’ll tell you. If it can’t, we’ll prioritise it.**

4. **Services snapshot (4 cards)**
   - Intro line: **Most calls fall into these. If yours doesn’t, ring anyway — we’ll tell you where you stand.**
   - Cards (title + 1–2 lines each):
     - **Burst pipes & leaks** — **Fast isolation, tidy repair, and a quick check for knock‑on damage.**
     - **No hot water** — **We’ll find the fault and fix what we can on the plumbing side, same visit.**
     - **Radiators running cold** — **Bleeding, balancing, and getting heat back to the rooms that need it.**
     - **Taps, toilets & showers** — **Drips, leaks, weak pressure, dodgy flushes — sorted without ripping out cupboards.**
   - CTA: **All services** → `services.html`

5. **How it works (3 steps)**
   - Step 1 title: **Call or message**
     - Copy: **Tell us what’s happening and where you are (Swindon + 10 miles).**
   - Step 2 title: **We diagnose**
     - Copy: **We explain what’s wrong in plain English and quote before any work starts.**
   - Step 3 title: **We fix — cleanly**
     - Copy: **Tools away, surfaces wiped, and a quick run-through so you know what changed.**

6. **Local reliability block**
   - Heading: **Wiltshire homes. Real problems. Practical fixes.**
   - Copy:  
     **We’re a small team of three, led by Gareth Hartley — ex‑British Gas, now independent. Most of our work is word‑of‑mouth because people like knowing who’s turning up and what it’s going to cost.**
   - Link: **Read the story** → `about.html`

7. **Short testimonials (3 quotes)**
   - Quote 1: **“He actually explained what was wrong instead of just fixing it and charging me.”**
   - Quote 2: **“Turned up on time, got it done same day, and didn’t leave my kitchen looking like a building site.”**
   - Quote 3: **“Honest about what needs doing now vs. what can wait — didn’t try to upsell me.”**
   - Small note: **More reviews on Google.** (link placeholder)

8. **Final CTA band**
   - Headline: **Need it sorted?**
   - Copy: **For emergencies in Swindon we’ll aim for same-day. For everything else, next working day.**
   - Primary CTA: **Call 01793 555247**
   - Secondary CTA: **Contact form** → `contact.html`

9. **Footer**
   - Contact details (phone, email, area, hours)
   - Accreditation badges: **Gas Safe**, **Fully Insured**, **12‑month guarantee**
   - Copyright: **© Hartley Plumbing**
   - Micro tagline: **Straight-talking plumbing. Clean work. Clear prices.**

### 4.2 Services (`services.html`)

**Page title:**  
Plumbing services — Hartley Plumbing (Swindon)

**Meta description:**  
Emergency leak fixes, no-hot-water diagnostics, radiator balancing, tap/toilet/shower repairs, and bathroom suite plumbing installs. Upfront pricing and a clean finish. Call 01793 555247.

**Section structure:**

1. **Header + navigation** (as per Home)

2. **Services hero**
   - H1: **Services**
   - Subhead: **Straight answers, clear prices, and work done properly — without turning your home into a mess.**
   - CTA: **Call 01793 555247** (tel:)

3. **Emergency & urgent**
   - Intro: **If water’s going where it shouldn’t, ring. If we can get there today, we will.**
   - Service block 1: **Burst pipes & leaks**
     - Copy:  
       **We isolate the issue quickly, repair the pipe/joint, and make sure you’re safe to use the system again. If there’s damage, we’ll tell you what we can see and what to keep an eye on.**
     - What you’ll get (bullets):
       - **Fast isolation + tidy repair**
       - **Clear explanation of what failed**
       - **Upfront price before the fix**
   - Service block 2: **No hot water**
     - Copy:  
       **We’ll diagnose the common causes — pressure problems, valves, immersion issues, plumbing-side faults — and fix what’s in our lane. If it needs a dedicated boiler installer or a specialist, we’ll tell you straight and point you the right way.**
     - Note: **We don’t install new boilers.**

4. **Routine maintenance**
   - Intro: **Most problems start small. Fixing them early is cheaper and less stressful.**
   - Service block: **Radiator bleeding & balancing**
     - Copy:  
       **Cold spots, noisy pipes, one room roasting while another stays freezing — we’ll bleed air, balance the system, and get heat moving evenly through the house.**
   - Service block: **Tap repairs & replacements**
     - Copy:  
       **Dripping taps and tired cartridges waste water and patience. We repair what’s sensible, replace what isn’t, and keep the job neat — no cupboard demolition required.**
   - Service block: **Toilet fixes**
     - Copy:  
       **Running cisterns, weak flushes, leaks at the base, constant refills — we’ll diagnose and repair the same visit where possible.**
   - Service block: **Shower & bath servicing**
     - Copy:  
       **Low pressure, blockages, worn seals, persistent drips — we’ll sort the plumbing issues and leave you with a shower you can actually use.**

5. **Larger jobs (plumbing side)**
   - Intro: **If you’re updating a bathroom or need pipework rerouted, we’ll plan it properly and price it upfront.**
   - Service block: **Pipe repairs & rerouting**
     - Copy:  
       **Corroded runs, awkward bends, frozen sections, or pipework that’s been patched too many times — we’ll repair or reroute with an eye on reliability, not just “get it through the week.”**
   - Service block: **Bathroom suite installation (plumbing only)**
     - Copy:  
       **We fit baths, showers, basins and toilet suites on the plumbing side. We’re happy to work alongside your tiler/carpenter — clean handoffs, no drama.**

6. **What we don’t do (so you don’t waste a call)**
   - Bullets:
     - **Boiler installation/replacement**
     - **New-build plumbing design**
     - **Main drainage / foul sewer work**
     - **Heating system redesigns/overhauls**
   - Line: **If you’re unsure, ring anyway — we’ll tell you in 30 seconds.**

7. **Pricing promise**
   - Heading: **You’ll know the price before we start.**
   - Copy:  
     **We diagnose first. We explain what’s wrong. We quote the work. If you want us to go ahead, we do — if not, no hard sell.**

8. **Footer** (as per Home)

### 4.3 About (`about.html`)

**Page title:**  
About Gareth Hartley — Hartley Plumbing

**Meta description:**  
Ex‑British Gas engineer Gareth Hartley runs a small, tidy team serving Swindon and nearby villages. Built on same-day emergency slots, upfront pricing, and explaining the job properly.

**Section structure:**

1. **Header + navigation**

2. **About hero**
   - H1: **About**
   - Subhead: **A careful tradesman’s approach: explain it, price it, fix it cleanly.**

3. **Portrait + introduction**
   - Image: `about-portrait.jpg`
   - Heading: **Gareth Hartley**
   - Copy:  
     **I started out as a British Gas engineer. The work was fine — the bit that bothered me was seeing people pay call‑out fees for simple fixes nobody had explained. So I went solo eight years ago to do it differently: keep space for genuine emergencies, price things upfront, and leave people feeling looked after rather than taken for a ride.**

4. **What matters on a job**
   - Three short principles:
     - **No mystery** — *If you’re paying for it, you deserve to understand it.*
     - **No surprises** — *You’ll know the cost before we start work.*
     - **No mess** — *We don’t leave a building site behind.*

5. **The team**
   - Copy:  
     **We’re a small team of three. That means you’ll get consistent standards and straightforward communication — not a different subcontractor every time.**
   - Note: **Most of our work is repeat customers and referrals.**

6. **Service area and availability**
   - Copy:  
     **Based in Swindon, covering Old Town, town centre and surrounding villages within roughly 10 miles. Same‑day callouts Monday–Friday 8am–6pm where possible. Saturdays 9am–2pm. Sundays closed, emergency by arrangement.**

7. **Guarantee + insurance**
   - Bullets:
     - **£6m public liability insurance**
     - **12‑month workmanship guarantee on repairs and new installations**

8. **CTA**
   - Heading: **Want a straight answer?**
   - Copy: **Call and tell us what’s happening. We’ll say what we can do and what it’ll cost — before any work starts.**
   - CTA: **Call 01793 555247**; secondary **Contact** → `contact.html`

9. **Footer**

### 4.4 Contact (`contact.html`)

**Page title:**  
Contact Hartley Plumbing — Swindon & nearby villages

**Meta description:**  
Call Hartley Plumbing on 01793 555247 for same-day emergency slots in Swindon where possible. Or send a message with your issue, postcode, and best time to call back.

**Section structure:**

1. **Header + navigation**

2. **Contact hero**
   - H1: **Contact**
   - Subhead: **Tell us what’s going on. We’ll tell you what it’ll take — no flannel.**

3. **Quick contact panel**
   - Phone: **01793 555247**
   - Email: **gareth@hartleyplumbing.co.uk**
   - Area: **Swindon + 10 miles (Old Town, town centre, nearby villages)**
   - Hours:
     - **Mon–Fri:** 8:00–18:00
     - **Sat:** 9:00–14:00
     - **Sun:** Closed (emergency by arrangement)
   - Small note: **If it’s an active leak, turn off the stopcock if you can and ring.**

4. **Contact form**
   - Intro line: **If you can’t call right now, send the basics and we’ll get back to you.**
   - Fields (explicit):
     - **Name** (text, required)
     - **Phone number** (tel, required)
     - **Email** (email, optional)
     - **Postcode** (text, required)
     - **What’s the issue?** (textarea, required)
     - **How urgent is it?** (select: Emergency today / Soon (next few days) / Routine)
     - **Best time to call** (select: Morning / Afternoon / Evening)
     - **Consent checkbox**: “It’s OK to call me about this enquiry.”
   - Submit button text: **Send message**
   - Form helper text: **We’ll only use your details to respond to this enquiry.**

5. **What happens next**
   - 3 bullets:
     - **We read your message**
     - **We call you back with questions if needed**
     - **We agree a time and price before any work starts**

6. **Footer**

### 4.5 Gallery (`gallery.html`)

**Page title:**  
Recent work — Hartley Plumbing gallery

**Meta description:**  
A look at the kind of work Hartley Plumbing handles in Swindon and nearby villages — leak repairs, tidy pipework, bathroom plumbing installs, and clean finishes.

**Section structure:**

1. **Header + navigation**

2. **Gallery hero**
   - H1: **Gallery**
   - Subhead: **Realistic, practical plumbing jobs — done neatly.**

3. **Gallery grid**
   - Layout: responsive grid (2 cols mobile, 3 cols tablet, 4 cols desktop)
   - Each image has: short caption (matter-of-fact), and opens in lightbox overlay
   - Intro copy:  
     **We don’t photograph every job — most customers just want it fixed — but here’s the sort of work we do week to week.**

4. **Lightbox note**
   - Copy: **Tap an image to enlarge. Use arrow keys to move through. Press Escape to close.**

5. **CTA**
   - Heading: **Got something similar?**
   - Copy: **Ring and we’ll tell you what it’ll take.**
   - CTA: **Call 01793 555247**; secondary **Services** → `services.html`

6. **Footer**

---

## 5. Copy bank

All unique microcopy gathered in one place for easy review:

- **Main CTA text:** Call 01793 555247
- **Secondary CTA text:** See services
- **Form submit button:** Send message
- **Form success message:** Thanks — we’ve got your message. We’ll be in touch as soon as we can.
- **404 page message:** That page doesn’t exist. Head back home, or call us if you need something sorted today.
- **Footer tagline:** Straight-talking plumbing. Clean work. Clear prices.

---

## 6. Image manifest

Complete list of every image needed for this site, with Midjourney prompts.

### Hero
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `hero.jpg` | Home page hero | 16:9 | Photorealistic close-up of skilled plumber hands tightening a chrome compression fitting under a clean white bathroom sink, tiny water droplets on chrome, shallow depth of field, warm workshop lighting, dark slate background tones, meticulous craftsmanship, no faces, no branding, editorial product-photography style, ultra-detailed, realistic materials, 35mm lens look --ar 16:9 |

### Portraits / people
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `about-portrait.jpg` | About page owner photo | 4:5 | Photorealistic portrait of a friendly, competent British tradesman in his late 30s/40s, subtle workwear (dark jacket, clean), standing in a tidy workshop/van setting with plumbing tools softly out of focus, calm confident expression, natural light, warm tones, not staged, no logos, editorial portrait style, realistic skin texture --ar 4:5 |

### Services
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `service-01-burst-pipes-leaks.jpg` | Burst pipes & leaks card image | 4:3 | Photorealistic scene of a plumber’s gloved hands applying a repair clamp / tightening a pipe joint on copper pipework, small controlled leak being fixed, clean modern under-sink space, sharp focus on tools and fittings, dark slate + warm copper tones, honest “on the job” feel, no faces, no branding --ar 4:3 |
| `service-02-no-hot-water.jpg` | No hot water service | 4:3 | Photorealistic close-up of a pressure gauge and valves on a domestic boiler/utility setup (no brand marks), plumber’s hand adjusting a valve, tidy utility cupboard, warm practical lighting, crisp details, dark industrial palette, no faces --ar 4:3 |
| `service-03-radiators-balancing.jpg` | Radiators balancing | 4:3 | Photorealistic shot of a radiator valve being adjusted with a small wrench and a bleed key nearby, clean skirting board, warm home interior blurred, emphasis on precision and neat work, realistic metal textures, dark slate + warm highlights --ar 4:3 |
| `service-04-taps-toilets-showers.jpg` | Taps/toilets/showers repairs | 4:3 | Photorealistic close-up of a chrome tap cartridge and tools laid neatly on a cloth beside a sink, droplets, clean white ceramic, warm light, craftsmanship vibe, no branding, no faces --ar 4:3 |

### Gallery (10 images)
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `gallery-01.jpg` | Neat copper pipework run | 4:3 | Photorealistic tidy copper pipework with clean joints and clips in a domestic setting, warm light, sharp detail, no logos, craftsmanship focus, dark slate background tones --ar 4:3 |
| `gallery-02.jpg` | Under-sink leak fix “after” | 4:3 | Photorealistic under-sink cabinet interior after repair: clean white pipes, chrome trap, dry surfaces, tools removed, professional tidy finish, warm lighting, no faces --ar 4:3 |
| `gallery-03.jpg` | Toilet cistern mechanism repair | 4:3 | Photorealistic inside a toilet cistern with repaired flush mechanism, clean components, plumber’s hand adjusting, bright but warm lighting, no branding, realistic detail --ar 4:3 |
| `gallery-04.jpg` | Shower seal / fitting repair detail | 4:3 | Photorealistic close-up of shower fitting and fresh seal line, clean tiles, no mould, water droplets, neat finish, warm light, craftsmanship vibe --ar 4:3 |
| `gallery-05.jpg` | Radiator valve + balancing setup | 4:3 | Photorealistic radiator valve close-up with small balancing tool/bleed key, tidy room, warm interior blur, focus on precision, no faces --ar 4:3 |
| `gallery-06.jpg` | Stopcock / isolation valve in older property | 4:3 | Photorealistic stopcock and isolation valve in an older UK property cupboard, cleaned up and labelled, subtle “preventative visit” feel, warm light, no branding --ar 4:3 |
| `gallery-07.jpg` | Bathroom suite plumbing install (pipes only) | 4:3 | Photorealistic behind-the-scenes plumbing under a new basin/vanity, clean install, aligned pipework, neat joints, warm lighting, modern bathroom tones, no faces --ar 4:3 |
| `gallery-08.jpg` | Tool layout / tidy worksite detail | 4:3 | Photorealistic neatly laid out plumbing tools on a protective mat, clean site, warm workshop light, dark slate palette, no logos, editorial still life --ar 4:3 |
| `gallery-09.jpg` | Compression fitting detail “precision” | 4:3 | Photorealistic macro close-up of a chrome compression fitting and copper pipe, subtle water droplets, shallow depth of field, warm light, extreme detail, no branding --ar 4:3 |
| `gallery-10.jpg` | Van/workshop vibe without logos | 4:3 | Photorealistic interior of a tidy trades van or small workshop: organised shelves, plumbing parts bins, soft warm light, industrial craft vibe, no readable logos or text --ar 4:3 |

---

## 7. Accreditations

CSS badges to include from the NeoBookworm badge library, and placement:

- **Gas Safe** — footer of every page; also a small trust row on Home (beneath hero CTAs)
- **Fully Insured** — footer of every page; also in the Home “No surprises” job card panel
- **12‑month guarantee** (or nearest equivalent badge in the library, e.g. “Workmanship Guaranteed”) — footer of every page; About “Guarantee + insurance” section

(Do **not** include Checkatrade/TrustMark/NICEIC/CHAS since the brief explicitly says none.)

---

## 8. Interactive elements

Vanilla JS only:

- **Mobile navigation menu:** hamburger toggle; focus trap; Escape closes; body scroll lock
- **Gallery lightbox:** click to open overlay; next/prev buttons; keyboard arrows; Escape closes; caption displayed

---

## 9. Accessibility notes

- Colour contrast: ensure `--color-text` on `--color-bg` and `--color-text-muted` on `--color-bg-alt` meet WCAG AA (raise brightness of muted text if needed).
- Forms: visible labels (no placeholder-only); clear focus states; error states (at least visual) if you add validation later.
- Motion: keep transitions subtle; respect `prefers-reduced-motion` for menu/lightbox animations.
- Images: meaningful `alt` (describe content, not “image of…”). For purely decorative elements, use empty alt.

---

## 10. Open questions

- None.

---

*Spec complete. Review, tweak if needed, commit as `hartley-plumbing: spec generated`, and move to Phase 3 of PROCESS.md.*

