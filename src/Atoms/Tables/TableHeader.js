import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  color: ${(props) => props.theme['tableHeaderColor']};
  text-transform: uppercase;
`

const TableHeader = ({ children }) => <Wrapper>{children}</Wrapper>

TableHeader.propTypes = {
  children: PropTypes.node,
}

export default TableHeader
