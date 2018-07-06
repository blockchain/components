import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

const BaseContainedButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme[props.color]};
  background-color: ${(props) => props.theme[props.backgroundColor]};
  border-color: ${(props) => props.theme[props.borderColor]};
  border-width: 1px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: ${(props) =>
      lighten(0.1, props.theme[props.backgroundColor])};
    border-color: ${(props) => lighten(0.1, props.theme[props.borderColor])};
    transform: scale(0.95);
  }
`

const selectStyle = (nature) => {
  switch (nature) {
    case 'primary':
      return {
        backgroundColor: 'primary',
        borderColor: 'primary',
        color: 'white',
      }
    case 'secondary':
      return {
        backgroundColor: 'secondary',
        borderColor: 'secondary',
        color: 'white',
      }
    default:
      return {
        backgroundColor: 'primary',
        borderColor: 'primary',
        color: 'white',
      }
  }
}

const ContainedButton = ({ children, nature, ...rest }) => (
  <BaseContainedButton {...selectStyle(nature)} {...rest}>
    {children}
  </BaseContainedButton>
)

ContainedButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  nature: PropTypes.oneOf(['primary', 'secondary']),
}

ContainedButton.defaultProps = {
  disabled: false,
  nature: 'primary',
}

export default ContainedButton
