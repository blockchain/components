import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${(props) => props.width};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const TableCell = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

TableCell.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
}

TableCell.defaultProps = {
  width: 'auto',
}

export default TableCell
