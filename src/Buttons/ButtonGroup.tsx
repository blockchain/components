import * as React from 'react';
import styled from 'styled-components';

type ButtonGroupAlignType = 'left' | 'right' | 'center' | 'spaced';

interface Props {
  align: ButtonGroupAlignType;
  children: React.ReactNode;
}

const selectAlign = (align: ButtonGroupAlignType): string => {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'spaced':
      return 'space-between';
  }
};

const ButtonGroupStyle = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: Props) => selectAlign(props.align)};
  align-items: center;

  & > :not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: 0.1rem;
  }

  & > :not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const ButtonGroup = ({ children, ...rest }: Props): JSX.Element => (
  <ButtonGroupStyle {...rest}>{children}</ButtonGroupStyle>
);

ButtonGroup.defaultProps = {
  align: 'left',
};

export default ButtonGroup;
