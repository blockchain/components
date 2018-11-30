// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import injectE2E, { type E2ePropType } from '../../Tools/injectE2E'
import { fontSize, theme, type ThemePropType } from '../../Tools/interpolation'

const Wrapper: ReactComponentFunctional<E2ePropType> = styled.a.attrs({
  'data-e2e': injectE2E,
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 8px;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('md')};
  font-weight: 500;
  color: ${(props: PropsType & ThemePropType) =>
    props.selected === true
      ? theme('paginationSelectedColor')(props)
      : theme('paginationColor')(props)};
  background-color: ${(props: PropsType & ThemePropType) =>
    props.selected === true
      ? theme('paginationSelectedBackgroundColor')(props)
      : theme('paginationBackgroundColor')(props)};
  border: 1px solid ${theme('paginationBorderColor')};
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    color: ${theme('paginationHoverColor')};
    background-color: ${(props: PropsType & ThemePropType) =>
      props.selected === true
        ? theme('paginationSelectedBackgroundColor')(props)
        : theme('paginationHoverBackgroundColor')(props)};
  }
`

type PropsType = {
  +children?: React.Node,
  +e2e?: string,
  +selected?: boolean,
}

const PaginationItem = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

PaginationItem.propTypes = {
  children: PropTypes.node,
  e2e: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

PaginationItem.defaultProps = {
  e2e: 'defaultPaginationItem',
  selected: false,
}

export default PaginationItem
