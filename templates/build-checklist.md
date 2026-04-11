# Build Checklist — `[Business Name]`

Per-site tickable progress list. Copy this template into the site folder at kickoff and tick items as you complete them. Referenced by `PROCESS.md`.

**How to use:** replace `[ ]` with `[x]` as you complete each item. Commit updates frequently.

---

## Phase 1 — Site brief

- [ ] `site-brief.md` copied into site folder
- [ ] Section 1 (The business) filled in
- [ ] Section 2 (The story) filled in
- [ ] Section 3 (Services) filled in
- [ ] Section 4 (Accreditations) filled in
- [ ] Section 5 (Tone of voice) filled in — **most important section**
- [ ] Section 6 (Visual direction) filled in
- [ ] Section 7 (Contact details) filled in
- [ ] Section 8 (Images and gallery) filled in
- [ ] Section 9 (Anything else) filled in
- [ ] Brief committed: *`<site-name>`: brief complete*

## Phase 2 — Site spec

- [ ] Phase 2 prompt run in Cursor with brief + template in context
- [ ] Aesthetic direction reviewed — bold enough? distinct from other demos?
- [ ] Colour palette reviewed
- [ ] Font pairing reviewed — not generic?
- [ ] All page copy read through, tone matches brief
- [ ] Image manifest complete with Midjourney prompts
- [ ] Accreditations list matches brief
- [ ] Spec saved as `site-spec.md`
- [ ] Spec committed: *`<site-name>`: spec generated*

## Phase 3 — Images

- [ ] `images/` folder created in site folder
- [ ] Hero image generated and saved
- [ ] About/portrait image(s) generated and saved
- [ ] All service card images generated and saved
- [ ] All gallery images generated and saved (8–12 total)
- [ ] All images optimised (under 200KB gallery, under 400KB hero)
- [ ] All images named descriptively (no `IMG_XXXX.jpg`)
- [ ] `images/` contents verified (terminal `dir` / `ls` on absolute `sites/<site-name>/images`, or read one file by path). Do not treat an empty workspace search as proof the folder is empty.
- [ ] Images committed: *`<site-name>`: images added*

## Phase 4 — Build

### File structure
- [ ] `index.html` created
- [ ] `services.html` created
- [ ] `about.html` created
- [ ] `contact.html` created
- [ ] `gallery.html` created
- [ ] `css/styles.css` created
- [ ] `js/main.js` created (if needed)
- [ ] `favicon.svg` added at site root (simple wordmark/monogram, brand colours); optional `favicon.ico` for older clients

### Head setup (every page)
- [ ] `<title>` set per spec
- [ ] `<meta name="description">` set
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Favicon linked: `<link rel="icon" href="favicon.svg" type="image/svg+xml" />` on every page (and optional `<link rel="icon" href="favicon.ico" />` if `.ico` is shipped)
- [ ] Favicon file exists and path matches `<link rel="icon">` on every page
- [ ] Canonical URL placeholder
- [ ] Google Fonts preconnected and loaded
- [ ] Viewport meta tag present

### CSS
- [ ] All colours in `:root` as CSS variables per spec
- [ ] Typography setup with display and body fonts
- [ ] Mobile-first responsive styles
- [ ] Breakpoints for tablet and desktop
- [ ] Focus states visible on all interactive elements
- [ ] WCAG AA contrast confirmed

### Content
- [ ] Every `<img src="images/...">` path matches a file that exists (re-list `images/` if workspace search was inconclusive)
- [ ] Home page fully built and matches spec
- [ ] Services page fully built and matches spec
- [ ] About page fully built and matches spec
- [ ] Contact page fully built (form present, labelled, accessible)
- [ ] Gallery page fully built with responsive grid
- [ ] Gallery lightbox interaction working

### Shared elements
- [ ] Header/nav consistent across all pages
- [ ] Footer consistent across all pages
- [ ] Mobile menu working
- [ ] CSS accreditation badges added (from NeoBookworm badge library)
- [ ] All images have meaningful alt text

### Maps (only if spec includes a map — see `shared/README.md`)
- [ ] Required scripts **copied** from `shared/js/` into this site’s `js/` (for Netlify single-folder deploy)
- [ ] **Leaflet** county map: Leaflet CSS/JS from CDN; `?v=` on vendored scripts if updated
- [ ] **Google Maps:** `maps-config.js` present locally for preview (from **`templates/maps-config.example.js`**); **not** committed; `.gitignore` covers it; fallback UI if key missing
- [ ] Map tested over **http://** local server (not `file://`); no console errors

### Commits
- [ ] At least one commit per page completed
- [ ] Final Phase 4 commit: *`<site-name>`: build complete*

## Phase 5 — Local review

- [ ] Site opened in local preview (Live Server or `python -m http.server`)
- [ ] Every page visited
- [ ] Every nav link clicked
- [ ] Every image loads correctly
- [ ] All copy read out loud, anything robotic rewritten
- [ ] Resized from 320px to 1920px — nothing breaks
- [ ] Mobile menu tested
- [ ] Gallery lightbox tested
- [ ] Contact form tested (tab through fields, submit button works visually)
- [ ] Site "feels like" the business in the brief — honest gut check
- [ ] Review fixes committed

## Phase 6 — QA and launch prep

- [ ] `qa-launch-checklist.md` copied into site folder
- [ ] Every QA item worked through and ticked
- [ ] Any N/A items annotated with a reason
- [ ] All fixes applied and re-tested
- [ ] QA commit: *`<site-name>`: QA complete*

## Phase 7 — Netlify deploy

- [ ] Logged in to Netlify
- [ ] Site folder drag-dropped to "Deploy manually"
- [ ] Auto-generated site name changed to `<site-name>-demo`
- [ ] Live URL opened and every page re-tested live
- [ ] Live URL recorded in `TRACKER.md`
- [ ] Deploy commit: *`<site-name>`: deployed to `<url>`*

## Phase 8 — Link from NeoBookworm.uk

- [ ] Switched to NeoBookworm.uk repo
- [ ] `examples.html` updated with card for this demo
- [ ] Card includes business name, trade, description, link
- [ ] Thumbnail screenshot added (optional)
- [ ] Committed and pushed — Vercel auto-deploys
- [ ] Verified live on neobookworm.uk/examples
- [ ] Link tested from NeoBookworm.uk to the demo

## Phase 9 — Close out

- [ ] `TRACKER.md` updated with completion status and live URL
- [ ] `LEARNINGS.md` entry added (what went well, what didn't, what to promote)
- [ ] Any obvious LEARNINGS promoted straight into `PROCESS.md`
- [ ] Final commit: *`<site-name>`: closed out, tracker and learnings updated*

---

**Site complete.** Update the tracker, pick the next site, repeat.
