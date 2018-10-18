// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +children?: React.Node,
  +height?: string,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.screenSizes.lg}) {
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
