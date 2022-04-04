import { Box, useMediaQuery } from '@chakra-ui/react';
import React, { ReactNode, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useMeasure } from 'react-use';
import { BREAKPOINT_MD_QUERY } from '../../constants/breakpoints';
import useResizeEventListener from '../../hooks/useResizeEventListener';
import { Left, Right } from './styles';

export interface SplitScreenProps {
  left: ReactNode;
  right: ReactNode;
  mobileIsOpen?: boolean;
  hideLeftOnMobile?: boolean;
  apportionment?: number;
}

export const SplitScreen: React.FC<SplitScreenProps> = ({
  left,
  right,
  mobileIsOpen = false,
  hideLeftOnMobile = false,
  apportionment = 42,
}: SplitScreenProps) => {
  useResizeEventListener();

  const [mobile] = useMediaQuery(BREAKPOINT_MD_QUERY);

  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const controls = useAnimation();

  const variants = {
    desktop: { top: 0, height: '100%' },
    mobileClosed: { top: 'var(--boemly-space-28)', height: 'calc(100% - var(--header-height))' },
    mobileOpen: { top: height - 40, height: 'calc(100% - var(--header-height))' },
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
    <div ref={ref}>
      <Box
        position="relative"
        height="calc(var(--viewport-height, 1vh) * 100 - var(--header-height))"
        marginTop="var(--header-height)"
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
