import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 1.25rem;

  & > :first-child {
    margin-right: 0.75rem;
  }
`

const FooterElement = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterElement.propTypes = {
  children: PropTypes.node,
}

export default FooterElement
