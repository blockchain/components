import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from './Text'
import TextGroup from './TextGroup'

const Texts = () => (
  <React.Fragment>
    <Text>
      This is my first text. This is my first text. This is my first text. This
      is my first text.
    </Text>
    <Text>
      This is my second text. This is my second text. This is my second text.
      This is my second text.
    </Text>
    <Text>
      This is my third text. This is my third text. This is my third text. This
      is my third text.
    </Text>
    <Text>
      This is my fourth text. This is my fourth text. This is my fourth text.
      This is my fourth text.
    </Text>
    <Text>
      This is my fifth text. This is my fifth text. This is my fifth text. This
      is my fifth text.
    </Text>
    <Text>
      This is my sixth text. This is my sixth text. This is my sixth text. This
      is my sixth text.
    </Text>
    <Text>
      This is my seventh text. This is my seventh text. This is my seventh text.
      This is my seventh text.
    </Text>
  </React.Fragment>
)

storiesOf('Atoms/Typography/TextGroup', module)
  .add('default', () => (
    <TextGroup>
      <Texts />
    </TextGroup>
  ))
  .add('with align', () => (
    <TextGroup align="right">
      <Texts />
    </TextGroup>
  ))
  .add('with inline', () => (
    <TextGroup inline={false}>
      <Texts />
    </TextGroup>
  ))
  .add('with align and inline', () => (
    <TextGroup align="right" inline={false}>
      <Texts />
    </TextGroup>
  ))
