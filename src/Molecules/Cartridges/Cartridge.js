import React from 'react'
import styled from 'styled-components'
import Text from '../../Atoms/Typography/Text'

const Wrapper = styled(Text)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['cartridgeColor']};
  background-color: ${(props) => props.theme['cartridgeBackgroundColor']};
  padding: 0.3rem;
  box-sizing: border-box;
`

const Cartridge = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Cartridge.propTypes = Text.propTypes
Cartridge.defaultProps = Text.defaultProps

export default Cartridge
