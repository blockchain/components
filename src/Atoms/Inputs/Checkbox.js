// @flow strict
import React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import injectE2E, { type E2ePropType } from '../../Tools/injectE2E'
import { fontSize, theme } from '../../Tools/interpolation'
import type { PropsType, HtmlInputType } from './Input'

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

type InputPropsType = { +name?: string, +type: HtmlInputType } & E2ePropType

const Input: ReactComponentFunctional<InputPropsType> = styled.input.attrs({
  'data-e2e': injectE2E,
  id: (props: InputPropsType) => toId(props.name),
  name: (props: InputPropsType) => props.name,
  type: 'checkbox',
})`
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

export const CheckboxLabel: ReactComponentFunctional<{
  +name?: string,
}> = styled.label.attrs({
  htmlFor: (props: InputPropsType) => toId(props.name),
})`
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

const Checkbox = ({ input, ...rest }: PropsType) => (
  <Wrapper>
    <Input {...input} {...rest} />
    <CheckboxLabel name={rest.name}>{rest.label}</CheckboxLabel>
  </Wrapper>
)

export default Checkbox
