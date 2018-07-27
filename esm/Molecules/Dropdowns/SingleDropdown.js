function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 0;\n  min-width: 100px;\n  box-sizing: border-box;\n  color: ", ";\n  background-color: ", ";\n  background-size: 15px;\n  background-repeat: no-repeat;\n  background-position: 95% 0%;\n  background-image: url(", ");\n  appearance: none;\n  border: none;\n  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;\n  font-size: ", ";\n  font-weight: ", ";\n  text-transform: ", ";\n  font-style: ", ";\n  border-radius: 5px;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  cursor: pointer;\n  outline: none;\n  text-align: left;\n"]);

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
import ImageMap from '../../Atoms/Images/ImageMap';
import theme from '../../Tools/theme';
var Wrapper = styled.select(_templateObject(), function (props) {
  return props.theme[props.color];
}, function (props) {
  return props.theme[props.backgroundColor];
}, ImageMap.arrowDownSolid, function (props) {
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

  return React.createElement(Wrapper, rest, items.map(function (item) {
    return React.createElement("option", {
      key: item.value,
      value: item.value
    }, item.text);
  }));
};

SingleDropdown.propTypes = {
  backgroundColor: PropTypes.oneOf(keysIn(theme)),
  capitalize: PropTypes.bool,
  color: PropTypes.oneOf(keysIn(theme)),
  italic: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.any
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  value: PropTypes.any,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
};
SingleDropdown.defaultProps = {
  backgroundColor: 'transparent',
  capitalize: false,
  color: 'gray6',
  italic: false,
  size: '16px',
  uppercase: false,
  weight: 300
};
export default SingleDropdown;