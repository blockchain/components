import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageMap from '../../Atoms/Images/ImageMap'

const Wrapper = styled.select`
  margin-bottom: 0;
  min-width: 6rem;
  box-sizing: border-box;
  color: ${(props) => props.theme['dropdownColor']};
  background-color: ${(props) => props.theme['dropdownBackgroundColor']};
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: 95% 0%;
  background-image: url(${ImageMap.arrowDownSolid});
  appearance: none;
  border: none;
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-transform: ${(props) =>
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  border-radius: 0.3rem;
  height: 2.5rem;
  line-height: 2.5rem;
  cursor: pointer;
  outline: none;
  text-align: left;
`

const SingleDropdown = ({ items, ...rest }) => (
  <Wrapper {...rest}>
    {items.map((item) => (
      <option key={item.value} value={item.value}>
        {item.text}
      </option>
    ))}
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
}

SingleDropdown.defaultProps = {
  capitalize: false,
  italic: false,
  size: '1rem',
  uppercase: false,
  weight: 300,
}

export default SingleDropdown
