import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseCardGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: no-wrap;
  height: auto;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
`

const CardGrid = ({ children, ...rest }) => (
  <BaseCardGrid {...rest}>
    {children}
  </BaseCardGrid>
)

export default CardGrid
