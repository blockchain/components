import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.input.attrs({
  name: (props) => props.name,
  type: (props) => props.type,
})`
  display: block;
  width: ${(props) => props.width};
  height: 52px;
  padding: 0 20px;
  box-sizing: border-box;
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 18px;
  color: ${(props) => props.theme['inputColor']};
  border-width: 1px;
  border-color: ${(props) => props.theme['inputBorderColor']};
  border-style: solid;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme['inputBackgroundColor']};
  background-image: none;
  outline-width: 0;
  user-select: text;

  &:disabled {
    color: ${(props) => props.theme['inputColor']};
    background: ${(props) => props.theme['inputBackgroundColor']};
    cursor: not-allowed;
  }
`

const Input = ({ input, ...rest }) => <Wrapper {...input} {...rest} />

Input.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'date', 'number', 'password', 'search']),
  width: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
  type: 'text',
  width: '100%',
}

export default Input
