import React, { ReactNode } from 'react';
import { StyledButton } from './styles';
import { ButtonProps, useTheme } from 'react-native-paper';

interface IButtonProps extends ButtonProps {
  children: ReactNode;
  fullWidth?: boolean;
  mode?: 'outlined' | 'text' | 'contained';
}

export const Button = ({ children, fullWidth, mode, ...rest }: IButtonProps) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} fullWidth={fullWidth} mode={mode} {...rest}>
      {children}
    </StyledButton>
  );
};
