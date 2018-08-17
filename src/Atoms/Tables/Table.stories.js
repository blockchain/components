import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Table from './Table'
import TableCell from './TableCell'
import TableRow from './TableRow'

const TextWithEllipsis = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
const Sample = () => (
  <TextWithEllipsis>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </TextWithEllipsis>
)

storiesOf('Atoms/Tables/Table', module).add('default', () => (
  <Table>
    <TableRow>
      <TableCell>Header 1</TableCell>
      <TableCell>Header 2</TableCell>
      <TableCell>Header 3</TableCell>
      <TableCell>Header 4</TableCell>
      <TableCell>Header 5</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
      <TableCell>
        <Sample />
      </TableCell>
    </TableRow>
  </Table>
))
