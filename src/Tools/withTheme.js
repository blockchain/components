/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import defaultTheme from './theme'

export default (WrappedComponent, theme = defaultTheme) => {
  class customWithTheme extends React.PureComponent {
    render() {
      const { children, ...rest } = this.props
      return (
        <WrappedComponent theme={theme} {...rest}>
          {children}
        </WrappedComponent>
      )
    }
  }

  customWithTheme.propTypes = {
    children: PropTypes.node,
  }

  return customWithTheme
}
