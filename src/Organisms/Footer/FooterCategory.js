// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { fontSize, theme } from '../../Tools/interpolation'

type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled.h5`
  color: ${theme('footerCategoryColor')};
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('sm')};
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`

const FooterCategory = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterCategory.propTypes = {
  children: PropTypes.node,
}

export default FooterCategory
