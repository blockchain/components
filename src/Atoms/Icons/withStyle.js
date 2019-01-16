// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled, { css } from 'styled-components'

import { theme, type ThemePropType } from '../../Tools/interpolation'

export type PropsType = {
  +selectable?: boolean,
  +size?: string,
}

type SvgPropsType = {
  +selectable: number,
  +size?: string,
}

const themeColorTemplate = css`
  fill: ${theme('iconColor')};
  cursor: ${(props: SvgPropsType) =>
    props.selectable === 1 ? 'pointer' : 'default'};

  &:hover {
    fill: ${(props: SvgPropsType & ThemePropType) =>
      props.selectable === 1
        ? theme('iconHoverColor')(props)
        : theme('iconColor')(props)};
  }
`

const svgColorTemplate = css`
  cursor: ${(props: SvgPropsType) =>
    props.selectable === 1 ? 'pointer' : 'default'};
`

export default (
  Svg: (props: SvgPropsType) => React.Node,
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
