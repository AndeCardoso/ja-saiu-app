import { ReactNode } from 'react';
import { StyledText } from './styles';
import { useTheme } from 'react-native-paper';

interface ITextProps {
  children: ReactNode;
  bold?: number;
}

export const Text = ({ children, bold, ...rest }: ITextProps) => {
  const theme = useTheme();
  return (
    <StyledText theme={theme} {...rest}>
      {children}
    </StyledText>
  );
};
