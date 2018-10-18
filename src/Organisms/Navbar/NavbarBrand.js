// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +children?: React.Node,
  +height?: string,
}

const Wrapper = styled.div`
  display: relative;
`

const NavbarBrand = ({ children, ...rest }: PropsType) => (
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
