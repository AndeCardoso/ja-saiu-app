import { ToastAndroid } from 'react-native';
import { useForm } from 'react-hook-form';

import { useAuth } from 'app/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { Navigators, SignedInScreens } from '@routes/screens';

export interface FormInputs {
  userName: string;
  password: string;
}

export const useLoginScreen = () => {
  const { handleLogin } = useAuth();
  const { navigate, replace } = useNavigation<any>();
  const { control, handleSubmit, getValues } = useForm<FormInputs>({
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    const { userName, password } = getValues();
    const authentication = await handleLogin({ userName, password });
    if (authentication) {
      replace(Navigators.SIGNED_IN_NAVIGATOR, { screen: SignedInScreens.HOME });
    }
  };

  const handleWithoutAuth = () => {
    navigate(Navigators.SIGNED_IN_NAVIGATOR, { screen: SignedInScreens.HOME });
  };

  const handleRegister = () => {
    navigate(Navigators.SIGNED_IN_NAVIGATOR, { screen: SignedInScreens.HOME });
  };

  return { control, handleRegister, handleWithoutAuth, handleSubmit, onSubmit };
};
