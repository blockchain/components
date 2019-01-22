// @flow strict
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { InputLabel } from '../../Atoms/Inputs/Input'
import injectE2E from '../../Tools/injectE2E'
import {
  fontSize,
  prop,
  theme,
  type ThemePropType,
} from '../../Tools/interpolation'

export type PropsType = {
  +capitalize?: boolean,
  +className?: string,
  +disabled?: boolean,
  +e2e?: string,
  +error?: string,
  +forwardRef?: React.ElementRef<*>,
  +input?: {},
  +italic?: boolean,
  +items: Array<{ +text: string, +value: string | number }>,
  +label?: string,
  +name?: string,
  +placeholder?: string,
  +size?: string,
  +uppercase?: boolean,
  +weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  +width?: string,
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${prop<PropsType>('width')};
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    right: 1rem;
    bottom: 1.15rem;
    width: 0;
    height: 0;
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-top: 0.4rem solid ${theme('inputColor')};
    pointer-events: none;
  }
`

const Select = styled.select.attrs(injectE2E)`
  width: 100%;
  height: 2.7rem;
  padding: 0 2.4rem 0 1rem;
  color: ${theme('inputColor')};
  background-color: ${theme('inputBackgroundColor')};
  appearance: none;
  font-family: ${theme('fontPrimary')};
  font-weight: ${prop<PropsType>('weight')};
  font-size: ${fontSize('md')};
  font-style: ${(props: PropsType) =>
    props.italic === true ? 'italic' : 'normal'};
  border-width: 1px;
  border-color: ${(props: PropsType & ThemePropType) =>
    props.error != null
      ? theme('dangerColor')(props)
      : theme('inputBorderColor')(props)};
  border-style: solid;
  border-radius: ${theme('inputBorderRadius')};
  cursor: pointer;
  outline: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: box-shadow 0.25s ease-out;

  &:disabled {
    color: ${theme('inputColor')};
    border-color: ${theme('inputBorderColor')};
    background: ${theme('inputBackgroundColorDisabled')};
    cursor: not-allowed;
  }

  &:required:invalid {
    color: ${theme('inputPlaceholderColor')};
  }

  option[value=''][disabled] {
    display: none;
  }

  option {
    color: ${theme('inputColor')};
  }

  &:active:not(:disabled),
  &:focus:not(:disabled) {
    box-shadow: 0 0 0 1px
      ${(props: PropsType & ThemePropType) =>
        props.error != null ? 'transparent' : theme('inputActiveColor')};
  }
`

const SingleDropdown = ({
  className,
  forwardRef: ref,
  input,
  items,
  placeholder,
  width,
  ...rest
}: PropsType) => {
  const hasLabel = rest.label != null
  const hasError = rest.error != null

  return (
    <Wrapper className={className} width={width}>
      {(hasLabel || hasError) && (
        <InputLabel disabled={rest.disabled} error={hasError} name={rest.name}>
          {`${rest.label || ''}${
            hasLabel && hasError ? ' - ' : ''
          }${rest.error || ''}`}
        </InputLabel>
      )}
      <Select
        {...{
          defaultValue: placeholder != null ? '' : undefined,
          ...input,
          ...rest,
          ref,
        }}
      >
        {placeholder != null && (
          <option disabled hidden label={placeholder} value="" />
        )}
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </Select>
    </Wrapper>
  )
}

SingleDropdown.propTypes = {
  capitalize: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  e2e: PropTypes.string,
  error: PropTypes.string,
  forwardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.func }),
  ]),
  input: PropTypes.object,
  italic: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  width: PropTypes.string,
}

SingleDropdown.defaultProps = {
  capitalize: false,
  e2e: 'defaultSingleDropdown',
  italic: false,
  uppercase: false,
  width: '100%',
}

const SingleDropdownWithRef = (props, ref) => (
  <SingleDropdown {...props} forwardRef={ref} />
)

export default React.forwardRef<PropsType, _>(SingleDropdownWithRef)
