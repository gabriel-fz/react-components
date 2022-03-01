import React, { ButtonHTMLAttributes } from 'react';

import { Container, ContainerProps } from './styles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ContainerProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <Container className={className} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
