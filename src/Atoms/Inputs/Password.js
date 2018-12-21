// @flow strict
import React from 'react'
import styled, { type ReactComponentFunctional } from 'styled-components'

import { fontSize, theme } from '../../Tools/interpolation'
import Input, { type PropsType, type HtmlInputType } from './Input'

const Switch = styled.span`
  position: absolute;
  right: 1.25rem;
  bottom: 0.875rem;
  cursor: pointer;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('xs')};
  font-weight: 600;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`

const PasswordInput: ReactComponentFunctional<PropsType> = styled(Input)`
  input {
    padding-right: 3.5rem;
  }
`

type StateType = {| type: HtmlInputType |}

class Password extends React.Component<PropsType, StateType> {
  static defaultProps = { ...Input.defaultProps, type: 'password' }
  static propTypes = Input.propTypes

  constructor(props: PropsType) {
    super(props)
    this.state = { type: props.type }
  }

  handleSwitchClick = () => {
    this.state.type === 'password'
      ? this.setState({ type: 'text' })
      : this.setState({ type: 'password' })
  }

  renderToggle = (disabled?: boolean) => {
    if (disabled === true) {
      return null
    }

    return (
      <Switch onClick={this.handleSwitchClick}>
        {this.state.type === 'password' ? 'Show' : 'Hide'}
      </Switch>
    )
  }

  render() {
    const { type } = this.state
    const { width } = this.props

    return (
      <PasswordInput
        {...this.props}
        renderSuffix={this.renderToggle}
        type={type}
        width={width}
      />
    )
  }
}

export default Password
