// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +selectable?: boolean,
  +size?: string,
}

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

export default (
  path: React.Element<*>,
  width: number,
  height: number,
  name: string,
  withColor: boolean = false,
) => {
  /* eslint-disable react/prefer-stateless-function */
  class WithStyle extends React.PureComponent<PropsType> {
    static propTypes = {
      selectable: PropTypes.bool,
      size: PropTypes.string,
    }

    static defaultProps = {
      selectable: false,
      size: '44px',
    }

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

  return WithStyle
}
