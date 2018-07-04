import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
`

const TableHeader = ({ children }) => (
  <BaseTableHeader>
    {children}
  </BaseTableHeader>
)

export default TableHeader
