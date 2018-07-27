"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  border-bottom: 2px solid ", ";\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme['gray1'];
});

var Container = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.width;
});

var TabMenu = function TabMenu(_ref) {
  var children = _ref.children,
      width = _ref.width;
  return _react.default.createElement(Wrapper, null, _react.default.createElement(Container, {
    width: width
  }, children));
};

TabMenu.propTypes = {
  children: _propTypes.default.node,
  width: _propTypes.default.string
};
TabMenu.defaultProps = {
  width: '100%'
};
var _default = TabMenu;
exports.default = _default;