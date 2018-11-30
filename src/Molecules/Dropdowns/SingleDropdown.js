// @flow strict
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { InputLabel } from '../../Atoms/Inputs/Input'
import {
  fontSize,
  prop,
  theme,
  type ThemePropType,
} from '../../Tools/interpolation'

type PropsType = {
  +capitalize?: boolean,
  +className?: string,
  +disabled?: boolean,
  +error?: string,
  +input?: {},
  +italic?: boolean,
  +items: Array<{| +text: string, +value: string | number |}>,
  +label?: string,
  +name?: string,
  +size?: string,
  +uppercase?: boolean,
  +value?: string | number,
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

const Select = styled.select`
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

  &:active:not(:disabled),
  &:focus:not(:disabled) {
    box-shadow: 0 0 0 1px
      ${(props: PropsType & ThemePropType) =>
        props.error != null ? 'transparent' : theme('inputActiveColor')};
  }
`

const SingleDropdown = ({
  className,
  input,
  items,
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
      <Select {...input} {...rest}>
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
  italic: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.any,
    }),
  ).isRequired,
  uppercase: PropTypes.bool,
  value: PropTypes.any,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  width: PropTypes.string.isRequired,
}

SingleDropdown.defaultProps = {
  capitalize: false,
  italic: false,
  uppercase: false,
  width: '100%',
}

export default SingleDropdown
