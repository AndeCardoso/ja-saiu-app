import { Theme } from '@react-navigation/native';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
`;
