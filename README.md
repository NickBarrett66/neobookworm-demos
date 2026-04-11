# neobookworm-demos

Demo trade websites for NeoBookworm.uk showcasing the £499 fixed-price offer.

## Docs and layout

| Path | Role |
|------|------|
| `START-HERE.md` | Onboarding |
| `PROCESS.md` | Build phases |
| `CLAUDE.md` | Cursor / Claude context |
| `templates/` | `site-brief`, `site-spec`, checklists, **`maps-config.example.js`** (Google Maps key stub) |
| **`shared/README.md`** | **Optional map toolkit** (Leaflet UK counties, regional preset, Google Maps reference) |

Per-site sites live under `sites/<name>/`. Optional reusable map scripts and HTML demos live under **`shared/`** — copy into a site’s `js/` when integrating (see `shared/README.md`).
