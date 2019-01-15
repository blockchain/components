// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import Text, {
  type PropsType as TextPropsType,
} from '../../Atoms/Typography/Text'
import { screenSize, theme } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
}

const Wrapper: ReactComponentFunctional<TextPropsType> = styled(Text).attrs({
  size: '0.875rem',
  weight: 500,
})`
  color: ${theme('navbarDropdownDescriptionMobileColor')};

  @media (min-width: ${screenSize('sm')}) {
    color: ${theme('navbarDropdownDescriptionColor')};
  }
`

const NavbarDropdownItemDescription = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownItemDescription.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItemDescription
