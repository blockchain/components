function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { injectGlobal } from 'styled-components';
import MontserratBlackOtf from './fonts/Montserrat-Black.otf';
import MontserratBoldOtf from './fonts/Montserrat-Bold.otf';
import MontserratExtraBoldOtf from './fonts/Montserrat-ExtraBold.otf';
import MontserratExtraLightOtf from './fonts/Montserrat-ExtraLight.otf';
import MontserratLightOtf from './fonts/Montserrat-Light.otf';
import MontserratMediumOtf from './fonts/Montserrat-Medium.otf';
import MontserratRegularOtf from './fonts/Montserrat-Regular.otf';
import MontserratSemiBoldOtf from './fonts/Montserrat-SemiBold.otf';
import MontserratThinOtf from './fonts/Montserrat-Thin.otf';

var FontFace = function FontFace(name, otf, weight) {
  return "\n  @font-face {\n    font-family: '".concat(name, "';\n    src: url('").concat(otf, "') format('opentype'),\n    font-weight: ").concat(weight, ";\n    font-style: normal;\n    font-stretch: normal;\n  }\n");
};

var MontserratThin = FontFace('Montserrat', MontserratThinOtf, '100');
var MontserratExtraLight = FontFace('Montserrat', MontserratExtraLightOtf, '200');
var MontserratLight = FontFace('Montserrat', MontserratLightOtf, '300');
var MontserratRegular = FontFace('Montserrat', MontserratRegularOtf, '400');
var MontserratMedium = FontFace('Montserrat', MontserratMediumOtf, '500');
var MontserratSemiBold = FontFace('Montserrat', MontserratSemiBoldOtf, '600');
var MontserratExtraBold = FontFace('Montserrat', MontserratExtraBoldOtf, '800');
var MontserratBold = FontFace('Montserrat', MontserratBoldOtf, '700');
var MontserratBlack = FontFace('Montserrat', MontserratBlackOtf, '900');
injectGlobal(_templateObject(), MontserratThin, MontserratExtraLight, MontserratLight, MontserratMedium, MontserratRegular, MontserratSemiBold, MontserratExtraBold, MontserratBold, MontserratBlack);