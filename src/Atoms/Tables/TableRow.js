import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 30px 30px;
  box-sizing: border-box;
`

const TableRow = ({ children }) => <Wrapper>{children}</Wrapper>

TableRow.propTypes = {
  children: PropTypes.node,
}

export default TableRow
