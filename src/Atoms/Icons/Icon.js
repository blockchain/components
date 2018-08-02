import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IconMap from './IconMap'

const getHoverColor = (props) =>
  props.selectable ? 'iconHoverColor' : 'iconColor'

const Wrapper = styled.div`
  & > svg {
    fill: ${(props) => props.theme['iconColor']};
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    cursor: ${(props) => (props.selectable ? 'pointer' : 'default')};

    &:hover {
      fill: ${(props) => props.theme[getHoverColor(props)]};
    }
  }
`

const Icon = ({ name, ...rest }) => {
  const Svg = IconMap[name]

  return (
    <Wrapper {...rest}>
      <Svg />
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
  size: '40px',
}

export default Icon
