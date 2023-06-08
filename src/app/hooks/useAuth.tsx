import { IAuth, IRegister } from '@model/auth/login';
import { HttpStatusCode } from '@model/http/httpClient';
import { SuperConsole } from '@tools/indentedConsole';
import { toastConfig } from 'app/constants/ToastConfigs';
import { mockAPIAuth } from 'app/mocks/auth';
import Toast from 'react-native-root-toast';

export const useAuth = () => {
  const handleLogin = async (data: IAuth) => {
    try {
      const { status, message } = await mockAPIAuth(data);
      switch (status) {
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

  const handleUserRegister = async (data: IRegister) => {
    const { userName, password, passwordConfirm } = data;
    SuperConsole({ userName, password, passwordConfirm });
  };

  return { handleLogin, handleUserRegister };
};
