// @flow strict
import themeObj from './theme'
import type { ThemeType as _ThemeType } from './theme'

const prop = <T: {}>(key: $Keys<T>) => (props: T): string | number => props[key]

type ScreenSizeType = $Keys<typeof themeObj.screenSizes>
type FontSizeType = $Keys<typeof themeObj.fontSizes>

export type ThemePropType = { theme: _ThemeType }

const fontSize = (key: FontSizeType) => (props: ThemePropType) => {
  return props.theme.fontSizes[key]
}

const screenSize = (key: ScreenSizeType) => (props: ThemePropType) => {
  return props.theme.screenSizes[key]
}

const theme = (key: $Keys<_ThemeType>) => (props: ThemePropType) =>
  props.theme[key]

export { fontSize, prop, screenSize, theme }

export default { fontSize, prop, screenSize, theme }
