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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  background-color: ", ";\n  opacity: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  flex: 1 auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  &:hover {\n    & :last-child {\n      opacity: 1 !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

var Bar = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme['gold'];
}, function (props) {
  return props.visible ? '1' : '0';
});

var TabMenuItem = function TabMenuItem(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      rest = _objectWithoutProperties(_ref, ["children", "selected"]);

  return _react.default.createElement(Wrapper, rest, children, _react.default.createElement(Bar, {
    visible: selected
  }));
};

TabMenuItem.propTypes = {
  children: _propTypes.default.node,
  selected: _propTypes.default.bool
};
TabMenuItem.defaultProps = {
  selected: false
};
var _default = TabMenuItem;
exports.default = _default;