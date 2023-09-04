import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from 'app/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { Navigators, SignedInScreens, SignedOffScreens } from '@routes/screens';

export interface FormInputs {
  loginUser: string;
  password: string;
}

export const useLoginScreen = () => {
  const { handleLogin } = useAuth();
  const { navigate, replace } = useNavigation<any>();
  const [showModalState, setShowModalState] = useState(false);
  const { control, handleSubmit, getValues } = useForm<FormInputs>({
    defaultValues: {
      loginUser: '',
      password: '',
    },
  });

  const showModal = () => {
    setShowModalState(true);
  };

  const onCloseModal = () => {
    setShowModalState(false);
  };

  const onSubmit = async () => {
    const { loginUser, password } = getValues();
    const authentication = await handleLogin({ loginUser, password });
    if (authentication) {
      replace(Navigators.SIGNED_IN_NAVIGATOR, { screen: SignedInScreens.HOME });
    }
  };

  const handleWithoutAuth = () => {
    onCloseModal();
    navigate(Navigators.SIGNED_IN_NAVIGATOR, { screen: SignedInScreens.HOME });
  };

  return {
    control,
    handleWithoutAuth,
    handleSubmit,
    onSubmit,
    showModal,
    onCloseModal,
    showModalState,
  };
};
