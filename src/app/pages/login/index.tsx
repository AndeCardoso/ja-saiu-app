import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonsWrapper, Container, InputsWrapper, StyledButton, StyledRow } from './styles';

import { useLoginScreen } from './useLoginScreen';
import { Modal } from '@components/modal';
import { Text } from '@components/base/text';
import { Input } from '@components/base/input';
import { Button } from '@components/base/button';
import { StyledLogo } from '@components/base/logo';
import { useAuth } from 'app/hooks/useAuth';

export const LoginPage = () => {
  const { t } = useTranslation();
  const { control, handleSubmit, handleWithoutAuth, onSubmit, showModal, onCloseModal, showModalState } =
    useLoginScreen();
  const { handleGoToRegister } = useAuth();
  return (
    <Container
      verticalCenter
      footer={
        <ButtonsWrapper>
          <Button mode="contained" fullWidth onPress={handleSubmit(onSubmit)}>
            {t('PAGES.LOGIN.BUTTON.ENTER')}
          </Button>
          <StyledRow>
            <StyledButton mode="text" onPress={showModal}>
              {t('PAGES.LOGIN.BUTTON.ENTER_WITHOUT_AUTH')}
            </StyledButton>
            <StyledButton mode="outlined" onPress={handleGoToRegister}>
              {t('PAGES.LOGIN.BUTTON.REGISTER')}
            </StyledButton>
          </StyledRow>
        </ButtonsWrapper>
      }
    >
      <StyledLogo size={256} />
      <InputsWrapper>
        <Input
          name="loginUser"
          control={control}
          label={t('PAGES.LOGIN.INPUT.USER')}
          placeholder={t('PAGES.LOGIN.INPUT.USER_PLACEHOLDER')}
        />
        <Input
          name="password"
          control={control}
          label={t('PAGES.LOGIN.INPUT.PASSWORD')}
          placeholder={t('PAGES.LOGIN.INPUT.PASSWORD_PLACEHOLDER')}
          type="password"
        />
      </InputsWrapper>

      <Modal
        visible={showModalState}
        onClose={onCloseModal}
        firstButton={{
          text: t('PAGES.LOGIN.MODAL_ALERT.CONFIRM_BUTTON'),
          onPress: handleWithoutAuth,
        }}
        secondButton={{ text: t('PAGES.LOGIN.MODAL_ALERT.CANCEL_BUTTON'), onPress: onCloseModal }}
        header={t('PAGES.LOGIN.MODAL_ALERT.HEADER')}
      >
        <Text fontSize={16}>{t('PAGES.LOGIN.MODAL_ALERT.CONTENT')}</Text>
      </Modal>
    </Container>
  );
};
