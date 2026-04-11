# Site Spec — `Swift Electrical Ltd`

Generated from `sites/Swift-electical/site-brief.md`. This spec locks content + design before any HTML is written.

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**  
Swift Electrical’s site should feel like a **small architectural practice’s monograph** transposed onto electrical work: generous white space, a calm cool navy as structure, muted sage as the only “nature” nod, and typography that reads like a well-typeset brief — confident, unhurried, and precise. Photography is documentary (hands, boards, stone, light) never stock-grin or van-graphics energy. The overall impression is **studio daylight in Cirencester**: organised desks, clear process, and workmanship shown rather than shouted.

**The differentiator:**  
A **numbered “how we work” spine** that runs from the hero through to Contact — same-day written quotes, Part P certificates on completion, 48-hour EICR turnaround — presented as **fixed process**, not marketing bullets. One memorable line recurs in key places: *“We’ll get that sorted properly.”*

**What this site is deliberately not:**  
Not a generic tradesperson template (lightning bolts, aggressive yellow/black, “24/7 emergency” hero, vague “quality solutions”). Not dark industrial (that’s another brand). Not rustic heritage serif (that’s plumbing craft territory). Not budget-positioning or price-led design.

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary: #2D3B4D;    /* quiet cool navy: nav, footer, headings, key rules */
  --color-secondary: #6F8269;  /* muted sage: secondary buttons, links hover, section labels */
  --color-accent: #B69156;     /* restrained brass/amber: credential strip, micro-highlights, “verified” moments only */
  --color-text: #1A222C;       /* near-charcoal for body */
  --color-text-muted: #5A6570; /* supporting copy, captions, meta */
  --color-bg: #FAFAF8;         /* warm white: main canvas */
  --color-bg-alt: #F2F0EC;     /* warm grey: alternating bands, cards */
  --color-border: #DCD7CF;     /* hairlines, dividers, form fields */
}
```

*Notes on the palette:*  
Inspired by the brief’s “architectural practice reception” + Gloucestershire countryside restraint. **Usage rules:** `--color-accent` only for small UI moments (section index numbers, credential band top border, optional pull-quote rule) — never for long body text. **Navy** carries authority; **sage** humanises without going rustic. Keep backgrounds light; dark footer is acceptable with `dk` badge variants.

### Typography

**Display font:** `Syne` from Google Fonts — weights `700, 800`  
**Body font:** `Figtree` from Google Fonts — weights `400, 500, 600`

*Notes on the pairing:*  
**Syne** gives headings a contemporary, gallery-adjacent geometry — distinctive and structured without feeling tech-startup cold. **Figtree** is a warm, highly legible sans for long reading and UI; it pairs cleanly with Syne without competing. Use Syne for H1/H2, page intros, and large numerals in the process spine; Figtree for nav, body, forms, buttons, and captions.

### Other tokens

```css
:root {
  --font-display: 'Syne', sans-serif;
  --font-body: 'Figtree', sans-serif;

  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;       /* tighter than “friendly SaaS”; more “print layout” */

  --shadow-sm: 0 1px 3px rgba(45, 59, 77, 0.06);
  --shadow-md: 0 8px 24px rgba(45, 59, 77, 0.08);

  --max-width: 1120px;
  --spacing-unit: 1rem;

  --border-hairline: 1px solid var(--color-border);
  --letterspace-label: 0.14em; /* small caps / overline labels */
}
```

---

## 3. File structure

```
sites/Swift-electical/
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
│   ├── service-01-consumer-unit.jpg
│   ├── service-02-rewires.jpg
│   ├── service-03-ev-charger.jpg
│   ├── service-04-sockets-circuits.jpg
│   ├── service-05-lighting.jpg
│   ├── service-06-fault-finding.jpg
│   ├── service-07-eicr.jpg
│   ├── service-08-outdoor.jpg
│   ├── service-09-smart-home.jpg
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
│   ├── gallery-11.jpg
│   └── gallery-12.jpg
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
Swift Electrical — NICEIC electricians in Cirencester & the Cotswolds

**Meta description:**  
Domestic and light commercial electrics from a small NICEIC-registered team. Same-day written quotes, Cotswold older-property experience, and EV charger installation. Based in Cirencester — covering Gloucestershire villages within 15 miles.

**Section structure:**

1. **Header + navigation**
   - Logo / wordmark: **Swift Electrical** (clean wordmark; optional thin horizontal rule beneath nav on scroll)
   - Nav links: Home, Services, About, Gallery, Contact
   - CTA button: **Request a visit** → `contact.html`

2. **Hero section**
   - Overline (small caps): **Cirencester · Gloucestershire · Est. 2014**
   - Headline: **Electrical work, handled properly.**
   - Subheadline: **NICEIC-registered domestic and light commercial electrics for the Cotswolds. We turn up when we say we will — and you’ll have a written quote by the end of the day.**
   - CTA buttons:
     - Primary: **Book a site visit** → `contact.html`
     - Secondary: **View services** → `services.html`
   - Hero image: `hero.jpg` (see Image manifest)
   - Trust strip (compact row): CSS badges **NICEIC**, **Part P**, **TrustMark** + text line **£2m liability · 12-month workmanship guarantee**

3. **The process spine (4 steps)** — *core differentiator*
   - Section title: **Reliability, written down.**
   - Intro: **We’re not the cheapest quote you’ll get — and we’re fine with that. We’re the team you call when you want the job scoped clearly, done once, and certified properly. Here’s what happens every time.**
   - Step **01** — **You get in touch**  
     Copy: **Call, email, or use the form. Our office manager handles bookings during working hours and will suggest the next available slot that fits the job.**
   - Step **02** — **We visit and assess**  
     Copy: **Daniel or a qualified electrician attends, listens to what you need, and inspects what’s there — especially important in older Cotswold stone properties where wiring rarely runs in straight lines.**
   - Step **03** — **Written quote the same day**  
     Copy: **By 7pm you’ll have a clear quote in your inbox — not a verbal figure you have to chase. No surprises, no “we’ll send it next week.”**
   - Step **04** — **Work, certification, guarantee**  
     Copy: **We complete notifiable work under Part P, issue your certificate, and stand behind installations with a 12-month workmanship guarantee.**

4. **Services snapshot (3 columns or cards)**
   - Intro: **From fuse boards to full rewires — and a growing share of EV chargers. If it’s on the list, we do it properly.**
   - Card 1 — **Consumer units & rewires**  
     **Modern protection for older circuits. Inspection, upgrade, certification.**
   - Card 2 — **EV charger installation**  
     **OZEV-registered installer. Home and small-business charge points — we’ll handle the grant paperwork.** *(OZEV as text trust line under card, no logo.)*
   - Card 3 — **Testing & compliance**  
     **EICR for landlords, buyers, and renewals — report within 48 hours.**
   - CTA: **Full service list** → `services.html`

5. **Cotswold property experience**
   - Headline: **Stone walls. Thick walls. Fewer surprises.**
   - Copy: **We’ve spent eleven years working in the villages around Cirencester — Bourton, Burford, Tetbury, Fairford, Lechlade, and along the Stroud corridor. We know how older properties hide their electrics, and we plan for it before we cut a channel or lift a floorboard.**
   - Pull quote (styled): *“We’ll get that sorted properly.”*

6. **Social proof (quotes)**
   - Section title: **What people actually say.**
   - Quote 1: **“Daniel was here exactly when he said he’d be.”**
   - Quote 2: **“We got a written quote the same evening, which I wasn’t expecting.”**
   - Quote 3: **“The guys left it cleaner than they found it — I’m not joking.”**
   - Quote 4: **“Recommended by our neighbour, and now I’ve recommended them to three people.”**
   - Note: **Facebook and Instagram: @swift.electrical.glos / SwiftElectricalCirencester** (display handles only — no links to real accounts in demo)

7. **Honest boundaries band** *(brief: not budget, not 24/7)*
   - Headline: **Clear on what we do — and what we don’t.**
   - Copy: **We don’t chase the cheapest quote, and we don’t take on large commercial sites. We don’t offer after-hours emergency callouts past 7pm — we have families, and we’d rather be honest than promise what we can’t keep. For planned work and daytime faults, we’re meticulous — and we communicate like people who respect your time.**
   - CTA: **See hours & contact** → `contact.html`

8. **Footer**
   - **Swift Electrical Ltd** — NICEIC domestic & light commercial electricians  
   - Phone: **01285 740 231** · Email: **info@swiftelectrical.co.uk**  
   - Area: **Cirencester and within approx. 15 miles**  
   - Hours: **Mon–Fri 7:30–17:30 · Sat 8:00–13:00 (faults by arrangement) · Sun closed**
   - Accreditation badges (CSS library): **NICEIC**, **Part P**, **TrustMark**, **Fully Insured** (`nb-insured` with £2m copy in footer text)
   - Copyright: **© Swift Electrical Ltd**
   - Tagline: **We’ll get that sorted properly.**

---

### 4.2 Services (`services.html`)

**Page title:**  
Electrical services — Swift Electrical (Cirencester & Cotswolds)

**Meta description:**  
Fuse board upgrades, rewires, EV chargers, lighting, fault finding, EICR, outdoor electrics, and smart-home wiring. NICEIC-registered team based in Cirencester. Written quotes the same day.

**Section structure:**

1. **Header + navigation** (as Home)

2. **Page hero**
   - Overline: **Services**
   - Headline: **Everything we take on — done to the same standard.**
   - Subhead: **Each job gets a proper assessment, a written quote by evening, and certification where the regulations require it. If you’re unsure which service fits, call us — we’ll point you in the right direction.**

3. **Intro band — pricing philosophy** *(brief: not cheapest)*
   - Headline: **Why we’re rarely the cheapest quote.**
   - Copy: **A low quote often means someone’s skipped time on assessment, used the minimum spec, or plans to find “extras” on site. We price for the full job: proper inspection, materials we’re happy to sign off, and paperwork you can show your insurer or solicitor. If you’re comparing on price alone, we might not be the right fit — and that’s alright.**

4. **Service blocks** (one anchored section each, with optional anchor nav)

   - **Consumer unit (fuse board) upgrades**  
     Replace ageing fuse boards with modern RCD-protected units. Full inspection before swap, tidy termination, labelled circuits, and certification on completion.

   - **Rewires (full and partial)**  
     Whole-house rewires for dated installations, plus targeted partial rewires for extensions and problem circuits. We plan routes realistically for stone and solid walls.

   - **EV charger installation**  
     Home and small-business charge points. **OZEV-registered** — we can guide you through grant paperwork. 60+ domestic installs in the last two years in this area. *(Plain text OZEV signal; no trademark logo.)*

   - **Additional sockets and circuits**  
     New doubles, USB outlets, dedicated circuits for home offices, kitchens, and outbuildings — installed cleanly and tested.

   - **Lighting design and installation**  
     Downlights, LED retrofits, garden and driveway lighting, and wiring prepared for smart switching.

   - **Fault finding and repairs**  
     Tripping RCDs, dead sockets, flickering lights, partial power loss — diagnosed properly and fixed, not taped over.

   - **Periodic inspection reports (EICR)**  
     Landlord certificates, pre-purchase surveys, insurance renewals. **Report delivered within 48 hours** of inspection.

   - **Outdoor and garden electrics**  
     Weatherproof outlets, supplies to garages and garden buildings — installed with Cotswold stone and damp in mind.

   - **Smart home wiring**  
     Pre-wiring for smart switches, multi-room audio, CCTV rough-in, and structured cabling for reliable home networks.

5. **Sidebar or bottom strip (desktop): credentials**
   - Repeat CSS badges: **NICEIC**, **Part P**, **TrustMark**, **Fully Insured**
   - Short line: **12-month workmanship guarantee on installations.**

6. **CTA**
   - Headline: **Tell us what you need.**
   - Copy: **We’ll arrange a visit and have a quote to you the same day.**
   - Button: **Contact Swift Electrical** → `contact.html`

7. **Footer** (as Home)

---

### 4.3 About (`about.html`)

**Page title:**  
About us — Swift Electrical, Cirencester

**Meta description:**  
Meet Daniel Swift and the small team behind Swift Electrical — NICEIC-registered electricians serving the Cotswolds with same-day quotes and straight communication.

**Section structure:**

1. **Header + navigation** (as Home)

2. **Page hero**
   - Overline: **About**
   - Headline: **A small team. A fixed way of working.**
   - Subhead: **Two qualified electricians and a part-time office manager — enough capacity to stay responsive, small enough to care about every job.**

3. **Daniel’s story**
   - Image: `about-portrait.jpg` (beside or below on mobile)
   - Body copy: **Daniel Swift founded Swift Electrical after five years with a larger regional contractor — a firm where the vans looked smart but the workmanship and customer care didn’t always match. He went NICEIC-registered on day one of trading because he wanted every homeowner to know the work met a recognised standard. That was eleven years ago. Word spread quickly in the villages: he turned up on time, sent written quotes without being chased, and left properties tidy. Within eighteen months the diary was full; two years later he brought in a second electrician to keep quality high as demand grew.**
   - Pull quote: *“We’ll get that sorted properly.”*

4. **What we believe**
   - Bullet 1: **Communication is part of the trade** — if you’re guessing what happens next, we’ve failed.  
   - Bullet 2: **Older properties deserve respect** — we assume nothing until we’ve looked.  
   - Bullet 3: **Paperwork matters** — Part P certificates and EICRs aren’t admin; they’re your proof.

5. **The team in plain terms**
   - **Daniel Swift** — Founder, NICEIC-registered electrician, on-site lead.  
   - **Second electrician** — Employed, qualified, same standards as Daniel.  
   - **Office manager (part-time)** — Bookings, quotes admin, phone coverage during business hours.

6. **Guarantee & insurance**
   - Copy: **£2m public liability insurance. 12-month workmanship guarantee on all installations. Notifiable work is self-certified under Part P — you receive the certificate when the job is complete.**

7. **CTA**
   - **Ready to talk?** → `contact.html`

8. **Footer** (as Home)

---

### 4.4 Contact (`contact.html`)

**Page title:**  
Contact — Swift Electrical, Cirencester

**Meta description:**  
Book an electrician in Cirencester and the surrounding Cotswolds. Call 01285 740 231 or send a message. Same-day written quotes after a site visit.

**Section structure:**

1. **Header + navigation** (as Home)

2. **Page hero**
   - Overline: **Contact**
   - Headline: **Let’s arrange a visit.**
   - Subhead: **Call during office hours, or send the form — we’ll come back with a time before we ask you to hold for anything.**

3. **Contact methods (two columns)**
   - **Phone:** **01285 740 231** — answered by our office manager Monday–Friday during business hours.  
   - **Email:** **info@swiftelectrical.co.uk**  
   - **Area:** **Based in Cirencester. We cover Bourton-on-the-Water, Burford, Tetbury, Fairford, Lechlade, the Stroud corridor, and surrounding villages within roughly 15 miles.**

4. **Hours panel**
   - **Monday–Friday:** 7:30–17:30  
   - **Saturday:** 8:00–13:00 — emergency fault work only, by prior arrangement  
   - **Sunday:** Closed  
   - Note: **We do not offer callouts after 7pm.** For urgent issues outside our hours, contact your DNO (distribution network operator) if you suspect a supply fault, or a 24-hour emergency service if you need immediate attendance — we’re always happy to pick up planned follow-up work the next working day.

5. **Contact form**
   - Fields:
     - **Name** (text, required)
     - **Email** (email, required)
     - **Phone** (tel, optional but encouraged)
     - **Postcode / village** (text, required) — helps routing
     - **What do you need?** (textarea, required)
     - **Preferred contact method** (select: Phone / Email)
   - Submit button: **Send message**
   - Privacy note (short): **This is a demo contact form — submissions are not delivered.**

6. **Map placeholder**
   - Static placeholder or semantic “service area” graphic — **no live Google Maps embed required for demo**; label: **Cirencester & 15-mile radius**

7. **Footer** (as Home)

---

### 4.5 Gallery (`gallery.html`)

**Page title:**  
Project gallery — Swift Electrical

**Meta description:**  
A look at the kind of work we do: consumer units, EV chargers, garden lighting, EICR-ready installations, and neat finishes in Cotswold properties.

**Section structure:**

1. **Header + navigation** (as Home)

2. **Page hero**
   - Overline: **Gallery**
   - Headline: **Neat work, in context.**
   - Subhead: **Installations and finishes from recent domestic and light commercial jobs around Gloucestershire. Every image reflects the standard we bring to your property.**

3. **Gallery grid**
   - Layout: responsive CSS grid, **3 columns desktop / 2 tablet / 1 mobile**; consistent aspect ratio **4:3**; optional lightbox (see Interactive elements)
   - Images `gallery-01.jpg` … `gallery-12.jpg` with captions below each (from Image manifest)

4. **Closing CTA**
   - **Planning something similar?** → `contact.html`

5. **Footer** (as Home)

---

## 5. Copy bank

- **Main CTA text:** Book a site visit  
- **Secondary CTA text:** View services / Full service list  
- **Form submit button:** Send message  
- **Form success message (demo):** Thanks — your message has been noted. (Demo: this form doesn’t send email.)  
- **404 page message:** That page isn’t here — head back to the home page or use the menu.  
- **Footer tagline:** We’ll get that sorted properly.  
- **Recurring brand line:** We’ll get that sorted properly.  
- **Tel display:** 01285 740 231  
- **Email:** info@swiftelectrical.co.uk  

---

## 6. Image manifest

### Hero

| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `hero.jpg` | Home page hero | 16:9 | Professional documentary photograph, electrician in smart dark navy workwear without hi-vis, installing a modern white consumer unit on a freshly plastered pale wall, hands and forearms visible or three-quarter from behind, natural soft daylight from side window, immaculate tidy job site, no logos, no text, Cotswold domestic interior mood, subtle warm neutral tones, editorial architectural photography style, high detail, calm atmosphere --ar 16:9 --style raw |

### Portraits / people

| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `about-portrait.jpg` | About page — Daniel Swift | 4:5 | Portrait of a British male electrician early 40s, clean dark workwear shirt no hi-vis, standing outside a limestone Cotswold building or in a bright workshop doorway, natural composed expression not exaggerated smile, professional editorial portrait, soft overcast light, shallow depth of field, no logos, no text --ar 4:5 --style raw |

### Services (optional cards / services page visuals)

| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `service-01-consumer-unit.jpg` | Consumer units | 4:3 | Close-up modern white consumer unit with neatly labelled circuits, tidy cable entry, professional electrical installation, pale wall, natural light, documentary style, no text overlays --ar 4:3 --style raw |
| `service-02-rewires.jpg` | Rewires | 4:3 | First-fix electrical wiring in a period property, neat cable runs and clips along joists, respectful of old timber, dust-controlled site, documentary photo --ar 4:3 --style raw |
| `service-03-ev-charger.jpg` | EV | 4:3 | Sleek white EV wall charger mounted on rendered garage wall, driveway edge visible, clean domestic UK setting, overcast soft light, no brand logos --ar 4:3 --style raw |
| `service-04-sockets-circuits.jpg` | Sockets | 4:3 | New double socket with USB-A/C ports on painted wall, perfectly level, fine shadow, domestic office corner --ar 4:3 --style raw |
| `service-05-lighting.jpg` | Lighting | 4:3 | Recessed LED downlights in straight line on kitchen ceiling, even spacing, warm white glow, clean modern kitchen --ar 4:3 --style raw |
| `service-06-fault-finding.jpg` | Faults | 4:3 | Electrician’s multimeter and insulated tools on protective mat, organised diagnostic setup, no faces, professional still life --ar 4:3 --style raw |
| `service-07-eicr.jpg` | EICR | 4:3 | Clipboard with technical checklist papers and pen on kitchen table, cup of tea nearby, hands edge of frame only, domestic setting, no readable proprietary forms --ar 4:3 --style raw |
| `service-08-outdoor.jpg` | Outdoor | 4:3 | Weatherproof outdoor double socket on Cotswold stone wall, neat install, soft daylight --ar 4:3 --style raw |
| `service-09-smart-home.jpg` | Smart | 4:3 | Modern white light switch plate being fitted, flush wall, cables neatly tucked, minimalist interior --ar 4:3 --style raw |

### Gallery (12 images)

| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `gallery-01.jpg` | Neat consumer unit | 4:3 | Extreme close-up modern consumer unit, clearly labelled circuit breakers, tidy cable entry, professional finish, soft daylight --ar 4:3 --style raw |
| `gallery-02.jpg` | Stone outbuilding socket | 4:3 | Cotswold limestone outbuilding wall with new grey weatherproof double socket, perfectly aligned, documentary --ar 4:3 --style raw |
| `gallery-03.jpg` | EV charger | 4:3 | White home EV charger on rendered garage, driveway, UK suburban house, soft overcast light, no logos --ar 4:3 --style raw |
| `gallery-04.jpg` | Under-floor neat run | 4:3 | Neat cable clips along joist edge in older property floor void, clean work, dust minimal --ar 4:3 --style raw |
| `gallery-05.jpg` | Kitchen downlights | 4:3 | Row of recessed downlights in white kitchen ceiling, perfectly aligned, warm light --ar 4:3 --style raw |
| `gallery-06.jpg` | Smart switch install | 4:3 | Smart-style white switch plate mid-install, flush to wall, no brand text --ar 4:3 --style raw |
| `gallery-07.jpg` | Garden lighting dusk | 4:3 | Low garden uplights on Cotswold stone wall at dusk, subtle warm glow, atmospheric not theatrical --ar 4:3 --style raw |
| `gallery-08.jpg` | EICR discussion still life | 4:3 | Clipboard, pen, printed report stack on table, professional domestic setting, no faces, no readable text --ar 4:3 --style raw |
| `gallery-09.jpg` | Home office USB socket | 4:3 | New white double socket with USB ports beside desk, cable management tidy --ar 4:3 --style raw |
| `gallery-10.jpg` | Organised tool bag | 4:3 | Open electrician tool bag on protective floor mat, tools arranged neatly, clean professional kit, no logos --ar 4:3 --style raw |
| `gallery-11.jpg` | Fuse board before/after diptych feel | 4:3 | Split scene or side-by-side: old rewirable fuse box vs new RCD consumer unit on wall, realistic UK home, documentary --ar 4:3 --style raw |
| `gallery-12.jpg` | Commercial trunking run | 4:3 | Straight white cable trunking along light commercial unit wall, corners mitred neatly, professional finish --ar 4:3 --style raw |

---

## 7. Accreditations

Use **only** the NeoBookworm CSS badge library (`accreditations/accreditation-badges.html` — copy CSS + HTML snippets into `styles.css` / pages). **Do not use real trademark logo images.**

| Badge | Library class | Where it appears |
|---|---|---|
| **NICEIC** | `nb-badge nb-niceic` (+ `dk` on dark footer) | Home hero trust strip, footer every page, Services credentials strip, About optional row |
| **Part P** | `nb-badge nb-partp` (+ `dk` on dark footer) | Same as above |
| **TrustMark** | `nb-badge nb-trustmark` (+ `dk` on dark footer) | Same as above |
| **Fully Insured** | `nb-insured` (+ `dk` on dark footer) | Footer every page; body copy states **£2m** (adjust `nb-insured` subtitle text to match) |

**Not used (wrong trade or not in brief):** **Gas Safe** — not applicable to a pure electrical contractor demo.  
**Not used (not claimed in brief):** **CHAS**, **Checkatrade**, **Which? Trusted Trader**, **FENSA**.  
**Plain text only (no library badge):** **OZEV-registered** — mentioned on Home, Services (EV section), and optionally Contact as a trust line.

---

## 8. Interactive elements

Vanilla JS only (no libraries):

- **Mobile navigation:** hamburger control toggles nav panel; focus trap and `aria-expanded` on button; close on escape and outside click where practical  
- **Gallery lightbox (optional but recommended):** click thumbnail opens full-size overlay; prev/next keys; close button; `aria-modal` on overlay  
- **Contact form (demo):** prevent default submit; show inline success message; no backend  
- **Smooth scroll:** optional for in-page anchor links on Services if anchor nav is added  

---

## 9. Accessibility notes

- Verify **WCAG AA** contrast for `--color-text` on `--color-bg` and for `--color-text-muted` on `--color-bg-alt` (adjust muted grey if needed)  
- Syne headings: avoid all-caps long lines; use letterspacing only on short overlines  
- Badge row: each badge keeps `role="img"` and descriptive `aria-label` with demo registration placeholder text per library docs  
- Form: visible labels, associated `for`/`id`, clear error states if validation added  
- Lightbox: keyboard operable, focus return to trigger on close  

---

## 10. Open questions

- **Favicon:** Simple geometric monogram “S” or wordmark slice — decision in Phase 4  
- **Live map:** Demo may stay static; live embed is optional for production clone  

---

## 11. Icons, illustrations, and decorative elements

- **Minimal line icons (inline SVG or single sprite):** telephone, envelope, map pin, clock, checklist/document (for process steps), lightning or plug motif **only if extremely subtle** (prefer abstract “circuit node” dot-and-line for section markers)  
- **Decorative:** thin horizontal rules in `--color-border`; optional **large faded Syne numerals** (01–04) behind process steps; **accent corner brackets** on hero image (CSS, very light)  
- **No** cartoon mascots, **no** stock “electrician thumbs up,” **no** neon glow effects  
- **Social:** text-only handles (Facebook / Instagram) — optional small monochrome social glyphs **without** brand-colour trademark icons if used at all  

---

*Spec complete. Review, tweak if needed, commit as `Swift-electical: spec generated`, and move to Phase 3 of `PROCESS.md`.*
