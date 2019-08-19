import { defaultFontSizes, FontSizes, FontSizeType } from './fontSizes';
import { defaultFontWeights, FontWeights, FontWeightType } from './fontWeights';
import { defaultPalette, Palette, PaletteType } from './palette';
import { defaultScreenSizes, ScreenSizes, ScreenSizeType } from './screenSizes';

export {
  defaultFontSizes,
  FontSizes,
  FontSizeType,
  defaultFontWeights,
  FontWeights,
  FontWeightType,
  defaultPalette,
  Palette,
  PaletteType,
  defaultScreenSizes,
  ScreenSizes,
  ScreenSizeType,
};

export interface ConfigTheme {
  e2e: boolean;
  defaultFontSizes: FontSizes;
  defaultFontWeights: FontWeights;
  defaultPalette: Palette;
  defaultScreenSizes: ScreenSizes;
}

export const defaultConfigTheme: ConfigTheme = {
  e2e: false,
  defaultFontSizes,
  defaultFontWeights,
  defaultPalette,
  defaultScreenSizes,
};
