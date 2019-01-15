// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import { screenSize } from '../../Tools/interpolation'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 1.5rem;
  box-sizing: border-box;

  @media (min-width: ${screenSize('sm')}) {
    height: auto;
    overflow-y: none;
  }
`

export type PropsType = {
  +children?: React.Node,
}

const ModalBody = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

ModalBody.propTypes = {
  children: PropTypes.node,
}

export default ModalBody
