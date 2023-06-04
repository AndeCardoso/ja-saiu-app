import { ToastAndroid } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuth } from 'app/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { Navigators, SignedInScreens } from '@routes/screens';

export interface FormInputs {
  userName: string;
  password: string;
  passwordConfirm: string;
}

const registerDataSchema = yup.object().shape(
  {
    userName: yup.string().min(4, 'É necessario mais que 4 caracteres').required('Este campo é obrigatório'),

    password: yup
      .string()
      .required('Este campo é obrigatório')
      .min(4, 'É necessario mais que 4 caracteres')
      .when('passwordConfirm', (passwordConfirm, field) =>
        passwordConfirm ? field.oneOf([yup.ref('passwordConfirm')], 'As senhas informados estão diferentes') : field,
      ),

    passwordConfirm: yup
      .string()
      .required('Este campo é obrigatório')
      .min(4, 'É necessario mais que 4 caracteres')
      .when('password', (password, field) =>
        password ? field.oneOf([yup.ref('password')], 'As senhas informados estão diferentes') : field,
      ),
  },
  [['password', 'passwordConfirm']],
);

export const useRegisterScreen = () => {
  const { handleUserRegister } = useAuth();
  const { replace, goBack, canGoBack } = useNavigation<any>();
  const { control, handleSubmit, getValues } = useForm<FormInputs>({
    defaultValues: {
      userName: '',
      password: '',
      passwordConfirm: '',
    },
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
