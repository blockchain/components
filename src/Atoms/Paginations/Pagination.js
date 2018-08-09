import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0;
`

const Pagination = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

Pagination.propTypes = {
  children: PropTypes.node,
}

export default Pagination
