import React from 'react'
import { storiesOf } from '@storybook/react'
import TextArea from './TextArea'

storiesOf('Atoms/Inputs/TextArea', module)
  .add('default', () => <TextArea />)
  .add('with disabled', () => <TextArea disabled />)
  .add('with e2e', () => <TextArea e2e="E2ELabel" />)
  .add('with height', () => <TextArea height="200px" />)
  .add('with name', () => <TextArea name="mytextarea" />)
  .add('with value', () => <TextArea value="Hello dear friend" />)
  .add('with width', () => <TextArea width="200px" />)
