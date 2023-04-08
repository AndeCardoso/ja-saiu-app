import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '@global/styles/colors';

export const ContainerView = styled(View)`
  flex: 1;
  background-color: ${colors.BACKGROUND};
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Title = styled(Text)`
  font-size: 32px;
  color: ${colors.WHITE};
  font-weight: 700;
  margin-bottom: 30px;
`;
