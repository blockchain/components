import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

const BaseContainedButton = styled.button.attrs({
  type: (props) => props.type,
})`
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
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) =>
      lighten(0.1, props.theme[props.backgroundColor])};
    transform: scale(0.95);
  }
`

const selectStyle = (nature) => {
  switch (nature) {
    case 'primary':
      return {
        backgroundColor: 'primary',
        color: 'white',
      }
    case 'secondary':
      return {
        backgroundColor: 'secondary',
        color: 'white',
      }
    default:
      return {
        backgroundColor: 'primary',
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
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
}

ContainedButton.defaultProps = {
  disabled: false,
  nature: 'primary',
  type: 'button',
}

export default ContainedButton
