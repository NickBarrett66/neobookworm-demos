/* Top Gas Heating & Plumbing Ltd — main.js (vanilla JS, no frameworks) */

/* ── FOCUS TRAP UTILITY ── */
function getFocusableWithin(root) {
  return Array.from(
    root.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

function trapFocus(modalEl, initialFocusEl) {
  var focusable = getFocusableWithin(modalEl);
  var first = initialFocusEl || focusable[0];
  var last  = focusable[focusable.length - 1];

  if (first) first.focus();

  function onKeyDown(e) {
    if (e.key !== 'Tab') return;
    if (focusable.length === 0) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
      return;
    }
    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  modalEl.addEventListener('keydown', onKeyDown);
  return function () { modalEl.removeEventListener('keydown', onKeyDown); };
}

/* ── MOBILE NAV ── */
function initMobileNav() {
  var overlay  = document.querySelector('[data-nav-overlay]');
  var openBtn  = document.querySelector('[data-nav-open]');
  var closeBtn = document.querySelector('[data-nav-close]');

  if (!overlay || !openBtn || !closeBtn) return;

  var untrap      = null;
  var lastFocused = null;

  function open() {
    lastFocused = document.activeElement;
    overlay.dataset.open = 'true';
    overlay.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    untrap = trapFocus(overlay, closeBtn);
  }

  function close() {
    overlay.dataset.open = 'false';
    overlay.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    if (untrap) untrap();
    untrap = null;
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.dataset.open === 'true') close();
  });
}

/* ── DEMO ACTION BLOCKERS ── */
function initDemoActionBlockers() {
  var message = 'This is a demo site — phone calls and form submissions are not active on this preview. ' +
    'To enquire about a real site for your business, contact NeoBookworm at neobookworm@icloud.com.';

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="tel:"][data-demo-block]');
    if (!link) return;
    e.preventDefault();
    window.alert(message);
  });

  document.addEventListener('submit', function (e) {
    var form = e.target.closest('form[data-demo-block]');
    if (!form) return;
    e.preventDefault();

    /* Show inline success state on contact page */
    var successEl = document.getElementById('form-success');
    if (successEl) {
      form.style.display = 'none';
      successEl.style.display = 'block';
      successEl.focus();
    } else {
      window.alert('Thanks — we\'ll be in touch shortly. If it\'s urgent, call us on 0117 961 2862.');
    }
  });
}

/* ── CONTACT FORM VALIDATION ── */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    /* Validation fires before the demo blocker; ensure required fields are present */
    var valid = true;
    var required = form.querySelectorAll('[required]');

    required.forEach(function (field) {
      field.setCustomValidity('');
      if (!field.value.trim()) {
        field.setCustomValidity('This field is required.');
        valid = false;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        field.setCustomValidity('Please enter a valid email address.');
        valid = false;
      }
    });

    if (!valid) {
      e.preventDefault();
      form.reportValidity();
    }
  });

  /* Clear custom validity on input */
  form.querySelectorAll('input, select, textarea').forEach(function (field) {
    field.addEventListener('input', function () {
      field.setCustomValidity('');
    });
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  initDemoActionBlockers();
  initContactForm();
});
