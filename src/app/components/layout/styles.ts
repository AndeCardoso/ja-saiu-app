import { Theme } from '@react-navigation/native';
import styled from 'styled-components/native';

export const Container = styled.View<{ theme: Theme; verticalCenter?: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: ${({ verticalCenter }) => (verticalCenter ? 'center' : 'flex-start')};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;
