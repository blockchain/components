import React from 'react'
import { storiesOf } from '@storybook/react'

import { Spacer } from '../../../.storybook/config'
import Input from './Input'

storiesOf('Atoms/Inputs/Input', module)
  .add('default', () => <Input />)
  .add('with type', () => <Input type="password" />)
  .add('with label', () => <Input label="Input 1" />)
  .add('with error', () => (
    <>
      <Input error="Error 1" />
      <Spacer />
      <Input error="Error 1" label="Label 1" />
    </>
  ))
  .add('with checkbox', () => (
    <Input label="Checkbox" name="test" type="checkbox" />
  ))
  .add('with radio', () => (
    <div>
      <Input label="Bitcoin" name="test" type="radio" value="bitcoin" />
      <Input label="Ethereum" name="test" type="radio" value="ethereum" />
    </div>
  ))
  .add('with width', () => <Input width="300px" />)
  .add('with disabled', () => (
    <>
      <Input disabled />
      <Spacer />
      <Input disabled error="Error 1" />
      <Spacer />
      <Input disabled error="Error 1" label="Label 1" />
    </>
  ))
