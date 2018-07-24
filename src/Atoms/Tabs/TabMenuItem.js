import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  flex: 1 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    & :last-child {
      opacity: 1 !important;
    }
  }
`
const Bar = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 5px;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  background-color: ${(props) => props.theme['gold']};
  opacity: ${(props) => (props.visible ? '1' : '0')};
`

const TabMenuItem = ({ children, selected, ...rest }) => (
  <Wrapper {...rest}>
    {children}
    <Bar visible={selected} />
  </Wrapper>
)

TabMenuItem.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool,
}

TabMenuItem.defaultProps = {
  selected: false,
}

export default TabMenuItem
