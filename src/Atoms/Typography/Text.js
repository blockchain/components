// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { prop, theme } from '../../Tools/interpolation'

export type PropsType = {
  +capitalize?: boolean,
  +children?: React.Node,
  +italic?: boolean,
  +opacity?: number,
  +size?: string,
  +uppercase?: boolean,
  +weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
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

const Wrapper = styled.span`
  font-family: ${theme('fontPrimary')};
  font-weight: ${prop<PropsType>('weight')};
  font-size: ${prop<PropsType>('size')};
  text-transform: ${getTextTransform};
  font-style: ${(props: PropsType) =>
    props.italic === true ? 'italic' : 'normal'};
  color: ${theme('textColor')};
  opacity: ${prop<PropsType>('opacity')};
`

const Text = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Text.propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  italic: PropTypes.bool,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700]),
}

Text.defaultProps = {
  capitalize: false,
  italic: false,
  opacity: 1,
  size: '1rem',
  uppercase: false,
  weight: 400,
}

export default Text
