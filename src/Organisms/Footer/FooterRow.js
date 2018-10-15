import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.screenSizes.md}) {
    flex-wrap: no-wrap;
  }
`

const FooterRow = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterRow.propTypes = {
  children: PropTypes.node,
}

export default FooterRow
