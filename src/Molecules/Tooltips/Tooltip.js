import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import ReactTooltip from 'react-tooltip'

injectGlobal`
  .__react_component_tooltip {
    border-radius: 3px;
    display: inline-block;
    font-size: 13px;
    left: -999em;
    opacity: 0;
    padding: 8px 21px;
    position: fixed;
    pointer-events: none;
    transition: opacity 0.3s ease-out;
    top: -999em;
    visibility: hidden;
    z-index: 999;

    &::before,
    &::after {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
    }

    &.show {
      opacity: 0.9;
      margin-top: 0;
      margin-left: 0;
      visibility: visible;
    }

    &.place-top {
      margin-top: -10px;

      &::before {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        bottom: -8px;
        left: 50%;
        margin-left: -10px;
      }

      &::after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        bottom: -6px;
        left: 50%;
        margin-left: -8px;
      }
    }

    &.place-bottom {
      margin-top: 10px;

      &::before {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        top: -8px;
        left: 50%;
        margin-left: -10px;
      }

      &::after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        top: -6px;
        left: 50%;
        margin-left: -8px;
      }
    }

    &.place-left {
      margin-left: -10px;

      &::before {
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        right: -8px;
        top: 50%;
        margin-top: -5px;
      }

      &::after {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        right: -6px;
        top: 50%;
        margin-top: -4px;
      }
    }

    &.place-right {
      margin-left: 10px;

      &::before {
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        left: -8px;
        top: 50%;
        margin-top: -5px;
      }

      &::after {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        left: -6px;
        top: 50%;
        margin-top: -4px;
      }
    }

    .multi-line {
      display: block;
      padding: 2px 0;
      text-align: center;
    }
  }
`

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
      border-top-color: ${(props) =>
        props.theme['tooltipBorderColor']} !important;
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
