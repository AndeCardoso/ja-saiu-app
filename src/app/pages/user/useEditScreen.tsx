import { ToastAndroid } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from 'app/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { registerDataSchema } from './editForm';
import { IRegisterFormInputs, registerFormDefaultValues } from '@pages/register/registerForm';

export const useEditScreen = () => {
  const { handleUserRegister } = useAuth();
  const { goBack, canGoBack } = useNavigation<any>();
  const { control, handleSubmit, getValues } = useForm<IRegisterFormInputs>({
    defaultValues: registerFormDefaultValues,
    mode: 'onTouched',
    resolver: yupResolver(registerDataSchema),
  });

  const onSubmit = async () => {
    const { login, password, passwordConfirm } = getValues();
    const authentication = await handleUserRegister({ login, password, passwordConfirm });
  };

  const handleGoBack = () => {
    canGoBack() && goBack();
  };

  return { control, handleGoBack, handleSubmit, onSubmit };
};
