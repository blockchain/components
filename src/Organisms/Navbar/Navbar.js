// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { screenSize } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  padding: 0 2rem;
  box-sizing: border-box;

  @media (min-width: ${screenSize('sm')}) {
    padding: 0 3rem;
  }
`

const Navbar = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Navbar
