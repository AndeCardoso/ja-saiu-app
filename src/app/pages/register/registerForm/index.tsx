import React from 'react';
import { Input } from '@components/base/input';

import * as yup from 'yup';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export interface IRegisterFormInputs {
  login: string;
  password: string;
  passwordConfirm: string;
}

export const registerDataSchema = yup.object().shape(
  {
    login: yup
      .string()
      .required(i18next.t('PAGES.REGISTER.INPUT.USER.REQUIRED'))
      .min(4, i18next.t('PAGES.REGISTER.INPUT.USER.MIN')),

    password: yup
      .string()
      .required(i18next.t('PAGES.REGISTER.INPUT.PASSWORD.REQUIRED'))
      .min(4, i18next.t('PAGES.REGISTER.INPUT.PASSWORD.MIN'))
      .when('passwordConfirm', (passwordConfirm, field) =>
        passwordConfirm
          ? field.oneOf([yup.ref('passwordConfirm')], i18next.t('PAGES.REGISTER.INPUT.PASSWORD.SIMILIRITY'))
          : field,
      ),

    passwordConfirm: yup
      .string()
      .required(i18next.t('PAGES.REGISTER.INPUT.CONFIRM_PASSWORD.REQUIRED'))
      .min(4, i18next.t('PAGES.REGISTER.INPUT.CONFIRM_PASSWORD.MIN'))
      .when('password', (password, field) =>
        password
          ? field.oneOf([yup.ref('password')], i18next.t('PAGES.REGISTER.INPUT.CONFIRM_PASSWORD.SIMILIRITY'))
          : field,
      ),
  },
  [
    ['password', 'passwordConfirm'],
    ['passwordConfirm', 'password'],
  ],
);

export const registerFormDefaultValues = {
  login: '',
  password: '',
  passwordConfirm: '',
};

export const RegisterForm = ({ control }: { control: Control<IRegisterFormInputs> }) => {
  const { t } = useTranslation();

  return (
    <>
      <Input
        name="login"
        control={control}
        label={t('PAGES.REGISTER.INPUT.USER.LABEL')}
        placeholder={t('PAGES.REGISTER.INPUT.USER.PLACEHOLDER')}
      />
      <Input
        name="password"
        control={control}
        label={t('PAGES.REGISTER.INPUT.PASSWORD.LABEL')}
        placeholder={t('PAGES.REGISTER.INPUT.PASSWORD.PLACEHOLDER')}
        type="password"
      />
      <Input
        name="passwordConfirm"
        control={control}
        label={t('PAGES.REGISTER.INPUT.CONFIRM_PASSWORD.LABEL')}
        placeholder={t('PAGES.REGISTER.INPUT.CONFIRM_PASSWORD.PLACEHOLDER')}
        type="password"
      />
    </>
  );
};
