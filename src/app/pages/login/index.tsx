import React from 'react';
import { ButtonsWrapper, Container, InputsWrapper, StyledButton, StyledRow } from './styles';

import { useLoginScreen } from './useLoginScreen';
import { Modal } from '@components/modal';
import { Text } from '@components/base/text';
import { Input } from '@components/base/input';
import { Button } from '@components/base/button';
import { StyledLogo } from '@components/base/logo';
import { useAuth } from 'app/hooks/useAuth';

export const LoginPage = () => {
  const { control, handleSubmit, handleWithoutAuth, onSubmit, showModal, onCloseModal, showModalState } =
    useLoginScreen();
  const { handleGoToRegister } = useAuth();
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
            <StyledButton mode="outlined" onPress={handleGoToRegister}>
              Fazer cadastro
            </StyledButton>
          </StyledRow>
        </ButtonsWrapper>
      }
    >
      <StyledLogo size={256} />
      <InputsWrapper>
        <Input name="loginUser" control={control} label="Usuário" placeholder="Informe seu nome de usuário" />
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
          {`Caso você decida seguir sem se identificar, todas as suas ações (favoritos, buscas, etc) serão perdidas ao encerrar o app.\n\nTambém não será possível notificar quando um novo episódio for lançado!`}
        </Text>
      </Modal>
    </Container>
  );
};
