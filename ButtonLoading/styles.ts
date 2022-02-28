import styled, { css, CSSProp } from 'styled-components';

type btnColorType = 'primary' | 'secondary';

export interface ContainerProps {
  btnType?: btnColorType;
}

type styleVariationsType = {
  [key in btnColorType]: CSSProp;
};

const styleVariations: styleVariationsType = {
  primary: css``,
  secondary: css``,
};

export const Container = styled.button<ContainerProps>`
  ${({ btnType }) =>
    btnType ? styleVariations[btnType] : styleVariations.primary}
`;
