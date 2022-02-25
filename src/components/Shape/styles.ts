import styled from '@emotion/styled';
import { BREAKPOINT_XL } from '../../constants/breakpoints';

interface ShapeContainerProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size:
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '90rem';
  radius: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  zIndex: string;
}

export const ShapeContainer = styled.div<ShapeContainerProps>`
  position: absolute;

  width: ${({ size }) => `var(--boemly-sizes-${size})`};
  height: ${({ size }) => `var(--boemly-sizes-${size})`};

  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};

  ${({ radius }) => `border-${radius}-radius`}: var(--boemly-radii-full);

  & span,
  div {
    ${({ radius }) => `border-${radius}-radius`}: var(--boemly-radii-full);
  }

  z-index: ${({ zIndex }) => zIndex};

  @media screen and (max-width: ${BREAKPOINT_XL}) {
    display: none;
  }
`;
