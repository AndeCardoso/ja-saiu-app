import React, { ReactNode } from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { Header } from './styles';
import { Text } from '@components/base/text';

interface IHeaderModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const HeaderModal = ({ children, onClose }: IHeaderModalProps) => {
  const theme = useTheme();

  return (
    <Header theme={theme}>
      <Text bold={700} fontSize={24}>
        {children}
      </Text>
      <IconButton icon={'close'} iconColor={theme.colors.primary} onPress={onClose} />
    </Header>
  );
};
