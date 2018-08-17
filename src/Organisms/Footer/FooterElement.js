import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.3rem;
`

const FooterElement = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterElement.propTypes = {
  children: PropTypes.node,
}

export default FooterElement
