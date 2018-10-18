// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import Link from '../../Atoms/Links/Link'

type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  height: 2.5rem;
  margin-bottom: 1.5rem;
  white-space: nowrap;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    &:hover span:first-child {
      text-decoration: underline;
    }
  }
`

const NavbarDropdownItem = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownItem.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItem
