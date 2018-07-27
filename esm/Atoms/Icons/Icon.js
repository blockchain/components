function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n  cursor: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n\n  &::before {\n    font-family: 'icomoon';\n    content: '", "';\n  }\n"]);

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
import { lighten } from 'polished';
import theme from '../../Tools/theme';
import IcomoonMap from './IcomoonMap';

var getHoverColor = function getHoverColor(props) {
  return props.selectable ? lighten(0.1, props.theme[props.color]) : props.theme[props.color];
};

var BaseIcon = styled.span(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.weight;
}, function (props) {
  return props.size;
}, function (props) {
  return props.theme[props.color];
}, function (props) {
  return props.selectable ? 'pointer' : 'inherit';
}, getHoverColor, function (props) {
  return props.code;
});

var Icon = function Icon(_ref) {
  var name = _ref.name,
      selectable = _ref.selectable,
      rest = _objectWithoutProperties(_ref, ["name", "selectable"]);

  return React.createElement(BaseIcon, _extends({}, rest, {
    code: IcomoonMap[name],
    selectable: selectable
  }));
};

Icon.propTypes = {
  color: PropTypes.oneOf(keysIn(theme)),
  name: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
  size: PropTypes.string,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
};
Icon.defaultProps = {
  color: 'gray5',
  name: 'bitcoin',
  selectable: false,
  size: '40px',
  weight: 400
};
export default Icon;