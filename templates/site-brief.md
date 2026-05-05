# Site Brief — `[Business Name]`

This is the creative seed for a demo site. Fill in every section. If something doesn't apply, write "None" or "N/A" — don't leave fields blank. This is Phase 1 of `PROCESS.md`.

Fields highlighted with `<mark>` are AI-generated — review and adjust if needed. Fields showing `<mark>Unknown — please fill in</mark>` could not be determined from research.

---

## 1. The business

**Business name:**

**Trade / category:**

**Location served (town, county, radius) / coverage notes:**
*(Describe the area served and any coverage map preference, e.g. "Swindon and surrounding villages, ~15-mile radius — no map needed, text only.")*

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

- **Service 1:**
- **Service 2:**
- **Service 3:**
- *(etc — aim for 5–10 services)*

**Any specialisms or premium offerings worth highlighting?**

**Anything they explicitly don't do?**

---

## 4. Accreditations and trust signals

Only list accreditations where the CSS badge library has a matching badge (Gas Safe, NICEIC, Part P, TrustMark, FENSA, Checkatrade, Which? Trusted Trader, CHAS, generic "Fully Insured").

For Gas Safe: verify on gassaferegister.co.uk using the business name or registered address and record the registration number here. The number must be present so Cursor can bake it into trust strips, badges, and schema without leaving a placeholder.

- **Accreditation 1:**
- **Accreditation 2:**

**Insurance / guarantees:**
*(Public liability amount, workmanship guarantee length, etc.)*

---

## 5. Tone of voice

This is the most important section. It drives every word and visual choice downstream.

**Pick 3–5 adjectives that describe how this business talks:**
*(Not "friendly and professional" — go specific. "Dry, economical, never smarmy." "Warm, maternal, uses first names." "Matter-of-fact, craft-proud, quietly confident.")*

**Describe the voice as a person:**
*(One sentence. "Reads like a letter from a careful uncle who knows the trade inside out.")*

**Example of a sentence that sounds like this business:**

**Example of a sentence that would feel off-brand:**

---

## 6. Visual direction

**Aesthetic direction:**
*(Options: editorial/magazine, industrial/brutalist, warm craft, refined minimal, retro-modern, bold maximalist, organic/natural. Don't pick "clean and modern" — that's meaningless.)*

**Colour direction:**
*(Describe the feeling, not hex codes. "Deep forest greens with brass accents." "Workshop-inspired: raw concrete, safety orange, industrial black.")*

**Reference images or sites (optional):**

**Typography direction:**
*(Serif or sans? Display or restrained? No Inter, no Roboto.)*

---

## 7. Contact details

**Phone number(s):**

**Email address:**

**Physical address or service area description:**

**Hours of operation:**
*(Default: Mon–Fri 9am–5pm if not confirmed)*

**Social media handles (optional):**

---

## 8. SEO Inputs

**Business phone number (for NAP consistency):**

**Business address / area served:**

**Primary trade category (schema @type):**

**Target location keywords (2–3):**

**Google Business Profile URL:**

---

## 9. Images

**Trade category slug:**

**Hero image:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/{slug}/hero.webp`

**About image:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/{slug}/about.webp`

**CTA background:** `https://pub-f093c230437d4977b0f5e45607fd9186.r2.dev/demos/library/{slug}/cta-bg.webp`

**Notes on image usage:**

---

## 9b. Technical constants (fixed for all demo sites — do not change)

**GA4 Measurement ID:** `G-VQ91NBYHCL` — inject the live snippet on every page, never a placeholder comment.

**Contact form:** Build with Netlify Forms markup (`netlify` attribute + hidden `form-name` field) but **comment both out** for the demo stage. Add a visible demo notice on the form ("Demo form — submissions are not delivered"). Uncomment at productionisation.

**Phone call buttons:** All `tel:` links must carry a `data-demo-block` attribute. The JS in `main.js` uses this to intercept clicks and show a demo notice instead of dialling.

**Copyright year:** Use the current calendar year — do not hardcode a past year.

---

## 10. Gallery

**Section heading:**

**Homepage teaser heading:**

> **Demo stage note:** All gallery cards are icon + text only. No images at demo stage.
> Real client photos replace the icons at productionisation — zero structural change required.

| # | Lucide icon suggestion | Job type heading | Location | Micro-quote (optional) |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |

---

## 11. Anything else

Free text. Anything the structured sections didn't capture.

---

## 12. Open Questions

*Only include rows where there is a genuine unresolved question after research. Provide a recommended answer where possible — Nick confirms or overrides.*

| # | Question | Recommended answer |
|---|---|---|
| 1 | | |

---

*Brief complete. Commit as `<site-name>: brief complete` and move to Phase 2 of PROCESS.md.*
