import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchBar from './SearchBar'

const CustomLabel = () => <>Search !</>

storiesOf('Molecules/SearchBars/SearchBar', module)
  .add('default', () => <SearchBar />)
  .add('with width', () => <SearchBar width="200px" />)
  .add('with value', () => <SearchBar value="My search" />)
  .add('with submitLabel', () => <SearchBar renderSubmit={CustomLabel} />)
  .add('with onChange', () => <SearchBar onChange={action('text-change')} />)
  .add('with onClick', () => <SearchBar onClick={action('icon-click')} />)
