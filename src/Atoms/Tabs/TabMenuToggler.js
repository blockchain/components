// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { FasBars } from '../../Atoms/Icons'
import { screenSize } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
  +onToggle?: (SyntheticEvent<HTMLDivElement>) => void,
}

const Toggler = styled(FasBars)`
  position: absolute;
  right: 20px;

  @media (min-width: ${screenSize('sm')}) {
    display: none;
  }
`

const TabMenuToggler = ({ onToggle, ...rest }: PropsType) => (
  <Toggler onClick={onToggle} selected size="20px" {...rest} />
)

TabMenuToggler.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
}

export default TabMenuToggler
