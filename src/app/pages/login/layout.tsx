import React from 'react';
import { ButtonsWrapper, Container, InputsWrapper, StyledButton, StyledImage, StyledRow } from './styles';
import { Input } from '@components/base/input';
import { Button } from '@components/base/button';
import { Control, UseFormHandleSubmit } from 'react-hook-form';
import { FormInputs } from '.';

import LogoImage from '@assets/png/logo.png';

interface ILoginLayoutProps {
  control: Control<FormInputs>;
  handleSubmit: () => void;
  handleWithoutAuth: () => void;
}

export const LoginLayout = ({ control, handleSubmit, handleWithoutAuth }: ILoginLayoutProps) => {
  return (
    <Container verticalCenter>
      <StyledImage source={LogoImage} resizeMode="contain" />
      <InputsWrapper>
        <Input name="userName" control={control} label="Usuário" placeholder="Informe seu nome de usuário" />
        <Input name="password" control={control} label="Senha" placeholder="Informe a senha" type="password" />
      </InputsWrapper>
      <ButtonsWrapper>
        <Button mode="contained" fullWidth onPress={handleSubmit}>
          Entrar
        </Button>
        <StyledRow>
          <StyledButton mode="text" onPress={handleWithoutAuth}>
            Entrar sem logar
          </StyledButton>
          <StyledButton mode="outlined">Fazer cadastro</StyledButton>
        </StyledRow>
      </ButtonsWrapper>
    </Container>
  );
};
