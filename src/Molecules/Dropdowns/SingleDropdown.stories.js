import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SingleDropdown from './SingleDropdown'

const items = [
  { text: 'Item number 1', value: 1 },
  { text: 'Item number 2', value: 2 },
  { text: 'Item number 3', value: 3 },
  { text: 'Item number 4', value: 4 },
  { text: 'Item number 5', value: 5 },
  { text: 'Item number 6', value: 6 },
  { text: 'Item number 7', value: 7 },
  { text: 'Item number 8', value: 8 },
  { text: 'Item number 9', value: 9 },
]

storiesOf('Molecules/Dropdowns/SingleDropdown', module)
  .add('default', () => (
    <SingleDropdown handleChange={action('item-click')} items={items} />
  ))
  .add('with capitalize', () => (
    <SingleDropdown
      capitalize
      handleChange={action('item-click')}
      items={items}
    />
  ))
  .add('with italic', () => (
    <SingleDropdown handleChange={action('item-click')} italic items={items} />
  ))
  .add('with size', () => (
    <SingleDropdown
      handleChange={action('item-click')}
      items={items}
      size="32px"
    />
  ))
  .add('with uppercase', () => (
    <SingleDropdown
      handleChange={action('item-click')}
      items={items}
      uppercase
    />
  ))
  .add('with weight', () => (
    <SingleDropdown
      handleChange={action('item-click')}
      items={items}
      weight={500}
    />
  ))
  .add('with width', () => (
    <SingleDropdown
      handleChange={action('item-click')}
      items={items}
      width="200px"
    />
  ))
  .add('with width (truncated)', () => (
    <SingleDropdown
      handleChange={action('item-click')}
      items={items}
      width="100px"
    />
  ))
