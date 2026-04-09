(() => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');

  if (!header || !nav || !toggle) return;

  const openNav = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  toggle.addEventListener('click', () => {
    if (isOpen()) closeNav();
    else openNav();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) closeNav();
  });

  document.addEventListener('click', (e) => {
    if (!isOpen()) return;
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (header.contains(target)) return;
    closeNav();
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 48rem)').matches) closeNav();
  });
})();

(() => {
  const root = document.querySelector('[data-gallery]');
  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImage = document.querySelector('[data-lightbox-image]');
  const lightboxCaption = document.querySelector('[data-lightbox-caption]');
  const closeEls = document.querySelectorAll('[data-lightbox-close]');
  const prevBtn = document.querySelector('[data-lightbox-prev]');
  const nextBtn = document.querySelector('[data-lightbox-next]');

  if (!root || !lightbox || !(lightboxImage instanceof HTMLImageElement) || !lightboxCaption || !prevBtn || !nextBtn) {
    return;
  }

  const items = Array.from(root.querySelectorAll('[data-gallery-item]'));
  if (!items.length) return;

  let activeIndex = 0;
  let lastFocused = null;

  const isOpen = () => !lightbox.hasAttribute('hidden');

  const setActive = (index) => {
    const normalized = ((index % items.length) + items.length) % items.length;
    activeIndex = normalized;

    const el = items[activeIndex];
    if (!(el instanceof HTMLElement)) return;

    const src = el.getAttribute('data-src') || '';
    const caption = el.getAttribute('data-caption') || '';

    lightboxImage.src = src;
    lightboxImage.alt = caption ? caption : '';
    lightboxCaption.textContent = caption;
  };

  const open = (index) => {
    lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActive(index);
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    nextBtn.focus();
  };

  const close = () => {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
    lightboxImage.src = '';
    lightboxCaption.textContent = '';
    if (lastFocused) lastFocused.focus();
  };

  items.forEach((btn, index) => {
    btn.addEventListener('click', () => open(index));
  });

  prevBtn.addEventListener('click', () => setActive(activeIndex - 1));
  nextBtn.addEventListener('click', () => setActive(activeIndex + 1));

  closeEls.forEach((el) => {
    el.addEventListener('click', () => {
      if (isOpen()) close();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (!isOpen()) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActive(activeIndex - 1);
      return;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActive(activeIndex + 1);
    }
  });
})();
