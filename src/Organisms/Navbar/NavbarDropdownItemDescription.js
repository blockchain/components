import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '../../Atoms/Typography/Text'

const Wrapper = styled(Text).attrs({
  size: '0.875rem',
  weight: 500,
})`
  color: ${(props) => props.theme['navbarDropdownDescriptionMobileColor']};

  @media (min-width: 48rem) {
    color: ${(props) => props.theme['navbarDropdownDescriptionColor']};
  }
`

const NavbarDropdownItemDescription = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownItemDescription.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItemDescription
