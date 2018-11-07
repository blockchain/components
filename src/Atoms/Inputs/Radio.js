// @flow strict
import React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import injectE2E, { type E2ePropType } from '../../Tools/injectE2E'
import type { PropsType, HtmlInputType } from './Input'

const toId = (value) => `${value}-radio`

const Wrapper = styled.div`
  display: flex;
`

type InputPropsType = { +name?: string, +type: HtmlInputType } & E2ePropType

const RadioButton = styled.span`
  margin-right: 0.5rem;
  background: ${({ theme }) => theme.palette.white};
  border: 2px solid ${({ theme }) => theme.inputRadioColor};
  border-radius: 50%;
  height: 1.25rem;
  width: 1.25rem;
`

const Input: ReactComponentFunctional<InputPropsType> = styled.input.attrs({
  'data-e2e': injectE2E,
  id: (props) => toId(props.value),
  name: (props) => props.name,
  type: 'radio',
})`
  clip: rect(0, 0, 0, 0);
  position: absolute;

  &:checked ~ label ${RadioButton} {
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: ${({ theme }) => theme.inputRadioCheckedColor};

    &::before {
      border-radius: 51%;
      content: '';
      display: inline-block;
      height: 0.75rem;
      width: 0.75rem;
      position: relative;
      background: ${({ theme }) => theme.inputRadioCheckedColor};
    }
  }
`

export const RadioLabel: ReactComponentFunctional<{
  +name?: string,
}> = styled.label.attrs({
  htmlFor: (props) => toId(props.value),
})`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 1rem;
  padding-left: 0.5rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 1rem;
`

const Radio = ({ input, ...rest }: PropsType) => (
  <Wrapper>
    <Input {...input} {...rest} />
    <RadioLabel name={rest.name} value={rest.value}>
      <RadioButton />
      {rest.label}
    </RadioLabel>
  </Wrapper>
)

export default Radio
