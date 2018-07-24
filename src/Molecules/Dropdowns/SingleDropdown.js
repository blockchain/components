import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { keysIn } from 'ramda'

import ImageMap from '../../Atoms/Images/ImageMap'
import theme from '../../Tools/theme'

const Wrapper = styled.select`
  margin-bottom: 0;
  min-width: 100px;
  box-sizing: border-box;
  color: ${(props) => props.theme[props.color]};
  background-color: ${(props) => props.theme[props.backgroundColor]};
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 95% center;
  background-image: url(${ImageMap.partialArrowDown});
  appearance: none;
  border: none;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-transform: ${(props) =>
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  border-radius: 5px;
  height: 2.5rem;
  line-height: 2.5rem;
  cursor: pointer;
  outline: none;
  text-align: left;
`

const SingleDropdown = ({ items, value, handleChange, ...rest }) => (
  <Wrapper {...rest} onChange={handleChange} value={value}>
    {items.map((item) => (
      <option key={item.value} value={item.value}>
        {item.text}
      </option>
    ))}
  </Wrapper>
)

SingleDropdown.propTypes = {
  backgroundColor: PropTypes.oneOf(keysIn(theme)),
  capitalize: PropTypes.bool,
  color: PropTypes.oneOf(keysIn(theme)),
  handleChange: PropTypes.func.isRequired,
  italic: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.any,
    }),
  ).isRequired,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  value: PropTypes.any,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
}

SingleDropdown.defaultProps = {
  backgroundColor: 'transparent',
  capitalize: false,
  color: 'gray6',
  italic: false,
  size: '16px',
  uppercase: false,
  weight: 300,
}

export default SingleDropdown
