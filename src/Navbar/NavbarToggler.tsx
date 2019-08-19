// import PropTypes from 'prop-types'
// import * as React from 'react'
// import styled from 'styled-components'

// import { FasTimes, FasBars } from '../Atoms/Icons'
// import interpolation from '../Tools/interpolation'

// interface Props {
//   onToggle: () => void,
//   toggled: boolean,
// }

// const TogglerExpand = styled(FasTimes)`
//   fill: ${interpolation.theme('navbarTogglerColor')};
//   z-index: ${interpolation.theme('navbarTogglerZIndex')};
//   &:hover {
//     fill: ${interpolation.theme('navbarTogglerColor')};
//   }
//   @media (min-width: ${interpolation.screenSize('sm')}) {
//     display: none;
//   }
// `

// const TogglerCollapse = styled(FasBars)`
//   fill: ${interpolation.theme('navbarTogglerColor')} !important;
//   &:hover {
//     fill: ${interpolation.theme('navbarTogglerColor')} !important;
//   }
//   @media (min-width: ${interpolation.screenSize('sm')}) {
//     display: none;
//   }
// `

// const NavbarToggler = ({ onToggle, toggled }: Props) =>
//     toggled === true ? (
//         <TogglerExpand onClick={onToggle} selectable size="20px" />
//     ) : (
//             <TogglerCollapse onClick={onToggle} selectable size="25px" />
//         )

// NavbarToggler.propTypes = {
//     onToggle: PropTypes.func.isRequired,
//     toggled: PropTypes.bool,
// }

// NavbarToggler.defaultProps = {
//     toggled: false,
// }

// export default NavbarToggler
