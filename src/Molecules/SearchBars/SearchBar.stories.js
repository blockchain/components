import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchBar from './SearchBar'

storiesOf('SearchBars/SearchBar', module)
  .add('default', () => <SearchBar />)
  .add('with borderColor', () => <SearchBar borderColor='gold' />)
