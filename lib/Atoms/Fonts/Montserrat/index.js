"use strict";

var _styledComponents = require("styled-components");

var _MontserratBlack = _interopRequireDefault(require("./fonts/Montserrat-Black.otf"));

var _MontserratBold = _interopRequireDefault(require("./fonts/Montserrat-Bold.otf"));

var _MontserratExtraBold = _interopRequireDefault(require("./fonts/Montserrat-ExtraBold.otf"));

var _MontserratExtraLight = _interopRequireDefault(require("./fonts/Montserrat-ExtraLight.otf"));

var _MontserratLight = _interopRequireDefault(require("./fonts/Montserrat-Light.otf"));

var _MontserratMedium = _interopRequireDefault(require("./fonts/Montserrat-Medium.otf"));

var _MontserratRegular = _interopRequireDefault(require("./fonts/Montserrat-Regular.otf"));

var _MontserratSemiBold = _interopRequireDefault(require("./fonts/Montserrat-SemiBold.otf"));

var _MontserratThin = _interopRequireDefault(require("./fonts/Montserrat-Thin.otf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FontFace = function FontFace(name, otf, weight) {
  return "\n  @font-face {\n    font-family: '".concat(name, "';\n    src: url('").concat(otf, "') format('opentype'),\n    font-weight: ").concat(weight, ";\n    font-style: normal;\n    font-stretch: normal;\n  }\n");
};

var MontserratThin = FontFace('Montserrat', _MontserratThin.default, '100');
var MontserratExtraLight = FontFace('Montserrat', _MontserratExtraLight.default, '200');
var MontserratLight = FontFace('Montserrat', _MontserratLight.default, '300');
var MontserratRegular = FontFace('Montserrat', _MontserratRegular.default, '400');
var MontserratMedium = FontFace('Montserrat', _MontserratMedium.default, '500');
var MontserratSemiBold = FontFace('Montserrat', _MontserratSemiBold.default, '600');
var MontserratExtraBold = FontFace('Montserrat', _MontserratExtraBold.default, '800');
var MontserratBold = FontFace('Montserrat', _MontserratBold.default, '700');
var MontserratBlack = FontFace('Montserrat', _MontserratBlack.default, '900');
(0, _styledComponents.injectGlobal)(_templateObject(), MontserratThin, MontserratExtraLight, MontserratLight, MontserratMedium, MontserratRegular, MontserratSemiBold, MontserratExtraBold, MontserratBold, MontserratBlack);