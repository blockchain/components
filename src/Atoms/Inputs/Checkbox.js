// @flow strict
import React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import injectE2E, { type E2ePropType } from '../../Tools/injectE2E'
import { theme } from '../../Tools/interpolation'
import type { PropsType, HtmlInputType } from './Input'

const toId = (name?: string) => `${name || ''}-checkbox`

const Wrapper = styled.div`
  input:checked + label::before {
    background-color: ${theme('inputCheckedColor')};
    border-color: ${theme('inputCheckedColor')};
  }

  input:checked + label::after {
    opacity: 1;
    transform: scale(1) rotate(-45deg);
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
  font-size: 1rem;

  &::before {
    background-color: ${theme('inputBackgroundColor')};
    border: 2px solid ${theme('inputBorderColor')};
    box-sizing: border-box;
    content: '';
    height: 16px;
    left: 1px;
    position: absolute;
    top: calc(50% - 0.5rem);
    width: 16px;
  }

  &::after {
    background: none;
    border-left: 1px solid ${theme('inputBackgroundColor')};
    border-bottom: 1px solid ${theme('inputBackgroundColor')};
    box-sizing: border-box;
    content: '';
    height: 5px;
    left: 0.3125rem;
    margin-top: -0.1875rem;
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
