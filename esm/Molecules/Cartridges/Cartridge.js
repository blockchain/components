function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-weight: 300;\n  color: ", ";\n  background-color: ", ";\n  padding: 5px;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import { merge } from 'ramda';
import Text, { propTypes, defaultProps } from '../../Atoms/Typography/Text';
var Wrapper = styled(Text)(_templateObject(), function (props) {
  return props.theme['cartridgeColor'];
}, function (props) {
  return props.theme['cartridgeBackgroundColor'];
});

var Cartridge = function Cartridge(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Wrapper, rest, children);
};

Cartridge.propTypes = propTypes;
Cartridge.defaultProps = merge(defaultProps, {
  weight: 300
});
export default Cartridge;