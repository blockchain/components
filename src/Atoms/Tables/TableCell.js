import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

const TableCell = ({ children }) => <Wrapper>{children}</Wrapper>

TableCell.propTypes = {
  children: PropTypes.node,
}

export default TableCell
