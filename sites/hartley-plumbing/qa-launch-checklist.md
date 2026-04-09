# QA and Launch Checklist — `[Business Name]`

Pre-launch gate. Every item must be ticked or explicitly marked N/A with a reason before a demo can go live. Referenced by Phase 6 of `PROCESS.md`.

**How to use:** work through in order. If you find a problem, stop, fix it, re-test, then tick. Do not deploy until every item is resolved.

---

## 1. Content

- [x] Every page has been proofread end-to-end
- [x] No placeholder text remains (no "Lorem ipsum", no `[TODO]`, no unfilled template fields)
- [x] All copy matches the tone described in the site brief
- [x] Business name spelled consistently everywhere
- [x] Owner name(s) spelled consistently everywhere
- [x] Phone number consistent across every page
- [x] Email address consistent across every page
- [x] Address / service area consistent across every page
- [x] Hours of operation consistent across every page

## 2. HTML quality

- [x] One `<h1>` per page
- [x] Heading hierarchy sensible (no skipping from `h1` to `h4`)
- [x] Every `<img>` has an `alt` attribute (descriptive, or `alt=""` for decorative)
- [x] Every form input has a `<label>`
- [x] `lang="en"` on `<html>`
- [x] Viewport meta tag on every page
- [x] No inline styles (all styling in `css/styles.css`)

## 3. Meta tags and SEO basics

For every page:

- [x] `<title>` is unique and descriptive (not the same on every page)
- [x] `<meta name="description">` is unique and readable
- [x] `og:title` set
- [x] `og:description` set
- [x] `og:image` points at a real image
- [x] `og:url` placeholder present
- [x] `og:type` set (`website` for home, `article` or `website` for others)
- [ ] Favicon displays in browser tab

## 4. Accessibility

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

## 5. Responsive design

Test at each of these widths. Every item must pass at every width.

Widths to test: **320px, 375px, 414px, 768px, 1024px, 1440px, 1920px**

- [ ] No horizontal scrolling at any width
- [ ] Text is readable at every width (minimum ~16px on mobile)
- [ ] Images scale without overflow or distortion
- [ ] Navigation works at every width (mobile menu below breakpoint, full nav above)
- [ ] CTAs remain prominent and tappable on mobile (min 44×44px touch target)
- [ ] Gallery grid reflows sensibly across breakpoints
- [ ] Footer layout works at every width

## 6. Performance basics

- [x] All images optimised (spot-check file sizes in `images/` folder)
- [ ] `width` and `height` attributes on all `<img>` tags (prevents layout shift)
- [ ] Google Fonts loaded with `preconnect`
- [ ] No unused CSS obviously bloating `styles.css`
- [ ] No console errors in browser dev tools
- [ ] No 404s in the Network tab (every asset loads)

## 7. Cross-browser

Test in at least two browsers:

- [x] Chrome (or Edge) — latest
- [ ] Firefox — latest
- [ ] Safari if on Mac — latest
- [ ] No obvious rendering differences between browsers

## 8. Links

- [x] Every nav link works on every page
- [x] Footer links work
- [x] CTA buttons link somewhere sensible
- [x] No broken internal links
- [x] External links (if any) open in new tab with `rel="noopener"`

## 9. Forms

- [x] Contact form labels visible and associated with inputs
- [x] Required fields marked clearly
- [x] Submit button works visually (even if it doesn't submit anywhere — it's a demo)
- [x] Form validates appropriately on submit attempt
- [x] Success state or message present (even if simulated)

## 10. Accreditation badges

- [ ] All badges use the CSS accreditation badge library (no real trademarked logos)
- [ ] Badges display correctly in their chosen locations
- [ ] Badges pass colour contrast on their background

## 11. Analytics and cookies

For a demo site (not a real client site), analytics and cookie banners are usually unnecessary. Confirm the decision:

- [ ] Decision made: analytics on for this demo
- [ ] Decision made: cookie banner on for this demo
- [ ] If either is on, it's been tested and works

## 12. Deploy config

- [ ] No local file paths hardcoded anywhere (check for `file://` or absolute Windows paths)
- [ ] No API keys or secrets committed to the repo
- [ ] `.gitignore` excludes any local clutter
- [ ] `robots.txt` present (can be simple: `User-agent: *` + `Allow: /` for demos)
- [ ] `sitemap.xml` present (optional for demos but nice to have)
- [ ] Custom 404 page present (optional but good)

## 13. Final smoke test

- [ ] Close the browser, reopen, visit the local preview, click through every page one last time
- [ ] Everything still works
- [ ] Nothing feels unfinished
- [ ] Honest gut check: *would I be proud to show this to a potential client?* — if no, go back and fix what's bothering you

---

**All boxes ticked?** Proceed to Phase 7 (Netlify deploy).

**Commit with message:** *`<site-name>`: QA complete*
