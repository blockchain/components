// @flow strict
import * as React from 'react'
import styled from 'styled-components'

import { fontSize, theme } from '../../Tools/interpolation'
import { Input, type PropsType, type HtmlInputType } from './Input'
import { FarEye, FarEyeSlash } from '../Icons'

const Switch = styled.span`
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('xs')};
  font-weight: 600;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`
const PasswordInput: React.ComponentType<PropsType> = styled(Input)`
  input {
    padding-right: 3rem;
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
        {this.state.type === 'password' ? (
          <FarEye selectable size="20px" />
        ) : (
          <FarEyeSlash selectable size="20px" />
        )}
      </Switch>
    )
  }

  render() {
    const { type } = this.state
    const { forwardRef: ref, renderSuffix } = this.props

    return (
      <PasswordInput
        {...this.props}
        ref={ref}
        renderSuffix={renderSuffix || this.renderToggle}
        type={type}
      />
    )
  }
}

type RefPropsType = { ...PropsType }

const PasswordWithRef = (props, ref) => <Password {...props} forwardRef={ref} />

export default React.forwardRef<RefPropsType, _>(PasswordWithRef)
