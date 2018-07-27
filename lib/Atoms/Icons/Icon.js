"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _polished = require("polished");

var _theme = _interopRequireDefault(require("../../Tools/theme"));

var _IcomoonMap = _interopRequireDefault(require("./IcomoonMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n  cursor: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n\n  &::before {\n    font-family: 'icomoon';\n    content: '", "';\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getHoverColor = function getHoverColor(props) {
  return props.selectable ? (0, _polished.lighten)(0.1, props.theme[props.color]) : props.theme[props.color];
};

var BaseIcon = _styledComponents.default.span(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.weight;
}, function (props) {
  return props.size;
}, function (props) {
  return props.theme[props.color];
}, function (props) {
  return props.selectable ? 'pointer' : 'inherit';
}, getHoverColor, function (props) {
  return props.code;
});

var Icon = function Icon(_ref) {
  var name = _ref.name,
      selectable = _ref.selectable,
      rest = _objectWithoutProperties(_ref, ["name", "selectable"]);

  return _react.default.createElement(BaseIcon, _extends({}, rest, {
    code: _IcomoonMap.default[name],
    selectable: selectable
  }));
};

Icon.propTypes = {
  color: _propTypes.default.oneOf((0, _ramda.keysIn)(_theme.default)),
  name: _propTypes.default.string.isRequired,
  selectable: _propTypes.default.bool,
  size: _propTypes.default.string,
  weight: _propTypes.default.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
};
Icon.defaultProps = {
  color: 'gray5',
  name: 'bitcoin',
  selectable: false,
  size: '40px',
  weight: 400
};
var _default = Icon;
exports.default = _default;