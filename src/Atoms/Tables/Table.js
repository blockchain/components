import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  box-shadow: 0px 0px 25px 5px ${(props) => props.theme['gray-1']};

  & > :first-child {
    color: ${(props) => props.theme['gray-3']};
    text-transform: uppercase;
  }

  & > :nth-child(odd) {
    background-color: ${(props) => props.theme['white']};
    &:not(:first-child) {
      &:hover {
        background-color: ${(props) =>
          props.highlighting ? props.theme['gray-0'] : props.theme['white']};
      }
    }
  }
  & > :nth-child(even) {
    background-color: ${(props) => props.theme['gray-1']};
    &:hover {
      background-color: ${(props) =>
        props.highlighting ? props.theme['gray-0'] : props.theme['gray-1']};
    }
  }
`

const Table = ({ children, highlighting }) => (
  <BaseTable highlighting={highlighting}>{children}</BaseTable>
)

Table.propTypes = {
  children: PropTypes.node,
  highlighting: PropTypes.bool,
}

Table.defaultProps = {
  highlighting: false,
}

export default Table
