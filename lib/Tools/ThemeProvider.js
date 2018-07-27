"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("./theme"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomThemeProvider = function CustomThemeProvider(props) {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: props.theme
  }, props.children);
};

CustomThemeProvider.propTypes = {
  children: _propTypes.default.node,
  theme: _propTypes.default.object.isRequired
};
CustomThemeProvider.defaultProps = {
  theme: _theme.default
};
var _default = CustomThemeProvider;
exports.default = _default;