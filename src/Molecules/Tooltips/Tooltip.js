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

type PropsType = {
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

class Tooltip extends React.Component<PropsType, StateType> {
  static defaultProps = {
    duration: 150,
    placement: 'top',
  }

  constructor(props: PropsType) {
    super(props)
    this.container = document.createElement('div')
  }

  state = {
    active: false,
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
            +ref: React.ElementRef<*>, // eslint-disable-line react/no-unused-prop-types
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
                      innerRef={ref}
                      onMouseLeave={this.handleMouseLeave}
                      onMouseMove={this.handleMouseMove}
                      style={style}
                    >
                      <StyledTooltip className={className || ''}>
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
