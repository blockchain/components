// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { FasSearch } from '../../Atoms/Icons'
import { Input } from '../../Atoms/Inputs'
import injectE2E from '../../Tools/injectE2E'
import { prop, theme } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
  +e2e?: string,
  +onChange?: (SyntheticEvent<HTMLInputElement>) => void,
  +onClick?: (SyntheticEvent<HTMLInputElement>) => void,
  +value?: string | number,
  +width?: string,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${prop<PropsType>('width')};
  border-bottom: 1px solid ${theme('searchBarUnderlinedBorderColor')};
  background-color: ${theme('searchBarUnderlinedBackgroundColor')};
`

const SearchInput = styled(Input)`
  & > input {
    background-color: inherit;
    border-color: transparent;

    &:focus,
    &:active {
      box-shadow: none !important;
    }
  }
`

const IconContainer = styled.div.attrs({
  'data-e2e': injectE2E,
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
`

const SearchBarUnderlined = ({
  children,
  e2e,
  onChange,
  onClick,
  value,
  width,
  ...rest
}: PropsType) => (
  <Wrapper width={width}>
    <SearchInput
      e2e={`${e2e || ''}.Input`}
      onChange={onChange}
      value={value}
      {...rest}
    />
    <IconContainer e2e={`${e2e || ''}.Button`} onClick={onClick}>
      <FasSearch selectable size="20px" />
    </IconContainer>
  </Wrapper>
)

SearchBarUnderlined.propTypes = {
  children: PropTypes.node,
  e2e: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.any,
  width: PropTypes.string,
}

SearchBarUnderlined.defaultProps = {
  e2e: 'defaultSearchBarUnderlined',
  width: '100%',
}

export default SearchBarUnderlined
