import React from 'react'
import { mountWithTheme } from '../../Utils/testHelper'

import TableCell from './TableCell'

describe('TableCell', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TableCell>MyTableCell</TableCell>)

    expect(tree.find(TableCell)).toMatchSnapshot()
  })

  it('should render correctly with align left', () => {
    const tree = mountWithTheme(<TableCell align="left">MyTableCell</TableCell>)

    expect(tree.find(TableCell)).toMatchSnapshot()
  })

  it('should render correctly with align center', () => {
    const tree = mountWithTheme(
      <TableCell align="center">MyTableCell</TableCell>,
    )

    expect(tree.find(TableCell)).toMatchSnapshot()
  })

  it('should render correctly with align right', () => {
    const tree = mountWithTheme(
      <TableCell align="right">MyTableCell</TableCell>,
    )

    expect(tree.find(TableCell)).toMatchSnapshot()
  })

  it('should render correctly with shrunk true', () => {
    const tree = mountWithTheme(<TableCell shrunk>MyTableCell</TableCell>)

    expect(tree.find(TableCell)).toMatchSnapshot()
  })

  it('should render correctly with shrunk false', () => {
    const tree = mountWithTheme(
      <TableCell shrunk={false}>MyTableCell</TableCell>,
    )

    expect(tree.find(TableCell)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<TableCell width="20%">MyTableCell</TableCell>)

    expect(tree.find(TableCell)).toMatchSnapshot()
  })
})
