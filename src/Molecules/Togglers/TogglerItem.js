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

const TogglerItem = ({ children, e2e, ...rest }) => (
  <Wrapper data-e2e={e2e || 'defaultTogglerItem'} {...rest}>
    {children}
  </Wrapper>
)

TogglerItem.propTypes = {
  children: PropTypes.node,
  e2e: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

TogglerItem.defaultProps = {
  selected: false,
}

export default TogglerItem
