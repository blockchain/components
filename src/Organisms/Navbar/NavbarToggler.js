import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaIcon } from '../../Atoms/Icons'

const TogglerExpand = styled(FaIcon.Bars).attrs({
  selectable: true,
  size: '20px',
})`
  z-index: 15;
  fill: ${(props) => props.theme['navbarTogglerColor']} !important;

  &:hover {
    fill: ${(props) => props.theme['navbarTogglerColor']} !important;
  }

  @media (min-width: 48rem) {
    display: none;
  }
`

const TogglerCollapse = styled(FaIcon.Times).attrs({
  selectable: true,
  size: '25px',
})`
  z-index: 15;
  fill: ${(props) => props.theme['navbarTogglerColor']} !important;

  &:hover {
    fill: ${(props) => props.theme['navbarTogglerColor']} !important;
  }

  @media (min-width: 48rem) {
    display: none;
  }
`

const NavbarToggler = ({ onToggle, toggled }) =>
  toggled ? (
    <TogglerCollapse onClick={onToggle} />
  ) : (
    <TogglerExpand onClick={onToggle} />
  )

NavbarToggler.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool,
}

NavbarToggler.defaultProps = {
  toggled: false,
}

export default NavbarToggler
