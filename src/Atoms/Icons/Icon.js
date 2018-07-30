import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from './../Typography/Text'
import IcomoonMap from './IcomoonMap'

const getHoverColor = (selectable, theme) =>
  selectable ? theme['iconHoverColor'] : theme['iconColor']

const Wrapper = styled(Text)`
  color: ${(props) => props.theme['iconColor']};
  cursor: ${(props) => (props.selectable ? 'pointer' : 'inherit')};

  &:hover {
    color: ${(props) => getHoverColor(props.selectable, props.theme)};
  }

  &::before {
    font-family: 'icomoon';
    content: '${(props) => props.code}';
  }
`

const Icon = ({ name, ...rest }) => (
  <Wrapper {...rest} code={IcomoonMap[name]} />
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
}

Icon.defaultProps = {
  name: 'bitcoin',
  selectable: false,
  size: '40px',
  weight: 400,
}

export default Icon
