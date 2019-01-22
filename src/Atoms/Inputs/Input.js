// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
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
  +forwardRef?: React.ElementRef<*>,
  +input?: {},
  +label?: string,
  +name?: string,
  +renderSuffix?: (disabled?: boolean) => React.Node,
  +type: HtmlInputType,
  +value?: string | number,
  +width?: string,
}

type InputPropsType = {
  ...$Exact<$Diff<PropsType, { input: * }>>,
  ...$Exact<$ElementType<PropsType, 'input'>>,
}

type LabelPropsType = {
  children?: React.Node,
  disabled?: boolean,
  error: boolean,
  htmlFor?: string,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${prop<PropsType>('width')};
  position: relative;
`

const InputWrapper = styled.input.attrs(injectE2E)`
  display: block;
  height: 2.7rem;
  width: ${prop<PropsType>('width')};
  padding: 0 1rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('md')};
  color: ${theme('inputColor')};
  border-width: 1px;
  border-color: ${(props: InputPropsType & ThemePropType) =>
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
      ${(props: InputPropsType & ThemePropType) =>
        props.error != null ? 'transparent' : theme('inputActiveColor')};
  }

  &::placeholder {
    color: ${theme('inputPlaceholderColor')};
    font-size: ${fontSize('sm')};
  }
`

export const InputLabel = styled.label`
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('sm')};
  padding-bottom: 0.5rem;
  color: ${(props: LabelPropsType & ThemePropType) =>
    props.error === true && props.disabled !== true
      ? props.theme.dangerColor
      : props.theme.inputLabelColor};
  ${(props: LabelPropsType) =>
    props.disabled === true ? 'cursor: not-allowed' : ''};
`

export const Input = ({
  className = '',
  forwardRef: ref,
  input,
  type,
  renderSuffix,
  ...rest
}: PropsType) => {
  const hasLabel = rest.label != null
  const hasError = rest.error != null

  if (type === 'checkbox') {
    return (
      <Checkbox className={className} input={input} type="checkbox" {...rest} />
    )
  }

  if (type === 'radio') {
    return <Radio className={className} input={input} type="radio" {...rest} />
  }

  if (hasLabel || hasError) {
    return (
      <Container className={className} width={rest.width}>
        <InputLabel
          disabled={rest.disabled}
          error={hasError}
          htmlFor={rest.name}
        >
          {`${rest.label || ''}${
            hasLabel && hasError ? ' - ' : ''
          }${rest.error || ''}`}
        </InputLabel>
        <InputWrapper {...input} {...rest} ref={ref} type={type} />
        {renderSuffix && renderSuffix(rest.disabled)}
      </Container>
    )
  }

  return (
    <Container className={className} width={rest.width}>
      <InputWrapper {...input} {...rest} ref={ref} type={type} />
      {renderSuffix && renderSuffix(rest.disabled)}
    </Container>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  e2e: PropTypes.string,
  error: PropTypes.string,
  forwardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.func }),
  ]),
  input: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  renderSuffix: PropTypes.func,
  type: PropTypes.oneOf([
    'checkbox',
    'date',
    'number',
    'password',
    'radio',
    'search',
    'text',
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
}

Input.defaultProps = {
  disabled: false,
  e2e: 'defaultInput',
  type: 'text',
  width: '100%',
}

type RefPropsType = { ...PropsType }

const InputWithRef = (props, ref) => <Input {...props} forwardRef={ref} />

export default React.forwardRef<RefPropsType, _>(InputWithRef)
