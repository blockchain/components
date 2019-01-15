// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { prop, theme } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
  +height?: string,
  +width?: string,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${prop<PropsType>('height')};
  width: ${prop<PropsType>('width')};
  min-width: ${prop<PropsType>('width')};
  box-shadow: 0 0 1.5rem 0.4rem ${theme('panelShadowColor')};
  background-color: ${theme('panelBackgroundColor')};
`

const Panel = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Panel.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
}

Panel.defaultProps = {
  height: 'auto',
  width: '100%',
}

export default Panel
