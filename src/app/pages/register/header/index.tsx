import React from 'react';
import { Container } from './styles';
import { Text } from '@components/base/text';
import { useTranslation } from 'react-i18next';

export const HeaderRegister = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Text fontSize={24} bold={700} contrast>
        {t('PAGES.REGISTER.HEADER')}
      </Text>
    </Container>
  );
};
