import { IActionItemFAB } from '@components/fabGroup';
import { IAuth, IRegister } from '@model/auth/login';
import { HttpStatusCode } from '@model/http/httpClient';
import { useNavigation } from '@react-navigation/native';
import { Navigators, SignedInScreens, SignedOffScreens } from '@routes/screens';
import AuthService from '@services/auth';
import UserService from '@services/user';
import { toastConfig } from 'app/constants/ToastConfig';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';
import Toast from 'react-native-root-toast';

export const useAuth = () => {
  const authService = new AuthService();
  const userService = new UserService();
  const { navigate } = useNavigation<any>();
  const { t } = useTranslation();
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
      const { login, password } = userData;
      const { statusCode, data } = await userService.register({ login, password });
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

  const handleUserEdit = async (userData: IRegister) => {
    try {
      const { login, password } = userData;
      const { statusCode, data } = await userService.edit({ login, password });
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
    navigate(SignedOffScreens.REGISTER);
  };

  const handleGoToEdit = () => {
    navigate(SignedInScreens.EDIT);
  };

  const userActionListStyle = {
    color: theme.colors.primary,
    labelTextColor: theme.colors.primary,
    style: { borderRadius: 60 },
  };

  const userActionList: Array<IActionItemFAB> = [
    {
      icon: 'account-edit',
      label: t('FAB_GROUP.HOME.EDIT'),
      onPress: handleGoToEdit,
      ...userActionListStyle,
    },
    {
      icon: 'logout',
      label: t('FAB_GROUP.HOME.LOGOUT'),
      onPress: handleLogout,
      ...userActionListStyle,
    },
  ];

  return {
    handleLogin,
    handleLogout,
    handleGoToRegister,
    handleGoToEdit,
    handleUserRegister,
    handleUserEdit,
    userActionList,
  };
};
