// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme['modalForegroundColor']};

  @media (min-width: 48rem) {
    width: ${(props) => props.width};
    height: auto;
    border-radius: 5px;
  }
`

type PropsType = {
  +children?: React.Node,
}

const Modal = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Modal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
}

Modal.defaultProps = {
  width: '50%',
}

export default Modal
