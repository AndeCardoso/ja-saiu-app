import React from 'react';
import { Container, InputsWrapper, StyledButton, StyledRow } from './styles';
import { Input } from '@components/base/input';

import { useRegisterScreen } from './useRegisterScreen';
import { Text } from '@components/base/text';
import { RegisterForm } from './registerForm';

export const RegisterPage = () => {
  const { control, handleGoBack, handleSubmit, onSubmit } = useRegisterScreen();
  return (
    <Container
      header={
        <Text fontSize={24} bold={700} contrast>
          Cadastro
        </Text>
      }
      footer={
        <StyledRow>
          <StyledButton mode="outlined" onPress={handleGoBack}>
            Voltar
          </StyledButton>
          <StyledButton mode="contained" onPress={handleSubmit(onSubmit)}>
            Cadastrar
          </StyledButton>
        </StyledRow>
      }
    >
      <InputsWrapper>
        <RegisterForm control={control} />
      </InputsWrapper>
    </Container>
  );
};
