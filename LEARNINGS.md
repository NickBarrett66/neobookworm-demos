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

**Promoted to PROCESS.md?** Pending
