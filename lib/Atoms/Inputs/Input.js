"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ramda = require("ramda");

var _theme = _interopRequireDefault(require("../../Tools/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: ", ";\n  height: 52px;\n  padding: 0 20px;\n  box-sizing: border-box;\n  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;\n  font-size: 18px;\n  color: ", ";\n  border-width: ", ";\n  border-color: ", ";\n  border-style: solid;\n  border-radius: 0.5rem;\n  background-color: ", ";\n  background-image: none;\n  outline-width: 0;\n  user-select: text;\n\n  &:disabled {\n    color: ", ";\n    background: ", ";\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseInput = _styledComponents.default.input.attrs({
  name: function name(props) {
    return props.name;
  },
  type: function type(props) {
    return props.type;
  }
})(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.theme[props.color];
}, function (props) {
  return props.borderColor ? '1px' : '0';
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.theme[props.backgroundColor];
}, function (props) {
  return props.theme['gray4'];
}, function (props) {
  return props.theme['gray1'];
});

var Input = function Input(props) {
  return _react.default.createElement(BaseInput, _objectSpread({}, props, props.input));
};

Input.propTypes = {
  backgroundColor: _propTypes.default.string,
  borderColor: _propTypes.default.string,
  color: _propTypes.default.oneOf((0, _ramda.keysIn)(_theme.default)),
  disabled: _propTypes.default.bool,
  input: _propTypes.default.object,
  name: _propTypes.default.string,
  type: _propTypes.default.oneOf(['text', 'date', 'number', 'password']),
  width: _propTypes.default.string
};
Input.defaultProps = {
  backgroundColor: 'gray1',
  color: 'gray7',
  disabled: false,
  type: 'text',
  width: '100%'
};
var _default = Input;
exports.default = _default;