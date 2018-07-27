import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { keysIn } from 'ramda'
import theme from '../../Tools/theme'

const BaseInput = styled.input.attrs({
  name: (props) => props.name,
  type: (props) => props.type,
})`
  display: block;
  width: ${(props) => props.width};
  height: 52px;
  padding: 0 20px;
  box-sizing: border-box;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  color: ${(props) => props.theme[props.color]};
  border-width: ${(props) => (props.borderColor ? '1px' : '0')};
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme[props.backgroundColor]};
  background-image: none;
  outline-width: 0;
  user-select: text;

  &:disabled {
    color: ${(props) => props.theme['gray4']};
    background: ${(props) => props.theme['gray1']};
    cursor: not-allowed;
  }
`

const Input = (props) => <BaseInput {...{ ...props, ...props.input }} />

Input.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.oneOf(keysIn(theme)),
  disabled: PropTypes.bool,
  input: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'date', 'number', 'password', 'search']),
  width: PropTypes.string,
}

Input.defaultProps = {
  backgroundColor: 'gray1',
  color: 'gray7',
  disabled: false,
  type: 'text',
  width: '100%',
}

export default Input
