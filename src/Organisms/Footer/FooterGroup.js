import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 0 1 auto;
  width: 8rem;
  margin-bottom: 4rem;
  margin-right: 2rem;

  @media (max-width: ${(props) => props.theme.screenSizes.sm}) {
    margin-bottom: 2rem;
  }
`

const FooterRow = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterRow.propTypes = {
  children: PropTypes.node,
}

export default FooterRow
