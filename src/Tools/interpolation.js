// @flow strict
import themeObj from './theme'
import type { ThemeType as _ThemeType } from './theme'

const prop = <T: {}>(key: $Keys<T>) => (props: T): string | number => props[key]

type ScreenSizeType = $Keys<typeof themeObj.screenSizes>

export type ThemePropType = { theme: _ThemeType }

const screenSize = (key: ScreenSizeType) => (props: ThemePropType) => {
  return props.theme.screenSizes[key]
}

const theme = (key: $Keys<_ThemeType>) => (props: ThemePropType) =>
  props.theme[key]

export { prop, screenSize, theme }
