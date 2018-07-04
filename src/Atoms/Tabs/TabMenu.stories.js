import React from 'react'
import { storiesOf } from '@storybook/react'
import TabMenu from './TabMenu'
import TabMenuItem from './TabMenuItem'

storiesOf('Atoms/Tabs/TabMenu', module)
  .add('default', () => 
    <TabMenu>
      <TabMenuItem>Item 1</TabMenuItem>
      <TabMenuItem>Item 2</TabMenuItem>
      <TabMenuItem>Item 3</TabMenuItem>
      <TabMenuItem>Item 4</TabMenuItem>
    </TabMenu>)
  .add('with selected', () =>
    <TabMenu>
      <TabMenuItem>Item 1</TabMenuItem>
      <TabMenuItem selected>Item 2</TabMenuItem>
      <TabMenuItem>Item 3</TabMenuItem>
      <TabMenuItem>Item 4</TabMenuItem>
    </TabMenu>)
