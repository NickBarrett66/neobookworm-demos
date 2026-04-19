# Lee Morgan Heating & Plumbing Ltd — Site Specification (Build-Ready)

Domain for demo deploy: `leemorgangasman.co.uk`  
Site type: static HTML/CSS/vanilla JS, 5 pages (Home, About, Services, Gallery, Contact), deployed to Netlify.

**Global required element (all pages): NeoBookworm demo banner**

> “This is a free demo site built for Lee Morgan Heating & Plumbing by [NeoBookworm.uk](https://neobookworm.uk/contact.html). Like what you see? Get in touch.”

- Must include a **CTA button** linking to `https://neobookworm.uk/contact.html`
- Must include a **close button** (dismiss)
- Dismiss preference stored in `localStorage` so it stays dismissed across pages
- Styling: visible but not obtrusive; does **not** compete with the site’s primary CTA

---

## 1. Design system

### Colour palette (warm craft / slate navy / copper accent)

- **Primary colour**: `#1E2A36` — *Slate Navy*  
  - **Usage**: header/nav background, footer background, H1 underline/accents, primary UI chrome (icons, dividers).  
  - **Why**: reads competent and trustworthy (Gas Safe / compliance energy) without drifting into franchise red/blue.

- **Secondary colour**: `#2F3F4E` — *Workshop Slate*  
  - **Usage**: cards/borders on light backgrounds, secondary button border, subtle section separators, icon strokes.  
  - **Why**: keeps the industrial undertone; supports the craft feel without adding “corporate gloss”.

- **Accent colour**: `#B86B3D` — *Copper*  
  - **Usage rule (sparingly)**: primary CTAs, key highlights (Alpha warranty block), hover states, small emphasis rules.  
  - **Why**: nods to copper pipework and hands-on trade craft; warm counterweight to slate navy.

- **Background colour**: `#F6F1E7` — *Parchment*  
  - **Usage**: page background and large section backgrounds.  
  - **Why**: warmer than pure white; avoids a clinical “boiler-plan brochure” vibe.

- **Text colour (body)**: `#1B1D1F` — *Charcoal*  
  - **Usage**: default paragraphs, lists, form labels.  
  - **Why**: high readability on parchment, slightly softer than pure black.

- **Text colour (headings)**: `#13202C` — *Deep Navy Ink*  
  - **Usage**: H1–H4 headings and strong emphasis.  
  - **Why**: ties headings to primary slate navy while keeping contrast crisp.

- **Muted / supporting text colour**: `#5A646E` — *Muted Slate*  
  - **Usage**: secondary copy, captions, meta lines, helper text, testimonial attribution.  
  - **Why**: keeps the site grounded and calm; supports the “straight-talking” voice (no shouty grey-on-grey).

**Implementation token names (use CSS custom properties in `:root`)**

```css
:root {
  /* Brand */
  --color-primary: #1E2A36;    /* Slate Navy */
  --color-secondary: #2F3F4E;  /* Workshop Slate */
  --color-accent: #B86B3D;     /* Copper */
  --color-accent-hover: #A85F35;

  /* Surfaces + type */
  --color-bg: #F6F1E7;         /* Parchment */
  --color-text: #1B1D1F;       /* Charcoal */
  --color-heading: #13202C;    /* Deep Navy Ink */
  --color-muted: #4E5860;      /* Muted Slate (darkened for WCAG contrast on parchment) */

  /* Layout */
  --radius-card: 14px;
  --radius-control: 12px;
  --shadow-soft: 0 10px 30px rgba(19, 32, 44, 0.12);

  /* Spacing (4px grid) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Global fixed UI */
  --banner-h: 52px; /* JS should measure actual banner height and update this */
}
```

### Typography

- **Heading font**: Google Font **`Saira Condensed`**  
  - **Weights**: 600, 700  
  - **Usage rule**: headings only (H1–H4), short punchy lines; avoid long paragraphs in this font.  
  - **Why**: sturdy and workshop-like, slightly condensed without feeling “tech startup”. (Not Inter/Roboto/Lato.)

- **Body font**: Google Font **`Source Sans 3`**  
  - **Weights**: 400, 600  
  - **Usage rule**: all body copy, nav items, buttons, form labels; 600 used for emphasis and UI labels.  
  - **Why**: clean, readable, unpretentious; doesn’t bring “corporate brochure” energy. (Not Inter/Roboto/Lato.)

### Font size scale (rem)

- `h1`: 2.25rem (mobile) / 3.0rem (desktop ≥ 960px)  
- `h2`: 1.75rem / 2.125rem  
- `h3`: 1.375rem / 1.5rem  
- `h4`: 1.125rem / 1.25rem  
- `body`: 1.0rem  
- `small`: 0.9375rem  
- `caption`: 0.875rem

### Spacing scale (4px base grid)

Use consistent spacing tokens (px shown; implement with rem if preferred):

- `--space-1`: 4px  
- `--space-2`: 8px  
- `--space-3`: 12px  
- `--space-4`: 16px  
- `--space-5`: 20px  
- `--space-6`: 24px  
- `--space-8`: 32px  
- `--space-10`: 40px  
- `--space-12`: 48px  
- `--space-16`: 64px

### Border radius

- **Default radius**: 14px (cards, image frames)  
- **Buttons/inputs**: 12px  
- **Small pills/badges**: 999px

### Shadow style (single consistent shadow)

Use one shadow only:

```css
box-shadow: 0 10px 30px rgba(19, 32, 44, 0.12);
```

### Layout primitives (required so all sections feel consistent)

- **Max content width**: `1200px`
- **Page gutters**: `padding-inline: clamp(16px, 4vw, 32px)`
- **Section vertical padding**: `padding-block: clamp(48px, 8vw, 88px)`
- **Readable line length**: body copy max width `65ch`

Suggested implementation:

```css
.container {
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(16px, 4vw, 32px);
}
.section {
  padding-block: clamp(48px, 8vw, 88px);
}
.prose {
  max-width: 65ch;
}
```

### Button style

- **Primary button**
  - Background: `#B86B3D` (Copper)
  - Text: `#FFFFFF`
  - Hover: background to `#A85F35` (slightly darker copper), translateY(-1px), shadow intensifies subtly
  - Focus: 2px outline `#1E2A36` + 2px offset

- **Secondary button**
  - Background: transparent
  - Text: `#1E2A36`
  - Border: 2px solid `#2F3F4E`
  - Hover: background `#1E2A36`, text `#FFFFFF`, border `#1E2A36`

### Link style

- Colour: `#1E2A36` (Slate Navy)  
- Underline: visible by default (`text-decoration-thickness: 2px; text-underline-offset: 3px;`)  
- Hover: underline stays; colour shifts to `#B86B3D` (Copper)  
- In dark areas (nav/footer): links use `#F6F1E7` with copper hover

---

## 2. Page-by-page specification

### Shared elements (all pages)

#### A) NeoBookworm demo banner (top of page)

- **Layout description**: full-width slim bar, fixed at top. 3 columns on desktop: message (left), CTA button (center/right), close button (far right). On mobile: message wraps to 2 lines, CTA button below message, close button stays top-right.
- **Exact copy**:

> This is a free demo site built for Lee Morgan Heating & Plumbing by NeoBookworm.uk. Like what you see? Get in touch.

> Button label: Contact NeoBookworm

- **Component notes**:
  - Stored in `localStorage` key: `nbw_demoBannerDismissed_v1 = "1"`
  - On dismiss: add `.is-dismissed` and set localStorage; do not animate aggressively (subtle slide-up 200ms ok)

#### B) Site header (logo + nav)

- **Layout description**: brand left (“Lee Morgan” line 1, “Heating & Plumbing Ltd” line 2), nav right, optional nav CTA. Background slate navy.
- **Component notes**: sticky (see Navigation section), shadow when scrolled.

#### C) Global CTA strip (appears on Home only; other pages end with page-specific CTA)

Not used globally; each page gets its own closing CTA specified below.

---

## Home (`index.html`)

### 1) Hero — “Gasman” positioning + primary CTA

- **Layout description**: two-column hero (desktop 55/45). Left: text stack + CTAs + small trust line. Right: framed hero image with rounded corners and subtle shadow. Background parchment with a faint navy texture band behind image (CSS gradient).
- **Exact copy**:

> **H1:** Gas engineer in Royal Wootton Bassett & Swindon  
> **Subheading:** 18 years in the trade. Self‑employed since 2021. Straight answers and tidy work.  
> **Body:** If it’s fixable, I’ll fix it properly. If it’s not worth fixing, I’ll tell you that too.  
> **Primary CTA button:** Call Lee  
> **Secondary CTA button:** Get a quote  
> **Small trust line (under CTAs):** Gas Safe registered • Fully insured • 5.0★ from local customers

- **Image slot**:
  - Hero image, **16:9**: “Gas Safe engineer in clean workwear kneeling beside a modern wall-hung combi boiler in a bright utility room, copper pipework neat, slate navy + warm parchment colour grade, shallow depth of field, no face visible”
- **Component notes**:
  - “Call Lee” uses `tel:+447739583768` (display as `07739 583768`)
  - “Get a quote” scrolls to Home contact CTA section (or links to `contact.html`)
  - On mobile: image stacks above copy; CTAs become full-width

### 2) Trust strip (required: Gas Safe, Fully Insured, third signal)

- **Layout description**: full-width band with 3 columns (desktop) / stacked cards (mobile). Each item: badge icon + bold label + small line.
- **Exact copy**:

> **Item 1 label:** Gas Safe registered  
> **Item 1 line:** Registration no. 525088

> **Item 2 label:** Fully insured  
> **Item 2 line:** Domestic & small commercial work

> **Item 3 label:** 100% recommended  
> **Item 3 line:** 16 reviews • Facebook

- **Image slot**: none (use CSS badge library for Gas Safe + Fully Insured; third uses star icon SVG)
- **Component notes**:
  - Gas Safe badge must be visually strongest (slightly larger)

### 3) Services overview (6 tiles)

- **Layout description**: section header + 2x3 grid of service tiles (desktop), 1-column stack (mobile). Each tile: small icon, service name, one sentence, “Learn more” link.
- **Exact copy**:

> **H2:** What I do  
> **Intro:** Boiler work, heating, and plumbing repairs. No waffle. Just the jobs people actually ring for.

> **Tile 1 title:** Boiler installs & replacements  
> **Tile 1 line:** New combi, system or conventional boilers. Fitted, commissioned, explained.

> **Tile 2 title:** Boiler servicing  
> **Tile 2 line:** Annual services to keep it safe, efficient, and under warranty.

> **Tile 3 title:** Boiler repairs & breakdowns  
> **Tile 3 line:** Fault finding and proper fixes when it won’t heat or won’t fire.

> **Tile 4 title:** Central heating upgrades  
> **Tile 4 line:** Radiators, pipework, controls, and getting heat back where it should be.

> **Tile 5 title:** Gas safety certificates (CP12)  
> **Tile 5 line:** Landlord checks and paperwork done properly, on time.

> **Tile 6 title:** Plumbing repairs  
> **Tile 6 line:** Leaks, taps, toilets, pressure issues — the annoying stuff sorted quickly.

> **Section CTA link label:** See all services

- **Image slot**: icons (inline SVG), no photos required
- **Component notes**:
  - Hover: tile lifts 2px; copper underline animates in under title
  - “See all services” links to `services.html`

### 4) Standalone callout — Alpha boiler 13-year warranty (required)

- **Layout description**: standout horizontal block with copper border left, navy background panel, split 60/40. Left: copy. Right: product-style image frame.
- **Exact copy**:

> **H2:** Alpha boilers. Up to 13 years covered.  
> **Body:** I install Alpha boilers because they’re solid, well priced, and backed by serious warranty options. If you want a new boiler with long-term peace of mind, this is the cleanest route.  
> **Bullet 1:** Up to 13‑year warranty options  
> **Bullet 2:** Stainless steel heat exchanger  
> **Bullet 3:** Proper commissioning with a flue gas analyser  
> **Button label:** Ask about Alpha install

- **Image slot**:
  - Warranty block image, **4:3**: “modern wall-hung gas boiler in a minimal utility room with tidy copper pipework, warm craft lighting, slate navy shadows, no branding visible”
- **Component notes**:
  - Button links to `contact.html#form` with prefilled subject in message placeholder via JS (optional)

### 5) Testimonials (3) (required)

- **Layout description**: section header + 3 testimonial cards in a row (desktop) / swipeable horizontal scroll (mobile) with snap. Each card: quote, name/initials, context line.
- **Exact copy** (use exactly these three):

> “We would like to thank Lee for his prompt attention when we discovered our boiler was leaking on a Saturday morning. He came out within the hour and temporarily stopped the leak until he could source a new part which he fitted two days later. Would highly recommend.”
>
> — Customer review • Boiler repair

> “Lee did a great job for us removing a gas fire. He did the job quickly with no fuss and left the room clean and tidy. Would definitely recommend — he will be our go‑to for everything gas related.”
>
> — Customer review • Gas work

> “Just want to say — even with all the messing around, Lee turned up on time and not only serviced the boiler, sorted out the grumbling noises coming from the boiler too. Greatly appreciated and highly recommended.”
>
> — Customer review • Boiler service

- **Image slot**: none
- **Component notes**:
  - Add star row “★★★★★” in copper at top of each card

### 6) Coverage area callout (required)

- **Layout description**: two-column. Left: “where I cover” list. Right: simple map-style graphic panel (not interactive; a static illustrative image).
- **Exact copy**:

> **H2:** Local to Wiltshire  
> **Body:** Based in Royal Wootton Bassett. Regularly working in Swindon, Chippenham, Calne, Marlborough, Devizes and nearby villages.
>
> **List heading:** Areas I cover
> - Royal Wootton Bassett  
> - Swindon  
> - Chippenham  
> - Calne  
> - Marlborough  
> - Devizes  
> - Vale of White Horse villages

> **Small note:** If you’re just outside this list, ring anyway.

- **Image slot**:
  - Coverage graphic image, **16:9**: “minimal map-style illustration of Wiltshire area with a highlighted county shape, copper outline on parchment background, slate navy labels for towns (Swindon, Chippenham, Calne, Marlborough, Devizes, Royal Wootton Bassett), no real map branding”
- **Component notes**:
  - On mobile: list first, image second

### 7) Contact CTA (required)

- **Layout description**: full-width dark panel (slate navy) with centered copy and two buttons.
- **Exact copy**:

> **H2:** Need a gasman? Call Lee.  
> **Body:** Tell me what’s going on and where you are. I’ll let you know the next sensible step.  
> **Primary button:** Call 07739 583768  
> **Secondary button:** Use the contact form

- **Image slot**: none
- **Component notes**:
  - Primary button uses `tel:+447739583768` (display as `07739 583768`)
  - Secondary links to `contact.html#form`
  - Add `id="contact-cta"` to this section so the Home hero “Get a quote” button can scroll here.

---

## About (`about.html`)

### 1) About hero — short, human, credible

- **Layout description**: split hero 60/40. Left: heading + 2 short paragraphs. Right: portrait-style image in a frame.
- **Exact copy**:

> **H1:** The story behind the name  
> **Body:** I trained as a printer. Weekends I was on the tools with my dad. He was a plumber and the trade got into my blood.  
> **Body:** I qualified in gas, worked in the industry for 18 years, then the company I’d been with for 10 years closed down and I was made redundant. In March 2021 I went out on my own. Same standards. Just my name on the van.

- **Image slot**:
  - Portrait image, **3:4**: “gas engineer in clean workwear standing beside a modern boiler installation, arms folded, face not visible (cropped at chin), warm craft lighting, slate navy shadows, copper accents in tools”
- **Component notes**:
  - Keep paragraphs short; line length capped ~65ch

### 2) “Gasman” identity thread

- **Layout description**: single-column section with a subtle copper rule and a short pull-quote.
- **Exact copy**:

> **H2:** Why “gasman”?  
> **Body:** People started calling me that years ago. It stuck. If you need a gas engineer locally, you don’t want a call centre — you want the person who turns up and sorts it.
>
> **Pull quote:** “Straight answers. Proper work. No fuss.”

- **Image slot**: none
- **Component notes**:
  - Pull quote uses heading font, copper accent

### 3) Tools / trade image section (required)

- **Layout description**: 2-column. Left: image of tools/trade detail. Right: “how I work” bullets.
- **Exact copy**:

> **H2:** How I work  
> **Body:** I treat every job the same way my dad taught me: do it properly, leave it tidy, and explain what I’ve done.  
> **Bullets:**  
> - Turn up when I say I will  
> - Explain the fault in plain English  
> - Commission and test, not guess  
> - Leave your place clean
>
> **Small line:** Every day is a school day. I still learn on the job — that’s how you stay sharp.

- **Image slot**:
  - Tools image, **4:3**: “close-up of engineer’s hands using a flue gas analyser beside a boiler, copper pipework in frame, warm workshop lighting, shallow depth of field, no face”
- **Component notes**:
  - On mobile: image above bullets

### 4) Trust section — experience signals (required)

- **Layout description**: 3-up stat cards (desktop) / stacked (mobile).
- **Exact copy**:

> **H2:** Trust signals that actually matter  
>
> **Card 1 title:** 18 years in the trade  
> **Card 1 line:** Depth of experience before going solo.
>
> **Card 2 title:** Trading since 2021  
> **Card 2 line:** Incorporated March 2021. Built the reputation from scratch.
>
> **Card 3 title:** 100% recommended  
> **Card 3 line:** 16 reviews and counting.

- **Image slot**: none
- **Component notes**:
  - Use large numerals + short labels; no fluff copy

### 5) Closing CTA

- **Layout description**: centered CTA panel with copper button.
- **Exact copy**:

> **H2:** Want it sorted properly?  
> **Body:** Call and I’ll tell you what I can do and when I can do it.  
> **Button:** Call Lee

- **Component notes**: button uses `tel:+447739583768` (display as `07739 583768`)
 - **Component notes**: button uses `tel:+447739583768` (display as `07739 583768`)

---

## Services (`services.html`)

### 1) Services hero

- **Layout description**: slim hero with heading + one paragraph, plus trust chips row.
- **Exact copy**:

> **H1:** Gas, heating & plumbing services in Wiltshire  
> **Body:** The core jobs I do week in, week out. If you don’t see your exact issue, ring anyway and tell me what’s happening.
>
> **Trust chips:** Gas Safe registered • Fully insured • Royal Wootton Bassett

- **Image slot**: optional background texture only (no photo required)
- **Component notes**: keep it simple; services cards are the focus

### 2) Service cards grid (9 cards) (required)

- **Layout description**: 3x3 grid (desktop) / 1-column (mobile). Each card: small icon (inline SVG), title, one-sentence description.
- **Exact copy** (these 9, matching the brief list):

> **1. Boiler installation & replacement**  
> Remove and replace old boilers. Fit and commission combi, system or conventional.
>
> **2. Central heating installation**  
> New or upgraded heating systems: radiators, pipework, thermostats and controls.
>
> **3. Boiler servicing**  
> Annual servicing to keep the boiler safe, efficient, and within warranty requirements.
>
> **4. Boiler repair & breakdown**  
> Diagnosis and repair when it won’t fire, won’t heat, leaks, or keeps losing pressure.
>
> **5. Gas safety certificates (CP12)**  
> Landlord gas safety checks and CP12 certificates, done properly and on schedule.
>
> **6. Plumbing repairs**  
> Leaks, taps, toilets, pressure issues — quick fixes and clean workmanship.
>
> **7. Bathroom plumbing**  
> Replace and fit taps, showers, toilets and basins — one-offs or part of a refurb.
>
> **8. Smart thermostat installation**  
> Supply and fit Hive, Nest and similar controls. Set up properly and show you how it works.
>
> **9. Power flushing**  
> Clean out sludge and debris to restore flow, improve heat, and protect the boiler.

- **Image slot**: icons only (no photos required)
- **Component notes**:
  - Each icon uses secondary slate stroke with copper accent dot
  - Cards equal height; description is exactly one sentence

### 3) Featured block — Alpha boiler warranty (distinct) (required)

- **Layout description**: full-width featured block, different style from cards (dark navy panel with copper accents). Two columns: copy left, image right.
- **Exact copy**:

> **H2:** Alpha boiler installs with up to a 13‑year warranty  
> **Body:** If you’re replacing a boiler, this is the option I recommend most often. Solid kit, sensible money, and warranty lengths that are hard to beat.  
> **Checklist:**  
> - Help choosing the right boiler for the house  
> - Clean, tidy install and handover  
> - Commissioned and tested with a flue gas analyser  
> - Warranty options explained clearly  
> **Button:** Ask about a new Alpha boiler

- **Image slot**:
  - Featured Alpha image, **4:3**: “premium-looking modern boiler installation scene with neat copper pipework and a tool bag, warm craft lighting, slate navy shadows, no brand labels”
- **Component notes**:
  - Button links to `contact.html#form`

### 4) Services closing CTA

- **Layout description**: short CTA strip with call button + small note.
- **Exact copy**:

> **H2:** Tell me what you need doing  
> **Body:** Call or send a message. I’ll ask a couple of questions and book you in if it makes sense.  
> **Button:** Call Lee

---

## Gallery (`gallery.html`)

### 1) Gallery hero

- **Layout description**: heading + 1 paragraph, then a small note about examples.
- **Exact copy**:

> **H1:** Recent work  
> **Body:** A few typical jobs — installs, repairs, upgrades. Neat pipework, clean finish, and everything tested.
>
> **Small note:** Photos are representative examples for this demo site.

- **Image slot**: none
- **Component notes**: keep honest and simple

### 2) Project gallery — 8 before/after pairs with captions (required)

- **Layout description**:
  - Grid of 8 items. Each item is a “pair card”:
    - 7 items use a single **diptych image** (before/after in one 4:3 image split vertically, labeled with small “Before / After” corner tags).
    - 1 item uses an interactive **before/after slider** (two separate images; JS-controlled handle).
  - Desktop: 2 columns. Mobile: 1 column.

- **Exact captions + pair titles**:

> **Pair 1 title:** Boiler swap — old combi to clean new install  
> **Caption:** Old unit out. New boiler in. Pipework tidied. Tested and signed off.

> **Pair 2 title:** Leak fix — stopped, repaired, made good  
> **Caption:** Found the source, fixed it properly, and left it clean.

> **Pair 3 title:** Radiator upgrade — better heat, better control  
> **Caption:** New rad and valves. Balanced and running right.

> **Pair 4 title:** Smart control fitted — simple and clear setup  
> **Caption:** Controls installed, connected, and explained in plain English.

> **Pair 5 title:** Power flush — flow back, heat back  
> **Caption:** System cleaned out. Radiators working like they should.

> **Pair 6 title:** Landlord safety check — paperwork done  
> **Caption:** Checked, tested, recorded. CP12 certificate issued.

> **Pair 7 title:** Gas fire removal — capped and made safe  
> **Caption:** Removed cleanly, made safe, and left the room tidy.

> **Pair 8 title:** Bathroom tap swap — quick win, no mess  
> **Caption:** Old fittings off. New ones on. No drama.

- **Image slots**:
  - Pair 1: **Before image 4:3** and **After image 4:3** (this is the slider pair)
  - Pairs 2–8: **7 diptych images 4:3** (each contains before+after in one image)

- **Component notes (before/after slider spec)**:
  - HTML structure (in `gallery.html`) per slider item:
    - `.ba-slider` wrapper with fixed aspect ratio via `padding-top` or `aspect-ratio: 4 / 3`
    - `img.before`, `img.after` stacked
    - `.ba-after-clip` element clips the “after” image with `width: X%`
    - `.ba-handle` draggable (mouse + touch), with vertical line and small circle knob
  - JS behaviour (in `js/main.js`):
    - Default position 55%
    - Pointer events: `pointerdown`, `pointermove`, `pointerup` (use Pointer Events API)
    - Constrain 10%–90%
    - Update CSS custom property `--ba` and apply `clip-path` or width on `.ba-after-clip`
  - Accessibility:
    - Handle is focusable button with `aria-label="Before and after slider"`
    - Arrow keys adjust ±2%; Shift+arrow ±10%

### 3) Facebook recommendation strip mockup (required)

- **Layout description**: slim strip card with left: rating, middle: summary, right: “Read on Facebook” button (non-functional link to FB).
- **Exact copy**:

> ★★★★★ 5.0 · 16 reviews — 100% recommended on Facebook

> Button label: See reviews

- **Component notes**:
  - Link to `https://facebook.com/leemorgangasman` (open in new tab)

### 4) Gallery closing CTA

- **Layout description**: centered CTA.
- **Exact copy**:

> **H2:** Want yours done neatly?  
> **Body:** Call and tell me what’s going on.  
> **Button:** Call Lee

---

## Contact (`contact.html`)

### 1) Contact hero

- **Layout description**: split layout 55/45. Left: heading + short copy + click-to-call. Right: contact card with hours and service area.
- **Exact copy**:

> **H1:** Contact a gas engineer in Royal Wootton Bassett  
> **Body:** Call me for the quickest response. Or send a message and I’ll ring you back.  
> **Click-to-call label:** Call Lee: 07739 583768

> **Contact card heading:** Quick details  
> **Hours:** Mon–Fri 8:00–18:00 • Sat 8:00–13:00  
> **Emergency line:** Emergency callouts available (subject to availability)  
> **Service area line:** Royal Wootton Bassett • Swindon • Chippenham • Calne • Marlborough • Devizes

- **Component notes**:
  - Phone link uses `tel:+447739583768` (display text remains `07739 583768`)

### 2) Contact form (Netlify Forms) (required fields: name, phone, message)

- **Layout description**: form on left, reassurance copy on right.
- **Exact copy**:

> **H2:** Send a message  
> **Form field labels:**  
> - Name  
> - Phone number  
> - What do you need help with?  
>
> **Submit button:** Send message
>
> **Right-side reassurance heading:** What happens next  
> **Right-side bullets:**  
> - I’ll ring you back as soon as I can  
> - If it’s urgent, calling is best  
> - If it’s not worth repairing, I’ll tell you that straight

- **Component notes**:
  - Netlify attributes: `name="contact"`, `method="POST"`, `data-netlify="true"`
  - Include Netlify honeypot field: `data-netlify-honeypot="bot-field"` + hidden input
  - Success behaviour: redirect to same page with `?sent=1` and show inline confirmation banner (JS)
  - Add `id="form"` to this section so links to `contact.html#form` work.
  - Recommended placeholders:
    - Name: `e.g. Sarah`
    - Phone number: `e.g. 07700 900000`
    - Message: `Boiler not firing / annual service / new boiler quote — what’s happening?`

### 3) Map embed — Wiltshire coverage (required)

- **Layout description**: section header + embedded interactive county map (Leaflet) in a rounded frame, with a short line underneath listing towns. Wiltshire is highlighted clearly.
- **Exact copy**:

> **H2:** Coverage area  
> **Body:** Wiltshire and nearby — mainly around Royal Wootton Bassett, Swindon and the surrounding towns.

- **Map embed (Leaflet + `uk-counties-regional.js`, with Wiltshire highlighted exactly)**:

**HTML (in `contact.html`)**

```html
<div class="map-frame">
  <div id="map-uk" class="uk-counties-map" aria-label="UK counties map showing Wiltshire highlighted"></div>
</div>

<!-- Leaflet 1.9.x -->
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- NeoBookworm shared toolkit (vendored into this site folder) -->
<script src="js/uk-counties-leaflet.js"></script>
<script src="js/uk-counties-regional.js"></script>
<script>
  // Use the regional wrapper, but override its defaults so ONLY Wiltshire is highlighted.
  initNeoUkRegionalCountiesMap('map-uk', {
    highlighted: ['Wiltshire'],
    fitHighlightedBounds: true,
    fitBoundsMaxZoom: 9,
    scrollWheelZoom: false
  });
</script>
```

- **Component notes**:
  - Add a small overlay label in the top-left of `.map-frame`: “Wiltshire coverage”.
  - CSS requirements:
    - `.map-frame` has `border-radius: 14px; overflow: hidden; position: relative;`
    - `.uk-counties-map` has fixed height: `420px` desktop, `320px` mobile
  - If the GeoJSON endpoint is unreachable, the script renders a friendly fallback message automatically.
  - **Brand colour note (important):** the vendored `js/uk-counties-leaflet.js` currently uses hardcoded blue highlight colours (`#3b82f6`). For this site, update the *vendored copy inside this site folder* so:
    - `highlightStyle.color` → `#B86B3D`
    - `highlightStyle.fillColor` → `#B86B3D`
    - `defaultStyle.color` → `#2F3F4E`
    - `defaultStyle.fillColor` → `#1E2A36`
    - Keep opacities subtle (0.20–0.35) to match the warm craft palette.
  - Do **not** edit the canonical `shared/js/` file as part of a site build; edit only the copied versions under `sites/lee-morgan-heating-and-plumbing-ltd/js/`.

### 4) Service area list (required)

- **Layout description**: 2-column list (desktop) / 1-column (mobile).
- **Exact copy**:

> **Areas covered:**  
> - Royal Wootton Bassett  
> - Swindon  
> - Chippenham  
> - Calne  
> - Marlborough  
> - Devizes  
> - Vale of White Horse villages

### 5) Contact closing CTA

- **Layout description**: dark panel with one primary action.
- **Exact copy**:

> **H2:** Call and I’ll tell you the next step  
> **Button:** Call 07739 583768

---

## 3. Navigation

- **Nav items and order**:
  1. Home
  2. About
  3. Services
  4. Gallery
  5. Contact

- **Mobile behaviour**: hamburger opens a **slide-in drawer** from the right (80vw max, full height). Drawer includes nav links stacked + a prominent call button.
- **Sticky or static**: **sticky** header (sticks under the demo banner; when banner dismissed, header sits at top). Add a small shadow on scroll.
- **Active state styling**:
  - Active link gets copper underline + slightly brighter text on navy
  - On mobile drawer, active link has a copper left border
- **CTA in nav**: yes — **“Call Lee”** button (secondary style on desktop; primary style in mobile drawer footer).
  - Link: `tel:+447739583768`

- **Active state application (must be deterministic)**:
  - Implement in `js/main.js` so the correct item highlights on every page without manual per-page HTML edits:
    - On `DOMContentLoaded`, read `window.location.pathname`
    - Match against each nav `<a href="...">`
    - Add class `.nav__link--active` to the matching link

---

## 4. Footer

Footer appears on every page.

- **Layout**: 3-column (desktop) / stacked (mobile).

- **Elements (exact)**:
  - **Column 1: Business**

> Lee Morgan Heating & Plumbing Ltd  
> Royal Wootton Bassett, Wiltshire  
> Gas engineer • Heating • Plumbing

  - **Column 2: Contact**

> Call: 07739 583768  
> Facebook: leemorgangasman  
> Service area: Wiltshire & nearby

  - **Column 3: Trust**
    - Accreditation badges (CSS badge library):
      - Gas Safe (with number placeholder displayed as provided below)
      - Fully Insured

> Gas Safe no. [GAS SAFE NO]

  - **Footer links** (inline list):

> Home • About • Services • Gallery • Contact

  - **NeoBookworm attribution line (required)**:

> Demo built by [NeoBookworm.uk](https://neobookworm.uk) — websites for UK trades.

  - **Copyright line**:

> © 2026 Lee Morgan Heating & Plumbing Ltd. All rights reserved.

  - **Privacy / cookie note**:

> Privacy: This demo site stores one preference cookie-equivalent in localStorage (banner dismissed). No tracking.

---

## 5. Mobile-first considerations

- **Sticky “Call Lee” button pinned to bottom (required)**:
  - Appears on screens ≤ 760px wide, fixed bottom, full-width with safe-area padding.

```css
.callbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12px 12px calc(12px + env(safe-area-inset-bottom));
  background: rgba(246, 241, 231, 0.92);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(47, 63, 78, 0.2);
  z-index: 50;
}
.callbar a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 12px;
  background: #B86B3D;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}
@media (min-width: 761px) { .callbar { display: none; } }
```

- **Prevent callbar overlap (required)**:

```css
@media (max-width: 760px) {
  body {
    padding-bottom: calc(76px + env(safe-area-inset-bottom));
  }
}
```

- **Z-index stack (required; avoids banner/nav/drawer/callbar clashes)**:

```css
.site-banner { z-index: 100; }
.site-header { z-index: 90; }
.nav-drawer-overlay { z-index: 80; }
.nav-drawer { z-index: 85; }
.callbar { z-index: 70; }
```

- **Navigation collapse behaviour**:
  - Desktop shows full nav
  - Mobile shows hamburger + drawer; drawer closes on link click and on overlay click

- **Restacking decisions**:
  - All 2-column sections become single-column with **image first** in hero sections, **copy first** in content sections (About tools section is image first on mobile; coverage list is list first on mobile).
  - Testimonial row becomes horizontal scroll with snap on mobile.

- **Tap targets**:
  - All buttons, nav items, slider handle, close icons meet **44px minimum** height/width.

- **Font size adjustments at breakpoints**:
  - ≥ 960px: increase H1/H2 as defined in scale; body remains 1rem
  - ≤ 360px: reduce H1 to 2.0rem, keep line-height 1.05–1.15

---

## 6. Accreditation badges

Use badges from the allowed list only.

- **Badges to use**:
  - `Gas Safe`
  - `Fully Insured` (or generic “Fully Insured” — use the one that exists in the library)

- **Badge library source (in this repo)**:
  - Master snippet file: `accreditations/accreditation-badges.html`
  - **Rule (site-specific override for this demo)**:
    - **Gas Safe**: use **official Gas Safe artwork** (real engineer, real registration number).
    - **Everything else**: use the NeoBookworm CSS badge snippets (do not use other real trademarked logos).

- **Gas Safe official artwork (implementation spec)**:
  - Asset: add an official Gas Safe logo file provided by Gas Safe / member portal (preferred formats in order: SVG, then PNG).
  - Filenames (choose one and use consistently):
    - `images/badges/gas-safe.svg` (preferred)
    - `images/badges/gas-safe.png` (fallback)
  - Where it appears:
    - Home trust strip (prominent)
    - Services hero trust chips (prominent)
    - Footer (every page, minimum)
  - Display rules:
    - Never stretch; preserve aspect ratio.
    - Target height: 28–34px in the Home trust strip; 24–28px in the footer.
    - Always pair the logo with text: `Gas Safe no. [GAS SAFE NO]`.
  - Accessibility:
    - If used as an `<img>`, alt text: `Gas Safe Register` (keep the reg number in adjacent text, not in the alt).
    - If the official artwork is SVG inline, ensure it has `role="img"` and an accessible name.
  - Fallback:
    - If the official asset is unavailable in the demo build, temporarily use the CSS badge snippet below (clearly marked as fallback only).

- **How to implement (developer steps)**:
  - **Fully Insured**:
    - Copy the **“BADGE CSS”** block from `accreditations/accreditation-badges.html` into `css/badges.css` (include the `.nb-insured` rules at minimum).
    - Copy the exact HTML snippet below into the required sections.
    - For dark navy backgrounds (header/footer), add the `dk` class.
  - **Gas Safe**:
    - Add the official Gas Safe artwork file under `images/badges/` and use it via `<img>` in the required placements.
    - Do not recreate the mark in CSS for the live demo build.

- **Gas Safe CSS badge HTML (fallback only; use only if official artwork is missing)**:

```html
<!-- Light background -->
<div class="nb-badge nb-gassafe">
  <div class="nb-mark">
    <svg width="18" height="22" viewBox="0 0 24 30" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 28C7 28 3 24 3 18.5C3 14 6 11 8 8C8 12 10 13 12 11C14 9 13 5 11 2C16 4 21 9 21 16C21 22.5 17 28 12 28Z" fill="white" opacity="0.9"/>
      <path d="M12 24C10 24 8.5 22.5 8.5 20.5C8.5 18.5 10 17 11 15.5C11 17 11.8 17.5 12.5 16.5C13.2 15.5 13 14 12 13C14.5 14 16.5 16.5 16.5 19.5C16.5 22 14.5 24 12 24Z" fill="#f5a623"/>
    </svg>
  </div>
  <div class="nb-text">
    <div class="nb-top">GAS SAFE</div>
    <div class="nb-bot">REGISTER<br>Reg. No. [GAS SAFE NO]</div>
  </div>
</div>

<!-- Dark background -->
<div class="nb-badge nb-gassafe dk">
  <div class="nb-mark">
    <svg width="18" height="22" viewBox="0 0 24 30" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 28C7 28 3 24 3 18.5C3 14 6 11 8 8C8 12 10 13 12 11C14 9 13 5 11 2C16 4 21 9 21 16C21 22.5 17 28 12 28Z" fill="white" opacity="0.9"/>
      <path d="M12 24C10 24 8.5 22.5 8.5 20.5C8.5 18.5 10 17 11 15.5C11 17 11.8 17.5 12.5 16.5C13.2 15.5 13 14 12 13C14.5 14 16.5 16.5 16.5 19.5C16.5 22 14.5 24 12 24Z" fill="#f5a623"/>
    </svg>
  </div>
  <div class="nb-text">
    <div class="nb-top">GAS SAFE</div>
    <div class="nb-bot">REGISTER · Reg. No. [GAS SAFE NO]</div>
  </div>
</div>
```

- **Fully insured badge HTML (light + dark)**:

```html
<!-- Light background -->
<div class="nb-insured">
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" stroke="#5f5e5a" stroke-width="1.5" fill="none"/>
    <path d="M9 12L11 14L15 10" stroke="#5f5e5a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <div>
    <div class="nb-top">Fully Insured</div>
    <div class="nb-bot">Public liability cover<br>up to £5 million</div>
  </div>
</div>

<!-- Dark background -->
<div class="nb-insured dk">
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" stroke="#a0b4cc" stroke-width="1.5" fill="none"/>
    <path d="M9 12L11 14L15 10" stroke="#a0b4cc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <div>
    <div class="nb-top">Fully Insured</div>
    <div class="nb-bot">Public liability £5m</div>
  </div>
</div>
```

- **Placement rules**:
  - **Gas Safe**:
    - Every page: footer “Trust” column (minimum)
    - Home: Trust strip (prominent)
    - Services: hero trust chips + footer
  - **Fully Insured**:
    - Every page: footer
    - Home: Trust strip

---

## 7. SEO foundations

### Page titles, meta descriptions, H1s

- **Home**
  - `<title>`: Lee Morgan Gas Engineer | Royal Wootton Bassett
  - Meta description: Gas engineer in Royal Wootton Bassett & Swindon. 18 years in the trade, self-employed since 2021. Servicing, repairs, installs, CP12.
  - H1: Gas engineer in Royal Wootton Bassett & Swindon

- **About**
  - `<title>`: About Lee Morgan Heating & Plumbing Ltd
  - Meta description: Lee Morgan — 18 years in gas and plumbing. Self-employed since 2021 after redundancy. Local, straight-talking, tidy work.
  - H1: The story behind the name

- **Services**
  - `<title>`: Gas & Boiler Services in Wiltshire | Lee Morgan
  - Meta description: Boiler installs, servicing, repairs, central heating, plumbing repairs, smart controls, power flushing and CP12 certificates across Wiltshire.
  - H1: Gas, heating & plumbing services in Wiltshire

- **Gallery**
  - `<title>`: Recent Boiler & Plumbing Work | Lee Morgan
  - Meta description: A look at recent boiler installs, repairs and heating work. Neat finishes, tested properly, local to Wiltshire.
  - H1: Recent work

- **Contact**
  - `<title>`: Contact Gas Engineer | Royal Wootton Bassett, Wiltshire
  - Meta description: Call Lee on 07739 583768. Gas Safe registered engineer covering Royal Wootton Bassett, Swindon, Chippenham and nearby.
  - H1: Contact a gas engineer in Royal Wootton Bassett

### Structured data recommendation (Home) — LocalBusiness JSON-LD

Include on `index.html` only.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lee Morgan Heating & Plumbing Ltd",
  "url": "https://leemorgangasman.co.uk",
  "telephone": "+44 7739 583768",
  "areaServed": [
    "Royal Wootton Bassett",
    "Swindon",
    "Chippenham",
    "Calne",
    "Marlborough",
    "Devizes",
    "Wiltshire"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Royal Wootton Bassett",
    "addressRegion": "Wiltshire",
    "addressCountry": "GB",
    "streetAddress": "[ADDRESS IF PROVIDED]",
    "postalCode": "[POSTCODE]"
  },
  "description": "Gas engineer covering Royal Wootton Bassett, Swindon and surrounding Wiltshire towns. 18 years in the trade. Self-employed since 2021. Boiler installs, servicing, repairs, CP12 and plumbing repairs.",
  "sameAs": [
    "https://facebook.com/leemorgangasman"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Gas Safe Registration",
      "identifier": "[GAS SAFE NO]"
    }
  ]
}
</script>
```

---

## 8. Midjourney image prompts

**Constraints for all prompts**: no faces, no visible brand logos, UK domestic settings, warm craft mood, slate navy + parchment + copper palette, realistic photography, clean tidy installs.

### Home

- **Home hero (16:9)**  
  “Realistic photo, UK domestic utility room, modern wall-hung combi boiler on clean wall, gas engineer in clean navy workwear kneeling beside boiler, face out of frame (cropped at chin), tidy copper pipework, soft morning natural light, shallow depth of field, warm parchment whites, slate navy shadows, subtle copper accents, calm confident mood, 35mm lens, editorial trade photography --ar 16:9”

- **Alpha warranty callout image (4:3)**  
  “Realistic photo, close framed modern boiler installation scene, immaculate copper pipework and valves, small tool bag on floor, warm workshop lighting, slate navy shadows, parchment wall tone, no branding, cinematic but believable, crisp detail, no people --ar 4:3”

- **Coverage graphic (16:9)**  
  “Minimal map-style illustration, simplified Wiltshire county silhouette highlighted with copper outline, parchment background, slate navy labels for Swindon, Chippenham, Calne, Marlborough, Devizes, Royal Wootton Bassett, clean vector-meets-print texture, warm craft feel, no real map branding --ar 16:9”

### About

- **Portrait (3:4)**  
  “Realistic photo, gas engineer in clean navy workwear standing next to a neatly installed modern boiler, arms folded, face not visible (cropped above mouth), warm indoor light, shallow depth of field, copper tools on nearby shelf, slate navy shadows, confident grounded mood, UK domestic setting --ar 3:4”

- **Tools / flue gas analyser (4:3)**  
  “Realistic photo close-up, gloved hands holding a flue gas analyser beside a boiler with inspection access, neat copper pipework in foreground, warm workshop lighting, shallow depth of field, slate navy and copper colour grade, no face, high detail --ar 4:3”

### Services

- **Featured Alpha block image (4:3)**  
  “Realistic photo, premium tidy boiler install detail, copper pipework aligned and clipped, neutral parchment wall, slate navy shadows, warm craft lighting, no labels/logos, no people, crisp engineering detail --ar 4:3”

### Gallery (8 pairs total; Pair 1 uses two separate images for slider)

- **Pair 1 BEFORE (4:3)**  
  “Realistic photo, older wall-hung boiler installation in a small UK kitchen/utility space, slightly dated pipework, safe but messy look, neutral lighting, no branding visible, no people --ar 4:3”

- **Pair 1 AFTER (4:3)**  
  “Realistic photo, same space after upgrade, modern boiler installed neatly, copper pipework aligned and tidy, clean finish, warm craft lighting, slate navy shadows, no branding visible, no people --ar 4:3”

- **Pair 2 diptych (4:3)**  
  “Realistic photo diptych split down the middle labelled Before/After, leaking pipe under sink before vs repaired pipework after, tidy copper fix, UK domestic kitchen cabinet, warm craft lighting, no faces, no logos --ar 4:3”

- **Pair 3 diptych (4:3)**  
  “Realistic photo diptych Before/After, old radiator and valve in living room before vs new modern radiator valves and cleaner finish after, warm home interior, no people, slate navy + parchment + copper grade --ar 4:3”

- **Pair 4 diptych (4:3)**  
  “Realistic photo diptych Before/After, basic thermostat area before vs smart thermostat installed neatly after, UK hallway wall, warm indoor light, no brand logos, no people --ar 4:3”

- **Pair 5 diptych (4:3)**  
  “Realistic photo diptych Before/After, radiator heating uneven before (cold spots implied with subtle visual) vs after power flush (clean valve area, tidy pipework, consistent warmth vibe), UK home, no people, warm craft mood --ar 4:3”

- **Pair 6 diptych (4:3)**  
  “Realistic photo diptych Before/After, boiler service scene before (tools laid out) vs after (completed checklist and tidy area), clipboard visible but text unreadable, no faces, warm craft lighting, slate navy shadows --ar 4:3”

- **Pair 7 diptych (4:3)**  
  “Realistic photo diptych Before/After, gas fire in living room before vs clean removed and capped gas point after with tidy finishing, UK home, no people, warm craft lighting --ar 4:3”

- **Pair 8 diptych (4:3)**  
  “Realistic photo diptych Before/After, old bathroom tap set before vs new chrome taps installed after, clean sink area, warm indoor lighting, no faces, no logos --ar 4:3”

### Contact

- **Contact page supporting image (optional, 16:9)**  
  “Realistic photo, close-up of a clean work van interior with organised tools, early morning light, warm craft colour grade, slate navy shadows, copper accents, no people, UK residential street out of focus --ar 16:9”

---

## 9. Implementation notes

### Shared `<head>` template (required on every page)

Every page must include: charset, viewport, title, meta description, canonical, Open Graph, favicon, font loading, and the shared CSS. Use `lang="en-GB"`.

```html
<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <title>[PAGE TITLE]</title>
  <meta name="description" content="[PAGE META DESCRIPTION]" />

  <!-- Canonical -->
  <link rel="canonical" href="https://leemorgangasman.co.uk/[PAGE PATH]" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="[PAGE TITLE]" />
  <meta property="og:description" content="[PAGE META DESCRIPTION]" />
  <meta property="og:url" content="https://leemorgangasman.co.uk/[PAGE PATH]" />
  <meta property="og:image" content="https://leemorgangasman.co.uk/images/home-hero.jpg" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@600;700&family=Source+Sans+3:wght@400;600&display=swap"
  />

  <!-- Styles -->
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="stylesheet" href="css/badges.css" />
</head>
```

Notes:
- For `index.html` canonical should be `https://leemorgangasman.co.uk/` (no `index.html`).
- Only `contact.html` needs the Leaflet CSS/JS CDN includes.

- **Before/after slider**:
  - Use **lightweight JS** (no jQuery, no libraries) with Pointer Events.
  - Use CSS `clip-path: inset(0 calc(100% - var(--ba)) 0 0);` or a width-based clip wrapper for the “after” image.
  - Add keyboard controls for accessibility.
  - Include required CSS structure (so it works without guessing):

```css
.ba-slider {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-soft);
  background: #000;
  touch-action: pan-y;
}
.ba-slider img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.ba-slider .after {
  clip-path: inset(0 0 0 var(--ba, 55%));
}
.ba-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--ba, 55%);
  transform: translateX(-50%);
  width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: col-resize;
  z-index: 2;
}
.ba-handle-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255,255,255,0.9);
}
.ba-handle-knob {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: var(--color-accent);
  border: 2px solid rgba(255,255,255,0.95);
  box-shadow: 0 8px 18px rgba(0,0,0,0.25);
}
```

  - JS should set `--ba` as a percentage string (e.g. `slider.style.setProperty('--ba', pct + '%')`).

- **Contact form**:
  - Use **Netlify Forms** (static HTML only).
  - Add honeypot field to reduce spam.
  - Add client-side success message based on `?sent=1`.

- **Wiltshire highlight map (recommended over Google Maps)**:
  - Use the shared NeoBookworm toolkit: `uk-counties-leaflet.js` + `uk-counties-regional.js`.
  - Vendor/copy both files into `sites/lee-morgan-heating-and-plumbing-ltd/js/` so Netlify deploy is self-contained.
  - Load Leaflet 1.9.x from unpkg (CSS + JS).
  - Initialise with `initNeoUkRegionalCountiesMap('map-uk', { highlighted: ['Wiltshire'], fitHighlightedBounds: true })` so **Wiltshire is highlighted exactly** and the map frames tightly to it.

- **Demo banner**:
  - Persist dismissal in localStorage and apply on all pages.
  - Ensure banner height is accounted for in sticky header offset.
  - Implementation approach:
    - Banner is `position: fixed; top: 0`
    - Header is `position: sticky` and uses `top: var(--banner-h)`
    - On load, measure banner height and set `document.documentElement.style.setProperty('--banner-h', banner.offsetHeight + 'px')`
    - When dismissed, set body class `banner-dismissed` and set `--banner-h: 0px`

- **Font loading strategy**:
  - `preconnect` to Google Fonts domains
  - Load via `<link>` (not @import)
  - Use `display=swap`

- **No polyfills required**:
  - Pointer Events supported in modern browsers; keep a simple fallback to mouse/touch if desired (optional).

---

## 10. File and folder structure

Netlify deploy folder (self-contained):

```
lee-morgan-heating-and-plumbing-ltd/
  index.html
  about.html
  services.html
  gallery.html
  contact.html
  favicon.svg
  css/
    styles.css
    badges.css
  js/
    main.js
    uk-counties-leaflet.js   ← copy from `shared/js/`
    uk-counties-regional.js  ← copy from `shared/js/`
  images/
    badges/
      gas-safe.svg            ← official Gas Safe artwork (preferred)
      gas-safe.png            ← optional fallback if SVG unavailable
    home-hero.jpg
    home-alpha-warranty.jpg
    home-coverage-map.jpg
    about-portrait.jpg
    about-tools-analyser.jpg
    services-alpha-feature.jpg
    gallery-01-before.jpg
    gallery-01-after.jpg
    gallery-02-diptych.jpg
    gallery-03-diptych.jpg
    gallery-04-diptych.jpg
    gallery-05-diptych.jpg
    gallery-06-diptych.jpg
    gallery-07-diptych.jpg
    gallery-08-diptych.jpg
    contact-van-tools.jpg
  netlify.toml
```

### Image build constraints (required; prevents layout shift + keeps performance sane)

Target sizes and usage:

| File | Aspect | Suggested px size | Max size | Notes |
|---|---:|---:|---:|---|
| `images/home-hero.jpg` | 16:9 | 1200×675 | 400KB | Use as `og:image` |
| `images/home-alpha-warranty.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/home-coverage-map.jpg` | 16:9 | 1200×675 | 150KB | Static illustration |
| `images/about-portrait.jpg` | 3:4 | 675×900 | 200KB | Lazy-load |
| `images/about-tools-analyser.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/services-alpha-feature.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/gallery-01-before.jpg` | 4:3 | 900×675 | 200KB | Slider “before” |
| `images/gallery-01-after.jpg` | 4:3 | 900×675 | 200KB | Slider “after” |
| `images/gallery-02-diptych.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/gallery-03-diptych.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/gallery-04-diptych.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/gallery-05-diptych.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/gallery-06-diptych.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/gallery-07-diptych.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/gallery-08-diptych.jpg` | 4:3 | 900×675 | 200KB | Lazy-load |
| `images/contact-van-tools.jpg` | 16:9 | 1200×675 | 300KB | Optional |

Implementation requirements:
- Every `<img>` must include `width` and `height` attributes matching the image’s pixel size.
- Use `loading="lazy"` on non-hero images.

### `netlify.toml` rules

- Keep it minimal; no redirects needed. Add basic security headers:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=()"
```

---

**Commit message:** `lee-morgan-heating: spec complete — ready to build`

