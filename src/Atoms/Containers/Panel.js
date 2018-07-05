import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BasePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.height};
  width: ${props => props.width};
  box-shadow: 0px 0px 25px 5px ${props => props.theme['gray-1']};
  background-color: ${props => props.theme['white']};
`

const Panel = ({ children, height, width }) => (
  <BasePanel height={height} width={width}>
    {children}
  </BasePanel>
)

Panel.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
}

Panel.defaultProps = {
  height: 'auto',
  width: 'auto'
}

export default Panel
