import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../Tools/theme'
import { keysIn } from 'ramda'

const BaseText = styled.span`
  font-family: 'Montserrat', helvetica, sans serif;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  text-transform: ${props => props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  color: ${props => props.theme[props.color]};
  opacity: ${props => props.opacity};
`

const Text = ({ children, weight, size, uppercase, capitalize, italic, color, opacity }) => (
  <BaseText color={color} size={size} weight={weight} uppercase={uppercase} capitalize={capitalize} italic={italic} opacity={opacity}>
    {children}
  </BaseText>
)

Text.propTypes = {
  color: PropTypes.oneOf(keysIn(theme)),
  size: PropTypes.string,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  italic: PropTypes.bool,
  opacity: PropTypes.number
}

Text.defaultProps = {
  color: 'gray-5',
  size: '14px',
  weight: 300,
  uppercase: false,
  capitalize: false,
  italic: false,
  opacity: 1
}

export default Text
