import React, { ReactNode } from 'react';
import { StyledRow } from './styles';

interface IRowProps {
  children: ReactNode;
}

export const Row = ({ children, ...rest }: IRowProps) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};
