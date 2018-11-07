// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled.div`
  display: block;
  margin-bottom: 1.25rem;
  line-height: 1.4;
  overflow-wrap: break-word;
`

const FooterElement = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterElement.propTypes = {
  children: PropTypes.node,
}

export default FooterElement
