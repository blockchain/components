import React from 'react'
import { storiesOf } from '@storybook/react'

import { Spacer } from '../../../.storybook/config'
import TextArea from './TextArea'

storiesOf('Atoms/Inputs/TextArea', module)
  .add('default', () => <TextArea />)
  .add('with label', () => <TextArea label="Label 1" />)
  .add('with disabled', () => (
    <>
      <TextArea disabled />
      <Spacer />
      <TextArea disabled error="Error 1" />
      <Spacer />
      <TextArea disabled error="Error 1" label="Label 1" />
    </>
  ))
  .add('with error', () => (
    <>
      <TextArea error="Error 1" />
      <Spacer />
      <TextArea error="Error 1" label="Label 1" />
    </>
  ))
  .add('with e2e', () => <TextArea e2e="E2ELabel" />)
  .add('with height', () => <TextArea height="200px" />)
  .add('with name', () => <TextArea name="mytextarea" />)
  .add('with value', () => <TextArea value="Hello dear friend" />)
  .add('with width', () => <TextArea width="200px" />)
