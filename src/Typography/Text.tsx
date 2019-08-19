import * as React from 'react';
import styled from 'styled-components';
import { interpolation } from '../Tools';
import { FontSizeType, FontWeightType } from '../Tools/theme/config';

interface Props {
  children: React.ReactNode;
  size: FontSizeType;
  weight: FontWeightType;
}

const TextStyle = styled.span<Props>`
  font-family: Inter, sans-serif;
  font-size: ${(props: Props) => interpolation.fontSize(props.size)};
  font-weight: ${(props: Props) => interpolation.fontWeight(props.weight)};
  color: ${interpolation.theme('typography', 'textForegroundColor')};
`;

const Text = ({ children, ...rest }: Props): JSX.Element => <TextStyle {...rest}>{children}</TextStyle>;

Text.defaultProps = {
  size: 'size5',
  weight: 'weight4',
};

export default Text;
