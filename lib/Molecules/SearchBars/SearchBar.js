"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Inputs = require("../../Atoms/Inputs");

var _Icons = require("../../Atoms/Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 52px;\n  background-color: ", ";\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

var SearchInput = (0, _styledComponents.default)(_Inputs.Input)(_templateObject2(), function (props) {
  return props.theme['searchBarInputBackgroundColor'];
});

var IconContainer = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.theme['searchBarIconBackgroundColor'];
});

var SearchBar = function SearchBar(_ref) {
  var children = _ref.children,
      value = _ref.value,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["children", "value", "onChange", "onClick"]);

  return _react.default.createElement(Wrapper, null, _react.default.createElement(SearchInput, _extends({
    onChange: onChange,
    value: value
  }, rest)), _react.default.createElement(IconContainer, null, _react.default.createElement(_Icons.Icon, {
    name: "search-filled",
    onClick: onClick,
    selectable: true,
    size: "20px"
  })));
};

SearchBar.propTypes = {
  children: _propTypes.default.node,
  onChange: _propTypes.default.func,
  onClick: _propTypes.default.func,
  value: _propTypes.default.any
};
var _default = SearchBar;
exports.default = _default;