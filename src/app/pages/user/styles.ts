import styled from 'styled-components/native';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { Row } from '@components/base/row';
import { Layout } from '@components/layout';

export const Container = styled(Layout)``;

export const InputsWrapper = styled(View)`
  width: 100%;
  padding: 16px 0;
  gap: 8px;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled(View)`
  width: 95%;
  padding: 16px 0;
  align-items: center;
  gap: 16px;
`;

export const StyledRow = styled(Row)`
  width: 100%;
  gap: 16px;
`;

export const StyledButton = styled(Button)`
  width: 47.5%;
`;
