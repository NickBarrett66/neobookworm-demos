/**
 * Preset “regional coverage” highlights for initNeoUkCountiesMap (NeoBookworm demos).
 *
 * Vendored copy for this site build.
 */
(function (global) {
  'use strict';

  var DEFAULT_HIGHLIGHTED = [
    'Gloucestershire',
    'Wiltshire',
    'Oxfordshire',
    'Warwickshire',
    'Swindon'
  ];

  function initNeoUkRegionalCountiesMap(containerId, options) {
    if (typeof global.initNeoUkCountiesMap !== 'function') {
      throw new Error('initNeoUkRegionalCountiesMap: load uk-counties-leaflet.js first.');
    }
    options = options || {};
    var merged = Object.assign({}, options);
    if (!merged.highlighted || !merged.highlighted.length) {
      merged.highlighted = DEFAULT_HIGHLIGHTED.slice();
    }
    if (merged.fitHighlightedBounds === undefined) {
      merged.fitHighlightedBounds = true;
    }
    return global.initNeoUkCountiesMap(containerId, merged);
  }

  global.NEO_UK_REGIONAL_HIGHLIGHTS = DEFAULT_HIGHLIGHTED.slice();
  global.initNeoUkRegionalCountiesMap = initNeoUkRegionalCountiesMap;
})(typeof window !== 'undefined' ? window : this);

