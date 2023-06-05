import { ReactNode } from 'react';
import { Portal, useTheme } from 'react-native-paper';
import { Container, ModalContainer } from './styles';
import { FooterModal } from './modal-footer';
import { IButtonModal } from './modal-button';
import { HeaderModal } from './modal-header';

interface IModalProps {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
  header?: string;
  firstButton?: IButtonModal;
  secondButton?: IButtonModal;
}

export const Modal = ({ children, visible, onClose, header, firstButton, secondButton, ...rest }: IModalProps) => {
  const theme = useTheme();
  return (
    <Portal theme={theme}>
      <ModalContainer visible={visible} onDismiss={onClose} {...rest}>
        <Container theme={theme}>
          {header && <HeaderModal onClose={onClose}>{header}</HeaderModal>}
          {children}
        </Container>
        {(firstButton || secondButton) && <FooterModal firstButton={firstButton} secondButton={secondButton} />}
      </ModalContainer>
    </Portal>
  );
};
