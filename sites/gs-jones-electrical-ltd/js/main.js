/* ============================================================
   G S Jones Electrical Ltd — main.js
   Handles: mobile nav, demo modal (tel:, mailto:, form submit)
   ============================================================ */

(function () {
  'use strict';

  /* ── Demo modal copy ─────────────────────────────────────── */
  const DEMO_TEL_MSG    = 'Phone links aren\'t active on this demo. In the live site, this would call Gary directly on 07971 000 442.';
  const DEMO_MAILTO_MSG = 'Email links aren\'t active on this demo. In the live site, this would open your email app to message Gary at gjones_54@msn.com.';
  const DEMO_FORM_MSG   = 'Form submissions aren\'t active on this demo. In the live site, Gary would receive your message and respond the same day.';

  /* ── DOM refs ─────────────────────────────────────────────── */
  const modal      = document.getElementById('demo-modal');
  const modalBody  = document.getElementById('demo-modal-body');
  const modalClose = document.getElementById('demo-modal-close');
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobile-nav');
  const navClose   = document.getElementById('mobile-nav-close');

  /* ── Demo modal ───────────────────────────────────────────── */
  function openModal(message) {
    if (!modal || !modalBody) return;
    modalBody.textContent = message;
    modal.classList.add('is-open');
    modal.removeAttribute('hidden');
    if (modalClose) modalClose.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  /* ── Demo intercepts (skip when going live — add data-live-site to <body>) ─ */
  var liveSite = document.body.hasAttribute('data-live-site');

  if (!liveSite) {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(DEMO_TEL_MSG);
      });
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(DEMO_MAILTO_MSG);
      });
    });

    document.querySelectorAll('form').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var success = form.querySelector('.form-success');
        if (success) {
          success.style.display = 'block';
          var btn = form.querySelector('[type="submit"]');
          if (btn) btn.disabled = true;
          success.textContent = 'Demo site — in the live version Gary would receive this and respond the same day.';
        } else {
          openModal(DEMO_FORM_MSG);
        }
      });
    });
  }

  /* ── Mobile nav ───────────────────────────────────────────── */
  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    if (navClose) navClose.focus();
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('is-open');
    document.body.style.overflow = '';
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) hamburger.addEventListener('click', openMobileNav);
  if (navClose)  navClose.addEventListener('click', closeMobileNav);

  /* Close mobile nav when a link is clicked */
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        /* Allow tel:/mailto: intercept to run first, then close nav */
        setTimeout(closeMobileNav, 80);
      });
    });
  }

  /* ── Mark active nav link ─────────────────────────────────── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .mobile-nav__links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

})();
