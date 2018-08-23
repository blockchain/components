import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from '../../Atoms/Links/Link'

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
`

const NavbarDropdownItem = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownItem.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItem
