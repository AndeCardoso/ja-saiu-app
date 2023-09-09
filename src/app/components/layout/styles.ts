import { Theme } from '@react-navigation/native';
import styled, { css } from 'styled-components/native';

export const ScrollViewContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View<{ theme: Theme }>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollContainer = styled.ScrollView<{ theme: Theme; verticalCenter?: boolean }>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;

export const StaticContainer = styled.View<{ theme: Theme; verticalCenter?: boolean; isFlatList: boolean }>`
  flex: 1;
  justify-content: ${({ verticalCenter }) => (verticalCenter ? 'center' : 'flex-start')};
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ isFlatList }) => (isFlatList ? 0 : 16)}px;
  ${({ isFlatList }) =>
    !isFlatList &&
    css`
      align-items: center;
    `}
`;

export const HeaderContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
`;

export const FooterContainer = styled.View<{ theme: Theme }>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;
