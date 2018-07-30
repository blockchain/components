"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ImageMap = _interopRequireDefault(require("../../Atoms/Images/ImageMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 0;\n  min-width: 100px;\n  box-sizing: border-box;\n  color: ", ";\n  background-color: ", ";\n  background-size: 15px;\n  background-repeat: no-repeat;\n  background-position: 95% 0%;\n  background-image: url(", ");\n  appearance: none;\n  border: none;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  text-transform: ", ";\n  font-style: ", ";\n  border-radius: 5px;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  cursor: pointer;\n  outline: none;\n  text-align: left;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.select(_templateObject(), function (props) {
  return props.theme['dropdownColor'];
}, function (props) {
  return props.theme['dropdownBackgroundColor'];
}, _ImageMap.default.arrowDownSolid, function (props) {
  return props.theme['fontPrimary'];
}, function (props) {
  return props.size;
}, function (props) {
  return props.weight;
}, function (props) {
  return props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none';
}, function (props) {
  return props.italic ? 'italic' : 'normal';
});

var SingleDropdown = function SingleDropdown(_ref) {
  var items = _ref.items,
      rest = _objectWithoutProperties(_ref, ["items"]);

  return _react.default.createElement(Wrapper, rest, items.map(function (item) {
    return _react.default.createElement("option", {
      key: item.value,
      value: item.value
    }, item.text);
  }));
};

SingleDropdown.propTypes = {
  capitalize: _propTypes.default.bool,
  italic: _propTypes.default.bool,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    value: _propTypes.default.any
  })).isRequired,
  onChange: _propTypes.default.func.isRequired,
  size: _propTypes.default.string,
  uppercase: _propTypes.default.bool,
  value: _propTypes.default.any,
  weight: _propTypes.default.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
};
SingleDropdown.defaultProps = {
  capitalize: false,
  italic: false,
  size: '16px',
  uppercase: false,
  weight: 300
};
var _default = SingleDropdown;
exports.default = _default;