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
  border-bottom: 1px solid
    ${(props) => props.theme['searchBarUnderlinedBorderColor']};
  background-color: ${(props) =>
    props.theme['searchBarUnderlinedBackgroundColor']};
`
const SearchInput = styled(Input)`
  background-color: inherit;
  border-color: transparent;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
`

const SearchBarUnderlined = ({
  children,
  value,
  handleChange,
  handleClick,
  ...rest
}) => (
  <Wrapper>
    <SearchInput onChange={handleChange} value={value} {...rest} />
    <IconContainer>
      <Icon name="search-filled" onClick={handleClick} selectable size="20px" />
    </IconContainer>
  </Wrapper>
)

SearchBarUnderlined.propTypes = {
  children: PropTypes.node,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  value: PropTypes.any,
}

export default SearchBarUnderlined
