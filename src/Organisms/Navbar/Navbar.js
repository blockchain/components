import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  padding: 0 2rem;
  box-sizing: border-box;

  @media (min-width: 48rem) {
    padding: 0 3rem;
  }
`

const Navbar = ({ children, height, ...rest }) => (
  <Wrapper height={height} {...rest}>
    {children}
  </Wrapper>
)

Navbar.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  height: '60px',
}

export default Navbar
