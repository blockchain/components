function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: ", ";\n\n  & > * {\n    display: ", ";\n    margin-right: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
var BaseTextGroup = styled.div(_templateObject(), function (props) {
  return props.align;
}, function (props) {
  return props.inline ? 'inline' : 'block';
}, function (props) {
  return props.inline ? '5px' : '0';
});

var TextGroup = function TextGroup(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(BaseTextGroup, rest, children);
};

TextGroup.propTypes = {
  align: PropTypes.oneOf(['justify', 'left', 'right', 'center']),
  children: PropTypes.node,
  inline: PropTypes.bool
};
TextGroup.defaultProps = {
  align: 'justify',
  inline: true
};
export default TextGroup;