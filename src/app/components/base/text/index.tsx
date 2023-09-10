import { StyledText } from './styles';
import { useTheme } from 'react-native-paper';
import { textLimiter } from '@utils/textLimiter';

interface ITextProps {
  children: string;
  fontSize?: number;
  bold?: number;
  contrast?: boolean;
  uppercase?: boolean;
  textLimit?: number;
}

export const Text = ({ children, fontSize, bold, contrast, uppercase, textLimit, ...rest }: ITextProps) => {
  const theme = useTheme();
  const text = uppercase ? children.toUpperCase() : children;
  return (
    <StyledText theme={theme} fontSize={fontSize} bold={bold} contrast={contrast} {...rest}>
      {textLimit ? textLimiter(text, textLimit) : text}
    </StyledText>
  );
};
