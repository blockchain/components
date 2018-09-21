import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasBars } from '../../Atoms/Icons'

const Toggler = styled(FasBars).attrs({
  selectable: true,
  size: '1.3rem',
})`
  position: absolute;
  top: 10px;
  right: 20px;

  @media (min-width: 48rem) {
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
