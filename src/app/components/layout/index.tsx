import { ReactNode } from 'react';
import { Container } from './styles';
import { useTheme } from 'react-native-paper';

interface ILayoutProps {
  verticalCenter?: boolean;
  scrollView?: boolean;
  children: ReactNode;
}

export const Layout = ({ verticalCenter, scrollView, children }: ILayoutProps) => {
  const theme = useTheme();
  return (
    <Container verticalCenter={verticalCenter} theme={theme}>
      {children}
    </Container>
  );
};
