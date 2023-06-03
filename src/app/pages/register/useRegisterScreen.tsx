import { ToastAndroid } from 'react-native';
import { useForm } from 'react-hook-form';

import { useAuth } from 'app/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { Navigators, SignedInScreens } from '@routes/screens';

export interface FormInputs {
  userName: string;
  password: string;
  passwordConfirm: string;
}

export const useRegisterScreen = () => {
  const { handleUserRegister } = useAuth();
  const { replace, goBack, canGoBack } = useNavigation<any>();
  const { control, handleSubmit, getValues } = useForm<FormInputs>({
    defaultValues: {
      userName: '',
      password: '',
      passwordConfirm: '',
    },
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
