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
  color: ${theme('navbarDropdownTitleMobileColor')};

  @media (min-width: ${screenSize('sm')}) {
    color: ${theme('navbarDropdownTitleColor')};
  }
`

const NavbarDropdownItemTitle = ({ children, ...rest }: PropsType) => (
  <Wrapper size="1rem" weight={600} {...rest}>
    {children}
  </Wrapper>
)

NavbarDropdownItemTitle.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItemTitle
