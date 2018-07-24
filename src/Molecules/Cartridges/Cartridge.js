import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '../../Atoms/Typography/Text'

const BaseCartridge = styled(Text)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: ${(props) => props.size};
  text-transform: ${(props) =>
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  padding: 5px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme[props.backgroundColor]};
`

const selectStyle = (nature) => {
  switch (nature) {
    case 'primary':
      return { backgroundColor: 'orient', color: 'white' }
    case 'secondary':
      return { backgroundColor: 'cerulean', color: 'white' }
    default:
      return { backgroundColor: 'orient', color: 'white' }
  }
}

const Cartridge = ({ children, nature }) => (
  <BaseCartridge {...selectStyle(nature)}>{children}</BaseCartridge>
)

Cartridge.propTypes = {
  children: PropTypes.any,
  italic: PropTypes.bool,
  nature: PropTypes.string,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
}

Cartridge.defaultProps = {
  italic: false,
  nature: 'primary',
  opacity: 1,
  size: '14px',
  uppercase: false,
}

export default Cartridge
