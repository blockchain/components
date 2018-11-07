import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'

storiesOf('Atoms/Inputs/Input', module)
  .add('default', () => <Input />)
  .add('with type', () => <Input type="password" />)
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
  .add('with disabled', () => <Input disabled />)
