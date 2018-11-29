import React from 'react'
import { storiesOf } from '@storybook/react'

import { Spacer } from '../../../.storybook/config'
import Password from './Password'

storiesOf('Atoms/Inputs/Password', module)
  .add('default', () => <Password type="password" />)
  .add('with label', () => <Password label="Label 1" type="password" />)
  .add('with disabled', () => (
    <>
      <Password disabled type="password" />
      <Spacer />
      <Password disabled error="Error 1" type="password" />
      <Spacer />
      <Password disabled error="Error 1" label="Label 1" type="password" />
    </>
  ))
  .add('with error', () => (
    <>
      <Password error="Error 1" type="password" />
      <Spacer />
      <Password error="Error 1" label="Label 1" type="password" />
    </>
  ))
  .add('with e2e', () => <Password e2e="E2ELabel" type="password" />)
  .add('with height', () => <Password height="200px" type="password" />)
  .add('with name', () => <Password name="mytextarea" type="password" />)
  .add('with value', () => (
    <Password type="password" value="Hello dear friend" />
  ))
  .add('with width', () => <Password width="200px" />)
