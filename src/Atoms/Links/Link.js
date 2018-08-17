import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.a`
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

const Link = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

Link.propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  italic: PropTypes.bool,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700]),
}

Link.defaultProps = {
  capitalize: false,
  italic: false,
  opacity: 1,
  size: '1rem',
  uppercase: false,
  weight: 400,
}

export default Link
