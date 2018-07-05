import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '../../Atoms/Typography/Text'

const BaseCartridge = styled(Text)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  background-color: ${props => props.theme[props.backgroundColor]};
`

const selectStyle = nature => {
  switch (nature) {
    case 'primary': return { color: 'white', backgroundColor: 'primary' }
    case 'secondary': return { color: 'white', backgroundColor: 'secondary' }
    default: return { color: 'white', backgroundColor: 'primary' }
  }
}

const Cartridge = ({ children, nature }) => (
  <BaseCartridge {...selectStyle(nature)}>
    {children}
  </BaseCartridge>
)

Cartridge.propTypes = {
  nature: PropTypes.string
}

Cartridge.defaultProps = {
  nature: 'primary'
}

export default Cartridge
