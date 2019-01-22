// @flow strict
import * as React from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../../Tools/interpolation'
import { Input, type PropsType, type HtmlInputType } from './Input'
import { FarEye, FarEyeSlash } from '../Icons'

const iconCss = css`
  position: absolute;
  right: 1rem;
  bottom: calc(1.35rem - 8px);
  user-select: none;
  fill: ${theme('inputColor')};

  &:hover {
    fill: ${theme('inputColor')};
  }
`

const Eye = styled(FarEye)`
  ${iconCss};
`

const EyeSlash = styled(FarEyeSlash)`
  ${iconCss};
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

  handleIconClick = () => {
    this.state.type === 'password'
      ? this.setState({ type: 'text' })
      : this.setState({ type: 'password' })
  }

  renderToggle = (disabled?: boolean) => {
    if (disabled === true) {
      return null
    }

    const props = {
      onClick: this.handleIconClick,
      selectable: true,
      size: '16px',
    }

    return this.state.type === 'password' ? (
      <Eye {...props} />
    ) : (
      <EyeSlash {...props} />
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
