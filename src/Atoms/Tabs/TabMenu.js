import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-bottom: 2px solid ${(props) => props.theme['tabMenuBorderColor']};
  box-sizing: border-box;
`
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  min-height: 100%;

  @media (max-width: 767px) {
    & > .hidden {
      display: ${(props) => (props.toggled ? 'flex' : 'none')};
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const TabMenu = ({ children, toggled, ...rest }) => (
  <Wrapper {...rest}>
    <Container toggled={toggled}>{children}</Container>
  </Wrapper>
)

TabMenu.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  toggled: PropTypes.bool,
  width: PropTypes.string,
}

TabMenu.defaultProps = {
  height: '50px',
  toggled: false,
  width: '100%',
}

export default TabMenu
