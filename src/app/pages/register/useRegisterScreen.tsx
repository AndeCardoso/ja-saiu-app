import { ToastAndroid } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from 'app/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { IRegisterFormInputs, registerDataSchema, registerFormDefaultValues } from './registerForm';

export const useRegisterScreen = () => {
  const { handleUserRegister } = useAuth();
  const { goBack, canGoBack } = useNavigation<any>();
  const { control, handleSubmit, getValues } = useForm<IRegisterFormInputs>({
    defaultValues: registerFormDefaultValues,
    mode: 'onTouched',
    resolver: yupResolver(registerDataSchema),
  });

  const onSubmit = async () => {
    const { userName, password, passwordConfirm } = getValues();
    const authentication = await handleUserRegister({ userName, password, passwordConfirm });
  };

  const handleGoBack = () => {
    canGoBack() && goBack();
  };

  return { control, handleGoBack, handleSubmit, onSubmit };
};
