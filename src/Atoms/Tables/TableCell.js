import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseTableCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

const TableCell = ({ children }) => <BaseTableCell>{children}</BaseTableCell>

TableCell.propTypes = {
  children: PropTypes.node,
}

export default TableCell
