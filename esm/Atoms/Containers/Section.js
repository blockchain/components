function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: ", ";\n  width: ", ";\n  padding: 30px;\n  box-sizing: border-box;\n  background-color: ", ";\n"]);

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
var BaseSection = styled.section(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme[props.color];
});

var Section = function Section(_ref) {
  var children = _ref.children,
      height = _ref.height,
      width = _ref.width,
      color = _ref.color;
  return React.createElement(BaseSection, {
    color: color,
    height: height,
    width: width
  }, children);
};

Section.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(keysIn(theme)),
  height: PropTypes.string,
  width: PropTypes.string
};
Section.defaultProps = {
  color: 'white',
  height: 'auto',
  width: '100%'
};
export default Section;