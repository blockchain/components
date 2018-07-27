"use strict";

var _styledComponents = require("styled-components");

var _Icomoon = _interopRequireDefault(require("./fonts/Icomoon.woff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FontFace = function FontFace(name, woff, weight) {
  return "\n    @font-face {\n      font-family: '".concat(name, "';\n      src: url(").concat(woff, ");\n      font-weight: ").concat(weight, ";\n      font-style: normal;\n      font-stretch: normal;\n    }\n  ");
};

var Icomoon = FontFace('icomoon', _Icomoon.default, 'normal');
(0, _styledComponents.injectGlobal)(_templateObject(), Icomoon);