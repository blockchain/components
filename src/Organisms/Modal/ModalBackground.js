// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../../Tools/interpolation'

type PropsType = {
  +children?: React.Node,
}

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
  background-color: ${theme('modalBackgroundColor')};
  transform: translateZ(0);
  z-index: ${theme('modalZIndex')};
`

const ModalBackground = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

ModalBackground.propTypes = {
  children: PropTypes.node,
}

export default ModalBackground
