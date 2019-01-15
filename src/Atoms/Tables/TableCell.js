// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { prop } from '../../Tools/interpolation'

type AlignType = 'center' | 'left' | 'right'

export type PropsType = {
  +align?: AlignType,
  +children?: React.Node,
  +shrunk?: boolean,
  +width?: string,
}

const selectAlign = (align?: AlignType) => {
  switch (align) {
    case 'left':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'right':
      return 'flex-end'
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: PropsType) => selectAlign(props.align)};
  align-items: center;
  min-width: 0;
  flex-basis: ${prop<PropsType>('width')};

  & > * {
    display: ${(props: PropsType) =>
      props.shrunk === true ? 'block' : 'initial'};
    text-overflow: ${(props: PropsType) =>
      props.shrunk === true ? 'ellipsis' : 'initial'};
    overflow: ${(props: PropsType) =>
      props.shrunk === true ? 'hidden' : 'initial'};
    white-space: ${(props: PropsType) =>
      props.shrunk === true ? 'nowrap' : 'initial'};
  }
`

const TableCell = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

TableCell.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
  shrunk: PropTypes.bool,
  width: PropTypes.string,
}

TableCell.defaultProps = {
  align: 'left',
  shrunk: true,
  width: '100%',
}

export default TableCell
