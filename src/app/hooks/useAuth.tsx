import { IAuth, IRegister } from '@model/auth/login';
import { HttpStatusCode } from '@model/http/httpClient';
import AuthService from '@services/auth';
import { toastConfig } from 'app/constants/ToastConfig';
import Toast from 'react-native-root-toast';

export const useAuth = () => {
  const authService = new AuthService();
  const message = 'Erro inesperado';

  const handleLogin = async (loginData: IAuth) => {
    try {
      const { statusCode } = await authService.authenticate(loginData);

      switch (statusCode) {
        case HttpStatusCode.ok:
          return true;
        case HttpStatusCode.notModified:
          Toast.show(message, toastConfig.error);
          return false;
        case HttpStatusCode.unauthorized:
          Toast.show(message, toastConfig.alert);
          return false;
        case HttpStatusCode.internalServerError:
          Toast.show(message, toastConfig.error);
          return false;
        default:
          return false;
      }
    } catch (error) {
      Toast.show('Erro de conexão', toastConfig.error);
      return false;
    }
  };

  const handleUserRegister = async (userData: IRegister) => {
    try {
      const { loginUser, password } = userData;
      const { statusCode, data } = await authService.register({ loginUser, password });
      switch (statusCode) {
        case HttpStatusCode.ok:
          return true;
        case HttpStatusCode.notModified:
          Toast.show(message, toastConfig.error);
          return false;
        case HttpStatusCode.unauthorized:
          Toast.show(message, toastConfig.alert);
          return false;
        case HttpStatusCode.internalServerError:
          Toast.show(message, toastConfig.error);
          return false;
        default:
          return false;
      }
    } catch (error) {
      Toast.show(message, toastConfig.error);
    }
  };

  return { handleLogin, handleUserRegister };
};
