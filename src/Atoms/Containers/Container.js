// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { prop, screenSize } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
  +height?: string,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${prop<PropsType>('height')};
  margin: 0 auto;

  @media (min-width: ${screenSize('lg')}) {
    width: 75rem;
  }
`

const Container = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Container.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
}

Container.defaultProps = {
  height: 'auto',
}

export default Container
