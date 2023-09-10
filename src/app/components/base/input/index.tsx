import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInput, useTheme } from 'react-native-paper';
import { StyledHelperText, StyledTextInput } from './styles';
import { Text } from '../text';

interface IControlledInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  type?: TInputType;
  onSearch?: () => void;
}

type TInputType = 'text' | 'password' | 'search';

export const Input = ({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  onSearch,
  ...rest
}: IControlledInputProps) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toogleShowPassword = () => {
    setShowPassword((state) => !state);
  };

  const renderInputByType = (
    type: TInputType,
    value: any,
    onChange: (...event: any[]) => void,
    handleClean: () => void,
  ) => {
    return {
      password: (
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          right={
            (isFocused || value.length > 0) && (
              <TextInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                iconColor={theme.colors.primary}
                onPress={toogleShowPassword}
              />
            )
          }
          {...rest}
        />
      ),
      text: (
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
          right={
            value &&
            value.length > 0 && <TextInput.Icon icon={'close'} iconColor={theme.colors.primary} onPress={handleClean} />
          }
          {...rest}
        />
      ),
      search: (
        <StyledTextInput
          value={value}
          theme={theme}
          label={<Text>{label}</Text>}
          mode="outlined"
          onChangeText={(value) => {
            onChange(value);
            onSearch && onSearch();
          }}
          onSubmitEditing={onSearch}
          placeholder={placeholder}
          textColor={theme.colors.primary}
          outlineColor={theme.colors.primary}
          placeholderTextColor={theme.colors.secondary}
          right={<TextInput.Icon icon={'text-search'} color={theme.colors.primary} onPress={onSearch} />}
          returnKeyType="search"
          {...rest}
        />
      ),
    }[type];
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const handleClean = () => {
          onChange((value = ''));
        };

        return (
          <>
            {renderInputByType(type, value, onChange, handleClean)}
            {error && (
              <StyledHelperText type={'error'} theme={theme}>
                {error.message}
              </StyledHelperText>
            )}
          </>
        );
      }}
    />
  );
};
