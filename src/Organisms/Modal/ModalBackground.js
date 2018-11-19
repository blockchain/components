// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['modalBackgroundColor']};
  z-index: 2000;
  transform: translateZ(0);
`

type PropsType = {
  +children?: React.Node,
}

const ModalBackground = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

ModalBackground.propTypes = {
  children: PropTypes.node,
}

export default ModalBackground
