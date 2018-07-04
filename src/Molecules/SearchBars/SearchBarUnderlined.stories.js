import React from 'react'
import { storiesOf } from '@storybook/react'
import { action, configureActions } from '@storybook/addon-actions'

import SearchBarUnderlined from './SearchBarUnderlined'

storiesOf('Molecules/SearchBars/SearchBarUnderlined', module)
  .add('default', () => <SearchBarUnderlined />)
  .add('with value', () => <SearchBarUnderlined value='My search' />)
  .add('with handleChange', () => <SearchBarUnderlined handleChange={action('text-change')} />)
  .add('with handleClick', () => <SearchBarUnderlined handleClick={action('icon-click')} />)
