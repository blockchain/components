// @flow strict
import * as React from 'react'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
import { fontSize, theme } from '../../Tools/interpolation'
import type { PropsType } from './Input'

const toId = (name?: string) => `${name || ''}-checkbox`

const Wrapper = styled.div`
  input:checked + label::before {
    background-color: ${theme('inputCheckedColor')};
    border-color: ${theme('inputCheckedColor')};
  }

  input:focus + label::before {
    box-shadow: 0 0 0 2px ${theme('inputActiveColor')};
    outline: 1px solid transparent;
  }

  input:disabled + label::after,
  input:checked + label::after {
    opacity: 1;
    transform: scale(1) rotate(-45deg);
  }

  input:disabled + label::before {
    background-color: ${theme('inputCheckboxColorDisabled')};
    border: none;
  }

  input:disabled + label::after {
    border-left: 2px solid ${theme('inputCheckboxCheckColorDisabled')};
    border-bottom: 2px solid ${theme('inputCheckboxCheckColorDisabled')};
  }
`

const Input = styled.input.attrs(injectE2E)`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  visibility: visible;
  white-space: nowrap;
  width: 1px;
`

export const CheckboxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 1rem;
  padding-left: 1.5rem;
  cursor: pointer;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('md')};

  &::before {
    background-color: ${theme('inputBackgroundColor')};
    border: 1px solid ${theme('inputBorderColor')};
    box-sizing: border-box;
    content: '';
    height: 16px;
    left: 1px;
    position: absolute;
    top: calc(50% - 0.5rem);
    width: 16px;
    border-radius: 2px;
  }

  &::after {
    background: none;
    border-left: 2px solid ${theme('inputBackgroundColor')};
    border-bottom: 2px solid ${theme('inputBackgroundColor')};
    box-sizing: border-box;
    content: '';
    height: 5px;
    left: 5px;
    margin-top: -3px;
    position: absolute;
    opacity: 0;
    top: 50%;
    transform: scale(0) rotate(-45deg);
    width: 9px;
  }
`

const Checkbox = ({ className, input, ...rest }: PropsType) => (
  <Wrapper className={className}>
    <Input {...input} {...rest} id={toId(rest.name)} type="checkbox" />
    <CheckboxLabel htmlFor={toId(rest.name)}>{rest.label}</CheckboxLabel>
  </Wrapper>
)

export default Checkbox
