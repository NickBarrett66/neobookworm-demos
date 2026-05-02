---
name: neobookworm-demo-qa
description: Quality-checks and retrofits an existing NeoBookworm demo site HTML file. Use this skill whenever Nick wants to QA a demo site, retrofit an older site with missing checks, or run the full post-build checklist on any prospect's HTML file. Triggers include: "QA this site", "run the checks on", "retrofit", "check the demo for", "it's missing analytics", "run the QA skill on", or any mention of Lighthouse, mobile responsiveness, or broken assets in the context of a demo site. This skill replaces the manual Cursor prompt approach — it is the canonical QA process for all NeoBookworm demo sites before outreach is sent.
---

# NeoBookworm Demo QA Skill

Runs a four-step quality check on a single-file HTML demo site and retrofits any missing standard elements. Designed for use in Claude Code / Cursor. Produces a final report and a corrected HTML file ready for deployment.

---

## Inputs

Nick provides one of:
- **A prospect folder name** — e.g. `brush-to-brush-decorating-services-ltd` (Claude finds the HTML file automatically)
- **A full file path** — e.g. `C:\Users\Nick\Dropbox\00 Neobookworm\Neobookworm Demos\neobookworm-demos\sites\brush-to-brush-decorating-services-ltd\index.html`
- **A prospect name** — Claude derives the folder name using the slug rules below

> **Path convention:** All demo sites live at:
> `C:\Users\Nick\Dropbox\00 Neobookworm\Neobookworm Demos\neobookworm-demos\sites\{prospect-folder-name}\`
> The HTML file inside is typically `index.html` — if not, take the only `.html` file present.

---

## Standard elements to check / inject

Every NeoBookworm demo site must have:

| Element | Requirement |
|---|---|
| GA4 snippet | `G-VQ91NBYHCL` — injected in `<head>` before `</head>` |
| `lang="en"` | On the `<html>` tag |
| `<meta name="description">` | Present and non-empty |
| `<meta name="viewport">` | `width=device-width, initial-scale=1` |
| Phone number as `tel:` link | All phone numbers must be tappable |
| `loading="lazy"` | On all `<img>` tags below the fold |
| `alt` attributes | On every `<img>` tag |
| `rel="noopener noreferrer"` | On all external `<a target="_blank">` links |

---

## Step 1 — Locate and read the file

1. Derive the full path from the input (see path convention above)
2. Confirm the file exists — if not, stop and tell Nick the exact path you looked in
3. Read the HTML file into context
4. Note: do **not** modify the file yet — complete all checks first, then apply all fixes in one pass

---

## Step 2 — Lighthouse Audit

Run Lighthouse against the **local file** using the `file://` protocol, in mobile mode:

```bash
npx lighthouse "file:///C:/Users/Nick/Dropbox/00 Neobookworm/Neobookworm Demos/neobookworm-demos/sites/{prospect-folder}/index.html" \
  --preset=perf \
  --form-factor=mobile \
  --output=json \
  --output-path=./lh-report.json \
  --chrome-flags="--headless --no-sandbox"
```

> **Note:** All NeoBookworm demo sites are deployed to Netlify and have a live URL. Always use the Netlify URL rather than `file://` — live URLs give more accurate Lighthouse results. Ask Nick for the URL if not already known.

Extract scores for: **Performance, Accessibility, Best Practices, SEO**.

For any category below 90, identify the specific failing audits. Common fixes for single-file static sites:

- `loading="lazy"` on below-fold images
- Missing `alt` attributes on images
- Missing or empty `<meta name="description">`
- Illogical heading hierarchy (multiple H1s, skipped levels)
- Missing `rel="noopener noreferrer"` on external links
- Insufficient colour contrast — **flag to Nick rather than changing colours** (brand decision)
- Missing `lang="en"` on `<html>`
- Render-blocking resources — inline small CSS if external

After fixes, re-run Lighthouse. Repeat up to **3 iterations**. If a score cannot reach 90 after 3 iterations, note the remaining failing audits in the report and move on — do not get stuck.

---

## Step 3 — Mobile Layout Review

Using Playwright, take screenshots of the HTML file at three viewport widths:

```javascript
// playwright-screenshots.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const filePath = 'file://' + path.resolve(process.argv[2]);
  const widths = [375, 390, 412];
  const labels = ['iphone-se', 'iphone-14', 'pixel-7'];

  for (let i = 0; i < widths.length; i++) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: widths[i], height: 812 });
    await page.goto(filePath);
    await page.screenshot({ path: `mobile-${widths[i]}-${labels[i]}.png`, fullPage: true });
    await page.close();
  }
  await browser.close();
})();
```

Run with: `node playwright-screenshots.js "{full-path-to-html}"`

Review each screenshot and fix the following issues if present:

| Issue | Fix |
|---|---|
| Any element overflowing viewport horizontally | Add `overflow-x: hidden` to `body`; fix the offending element |
| Nav items too small to tap (<44px touch target) | Increase padding or use `min-height: 44px` |
| Body text smaller than 16px | Set `font-size: 16px` as base |
| Heading text disproportionately large on mobile | Use responsive `font-size` or `clamp()` |
| Buttons/CTAs not full-width or hard to tap | `width: 100%` on mobile breakpoint |
| Images not scaling | Ensure `max-width: 100%; height: auto` |
| Excessive padding wasting vertical space | Reduce `padding` in mobile media query |
| Phone number not a `tel:` link | Wrap in `<a href="tel:XXXXXXXXXXX">` |

Take a final set of screenshots after fixes and confirm no issues remain.

---

## Step 4 — Content & Copy Check

Read all visible text in the HTML and check for:

| Check | Action |
|---|---|
| Spelling or grammar errors | Fix directly |
| Placeholder text (`Lorem ipsum`, `Your Name`, `Insert text here`, `[PLACEHOLDER]`) | **Flag to Nick** — do not guess |
| Phone number present and formatted correctly | Fix if wrong format; flag if missing |
| Email address present | Flag if missing |
| Business name appears correctly and consistently | Fix capitalisation/spacing inconsistencies |
| Contact form has all required fields + submit button | Flag if form is broken |

> **Do not rewrite copy** — only fix clear errors. Tone and content decisions belong to Nick.

---

## Step 5 — Broken Asset Check

Check that all referenced resources load correctly:

```bash
# Quick fetch check for external URLs found in the HTML
# Extract all src and href values, attempt HEAD request for each
```

Flag any resources that return 404 or fail to load:
- Images (`<img src="...">`)
- Stylesheets (`<link href="...">`)
- External scripts (`<script src="...">`)
- Fonts (`@font-face` URLs)

Self-contained inline styles and scripts need no check.

---

## Step 6 — GA4 Snippet Injection

Check whether the GA4 snippet is already present by searching for `G-VQ91NBYHCL` in the HTML.

**If absent**, inject the following snippet immediately before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VQ91NBYHCL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VQ91NBYHCL');
</script>
```

**If already present**, confirm the measurement ID is correct (`G-VQ91NBYHCL`) and move on.

---

## Step 7 — Apply all fixes and save

Apply all fixes from Steps 2–6 to the HTML file in a **single write operation**. Do not make incremental saves mid-process — wait until all fixes are identified, then write the corrected file once.

Save the corrected file back to the original path, overwriting the original.

> **Backup:** Before writing, save a copy as `index-pre-qa.html` in the same folder so Nick can compare if needed.

---

## Final Report

Output a summary in this exact format:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEOBOOKWORM QA REPORT — {Business Name}
{Date}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ LIGHTHOUSE SCORES (after fixes)
Performance:     [score]/100
Accessibility:   [score]/100
Best Practices:  [score]/100
SEO:             [score]/100

✅ MOBILE LAYOUT
375px (iPhone SE):  [Pass / Issues found and fixed]
390px (iPhone 14):  [Pass / Issues found and fixed]
412px (Pixel 7):    [Pass / Issues found and fixed]

✅ GA4 SNIPPET
[Injected / Already present]

✅ CONTENT & COPY
[List issues fixed / "No issues found"]

✅ BROKEN ASSETS
[List any 404s / "No broken assets found"]

⚠️  ITEMS REQUIRING YOUR REVIEW
[Anything that couldn't be auto-fixed — placeholders, colour contrast,
 missing copy, ambiguous business details]

📁 FILES
Original backed up to: index-pre-qa.html
Corrected file saved to: index.html
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Prospect register

Update this section as sites are QA'd:

| Prospect | Folder | Live URL | QA Status | Notes |
|---|---|---|---|---|
| Lee Morgan Heating & Plumbing Ltd | `lee-morgan-heating-and-plumbing-ltd` | — | ⏳ Pending | First email sent — do not modify until response received |
| Brush 2 Brush Decorating Services Ltd | `brush-to-brush-decorating-services-ltd` | https://brush2brush-decorating-njb-demo.netlify.app | ⚠️ Manual review | **Pass 2 (live, mobile home):** Perf 77 / A11y 100 / BP 100 / SEO 100 — assets + robots resolve; perf gated by LCP/FCP (large JPEG hero). Repo updated to **WebP** where files exist + `fetchpriority="high"` on hero; redeploy for LH bump. Services **03–06** still JPEG until WebP added. |

---

## Future: Agent 4a mapping

This skill maps directly to the planned Agent 4a automated QA step in the pipeline:

```
Agent 4 (Build) → Deploy to Netlify → write URL to Notion
Agent 4a (QA)
    ├── Step 1: Lighthouse (mobile) — auto-fix up to 3 iterations
    ├── Step 2: Playwright mobile screenshots (375px, 390px, 412px) — review + auto-fix
    ├── Step 3: Content & copy check
    ├── Step 4: Broken asset scan
    ├── Step 5: GA4 snippet injection
    └── Write QA scores to Notion: LH Performance, LH Accessibility, LH SEO, Mobile QA Pass
        Status → "QA Passed" / "QA Failed" / "Manual Review Required"
```

When Agent 4a is built, this SKILL.md becomes the spec for its system prompt.

---

## Key rules

- **Never rewrite copy** — fix errors only, flag anything ambiguous
- **Never change colours** to fix contrast — flag to Nick (brand decision)
- **Never modify Lee Morgan's site** while outreach is live — check the prospect register above before starting
- **One write pass** — collect all fixes, write once, keep a backup
- **Always use the Netlify live URL** for Lighthouse — more accurate than running against a local file
- **Report format is mandatory** — always end with the structured report so Nick can see status at a glance
