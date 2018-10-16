import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasTimes, FasBars } from '../../Atoms/Icons'

const TogglerExpand = styled(FasTimes).attrs({
  selectable: true,
  size: '20px',
})`
  z-index: 15;
  fill: ${(props) => props.theme['navbarTogglerColor']} !important;

  &:hover {
    fill: ${(props) => props.theme['navbarTogglerColor']} !important;
  }

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    display: none;
  }
`

const TogglerCollapse = styled(FasBars).attrs({
  selectable: true,
  size: '25px',
})`
  z-index: 15;
  fill: ${(props) => props.theme['navbarTogglerColor']} !important;

  &:hover {
    fill: ${(props) => props.theme['navbarTogglerColor']} !important;
  }

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    display: none;
  }
`

const NavbarToggler = ({ onToggle, toggled }) =>
  toggled ? (
    <TogglerExpand onClick={onToggle} />
  ) : (
    <TogglerCollapse onClick={onToggle} />
  )

NavbarToggler.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool,
}

NavbarToggler.defaultProps = {
  toggled: false,
}

export default NavbarToggler
