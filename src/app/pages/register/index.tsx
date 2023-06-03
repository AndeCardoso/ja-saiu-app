import React from 'react';
import { ButtonsWrapper, Container, InputsWrapper, StyledButton, StyledRow } from './styles';
import { Input } from '@components/base/input';

import { useRegisterScreen } from './useRegisterScreen';
import { Text } from '@components/base/text';

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
        <Input name="userName" control={control} label="Usuário" placeholder="Informe seu nome de usuário" />
        <Input name="password" control={control} label="Senha" placeholder="Informe a senha" type="password" />
        <Input
          name="passwordConfirm"
          control={control}
          label="Confirmar senha"
          placeholder="Confirme a senha"
          type="password"
        />
      </InputsWrapper>
    </Container>
  );
};
