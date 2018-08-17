import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

const StyledTip = styled(ReactTooltip)`
  color: ${(props) => props.theme['tooltipColor']} !important;
  border: 1px solid ${(props) => props.theme['tooltipBorderColor']} !important;
  background-color: ${(props) =>
    props.theme['tooltipBackgroundColor']} !important;
  cursor: pointer;
  max-width: 350px;
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 0.8rem;
  font-weight: 300;
  z-index: 5;
  text-transform: none;
  text-align: left;
  pointer-events: auto !important;

  &:hover {
    visibility: visible !important;
    opacity: 1 !important;
  }

  &.place-top {
    &::before {
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      bottom: -7px;
      left: 50%;
      margin-left: -9px;
      border-top: 7px solid ${(props) => props.theme['tooltipBorderColor']} !important;
    }

    &::after {
      border-top-color: ${(props) =>
        props.theme['tooltipBackgroundColor']} !important;
    }
  }

  &.place-left {
    &::before {
      border-left-color: ${(props) =>
        props.theme['tooltipBorderColor']} !important;
    }

    &::after {
      border-left-color: ${(props) =>
        props.theme['tooltipBackgroundColor']} !important;
    }
  }

  &.place-bottom {
    &::before {
      border-bottom-color: ${(props) =>
        props.theme['tooltipBorderColor']} !important;
    }

    &::after {
      border-bottom-color: ${(props) =>
        props.theme['tooltipBackgroundColor']} !important;
    }
  }

  &.place-right {
    &::before {
      border-right-color: ${(props) =>
        props.theme['tooltipBorderColor']} !important;
    }

    &::after {
      border-right-color: ${(props) =>
        props.theme['tooltipBackgroundColor']} !important;
    }
  }
`

const Tooltip = (props) => {
  const { id, children, ...rest } = props

  return (
    <StyledTip
      border
      delayHide={250}
      effect="solid"
      id={id}
      type="light"
      {...rest}
    >
      {children}
    </StyledTip>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export default Tooltip
