// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

export type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & *:not(:last-child) {
    margin-right: 0.4rem;
  }

  & > :first-child {
    border-top-right-radius: initial;
    border-bottom-right-radius: initial;
  }

  & > :last-child {
    border-top-left-radius: initial;
    border-bottom-left-radius: initial;
  }

  & > :not(:first-child):not(:last-child) {
    border-top-right-radius: initial;
    border-bottom-right-radius: initial;
    border-top-left-radius: initial;
    border-bottom-left-radius: initial;
  }
`

const ButtonGroup = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

ButtonGroup.propTypes = {
  children: PropTypes.node,
}

export default ButtonGroup
