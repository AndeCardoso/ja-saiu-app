import React from 'react';
import { useForm } from 'react-hook-form';

import { LoginLayout } from './layout';
import { useAuth } from 'app/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { Navigators, SignedInScreens } from '@routes/screens';

export interface FormInputs {
  userName: string;
  password: string;
}

export const LoginPage = () => {
  const { handleLogin } = useAuth();
  const { navigate } = useNavigation<any>();
  const { control, handleSubmit, getValues } = useForm<FormInputs>({
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    try {
      const response = await handleLogin(getValues());
      switch (response.status) {
        case 0:
          navigate(Navigators.SIGNED_IN_NAVIGATOR, { screen: SignedInScreens.HOME });
          break;
        case 1:
          console.log(response.message);
          break;
        case 2:
          console.log(response.message);
          break;
        case 3:
          console.log(response.message);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleWithoutAuth = () => {
    navigate(Navigators.SIGNED_IN_NAVIGATOR, { screen: SignedInScreens.HOME });
  };

  return <LoginLayout control={control} handleWithoutAuth={handleWithoutAuth} handleSubmit={handleSubmit(onSubmit)} />;
};
