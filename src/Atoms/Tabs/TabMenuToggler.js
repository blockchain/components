import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasBars } from '../../Atoms/Icons'

const Toggler = styled(FasBars).attrs({
  selectable: true,
  size: '20px',
})`
  position: absolute;
  top: 13px;
  right: 20px;

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    display: none;
  }
`

const TabMenuToggler = ({ onToggle, ...rest }) => (
  <Toggler onClick={onToggle} {...rest} />
)

TabMenuToggler.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
}

export default TabMenuToggler
