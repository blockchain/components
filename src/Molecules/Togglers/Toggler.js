// @flow strict
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { theme } from '../../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  border: 1px solid ${theme('togglerBorderColor')};
  border-radius: 0.2rem;
  box-sizing: border-box;

  & > *:not(:last-child) {
    border-right: 1px solid ${theme('togglerBorderColor')};
  }
`

type PropsType = { +children: Node }

const Toggler = ({ children }: PropsType) => <Wrapper>{children}</Wrapper>

Toggler.propTypes = {
  children: PropTypes.node,
}

export default Toggler
