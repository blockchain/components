import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 8px;
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) =>
    props.selected
      ? props.theme['paginationSelectedColor']
      : props.theme['paginationColor']};
  background-color: ${(props) =>
    props.selected
      ? props.theme['paginationSelectedBackgroundColor']
      : props.theme['paginationBackgroundColor']};
  border: 1px solid ${(props) => props.theme['paginationBorderColor']};
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['paginationHoverColor']};
    background-color: ${(props) =>
      props.selected
        ? props.theme['paginationSelectedBackgroundColor']
        : props.theme['paginationHoverBackgroundColor']};
  }
`

const PaginationItem = ({ children, e2e, selected, ...rest }) => (
  <Wrapper
    data-e2e={e2e || 'defaultPaginationItem'}
    selected={selected}
    {...rest}
  >
    {children}
  </Wrapper>
)

PaginationItem.propTypes = {
  children: PropTypes.node,
  e2e: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

PaginationItem.defaultProps = {
  selected: false,
}

export default PaginationItem
