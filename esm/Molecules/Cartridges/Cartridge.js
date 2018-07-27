function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;\n  font-weight: 300;\n  font-size: ", ";\n  text-transform: ", ";\n  font-style: ", ";\n  padding: 5px;\n  box-sizing: border-box;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../Atoms/Typography/Text';
var BaseCartridge = styled(Text)(_templateObject(), function (props) {
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
  return React.createElement(BaseCartridge, selectStyle(nature), children);
};

Cartridge.propTypes = {
  children: PropTypes.any,
  italic: PropTypes.bool,
  nature: PropTypes.string,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool
};
Cartridge.defaultProps = {
  italic: false,
  nature: 'primary',
  opacity: 1,
  size: '14px',
  uppercase: false
};
export default Cartridge;