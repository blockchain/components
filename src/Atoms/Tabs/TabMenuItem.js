import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  flex: 1 auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  order: 1;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;

  &.hidden {
    order: 2;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;

    &:hover {
      & :last-child {
        opacity: 1;
      }
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
  background-color: ${(props) => props.theme['tabMenuBarColor']};
  opacity: ${(props) => (props.selected ? '1' : '0')};
`

const TabMenuItem = ({ children, className, selected, ...rest }) => (
  <Wrapper className={selected ? '' : 'hidden'} {...rest}>
    {children}
    <Bar selected={selected} />
  </Wrapper>
)

TabMenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selected: PropTypes.bool,
}

TabMenuItem.defaultProps = {
  selected: false,
}

export default TabMenuItem
