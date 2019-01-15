// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
import { screenSize, theme } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
  +className?: string,
  +e2e?: string,
  +selected?: boolean,
}

const Wrapper = styled.div.attrs(injectE2E)`
  position: relative;
  flex: 1 auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: ${screenSize('sm')}) {
    order: 1;

    &.hidden {
      order: 2;
    }
  }

  @media (min-width: ${screenSize('sm')}) {
    display: flex;
    justify-content: center;
    order: 1;

    &:hover {
      & :last-child {
        opacity: 1;
      }
    }
  }
`
const Bar = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 0.2rem;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  background-color: ${theme('tabMenuBarColor')};
  opacity: ${(props: PropsType) => (props.selected === true ? '1' : '0')};
`

const TabMenuItem = ({ children, className, selected, ...rest }: PropsType) => (
  <Wrapper
    className={selected === true ? className : `${className || ''} disabled`}
    {...rest}
  >
    {children}
    <Bar selected={selected} />
  </Wrapper>
)

TabMenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  e2e: PropTypes.string,
  selected: PropTypes.bool,
}

TabMenuItem.defaultProps = {
  e2e: 'defaultTabMenuItem',
  selected: false,
}

export default TabMenuItem
