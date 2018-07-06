import React from 'react'
import PropTypes from 'prop-types'
import defaultTheme from './theme'
import { ThemeProvider } from 'styled-components'

const CustomThemeProvider = (props) => (
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
