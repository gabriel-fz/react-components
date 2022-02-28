import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Container } from './styles';

interface SpinnerProps {
  size: number;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size, className = '' }) => {
  return (
    <Container className={className}>
      <AiOutlineLoading3Quarters size={size} />
    </Container>
  );
};

export default Spinner;
