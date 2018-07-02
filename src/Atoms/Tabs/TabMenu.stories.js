import React from 'react'
import { storiesOf } from '@storybook/react'
import * as TabMenu from './TabMenu'

storiesOf('Tabs/TabMenu', module)
  .add('default', () => 
    <TabMenu.Container>
      <TabMenu.Item>Item 1</TabMenu.Item>
      <TabMenu.Item>Item 2</TabMenu.Item>
      <TabMenu.Item>Item 3</TabMenu.Item>
      <TabMenu.Item>Item 4</TabMenu.Item>
    </TabMenu.Container>)
  .add('with selected', () =>
    <TabMenu.Container>
      <TabMenu.Item>Item 1</TabMenu.Item>
      <TabMenu.Item selected>Item 2</TabMenu.Item>
      <TabMenu.Item>Item 3</TabMenu.Item>
      <TabMenu.Item>Item 4</TabMenu.Item>
    </TabMenu.Container>)
