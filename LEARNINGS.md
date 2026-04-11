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

**What happened:** Every page included `<link rel="icon" href="favicon.ico" />` (per spec file tree), but **no `favicon.ico` existed** in `sites/Swift-electical/`, so browsers requested a missing asset.

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
