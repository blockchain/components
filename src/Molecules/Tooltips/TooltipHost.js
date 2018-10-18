// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
// $FlowFixMe
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: fit-content;
  display: inline-flex;
`

type PropsType = {
  +children: React.Node,
  +id: string,
  +tip?: string,
}

class TooltipHost extends React.PureComponent<PropsType> {
  componentDidMount() {
    ReactTooltip.rebuild()
  }

  render() {
    const { tip, children, id } = this.props
    const dataTip = tip == null ? '' : tip

    return (
      <Wrapper data-for={id} data-tip={dataTip} {...this.props}>
        {children}
      </Wrapper>
    )
  }
}

TooltipHost.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  tip: PropTypes.string,
}

export default TooltipHost
