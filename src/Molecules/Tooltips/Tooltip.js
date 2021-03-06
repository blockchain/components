// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

import { fontSize, prop, theme } from '../../Tools/interpolation'

type PlacementType =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start'

type RenderTriggerType = (active: boolean, e2e: void | string) => React.Node

type StateType = {
  active: boolean,
}

export type PropsType = {
  +children: React.Node,
  +className?: string,
  +duration: number,
  +e2e?: string,
  +placement?: PlacementType,
  +renderTrigger?: RenderTriggerType,
  +text?: string,
}

const StyledTooltip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  line-height: 2rem;
  padding: 0 0.5rem;
  margin-top: ${({ marginPlacement }: { marginPlacement: string }) =>
    marginPlacement === 'bottom' ? '0.25rem' : '0'};
  margin-bottom: ${({ marginPlacement }: { marginPlacement: string }) =>
    marginPlacement === 'top' ? '0.25rem' : '0'};
  margin-left: ${({ marginPlacement }: { marginPlacement: string }) =>
    marginPlacement === 'right' ? '0.25rem' : '0'};
  margin-right: ${({ marginPlacement }: { marginPlacement: string }) =>
    marginPlacement === 'left' ? '0.25rem' : '0'};
  color: ${theme('tooltipColor')};
  border: 1px solid ${theme('tooltipBorderColor')};
  background-color: ${theme('tooltipBackgroundColor')};
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('sm')};
  font-weight: 500;
  border-radius: 0.25rem;
`

const Transition = styled.div`
  opacity: 1;

  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity ${prop<PropsType>('duration')}ms ease-out;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0.01;
    transition: opacity ${prop<PropsType>('duration')}ms ease-out;
  }
`

const computeMarginPlacement = (placement: PlacementType = 'top') =>
  placement.split('-')[0]

class Tooltip extends React.Component<PropsType, StateType> {
  static defaultProps = {
    duration: 150,
    placement: 'top',
  }

  state = {
    active: false,
  }

  componentDidMount() {
    this.container = document.createElement('div')
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    this.setState({ active: false })

    if (document.body && document.body.contains(this.container)) {
      document.body.removeChild(this.container)
      delete this.container
    }
  }

  timeout: TimeoutID
  container: Element

  handleExited = () => {
    if (document.body && document.body.contains(this.container)) {
      document.body.removeChild(this.container)
    }
  }

  handleMouseMove = (event: SyntheticEvent<HTMLElement>) => {
    clearTimeout(this.timeout)

    if (!this.state.active) {
      if (document.body != null) {
        document.body.appendChild(this.container)
      }

      this.setState({ active: true })
    }
  }

  handleMouseLeave = (event: SyntheticEvent<HTMLElement>) => {
    this.timeout = setTimeout(() => {
      if (this.state.active) {
        this.setState({ active: false })
      }
    }, 50)
  }

  render() {
    const {
      children,
      className,
      duration,
      e2e,
      placement,
      renderTrigger,
      text,
    } = this.props
    const { active } = this.state
    const marginPlacement = computeMarginPlacement(placement)

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <div
              onMouseLeave={this.handleMouseLeave}
              onMouseMove={this.handleMouseMove}
              ref={ref}
            >
              {renderTrigger && renderTrigger(active, e2e)}
              {!renderTrigger && text}
            </div>
          )}
        </Reference>
        <Popper placement={placement}>
          {({
            ref,
            style,
            placement,
          }: {
            +placement: PlacementType,
            /* eslint-disable no-undef */
            +ref: React.ElementRef<*>,
            +style: {},
          }) => (
            <CSSTransition
              classNames="fade"
              in={active}
              onExited={this.handleExited}
              timeout={duration}
              unmountOnExit
            >
              <>
                {this.container &&
                  ReactDOM.createPortal(
                    <Transition
                      duration={duration}
                      onMouseLeave={this.handleMouseLeave}
                      onMouseMove={this.handleMouseMove}
                      ref={ref}
                      style={style}
                    >
                      <StyledTooltip
                        className={className || ''}
                        marginPlacement={marginPlacement}
                      >
                        {children}
                      </StyledTooltip>
                    </Transition>,
                    this.container,
                  )}
              </>
            </CSSTransition>
          )}
        </Popper>
      </Manager>
    )
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  duration: PropTypes.number.isRequired,
  e2e: PropTypes.string,
  placement: PropTypes.oneOf([
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start',
  ]),
  renderTrigger: PropTypes.func,
  text: PropTypes.string,
}

export default Tooltip
