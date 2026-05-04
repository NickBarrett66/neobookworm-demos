# QA and Launch Checklist — `[Business Name]`

Pre-launch gate. Every item must be ticked or explicitly marked N/A with a reason before a demo can go live. Referenced by Phase 6 of `PROCESS.md`.

**How to use:** work through in order. If you find a problem, stop, fix it, re-test, then tick. Do not deploy until every item is resolved.

---

## 1. Content

- [ ] Every page has been proofread end-to-end
- [ ] No placeholder text remains (no "Lorem ipsum", no `[TODO]`, no unfilled template fields)
- [ ] All copy matches the tone described in the site brief
- [ ] Business name spelled consistently everywhere
- [ ] Owner name(s) spelled consistently everywhere
- [ ] Phone number consistent across every page
- [ ] Email address consistent across every page
- [ ] Address / service area consistent across every page
- [ ] Hours of operation consistent across every page

## 2. HTML quality

- [ ] One `<h1>` per page
- [ ] Heading hierarchy sensible (no skipping from `h1` to `h4`)
- [ ] Every `<img>` has an `alt` attribute (descriptive, or `alt=""` for decorative)
- [ ] Every form input has a `<label>`
- [ ] `lang="en"` on `<html>`
- [ ] Viewport meta tag on every page
- [ ] No inline styles (all styling in `css/styles.css`)
- [ ] <link rel="canonical"> present on every page
- [ ] <main> landmark present on every page

## 3. Meta tags and SEO basics

For every page:

- [ ] `<title>` is unique and descriptive (not the same on every page)
- [ ] `<meta name="description">` is unique and readable
- [ ] `og:title` set
- [ ] `og:description` set
- [ ] `og:image` points at a real image
- [ ] `og:url` placeholder present
- [ ] `og:type` set (`website` for home, `article` or `website` for others)
- [ ] Favicon displays in browser tab

## 4. SEO Gate

Every item in this section is a hard requirement. Do not proceed to deploy if any item is unresolved.

- [ ] Every page has a unique, keyword-targeted `<title>` tag under 65 characters (H1s may differ — title tags are for search)
- [ ] Every page has a `<meta name="description">` under 155 characters that ends with a clear CTA
- [ ] Every page has `og:title` and `og:description` tags matching the spec's SEO Outputs section
- [ ] LocalBusiness JSON-LD schema present in `<head>` on every page (verify `@type`, phone, address, areaServed are all filled — no placeholders)
- [ ] Phone number visible in the header on all pages
- [ ] Phone number visible in the footer on all pages (identical to header — NAP consistency)
- [ ] `sitemap.xml` accessible at `/sitemap.xml` (open the URL and confirm it loads)
- [ ] `robots.txt` accessible at `/robots.txt` and includes a `Sitemap:` declaration
- [ ] Every page has exactly one `<h1>` tag

## 5. Accessibility

- [ ] Body text contrast passes WCAG AA (4.5:1 minimum). Test with [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/)
- [ ] Large text contrast passes AA (3:1 minimum)
- [ ] Every interactive element reachable by `Tab` key
- [ ] Focus states clearly visible on every interactive element
- [ ] No keyboard traps (can `Tab` forward and backward through the whole page)
- [ ] Mobile menu can be opened and closed with keyboard
- [ ] Gallery lightbox can be opened, navigated, and closed with keyboard
- [ ] Colour is not the only way information is conveyed
- [ ] No auto-playing audio or video
- [ ] Form errors (if any) are announced accessibly

## 6. Responsive design

Test at each of these widths. Every item must pass at every width.

Widths to test: **320px, 375px, 414px, 768px, 1024px, 1440px, 1920px**

- [ ] No horizontal scrolling at any width
- [ ] Text is readable at every width (minimum ~16px on mobile)
- [ ] Images scale without overflow or distortion
- [ ] Navigation works at every width (mobile menu below breakpoint, full nav above)
- [ ] CTAs remain prominent and tappable on mobile (min 44×44px touch target)
- [ ] Gallery grid reflows sensibly across breakpoints
- [ ] Footer layout works at every width

## 7. Performance basics

- [ ] All images optimised (spot-check file sizes in `images/` folder)
- [ ] `width` and `height` attributes on all `<img>` tags (prevents layout shift)
- [ ] Google Fonts loaded with `preconnect`
- [ ] No unused CSS obviously bloating `styles.css`
- [ ] No console errors in browser dev tools
- [ ] No 404s in the Network tab (every asset loads)
- [ ] All images served as WebP (originals kept but not deployed)
- [ ] Run Google PageSpeed Insights before launch — minimum score 90 desktop / 70 mobile
- [ ] Run Google Mobile-Friendly Test — must pass

## 8. Maps (N/A if no map on the site)

- [ ] Decision noted: N/A **or** map type matches spec (Leaflet counties / regional preset / Google radius)
- [ ] Vendored `shared/js/` copies present in the site folder if required
- [ ] Google Maps: no API key committed; `maps-config.js` gitignored or absent from repo
- [ ] Map container has accessible name (`aria-label` or `title`) where appropriate
- [ ] Map tested over HTTP; tiles/data load; framing / circle displays as intended

## 9. Cross-browser

Test in at least two browsers:

- [ ] Chrome (or Edge) — latest
- [ ] Firefox — latest
- [ ] Safari if on Mac — latest
- [ ] No obvious rendering differences between browsers

## 10. Links

- [ ] Every nav link works on every page
- [ ] Footer links work
- [ ] CTA buttons link somewhere sensible
- [ ] No broken internal links
- [ ] External links (if any) open in new tab with `rel="noopener"`

## 11. Forms

- [ ] Contact form labels visible and associated with inputs
- [ ] Required fields marked clearly
- [ ] Submit button works visually (even if it doesn't submit anywhere — it's a demo)
- [ ] Form validates appropriately on submit attempt
- [ ] Success state or message present (even if simulated)

## 12. Accreditation badges

- [ ] All badges use the CSS accreditation badge library (no real trademarked logos)
- [ ] Badges display correctly in their chosen locations
- [ ] Badges pass colour contrast on their background

## 13. Analytics and cookies

For a demo site (not a real client site), analytics and cookie banners are usually unnecessary. Confirm the decision:

- [ ] Decision made: analytics on/off for this demo
- [ ] Decision made: cookie banner on/off for this demo
- [ ] If either is on, it's been tested and works

## 14. Deploy config

- [ ] No local file paths hardcoded anywhere (check for `file://` or absolute Windows paths)
- [ ] No API keys or secrets committed to the repo
- [ ] `.gitignore` excludes any local clutter
- [ ] `robots.txt` present (can be simple: `User-agent: *` + `Allow: /` for demos)
- [ ] `sitemap.xml` present (optional for demos but nice to have)
- [ ] Custom 404 page present (optional but good)

## 15. Final smoke test

- [ ] Close the browser, reopen, visit the local preview, click through every page one last time
- [ ] Everything still works
- [ ] Nothing feels unfinished
- [ ] Honest gut check: *would I be proud to show this to a potential client?* — if no, go back and fix what's bothering you

---

**All boxes ticked?** Proceed to Phase 7 (Netlify deploy).

**Commit with message:** *`<site-name>`: QA complete*

Category	    Score
Performance     90
Accessibility   100
Best Practices  96
SEO             100
