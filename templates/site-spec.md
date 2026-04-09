# Site Spec — `[Business Name]`

This document is generated in Phase 2 of `PROCESS.md` by Cursor, using the site brief as input. It locks in every content and design decision *before* any HTML is written, so you can review and tweak cheaply. It's also the exact artifact Agent 6 will eventually produce and consume internally when building real client sites.

**The structure below is what the Phase 2 prompt asks Cursor to produce. When generated, it should be fully filled in — no placeholder sections.**

---

## 1. Creative direction

**Aesthetic statement (one paragraph):**
*A confident description of the visual POV. What is this site trying to feel like, and why does that suit this business?*

**The differentiator:**
*The single memorable thing about this site — the element someone will remember after closing the tab.*

**What this site is deliberately not:**
*What generic trope it's pushing against.*

---

## 2. Design tokens

### Colour palette

```css
:root {
  --color-primary: #______;    /* description and use */
  --color-secondary: #______;  /* description and use */
  --color-accent: #______;     /* description and use */
  --color-text: #______;
  --color-text-muted: #______;
  --color-bg: #______;
  --color-bg-alt: #______;
  --color-border: #______;
}
```

*Notes on the palette: what inspired it, how it should feel, any usage rules (e.g. "accent only on CTAs and pull quotes, never on body text").*

### Typography

**Display font:** `[Font Name]` from Google Fonts — weights `[e.g. 700, 900]`
**Body font:** `[Font Name]` from Google Fonts — weights `[e.g. 400, 500]`

*Notes on the pairing: why these two, what mood they create, any usage rules.*

### Other tokens

```css
:root {
  --font-display: '[Font Name]', serif;
  --font-body: '[Font Name]', sans-serif;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --max-width: 1200px;
  --spacing-unit: 1rem;
}
```

---

## 3. File structure

```
sites/<site-name>/
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
│   ├── service-01-*.jpg
│   ├── gallery-01.jpg
│   └── ... (full list below)
├── favicon.ico
├── site-brief.md
├── site-spec.md
├── build-checklist.md
└── qa-launch-checklist.md
```

---

## 4. Page specifications

### 4.1 Home (`index.html`)

**Page title:**
**Meta description:**

**Section structure:**

1. **Header + navigation**
   - Logo / wordmark
   - Nav links: Home, Services, About, Gallery, Contact
   - CTA button: [text]

2. **Hero section**
   - Headline: *[exact copy]*
   - Subheadline: *[exact copy]*
   - CTA buttons: *[text and where they go]*
   - Hero image: *[filename from images folder]*

3. **[Next section name]**
   - *[full copy and structural notes]*

4. *(etc — typically 4–7 sections on a home page)*

5. **Footer**
   - Contact details
   - Accreditation badges
   - Copyright and credits

### 4.2 Services (`services.html`)

*Same structure as Home: title, meta, section list with full copy.*

### 4.3 About (`about.html`)

*Same structure.*

### 4.4 Contact (`contact.html`)

*Same structure. Contact form fields specified explicitly.*

### 4.5 Gallery (`gallery.html`)

*Same structure. Gallery layout described. Each image's position and caption noted.*

---

## 5. Copy bank

All unique microcopy gathered in one place for easy review:

- **Main CTA text:**
- **Secondary CTA text:**
- **Form submit button:**
- **Form success message:**
- **404 page message:**
- **Footer tagline:**

---

## 6. Image manifest

Complete list of every image needed for this site, with Midjourney prompts.

### Hero
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `hero.jpg` | Home page hero | 16:9 | *[full prompt]* |

### Portraits / people
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `about-portrait.jpg` | About page owner photo | 4:5 | *[full prompt]* |

### Services
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `service-01-[name].jpg` | [service] card image | 4:3 | *[full prompt]* |

### Gallery (8–12 images)
| Filename | Purpose | Aspect ratio | Midjourney prompt |
|---|---|---|---|
| `gallery-01.jpg` | [what it shows] | 4:3 | *[full prompt]* |

---

## 7. Accreditations

List of CSS badges to include from the NeoBookworm badge library, and where each should appear on the site.

- **Gas Safe** — footer of every page, services page sidebar
- **[etc]**

---

## 8. Interactive elements

Anything that needs JavaScript:

- **Mobile navigation menu:** hamburger toggle, full-screen overlay on open
- **Gallery lightbox:** click image to view full-size in overlay, arrow-key navigation
- **[etc]**

Every item here should be vanilla JS, no libraries.

---

## 9. Accessibility notes

Any accessibility considerations specific to this design:

- Colour contrast: confirm `--color-text` on `--color-bg` meets WCAG AA
- [etc]

---

## 10. Open questions

Anything the spec couldn't fully resolve from the brief and needs Nick's decision before build:

- *(none, or list them here)*

---

*Spec complete. Review, tweak if needed, commit as `<site-name>: spec generated`, and move to Phase 3 of PROCESS.md.*
