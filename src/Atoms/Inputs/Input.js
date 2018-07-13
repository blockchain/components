import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { keysIn } from 'ramda'
import theme from '../../Tools/theme'

const BaseInput = styled.input.attrs({ type: (props) => props.type })`
  display: block;
  width: ${(props) => props.width};
  height: 52px;
  padding: 0 20px;
  box-sizing: border-box;
  font-family: 'Montserrat', helvetica, sans serif;
  font-size: 18px;
  color: ${(props) => props.theme[props.color]};
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme[props.backgroundColor]};
  background-image: none;
  outline-width: 0;
  user-select: text;

  &:disabled {
    color: ${(props) => props.theme['gray-4']};
    background: ${(props) => props.theme['gray-1']};
    cursor: not-allowed;
  }
`

const Input = (props) => <BaseInput {...props} />

Input.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.oneOf(keysIn(theme)),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'date', 'number', 'password']),
  width: PropTypes.string,
}

Input.defaultProps = {
  backgroundColor: 'gray-1',
  color: 'gray-7',
  disabled: false,
  type: 'text',
  width: '100%',
}

export default Input
