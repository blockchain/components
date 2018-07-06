import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { keysIn } from 'ramda'
import theme from '../../Tools/theme'

const BaseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: 30px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme[props.color]};
`

const Section = ({ children, height, width, color }) => (
  <BaseSection color={color} height={height} width={width}>
    {children}
  </BaseSection>
)

Section.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(keysIn(theme)),
  height: PropTypes.string,
  width: PropTypes.string,
}

Section.defaultProps = {
  color: 'white',
  height: 'auto',
  width: '100%',
}

export default Section
