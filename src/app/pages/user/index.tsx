import React from 'react';
import { Container, InputsWrapper, StyledButton, StyledRow } from './styles';

import { useEditScreen } from './useEditScreen';
import { EditForm } from './editForm';
import { HeaderEdit } from './header';

export const EditPage = () => {
  const { control, handleGoBack, handleSubmit, onSubmit } = useEditScreen();
  return (
    <Container
      showGoBackButton
      header={<HeaderEdit />}
      footer={
        <StyledRow>
          <StyledButton mode="outlined" onPress={handleGoBack}>
            Voltar
          </StyledButton>
          <StyledButton mode="contained" onPress={handleSubmit(onSubmit)}>
            Salvar
          </StyledButton>
        </StyledRow>
      }
    >
      <InputsWrapper>
        <EditForm control={control} />
      </InputsWrapper>
    </Container>
  );
};
