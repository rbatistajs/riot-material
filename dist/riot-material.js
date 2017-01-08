'use strict';

var mdComponent = {
  init: function init() {
    var tagName = riot.util.tags.getTagName(this.root);
    this.root.classList.add(tagName);
    this.mixin('$mdTheme');
  }
};

riot.mixin('$mdComponent', mdComponent);
'use strict';

riot.tag2('md-button', '<yield></yield>', '', '', function (opts) {
    this.mixin('$mdComponent');
});
'use strict';

var mdTheme = {
  init: function init() {
    if (this.opts.mdTheme) {
      this.root.classList.add('md-' + this.opts.mdTheme + '-theme');
    }
  }
};

riot.mixin('$mdTheme', mdTheme);
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _palette = require('./scripts/palette');

var _palette2 = _interopRequireDefault(_palette);

var _theme = require('./scripts/theme');

var _theme2 = _interopRequireDefault(_theme);

var _util = require('./scripts/util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var core = { pallete: _palette2.default, theme: _theme2.default, util: _util2.default };

riot.material = core;

},{"./scripts/palette":2,"./scripts/theme":3,"./scripts/util":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var palette = {};

palette.register = function (name, opts) {
  palette[name] = opts;
};

palette.register('blue', {
  '50': '#E3F2FD',
  '100': '#BBDEFB',
  '200': '#90CAF9',
  '300': '#64B5F6',
  '400': '#42A5F5',
  '500': '#2196F3',
  '600': '#1E88E5',
  '700': '#1976D2',
  '800': '#1565C0',
  '900': '#0D47A1'
});

exports.default = palette;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _palette = require('./palette');

var _palette2 = _interopRequireDefault(_palette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var THEME_STYLES = ".md-THEME_NAME-theme .md-button,\n.md-button.md-THEME_NAME-theme {\n  color: '{primary-color}'; }\n",
    __THEMES = {};

var themeTemplate = function themeTemplate(styles, theme) {
  return styles.replace(/THEME_NAME/g, theme.name).replace(/'{primary-color}'/gi, theme._primary.default || theme._primary['500']);
};

var Theme = function () {
  function Theme(name) {
    _classCallCheck(this, Theme);

    __THEMES[name] = this;
    this.name = name;

    this.primaryPalette('blue');
    this.accentPalette('blue');
    this.warnPalette('blue');
  }

  _createClass(Theme, [{
    key: 'primaryPalette',
    value: function primaryPalette(paletteName) {
      this._primary = _palette2.default[paletteName];
      return this;
    }
  }, {
    key: 'accentPalette',
    value: function accentPalette(paletteName) {
      this._accent = _palette2.default[paletteName];
      return this;
    }
  }, {
    key: 'warnPalette',
    value: function warnPalette(paletteName) {
      this._warn = _palette2.default[paletteName];
      return this;
    }
  }, {
    key: 'mount',
    value: function mount() {
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = themeTemplate(THEME_STYLES, this);
      style.setAttribute("theme", this.name);
      document.head.appendChild(style);
      return this;
    }
  }]);

  return Theme;
}();

function theme(name) {
  return new Theme(name);
}

theme.default = '';
theme.setDefault = function (themeName) {
  document.documentElement.classList.remove('md-' + theme.default + '-theme');
  document.documentElement.classList.add('md-' + themeName + '-theme');
  theme.default = themeName;
};

theme('default').primaryPalette('blue').mount();

theme.setDefault('default');

exports.default = theme;

},{"./palette":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {};

exports.default = util;

},{}]},{},[1]);
