// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
import { fontSize, theme, type ThemePropType } from '../../Tools/interpolation'

export type PropsType = {
  +children: React.Node,
  +e2e?: string,
  +selected?: boolean,
}

const Wrapper = styled.div.attrs(injectE2E)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('sm')};
  font-weight: 500;
  color: ${(props: PropsType & ThemePropType) =>
    props.selected === true
      ? theme('togglerSelectedColor')(props)
      : theme('togglerColor')(props)};
  background-color: ${(props: PropsType & ThemePropType) =>
    props.selected === true
      ? theme('togglerSelectedBackgroundColor')(props)
      : theme('togglerBackgroundColor')(props)};
  cursor: pointer;
  text-transform: uppercase;
`

const TogglerItem = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

TogglerItem.propTypes = {
  children: PropTypes.node,
  e2e: PropTypes.string,
  selected: PropTypes.bool,
}

TogglerItem.defaultProps = {
  e2e: 'defaultTogglerItem',
  selected: false,
}

export default TogglerItem
