(() => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) close();
    else open();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (!isOpen) return;
    if (nav.contains(target) || toggle.contains(target)) return;
    close();
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 900px)").matches) close();
  });
})();

(() => {
  const form = document.querySelector("[data-contact-form]");
  if (!(form instanceof HTMLFormElement)) return;

  const success = form.querySelector("[data-contact-success]");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    if (success instanceof HTMLElement) {
      success.hidden = false;
      success.focus();
    }

    form.reset();
  });
})();

(() => {
  const overlay = document.querySelector("[data-lightbox]");
  if (!(overlay instanceof HTMLElement)) return;

  const imgEl = overlay.querySelector("[data-lightbox-img]");
  const captionEl = overlay.querySelector("[data-lightbox-caption]");
  const closeEls = overlay.querySelectorAll("[data-lightbox-close]");
  const prevBtn = overlay.querySelector("[data-lightbox-prev]");
  const nextBtn = overlay.querySelector("[data-lightbox-next]");

  if (!(imgEl instanceof HTMLImageElement)) return;

  const links = Array.from(document.querySelectorAll("a[data-lightbox]")).filter(
    (a) => a instanceof HTMLAnchorElement && a.getAttribute("href")?.includes("images/"),
  );

  let index = -1;
  let lastActive = null;

  const setIndex = (i) => {
    index = (i + links.length) % links.length;
    const a = links[index];
    const img = a.querySelector("img");
    const href = a.getAttribute("href") || "";
    imgEl.src = href;
    imgEl.alt = img instanceof HTMLImageElement ? img.alt : "";
    if (captionEl instanceof HTMLElement) {
      captionEl.textContent = img instanceof HTMLImageElement ? img.alt : "";
    }
  };

  const open = (i) => {
    if (!links.length) return;
    lastActive = document.activeElement;
    overlay.hidden = false;
    document.documentElement.style.overflow = "hidden";
    setIndex(i);
    const closeBtn = overlay.querySelector("[data-lightbox-close]");
    if (closeBtn instanceof HTMLElement) closeBtn.focus();
  };

  const close = () => {
    overlay.hidden = true;
    document.documentElement.style.overflow = "";
    imgEl.removeAttribute("src");
    if (lastActive instanceof HTMLElement) lastActive.focus();
  };

  links.forEach((a, i) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      open(i);
    });
  });

  closeEls.forEach((el) => {
    el.addEventListener("click", () => close());
  });

  prevBtn?.addEventListener("click", () => setIndex(index - 1));
  nextBtn?.addEventListener("click", () => setIndex(index + 1));

  document.addEventListener("keydown", (e) => {
    if (overlay.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") setIndex(index - 1);
    if (e.key === "ArrowRight") setIndex(index + 1);
  });
})();
