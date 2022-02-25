import { useMediaQuery } from '@chakra-ui/react';
import React, { ReactNode, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useMeasure } from 'react-use';
import { BREAKPOINT_MD_QUERY } from '../../constants/breakpoints';
import useResizeEventListener from '../../hooks/useResizeEventListener';
import { Left, Right } from './styles';
import { css } from '@emotion/react';

export interface SplitScreenProps {
  left: ReactNode;
  right: ReactNode;
  mobileIsOpen?: boolean;
  hideLeftOnMobile?: boolean;
}

export const SplitScreen: React.FC<SplitScreenProps> = ({
  left,
  right,
  mobileIsOpen = false,
  hideLeftOnMobile = false,
}: SplitScreenProps) => {
  useResizeEventListener();

  const [mobile] = useMediaQuery(BREAKPOINT_MD_QUERY);

  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const controls = useAnimation();

  const variants = {
    desktop: { top: 0, height: '100%' },
    mobileClosed: { top: 110, height: 'calc(100% - 110px)' },
    mobileOpen: { top: height - 40, height: 'calc(100% - 110px)' },
  };

  const mobileAndLeftNotHidden = mobile && !hideLeftOnMobile;

  useEffect(() => {
    if (mobileAndLeftNotHidden) {
      controls.start(mobileIsOpen ? 'mobileOpen' : 'mobileClosed');
    } else {
      controls.start('desktop');
    }
  }, [mobileIsOpen, height]);

  return (
    <div
      ref={ref}
      css={css`
        position: relative;
        height: calc(var(--viewport-height, 1vh) * 100 - var(--header-height));
        margin-top: var(--header-height);
        overflow: hidden;
      `}
    >
      <Left>{(!mobile || !hideLeftOnMobile) && left}</Left>
      <Right
        variants={variants}
        initial="desktop"
        animate={controls}
        hideLeftOnMobile={hideLeftOnMobile}
      >
        {right}
      </Right>
    </div>
  );
};
