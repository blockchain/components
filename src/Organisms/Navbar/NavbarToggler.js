// @flow strict
import PropTypes from 'prop-types'
import React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import { FasTimes, FasBars, type IconPropsType } from '../../Atoms/Icons'

type PropsType = {
  +onToggle?: (SyntheticEvent<HTMLDivElement>) => void,
  +toggled?: boolean,
}

const TogglerExpand: ReactComponentFunctional<IconPropsType> = styled(
  FasTimes,
).attrs({
  selectable: true,
  size: '20px',
})`
  z-index: 15;
  fill: ${(props) => props.theme.navbarTogglerColor} !important;

  &:hover {
    fill: ${(props) => props.theme.navbarTogglerColor} !important;
  }

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    display: none;
  }
`

const TogglerCollapse: ReactComponentFunctional<IconPropsType> = styled(
  FasBars,
).attrs({
  selectable: true,
  size: '25px',
})`
  z-index: 15;
  fill: ${(props) => props.theme.navbarTogglerColor} !important;

  &:hover {
    fill: ${(props) => props.theme.navbarTogglerColor} !important;
  }

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    display: none;
  }
`

const NavbarToggler = ({ onToggle, toggled }: PropsType) =>
  toggled === true ? (
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
