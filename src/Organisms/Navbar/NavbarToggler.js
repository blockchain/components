// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { FasTimes, FasBars } from '../../Atoms/Icons'
import { screenSize, theme } from '../../Tools/interpolation'

export type PropsType = {
  +onToggle?: (SyntheticEvent<HTMLDivElement>) => void,
  +toggled?: boolean,
}

const TogglerExpand = styled(FasTimes)`
  fill: ${theme('navbarTogglerColor')};
  z-index: ${theme('navbarTogglerZIndex')};

  &:hover {
    fill: ${theme('navbarTogglerColor')};
  }

  @media (min-width: ${screenSize('sm')}) {
    display: none;
  }
`

const TogglerCollapse = styled(FasBars)`
  fill: ${theme('navbarTogglerColor')} !important;

  &:hover {
    fill: ${theme('navbarTogglerColor')} !important;
  }

  @media (min-width: ${screenSize('sm')}) {
    display: none;
  }
`

const NavbarToggler = ({ onToggle, toggled }: PropsType) =>
  toggled === true ? (
    <TogglerExpand onClick={onToggle} selectable size="20px" />
  ) : (
    <TogglerCollapse onClick={onToggle} selectable size="25px" />
  )

NavbarToggler.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool,
}

NavbarToggler.defaultProps = {
  toggled: false,
}

export default NavbarToggler
