"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shallowWithTheme = shallowWithTheme;
exports.mountWithTheme = mountWithTheme;

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("../Tools/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapWithTheme(fn, children, options) {
  var wrapper = fn(_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _theme.default
  }, children), options);
  return wrapper[fn.name]({
    context: wrapper.instance().getChildContext()
  });
}

function shallowWithTheme() {
  return wrapWithTheme.apply(void 0, [_enzyme.shallow].concat(Array.prototype.slice.call(arguments)));
}

function mountWithTheme() {
  return wrapWithTheme.apply(void 0, [_enzyme.mount].concat(Array.prototype.slice.call(arguments)));
}