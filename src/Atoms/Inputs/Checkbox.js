// @flow strict
import React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import injectE2E, { type E2ePropType } from '../../Tools/injectE2E'
import type { PropsType, HtmlInputType } from './Input'

const toId = (name) => `${name}-checkbox`

const Wrapper = styled.div`
  input:checked + label::before {
    background-color: ${(props) => props.theme.inputCheckedColor};
    border-color: ${(props) => props.theme.inputCheckedColor};
  }

  input:checked + label::after {
    opacity: 1;
    transform: scale(1) rotate(-45deg);
  }
`

type InputPropsType = { +name?: string, +type: HtmlInputType } & E2ePropType

const Input: ReactComponentFunctional<InputPropsType> = styled.input.attrs({
  'data-e2e': injectE2E,
  id: (props) => toId(props.name),
  name: (props) => props.name,
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
  htmlFor: (props) => toId(props.name),
})`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 1rem;
  padding-left: 1.5rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 1rem;

  &::before {
    background-color: ${(props) => props.theme.palette.white};
    border: 2px solid ${(props) => props.theme.inputBorderColor};
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
    border-left: 1px solid ${(props) => props.theme.palette.white};
    border-bottom: 1px solid ${(props) => props.theme.palette.white};
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
