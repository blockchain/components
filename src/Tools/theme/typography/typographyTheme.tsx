import { PaletteType } from '../config/palette';

export interface TypographyTheme {
  textForegroundColor: PaletteType;
}

export const defaultTypographyTheme: TypographyTheme = {
  textForegroundColor: 'grey800',
};
