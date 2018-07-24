import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  margin: 0 auto;

  @media (min-width: 1200px) {
    width: 1140px;
  }
`

const Container = ({ children, ...rest }) => (
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
