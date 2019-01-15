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
  size: '1rem',
  weight: 600,
})`
  color: ${theme('navbarDropdownTitleMobileColor')};

  @media (min-width: ${screenSize('sm')}) {
    color: ${theme('navbarDropdownTitleColor')};
  }
`

const NavbarDropdownItemTitle = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownItemTitle.propTypes = {
  children: PropTypes.node,
}

export default NavbarDropdownItemTitle
