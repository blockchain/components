// @flow strict
import React from 'react'
import styled from 'styled-components'

import { fontSize, prop, theme } from '../../Tools/interpolation'
import Input, { type PropsType } from './Input'

const Wrapper = styled.div`
  position: relative;
  width: ${prop<PropsType>('width')};
`

const Switch = styled.span`
  position: absolute;
  right: 0.5rem;
  bottom: 0.875rem;
  cursor: pointer;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('xs')};
  font-weight: 500;
  text-transform: uppercase;
  user-select: none;
`

const PasswordInput = styled(Input)`
  input {
    padding-right: 2.8rem;
  }
`

type StateType = {| type: string |}

class Password extends React.Component<PropsType, StateType> {
  static defaultProps = { ...Input.defaultProps, type: 'password' }
  static propTypes = Input.propTypes

  constructor(props: PropsType) {
    super(props)
    this.state = { type: props.type }
  }

  handleSwitchClick = () => {
    if (this.state.type === 'password') {
      this.setState({ type: 'text' })
    } else {
      this.setState({ type: 'password' })
    }
  }

  render() {
    const { type } = this.state
    const { disabled, width } = this.props

    return (
      <Wrapper width={width}>
        <PasswordInput {...this.props} type={type} />
        {disabled !== true && (
          <Switch onClick={this.handleSwitchClick}>
            {type === 'password' ? 'Show' : 'Hide'}
          </Switch>
        )}
      </Wrapper>
    )
  }
}

export default Password
