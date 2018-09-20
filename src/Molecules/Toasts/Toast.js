import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import {
  FasCheckCircle,
  FasExclamationCircle,
  FasTimes,
} from '../../Atoms/Icons'

const PADDING = '1.025rem'

const Wrapper = styled.div`
  display: inline-flex;
  padding: ${PADDING};
  font-family: ${(props) => props.theme.fontPrimary};
  background-color: ${(props) => props.theme.toastBackgroundColor};
  border-radius: ${(props) => props.theme.toastBorderRadius};
  color: ${(props) => props.theme.toastTextColor};
  box-shadow: rgba(67, 90, 111, 0.416) 0 0 1px,
    rgba(67, 90, 111, 0.3) 0 8px 10px -4px;
  min-width: 250px;
  max-width: 560px;
`
const Content = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`
const Title = styled.div`
  display: flex;
  font-weight: 600;
`
const Description = styled.div`
  display: flex;
  padding-top: 0.325rem;
`
const Close = styled.div`
  padding-left: ${PADDING};
`
const IndicatorSuccess = styled(FasCheckCircle).attrs({
  size: '16px',
})`
  padding-right: ${PADDING};
  fill: ${(props) => props.theme.successColor};

  &:hover {
    fill: ${(props) => props.theme.successColor};
  }
`
const IndicatorWarning = styled(FasExclamationCircle).attrs({
  size: '16px',
})`
  padding-right: ${PADDING};
  fill: ${(props) => props.theme.warningColor};

  &:hover {
    fill: ${(props) => props.theme.warningColor};
  }
`
const IndicatorDanger = styled(IndicatorWarning)`
  fill: ${(props) => props.theme.dangerColor};

  &:hover {
    fill: ${(props) => props.theme.dangerColor};
  }
`

const Toast = ({ description, onClose, title, type, ...rest }) => (
  <Wrapper {...rest}>
    {type === 'success' && <IndicatorSuccess />}
    {type === 'warning' && <IndicatorWarning />}
    {type === 'danger' && <IndicatorDanger />}
    <Content>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Content>
    <Close>
      <FasTimes onClick={onClose} selectable size="16px" />
    </Close>
  </Wrapper>
)

Toast.propTypes = {
  description: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'danger', 'success', 'warning']),
}

Toast.defaultProps = {
  type: 'default',
}

export default Toast
