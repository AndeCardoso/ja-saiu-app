import React from 'react';
import { Container } from './styles';
import { Text } from '@components/base/text';
import { Input } from '@components/base/input';
import { Control } from 'react-hook-form';
import { FormInputs } from '../useDiscoverScreen';
import { useTranslation } from 'react-i18next';

interface IHeaderDiscoverProps {
  control: Control<FormInputs>;
  onSearch: () => void;
}

export const HeaderDiscover = ({ control, onSearch }: IHeaderDiscoverProps) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Text fontSize={24} bold={700} contrast>
        {t('TAB_NAVIGATION.DISCOVERY')}
      </Text>
      <Input control={control} name="search" placeholder="Buscar" type="search" onSearch={onSearch} />
    </Container>
  );
};