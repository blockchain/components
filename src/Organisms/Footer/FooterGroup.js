// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

type PropsType = {
  +children?: React.Node,
}

const Wrapper = styled.div`
  flex: 0 1 auto;
  width: 8rem;
  margin-bottom: 4rem;
  margin-right: 2rem;

  @media (max-width: ${(props) => props.theme.screenSizes.sm}) {
    margin-bottom: 2rem;
  }
`

const FooterRow = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterRow.propTypes = {
  children: PropTypes.node,
}

export default FooterRow
