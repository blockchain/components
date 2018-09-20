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

export default (path, width, height, name) => {
  /* eslint-disable react/prefer-stateless-function */
  class WithStyle extends React.PureComponent {
    render() {
      const { size, ...rest } = this.props
      return (
        <Wrapper
          height={size}
          viewBox={`0 0 ${width} ${height}`}
          width={size}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          {path}
        </Wrapper>
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
    size: '2.75rem',
  }

  return WithStyle
}
