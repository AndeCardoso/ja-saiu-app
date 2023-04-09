import { Theme } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

interface IStyledButtonProps {
  theme: Theme;
  fullWidth?: boolean;
}

export const StyledButton = styled(Button)<IStyledButtonProps>`
  ${({ fullWidth }) => (fullWidth ? 'width: 100%' : null)};
`;
