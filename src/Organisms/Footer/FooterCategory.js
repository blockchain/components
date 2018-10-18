// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled.h5`
  color: ${(props) => props.theme['footerCategoryColor']};
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`

const FooterCategory = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterCategory.propTypes = {
  children: PropTypes.node,
}

export default FooterCategory
