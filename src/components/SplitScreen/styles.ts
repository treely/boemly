import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { BREAKPOINT_MD } from '../../constants/breakpoints';

interface ApportionmentProp {
  apportionment: number;
}

export const Left = styled.div<ApportionmentProp>`
  position: absolute;
  width: ${({ apportionment }) => apportionment}%;
  height: 100%;
  top: 0;

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    width: 100%;
    height: 100%;
    top: 0;
  }
`;

interface RightProps extends ApportionmentProp {
  hideLeftOnMobile?: boolean;
}

export const Right = styled(motion.div)<RightProps>`
  position: absolute;
  width: ${({ apportionment }) => apportionment}%;
  right: 0;

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    width: 100%;

    border-top-right-radius: ${({ hideLeftOnMobile }) =>
      hideLeftOnMobile ? '0' : 'var(--boemly-radii-2xl)'};
    border-top-left-radius: ${({ hideLeftOnMobile }) =>
      hideLeftOnMobile ? '0' : 'var(--boemly-radii-2xl)'};
    box-shadow: ${({ hideLeftOnMobile }) =>
      hideLeftOnMobile ? 'none' : 'var(--boemly-shadows-md)'};
  }
`;
