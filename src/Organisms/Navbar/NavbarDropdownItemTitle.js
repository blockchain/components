import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '../../Atoms/Typography/Text'

const Wrapper = styled(Text).attrs({
  size: '1rem',
  weight: 600,
})`
  color: ${(props) => props.theme['navbarDropdownTitleMobileColor']};

  @media (min-width: 48rem) {
    color: ${(props) => props.theme['navbarDropdownTitleColor']};
  }
`

const NavbarDropdownItemTitle = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownItemTitle.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItemTitle
