import { IAuth, IAuthResponse } from '@model/auth/login';
import { mockAPIAuth } from 'app/mocks/auth';
import { ToastAndroid } from 'react-native';

export const useAuth = () => {
  const handleLogin = async (data: IAuth) => {
    try {
      const { status, message } = await mockAPIAuth(data);
      switch (status) {
        case 200:
          return true;
        case 411:
          ToastAndroid.show(message, ToastAndroid.TOP);
          return false;
        case 401:
          ToastAndroid.show(message, ToastAndroid.TOP);
          return false;
        case 500:
          ToastAndroid.show(message, ToastAndroid.TOP);
          return false;
        default:
          return false;
      }
    } catch (error) {
      ToastAndroid.show('Erro de conexão', ToastAndroid.TOP);
      return false;
    }
  };

  return { handleLogin };
};
