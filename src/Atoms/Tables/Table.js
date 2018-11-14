// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { theme } from '../../Tools/interpolation'

type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  box-shadow: 0 0 1.5rem 0.4rem ${theme('tableShadowColor')};

  & > :nth-child(even) {
    background-color: ${theme('tableCellEvenBackgroundColor')};
  }

  & > :nth-child(odd) {
    background-color: ${theme('tableCellOddBackgroundColor')};
  }
`

const Table = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Table.propTypes = {
  children: PropTypes.node,
}

export default Table
