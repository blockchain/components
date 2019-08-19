import { pathOr } from 'ramda';
import { FontSizeType, PaletteType, ScreenSizeType, FontWeightType } from './theme/config';
import { Theme, ThemeComponentType, ThemePropertyType } from './theme';

const color: (colorKey: PaletteType) => (props: { theme: Theme }) => string = colorKey => props =>
  props.theme.config.defaultPalette[colorKey];

const theme = (component: ThemeComponentType, property: ThemePropertyType) => (props: { theme: Theme }) =>
  color(pathOr('red200', ['theme', component, property], props))(props);

const fontSize = (property: FontSizeType) => (props: { theme: Theme }): string =>
  pathOr('1rem', ['theme', 'config', 'defaultFontSizes', property], props);

const fontWeight = (property: FontWeightType) => (props: { theme: Theme }): number =>
  pathOr(400, ['theme', 'config', 'defaultFontWeights', property], props);

const screenSize = (property: ScreenSizeType) => (props: { theme: Theme }): string =>
  pathOr('48rem', ['theme', 'config', 'defaultScreenSizes', property], props);

export default {
  color,
  fontSize,
  fontWeight,
  screenSize,
  theme,
};
