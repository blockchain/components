// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'

type PropsType = {
  +capitalize?: boolean,
  +children?: React.Node,
  +e2e?: string,
  +italic?: boolean,
  +opacity?: number,
  +size?: string,
  +uppercase?: boolean,
  +weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
}

const Wrapper = styled.a.attrs({
  'data-e2e': injectE2E,
})`
  font-family: ${(props) => props.theme['fontPrimary']};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-transform: ${(props) =>
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  color: ${(props) => props.theme['linkColor']};
  opacity: ${(props) => props.opacity};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme['linkHoverColor']};
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
