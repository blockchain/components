import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme['tabMenuBorderColor']};
  box-sizing: border-box;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.width};
`

const TabMenu = ({ children, width }) => (
  <Wrapper>
    <Container width={width}>{children}</Container>
  </Wrapper>
)

TabMenu.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
}

TabMenu.defaultProps = {
  width: '100%',
}

export default TabMenu
