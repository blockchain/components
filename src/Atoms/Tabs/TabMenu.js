import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid ${props => props.theme['gray-1']};
  box-sizing: border-box;
`

const BaseItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover { & :last-child { display: inline-block!important; } }
`
const ItemBar = styled.div`
  display: ${props => props.visible ? 'inline-block' : 'none'}; 
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: ${props => props.theme['gold']};
`

const Container = ({ children }) => (
  <BaseContainer>
    {children}
  </BaseContainer>
)

const Item = ({ children, selected, rest }) => (
  <BaseItem {...rest}>
    {children}
    <ItemBar visible={selected} />
  </BaseItem>
)

Item.propTypes = {
  selected: PropTypes.bool
}

Item.defaultProps = {
  selected: false
}

export {
  Container,
  Item
}


