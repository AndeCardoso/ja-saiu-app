import { Theme } from '@react-navigation/native';
import styled, { css } from 'styled-components/native';
import { sideType } from '.';

export const StyledButtonModal = styled.TouchableOpacity<{ theme: Theme; fullwidth?: boolean; side?: sideType }>`
  width: ${({ fullwidth }) => `${fullwidth ? 100 : 50}%`};
  height: 68px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  border: 1px ${({ theme }) => theme.colors.MODAL_BACKGROUND};
  ${({ side }) =>
    side === 'left'
      ? css`
          border-bottom-left-radius: 10px;
        `
      : css`
          border-bottom-right-radius: 10px;
        `}
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
`;
