// @flow strict
//
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0;
`

type PropsType = {
  +children?: React.Node,
}

const Pagination = ({ children, ...rest }: PropsType) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}

Pagination.propTypes = {
  children: PropTypes.node,
}

export default Pagination
