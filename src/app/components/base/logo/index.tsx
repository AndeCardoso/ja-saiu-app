import React from 'react';
import LogoImage from '@assets/png/logo.png';
import { StyledImage } from './styles';

interface IStyledLogoProps {
  size: number;
}

export const StyledLogo = ({ size }: IStyledLogoProps) => {
  return <StyledImage source={LogoImage} size={size} />;
};
