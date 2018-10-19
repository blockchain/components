// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +children?: React.Node,
  +height?: string,
  +width?: string,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  box-shadow: 0 0 1.5rem 0.4rem ${(props) => props.theme['panelShadowColor']};
  background-color: ${(props) => props.theme['panelBackgroundColor']};
`

const Panel = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Panel.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
}

Panel.defaultProps = {
  height: 'auto',
  width: '100%',
}

export default Panel
