import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SingleDropdown from './SingleDropdown'

const items = [
  { text: 'Item1', value: 1 },
  { text: 'Item2', value: 2 },
  { text: 'Item3', value: 3 },
  { text: 'Item4', value: 4 },
  { text: 'Item5', value: 5 },
  { text: 'Item6', value: 6 },
  { text: 'Item7', value: 7 },
  { text: 'Item8', value: 8 },
  { text: 'Item9', value: 9 },
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
  .add('with with weight', () => (
    <SingleDropdown
      handleChange={action('item-click')}
      items={items}
      weight={500}
    />
  ))
