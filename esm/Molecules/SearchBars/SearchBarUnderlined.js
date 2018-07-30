function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 40px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: inherit;\n  border-color: transparent;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  border-bottom: 1px solid\n    ", ";\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from '../../Atoms/Inputs';
import { Icon } from '../../Atoms/Icons';
var BaseSearchBarUnderlined = styled.div(_templateObject(), function (props) {
  return props.theme['searchBarUnderlinedBorderColor'];
}, function (props) {
  return props.theme['searchBarUnderlinedBackgroundColor'];
});
var SearchInput = styled(Input)(_templateObject2());
var IconContainer = styled.div(_templateObject3());

var SearchBarUnderlined = function SearchBarUnderlined(_ref) {
  var children = _ref.children,
      value = _ref.value,
      handleChange = _ref.handleChange,
      handleClick = _ref.handleClick,
      rest = _objectWithoutProperties(_ref, ["children", "value", "handleChange", "handleClick"]);

  return React.createElement(BaseSearchBarUnderlined, null, React.createElement(SearchInput, _extends({
    onChange: handleChange,
    value: value
  }, rest)), React.createElement(IconContainer, null, React.createElement(Icon, {
    name: "search-filled",
    onClick: handleClick,
    selectable: true,
    size: "20px"
  })));
};

SearchBarUnderlined.propTypes = {
  children: PropTypes.node,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.any
};
export default SearchBarUnderlined;