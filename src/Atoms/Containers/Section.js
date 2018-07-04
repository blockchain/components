import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  width: ${props => props.width};
  padding: 30px;
  box-sizing: border-box;
  background-color: ${props => props.theme[props.color]};
`

const Section = ({ children, height, width, color }) => (
  <BaseSection height={height} width={width} color={color}>
    {children}
  </BaseSection>
)

Section.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

Section.defaultProps = {
  color: 'white',
  height: 'auto',
  width: '100%'
}

export default Section
