import { Row } from '@components/base/row';
import { Layout } from '@components/layout';
import { Image, View } from 'react-native';
import { Button } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/src/types';
import styled from 'styled-components/native';

const LOGO_SIZE = '256px';

export const Container = styled(Layout)``;

export const StyledImage = styled(Image)`
  width: ${LOGO_SIZE};
  height: ${LOGO_SIZE};
`;

export const InputsWrapper = styled(View)`
  width: 100%;
  height: 160px;
  padding: 16px 0;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled(View)`
  width: 100%;
  padding: 16px 0;
  align-items: center;
  gap: 16px;
`;

export const StyledRow = styled(Row)``;

export const StyledButton = styled(Button)`
  width: 50%;
`;