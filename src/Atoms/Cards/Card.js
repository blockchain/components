import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  width: ${props => props.width};
  box-shadow: 0px 0px 25px 5px ${props => props.theme['gray-1']};
`

const Card = ({ children, height, width }) => (
  <BaseCard height={height} width={width}>
    {children}
  </BaseCard>
)

Card.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
}

Card.defaultProps = {
  height: 'auto',
  width: 'auto'
}

export default Card
