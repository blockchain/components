import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from '../../Atoms/Inputs'
import { FaIcon } from '../../Atoms/Icons'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.width};
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
  width: 50px;
  height: 2.7rem;
  background-color: ${(props) => props.theme['searchBarIconBackgroundColor']};
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
`

const SearchBar = ({ children, width, value, onChange, onClick, ...rest }) => (
  <Wrapper width={width}>
    <SearchInput onChange={onChange} value={value} {...rest} />
    <IconContainer>
      <FaIcon.Search onClick={onClick} selectable size="1.3rem" />
    </IconContainer>
  </Wrapper>
)

SearchBar.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.any,
  width: PropTypes.string,
}

SearchBar.defaultProps = {
  width: '100%',
}

export default SearchBar
