import React from 'react';
import { ButtonsWrapper, Container, InputsWrapper, StyledButton, StyledLogo, StyledRow } from './styles';
import { Input } from '@components/base/input';
import { Button } from '@components/base/button';

import LogoImage from '@assets/png/logo.png';
import { useLoginScreen } from './useLoginScreen';

export const LoginPage = () => {
  const { control, handleSubmit, handleRegister, handleWithoutAuth, onSubmit } = useLoginScreen();
  return (
    <Container
      verticalCenter
      footer={
        <ButtonsWrapper>
          <Button mode="contained" fullWidth onPress={handleSubmit(onSubmit)}>
            Entrar
          </Button>
          <StyledRow>
            <StyledButton mode="text" onPress={handleWithoutAuth}>
              Entrar sem logar
            </StyledButton>
            <StyledButton mode="outlined" onPress={handleRegister}>
              Fazer cadastro
            </StyledButton>
          </StyledRow>
        </ButtonsWrapper>
      }
    >
      <StyledLogo source={LogoImage} resizeMode="contain" />
      <InputsWrapper>
        <Input name="userName" control={control} label="Usuário" placeholder="Informe seu nome de usuário" />
        <Input name="password" control={control} label="Senha" placeholder="Informe a senha" type="password" />
      </InputsWrapper>
    </Container>
  );
};
