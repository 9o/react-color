'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesTinycolor2 = require('../../modules/tinycolor2');

var _modulesTinycolor22 = _interopRequireDefault(_modulesTinycolor2);

module.exports = {

  simpleCheckForValidColor: function simpleCheckForValidColor(data) {
    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v'];
    var checked = 0;
    var passed = 0;
    for (var i = 0; i < keysToCheck.length; i++) {
      var letter = keysToCheck[i];
      if (data[letter]) {
        checked++;
        if (!isNaN(data[letter])) {
          passed++;
        }
      }
    }

    if (checked === passed) {
      return data;
    }
  },

  toState: function toState(data, oldHue) {
    var color = (0, _modulesTinycolor22['default'])(data);
    var hsl = color.toHsl();
    var hsv = color.toHsv();
    if (hsl.s === 0) {
      hsl.h = oldHue || 0;
      hsv.h = oldHue || 0;
    }

    return {
      hsl: hsl,
      hex: color.toHex(),
      rgb: color.toRgb(),
      hsv: hsv,
      oldHue: data.h || oldHue || hsl.h
    };
  },

  isValidHex: function isValidHex(hex) {
    return (0, _modulesTinycolor22['default'])(hex).isValid();
  }

};