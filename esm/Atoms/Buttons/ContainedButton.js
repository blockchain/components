function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  font-size: 18px;\n  font-weight: 300;\n  color: ", ";\n  background-color: ", ";\n  border-color: ", ";\n  border-width: 1px;\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    transform: scale(0.95);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';
var BaseContainedButton = styled.button.attrs({
  type: 'button'
})(_templateObject(), function (props) {
  return props.theme[props.color];
}, function (props) {
  return props.theme[props.backgroundColor];
}, function (props) {
  return props.theme[props.borderColor];
}, function (props) {
  return lighten(0.1, props.theme[props.backgroundColor]);
}, function (props) {
  return lighten(0.1, props.theme[props.borderColor]);
});

var selectStyle = function selectStyle(nature) {
  switch (nature) {
    case 'primary':
      return {
        backgroundColor: 'primary',
        borderColor: 'primary',
        color: 'white'
      };

    case 'secondary':
      return {
        backgroundColor: 'secondary',
        borderColor: 'secondary',
        color: 'white'
      };

    default:
      return {
        backgroundColor: 'primary',
        borderColor: 'primary',
        color: 'white'
      };
  }
};

var ContainedButton = function ContainedButton(_ref) {
  var children = _ref.children,
      nature = _ref.nature,
      rest = _objectWithoutProperties(_ref, ["children", "nature"]);

  return React.createElement(BaseContainedButton, _extends({}, selectStyle(nature), rest), children);
};

ContainedButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  nature: PropTypes.oneOf(['primary', 'secondary'])
};
ContainedButton.defaultProps = {
  disabled: false,
  nature: 'primary'
};
export default ContainedButton;