# START HERE

**Read this first.** This is the onboarding guide for the NeoBookworm demo-sites repo. It tells you what every other document in this folder is for, how to set up the repo, how to configure Cursor, and how your first build session should go.

Assume you've never set up a Cursor project from scratch before. Every step is spelled out.

---

## What this repo is for

This repo contains the eight Wiltshire-area demo trade websites that showcase what NeoBookworm can build for clients. Each demo is a full multi-page static site, deployed independently to Netlify, and linked from the Examples page on NeoBookworm.uk.

These demos are **also the reference implementation for Agent 6** — the pipeline agent that will eventually build real client sites automatically. Every step of the manual process you follow here should be something an agent could, in principle, execute later. That discipline is the whole reason the process is written down.

The eight demos also serve a second purpose: when a real client comes through the intake form but hasn't uploaded enough photos, Agent 6 will fall back to the matching trade's demo site images as placeholders. That makes these demos a permanent visual asset library, not throwaway marketing work. Generate them to a high standard.

---

## The document set, explained

Every file in this repo has a job. Here's what each one does and when you read it.

### Read-first docs (root of repo)

| File | What it's for | When you read it |
|---|---|---|
| **START-HERE.md** | This file. The onboarding guide. | Once, right now. |
| **PROCESS.md** | The master build process, written as numbered phases with the exact Cursor prompts to run. | Every time you start a new demo. |
| **TRACKER.md** | Master status tracker for all eight demos. One row per site, columns for each phase. | Update after every work session. |
| **LEARNINGS.md** | Running log of things discovered during builds that should feed back into PROCESS.md. Dated entries. | Add to it whenever something catches you out. Review every few demos. |
| **CLAUDE.md** | Persistent context for Cursor/Claude Code. Points at PROCESS.md and summarises the business. | Cursor reads this automatically. You don't need to open it often. |
| **.cursorrules** | Universal build rules Cursor enforces on every session. | Cursor reads this automatically. Edit only when a rule genuinely applies to every demo. |
| **`shared/README.md`** | Optional reusable **map** scripts (Leaflet UK counties, regional preset, Google Maps reference). How to copy into a site for deploy. | When the brief/spec calls for a map or service-area visual. |

### Templates (in `templates/` folder)

| File | What it's for | When you use it |
|---|---|---|
| **site-brief.md** | The human-written input for one demo. Business name, trade, persona, tone, colours, services. This is the equivalent of what the intake form will capture for real clients. | Copy into each site's folder at kickoff and fill in. |
| **site-spec.md** | The Claude-generated intermediate artifact. Expands the brief into full copy, page structure, image prompts, design tokens. | Generated from the brief in Phase 2 of the process. You review and approve before any HTML is written. |
| **build-checklist.md** | The per-site tickable checklist. Tracks build progress for one demo. | Copy into each site's folder and tick off as you build. |
| **qa-launch-checklist.md** | Pre-launch gate. Accessibility, mobile, meta tags, Netlify config, etc. Must be 100% green before a demo goes live. | Copy into each site's folder and use in Phase 6. |
| **maps-config.example.js** | Google Maps API key stub (not a secret). | When the spec uses Google Maps, copy to `sites/<name>/js/maps-config.js` and add a browser key (file gitignored). See **`shared/README.md`**. |

### Per-site folders (created as you go)

When you start a new demo, you create a folder named after it (e.g. `sites/hartley-plumbing/`). Inside each site folder you'll have:

- `site-brief.md` (filled in)
- `site-spec.md` (generated)
- `build-checklist.md` (in progress)
- `qa-launch-checklist.md` (in progress or complete)
- `images/` (Midjourney outputs)
- The actual site files (`index.html`, `services.html`, `about.html`, `contact.html`, `gallery.html`, `css/`, `js/`, etc.)

### Shared toolkit (optional)

The **`shared/`** folder at the repo root holds **canonical** copies of reusable map scripts and HTML demos (`shared/demos/`). It is **not** part of any single site’s deploy folder. When a site needs a map, **copy** the relevant files into that site’s `js/` per **`shared/README.md`** so Netlify single-folder deploys stay self-contained.

---

## One-time setup

Do these steps once, before you start building anything.

### Step 1 — Create the GitHub repo

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `neobookworm-demos`
3. Owner: `NickBarrett66`
4. Description: *Demo trade websites for NeoBookworm.uk showcasing the £499 fixed-price offer*
5. Visibility: **Public** (Netlify's free tier deploys from public repos without extra config; also makes it easy for anyone reviewing your work)
6. Tick **Add a README file**
7. Add a `.gitignore` → choose **Node** from the dropdown (covers the common stuff even though we're static HTML)
8. Click **Create repository**

### Step 2 — Clone it to your machine

Open GitHub Desktop → **File → Clone repository** → pick `neobookworm-demos` → clone to `D:\Dropbox\01 Information\Claude\Exercise App\neobookworm-demos` (or wherever you prefer — keep it out of the NeoBookworm.uk repo).

### Step 3 — Drop the docs into the repo

Copy every file from this document set into the cloned repo:

- `START-HERE.md`, `PROCESS.md`, `TRACKER.md`, `LEARNINGS.md`, `CLAUDE.md`, `.cursorrules` → repo root
- `templates/` folder → repo root (preserving the folder)

Your repo root should now look like this:

```
neobookworm-demos/
├── .cursorrules
├── .gitignore
├── CLAUDE.md
├── LEARNINGS.md
├── PROCESS.md
├── README.md
├── START-HERE.md
├── TRACKER.md
└── templates/
    ├── site-brief.md
    ├── site-spec.md
    ├── build-checklist.md
    └── qa-launch-checklist.md
```

Commit and push via GitHub Desktop. Commit message: *Initial docs and templates*.

### Step 4 — Open the repo in Cursor

1. Open Cursor
2. **File → Open Folder** → select the `neobookworm-demos` folder
3. Cursor will automatically detect `.cursorrules` and `CLAUDE.md` and load them as persistent context for every chat in this workspace. You don't need to do anything to activate this.
4. Open the built-in terminal (**Terminal → New Terminal**) — you'll need it for running Git commands and, eventually, a local preview server.

**How to verify Cursor has loaded the context:** open a new chat in Cursor and ask *"What is this repo for and what's the first phase of the build process?"* — it should answer from `CLAUDE.md` and `PROCESS.md` without you having to paste anything in. If it doesn't, check that both files are at the repo root, not buried in a subfolder.

### Step 5 — Set up Netlify (one account, eight sites)

You'll create one Netlify site per demo, but they all live under your existing Netlify account.

1. Log in to [app.netlify.com](https://app.netlify.com)
2. You don't need to do anything yet — we'll create the first Netlify site when Hartley Plumbing is ready to deploy, and PROCESS.md walks you through it in Phase 7.

### Step 6 — Create the sites folder

In the repo root, create an empty folder called `sites/`. All eight demos will live inside this folder, one subfolder each. You can do this in VS Code, Cursor, File Explorer, or with `mkdir sites` in the terminal.

That's the one-time setup done. You never repeat these steps.

---

## How the repos connect to NeoBookworm.uk

This is the question you asked and it's worth answering clearly because the mental model matters more than the mechanics.

**The repos don't actually connect to each other.** The `neobookworm-demos` repo and the `NeoBookworm.uk` repo are completely independent. They share nothing — no code, no deploys, no dependencies.

What connects them is **URLs**. When you deploy a demo to Netlify, it gets a public URL. You then add that URL as a hardcoded link on the Examples page of NeoBookworm.uk. That's the entire "connection."

For example, after Hartley Plumbing is deployed you might have:
- Demo site lives at `https://hartley-plumbing-demo.netlify.app`
- NeoBookworm.uk's `examples.html` has a card that links to that URL with the business name, trade, and a screenshot

If you want prettier URLs later, you can point a subdomain like `hartley.neobookworm.uk` at the Netlify site via DNS — but that's optional polish and doesn't change anything about how the repos work.

**Why this is the right design:** it mirrors how real client sites will work. When you onboard a paying plumber later, their site will be its own Netlify deployment with its own URL (probably their own domain), and NeoBookworm.uk will link to it from a portfolio page. Demos and real clients follow the exact same pattern. The two-repo separation is a feature, not an awkwardness.

**What this means in practice:** never add demo-site code to the NeoBookworm.uk repo. Never add NeoBookworm.uk code to the demo-sites repo. The only thing that ever crosses the boundary is a URL pasted into an HTML `<a href>`.

---

## Your first work session — Hartley Plumbing

You've agreed that Hartley Plumbing is the golden template. The other seven demos will be cloned from its structure, so this first build is the most important one. Take your time and make it excellent.

Here's what your first session looks like:

### Before you sit down

- Have the 88-prompt Midjourney workbook open in another tab so you can pull plumbing prompts later
- Have Notion open to the NeoBookworm planning pages in case you need to cross-reference anything

### In Cursor

1. **Open the repo in Cursor** (from Step 4 above — just reopen the folder if you've closed it)
2. **Create the site folder:** in the Cursor file explorer, create `sites/hartley-plumbing/` and inside it create `images/`
3. **Copy the templates in:** copy `templates/site-brief.md`, `templates/build-checklist.md`, and `templates/qa-launch-checklist.md` into `sites/hartley-plumbing/`. (Don't copy `site-spec.md` — that gets generated in Phase 2, not hand-filled.)
4. **Open PROCESS.md** and read Phase 1 end-to-end before doing anything else
5. **Fill in the site brief** for Hartley Plumbing following Phase 1 instructions
6. **Start Phase 2** by opening a Cursor chat and pasting the Phase 2 prompt from PROCESS.md

From that point forward, PROCESS.md is your guide. Come back to START-HERE.md only if you get lost or need to re-read the setup.

### Keeping context across sessions

A concern you raised: **how do I make sure I don't lose important context for Cursor between sessions?**

The answer has three parts:

1. **`.cursorrules` and `CLAUDE.md` are loaded automatically every time you open the repo in Cursor.** You don't need to re-paste context. As long as those two files are at the repo root and kept up to date, Cursor will remember what this project is for.

2. **Per-site docs stay in the site folder.** When you're working on Hartley Plumbing, the filled-in `site-brief.md`, generated `site-spec.md`, and in-progress `build-checklist.md` all live in `sites/hartley-plumbing/`. Cursor can see them when you're working in that folder. When you come back tomorrow, open that folder's files and the context is right there — you won't have to reconstruct anything from memory.

3. **LEARNINGS.md and TRACKER.md get updated every session.** These are your "what happened last time" notes. Before finishing a work session, add a line to LEARNINGS.md if anything tripped you up, and update TRACKER.md with the current phase for each in-progress demo. Next session, read those first.

If you always commit and push at the end of a session (GitHub Desktop → summary message → Commit → Push), your context is safe even if your machine dies.

---

## What to do if something goes wrong

- **Cursor isn't following the rules in `.cursorrules`** → Confirm the file is at repo root and named exactly `.cursorrules` (with the dot). Close and reopen the repo in Cursor. Check the chat isn't being fed a file that contradicts the rules.
- **You're mid-build and confused about what phase you're in** → Open the site's `build-checklist.md` — whichever box is next unticked is where you are.
- **You've made a mess and want to start the current demo over** → Delete the site's folder (`sites/hartley-plumbing/` for example), recreate it, and re-copy the templates in. Nothing outside that folder is affected.
- **A Cursor prompt from PROCESS.md produced a poor result** → Add an entry to LEARNINGS.md describing what you ran, what you got, and what you wish had happened. We use those entries to improve PROCESS.md over time.

---

## What to do after Hartley Plumbing is live

1. Update TRACKER.md — mark Hartley Plumbing complete, record the live URL
2. Add an entry to LEARNINGS.md summarising anything the process missed or handled badly
3. Review LEARNINGS.md entries and, if any are worth promoting, update PROCESS.md
4. Pick the next demo from the eight and repeat — each subsequent build should be faster because the process is more refined

By the time demo eight is live, PROCESS.md should be tight enough that handing it to Agent 6 as a spec is a realistic next step.

---

*Last updated: when this file was created. Update the date whenever you change setup steps or add new read-first docs.*
