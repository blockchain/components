// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import { FasBars, type IconPropsType } from '../../Atoms/Icons'
import { screenSize } from '../../Tools/interpolation'

type PropsType = {
  +children?: React.Node,
  +onToggle?: (SyntheticEvent<HTMLDivElement>) => void,
}

const Toggler: ReactComponentFunctional<IconPropsType> = styled(FasBars).attrs({
  selectable: true,
  size: '20px',
})`
  position: absolute;
  right: 20px;

  @media (min-width: ${screenSize('sm')}) {
    display: none;
  }
`

const TabMenuToggler = ({ onToggle, ...rest }: PropsType) => (
  <Toggler onClick={onToggle} {...rest} />
)

TabMenuToggler.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
}

export default TabMenuToggler
