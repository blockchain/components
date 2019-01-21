// @flow strict
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
import {
  fontSize,
  prop,
  theme,
  type ThemePropType,
} from '../../Tools/interpolation'
import { InputLabel, type PropsType as InputPropsType } from './Input'

export type PropsType = InputPropsType & { +height?: string }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${prop<PropsType>('width')};
`

const Wrapper = styled.textarea.attrs(injectE2E)`
  display: block;
  width: ${prop<PropsType>('width')};
  height: ${prop<PropsType>('height')};
  padding: 0.7rem 1rem;
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
  outline-width: 0;
  user-select: text;
  resize: none;
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

const TextArea = ({ forwardRef: ref, input, ...rest }: PropsType) => {
  const hasLabel = rest.label != null
  const hasError = rest.error != null

  if (hasLabel || hasError) {
    return (
      <Container width={rest.width}>
        <InputLabel disabled={rest.disabled} error={hasError} name={rest.name}>
          {`${rest.label || ''}${
            hasLabel && hasError ? ' - ' : ''
          }${rest.error || ''}`}
        </InputLabel>
        <Wrapper {...input} {...rest} ref={ref} />
      </Container>
    )
  }

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

type RefPropsType = { ...PropsType }

const TextAreaWithRef = (props, ref) => <TextArea {...props} forwardRef={ref} />

export default React.forwardRef<RefPropsType, _>(TextAreaWithRef)
