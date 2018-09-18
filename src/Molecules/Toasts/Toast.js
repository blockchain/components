import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon from '../../Atoms/Icons/Icon'

const PADDING = '1.025rem'

const getBackgroundColor = (props) => {
  if (props.type === 'success') {
    return props.theme.successColor
  }

  if (props.type === 'warning') {
    return props.theme.warningColor
  }

  return props.theme.dangerColor
}

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

const Indicator = styled(Icon)`
  padding-right: 0.5rem;
  margin-left: -0.5rem;

  & > svg {
    fill: ${getBackgroundColor};
    width: 100%;
  }

  & > svg:hover {
    fill: ${getBackgroundColor};
  }
`

const Toast = ({ description, onClose, title, type, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {type !== 'default' && (
        <Indicator
          name={
            type === 'success'
              ? 'checkmarkInCircleFilled'
              : 'exclamationMarkFilled'
          }
          size="16px"
          type={type}
        />
      )}
      <Content>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Content>
      <Close>
        <Icon name="closeFilled" onClick={onClose} selectable size="10px" />
      </Close>
    </Wrapper>
  )
}

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
