import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInput, useTheme } from 'react-native-paper';
import { StyledTextInput } from './styles';
import { Text } from '../text';

interface IControlledInputProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password';
}

export const Input = ({ name, control, label, placeholder, type = 'text', ...rest }: IControlledInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toogleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const theme = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        if (type === 'password') {
          return (
            <StyledTextInput
              value={value}
              theme={theme}
              label={<Text>{label}</Text>}
              mode="outlined"
              onChangeText={onChange}
              placeholder={placeholder}
              secureTextEntry={!showPassword}
              textColor={theme.colors.primary}
              outlineColor={theme.colors.primary}
              placeholderTextColor={theme.colors.secondary}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye' : 'eye-off'}
                  iconColor={theme.colors.primary}
                  onPress={toogleShowPassword}
                />
              }
              {...rest}
            />
          );
        } else {
          return (
            <StyledTextInput
              value={value}
              theme={theme}
              label={<Text>{label}</Text>}
              mode="outlined"
              onChangeText={onChange}
              placeholder={placeholder}
              textColor={theme.colors.primary}
              outlineColor={theme.colors.primary}
              placeholderTextColor={theme.colors.secondary}
              {...rest}
            />
          );
        }
      }}
    />
  );
};
