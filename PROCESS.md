# PROCESS.md — Demo Site Build Process

This is the master process for building a NeoBookworm demo trade website. Follow the phases in order. Each phase has a clear input, a clear output, and (where relevant) the exact prompt to paste into Cursor.

**Principle:** every manual step here should be something an agent could eventually execute. If you find yourself improvising, stop and ask whether the improvisation should be captured in this document — if yes, add it before you forget. If you find yourself fighting the process, add a LEARNINGS.md entry and we'll fix it.

**Each demo site should have its own distinct visual identity.** Don't converge on a single template look. Each trade and business deserves a bold aesthetic direction chosen for that specific site. The process is shared; the design language is not.

---

## Phase overview

| Phase | What happens | Output | Estimated time |
|---|---|---|---|
| 1 | Write the site brief | Filled-in `site-brief.md` | 20 min |
| 2 | Generate the site spec | Filled-in `site-spec.md` | 15 min (mostly waiting on Claude) |
| 3 | Generate images | `images/` folder populated | 45 min (Midjourney gen time) |
| 4 | Build the site | All HTML/CSS/JS pages | 2–4 hours |
| 5 | Local review | Visual and content review | 30 min |
| 6 | QA and launch prep | Filled `qa-launch-checklist.md` | 30 min |
| 7 | Deploy to Netlify | Live URL | 15 min |
| 8 | Link from NeoBookworm.uk | Live on Examples page | 10 min |
| 9 | Close out | TRACKER and LEARNINGS updated | 5 min |

Total per site: roughly 4–6 hours for the first one (Hartley Plumbing); should compress to 2–3 hours for later demos as the process tightens.

---

## Phase 1 — Write the site brief

**Input:** a blank `site-brief.md` copied into the site folder.

**Output:** the brief filled in with human-written creative direction.

**Who does this:** you. This is the one phase with no Cursor/Claude involvement — it's the human creative seed the rest of the process grows from. Equivalent of what the intake form captures for real clients.

**Steps:**

1. Open `sites/<site-name>/site-brief.md` in Cursor
2. Fill in every section. If a section doesn't apply (e.g. no accreditations), write "None" — don't leave it blank
3. Be specific. "Warm and friendly" is not specific; "reassuring like a good family GP, never salesy, uses first names" is
4. When you're done, commit with message: *`<site-name>`: brief complete*

**What to watch for:**

- Don't describe the website — describe the *business*. Site copy and layout decisions come later
- The tone-of-voice section is the most important single field. It drives everything downstream
- Pick a colour direction that suits the trade and owner, not one that matches NeoBookworm.uk. Each demo should look completely different

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
- For the Gallery page, list 8–12 image slots with a description of what
  each image should show. These become Midjourney prompts in Phase 3.
- For the Home page hero, specify one hero image slot with a detailed
  description.
- List any icons, illustrations, or decorative elements needed.
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

---

## Phase 3 — Generate images

**Input:** image prompts from the spec.

**Output:** `sites/<site-name>/images/` folder with all required images, named sensibly.

**Who does this:** you, manually in the Midjourney web app.

**Steps:**

1. Open the 88-prompt Midjourney workbook and find the relevant trade section (or use the new prompts from the spec)
2. Generate each image in Midjourney. Use only `--ar` flags for aspect ratio; do not add `--v` flags (version is set in your account settings)
3. Download each generated image
4. Rename using the pattern: `hero.jpg`, `service-1-bathroom-fitting.jpg`, `gallery-01.jpg`, `about-portrait.jpg`, etc. — descriptive and lowercase, no spaces
5. Place in `sites/<site-name>/images/`
6. Optimise: run them through [squoosh.app](https://squoosh.app) or similar. Target under 200KB per image for gallery shots, under 400KB for hero images. MozJPEG at quality 75 is a good default
7. Commit: *`<site-name>`: images added*

**What to watch for:**

- Midjourney aspect ratios: use `--ar 16:9` for heroes, `--ar 4:3` for gallery, `--ar 1:1` for portraits. Match the spec's intended layout
- Regenerate anything that looks AI-generic or has obvious artifacts (extra fingers, distorted tools, impossible pipes)
- These images will also be the fallback library for real client sites when Agent 6 can't find enough client-uploaded photos. Quality matters beyond this one demo
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

Build page-by-page, starting with index.html. Show me each page's HTML and
the styles.css additions before moving to the next page so I can review.
```

**What to watch for:**

- Cursor sometimes drifts towards generic designs. If you feel the site converging on "another template," push back hard and point at the spec
- Check responsiveness in the Cursor preview as you go — don't leave it all to Phase 5
- **Favicon:** confirm the asset file exists at the path referenced in every
  `<link rel="icon">` before marking the build done (tick the matching line in
  `build-checklist.md`)
- **`images/`:** before concluding assets are missing or wiring wrong paths,
  confirm the folder the same way as Phase 3 (terminal listing or read a file by
  path). An empty IDE/agent glob is not proof the folder is empty.
- If Cursor forgets the CSS badge library, paste in the relevant snippet from the NeoBookworm repo's `accreditations/accreditation-badges.html`

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

## Phase 8 — Link from NeoBookworm.uk

**Input:** live demo URL.

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

**Input:** live demo, linked from NeoBookworm.uk.

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

## Fallback image library — a note for later

Once all eight demos are live, their `images/` folders become the fallback library Agent 6 uses when real clients don't upload enough photos. At that point we'll need to:

- Copy each demo's `images/` folder to a shared location (probably R2 under `shared-fallback-images/<trade>/`)
- Tag each image with the trade category
- Add fallback logic to Agent 6 so it pulls from this library when client uploads fall short

That's a future task — not part of the per-demo process. Mentioned here so you don't forget it exists.
