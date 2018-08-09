import React from 'react'
import { storiesOf } from '@storybook/react'
import Pagination from './Pagination'
import PaginationItem from './PaginationItem'

storiesOf('Atoms/Paginations', module)
  .add('default', () => (
    <Pagination>
      <PaginationItem>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </Pagination>
  ))
  .add('with selected', () => (
    <Pagination>
      <PaginationItem>1</PaginationItem>
      <PaginationItem selected>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </Pagination>
  ))
