import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.button.attrs({
  type: (props) => props.type,
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  line-height: 2.5rem;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  color: ${(props) => props.theme['buttonColor']};
  background-color: ${(props) => props.theme['buttonBackgroundColor']};
  border: none;
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  transition: all 0.3s ease 0s;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? props.theme['buttonBackgroundColor']
        : props.theme['buttonHoverColor']};
    transform: ${(props) => (props.bounced ? 'scale(0.95)' : 'none')};
  }
`
const Button = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Button.propTypes = {
  bounced: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
}

Button.defaultProps = {
  bounced: false,
  disabled: false,
  type: 'button',
}

export default Button
