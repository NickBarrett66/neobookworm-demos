# Site Brief — `[Business Name]`

This brief is generated in Phase 1 of `PROCESS.md` using the **`neobookworm-site-brief` skill in Claude chat** (NeoBookworm project). Provide the prospect's Notion URL or page ID and Claude will research and populate every section. Review the output carefully, request any changes, then download and save to `sites/<site-name>/site-brief.md`.

The field structure mirrors what NeoBookworm's client intake form captures, so when real clients come through later, the same information will flow into this same template shape.

---

## 1. The business

**Business name:**

**Trade / category:**

**Location served (town, county, radius):**

**Map / coverage visual (if any):**
*(Optional. e.g. "Leaflet UK counties highlighting [list] on About", "Google Maps 15-mile radius from [town] on Contact", or "None — text only".)*

**Years in business (real or fictional):**

**Size (solo, two-person, small team):**

**Owner name and one-line persona:**
*(Who are they, in one sentence? E.g. "Gareth Hartley, ex-British Gas engineer who went solo eight years ago and takes pride in never leaving a job messy.")*

---

## 2. The story

**Why does this business exist?**
*(What made the owner start it? What are they trying to do differently from competitors? Write 2–4 sentences of real backstory — this becomes the About page.)*

**What do customers most often say about them?**
*(A few phrases or paraphrased testimonials. Real feel, not marketing-speak.)*

**What's the unique angle?**
*(What makes them different from every other [plumber/electrician/roofer] in the area? One or two specifics, not generalities.)*

---

## 3. Services offered

List the core services the business provides. Group them if it helps. For each, one sentence on what it actually means.

- **Service 1:**
- **Service 2:**
- **Service 3:**
- *(etc — aim for 5–10 services)*

**Any specialisms or premium offerings worth highlighting?**

**Anything they explicitly don't do?**

---

## 4. Accreditations and trust signals

List any accreditations, memberships, or qualifications that should be shown. Only list ones where the CSS accreditation badge library has a badge available (Gas Safe, NICEIC, Part P, TrustMark, FENSA, Checkatrade, Which? Trusted Trader, CHAS, generic "Fully Insured"). If a real business would have others, note them here and we'll decide whether to skip or build a new CSS badge.

- **Accreditation 1:**
- **Accreditation 2:**
- *(etc)*

**Insurance / guarantees:**
*(Public liability amount, workmanship guarantee length, etc.)*

---

## 5. Tone of voice

This is the most important section in the brief. It drives every word and visual choice downstream.

**Pick 3–5 adjectives that describe how this business talks:**
*(Not "friendly and professional" — everyone says that. Go specific. "Dry, economical, never smarmy." "Warm, maternal, uses first names." "Matter-of-fact, craft-proud, quietly confident.")*

**Describe the voice as a person:**
*(One sentence. "Reads like a letter from a careful uncle who knows the trade inside out." "Sounds like a 28-year-old who runs a tight ship and has no time for drama.")*

**Example of a sentence that sounds like this business:**

**Example of a sentence that would feel off-brand:**

---

## 6. Visual direction

**Aesthetic direction (pick one or describe your own):**
*(Options for inspiration: editorial/magazine, industrial/brutalist, warm craft, refined minimal, retro-modern, bold maximalist, organic/natural. Don't pick "clean and modern" — that's meaningless.)*

**Colour direction:**
*(Not exact hex codes — that's the spec's job. Describe the feeling. "Deep forest greens with brass accents." "Workshop-inspired: raw concrete, safety orange, industrial black." "Warm creams and terracotta, sun-bleached feel.")*

**Reference images or sites (optional):**
*(Link anything that captures the vibe. Even a Pinterest board.)*

**Typography direction:**
*(Serif or sans? Display or restrained? Distinctive or understated? We avoid generic choices like Inter or Roboto.)*

---

## 7. Contact details

**Phone number(s):**
*(Demos and client sites can include phone numbers — this rule is relaxed compared to NeoBookworm.uk's own site.)*

**Email address:**

**Physical address or service area description:**

**Hours of operation:**

**Social media handles (optional):**
*(Facebook, Instagram, etc. We won't link out to fake accounts but the handles can appear as visual elements.)*

---

## 8. SEO Inputs

These fields feed directly into the SEO Outputs section of `site-spec.md` and the LocalBusiness schema. Use the business number (Sonetel or dedicated line) — NOT the owner's personal mobile.

**Business phone number (for NAP consistency):**
*(The number that will appear on every page header, footer, and in the schema. Must match across site, Google Business Profile, and any directories.)*

**Business address / area served:**
*(E.g. "Based in Swindon, serving Swindon, Wiltshire, and surrounding areas within 20 miles." If no fixed address, describe the service area.)*

**Primary trade category (schema @type):**
*(E.g. "Plumber", "Electrician", "Painter", "GeneralContractor" — pick the closest schema.org type.)*

**Target location keywords (2–3):**
*(E.g. "Swindon, Wiltshire, Bath" — the towns and county that should appear in title tags and meta descriptions.)*

**Google Business Profile URL:**
*(Leave blank if not yet created. Add later.)*

---

## 9. Images

**Trade category slug:** *(must match exactly — see valid slugs below)*
**Hero image:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/{slug}/hero.webp`
**About image:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/{slug}/about.webp` — or use `shared/owner.webp` if a portrait works better for this business
**CTA background:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/{slug}/cta-bg.webp`

**Shared assets available (any site, any trade):**
- Van (exterior): `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/shared/van.webp`
- Van (interior / tools): `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/shared/tools.webp`
- Owner portrait: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/shared/owner.webp`
- British home exterior: `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/shared/british-home-exterior.webp`

**Notes on image usage:**
*(Note here if a shared asset suits a section better than the trade-category image — e.g. owner.webp for About, british-home-exterior.webp for CTA background.)*

**Valid trade category slugs:**
`plumber` · `gas-engineer` · `electrician` · `painter-decorator` · `plasterer` · `roofer` · `kitchen-fitter` · `bathroom-fitter` · `landscaper` · `driveway-paving` · `carpenter-joiner` · `tiler` · `handyman` · `builder` · `other`

> ⚠️ If this trade category does not yet have images in the R2 library, source and upload before starting Phase 4.
> See `docs/r2-image-library-checklist.md` in this repo to track progress.

---

## 10. Anything else

Free text. Anything the structured sections didn't capture — a specific phrase the owner uses, a story worth telling, a competitor you want to differentiate from, a particular kind of customer you want to attract or repel.

---

*Brief complete. Commit as `<site-name>: brief complete` and move to Phase 2 of PROCESS.md.*
