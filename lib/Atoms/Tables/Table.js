"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  box-shadow: 0 0 25px 5px ", ";\n\n  & > :first-child {\n    color: ", ";\n    text-transform: uppercase;\n  }\n\n  & > :nth-child(even) {\n    background-color: ", ";\n  }\n\n  & > :nth-child(odd) {\n    background-color: ", ";\n  }\n\n  & > :nth-child(even):hover {\n    background-color: ", ";\n  }\n\n  & > :nth-child(odd):not(:first-child):hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseTable = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme['gray1'];
}, function (props) {
  return props.theme['gray3'];
}, function (props) {
  return props.theme['gray0'];
}, function (props) {
  return props.theme['white'];
}, function (props) {
  return props.highlighting ? props.theme['gray2'] : props.theme['gray0'];
}, function (props) {
  return props.highlighting ? props.theme['gray2'] : props.theme['white'];
});

var Table = function Table(_ref) {
  var children = _ref.children,
      highlighting = _ref.highlighting;
  return _react.default.createElement(BaseTable, {
    highlighting: highlighting
  }, children);
};

Table.propTypes = {
  children: _propTypes.default.node,
  highlighting: _propTypes.default.bool
};
Table.defaultProps = {
  highlighting: false
};
var _default = Table;
exports.default = _default;