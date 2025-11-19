import { Box, useMediaQuery } from '@chakra-ui/react';
import React, { ReactNode, useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { BREAKPOINT_MD_QUERY } from '../../constants/breakpoints';
import useResizeEventListener from '../../hooks/useResizeEventListener';
import { Left, Right } from './styles';
import { useMeasure } from '@reactuses/core';

export interface SplitScreenProps {
  left: ReactNode;
  right: ReactNode;
  mobileIsOpen?: boolean;
  hideLeftOnMobile?: boolean;
  apportionment?: number;
  showHeaderGap?: boolean;
}

export const SplitScreen: React.FC<SplitScreenProps> = ({
  left,
  right,
  mobileIsOpen = false,
  hideLeftOnMobile = false,
  apportionment = 42,
  showHeaderGap = true,
}: SplitScreenProps) => {
  useResizeEventListener();

  const [mobile] = useMediaQuery([BREAKPOINT_MD_QUERY], { fallback: [false] });

  const ref = useRef<HTMLDivElement>(null);
  const [rect] = useMeasure(ref);
  const controls = useAnimation();

  const variants = {
    desktop: { top: 0, height: '100%' },
    mobileClosed: {
      top: 'var(--boemly-spacing-28)',
      height: 'calc(100% - var(--boemly-spacing-28))',
    },
    mobileOpen: { top: (rect?.height ?? 0) - 40, height: 'calc(100% - var(--boemly-spacing-28))' },
  };

  useEffect(() => {
    if (mobile && !hideLeftOnMobile) {
      controls.start(mobileIsOpen ? 'mobileOpen' : 'mobileClosed');
    } else {
      controls.start('desktop');
    }
  }, [mobileIsOpen, rect?.height, controls, mobile, hideLeftOnMobile]);

  return (
    <div ref={ref}>
      <Box
        position="relative"
        height="calc(var(--viewport-height, 1vh) * 100 - var(--header-height))"
        marginTop={showHeaderGap ? 'var(--header-height)' : '0'}
        overflow="hidden"
      >
        <Left apportionment={apportionment}>{(!mobile || !hideLeftOnMobile) && left}</Left>
        <Right
          variants={variants}
          initial="desktop"
          animate={controls}
          hideLeftOnMobile={hideLeftOnMobile}
          apportionment={100 - apportionment}
        >
          {right}
        </Right>
      </Box>
    </div>
  );
};
