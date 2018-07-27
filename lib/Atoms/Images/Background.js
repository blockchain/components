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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n  background-image: url(", ");\n  background-size: ", ";\n  background-repeat: no-repeat;\n  background-position: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseBackground = _styledComponents.default.div(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.width;
}, function (props) {
  return props.path;
}, function (props) {
  return props.stretch ? 'cover' : 'contain';
});

var Background = function Background(_ref) {
  var children = _ref.children,
      name = _ref.name,
      height = _ref.height,
      width = _ref.width,
      stretch = _ref.stretch,
      rest = _objectWithoutProperties(_ref, ["children", "name", "height", "width", "stretch"]);

  return _react.default.createElement(BaseBackground, _extends({
    height: height,
    path: _ImageMap.default[name],
    stretch: stretch,
    width: width
  }, rest), children);
};

Background.propTypes = {
  children: _propTypes.default.node,
  height: _propTypes.default.string,
  name: _propTypes.default.string,
  stretch: _propTypes.default.bool,
  width: _propTypes.default.string
};
Background.defaultProps = {
  height: '200px',
  name: 'logo',
  stretch: false,
  width: '200px'
};
var _default = Background;
exports.default = _default;