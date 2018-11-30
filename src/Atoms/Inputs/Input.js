// @flow strict
import React from 'react'
import PropTypes from 'prop-types'
import styled, { type ReactComponentFunctional } from 'styled-components'

import injectE2E, { type E2ePropType } from '../../Tools/injectE2E'
import {
  fontSize,
  prop,
  theme,
  type ThemePropType,
} from '../../Tools/interpolation'
import Checkbox from './Checkbox'
import Radio from './Radio'

export type HtmlInputType =
  | 'checkbox'
  | 'date'
  | 'number'
  | 'password'
  | 'radio'
  | 'search'
  | 'text'

export type PropsType = {
  +className?: string,
  +disabled?: boolean,
  +e2e?: string,
  +error?: string,
  +input?: {},
  +label?: string,
  +name?: string,
  +type: HtmlInputType,
  +value?: string,
  +width?: string,
}

type WrapperPropsType = { +name?: string, +type: HtmlInputType } & E2ePropType

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${prop<PropsType>('width')};
`

const InputWrapper: ReactComponentFunctional<WrapperPropsType> = styled.input.attrs(
  {
    'data-e2e': injectE2E,
    name: (props: PropsType) => props.name,
    type: (props: PropsType) => props.type,
  },
)`
  display: block;
  height: 2.7rem;
  width: ${prop<PropsType>('width')};
  padding: 0 1rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('md')};
  color: ${theme('inputColor')};
  border-width: 1px;
  border-color: ${(props: PropsType & ThemePropType) =>
    props.error != null
      ? theme('dangerColor')(props)
      : theme('inputBorderColor')(props)};
  border-style: solid;
  border-radius: ${theme('inputBorderRadius')};
  background-color: ${theme('inputBackgroundColor')};
  background-image: none;
  outline-width: 0;
  user-select: text;
  transition: box-shadow 0.25s ease-out;

  &:disabled {
    color: ${theme('inputColor')};
    border-color: ${theme('inputBorderColor')};
    background: ${theme('inputBackgroundColorDisabled')};
    cursor: not-allowed;
  }

  &:active:not(:disabled),
  &:focus:not(:disabled) {
    box-shadow: 0 0 0 1px
      ${(props: PropsType & ThemePropType) =>
        props.error != null ? 'transparent' : theme('inputActiveColor')};
  }

  &::placeholder {
    color: ${theme('inputPlaceholderColor')};
    font-size: ${fontSize('sm')};
  }
`

export type LabelPropsType = {
  +disabled?: boolean,
  +error: boolean,
  +name?: string,
}

export const InputLabel: ReactComponentFunctional<LabelPropsType> = styled.label.attrs(
  {
    htmlFor: (props: PropsType) => props.name,
  },
)`
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('sm')};
  padding-bottom: 0.5rem;
  color: ${(props: LabelPropsType & ThemePropType) =>
    props.error && props.disabled !== true
      ? props.theme.dangerColor
      : props.theme.inputLabelColor};
  ${(props: PropsType) =>
    props.disabled === true ? 'cursor: not-allowed' : ''};
`

const Input = ({ className, input, type, ...rest }: PropsType) => {
  const hasLabel = rest.label != null
  const hasError = rest.error != null

  if (type === 'checkbox') {
    return <Checkbox {...input} {...rest} type={type} />
  }

  if (type === 'radio') {
    return <Radio {...input} {...rest} type={type} />
  }

  if (hasLabel || hasError) {
    return (
      <Container className={className} width={rest.width}>
        <InputLabel disabled={rest.disabled} error={hasError} name={rest.name}>
          {`${rest.label || ''}${
            hasLabel && hasError ? ' - ' : ''
          }${rest.error || ''}`}
        </InputLabel>
        <InputWrapper {...input} {...rest} type={type} />
      </Container>
    )
  }

  return (
    <Container className={className} width={rest.width}>
      <InputWrapper {...input} {...rest} type={type} />
    </Container>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  e2e: PropTypes.string,
  error: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    'checkbox',
    'date',
    'number',
    'password',
    'radio',
    'search',
    'text',
  ]),
  value: PropTypes.string,
  width: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
  e2e: 'defaultInput',
  type: 'text',
  width: '100%',
}

export default Input
