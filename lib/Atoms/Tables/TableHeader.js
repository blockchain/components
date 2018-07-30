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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 10px 30px;\n  box-sizing: border-box;\n  color: ", ";\n  text-transform: uppercase;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseTableHeader = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme['tableHeaderColor'];
});

var TableHeader = function TableHeader(_ref) {
  var children = _ref.children;
  return _react.default.createElement(BaseTableHeader, null, children);
};

TableHeader.propTypes = {
  children: _propTypes.default.node
};
var _default = TableHeader;
exports.default = _default;