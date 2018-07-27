import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './theme';
import { ThemeProvider } from 'styled-components';

var CustomThemeProvider = function CustomThemeProvider(props) {
  return React.createElement(ThemeProvider, {
    theme: props.theme
  }, props.children);
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object.isRequired
};
CustomThemeProvider.defaultProps = {
  theme: defaultTheme
};
export default CustomThemeProvider;