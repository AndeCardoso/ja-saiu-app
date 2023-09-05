import { Theme } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import styled from 'styled-components/native';

interface IHeaderContainerProps {
  theme: Theme;
  hasInputSearch?: boolean;
  hasGoBackButton?: boolean;
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
  padding-left: ${({ hasGoBackButton }) => (hasGoBackButton ? 0 : 16)}px;
  padding-bottom: ${({ hasInputSearch, hasGoBackButton }) => (hasInputSearch || hasGoBackButton ? 8 : 16)}px;
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0;
`;
