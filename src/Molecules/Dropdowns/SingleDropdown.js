import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${(props) => props.width};
  min-width: 6rem;
  position: relative;
  border-radius: 3px;

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -5px;
    z-index: 1;
    text-align: center;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${(props) => props.theme['dropdownArrowColor']};
    pointer-events: none;
  }
`
const Select = styled.select`
  position: relative;
  width: 100%;
  color: ${(props) => props.theme['dropdownColor']};
  background-color: transparent;
  appearance: none;
  border: none;
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-transform: ${(props) =>
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  border-radius: 0.3rem;
  cursor: pointer;
  outline: none;
  text-align: left;
  padding: 0.4rem 0;
  box-sizing: border-box;
`

const SingleDropdown = ({
  capitalize,
  italic,
  items,
  size,
  uppercase,
  weight,
  width,
  ...rest
}) => (
  <Wrapper width={width} {...rest}>
    <Select
      capitalize={capitalize}
      italic={italic}
      size={size}
      uppercase={uppercase}
      weight={weight}
    >
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
  weight: 300,
  width: '100%',
}

export default SingleDropdown
