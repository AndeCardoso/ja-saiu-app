import { ReactNode } from 'react';
import { StyledText } from './styles';
import { useTheme } from 'react-native-paper';

interface ITextProps {
  children: ReactNode;
  fontSize?: number;
  bold?: number;
  contrast?: boolean;
}

export const Text = ({ children, fontSize, bold, contrast, ...rest }: ITextProps) => {
  const theme = useTheme();
  return (
    <StyledText theme={theme} fontSize={fontSize} bold={bold} contrast={contrast} {...rest}>
      {children}
    </StyledText>
  );
};
