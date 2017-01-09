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
// References
// https://github.com/angular/material/blob/master/src/core/services/theming/theme.palette.js
// https://material.io/guidelines/style/color.html#color-color-palette

var palette = {};

palette.register = function (name, opts) {
  palette[name] = opts;
};

palette.register('red', {
  '50': '#ffebee',
  '100': '#ffcdd2',
  '200': '#ef9a9a',
  '300': '#e57373',
  '400': '#ef5350',
  '500': '#f44336',
  '600': '#e53935',
  '700': '#d32f2f',
  '800': '#c62828',
  '900': '#b71c1c',
  'A100': '#ff8a80',
  'A200': '#ff5252',
  'A400': '#ff1744',
  'A700': '#d50000',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 300 A100',
  'contrastStrongLightColors': '400 500 600 700 A200 A400 A700'
});

palette.register('pink', {
  '50': '#fce4ec',
  '100': '#f8bbd0',
  '200': '#f48fb1',
  '300': '#f06292',
  '400': '#ec407a',
  '500': '#e91e63',
  '600': '#d81b60',
  '700': '#c2185b',
  '800': '#ad1457',
  '900': '#880e4f',
  'A100': '#ff80ab',
  'A200': '#ff4081',
  'A400': '#f50057',
  'A700': '#c51162',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 A100',
  'contrastStrongLightColors': '500 600 A200 A400 A700'
});

palette.register('purple', {
  '50': '#f3e5f5',
  '100': '#e1bee7',
  '200': '#ce93d8',
  '300': '#ba68c8',
  '400': '#ab47bc',
  '500': '#9c27b0',
  '600': '#8e24aa',
  '700': '#7b1fa2',
  '800': '#6a1b9a',
  '900': '#4a148c',
  'A100': '#ea80fc',
  'A200': '#e040fb',
  'A400': '#d500f9',
  'A700': '#aa00ff',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 A100',
  'contrastStrongLightColors': '300 400 A200 A400 A700'
});

palette.register('deep-purple', {
  '50': '#ede7f6',
  '100': '#d1c4e9',
  '200': '#b39ddb',
  '300': '#9575cd',
  '400': '#7e57c2',
  '500': '#673ab7',
  '600': '#5e35b1',
  '700': '#512da8',
  '800': '#4527a0',
  '900': '#311b92',
  'A100': '#b388ff',
  'A200': '#7c4dff',
  'A400': '#651fff',
  'A700': '#6200ea',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 A100',
  'contrastStrongLightColors': '300 400 A200'
});

palette.register('indigo', {
  '50': '#e8eaf6',
  '100': '#c5cae9',
  '200': '#9fa8da',
  '300': '#7986cb',
  '400': '#5c6bc0',
  '500': '#3f51b5',
  '600': '#3949ab',
  '700': '#303f9f',
  '800': '#283593',
  '900': '#1a237e',
  'A100': '#8c9eff',
  'A200': '#536dfe',
  'A400': '#3d5afe',
  'A700': '#304ffe',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 A100',
  'contrastStrongLightColors': '300 400 A200 A400'
});

palette.register('blue', {
  '50': '#e3f2fd',
  '100': '#bbdefb',
  '200': '#90caf9',
  '300': '#64b5f6',
  '400': '#42a5f5',
  '500': '#2196f3',
  '600': '#1e88e5',
  '700': '#1976d2',
  '800': '#1565c0',
  '900': '#0d47a1',
  'A100': '#82b1ff',
  'A200': '#448aff',
  'A400': '#2979ff',
  'A700': '#2962ff',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 300 400 A100',
  'contrastStrongLightColors': '500 600 700 A200 A400 A700'
});

palette.register('light-blue', {
  '50': '#e1f5fe',
  '100': '#b3e5fc',
  '200': '#81d4fa',
  '300': '#4fc3f7',
  '400': '#29b6f6',
  '500': '#03a9f4',
  '600': '#039be5',
  '700': '#0288d1',
  '800': '#0277bd',
  '900': '#01579b',
  'A100': '#80d8ff',
  'A200': '#40c4ff',
  'A400': '#00b0ff',
  'A700': '#0091ea',
  'contrastDefaultColor': 'dark',
  'contrastLightColors': '600 700 800 900 A700',
  'contrastStrongLightColors': '600 700 800 A700'
});

palette.register('cyan', {
  '50': '#e0f7fa',
  '100': '#b2ebf2',
  '200': '#80deea',
  '300': '#4dd0e1',
  '400': '#26c6da',
  '500': '#00bcd4',
  '600': '#00acc1',
  '700': '#0097a7',
  '800': '#00838f',
  '900': '#006064',
  'A100': '#84ffff',
  'A200': '#18ffff',
  'A400': '#00e5ff',
  'A700': '#00b8d4',
  'contrastDefaultColor': 'dark',
  'contrastLightColors': '700 800 900',
  'contrastStrongLightColors': '700 800 900'
});

palette.register('teal', {
  '50': '#e0f2f1',
  '100': '#b2dfdb',
  '200': '#80cbc4',
  '300': '#4db6ac',
  '400': '#26a69a',
  '500': '#009688',
  '600': '#00897b',
  '700': '#00796b',
  '800': '#00695c',
  '900': '#004d40',
  'A100': '#a7ffeb',
  'A200': '#64ffda',
  'A400': '#1de9b6',
  'A700': '#00bfa5',
  'contrastDefaultColor': 'dark',
  'contrastLightColors': '500 600 700 800 900',
  'contrastStrongLightColors': '500 600 700'
});

palette.register('green', {
  '50': '#e8f5e9',
  '100': '#c8e6c9',
  '200': '#a5d6a7',
  '300': '#81c784',
  '400': '#66bb6a',
  '500': '#4caf50',
  '600': '#43a047',
  '700': '#388e3c',
  '800': '#2e7d32',
  '900': '#1b5e20',
  'A100': '#b9f6ca',
  'A200': '#69f0ae',
  'A400': '#00e676',
  'A700': '#00c853',
  'contrastDefaultColor': 'dark',
  'contrastLightColors': '500 600 700 800 900',
  'contrastStrongLightColors': '500 600 700'
});

palette.register('light-green', {
  '50': '#f1f8e9',
  '100': '#dcedc8',
  '200': '#c5e1a5',
  '300': '#aed581',
  '400': '#9ccc65',
  '500': '#8bc34a',
  '600': '#7cb342',
  '700': '#689f38',
  '800': '#558b2f',
  '900': '#33691e',
  'A100': '#ccff90',
  'A200': '#b2ff59',
  'A400': '#76ff03',
  'A700': '#64dd17',
  'contrastDefaultColor': 'dark',
  'contrastLightColors': '700 800 900',
  'contrastStrongLightColors': '700 800 900'
});

palette.register('lime', {
  '50': '#f9fbe7',
  '100': '#f0f4c3',
  '200': '#e6ee9c',
  '300': '#dce775',
  '400': '#d4e157',
  '500': '#cddc39',
  '600': '#c0ca33',
  '700': '#afb42b',
  '800': '#9e9d24',
  '900': '#827717',
  'A100': '#f4ff81',
  'A200': '#eeff41',
  'A400': '#c6ff00',
  'A700': '#aeea00',
  'contrastDefaultColor': 'dark',
  'contrastLightColors': '900',
  'contrastStrongLightColors': '900'
});

palette.register('yellow', {
  '50': '#fffde7',
  '100': '#fff9c4',
  '200': '#fff59d',
  '300': '#fff176',
  '400': '#ffee58',
  '500': '#ffeb3b',
  '600': '#fdd835',
  '700': '#fbc02d',
  '800': '#f9a825',
  '900': '#f57f17',
  'A100': '#ffff8d',
  'A200': '#ffff00',
  'A400': '#ffea00',
  'A700': '#ffd600',
  'contrastDefaultColor': 'dark'
});

palette.register('amber', {
  '50': '#fff8e1',
  '100': '#ffecb3',
  '200': '#ffe082',
  '300': '#ffd54f',
  '400': '#ffca28',
  '500': '#ffc107',
  '600': '#ffb300',
  '700': '#ffa000',
  '800': '#ff8f00',
  '900': '#ff6f00',
  'A100': '#ffe57f',
  'A200': '#ffd740',
  'A400': '#ffc400',
  'A700': '#ffab00',
  'contrastDefaultColor': 'dark'
});

palette.register('orange', {
  '50': '#fff3e0',
  '100': '#ffe0b2',
  '200': '#ffcc80',
  '300': '#ffb74d',
  '400': '#ffa726',
  '500': '#ff9800',
  '600': '#fb8c00',
  '700': '#f57c00',
  '800': '#ef6c00',
  '900': '#e65100',
  'A100': '#ffd180',
  'A200': '#ffab40',
  'A400': '#ff9100',
  'A700': '#ff6d00',
  'contrastDefaultColor': 'dark',
  'contrastLightColors': '800 900',
  'contrastStrongLightColors': '800 900'
});

palette.register('deep-orange', {
  '50': '#fbe9e7',
  '100': '#ffccbc',
  '200': '#ffab91',
  '300': '#ff8a65',
  '400': '#ff7043',
  '500': '#ff5722',
  '600': '#f4511e',
  '700': '#e64a19',
  '800': '#d84315',
  '900': '#bf360c',
  'A100': '#ff9e80',
  'A200': '#ff6e40',
  'A400': '#ff3d00',
  'A700': '#dd2c00',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 300 400 A100 A200',
  'contrastStrongLightColors': '500 600 700 800 900 A400 A700'
});

palette.register('brown', {
  '50': '#efebe9',
  '100': '#d7ccc8',
  '200': '#bcaaa4',
  '300': '#a1887f',
  '400': '#8d6e63',
  '500': '#795548',
  '600': '#6d4c41',
  '700': '#5d4037',
  '800': '#4e342e',
  '900': '#3e2723',
  'A100': '#d7ccc8',
  'A200': '#bcaaa4',
  'A400': '#8d6e63',
  'A700': '#5d4037',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 A100 A200',
  'contrastStrongLightColors': '300 400'
});

palette.register('grey', {
  '50': '#fafafa',
  '100': '#f5f5f5',
  '200': '#eeeeee',
  '300': '#e0e0e0',
  '400': '#bdbdbd',
  '500': '#9e9e9e',
  '600': '#757575',
  '700': '#616161',
  '800': '#424242',
  '900': '#212121',
  'A100': '#ffffff',
  'A200': '#000000',
  'A400': '#303030',
  'A700': '#616161',
  'contrastDefaultColor': 'dark',
  'contrastLightColors': '600 700 800 900 A200 A400 A700'
});

palette.register('blue-grey', {
  '50': '#eceff1',
  '100': '#cfd8dc',
  '200': '#b0bec5',
  '300': '#90a4ae',
  '400': '#78909c',
  '500': '#607d8b',
  '600': '#546e7a',
  '700': '#455a64',
  '800': '#37474f',
  '900': '#263238',
  'A100': '#cfd8dc',
  'A200': '#b0bec5',
  'A400': '#78909c',
  'A700': '#455a64',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': '50 100 200 300 A100 A200',
  'contrastStrongLightColors': '400 500 700'
});

exports.default = palette;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _palette = require('./palette');

var _palette2 = _interopRequireDefault(_palette);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var THEME_CSS = ".md-THEME_NAME-theme .md-button,\n.md-button.md-THEME_NAME-theme {\n  background-color: '{primary-color}';\n  color: '{contrast-primary-color}'; }\n\n.md-THEME_NAME-theme body,\nbody.md-THEME_NAME-theme {\n  background-color: '{background-color}';\n  color: '{background-A200}'; }\n",
    __THEMES = {};

var themeTemplate = function themeTemplate(styles, theme) {
  return styles.replace(/THEME_NAME/g, theme.name).replace(/'{([ -\w]*)}'/gi, function (match, expr) {
    var $expr = expr.split('-');
    var colorType,
        color,
        opacity,
        contrast = false;

    if ($expr[0] == "contrast") {
      $expr.splice(0, 1);
      contrast = true;
    }

    colorType = $expr[0];
    color = $expr[1];
    opacity = $expr[2];

    switch (colorType) {
      case 'primary':
        var primary = theme._primary,
            darkColors = primary.contrastDarkColors,
            lightColors = primary.contrastLightColors,
            strongLightColors = primary.contrastStrongLightColors;

        darkColors = darkColors ? darkColors.split(' ') : [];
        lightColors = lightColors ? lightColors.split(' ') : [];
        strongLightColors = strongLightColors ? strongLightColors.split(' ') : [];

        color = color == 'color' ? '500' : color;

        if (contrast) {
          if (~darkColors.indexOf(color) || primary.contrastDefaultColor == 'dark') {
            color = "rgba(0,0,0, 0.87)";
          } else if (~lightColors.indexOf(color) || primary.contrastDefaultColor == 'light') {
            color = "rgba(255,255,255, 0.87)";
          } else {
            color = "rgba(0,0,0, 0.87)";
          }
        } else {
          color = primary[color];
          if (opacity) {
            color = _util2.default.hex2rgba(color, opacity);
          }
        }

        return color;

        break;
      case 'accent':

        color = theme._accent[color];
        if (opacity) {
          color = _util2.default.hex2rgba(color, opacity);
        }
        return color;

        break;
      case 'warn':

        color = theme._warn[color];
        if (opacity) {
          color = _util2.default.hex2rgba(color, opacity);
        }
        return color;

        break;
      default:
        return '#c3c3c3';
    }
  });
};

var Theme = function () {
  function Theme(name) {
    _classCallCheck(this, Theme);

    __THEMES[name] = this;
    this.name = name;

    this.primaryPalette('blue');
    this.accentPalette('pink');
    this.warnPalette('red');
    this.backgroundPalette('grey');
  }

  _createClass(Theme, [{
    key: 'primaryPalette',
    value: function primaryPalette(paletteName) {
      var colors = paletteName instanceof Object ? paletteName : _palette2.default[paletteName];
      this._primary = _extends({}, colors);
      return this;
    }
  }, {
    key: 'accentPalette',
    value: function accentPalette(paletteName) {
      var colors = paletteName instanceof Object ? paletteName : _palette2.default[paletteName];

      this._accent = _extends({}, colors);
      return this;
    }
  }, {
    key: 'warnPalette',
    value: function warnPalette(paletteName) {
      var colors = paletteName instanceof Object ? paletteName : _palette2.default[paletteName];

      this._warn = _extends({}, colors);
      return this;
    }
  }, {
    key: 'backgroundPalette',
    value: function backgroundPalette(paletteName) {
      var colors = paletteName instanceof Object ? paletteName : _palette2.default[paletteName];

      this._background = _extends({}, colors);
      return this;
    }
  }, {
    key: 'mount',
    value: function mount() {
      var style = document.createElement('style');
      style.setAttribute("theme", this.name);
      style.type = 'text/css';
      style.innerHTML = themeTemplate(THEME_CSS, this);
      document.head.appendChild(style);
      return this;
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      var style = document.querySelector('style[theme=' + this.name + ']');
      style.parentNode.removeChild(style);
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

},{"./palette":2,"./util":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {};

util.hex2rgba = function (hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
};

exports.default = util;

},{}]},{},[1]);
