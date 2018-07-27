import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchBarUnderlined from './SearchBarUnderlined'

storiesOf('Molecules/SearchBars/SearchBarUnderlined', module)
  .add('default', () => <SearchBarUnderlined />)
  .add('with value', () => <SearchBarUnderlined value="My search" />)
  .add('with onChange', () => (
    <SearchBarUnderlined onChange={action('text-change')} />
  ))
  .add('with onClick', () => (
    <SearchBarUnderlined onClick={action('icon-click')} />
  ))
