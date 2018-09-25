import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const selectAlign = (align) => {
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
  justify-content: ${(props) => selectAlign(props.align)};
  align-items: center;
  min-width: 0;
  flex-basis: ${(props) => props.width};

  & > * {
    display: ${(props) => (props.shrinked ? 'block' : 'initial')};
    text-overflow: ${(props) => (props.shrinked ? 'ellipsis' : 'initial')};
    overflow: ${(props) => (props.shrinked ? 'hidden' : 'initial')};
    white-space: ${(props) => (props.shrinked ? 'nowrap' : 'initial')};
  }
`

const TableCell = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

TableCell.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
  shrinked: PropTypes.bool,
  width: PropTypes.string,
}

TableCell.defaultProps = {
  align: 'left',
  shrinked: true,
  width: '100%',
}

export default TableCell
