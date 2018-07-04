import React from 'react'
import { storiesOf } from '@storybook/react'
import Table from './Table'
import TableCell from './TableCell'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

storiesOf('Tables/Table', module)
  .add('default', () => <Table>
      <TableHeader>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableHeader>
      <TableRow>
        <TableCell>Cell 11</TableCell>
        <TableCell>Cell 12</TableCell>
        <TableCell>Cell 13</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 21</TableCell>
        <TableCell>Cell 22</TableCell>
        <TableCell>Cell 23</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 31</TableCell>
        <TableCell>Cell 32</TableCell>
        <TableCell>Cell 33</TableCell>
      </TableRow>
    </Table>)
  .add('with highlighting', () => <Table highlighting>
    <TableHeader>
      <TableCell>Header 1</TableCell>
      <TableCell>Header 2</TableCell>
      <TableCell>Header 3</TableCell>
    </TableHeader>
    <TableRow>
      <TableCell>Cell 11</TableCell>
      <TableCell>Cell 12</TableCell>
      <TableCell>Cell 13</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Cell 21</TableCell>
      <TableCell>Cell 22</TableCell>
      <TableCell>Cell 23</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Cell 31</TableCell>
      <TableCell>Cell 32</TableCell>
      <TableCell>Cell 33</TableCell>
    </TableRow>
  </Table>)
