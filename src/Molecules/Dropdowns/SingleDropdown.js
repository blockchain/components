import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.width};
  border-radius: 3px;

  &::after {
    content: '';
    position: relative;
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
  width: calc(100% - 30px);
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
  text-overflow: ellipsis;
  white-space: nowrap;
`

const SingleDropdown = ({ items, width, ...rest }) => (
  <Wrapper width={width}>
    <Select {...rest}>
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
