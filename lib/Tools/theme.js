"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _palette = _interopRequireDefault(require("./palette"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable sort-keys */
var _default = {
  fontPrimary: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;",
  buttonColor: _palette.default['white'],
  buttonBackgroundColor: _palette.default['orient'],
  buttonHoverColor: (0, _polished.lighten)(0.1, _palette.default['orient']),
  cartridgeColor: _palette.default['white'],
  cartridgeBackgroundColor: _palette.default['orient'],
  circleBadgeBackgroundColor: _palette.default['gray2'],
  circleBadgeHoverColor: _palette.default['orient'],
  dropdownColor: _palette.default['gray5'],
  dropdownBackgroundColor: _palette.default['transparent'],
  iconColor: _palette.default['gray5'],
  iconHoverColor: _palette.default['gray4'],
  inputColor: _palette.default['gray5'],
  inputBackgroundColor: _palette.default['white'],
  inputBorderColor: _palette.default['gray2'],
  linkColor: _palette.default['gray5'],
  linkHoverColor: _palette.default['orient'],
  panelBackgroundColor: _palette.default['white'],
  panelShadowColor: _palette.default['gray1'],
  searchBarInputBackgroundColor: _palette.default['white'],
  searchBarIconBackgroundColor: _palette.default['gold'],
  searchBarUnderlinedBackgroundColor: _palette.default['transparent'],
  searchBarUnderlinedBorderColor: _palette.default['gray2'],
  sectionBackgroundColor: _palette.default['orient'],
  tableShadowColor: _palette.default['gray1'],
  tableHeaderColor: _palette.default['gray3'],
  tableCellEvenBackgroundColor: _palette.default['gray0'],
  tableCellOddBackgroundColor: _palette.default['white'],
  tabMenuBorderColor: _palette.default['gray1'],
  tabMenuBarColor: _palette.default['gold'],
  textColor: _palette.default['gray5']
  /* eslint-enable */

};
exports.default = _default;