import React from 'react';
import { StyledIcon } from './styles';

interface IIconProps {
  size: number;
  name: string;
  color: string;
}

export const Icon = ({ name, size, color }: IIconProps) => {
  return <StyledIcon icon={name} size={size} iconColor={color} />;
};
