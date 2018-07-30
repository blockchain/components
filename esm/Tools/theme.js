import palette from './palette';
import { lighten } from 'polished';
/* eslint-disable sort-keys */

export default {
  fontPrimary: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;",
  buttonColor: palette['white'],
  buttonBackgroundColor: palette['orient'],
  buttonHoverColor: lighten(0.1, palette['orient']),
  cartridgeColor: palette['white'],
  cartridgeBackgroundColor: palette['orient'],
  circleBadgeBackgroundColor: palette['gray2'],
  circleBadgeHoverColor: palette['orient'],
  dropdownColor: palette['gray5'],
  dropdownBackgroundColor: palette['transparent'],
  iconColor: palette['gray5'],
  iconHoverColor: palette['gray4'],
  inputColor: palette['gray5'],
  inputBackgroundColor: palette['white'],
  inputBorderColor: palette['gray2'],
  linkColor: palette['gray5'],
  linkHoverColor: palette['orient'],
  panelBackgroundColor: palette['white'],
  panelShadowColor: palette['gray1'],
  searchBarInputBackgroundColor: palette['white'],
  searchBarIconBackgroundColor: palette['gold'],
  searchBarUnderlinedBackgroundColor: palette['transparent'],
  searchBarUnderlinedBorderColor: palette['gray2'],
  sectionBackgroundColor: palette['orient'],
  tableShadowColor: palette['gray1'],
  tableHeaderColor: palette['gray3'],
  tableCellEvenBackgroundColor: palette['gray0'],
  tableCellOddBackgroundColor: palette['white'],
  tabMenuBorderColor: palette['gray1'],
  tabMenuBarColor: palette['gold'],
  textColor: palette['gray5']
  /* eslint-enable */

};