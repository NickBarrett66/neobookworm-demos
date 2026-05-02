# PROCESS.md — Demo Site Build Process

This is the master process for building a NeoBookworm demo trade website. Follow the phases in order. Each phase has a clear input, a clear output, and (where relevant) the exact prompt to paste into Cursor.

**Principle:** every manual step here should be something an agent could eventually execute. If you find yourself improvising, stop and ask whether the improvisation should be captured in this document — if yes, add it before you forget. If you find yourself fighting the process, add a LEARNINGS.md entry and we'll fix it.

**Each demo site should have its own distinct visual identity.** Don't converge on a single template look. Each trade and business deserves a bold aesthetic direction chosen for that specific site. The process is shared; the design language is not.

---

## Phase overview

| Phase | What happens | Output | Estimated time |
|---|---|---|---|
| 1 | Write the site brief | Filled-in `site-brief.md` | 10–15 min (Claude drafts, you review) |
| 2 | Generate the site spec | Filled-in `site-spec.md` | 15 min (mostly waiting on Claude) |
| 3 | Confirm image library | R2 library checked, gaps sourced if needed | 0–30 min (0 if trade type already exists) |
| 4 | Build the site | All HTML/CSS/JS pages | 2–4 hours |
| 5 | Local review | Visual and content review | 30 min |
| 6 | QA and launch prep | Filled `qa-launch-checklist.md` | 30 min |
| 7 | Deploy to Netlify | Live URL | 15 min |
| 7b | Live QA pass (post-deploy) | NeoBookworm Demo QA skill complete; register updated | 15–30 min |
| 8 | Link from NeoBookworm.uk | Live on Examples page | 10 min |
| 9 | Close out | TRACKER and LEARNINGS updated | 5 min |

Total per site: roughly 3–5 hours for a new trade type (including any image sourcing and **Phase 7b** live QA); 2–3 hours for a repeat trade type where the image library already exists.

---

## Phase 1 — Write the site brief

### Per-site folders (created as you go)

When you start a new demo, you create a folder named after it (e.g. `sites/hartley-plumbing/`). Inside each site folder you'll have:

- `site-brief.md` (filled in)
- `build-checklist.md` (in progress)
- `qa-launch-checklist.md` (in progress or complete)
- `images/` (if needed)


**Input:** a prospect name, Notion page ID, or Notion URL.

**Output:** a fully populated `site-brief.md`, reviewed and approved by you, saved into the site folder.

**Who does this:** Claude (using the `neobookworm-site-brief` skill), with you reviewing and approving the output.

**Steps:**

1. Open a Claude chat (claude.ai — use the NeoBookworm project so the skill is available)
2. Provide the prospect's Notion URL or page ID — this is the cheapest option (~1,000 tokens). If you don't have it, the business name alone works but costs more
   > **Tip:** Copy the Notion URL from the pipeline board before starting. It cuts token cost by ~95% compared to searching by name
3. Claude will research the prospect, fill in every section of the brief, and present it as a downloadable `site-brief.md`
4. Review the output carefully, paying particular attention to:
   - **Tone of voice** — most important section; push back if it feels generic
   - **Aesthetic and colour direction** — should feel distinct to this business
   - **Owner persona** — does it ring true based on what you know?
   - Any fields flagged `[generated — please verify]`
5. Request any changes before approving — Claude will revise in the same chat
6. Download the approved `site-brief.md` and save to `sites/<site-name>/site-brief.md` in the repo
7. Commit with message: *`<site-name>`: brief complete*

**What to watch for:**

- The skill will warn you with ⚠️ if the prospect's trade category has no images in the R2 library yet — sort Phase 3 before proceeding to the build if so
- Don't describe the website — describe the *business*. Site copy and layout decisions come in Phase 2
- The tone-of-voice section is the most important single field. It drives everything downstream
- Each demo should have a visually distinct identity — push back if the aesthetic direction feels like it could belong to any tradesperson

---

## Phase 2 — Generate the site spec

**Input:** filled-in `site-brief.md`.

**Output:** filled-in `site-spec.md` with full page copy, design tokens, image prompts, and file structure.

**Who does this:** Cursor chat (using Claude).

**Why this exists as a separate phase:** it locks all the content and design decisions in writing *before* any code is written. This means you can review and tweak freely without touching HTML, and it means the spec doc is a clean handover artifact — exactly what Agent 6 will eventually produce and consume internally.

**Steps:**

1. Open a new Cursor chat with `sites/<site-name>/site-brief.md` added to the context (@-mention it or drag it in)
2. Also add `templates/site-spec.md` to the context so Cursor knows the structure of the output
3. Paste the prompt below
4. Review the generated spec carefully. Tweak anything you don't love
5. Save the output as `sites/<site-name>/site-spec.md`
6. Commit: *`<site-name>`: spec generated*

**The prompt:**

```
I'm building a demo trade website for NeoBookworm.uk. Using the site brief
I've attached, generate a complete site spec following the structure of the
site-spec.md template.

Requirements:
- Commit to a bold, distinctive aesthetic direction that suits this specific
  business. Do not produce a generic tradesperson site. Pick a real design
  POV — editorial, brutalist, warm craft, industrial, refined, whatever fits
  — and execute it fully.
- The site has five pages: Home, Services, About, Contact, Gallery. Propose
  a section structure for each page.
- Write the actual copy, not placeholders. Every page should be real,
  readable content drawn from the brief.
- Propose a complete colour palette (primary, secondary, accent, neutrals,
  backgrounds) with hex codes and CSS variable names.
- Propose a font pairing (display + body) from Google Fonts. Do not pick
  generic choices (no Inter, no Roboto, no Arial). Be distinctive.
- Images are served from the NeoBookworm R2 library — do NOT generate
  Midjourney prompts or propose a gallery of bespoke image slots. Instead,
  reference the three trade-category images from the brief (hero, about,
  cta-bg) and any shared assets specified (van, tools, owner portrait,
  british-home-exterior). The Gallery page should be replaced with a
  Services card grid (icon + title + one-liner per service) — no photo
  gallery required.
- List any icons, illustrations, or decorative elements needed.
- If the business needs a **service area** or **coverage** visual, specify which
  map approach (if any): **UK county / unitary map (Leaflet + ONS)** from
  `shared/`, **regional preset** (default county list in `shared/js/uk-counties-regional.js`),
  **Google Maps** (radius circle + markers; key via gitignored `maps-config.js`, from **`templates/maps-config.example.js`**), or **none**.
  Say which page(s) it appears on and any copy/legend requirements.
- Note which CSS accreditation badges apply (from the NeoBookworm badge
  library) — Gas Safe, NICEIC, CHAS, Checkatrade, TrustMark, etc. Only use
  the CSS badge library, never real trademark logos.
- Specify the file structure you'll create in Phase 4. Include **favicon** assets
  explicitly: prefer **`favicon.svg`** at site root (simple wordmark or monogram,
  brand colours), optionally **`favicon.ico`** for older clients — list these in
  the tree so shipped files match the spec.

important: **Output the complete spec in markdown matching the template structure.**
Do not start writing HTML yet — this phase is spec only.
```

**What to watch for:**

- If Cursor produces generic copy ("Welcome to Hartley Plumbing, your trusted local plumber..."), reject it and ask for a rewrite with more personality. The brief's tone-of-voice section should be reflected in every sentence
- If the colour palette looks bland, ask for a bolder one with a specific reference (e.g. "more editorial, like a magazine")
- If the font pairing is generic, push back by name and ask for something more distinctive
- Confirm that the **SEO Outputs section (Section 5)** is fully populated: a unique keyword-targeted title tag and meta description for all five pages, matching og:title and og:description, and the LocalBusiness JSON-LD schema pre-filled from the brief. If any field is left as a placeholder, fix it before committing the spec

---

## Phase 3 — Confirm image library

**Input:** trade category slug from the site brief.

**Output:** confirmation that all three required images exist in R2 for this trade type, or gaps sourced and uploaded if not.

**Who does this:** you — but only if this is the first prospect of a trade type. For repeat trade types this phase takes about 30 seconds.

**Steps:**

1. Check `docs/r2-image-library-checklist.md` in this repo — find the trade category folder for this prospect
2. Confirm all three images are ticked off: `hero.webp`, `about.webp`, `cta-bg.webp`
3. **If all three exist:** you're done. Move to Phase 4
4. **If any are missing:** source and upload before building:
   - Source images from Midjourney, Pexels, or Unsplash (see image specs below)
   - Convert to WebP at ~85% quality using [squoosh.app](https://squoosh.app)
   - Upload to the R2 bucket at `neobookworm-client-images / demos / library / {slug} /` via the Cloudflare dashboard (drag and drop)
   - Tick off in `docs/r2-image-library-checklist.md` and commit
5. Commit (if you uploaded anything): *`library`: `{slug}` images added*

**Image specs:**
- `hero.webp` — 1920×1080px, person at work or strong finished result, wide landscape crop
- `about.webp` — 1200×800px, warmer/more personal feel, tradesperson or tools
- `cta-bg.webp` — 1920×1080px, works well with dark overlay and white text, texture or close-up detail

**Shared assets** (available to any site regardless of trade type):
- `shared/van.webp` — white transit van on a residential street
- `shared/tools.webp` — open van interior showing neat shelving and tools
- `shared/owner.webp` — tradesman in his forties, suitable for About section portrait
- `shared/british-home-exterior.webp` — exterior shot of a British home

**R2 base URL:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/`

**Midjourney tips (if generating new images):**
- Hero: `professional {trade} working in a modern British home, natural light, shallow depth of field, high quality photography, warm tones, no text --ar 16:9 --style raw`
- CTA background: `close up detail of {trade-related material or tools}, shallow depth of field, muted tones, no people, no text --ar 16:9 --style raw`
- Convert Midjourney PNG output to WebP via squoosh.app before uploading

**What to watch for:**
- The brief skill will warn you with ⚠️ if a trade type has no library folder yet — don't skip past it
- Never put prospect-specific images in the `library/` folder — those go under `demos/prospects/{slug}/` if ever needed
- Once uploaded, these images serve every future site of that trade type — quality matters
- **Agents / tooling:** do not treat an **empty workspace glob or file search** as proof that `images/` is empty. Dropbox sync, workspace roots, and indexing can hide files that are on disk. Before assuming no assets exist, confirm with a **terminal listing** on the absolute `sites/<site-name>/images` path, or **read one known file** (e.g. `hero.jpg`) by path. A human can `@`-mention a single image so the path is authoritative.

---

## Phase 4 — Build the site

**Input:** spec, images, brief.

**Output:** all HTML/CSS/JS files for the site in `sites/<site-name>/`.

**Who does this:** Cursor chat (using Claude), with you reviewing and iterating.

**Steps:**

1. Open a new Cursor chat with the site folder's `site-brief.md`, `site-spec.md`, and the `images/` folder in context. If you need to verify which files exist in `images/`, use a **terminal `dir` / `ls`** on the absolute path or **read a specific file** — do not rely on an empty glob/search alone (see Phase 3 “What to watch for”).
2. Paste the Phase 4 prompt below
3. Cursor will generate the file structure and all pages. Review each page as it's produced
4. Iterate on anything that doesn't match the spec
5. Tick items off `build-checklist.md` as you go
6. Commit frequently — at minimum, once per page completed

**The prompt:**

```
Using the site-brief.md, site-spec.md, and the images in the images/ folder,
build the complete demo website for this business. Follow the spec exactly
for copy, colours, typography, and structure.

Build rules:
- Multi-page static site: index.html (home), services.html, about.html,
  contact.html, gallery.html
- One stylesheet: css/styles.css
- One JS file if needed: js/main.js (keep vanilla, no frameworks)
- Shared header and footer across all pages — copy the HTML into each page
  (no server-side includes, these are static files)
- All colour values as CSS custom properties in :root, named per the spec
- Google Fonts loaded in <head> with preconnect
- Fully responsive: mobile-first CSS, breakpoints at sensible widths
- Semantic HTML: proper heading hierarchy, landmark elements, alt text on
  every image
- **Favicon in the first HTML pass** (not a later polish item): add a real file
  at site root — **`favicon.svg`** (simple wordmark/monogram, brand colours),
  plus optional **`favicon.ico`** for older clients. On every page:
  `<link rel="icon" href="favicon.svg" type="image/svg+xml" />` (and a second
  `<link rel="icon" href="favicon.ico" />` only if you ship `.ico`). Do not link
  to a favicon path that does not exist.
- Every page has: <title>, <meta name="description">, Open Graph tags,
  canonical URL placeholder
- Accreditation badges from the CSS accreditation badge library only (never
  real trademark logos). If the spec requires a badge we don't have a CSS
  version of, add a note and skip it
- Contact page should have a working-looking form (HTML only is fine, it
  doesn't need to submit anywhere for a demo) with clear labels and
  accessible inputs
- Gallery page should use a responsive grid with lightbox-style click-to-
  enlarge (plain CSS/JS, no libraries)
- Commit to the aesthetic direction in the spec. Do not water it down. If
  the spec says editorial and serif-heavy, be editorial and serif-heavy. If
  it says industrial and brutalist, go industrial and brutalist.
- When scoping or building a **demo** trade site, bake in from the first 
  HTML pass: (1) short “demo site” notes near call and form actions, 
  (2) a single JS pattern for blocked `tel:` / form submit with matching 
  copy, (3) checklist every `tel:` and submit button before calling the 
  build done.
- **Maps (only if the spec asks for them):** follow `shared/README.md`.
  **Copy** the required files from `shared/js/` into this site's `js/` folder
  so Netlify single-folder deploy works; load Leaflet or Google Maps from CDN
  as documented. Never commit API keys — copy **`templates/maps-config.example.js`**
  to **`js/maps-config.js`** (gitignored) for Google Maps. For Leaflet county maps,
  bump `?v=` on script URLs when updating vendored files.

Build page-by-page, starting with index.html. Show me each page's HTML and
the styles.css additions before moving to the next page so I can review.
```

**What to watch for:**

- Cursor sometimes drifts towards generic designs. If you feel the site converging on "another template," push back hard and point at the spec
- Check responsiveness in the Cursor preview as you go — don't leave it all to Phase 5
- Ensure the **phone number from the brief's SEO Inputs section** appears in the header and footer of every page. NAP consistency matters — the number must be identical everywhere
- Include **`sitemap.xml`** and **`robots.txt`** in the site root. `robots.txt` must include a `Sitemap:` declaration pointing at the sitemap URL. Both are required for the SEO Gate in the QA checklist
- **Favicon:** confirm the asset file exists at the path referenced in every
  `<link rel="icon">` before marking the build done (tick the matching line in
  `build-checklist.md`)
- **`images/`:** before concluding assets are missing or wiring wrong paths,
  confirm the folder the same way as Phase 3 (terminal listing or read a file by
  path). An empty IDE/agent glob is not proof the folder is empty.
- If Cursor forgets the CSS badge library, paste in the relevant snippet from the NeoBookworm repo's `accreditations/accreditation-badges.html`
- **Maps:** if the site includes a Leaflet or Google map, open the site over **HTTP**
  (`python -m http.server` or similar from the site folder) and confirm the map
  loads, frames correctly, and has no console errors. See `shared/README.md` and
  `shared/demos/` for reference behaviour.

---

## Phase 5 — Local review

**Input:** built site.

**Output:** a site you're happy with before QA.

**Steps:**

1. Open the built site in a local preview. Easy options:
   - **VS Code Live Server extension** — right-click `index.html` → Open with Live Server
   - **Cursor's built-in preview** if available
   - **Python one-liner in the terminal:** `cd sites/<site-name> && python -m http.server 8000` then open `http://localhost:8000`
2. Click through every page. Every link. Every image
3. Resize the browser from 320px wide up to 1920px. Check nothing breaks
4. Read every word of copy out loud. If a sentence sounds robotic, ask Cursor to rewrite it
5. Check the brief again. Does this site feel like that business?
6. Fix anything that bothers you. Don't let anything slide — this is the easiest phase to fix things in
7. Commit fixes as you make them

---

## Phase 6 — QA and launch prep

**Input:** a site you're happy with.

**Output:** ticked `qa-launch-checklist.md`, ready to deploy.

**Steps:**

1. Open `sites/<site-name>/qa-launch-checklist.md`
2. Work through every item in order. Tick each one as you confirm it
3. Do not skip any items. If something doesn't apply, write "N/A" with a reason
4. If you find a problem, fix it and re-tick. The checklist should end 100% green
5. Commit: *`<site-name>`: QA complete*

This phase is the **pre-deploy** gate (SEO, accessibility, forms, etc.). **After** the site is live on Netlify, run **Phase 7b** using `.claude/neobookworm-demo-qa.md` — Lighthouse on the **live URL**, mobile screenshots, broken assets, GA4 where applicable, and the structured QA report. Do not skip 7b for prospect outreach builds.

---

## Phase 7 — Deploy to Netlify

**Input:** QA-passed site.

**Output:** live Netlify URL.

**Steps:**

1. Log in to [app.netlify.com](https://app.netlify.com)
2. Click **Add new site → Deploy manually**
3. Drag the `sites/<site-name>/` folder into the drop zone
4. Netlify uploads and deploys. You'll get a URL like `https://random-name-123.netlify.app`
5. Go to **Site settings → Change site name** → rename to `<site-name>-demo` (e.g. `hartley-plumbing-demo`)
6. Your URL is now `https://<site-name>-demo.netlify.app`
7. Open the URL and click through every page again. Live-site bugs sometimes surface that local preview missed
8. Record the URL in `TRACKER.md`
9. Commit: *`<site-name>`: deployed to `<url>`*

**Why manual drag-drop instead of Git integration:** because each demo is a separate Netlify site and Git auto-deploy from a monorepo requires per-site build config. Drag-drop is simpler and the sites don't change often after launch. When Agent 6 takes over, it'll use the Netlify API, not Git integration.

**Optional subdomain polish (do later, in batch):** if you want `hartley.neobookworm.uk` instead of `hartley-plumbing-demo.netlify.app`, you add a custom domain in Netlify and a CNAME record in your DNS. Worth doing once all eight sites are live, not per-site.

---

## Phase 7b — Live QA pass (NeoBookworm Demo QA)

**Input:** live Netlify URL for `sites/<site-name>/` (recorded in `TRACKER.md`).

**Output:** QA skill run complete; any fixes committed and redeployed; prospect/site noted in the register inside `.claude/neobookworm-demo-qa.md`.

**Canonical instructions:** `.claude/neobookworm-demo-qa.md` (NeoBookworm Demo QA — Lighthouse on the **live URL**, mobile layout screenshots, content and broken-asset checks, GA4 snippet standard for demos/prospects, mandatory report format).

**Steps:**

1. Open a Cursor chat and attach `.claude/neobookworm-demo-qa.md` plus the site folder (or give the folder slug and paste the live URL).
2. Follow the skill literally — especially **live Lighthouse (mobile)** rather than `file://`, and the final report block.
3. If the skill finds issues that need HTML/CSS/JS changes, fix them, commit, and **redeploy** (Phase 7) until the live URL matches what you want recorded.
4. Update the **Prospect register** table at the bottom of `neobookworm-demo-qa.md` with QA status and notes (live scores, blockers, etc.).
5. Respect site-specific freezes called out in that register (e.g. do not modify a prospect site while outreach is pending unless Nick says otherwise).

Do **Phase 7b before** linking a new demo from NeoBookworm.uk (Phase 8), so the Examples page only gets URLs you have already validated live.

---

## Phase 8 — Link from NeoBookworm.uk

**Input:** live demo URL **after Phase 7b** (live QA pass complete).

**Output:** the demo is linked from the Examples page on NeoBookworm.uk.

**Steps:**

1. Switch to the NeoBookworm.uk repo (completely separate repo — this is the point)
2. Open `examples.html`
3. Add a card for the new demo: business name, trade, one-sentence description, link to the live URL, optionally a thumbnail screenshot
4. Commit and push — Vercel auto-deploys
5. Verify the Examples page on neobookworm.uk shows the new demo and the link works

**Reminder:** the two repos never share code. The only thing crossing the boundary is the URL you paste into the `href` attribute.

---

## Phase 9 — Close out

**Input:** live demo, Phase 7b complete, linked from NeoBookworm.uk.

**Output:** a tidy state, ready for the next demo.

**Steps:**

1. Open `TRACKER.md`. Mark this site as complete. Fill in: completion date, live URL, any notable decisions
2. Open `LEARNINGS.md`. Add a dated entry with:
   - What went well
   - What tripped you up
   - What should change in PROCESS.md as a result
3. If any LEARNINGS entry is obviously worth promoting, update PROCESS.md directly while it's fresh
4. Commit: *`<site-name>`: closed out, tracker and learnings updated*

---

## Improving the process over time

Every few demos, open `LEARNINGS.md` and read it all the way through. Look for patterns — the same mistake twice is a signal the process is wrong, not that you are. Promote repeated fixes into PROCESS.md.

When you've built all eight demos, PROCESS.md should be tight enough that it could be handed to Agent 6 as an executable spec. That's the finish line for this phase of the project.

---

## Image library — a note for the future

The R2 image library at `neobookworm-client-images / demos / library /` is the single source of truth for all demo site images. As more trade categories are added and the library grows, Agent 6 will eventually reference it directly when building sites autonomously — no per-prospect image sourcing needed.

When that time comes we'll need to:
- Pass the trade category slug from the Notion prospect record into Agent 6
- Have Agent 6 resolve image URLs from the library automatically (same pattern as the brief skill does today)
- Add fallback logic so Agent 6 falls back to `shared/` assets if a trade-category folder doesn't exist yet

That's a future task — not part of the per-demo process. Mentioned here so you don't forget it exists.
