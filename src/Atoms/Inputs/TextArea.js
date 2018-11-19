// @flow strict
import React from 'react'
import PropTypes from 'prop-types'
import styled, { type ReactComponentFunctional } from 'styled-components'

import injectE2E, { type E2ePropType } from '../../Tools/injectE2E'
import { prop, theme } from '../../Tools/interpolation'

export type PropsType = {
  +disabled?: boolean,
  +e2e?: string,
  +height?: string,
  +input?: {},
  +name?: string,
  +value?: string,
  +width?: string,
}

type WPropsType = { +name?: string } & E2ePropType

const Wrapper: ReactComponentFunctional<WPropsType> = styled.textarea.attrs({
  'data-e2e': injectE2E,
  name: (props: PropsType) => props.name,
})`
  display: block;
  width: ${prop<PropsType>('width')};
  height: ${prop<PropsType>('height')};
  padding: 0.7rem 1.4rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  color: ${theme('inputColor')};
  border-width: 1px;
  border-color: ${theme('inputBorderColor')};
  border-style: solid;
  border-radius: ${theme('inputBorderRadius')};
  background-color: ${theme('inputBackgroundColor')};
  background-image: none;
  outline-width: 0;
  user-select: text;
  resize: none;

  &:disabled {
    color: ${theme('inputColor')};
    background: ${theme('inputBackgroundColor')};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme('inputPlaceholderColor')};
    font-size: 0.875rem;
  }
`

const TextArea = ({ input, ...rest }: PropsType) => {
  return <Wrapper {...input} {...rest} />
}

TextArea.propTypes = {
  disabled: PropTypes.bool,
  e2e: PropTypes.string,
  height: PropTypes.string,
  input: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
}

TextArea.defaultProps = {
  disabled: false,
  e2e: 'defaultTextArea',
  height: '100px',
  width: '100%',
}

export default TextArea
