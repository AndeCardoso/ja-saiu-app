import React, { ReactNode } from 'react';
import { useTheme } from 'react-native-paper';
import { StyledButtonModal } from './styles';
import { Text } from '@components/base/text';

interface IButtonModalProps {
  children: ReactNode;
  onPress: () => void;
  fullwidth?: boolean;
  side?: sideType;
}

export interface IButtonModal {
  text: string;
  onPress: () => void;
}

export type sideType = 'left' | 'rigth';

export const ButtonModal = ({ children, onPress, fullwidth, side }: IButtonModalProps) => {
  const theme = useTheme();

  return (
    <StyledButtonModal theme={theme} fullwidth={fullwidth} side={side} onPress={onPress}>
      <Text fontSize={20} bold={700} uppercase contrast>
        {children}
      </Text>
    </StyledButtonModal>
  );
};
