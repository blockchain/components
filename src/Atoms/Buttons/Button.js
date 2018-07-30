import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getHoverColor = (disabled, theme) =>
  disabled ? theme['buttonBackgroundColor'] : theme['buttonHoverColor']

const Wrapper = styled.button.attrs({
  type: (props) => props.type,
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: ${(props) => props.theme['buttonColor']};
  background-color: ${(props) => props.theme['buttonBackgroundColor']};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-family: ${(props) => props.theme['fontPrimary']};

  &:hover {
    background-color: ${(props) => getHoverColor(props.disabled, props.theme)};
    transform: ${(props) => (props.bounced ? 'scale(0.95)' : 'none')};
  }
`
const ContainedButton = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

ContainedButton.propTypes = {
  bounced: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
}

ContainedButton.defaultProps = {
  bounced: false,
  disabled: false,
  type: 'button',
}

export default ContainedButton
