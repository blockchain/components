"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  text-transform: ", ";\n  font-style: ", ";\n  color: ", ";\n  opacity: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.span(_templateObject(), function (props) {
  return props.theme['fontPrimary'];
}, function (props) {
  return props.weight;
}, function (props) {
  return props.size;
}, function (props) {
  return props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none';
}, function (props) {
  return props.italic ? 'italic' : 'normal';
}, function (props) {
  return props.theme['textColor'];
}, function (props) {
  return props.opacity;
});

var Text = function Text(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(Wrapper, rest, children);
};

var propTypes = {
  capitalize: _propTypes.default.bool,
  children: _propTypes.default.node,
  italic: _propTypes.default.bool,
  opacity: _propTypes.default.number,
  size: _propTypes.default.string,
  uppercase: _propTypes.default.bool,
  weight: _propTypes.default.oneOf([100, 200, 300, 400, 500, 600, 700])
};
exports.propTypes = propTypes;
var defaultProps = {
  capitalize: false,
  italic: false,
  opacity: 1,
  size: '14px',
  uppercase: false,
  weight: 400
};
exports.defaultProps = defaultProps;
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
var _default = Text;
exports.default = _default;