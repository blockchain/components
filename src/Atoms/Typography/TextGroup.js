// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +align?: 'center' | 'justify' | 'left' | 'right',
  +capitalize?: boolean,
  +children?: React.Node,
  +inline?: boolean,
}

const Wrapper = styled.div`
  text-align: ${(props) => props.align};

  & > * {
    display: ${(props) => (props.inline ? 'inline' : 'block')};
    margin-right: ${(props) => (props.inline ? '0.4rem' : '0')};
  }
`

const TextGroup = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

TextGroup.propTypes = {
  align: PropTypes.oneOf(['justify', 'left', 'right', 'center']),
  children: PropTypes.node,
  inline: PropTypes.bool,
}

TextGroup.defaultProps = {
  align: 'justify',
  inline: true,
}

export default TextGroup
