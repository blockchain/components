// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
import { prop, theme } from '../../Tools/interpolation'

export type PropsType = {
  +capitalize?: boolean,
  +children?: React.Node,
  +e2e?: string,
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

const Wrapper: ReactComponentFunctional<PropsType> = styled.a.attrs({
  'data-e2e': injectE2E,
})`
  font-family: ${theme('fontPrimary')};
  font-weight: ${prop<PropsType>('weight')};
  font-size: ${prop<PropsType>('size')};
  text-transform: ${getTextTransform};
  font-style: ${(props: PropsType) =>
    props.italic === true ? 'italic' : 'normal'};
  color: ${theme('linkColor')};
  opacity: ${prop<PropsType>('opacity')};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${theme('linkHoverColor')};
    text-decoration: none;
  }
`

const Link = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Link.propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  e2e: PropTypes.string,
  italic: PropTypes.bool,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700]),
}

Link.defaultProps = {
  capitalize: false,
  e2e: 'defaultLink',
  italic: false,
  opacity: 1,
  size: '1rem',
  uppercase: false,
  weight: 400,
}

export default Link
