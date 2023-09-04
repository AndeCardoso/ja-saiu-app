import { colors } from '@global/styles/colors';
import { Platform } from 'react-native';
import Toast, { ToastOptions } from 'react-native-root-toast';

const isIos = Platform.OS === 'ios';

interface IToastConfig {
  info: ToastOptions;
  alert: ToastOptions;
  error: ToastOptions;
}

export const toastConfig: IToastConfig = {
  info: {
    duration: Toast.durations.SHORT,
    position: Toast.positions.TOP,
    containerStyle: { marginTop: isIos ? 36 : 0 },
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: colors.PRIMARY,
    textStyle: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.BLACK,
    },
  },
  alert: {
    duration: Toast.durations.SHORT,
    position: Toast.positions.TOP,
    containerStyle: { marginTop: isIos ? 36 : 0 },
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: colors.PRIMARY,
    textStyle: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.BLACK,
    },
  },
  error: {
    duration: Toast.durations.SHORT,
    position: Toast.positions.TOP,
    containerStyle: { marginTop: isIos ? 36 : 0 },
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: colors.WARNING,
    textStyle: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.BLACK,
    },
  },
};
