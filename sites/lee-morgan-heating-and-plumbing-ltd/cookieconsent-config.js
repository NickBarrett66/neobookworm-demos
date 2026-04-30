// cookieconsent-config.js
// lee-morgan-heating-njb-demo — CookieConsent v3 configuration
// Orestbida CookieConsent v3.1.0 — self-hosted in /vendor/cookieconsent/
// Run AFTER GA4 snippet has been added (Prompt 1)

import '/vendor/cookieconsent/cookieconsent.umd.js';

CookieConsent.run({
  cookie: {
    name: 'nb_cookie_consent',
    expiresAfterDays: 182,
    sameSite: 'Lax',
  },

  guiOptions: {
    consentModal: {
      layout: 'bar',
      position: 'bottom',
      equalWeightButtons: false,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      enabled: false,
      autoClear: {
        cookies: [{ name: /^_ga/ }, { name: '_gid' }],
      },
    },
  },

  onConsent: function () {
    if (CookieConsent.acceptedCategory('analytics')) {
      if (typeof gtag === 'function') {
        gtag('consent', 'update', { analytics_storage: 'granted' });
      }
    }
  },

  onChange: function ({ changedCategories }) {
    if (changedCategories.includes('analytics')) {
      if (CookieConsent.acceptedCategory('analytics')) {
        if (typeof gtag === 'function') {
          gtag('consent', 'update', { analytics_storage: 'granted' });
        }
      } else {
        if (typeof gtag === 'function') {
          gtag('consent', 'update', { analytics_storage: 'denied' });
        }
      }
    }
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description:
            'We use Google Analytics to understand how people use this site. ' +
            'No personal details are collected. You can accept or decline below.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Decline',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="privacy.html">Privacy policy</a>',
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Decline all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'How we use cookies',
              description:
                'Cookies are small files stored on your device. We only use them ' +
                'to understand how visitors use this site — never for advertising.',
            },
            {
              title: 'Essential cookies',
              description:
                'These cookies are needed for the site to work correctly ' +
                'and cannot be turned off.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics cookies',
              description:
                'Google Analytics helps us see how many people visit the site ' +
                'and which pages are most useful. All data is anonymous.',
              linkedCategory: 'analytics',
            },
          ],
        },
      },
    },
  },
});

