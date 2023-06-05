import React from 'react';
import { Input } from '@components/base/input';

import * as yup from 'yup';
import { Control } from 'react-hook-form';

export interface IRegisterFormInputs {
  userName: string;
  password: string;
  passwordConfirm: string;
}

export const registerDataSchema = yup.object().shape(
  {
    userName: yup.string().required('Este campo é obrigatório').min(4, 'É necessario mais que 4 caracteres'),

    password: yup
      .string()
      .required('Este campo é obrigatório')
      .min(4, 'É necessario mais que 4 caracteres')
      .when('passwordConfirm', (passwordConfirm, field) =>
        passwordConfirm ? field.oneOf([yup.ref('passwordConfirm')], 'As senhas informadas estão diferentes') : field,
      ),

    passwordConfirm: yup
      .string()
      .required('Este campo é obrigatório')
      .min(4, 'É necessario mais que 4 caracteres')
      .when('password', (password, field) =>
        password ? field.oneOf([yup.ref('password')], 'As senhas informadas estão diferentes') : field,
      ),
  },
  [
    ['password', 'passwordConfirm'],
    ['passwordConfirm', 'password'],
  ],
);

export const registerFormDefaultValues = {
  userName: '',
  password: '',
  passwordConfirm: '',
};

export const RegisterForm = ({ control }: { control: Control<IRegisterFormInputs> }) => {
  return (
    <>
      <Input name="userName" control={control} label="Usuário" placeholder="Informe seu nome de usuário" />
      <Input name="password" control={control} label="Senha" placeholder="Informe a senha" type="password" />
      <Input
        name="passwordConfirm"
        control={control}
        label="Confirmar senha"
        placeholder="Confirme a senha"
        type="password"
      />
    </>
  );
};