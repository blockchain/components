// @flow strict
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
import { theme } from '../../Tools/interpolation'
import {
  FasCheckCircle,
  FasExclamationCircle,
  FasTimes,
} from '../../Atoms/Icons'

const PADDING = '1.025rem'

const Wrapper = styled.div.attrs(injectE2E)`
  display: inline-flex;
  padding: ${PADDING};
  font-family: ${theme('fontPrimary')};
  background-color: ${theme('toastBackgroundColor')};
  border-radius: ${theme('toastBorderRadius')};
  color: ${theme('toastTextColor')};
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

const IndicatorCss = css`
  margin-right: ${PADDING};
  margin-top: 2px;
`

const IndicatorSuccess = styled(FasCheckCircle)`
  ${IndicatorCss};
  fill: ${theme('successColor')};

  &:hover {
    fill: ${theme('successColor')};
  }
`

const IndicatorWarning = styled(FasExclamationCircle)`
  ${IndicatorCss};
  fill: ${theme('warningColor')};

  &:hover {
    fill: ${theme('warningColor')};
  }
`

const IndicatorDanger = styled(IndicatorWarning)`
  ${IndicatorCss};
  fill: ${theme('dangerColor')};

  &:hover {
    fill: ${theme('dangerColor')};
  }
`

export type PropsType = {
  +description?: string,
  +e2e?: string,
  +onClose?: (SyntheticEvent<HTMLDivElement>) => void,
  +title?: string,
  +type?: 'default' | 'danger' | 'success' | 'warning',
}

const Toast = ({ description, onClose, title, type, ...rest }: PropsType) => (
  <Wrapper {...rest}>
    {type === 'success' && <IndicatorSuccess size="16px" />}
    {type === 'warning' && <IndicatorWarning size="16px" />}
    {type === 'danger' && <IndicatorDanger size="16px" />}
    <Content>
      <Title>{title}</Title>
      {description != null && <Description>{description}</Description>}
    </Content>
    <Close>
      <FasTimes onClick={onClose} selectable size="16px" />
    </Close>
  </Wrapper>
)

Toast.propTypes = {
  description: PropTypes.string,
  e2e: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'danger', 'success', 'warning']),
}

Toast.defaultProps = {
  e2e: 'defaultToast',
  type: 'default',
}

export default Toast
