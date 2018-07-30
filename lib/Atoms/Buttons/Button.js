"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  font-size: 18px;\n  color: ", ";\n  background-color: ", ";\n  border: none;\n  border-radius: 5px;\n  cursor: ", ";\n  outline: none;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  opacity: ", ";\n  font-family: ", ";\n\n  &:hover {\n    background-color: ", ";\n    transform: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getHoverColor = function getHoverColor(disabled, theme) {
  return disabled ? theme['buttonBackgroundColor'] : theme['buttonHoverColor'];
};

var Wrapper = _styledComponents.default.button.attrs({
  type: function type(props) {
    return props.type;
  }
})(_templateObject(), function (props) {
  return props.theme['buttonColor'];
}, function (props) {
  return props.theme['buttonBackgroundColor'];
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  return props.theme['fontPrimary'];
}, function (props) {
  return getHoverColor(props.disabled, props.theme);
}, function (props) {
  return props.bounced ? 'scale(0.95)' : 'none';
});

var ContainedButton = function ContainedButton(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(Wrapper, rest, children);
};

ContainedButton.propTypes = {
  bounced: _propTypes.default.bool,
  children: _propTypes.default.node,
  disabled: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['button', 'reset', 'submit'])
};
ContainedButton.defaultProps = {
  bounced: false,
  disabled: false,
  type: 'button'
};
var _default = ContainedButton;
exports.default = _default;