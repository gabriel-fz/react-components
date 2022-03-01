import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  ButtonHTMLAttributes,
} from 'react';

import { ButtonProps } from '../Button';
import Spinner from '../Spinner';

import { Container } from './styles';

interface ButtonLoadingProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonLoadingHandles {
  setIsLoading(): void;
}

const ButtonLoading: React.ForwardRefRenderFunction<
  ButtonLoadingHandles,
  ButtonLoadingProps
> = ({ className = '', children, disabled, ...rest }, ref) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSetIsLoading = useCallback(() => {
    setIsLoading(state => !state);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      setIsLoading: handleSetIsLoading,
    };
  });

  return (
    <Container
      type="button"
      className={className}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? <Spinner sizeIcon={20} /> : children}
    </Container>
  );
};

export default forwardRef(ButtonLoading);
