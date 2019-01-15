// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { prop, screenSize } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
  +toggled?: boolean,
  +width?: string,
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;

  @media (max-width: ${screenSize('sm')}) {
    & > li:first-child {
      border-top: none;
    }
  }

  @media (min-width: ${screenSize('sm')}) {
    display: ${(props: PropsType) =>
      props.toggled === true ? 'flex' : 'none'};
    flex-direction: row;
    align-items: center;
    height: auto;
    width: ${prop<PropsType>('width')};
  }
`

const NavbarNav = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarNav.propTypes = {
  children: PropTypes.node,
  toggled: PropTypes.bool,
  width: PropTypes.string,
}

NavbarNav.defaultProps = {
  toggled: true,
  width: '100%',
}

export default NavbarNav
