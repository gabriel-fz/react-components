import React from 'react';

import { ButtonProps } from '../Button';
import Spinner from '../Spinner';

import { Container } from './styles';

export interface ButtonLoadingSecondaryProps extends ButtonProps {
  className?: string;
  isLoading?: boolean;
}

const ButtonLoadingSecondary: React.FC<ButtonLoadingSecondaryProps> = ({
  className = '',
  isLoading,
  disabled,
  children,
  ...rest
}) => {
  return (
    <Container className={className} disabled={disabled || isLoading} {...rest}>
      {isLoading ? <Spinner sizeIcon={20} /> : children}
    </Container>
  );
};

export default ButtonLoadingSecondary;
