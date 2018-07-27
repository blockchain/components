function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import weights from '@ibm/plex/scripts/data/weights';
import { injectGlobal } from 'styled-components';
var weightWhitelist = [100, 200, 300, 400, 500, 600, 700];
var variants = weights.filter(function (_ref) {
  var properties = _ref.properties;
  return weightWhitelist.includes(properties.fontWeight) && properties.fontStyle === 'normal';
}).map(function (_ref2) {
  var properties = _ref2.properties,
      type = _ref2.type;
  return {
    file: require("@ibm/plex/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-".concat(type, "-Latin1.woff")),
    type: type,
    weight: properties.fontWeight
  };
});

var fontFace = function fontFace(file, type, weight) {
  return "\n  @font-face {\n    font-family: 'IBM Plex Sans';\n    src: local('IBM Plex Sans ".concat(type, "'),\n      local('IBMPlexSans-").concat(type, "'),\n      url('").concat(file, "') format('woff');\n    font-weight: ").concat(weight, ";\n    font-style: normal;\n    font-stretch: normal;\n  }\n");
};

var fonts = variants.map(function (font) {
  return fontFace(font.file, font.type, font.weight);
}).join('');
injectGlobal(_templateObject(), fonts);