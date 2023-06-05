import { useTheme } from 'react-native-paper';
import { IButtonModal, ButtonModal } from '../modal-button';
import { Footer } from './styles';

interface IFooterModalProps {
  firstButton?: IButtonModal;
  secondButton?: IButtonModal;
}

export type sideType = 'left' | 'rigth';

export const FooterModal = ({ firstButton, secondButton }: IFooterModalProps) => {
  const theme = useTheme();

  return (
    <Footer theme={theme}>
      {secondButton && (
        <ButtonModal side="left" onPress={secondButton.onPress}>
          {secondButton.text}
        </ButtonModal>
      )}
      {firstButton && (
        <ButtonModal fullwidth={!secondButton} side="rigth" onPress={firstButton.onPress}>
          {firstButton.text}
        </ButtonModal>
      )}
    </Footer>
  );
};
