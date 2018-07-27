"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: ", ";\n  width: ", ";\n  box-shadow: 0 0 25px 5px ", ";\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BasePanel = _styledComponents.default.div(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme['gray1'];
}, function (props) {
  return props.theme['white'];
});

var Panel = function Panel(_ref) {
  var children = _ref.children,
      height = _ref.height,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["children", "height", "width"]);

  return _react.default.createElement(BasePanel, _extends({
    height: height,
    width: width
  }, rest), children);
};

Panel.propTypes = {
  children: _propTypes.default.node,
  height: _propTypes.default.string,
  width: _propTypes.default.string
};
Panel.defaultProps = {
  height: 'auto',
  width: '100%'
};
var _default = Panel;
exports.default = _default;