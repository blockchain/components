import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
import Checkbox from './Checkbox'

const Wrapper = styled.input.attrs({
  'data-e2e': injectE2E,
  name: (props) => props.name,
  type: (props) => props.type,
})`
  display: block;
  width: ${(props) => props.width};
  height: 2.7rem;
  padding: 0 1.4rem;
  box-sizing: border-box;
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 1rem;
  color: ${(props) => props.theme['inputColor']};
  border-width: 1px;
  border-color: ${(props) => props.theme['inputBorderColor']};
  border-style: solid;
  border-radius: ${(props) => props.theme.inputBorderRadius};
  background-color: ${(props) => props.theme['inputBackgroundColor']};
  background-image: none;
  outline-width: 0;
  user-select: text;

  &:disabled {
    color: ${(props) => props.theme['inputColor']};
    background: ${(props) => props.theme['inputBackgroundColor']};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme['inputPlaceholderColor']};
    font-size: 0.875rem;
  }
`

const Input = ({ input, type, ...rest }) => {
  if (type === 'checkbox') {
    return <Checkbox {...input} {...rest} type={type} />
  }

  return <Wrapper {...input} {...rest} type={type} />
}

Input.propTypes = {
  disabled: PropTypes.bool,
  e2e: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    'checkbox',
    'date',
    'number',
    'password',
    'search',
    'text',
  ]),
  width: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
  e2e: 'defaultInput',
  type: 'text',
  width: '100%',
}

export default Input
