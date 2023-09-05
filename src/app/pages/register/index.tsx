import React from 'react';
import { Container, InputsWrapper, StyledButton, StyledRow } from './styles';

import { useRegisterScreen } from './useRegisterScreen';
import { RegisterForm } from './registerForm';
import { HeaderRegister } from './header';

export const RegisterPage = () => {
  const { control, handleGoBack, handleSubmit, onSubmit } = useRegisterScreen();
  return (
    <Container
      showGoBackButton
      header={<HeaderRegister />}
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
