import { Theme } from '@react-navigation/native';
import { Modal } from 'react-native-paper';
import styled from 'styled-components/native';

export const ModalContainer = styled(Modal)``;

export const Container = styled.View<{ theme: Theme }>`
  width: 85%;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.MODAL_BACKGROUND};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 16px 16px 32px 16px;
  gap: 16px;
`;
