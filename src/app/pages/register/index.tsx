import React from 'react';
import { Container, InputsWrapper, StyledButton, StyledRow } from './styles';

import { useRegisterScreen } from './useRegisterScreen';
import { RegisterForm } from './registerForm';
import { HeaderRegister } from './header';
import { useTranslation } from 'react-i18next';

export const RegisterPage = () => {
  const { t } = useTranslation();
  const { control, handleGoBack, handleSubmit, onSubmit } = useRegisterScreen();
  return (
    <Container
      showGoBackButton
      header={<HeaderRegister />}
      footer={
        <StyledRow>
          <StyledButton mode="outlined" onPress={handleGoBack}>
            {t('PAGES.REGISTER.BUTTON.GO_BACK')}
          </StyledButton>
          <StyledButton mode="contained" onPress={handleSubmit(onSubmit)}>
            {t('PAGES.REGISTER.BUTTON.SAVE')}
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
