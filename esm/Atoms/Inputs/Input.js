function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: ", ";\n  height: 52px;\n  padding: 0 20px;\n  box-sizing: border-box;\n  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;\n  font-size: 18px;\n  color: ", ";\n  border-width: ", ";\n  border-color: ", ";\n  border-style: solid;\n  border-radius: 0.5rem;\n  background-color: ", ";\n  background-image: none;\n  outline-width: 0;\n  user-select: text;\n\n  &:disabled {\n    color: ", ";\n    background: ", ";\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { keysIn } from 'ramda';
import theme from '../../Tools/theme';
var BaseInput = styled.input.attrs({
  name: function name(props) {
    return props.name;
  },
  type: function type(props) {
    return props.type;
  }
})(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.theme[props.color];
}, function (props) {
  return props.borderColor ? '1px' : '0';
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.theme[props.backgroundColor];
}, function (props) {
  return props.theme['gray4'];
}, function (props) {
  return props.theme['gray1'];
});

var Input = function Input(props) {
  return React.createElement(BaseInput, _objectSpread({}, props, props.input));
};

Input.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.oneOf(keysIn(theme)),
  disabled: PropTypes.bool,
  input: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'date', 'number', 'password']),
  width: PropTypes.string
};
Input.defaultProps = {
  backgroundColor: 'gray1',
  color: 'gray7',
  disabled: false,
  type: 'text',
  width: '100%'
};
export default Input;