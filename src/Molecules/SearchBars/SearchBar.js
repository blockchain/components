import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from '../../Atoms/Inputs'
import { Icon } from '../../Atoms/Icons'

const BaseSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  & > :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  & > :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  background-color: ${props => props.theme['gold']};
`

const SearchBar = ({ children, borderColor }) => (
  <BaseSearchBar>
    <Input borderColor={borderColor} />
    <IconContainer>
      <Icon name='search-filled' size='20px' selectable />
    </IconContainer>
  </BaseSearchBar>
)

SearchBar.propTypes = {
  borderColor: PropTypes.string
}

SearchBar.defaultProps = {
  borderColor: 'white'
}

export default SearchBar
