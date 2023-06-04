import { Theme } from '@react-navigation/native';
import { HelperText, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const StyledTextInput = styled(TextInput)`
  width: 100%;
`;

export const StyledHelperText = styled(HelperText)<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.WARNING};
`;
