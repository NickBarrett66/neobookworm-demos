# Shared toolkit (maps & embeds)

This folder holds **optional, reusable components** for demo sites and future client sites. Each component is vanilla JS (or documented CDN usage). **Site-specific design** (CSS, copy, layout) still lives only under `sites/<site-name>/`.

## Deploying to Netlify (single-site folder)

Netlify drag-and-drop usually publishes **one site folder** (e.g. `sites/swift-electrical/`). Paths like `../../shared/js/...` will **not** exist on the live server.

**Rule:** When you integrate a shared script, **copy** the needed files from `shared/js/` into that site’s `js/` folder and load them with **local** paths (e.g. `js/uk-counties-leaflet.js`). Keep the copy in sync when you update the canonical file in `shared/`.

For local development you can also serve from the repo root so `shared/` is visible; production should still use copied files unless you deploy the whole monorepo with a configured base path.

## Capability 1 — UK counties map (Leaflet + ONS)

**Files:** `js/uk-counties-leaflet.js`  
**Demos:** `demos/uk-counties-map.html`

- Leaflet **1.9.x** from unpkg (CSS + JS).
- Loads **England** county / unitary authority polygons from **ONS** via ArcGIS GeoJSON (see script header for the canonical URL).
- **`initNeoUkCountiesMap(containerId, options)`** — highlight regions by **substring** match on `CTYUA24NM` (and fallbacks). Options include `highlighted`, `fitHighlightedBounds` (defaults on when `highlighted` is non-empty), `fitBoundsPadding`, `fitBoundsMaxZoom`, `center`, `zoom`, `scrollWheelZoom`.
- Use for **“we cover these counties”** visuals without Google Maps.

## Capability 2 — Regional preset (same data, default highlights)

**Files:** `js/uk-counties-leaflet.js` (load first), `js/uk-counties-regional.js`  
**Demos:** `demos/uk-counties-regional-map.html`

- **`initNeoUkRegionalCountiesMap(containerId, options)`** — wraps capability 1 with a default list: Gloucestershire, Wiltshire, Oxfordshire, Warwickshire, Swindon.
- **`window.NEO_UK_REGIONAL_HIGHLIGHTS`** — read-only list if you need it elsewhere.
- Override with `options.highlighted` or disable auto-framing with `fitHighlightedBounds: false`.

## Capability 3 — Google Maps (service radius circle + markers)

**Reference implementation:** `sites/swift-electrical/contact.html`  
**Config:** Copy **`templates/maps-config.example.js`** to **`sites/<site-name>/js/maps-config.js`** (gitignored) with a browser-restricted API key. Existing demos (e.g. Swift Electrical) may also keep `js/maps-config.example.js` beside the page for the same copy-to-`maps-config.js` workflow.

- Uses **`google.maps.Map`**, **`google.maps.Circle`** (radius in **metres**), and **`AdvancedMarkerElement`** for town markers.
- Shows a **fallback** message if no key is configured (demo-safe).
- Use for **“X miles from [town]”** service areas; distinct from the county polygon map.

**Do not commit** real API keys. Document in the site’s `build-checklist` / QA that `maps-config.js` is present locally for preview but excluded from git.

## Demos

| Page | What it shows |
|------|----------------|
| `demos/uk-counties-map.html` | Generic Leaflet counties API |
| `demos/uk-counties-regional-map.html` | Regional preset + auto frame to highlights |

Serve the `shared` folder over HTTP when testing (e.g. `npx serve` from `shared/`, then open `/demos/…`). Hard-refresh after script changes; bump `?v=` on script URLs when caching bites.

## Versioning

When you change `uk-counties-leaflet.js`, bump the `?v=` query on script tags in pages that load it, and re-copy into site folders that vendor the file.
