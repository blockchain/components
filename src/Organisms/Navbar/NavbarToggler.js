import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '../../Atoms/Icons'

const Toggler = styled(Icon).attrs({ selectable: true, size: '20px' })`
  z-index: 15;
  margin-right: 20px;

  & > svg {
    fill: ${(props) => props.theme['navbarTogglerColor']};

    &:hover {
      fill: ${(props) => props.theme['navbarTogglerColor']};
    }
  }

  @media (min-width: 48rem) {
    display: none;
  }
`

const NavbarToggler = ({ onToggle, toggled }) => (
  <Toggler
    name={toggled ? 'closeFilled' : 'hamburgerMenu'}
    onClick={onToggle}
  />
)

NavbarToggler.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool,
}

NavbarToggler.defaultProps = {
  toggled: false,
}

export default NavbarToggler
