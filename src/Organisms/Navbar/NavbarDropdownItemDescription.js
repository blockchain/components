// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import Text from '../../Atoms/Typography/Text'
import { screenSize, theme } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled(Text)`
  color: ${theme('navbarDropdownDescriptionMobileColor')};

  @media (min-width: ${screenSize('sm')}) {
    color: ${theme('navbarDropdownDescriptionColor')};
  }
`

const NavbarDropdownItemDescription = ({ children, ...rest }: PropsType) => (
  <Wrapper size="0.875rem" weight={500} {...rest}>
    {children}
  </Wrapper>
)

NavbarDropdownItemDescription.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItemDescription
