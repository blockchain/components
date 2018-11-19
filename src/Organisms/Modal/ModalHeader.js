// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../../Tools/interpolation'

type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme('modalBorderColor')};
`

const ModalHeader = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

ModalHeader.propTypes = {
  children: PropTypes.node,
}

export default ModalHeader
