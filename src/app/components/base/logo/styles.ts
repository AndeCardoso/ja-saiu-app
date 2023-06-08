import { Image } from 'react-native';
import styled from 'styled-components/native';

export const StyledImage = styled(Image)<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;
