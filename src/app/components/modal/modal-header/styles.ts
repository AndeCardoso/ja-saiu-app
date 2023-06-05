import { Row } from '@components/base/row';
import { Theme } from '@react-navigation/native';
import styled from 'styled-components/native';

export const Header = styled(Row)<{ theme: Theme }>`
  align-items: center;
  justify-content: space-between;
`;
