import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'

storiesOf('Atoms/Inputs/Input', module)
  .add('default', () => <Input />)
  .add('with type', () => <Input type="password" />)
  .add('with width', () => <Input width="300px" />)
  .add('with disabled', () => <Input disabled />)
