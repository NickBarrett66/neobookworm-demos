# CLAUDE.md — NeoBookworm Demo Sites

Persistent context for Claude Code and Cursor sessions in this repo. Loaded automatically at the start of every chat.

## What this repo is

This is the `neobookworm-demos` repo — a collection of demo trade websites showcasing what NeoBookworm.uk can build for its clients. Each site in `sites/` is a full multi-page static site for a fictional (or real-reference) UK tradesperson business, deployed independently to Netlify, and linked from the Examples page on neobookworm.uk.

This repo also serves as the reference implementation for **Agent 6** — a future pipeline agent that will build real client websites automatically from intake form data. The manual process followed in this repo is the blueprint Agent 6 will eventually execute end-to-end. Every decision captured in `PROCESS.md` should be one that could, in principle, be scripted later.

## Source of truth documents

Read these, in order, at the start of any substantive task:

1. **`PROCESS.md`** — the master build process. Nine numbered phases from brief to live. The user will usually tell you which phase they're in.
2. **`.cursorrules`** — the universal build rules applied to every site in this repo. Loaded automatically but worth re-reading.
3. **The specific site's `site-brief.md` and `site-spec.md`** — located in `sites/<site-name>/`. These contain the per-site creative direction you must follow.

If a user's request conflicts with one of these documents, surface the conflict rather than silently resolving it.

## Business context (short version)

**NeoBookworm.uk** is Nick Barrett's one-person web design business in Swindon. It builds fixed-price websites for UK tradespeople — plumbers, electricians, decorators, roofers, joiners, landscapers, pest controllers, window cleaners. The core offer is a £499 fixed-price multi-page site with an optional £20/month maintenance retainer. Contact is email-only; business email is `nick@neobookworm.uk`.

The demo sites in this repo showcase the kind of work NeoBookworm delivers — eight sites for Wiltshire-area trades, each showing what a £499 website actually looks like. They need to look like real websites for real businesses, not like marketing mockups.

## The eight planned demos

| Site folder | Business name | Trade |
|---|---|---|
| `hartley-plumbing` | Hartley Plumbing | Plumbing (golden template — build first) |
| `swift-electrical` | Swift Electrical | Electrical |
| `sarah-brooks-decorating` | Sarah Brooks Decorating | Painting & decorating |
| `green-acre-landscapes` | Green Acre Landscapes | Landscaping |
| `apex-roofing` | Apex Roofing | Roofing |
| `hartwood-joinery` | Hartwood Joinery | Joinery & carpentry |
| `wiltshire-pest-control` | Wiltshire Pest Control | Pest control |
| `clean-sweep-window-cleaning` | Clean Sweep Window Cleaning | Window cleaning |

Current build status lives in `TRACKER.md`. Always check the tracker before assuming anything about a site's state.

## Site folder naming (prospect work vs NeoBookworm demos)

**Prospect / client builds** — sites being produced for a **specific prospect** use a folder name that ends with **`ltd`** (e.g. `fraynes-lofts-ltd`), matching the formal business naming used for that engagement.

**NeoBookworm showcase demos** — sites intended as **examples on neobookworm.uk** use the **business slug only**, with **no** `ltd` suffix (e.g. `hartley-plumbing`, `swift-electrical`, `ridgecoat-decorators`).

This keeps client-pipeline folders visually distinct from the fixed demo set in the tracker and Examples page.

## Critical boundaries

**Each demo has its own visual identity.** There is no house style. Do not reuse colour palettes, typography, or layouts between demos. Each site commits to a bold, distinct aesthetic direction defined in its `site-spec.md`. The NeoBookworm.uk brand (navy/amber, Playfair Display + DM Sans) applies only to the marketing site, never to demos.

**This repo is completely independent from the NeoBookworm.uk repo.** Never add demo code to the NeoBookworm.uk repo, and never add NeoBookworm.uk code here. The only connection between the two is URLs pasted into the Examples page on neobookworm.uk.

**Accreditation badges use the CSS badge library only** — never real trademarked logos. The library lives in the NeoBookworm.uk repo at `accreditations/accreditation-badges.html`; copy relevant snippets into demos as needed.

**These are static sites.** No build tools, no frameworks, no npm, no bundlers. HTML, CSS, and vanilla JS only.

## Shared map toolkit (`shared/`)

Optional **map capabilities** for demos and client sites live under **`shared/`** — see **`shared/README.md`** for the full list.

1. **UK counties (Leaflet + ONS GeoJSON)** — `shared/js/uk-counties-leaflet.js`; highlight counties/unitaries and optionally frame the map to those areas (`initNeoUkCountiesMap`).
2. **Regional preset** — `shared/js/uk-counties-regional.js` plus the Leaflet file; defaults to the Cotswolds / M4 corridor-style county list (`initNeoUkRegionalCountiesMap`).
3. **Google Maps** — service **radius circle** + optional town **markers**; reference **`sites/swift-electrical/contact.html`** and **`sites/fraynes-lofts-ltd/contact.html`** (layout + legend patterns), key via gitignored **`js/maps-config.js`** (copy from **`templates/maps-config.example.js`**).

**Google Maps — pitfalls (read `LEARNINGS.md` 2026-04-18):**

- **API key only** in demos: set **`window.__GMAPS_KEY__`** locally. Do **not** commit keys. Referrer restrictions and billing must match how you host (not `file://`). A bad key shows “This page can’t load Google Maps correctly.”
- **Default marker pattern:** **`google.maps.Marker`** + small **SVG data-URL** icons — **no Map ID** required. Expect a **deprecation** console message; that’s the trade-off for avoiding Cloud Map ID setup on simple demos.
- **`AdvancedMarkerElement`** needs a valid **`mapId`** from Google Cloud. Do **not** gate the map loader on Map ID for sites that use classic markers only — that **breaks** key-only sites (e.g. Swift).
- **Framing:** `map.fitBounds(circle.getBounds(), padding)` — **lower padding = closer** (more zoomed in), **higher padding = wider** view. Tune padding before adding extra `setZoom` hacks.
- **Flexible layout:** If the map sits in a **flex/grid** column whose height changes, use **`ResizeObserver`** (or resize handler), **`google.maps.event.trigger(map, 'resize')`**, and **refit** bounds so the circle stays correct.

**Integration rule:** For typical **per-site Netlify deploys**, **copy** the needed scripts from `shared/js/` into `sites/<site-name>/js/` so the deployed folder is self-contained. Do not assume `../../shared/` works in production.

**Libraries:** Leaflet 1.9.x and Google Maps JS API are **allowed** only for these documented patterns; other third-party JS still requires the same restraint as `.cursorrules` (no random npm packages).

## How to think about sessions

Sessions in this repo tend to be focused on one phase of one site at a time. When a user opens a chat:

- If they reference a specific site, load that site's brief and spec into context before doing anything
- If they reference a phase number from PROCESS.md, open PROCESS.md to that phase and follow the instructions literally
- If they're starting fresh (new demo kickoff), point them at `START-HERE.md` and the one-time setup steps

Commit messages across the repo follow the pattern: `<site-name>: <what changed>` — e.g. `hartley-plumbing: spec generated`, `swift-electrical: gallery images added`.

## Future-facing notes

When all eight demos are live and stable, the next phase of work is formalising PROCESS.md as an Agent 6 spec. That means every implicit judgment a human makes during a build needs to be made explicit in PROCESS.md. If you notice a decision being made during a build that isn't documented, flag it — that's exactly the kind of gap Agent 6 will trip on later.

The `images/` folder in each completed demo will eventually become part of a fallback library Agent 6 uses when real clients don't upload enough photos. Treat image quality accordingly — these assets have a longer lifetime than the demo they're first used in.
