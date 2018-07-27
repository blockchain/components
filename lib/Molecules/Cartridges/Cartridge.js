"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("../../Atoms/Typography/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;\n  font-weight: 300;\n  font-size: ", ";\n  text-transform: ", ";\n  font-style: ", ";\n  padding: 5px;\n  box-sizing: border-box;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseCartridge = (0, _styledComponents.default)(_Text.default)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none';
}, function (props) {
  return props.italic ? 'italic' : 'normal';
}, function (props) {
  return props.theme[props.backgroundColor];
});

var selectStyle = function selectStyle(nature) {
  switch (nature) {
    case 'primary':
      return {
        backgroundColor: 'orient',
        color: 'white'
      };

    case 'secondary':
      return {
        backgroundColor: 'cerulean',
        color: 'white'
      };

    default:
      return {
        backgroundColor: 'orient',
        color: 'white'
      };
  }
};

var Cartridge = function Cartridge(_ref) {
  var children = _ref.children,
      nature = _ref.nature;
  return _react.default.createElement(BaseCartridge, selectStyle(nature), children);
};

Cartridge.propTypes = {
  children: _propTypes.default.any,
  italic: _propTypes.default.bool,
  nature: _propTypes.default.string,
  opacity: _propTypes.default.number,
  size: _propTypes.default.string,
  uppercase: _propTypes.default.bool
};
Cartridge.defaultProps = {
  italic: false,
  nature: 'primary',
  opacity: 1,
  size: '14px',
  uppercase: false
};
var _default = Cartridge;
exports.default = _default;