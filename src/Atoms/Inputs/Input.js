import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten, darken } from 'polished'

const BaseInput = styled.input.attrs({ type: props => props.type }) `
  display: block;
  width: ${props => props.width};
  height: 40px;
  padding: 6px 12px;
  box-sizing: border-box;
  font-family: 'Montserrat', helvetica, sans serif;
  font-size: 14px;
  font-weight: 300;
  color: ${props => props.theme[props.color]};
  background-color: ${props => props.theme[props.backgroundColor]};
  background-image: none;
  outline-width: 0;
  user-select: text;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme[props.borderColor]};
  &::placeholder {
    color: ${props => props.theme['gray-3']};
    opacity: 0.4;
  }
  &:disabled {
    color: ${props => props.theme['gray-4']};
    background: ${props => props.theme['gray-1']};
    cursor: not-allowed;
  }
`

const Input = props => <BaseInput {...props} />

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'date', 'number', 'password']),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  color: 'gray-5',
  backgroundColor: 'white',
  borderColor: 'gray-2',
  width: '100%',
  disabled: false
}

export default Input
