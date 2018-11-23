import React from 'react'
import { storiesOf } from '@storybook/react'
import TabMenu from './TabMenu'
import TabMenuItem from './TabMenuItem'
import TabMenuToggler from './TabMenuToggler'

storiesOf('Atoms/Tabs/TabMenu', module)
  .add('default (selected)', () => (
    <TabMenu>
      <TabMenuItem>
        Item 1<TabMenuToggler />
      </TabMenuItem>
      <TabMenuItem selected>Item 2</TabMenuItem>
      <TabMenuItem>Item 3</TabMenuItem>
      <TabMenuItem>Item 4</TabMenuItem>
    </TabMenu>
  ))
  .add('with toggled', () => (
    <TabMenu toggled>
      <TabMenuItem>
        Item 1<TabMenuToggler />
      </TabMenuItem>
      <TabMenuItem selected>Item 2</TabMenuItem>
      <TabMenuItem>Item 3</TabMenuItem>
      <TabMenuItem>Item 4</TabMenuItem>
    </TabMenu>
  ))
