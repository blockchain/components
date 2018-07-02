import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

const BaseContainedButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: 40px;
  font-size: 18px;
  font-weight: 300;
  color: ${props => props.theme[props.color]};
  background-color: ${props => props.theme[props.backgroundColor]};
  border-color: ${props => props.theme[props.borderColor]};
  border-width: 1px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: ${props => lighten(0.1, props.theme[props.backgroundColor])};
    border-color: ${props => lighten(0.1, props.theme[props.borderColor])};
  }
`

const selectStyle = nature => {
  switch (nature) {
    case 'primary': return { color: 'white', backgroundColor: 'primary', borderColor: 'primary' }
    case 'secondary': return { color: 'white', backgroundColor: 'secondary', borderColor: 'secondary' }
    default: return { color: 'white', backgroundColor: 'primary', borderColor: 'primary' }
  }
}

const ContainedButton = ({ children, nature, ...rest }) => (
  <BaseContainedButton {...selectStyle(nature)} {...rest}>
    {children}
  </BaseContainedButton>
)

ContainedButton.propTypes = {
  nature: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  width: PropTypes.string
}

ContainedButton.defaultProps = {
  nature: 'primary',
  disabled: false,
  width: '100%'
}

export default ContainedButton
