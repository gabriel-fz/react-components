import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  ButtonHTMLAttributes,
} from 'react';

import Spinner from '../Spinner';

import { Container, ContainerProps } from './styles';

interface ButtonLoadingProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonLoadingHandles {
  setIsLoading(): void;
}

const ButtonLoading: React.ForwardRefRenderFunction<
  ButtonLoadingHandles,
  ButtonLoadingProps
> = ({ className = '', children, ...rest }, ref) => {
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
    <Container type="button" className={className} {...rest}>
      {isLoading ? <Spinner sizeIcon={20} /> : children}
    </Container>
  );
};

export default forwardRef(ButtonLoading);
