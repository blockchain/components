function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  font-size: 18px;\n  color: ", ";\n  background-color: ", ";\n  border: none;\n  border-radius: 5px;\n  cursor: ", ";\n  outline: none;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-in-out;\n  opacity: ", ";\n  font-family: ", ";\n\n  &:hover {\n    background-color: ", ";\n    transform: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var getHoverColor = function getHoverColor(disabled, theme) {
  return disabled ? theme['buttonBackgroundColor'] : theme['buttonHoverColor'];
};

var Wrapper = styled.button.attrs({
  type: function type(props) {
    return props.type;
  }
})(_templateObject(), function (props) {
  return props.theme['buttonColor'];
}, function (props) {
  return props.theme['buttonBackgroundColor'];
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  return props.theme['fontPrimary'];
}, function (props) {
  return getHoverColor(props.disabled, props.theme);
}, function (props) {
  return props.bounced ? 'scale(0.95)' : 'none';
});

var ContainedButton = function ContainedButton(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Wrapper, rest, children);
};

ContainedButton.propTypes = {
  bounced: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};
ContainedButton.defaultProps = {
  bounced: false,
  disabled: false,
  type: 'button'
};
export default ContainedButton;