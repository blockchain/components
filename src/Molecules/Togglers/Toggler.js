import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  border: 1px solid ${(props) => props.theme['togglerBorderColor']};
  border-radius: 0.2rem;
  box-sizing: border-box;

  & > *:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme['togglerBorderColor']};
  }
`

const Toggler = ({ children }) => <Wrapper>{children}</Wrapper>

Toggler.propTypes = {
  children: PropTypes.node,
}

export default Toggler
