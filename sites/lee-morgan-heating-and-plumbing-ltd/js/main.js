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

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function setBa(slider, pct) {
  slider.style.setProperty("--ba", `${pct}%`);
}

function getBaPct(slider) {
  const raw = getComputedStyle(slider).getPropertyValue("--ba").trim();
  const num = Number.parseFloat(raw.replace("%", ""));
  return Number.isFinite(num) ? num : 55;
}

function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll("[data-ba-slider]");
  if (!sliders.length) return;

  sliders.forEach((slider) => {
    if (!(slider instanceof HTMLElement)) return;
    const handle = slider.querySelector("[data-ba-handle]");
    if (!(handle instanceof HTMLElement)) return;

    // Default
    setBa(slider, clamp(getBaPct(slider), 10, 90));

    const updateFromClientX = (clientX) => {
      const rect = slider.getBoundingClientRect();
      const x = clamp(clientX - rect.left, rect.width * 0.1, rect.width * 0.9);
      const pct = (x / rect.width) * 100;
      setBa(slider, pct);
    };

    let dragging = false;

    const onPointerDown = (e) => {
      dragging = true;
      slider.setPointerCapture?.(e.pointerId);
      updateFromClientX(e.clientX);
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      updateFromClientX(e.clientX);
    };
    const onPointerUp = () => {
      dragging = false;
    };

    // Drag anywhere in slider
    slider.addEventListener("pointerdown", onPointerDown);
    slider.addEventListener("pointermove", onPointerMove);
    slider.addEventListener("pointerup", onPointerUp);
    slider.addEventListener("pointercancel", onPointerUp);

    // Keyboard
    handle.addEventListener("keydown", (e) => {
      const step = e.shiftKey ? 10 : 2;
      const current = clamp(getBaPct(slider), 10, 90);
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setBa(slider, clamp(current - step, 10, 90));
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setBa(slider, clamp(current + step, 10, 90));
      }
    });
  });
}

function initLightbox() {
  const root = document.querySelector("[data-lightbox]");
  if (!(root instanceof HTMLElement)) return;

  const overlay = root.querySelector("[data-lightbox-overlay]");
  const closeBtn = root.querySelector("[data-lightbox-close]");
  const img = root.querySelector("[data-lightbox-img]");
  if (!(overlay instanceof HTMLElement)) return;
  if (!(closeBtn instanceof HTMLElement)) return;
  if (!(img instanceof HTMLImageElement)) return;

  let lastFocus = null;

  const open = (src, alt) => {
    lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    img.src = src;
    img.alt = alt || "";
    root.hidden = false;
    root.setAttribute("aria-hidden", "false");
    closeBtn.focus();
  };

  const close = () => {
    root.hidden = true;
    root.setAttribute("aria-hidden", "true");
    img.src = "";
    img.alt = "";
    lastFocus?.focus?.();
  };

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const btn = target.closest("[data-lightbox-btn]");
    if (!(btn instanceof HTMLElement)) return;

    const src = btn.getAttribute("data-lightbox-src");
    if (!src) return;
    const alt = btn.getAttribute("data-lightbox-alt") || "";
    open(src, alt);
  });

  overlay.addEventListener("click", close);
  closeBtn.addEventListener("click", close);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !root.hidden) close();
  });
}

function initContactSentMessage() {
  const el = document.querySelector("[data-form-success]");
  if (!(el instanceof HTMLElement)) return;
  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") === "1") {
    el.hidden = false;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initDemoBanner();
  initHeaderShadow();
  initNavActive();
  initNavDrawer();
  initDemoBlockedActions();
  initBeforeAfterSliders();
  initLightbox();
  initContactSentMessage();
});
