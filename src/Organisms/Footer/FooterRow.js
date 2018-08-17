import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  & > :last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media (min-width: 62rem) {
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
