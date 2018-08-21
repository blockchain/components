import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

const Wrapper = styled.div`
  width: fit-content;
  display: inline-flex;
`

class TooltipHost extends React.PureComponent {
  componentDidMount() {
    ReactTooltip.rebuild()
  }

  render() {
    const { tip, children, id } = this.props
    const dataTip = tip || []

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
