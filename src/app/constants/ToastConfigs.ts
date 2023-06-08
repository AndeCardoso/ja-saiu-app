import { colors } from '@global/styles/colors';
import Toast, { ToastOptions } from 'react-native-root-toast';

interface IToastConfigs {
  info: ToastOptions;
  alert: ToastOptions;
  error: ToastOptions;
}

export const toastConfig: IToastConfigs = {
  info: {
    duration: Toast.durations.SHORT,
    position: Toast.positions.TOP,
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
