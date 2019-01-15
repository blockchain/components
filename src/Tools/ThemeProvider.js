// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import defaultTheme from './theme'
import type { ThemeType } from './theme'

export type PropsType = {
  +children?: React.Node,
  +theme: ThemeType,
}

const CustomThemeProvider = (props: PropsType) => (
  <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
)

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object.isRequired,
}

CustomThemeProvider.defaultProps = {
  theme: defaultTheme,
}

export default CustomThemeProvider
