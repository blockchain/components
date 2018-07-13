import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { keysIn } from 'ramda'
import { lighten } from 'polished'
import theme from '../../Tools/theme'
import IcomoonMap from './IcomoonMap'

const getHoverColor = (props) =>
  props.selectable
    ? lighten(0.1, props.theme[props.color])
    : props.theme[props.color]

const BaseIcon = styled.span`
  height: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  color: ${(props) => props.theme[props.color]};
  cursor: ${(props) => (props.selectable ? 'pointer' : 'inherit')};

  &:hover {
    color: ${getHoverColor};
  }

  &::before {
    font-family: 'icomoon';
    content: '${(props) => props.code}';
  }
`

const Icon = ({ name, selectable, ...rest }) => (
  <BaseIcon {...rest} code={IcomoonMap[name]} selectable={selectable} />
)

Icon.propTypes = {
  color: PropTypes.oneOf(keysIn(theme)),
  name: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
  size: PropTypes.string,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
}

Icon.defaultProps = {
  color: 'gray-5',
  name: 'bitcoin',
  selectable: false,
  size: '40px',
  weight: 400,
}

export default Icon
