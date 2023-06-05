import { Theme } from '@react-navigation/native';
import styled from 'styled-components/native';

export const Footer = styled.View<{ theme: Theme }>`
  width: 85%;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;
