import { Image, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import styled from 'styled-components/native';

export const StyledIcon = styled(IconButton)<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;
