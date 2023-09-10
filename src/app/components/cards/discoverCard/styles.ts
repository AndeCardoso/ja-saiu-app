import { Row } from '@components/base/row';
import styled from 'styled-components/native';

interface IStyledImageProps {
  size: number;
}

interface IContainerProps {
  bgColor: string;
  favoritedColor: string;
  favorited: boolean;
}

export const Container = styled(Row)<IContainerProps>`
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  border-top-left-radius: 52px;
  border-bottom-left-radius: 52px;
  border-right-color: ${({ favoritedColor, bgColor, favorited }) => (favorited ? favoritedColor : bgColor)};
  border-right-width: 8px;
  border-right-style: solid;
  margin: 8px 0;
  padding: 8px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Wrapper = styled.View`
  flex: 1;
  gap: 8px;
  margin-left: 16px;
`;

export const Details = styled(Row)`
  gap: 16px;
`;

export const StyledImage = styled.Image<IStyledImageProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100px;
`;
