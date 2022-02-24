import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BREAKPOINT_MD } from '../../constants/breakpoints';

export const SplitScreenContainer = styled.div<{ ref: any }>`
  position: relative;
  height: calc(var(--viewport-height, 1vh) * 100 - var(--header-height));
  margin-top: var(--header-height);
  overflow: hidden;
`;

export const Left = styled.div`
  position: absolute;
  width: 42%;
  height: 100%;
  top: 0;

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    width: 100%;
    top: 0;
    height: 100%;
  }
`;

interface RightProps {
  hideLeftOnMobile?: boolean;
}

export const Right = styled(motion.div)<RightProps>`
  position: absolute;
  width: 58%;
  right: 0;

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    width: 100%;

    border-top-right-radius: ${({ hideLeftOnMobile }) =>
      hideLeftOnMobile ? '0' : 'var(--boemly-radii-2xl)'};
    border-top-left-radius: ${({ hideLeftOnMobile }) =>
      hideLeftOnMobile ? '0' : 'var(--boemly-radii-2xl)'};
    box-shadow: ${({ hideLeftOnMobile }) =>
      hideLeftOnMobile ? 'none' : 'var(--boemly-shadows-md)'};

    // This is just needed if the right container contains a mapbox map.
    // Since it's no problem if there are other components in the right
    // container I think it's ok to keep that here.
    & .mapboxgl-map {
      overflow: hidden;
      border-top-right-radius: ${({ hideLeftOnMobile }) =>
        hideLeftOnMobile ? '0' : 'var(--boemly-radii-2xl)'};
      border-top-left-radius: ${({ hideLeftOnMobile }) =>
        hideLeftOnMobile ? '0' : 'var(--boemly-radii-2xl)'};
      box-shadow: ${({ hideLeftOnMobile }) =>
        hideLeftOnMobile ? 'none' : 'var(--boemly-shadows-md)'};

      mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    }
  }
`;
