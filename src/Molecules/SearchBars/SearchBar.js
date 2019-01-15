// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { FasSearch } from '../../Atoms/Icons'
import { Input } from '../../Atoms/Inputs'
import injectE2E from '../../Tools/injectE2E'
import { fontSize, prop, theme } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
  +e2e?: string,
  +onChange?: (SyntheticEvent<HTMLInputElement>) => void,
  +onClick?: (SyntheticEvent<HTMLInputElement>) => void,
  +renderSubmit: React.ComponentType<*>,
  +value?: string | number,
  +width?: string,
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${prop<PropsType>('width')};
  background-color: ${theme('searchBarBackgroundColor')};
  box-shadow: 0 2px 8px 1px ${theme('searchBarShadowColor')};
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
  fill: ${theme('searchBarIconColor')};

  &:hover {
    fill: ${theme('searchBarIconColor')};
  }
`

const SearchInput = styled(Input)`
  & > input {
    height: 3.5rem;
    padding-left: 3rem;
    background-color: inherit;
    border-color: transparent;

    &:focus,
    &:active {
      box-shadow: none !important;
    }
  }
`

const GoContainer = styled.div.attrs({
  'data-e2e': injectE2E,
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 4rem;
  height: 3.5rem;
  padding: 1rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('xl')};
  font-weight: 600;
  color: ${theme('searchBarSubmitColor')};
  background-color: ${theme('searchBarSubmitBackgroundColor')};
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
  white-space: nowrap;

  &:hover {
    background-color: ${theme('searchBarSubmitHoverBackgroundColor')};
    cursor: pointer;
  }
`
const GoLabel = () => <>Go</>

const SearchBar = ({
  children,
  e2e,
  renderSubmit,
  width,
  onChange,
  onClick,
  ...rest
}: PropsType) => {
  const Submit = renderSubmit

  return (
    <Wrapper width={width}>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <SearchInput e2e={`${e2e || ''}.Input`} onChange={onChange} {...rest} />
      <GoContainer e2e={`${e2e || ''}.Button`} onClick={onClick}>
        <Submit />
      </GoContainer>
    </Wrapper>
  )
}

SearchBar.propTypes = {
  children: PropTypes.node,
  e2e: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  renderSubmit: PropTypes.func,
  value: PropTypes.any,
  width: PropTypes.string,
}

SearchBar.defaultProps = {
  e2e: 'defaultSearchBar',
  renderSubmit: GoLabel,
  width: '100%',
}

export default SearchBar
