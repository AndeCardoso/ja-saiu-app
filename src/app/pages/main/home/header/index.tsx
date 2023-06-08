import React from 'react';
import { Container } from './styles';
import { Text } from '@components/base/text';
import { StyledLogo } from '@components/base/logo';

export const HeaderHome = () => {
  return (
    <Container>
      <Text fontSize={24} bold={700} contrast>
        Inicio
      </Text>
    </Container>
  );
};
