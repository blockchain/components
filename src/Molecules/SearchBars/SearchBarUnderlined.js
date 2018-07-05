import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from '../../Atoms/Inputs'
import { Icon } from '../../Atoms/Icons'

const BaseSearchBarUnderlined = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme['gray-2']};
  background-color: transparent;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  background-color: inherit;
`

const SearchBarUnderlined = ({ children, value, handleChange, handleClick, ...rest }) => (
  <BaseSearchBarUnderlined>
    <Input backgroundColor='transparent' borderColor='transparent' value={value} onChange={handleChange} {...rest} />
    <IconContainer>
      <Icon name='search-filled' size='20px' selectable onClick={handleClick} />
    </IconContainer>
  </BaseSearchBarUnderlined>
)

SearchBarUnderlined.propTypes = {
  value: PropTypes.any,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func
}

export default SearchBarUnderlined
