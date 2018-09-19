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

/* eslint-disable react/prefer-stateless-function */
export default (WrappedComponent, width, height) => {
  class withStyle extends React.PureComponent {
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
          <WrappedComponent />
        </Wrapper>
      )
    }
  }

  withStyle.propTypes = {
    selectable: PropTypes.bool,
    size: PropTypes.string,
  }

  withStyle.defaultProps = {
    selectable: false,
    size: '2.75rem',
  }

  return withStyle
}
