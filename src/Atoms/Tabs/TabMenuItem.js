import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  flex: 1 auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 48rem) {
    order: 1;

    &.hidden {
      order: 2;
    }
  }

  @media (min-width: 48rem) {
    display: flex;
    justify-content: center;
    order: 1;

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
  height: 0.2rem;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  background-color: ${(props) => props.theme['tabMenuBarColor']};
  opacity: ${(props) => (props.selected ? '1' : '0')};
`

const TabMenuItem = ({ children, className, e2e, selected, ...rest }) => (
  <Wrapper
    className={selected ? className : `${className} disabled`}
    data-e2e={e2e || 'defaultTabMenuItem'}
    {...rest}
  >
    {children}
    <Bar selected={selected} />
  </Wrapper>
)

TabMenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  e2e: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

TabMenuItem.defaultProps = {
  selected: false,
}

export default TabMenuItem
