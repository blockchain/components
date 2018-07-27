function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { injectGlobal } from 'styled-components';
import IcomoonWoff from './fonts/Icomoon.woff';

var FontFace = function FontFace(name, woff, weight) {
  return "\n    @font-face {\n      font-family: '".concat(name, "';\n      src: url(").concat(woff, ");\n      font-weight: ").concat(weight, ";\n      font-style: normal;\n      font-stretch: normal;\n    }\n  ");
};

var Icomoon = FontFace('icomoon', IcomoonWoff, 'normal');
injectGlobal(_templateObject(), Icomoon);