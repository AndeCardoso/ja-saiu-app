import { ReactNode } from 'react';
import { StyledText } from './styles';
import { useTheme } from 'react-native-paper';

interface ITextProps {
  children: ReactNode;
  fontSize?: number;
  bold?: number;
  contrast?: boolean;
  uppercase?: boolean;
}

export const Text = ({ children, fontSize, bold, contrast, uppercase, ...rest }: ITextProps) => {
  const theme = useTheme();
  const text = uppercase ? children?.toString().toUpperCase() : children;
  return (
    <StyledText theme={theme} fontSize={fontSize} bold={bold} contrast={contrast} {...rest}>
      {text}
    </StyledText>
  );
};
