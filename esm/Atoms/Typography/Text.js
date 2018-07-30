function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  text-transform: ", ";\n  font-style: ", ";\n  color: ", ";\n  opacity: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
var Wrapper = styled.span(_templateObject(), function (props) {
  return props.theme['fontPrimary'];
}, function (props) {
  return props.weight;
}, function (props) {
  return props.size;
}, function (props) {
  return props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none';
}, function (props) {
  return props.italic ? 'italic' : 'normal';
}, function (props) {
  return props.theme['textColor'];
}, function (props) {
  return props.opacity;
});

var Text = function Text(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Wrapper, rest, children);
};

export var propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  italic: PropTypes.bool,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700])
};
export var defaultProps = {
  capitalize: false,
  italic: false,
  opacity: 1,
  size: '14px',
  uppercase: false,
  weight: 400
};
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default Text;