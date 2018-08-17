import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.h5`
  color: ${(props) => props.theme['footerCategoryColor']};
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const FooterCategory = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterCategory.propTypes = {
  children: PropTypes.node,
}

export default FooterCategory
