/* eslint-disable sort-keys */
import { defaultConfigTheme, ConfigTheme } from './config';
import { defaultButtonTheme, ButtonTheme } from './buttons';
import { defaultNavbarTheme, NavbarTheme } from './navbar';
import { defaultTypographyTheme, TypographyTheme } from './typography';

export { ConfigTheme, ButtonTheme, TypographyTheme };

export interface Theme {
  config: ConfigTheme;
  button: ButtonTheme;
  navbar: NavbarTheme;
  typography: TypographyTheme;
}

export type ThemeComponentType = keyof Theme;

export type ThemePropertyType = keyof ButtonTheme | keyof TypographyTheme | keyof NavbarTheme;

export const defaultTheme: Theme = {
  config: defaultConfigTheme,
  button: defaultButtonTheme,
  navbar: defaultNavbarTheme,
  typography: defaultTypographyTheme,
};

/* eslint-enable sort-keys */
