// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-bottom: 0.125rem solid ${(props) => props.theme['tabMenuBorderColor']};
  box-sizing: border-box;
`
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  min-height: 100%;

  @media (max-width: ${(props) => props.theme.screenSizes.sm}) {
    & > .disabled {
      display: ${(props) => (props.toggled ? 'flex' : 'none')};
    }
  }

  @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
    flex-direction: row;
    align-items: center;
  }
`

type PropsType = {
  +children?: React.Node,
  +toggled?: boolean,
  +width?: string,
}

const TabMenu = ({ children, toggled, ...rest }: PropsType) => (
  <Wrapper {...rest}>
    <Container toggled={toggled}>{children}</Container>
  </Wrapper>
)

TabMenu.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  toggled: PropTypes.bool,
  width: PropTypes.string,
}

TabMenu.defaultProps = {
  height: '3rem',
  toggled: false,
  width: '100%',
}

export default TabMenu
