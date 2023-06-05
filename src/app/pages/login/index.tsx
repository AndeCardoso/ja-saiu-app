import React from 'react';
import { ButtonsWrapper, Container, InputsWrapper, StyledButton, StyledLogo, StyledRow } from './styles';
import { Input } from '@components/base/input';
import { Button } from '@components/base/button';

import LogoImage from '@assets/png/logo.png';
import { useLoginScreen } from './useLoginScreen';
import { Modal } from '@components/modal';
import { Text } from '@components/base/text';

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    handleRegister,
    handleWithoutAuth,
    onSubmit,
    showModal,
    onCloseModal,
    showModalState,
  } = useLoginScreen();
  return (
    <Container
      verticalCenter
      footer={
        <ButtonsWrapper>
          <Button mode="contained" fullWidth onPress={handleSubmit(onSubmit)}>
            Entrar
          </Button>
          <StyledRow>
            <StyledButton mode="text" onPress={showModal}>
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

      <Modal
        visible={showModalState}
        onClose={onCloseModal}
        firstButton={{
          text: 'Aceito',
          onPress: handleWithoutAuth,
        }}
        secondButton={{ text: 'Cancelar', onPress: onCloseModal }}
        header={'Você tem certeza?'}
      >
        <Text fontSize={16}>
          {`Caso você decida seguir sem se identificar, todas as suas ações (favoritos, buscas, etc) serão perdidas ao encerrar o app. \n Também não será possivel notificar quando um novo episodio for lançado.`}
        </Text>
      </Modal>
    </Container>
  );
};
