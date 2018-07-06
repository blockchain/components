import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { keysIn } from 'ramda'
import theme from '../../Tools/theme'

const BaseText = styled.span`
  font-family: 'Montserrat', helvetica, sans serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-transform: ${(props) =>
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  color: ${(props) => props.theme[props.color]};
  opacity: ${(props) => props.opacity};
`

const Text = ({
  children,
  weight,
  size,
  uppercase,
  capitalize,
  italic,
  color,
  opacity,
  ...rest
}) => (
  <BaseText
    capitalize={capitalize}
    color={color}
    italic={italic}
    opacity={opacity}
    size={size}
    uppercase={uppercase}
    weight={weight}
    {...rest}
  >
    {children}
  </BaseText>
)

Text.propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(keysIn(theme)),
  italic: PropTypes.bool,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
}

Text.defaultProps = {
  capitalize: false,
  color: 'gray-5',
  italic: false,
  opacity: 1,
  size: '14px',
  uppercase: false,
  weight: 300,
}

export default Text
