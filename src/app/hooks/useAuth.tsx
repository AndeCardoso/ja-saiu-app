import { IActionItemFAB } from '@components/fabGroup';
import { IAuth, IRegister } from '@model/auth/login';
import { HttpStatusCode } from '@model/http/httpClient';
import { useNavigation } from '@react-navigation/native';
import { Navigators, SignedOffScreens } from '@routes/screens';
import AuthService from '@services/auth';
import { toastConfig } from 'app/constants/ToastConfig';
import { useTheme } from 'react-native-paper';
import Toast from 'react-native-root-toast';

export const useAuth = () => {
  const authService = new AuthService();
  const { navigate } = useNavigation<any>();
  const theme = useTheme();
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

  const handleLogout = async (loginData: IAuth) => {
    try {
      navigate(Navigators.SIGNED_OFF_NAVIGATOR, { screen: SignedOffScreens.LOGIN });
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

  const handleGoToRegister = () => {
    navigate(Navigators.SIGNED_OFF_NAVIGATOR, { screen: SignedOffScreens.REGISTER });
  };

  const userActionListStyle = {
    color: theme.colors.primary,
    labelTextColor: theme.colors.primary,
    style: { borderRadius: 60 },
  };

  const userActionList: Array<IActionItemFAB> = [
    {
      icon: 'account-edit',
      label: 'Cadastro',
      onPress: handleUserRegister,
      ...userActionListStyle,
    },
    {
      icon: 'logout',
      label: 'Logout',
      onPress: handleLogout,
      ...userActionListStyle,
    },
  ];

  return { handleLogin, handleLogout, handleGoToRegister, handleUserRegister, userActionList };
};
