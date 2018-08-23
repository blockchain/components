import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: relative;
`

const NavbarBrand = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarBrand.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string.isRequired,
}

NavbarBrand.defaultProps = {
  height: '60px',
}

export default NavbarBrand
