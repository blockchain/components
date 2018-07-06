import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchBar from './SearchBar'

storiesOf('Molecules/SearchBars/SearchBar', module)
  .add('default', () => <SearchBar />)
  .add('with value', () => <SearchBar value="My search" />)
  .add('with borderColor', () => <SearchBar borderColor="gold" />)
  .add('with handleChange', () => (
    <SearchBar handleChange={action('text-change')} />
  ))
  .add('with handleClick', () => (
    <SearchBar handleClick={action('icon-click')} />
  ))
