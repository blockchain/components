import React from 'react'
import { storiesOf } from '@storybook/react'
import Toast from './Toast'

storiesOf('Molecules/Toasts/Toast', module)
  .add('default', () => <Toast title="Hey! This is a default toast." />)
  .add('with description', () => (
    <Toast
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      title="This is a default toast."
    />
  ))
  .add('with type=danger', () => (
    <Toast
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      title="Snap! This is a danger toast!"
      type="danger"
    />
  ))
  .add('with type=success', () => (
    <Toast
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      title="Snap! This is a success toast!"
      type="success"
    />
  ))
  .add('with type=warning', () => (
    <Toast
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      title="Snap! This is a warning toast!"
      type="warning"
    />
  ))
