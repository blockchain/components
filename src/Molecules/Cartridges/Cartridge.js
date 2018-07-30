import React from 'react'
import styled from 'styled-components'
import { merge } from 'ramda'
import Text from '../../Atoms/Typography/Text'

const Wrapper = styled(Text)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: ${(props) => props.theme['cartridgeColor']};
  background-color: ${(props) => props.theme['cartridgeBackgroundColor']};
  padding: 5px;
  box-sizing: border-box;
`

const Cartridge = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Cartridge.propTypes = Text.propTypes
Cartridge.defaultProps = merge(Text.defaultProps, { weight: 300 })
export default Cartridge
