import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { keysIn } from 'ramda'
import { lighten } from 'polished'
import theme from '../../Tools/theme'
import IcomoonMap from './IcomoonMap'

const BaseIcon = styled.span`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  color: ${props => props.theme[props.color]};
  cursor: ${props => props.selectable ? 'pointer' : 'inherit'};
  &:hover {
    color: ${props => props.selectable ? lighten(0.1, props.theme[props.color]) : props.theme[props.color]};
  }
  &:before {
    font-family: 'icomoon';
    content: '${props => props.code}';
  }
`

const Icon = ({ name, selectable, ...rest }) => <BaseIcon {...rest} code={IcomoonMap[name]} selectable={selectable} />

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(keysIn(theme)),
  size: PropTypes.string,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  selectable: PropTypes.bool
}

Icon.defaultProps = {
  name: 'bitcoin',
  color: 'gray-5',
  size: '40px',
  weight: 400,
  selectable: false
}

export default Icon
