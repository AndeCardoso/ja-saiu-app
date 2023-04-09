import { Theme } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const StyledText = styled(Text)<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
`;
