/* Lee Morgan Heating & Plumbing Ltd — main JS (vanilla) */

const DEMO_BANNER_KEY = "nbw_demoBannerDismissed_v1";

function setBannerHeightPx(px) {
  document.documentElement.style.setProperty("--banner-h", `${px}px`);
}

function getPathBasename() {
  const path = window.location.pathname;
  const last = path.split("/").filter(Boolean).pop() || "index.html";
  return last;
}

function initDemoBanner() {
  const banner = document.querySelector("[data-demo-banner]");
  if (!banner) return;

  const dismissed = localStorage.getItem(DEMO_BANNER_KEY) === "1";
  if (dismissed) {
    banner.classList.add("is-dismissed");
    setBannerHeightPx(0);
    return;
  }

  setBannerHeightPx(banner.offsetHeight || 52);

  const closeBtn = banner.querySelector("[data-banner-close]");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      localStorage.setItem(DEMO_BANNER_KEY, "1");
      banner.classList.add("is-dismissed");
      setBannerHeightPx(0);
    });
  }

  // Re-measure on resize (wrap changes height)
  window.addEventListener(
    "resize",
    () => {
      if (!banner.classList.contains("is-dismissed")) {
        setBannerHeightPx(banner.offsetHeight || 52);
      }
    },
    { passive: true }
  );
}

function initHeaderShadow() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 4);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initNavActive() {
  const basename = getPathBasename();
  const links = document.querySelectorAll("[data-nav] a[href]");

  links.forEach((a) => {
    const href = a.getAttribute("href") || "";
    const hrefBase = href.split("/").filter(Boolean).pop();
    const isHome = basename === "" || basename === "index.html";

    const match =
      (isHome && (hrefBase === "index.html" || href === "/")) ||
      (!!hrefBase && hrefBase === basename);

    if (match) a.classList.add("nav__link--active");
  });
}

function initNavDrawer() {
  const openBtn = document.querySelector("[data-nav-open]");
  const closeBtn = document.querySelector("[data-nav-close]");
  const overlay = document.querySelector("[data-nav-overlay]");
  const drawer = document.querySelector("[data-nav-drawer]");
  if (!openBtn || !closeBtn || !overlay || !drawer) return;

  const open = () => {
    document.body.classList.add("nav-open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    closeBtn.focus();
  };
  const close = () => {
    document.body.classList.remove("nav-open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    openBtn.focus();
  };

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);

  drawer.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest("a[href]")) close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      close();
    }
  });
}

function initToast() {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return null;

  let t = null;
  const show = (title, msg) => {
    const titleEl = toast.querySelector("[data-toast-title]");
    const msgEl = toast.querySelector("[data-toast-msg]");
    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = msg;

    toast.hidden = false;
    clearTimeout(t);
    t = setTimeout(() => {
      toast.hidden = true;
    }, 5200);
  };

  return { show };
}

function initDemoBlockedActions() {
  const toast = initToast();
  if (!toast) return;

  // Block tel: links across the demo.
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const link = target.closest("a[href^='tel:']");
    if (!link) return;

    e.preventDefault();
    const display = link.textContent?.trim() || "this number";
    toast.show("Demo site", `Calling is disabled here. On a live site, this would call ${display}.`);
  });

  // Optional: block demo forms if they opt in via data attribute.
  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!form.hasAttribute("data-demo-block-submit")) return;

    e.preventDefault();
    toast.show("Demo site", "This form doesn’t send anywhere in the demo. On a live site, it would email Lee.");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initDemoBanner();
  initHeaderShadow();
  initNavActive();
  initNavDrawer();
  initDemoBlockedActions();
});
