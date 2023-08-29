import { Theme } from '@react-navigation/native';
import styled from 'styled-components/native';

interface IHeaderContainerProps {
  theme: Theme;
  hasInputSearch?: boolean;
  topInsect?: any;
}

export const HeaderContainer = styled.View<IHeaderContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  padding-top: ${({ topInsect }) => topInsect || 8}px;
  padding-bottom: ${({ hasInputSearch }) => (hasInputSearch ? 8 : 16)}px;
`;
