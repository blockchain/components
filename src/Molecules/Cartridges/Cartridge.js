import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['cartridgeColor']};
  background-color: ${(props) => props.theme['cartridgeBackgroundColor']};
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 0.625rem;
  font-weight: 700;
  word-wrap: normal;
  text-transform: uppercase;
  padding: 0.25rem;
  margin-left: 0.75rem;
  border-radius: 2px;
`

const Cartridge = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Cartridge.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Cartridge
