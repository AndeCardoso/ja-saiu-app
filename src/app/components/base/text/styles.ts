import { Theme } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

interface IStyledTextProps {
  theme: Theme;
  contrast?: boolean;
  bold?: number;
  fontSize?: number;
}

export const StyledText = styled(Text)<IStyledTextProps>`
  color: ${({ theme, contrast }) => (contrast ? theme.colors.background : theme.colors.primary)};
  background-color: transparent;
  font-size: ${({ fontSize }) => `${fontSize || 14}px`};
  font-weight: ${({ bold }) => (bold ? bold : 500)};
`;
