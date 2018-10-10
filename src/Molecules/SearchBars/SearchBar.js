import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasSearch } from '../../Atoms/Icons'
import { Input } from '../../Atoms/Inputs'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme['searchBarBackgroundColor']};
  box-shadow: 0 2px 8px 1px ${(props) => props.theme['searchBarShadowColor']};
  border-radius: 0.125rem;
`
const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  margin-top: -10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border-color: transparent;
`
const SearchIcon = styled(FasSearch).attrs({
  selectable: false,
  size: '20px',
})`
  fill: ${(props) => props.theme['searchBarIconColor']};

  &:hover {
    fill: ${(props) => props.theme['searchBarIconColor']};
  }
`
const SearchInput = styled(Input)`
  height: 3.5rem;
  padding-left: 3rem;
  background-color: inherit;
  border-color: transparent;
`
const GoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 4rem;
  height: 3.5rem;
  padding: 1rem;
  box-sizing: border-box;
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme['searchBarSubmitColor']};
  background-color: ${(props) => props.theme['searchBarSubmitBackgroundColor']};
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) =>
      props.theme['searchBarSubmitHoverBackgroundColor']};
    cursor: pointer;
  }
`
const GoLabel = () => <React.Fragment>Go</React.Fragment>

const SearchBar = ({
  children,
  e2e,
  renderSubmit,
  width,
  onChange,
  onClick,
  ...rest
}) => (
  <Wrapper width={width}>
    <IconContainer>
      <SearchIcon />
    </IconContainer>
    <SearchInput
      e2e={`${e2e || 'defaultSearchBar'}.Input`}
      onChange={onChange}
      {...rest}
    />
    <GoContainer
      data-e2e={`${e2e || 'defaultSearchBar'}.Button`}
      onClick={onClick}
    >
      {renderSubmit()}
    </GoContainer>
  </Wrapper>
)

SearchBar.propTypes = {
  children: PropTypes.node,
  e2e: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  renderSubmit: PropTypes.func,
  value: PropTypes.any,
  width: PropTypes.string,
}

SearchBar.defaultProps = {
  renderSubmit: GoLabel,
  width: '100%',
}

export default SearchBar
