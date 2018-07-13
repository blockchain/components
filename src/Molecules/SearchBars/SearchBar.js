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
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > :last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 52px;
  background-color: ${(props) => props.theme['gold']};
`

const SearchBar = ({
  children,
  borderColor,
  value,
  handleChange,
  handleClick,
  ...rest
}) => (
  <BaseSearchBar>
    <Input
      borderColor={borderColor}
      onChange={handleChange}
      value={value}
      {...rest}
    />
    <IconContainer>
      <Icon name="search-filled" onClick={handleClick} selectable size="20px" />
    </IconContainer>
  </BaseSearchBar>
)

SearchBar.propTypes = {
  borderColor: PropTypes.string,
  children: PropTypes.node,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.any,
}

SearchBar.defaultProps = {
  borderColor: 'white',
}

export default SearchBar
