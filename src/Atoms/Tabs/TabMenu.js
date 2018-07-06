import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseTabMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme['gray-1']};
  box-sizing: border-box;
`

const TabMenu = ({ children }) => <BaseTabMenu>{children}</BaseTabMenu>

TabMenu.propTypes = {
  children: PropTypes.node,
}

export default TabMenu
