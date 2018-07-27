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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: ", ";\n  width: ", ";\n  padding: 30px;\n  box-sizing: border-box;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseSection = _styledComponents.default.section(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme[props.color];
});

var Section = function Section(_ref) {
  var children = _ref.children,
      height = _ref.height,
      width = _ref.width,
      color = _ref.color;
  return _react.default.createElement(BaseSection, {
    color: color,
    height: height,
    width: width
  }, children);
};

Section.propTypes = {
  children: _propTypes.default.node,
  color: _propTypes.default.oneOf((0, _ramda.keysIn)(_theme.default)),
  height: _propTypes.default.string,
  width: _propTypes.default.string
};
Section.defaultProps = {
  color: 'white',
  height: 'auto',
  width: '100%'
};
var _default = Section;
exports.default = _default;