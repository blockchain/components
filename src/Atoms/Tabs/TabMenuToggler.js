import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../../Atoms/Icons/Icon'

const Toggler = styled(Icon).attrs({ name: 'hamburgerMenu', size: '20px' })`
  position: absolute;
  top: 10px;
  right: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`

const TabMenuToggler = (props) => <Toggler {...props} />

TabMenuToggler.propTypes = {
  children: PropTypes.node,
}

export default TabMenuToggler
