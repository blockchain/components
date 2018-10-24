// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled, { css } from 'styled-components'

type PropsType = {
  +selectable?: boolean,
  +size?: string,
}

const themeColorTemplate = css`
  fill: ${(props) => props.theme.iconColor};
  cursor: ${(props) => (props.selectable ? 'pointer' : 'default')};

  &:hover {
    fill: ${(props) =>
      props.selectable ? props.theme.iconHoverColor : props.theme.iconColor};
  }
`

const svgColorTemplate = css`
  cursor: ${(props) => (props.selectable ? 'pointer' : 'default')};
`

export default (
  Svg: React.ComponentType<*>,
  name: string,
  keepSvgColor: boolean = false,
) => {
  const template = keepSvgColor ? svgColorTemplate : themeColorTemplate
  const Icon = styled(Svg)`
    ${template};
  `

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
      const { selectable, size, ...rest } = this.props

      return (
        <Icon
          {...rest}
          height={size}
          selectable={selectable === true ? 1 : 0}
          width={size}
        />
      )
    }
  }

  WithStyle.displayName = name

  return WithStyle
}
