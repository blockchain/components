// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { prop, screenSize } from '../../Tools/interpolation'

type PropsType = {
  +children?: React.Node,
  +height?: string,
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${prop<PropsType>('height')};
  padding: 0 2rem;
  box-sizing: border-box;

  @media (min-width: ${screenSize('sm')}) {
    padding: 0 3rem;
  }
`

const Navbar = ({ children, height, ...rest }: PropsType) => (
  <Wrapper height={height} {...rest}>
    {children}
  </Wrapper>
)

Navbar.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  height: '60px',
}

export default Navbar
