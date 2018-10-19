// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +capitalize?: boolean,
  +children?: React.Node,
  +italic?: boolean,
  +opacity?: number,
  +size?: string,
  +uppercase?: boolean,
  +weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
}

const Wrapper = styled.span`
  font-family: ${(props) => props.theme['fontPrimary']};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-transform: ${(props) =>
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  color: ${(props) => props.theme['textColor']};
  opacity: ${(props) => props.opacity};
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
