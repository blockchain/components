import * as React from 'react';
import { mergeRight } from 'ramda';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

interface Props {
  children: JSX.Element;
  theme?: object;
}

const ThemeProvider = (props: Props): JSX.Element => (
  <StyledComponentThemeProvider theme={mergeRight(props.theme, defaultTheme)}>
    {props.children}
  </StyledComponentThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: defaultTheme,
};

export default ThemeProvider;
