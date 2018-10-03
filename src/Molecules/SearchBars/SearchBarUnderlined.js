import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasSearch } from '../../Atoms/Icons'
import { Input } from '../../Atoms/Inputs'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.width};
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
  width,
  onChange,
  onClick,
  value,
  ...rest
}) => (
  <Wrapper width={width}>
    <SearchInput onChange={onChange} value={value} {...rest} />
    <IconContainer>
      <FasSearch onClick={onClick} selectable size="20px" />
    </IconContainer>
  </Wrapper>
)

SearchBarUnderlined.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.any,
  width: PropTypes.string,
}

SearchBarUnderlined.defaultProps = {
  width: '100%',
}

export default SearchBarUnderlined
