# LEARNINGS.md — Running build log

Dated entries capturing things discovered during demo site builds that should feed back into `PROCESS.md`, `.cursorrules`, or the templates. Read this at the start of every session so you don't repeat mistakes. Review every few demos and promote repeated patterns into the process itself.

**Entry format:**

```
## YYYY-MM-DD — Site name — Phase N

**What happened:** brief description of the situation.

**Impact:** what it cost (time, rework, quality).

**Root cause:** why it happened.

**Fix for next time:** what PROCESS.md or .cursorrules or the templates should say to prevent it.

**Promoted to PROCESS.md?** Yes / No / Pending
```

---

## How to use this log

1. **Write entries the same day.** Memory degrades fast. If something tripped you up this afternoon, log it before you close the laptop
2. **Be specific.** "Cursor produced bad copy" is not useful. "Cursor produced generic 'welcome to Hartley Plumbing' opener after I'd explicitly briefed for dry wit" is useful
3. **Don't delete old entries.** Even if fixed in PROCESS.md, the history is valuable. Mark them as promoted instead
4. **Review every 2–3 sites.** Look for patterns. The same mistake twice is a signal the process is wrong, not that you are

---

## Entries

## 2026-04-18 — Frayne Lofts Ltd — Google Maps (contact + about)

**What happened:** Several Google Maps issues stacked up while wiring the coverage map: “This page can’t load Google Maps correctly”; console noise about **Advanced Markers** without a valid **Map ID**; **classic `Circle`** sometimes hard to notice next to **markers**; **marker labels** overlapping at some zooms; **flex layout** on contact meant the map didn’t refit when the pane resized; a **Map-ID–gated** loader was briefly applied repo-wide and **broke Swift Electrical**, which only ever needed a browser API key.

**Impact:** Rework across `about.html`, `contact.html`, `maps-config` docs, and a Swift revert; risk of repeating the same mistakes on the next site that copies a “modern” Maps snippet from Google’s docs.

**Root cause:**

1. **Keys & restrictions** — Invalid, restricted, or billing-disabled keys produce the generic load failure overlay. Keys must not be committed; **`sites/*/js/maps-config.js`** is gitignored for a reason.
2. **`AdvancedMarkerElement`** — Requires a real **Cloud Map ID** on the `Map` options. Without it, expect console warnings and unreliable behaviour. **`google.maps.Marker`** + **inline SVG** icons need **no Map ID** (trade-off: Google’s deprecation notice in console; still supported).
3. **Cross-site copy-paste** — Frayne needed alignment with Swift’s **key-only** pattern. Adding **`__GMAPS_MAP_ID__`** checks to every site **breaks** demos that don’t use Map IDs.
4. **Framing** — **`map.fitBounds(circle.getBounds(), padding)`**: **smaller padding → zoom in** (tighter), **larger padding → zoom out**. Mixing **`setZoom(getZoom()+1)`** after `fitBounds` is a blunt extra step; prefer tuning padding first.
5. **CSS flex + map height** — If the map container’s height changes after init (e.g. stretched column beside a form), call **`google.maps.event.trigger(map, 'resize')`** and **refit** bounds; a **`ResizeObserver`** on the map element is a solid pattern.

**Fix for next time:**

- Default **demo pattern** (matches Swift + Frayne): **`google.maps.Map`**, **`google.maps.Circle`**, **`google.maps.Marker`** with **SVG data-URL** icons; **`templates/maps-config.example.js`** → **`js/maps-config.js`** with **`window.__GMAPS_KEY__` only**; show a **fallback** when the key is missing.
- Only introduce **`AdvancedMarkerElement` + `mapId`** on a site if you **document** both in that site’s local setup and **never** require Map ID on sites that don’t use it.
- After layout/CSS changes to the map wrapper, verify **resize/refit** on desktop and mobile.
- See **`CLAUDE.md`** (Shared map toolkit / Google Maps pitfalls).

**Promoted to PROCESS.md?** Pending

## 2026-04-11 — Repo-wide — Shared map toolkit

**What happened:** UK county maps (Leaflet + ONS), regional presets, and Google Maps (radius + markers) were consolidated under `shared/` with demos and docs.

**Impact:** Future demos and customer sites can reuse the same scripts without inventing paths or duplicating README content in each site.

**Root cause:** N/A (process improvement).

**Fix for next time:** Use **`shared/README.md`**, **`CLAUDE.md`** (Shared map toolkit), and **`PROCESS.md`** Phase 4 for maps; copy vendored JS into `sites/<name>/js/` for deploy; copy **`templates/maps-config.example.js`** to **`maps-config.js`** for Google Maps (gitignored).

**Promoted to PROCESS.md?** Yes

## 2026-04-09 — Hartley Plumbing — Phase 2

**What happened:** The site spec was generated successfully, but it wasn’t explicitly saved into the demo site’s folder by default.

**Impact:** Easy to lose the spec between sessions and harder to keep each demo self-contained; adds avoidable rework and confusion about the “source of truth.”

**Root cause:** The Phase 2 prompt/process emphasises generating the spec, but it’s easy to forget the concrete file location rule: the spec must live alongside the brief inside the specific demo’s `sites/<site-name>/` directory.

**Fix for next time:** After Phase 2 output is generated, immediately save it as `sites/<site-name>/site-spec.md` (in the demo site directory) and commit `"<site-name>: spec generated"`.

**Promoted to PROCESS.md?** Complete

## 2026-04-09 — Hartley Plumbing — Phase 4

**What happened:** Demo-safe behaviour for “real” actions (phone `tel:` links, contact form submit) was added after the pages were built: inline copy plus intercepts so nothing actually dials or posts.

**Impact:** Extra pass across every CTA, footer phone link, and the form; risk of missing a link or duplicating inconsistent wording if bolted on late.

**Root cause:** Build rules assumed real-looking CTAs and forms, but **demo sites** need a clear, consistent story from day one: where the explanatory text sits, which elements get `data-*` hooks, and one shared message (or small set) for alerts.

**Fix for next time:** When scoping or building a **demo** trade site, bake in from the first HTML pass: (1) short “demo site” notes near call and form actions, (2) a single JS pattern for blocked `tel:` / form submit with matching copy, (3) checklist every `tel:` and submit button before calling the build done. Consider adding this to Phase 4 prompt or `build-checklist.md` for demos only.

**Promoted to PROCESS.md?** Complete

## 2026-04-10 — Swift Electrical — Phase 4

**What happened:** Every page included `<link rel="icon" href="favicon.ico" />` (per spec file tree), but **no `favicon.ico` existed** in `sites/swift-electrical/`, so browsers requested a missing asset.

**Impact:** Broken or generic tab icon in demos; easy to miss because layout and copy still look fine; undermines polish on an otherwise complete static build.

**Root cause:** The spec/checklist names `favicon.ico` as an output, but the build process did not include a concrete step to **create** the file (or an equivalent) before marking HTML done. Placeholder links without a real file are worse than omitting the tag.

**Fix for next time:** Treat favicon as part of the **first** HTML pass, not a later polish item: (1) add a real asset at site root — e.g. **`favicon.svg`** (simple wordmark/monogram, brand colours) plus optional `.ico` for older clients; (2) use `<link rel="icon" href="favicon.svg" type="image/svg+xml" />` on every page; (3) add a **one-line verify** in `build-checklist.md` / Phase 4: “favicon file exists and path matches `<link>`.” Update `site-spec.md` templates to prefer documenting `favicon.svg` (or both) so the file tree matches what ships.

**Promoted to PROCESS.md?** Complete

## 2026-04-09 — Hartley Plumbing — Phase 3 / 4 (tooling)

**What happened:** Workspace search (e.g. file glob / ripgrep-style listing triggered from the agent) repeatedly reported **no files** under `sites/<site-name>/images/`, even while the same `.jpg` assets were open in the editor and existed on disk from the outset.

**Impact:** False “images missing” conclusions; wiring paths to spec filenames while second-guessing the folder; extra back-and-forth with the human to confirm reality.

**Root cause:** Agent file discovery doesn’t always match Cursor’s open-file list or Dropbox-synced trees: indexing lag, workspace root boundaries, or tools not enumerating certain folders reliably. Treating an empty glob as ground truth is brittle.

**Fix for next time:** Don’t treat an empty glob as proof the folder is empty. Use a **direct read** of a known path (or a terminal listing on the absolute `sites/.../images` path), or have the human `@`-mention a single image so the path is authoritative. Document in Phase 3/4: confirm `images/` with one explicit file read (or shell `ls`/`dir`) before assuming absence.

**Promoted to PROCESS.md?** Complete
