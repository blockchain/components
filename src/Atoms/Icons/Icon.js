import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IconMap from './IconMap'

const Wrapper = styled.div`
  & > svg {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    fill: ${(props) => props.theme['iconColor']};
    cursor: ${(props) => (props.selectable === '1' ? 'pointer' : 'default')};

    &:hover {
      fill: ${(props) =>
        props.selectable === '1'
          ? props.theme['iconHoverColor']
          : props.theme['iconColor']};
    }
  }
`

const Icon = ({ name, selectable, ...rest }) => {
  const IconSvg = IconMap[name]

  return (
    <Wrapper selectable={selectable ? '1' : '0'} {...rest}>
      <IconSvg />
    </Wrapper>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
  size: PropTypes.string,
}

Icon.defaultProps = {
  name: 'bitcoin',
  selectable: false,
  size: '2.75rem',
}

export default Icon
