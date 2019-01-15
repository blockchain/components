// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { fontSize, theme } from '../../Tools/interpolation'

const Wrapper = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${theme('cartridgeColor')};
  background-color: ${theme('cartridgeBackgroundColor')};
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('xs')};
  font-weight: 700;
  word-wrap: normal;
  text-transform: uppercase;
  padding: 0.25rem;
  margin-left: 0.75rem;
  border-radius: 2px;
`

export type PropsType = {
  +children?: React.Node,
}

const Cartridge = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Cartridge.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Cartridge
