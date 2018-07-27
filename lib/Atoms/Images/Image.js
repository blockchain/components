"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ImageMap = _interopRequireDefault(require("./ImageMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  cursor: ", ";\n  object-fit: contain;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseImage = _styledComponents.default.img.attrs({
  alt: function alt(props) {
    return props.name;
  },
  src: function src(props) {
    return _ImageMap.default[props.name];
  }
})(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.selectable ? 'pointer' : 'initial';
});

var Image = function Image(props) {
  return _react.default.createElement(BaseImage, props);
};

Image.propTypes = {
  height: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  selectable: _propTypes.default.bool,
  width: _propTypes.default.string
};
Image.defaultProps = {
  height: '100%',
  name: 'logo',
  selectable: false,
  width: '100%'
};
var _default = Image;
exports.default = _default;