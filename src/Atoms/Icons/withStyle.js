import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.svg`
  fill: ${(props) => props.theme['iconColor']};
  cursor: ${(props) => (props.selectable ? 'pointer' : 'default')};

  &:hover {
    fill: ${(props) =>
      props.selectable
        ? props.theme['iconHoverColor']
        : props.theme['iconColor']};
  }
`

const Svg = styled.svg`
  cursor: ${(props) => (props.selectable ? 'pointer' : 'default')};
`

export default (path, width, height, name, withColor = false) => {
  /* eslint-disable react/prefer-stateless-function */
  class WithStyle extends React.PureComponent {
    render() {
      const { size, ...rest } = this.props
      const Icon = withColor ? Svg : Wrapper

      return (
        <Icon
          height={size}
          viewBox={`0 0 ${width} ${height}`}
          width={size}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          {path}
        </Icon>
      )
    }
  }

  WithStyle.displayName = name

  WithStyle.propTypes = {
    selectable: PropTypes.bool,
    size: PropTypes.string,
  }

  WithStyle.defaultProps = {
    selectable: false,
    size: '44px',
  }

  return WithStyle
}
