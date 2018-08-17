import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) =>
    props.selected
      ? props.theme['togglerSelectedColor']
      : props.theme['togglerColor']};
  background-color: ${(props) =>
    props.selected
      ? props.theme['togglerSelectedBackgroundColor']
      : props.theme['togglerBackgroundColor']};
  cursor: pointer;
  text-transform: uppercase;
`

const Toggler = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Toggler.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool,
}

Toggler.defaultProps = {
  selected: false,
}

export default Toggler
