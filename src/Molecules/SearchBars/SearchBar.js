import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from '../../Atoms/Inputs'
import { Icon } from '../../Atoms/Icons'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme['searchBarInputBackgroundColor']};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 52px;
  background-color: ${(props) => props.theme['searchBarIconBackgroundColor']};
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
`

const SearchBar = ({ children, value, onChange, onClick, ...rest }) => (
  <Wrapper>
    <SearchInput onChange={onChange} value={value} {...rest} />
    <IconContainer>
      <Icon name="searchFilled" onClick={onClick} selectable size="1.3rem" />
    </IconContainer>
  </Wrapper>
)

SearchBar.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.any,
}

export default SearchBar
