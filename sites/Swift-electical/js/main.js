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
