// @flow strict
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme, type ThemePropType } from '../../Tools/interpolation'

type PropsType = {
  +capitalize?: boolean,
  +className?: string,
  +inline?: boolean,
  +italic?: boolean,
  +items: Array<{| +text: string, +value: string | number |}>,
  +onChange?: (SyntheticEvent<HTMLSelectElement>) => void,
  +size?: string,
  +uppercase?: boolean,
  +value?: string | number,
  +weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  +width?: string,
}

const getTextTransform = (props: PropsType) => {
  if (props.capitalize === true) {
    return 'capitalize'
  }

  if (props.uppercase === true) {
    return 'uppercase'
  }

  return 'none'
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${prop<PropsType>('width')};
  height: 2.7rem;
  box-sizing: border-box;
  background-color: ${theme('inputBackgroundColor')};
  background-image: none;
  outline-width: 0;
  user-select: text;

  &::after {
    content: '';
    position: absolute;
    right: 1rem;
    top: 50%;
    margin-top: -3px;
    margin-left: 5px;
    text-align: center;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${theme('inputColor')};
    pointer-events: none;
  }

  &:hover {
    background-color: ${(props: PropsType & ThemePropType) =>
      props.inline === true
        ? theme('inputBackgroundColorFocus')(props)
        : 'inherit'};
  }
`

const Select = styled.select`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 2.4rem 0 1.4rem;
  color: ${theme('inputColor')};
  background-color: transparent;
  appearance: none;
  font-family: ${theme('fontPrimary')};
  font-size: ${prop<PropsType>('size')};
  font-weight: ${prop<PropsType>('weight')};
  text-transform: ${getTextTransform};
  font-style: ${(props: PropsType) =>
    props.italic === true ? 'italic' : 'normal'};
  border-width: 1px;
  border-color: ${(props: PropsType & ThemePropType) =>
    props.inline === true ? 'transparent' : theme('inputBorderColor')(props)};
  border-style: solid;
  border-radius: ${theme('inputBorderRadius')};
  border-radius: ${theme('inputBorderRadius')};
  cursor: pointer;
  outline: none;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${theme('inputBorderColor')};
  }
`

const SingleDropdown = ({
  className,
  inline,
  items,
  width,
  ...rest
}: PropsType) => (
  <Wrapper className={className} inline={inline} width={width}>
    <Select inline={inline} {...rest}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </Select>
  </Wrapper>
)

SingleDropdown.propTypes = {
  capitalize: PropTypes.bool,
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.any,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  value: PropTypes.any,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  width: PropTypes.string.isRequired,
}

SingleDropdown.defaultProps = {
  capitalize: false,
  italic: false,
  size: '1rem',
  uppercase: false,
  width: '100%',
}

export default SingleDropdown
