import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const NavItemContainer = styled(motion.div)`
  position: relative;
  margin: 0 var(--boemly-space-4);
`;

export const ActivePageIndicator = styled(motion.div)`
  width: var(--boemly-space-1-5);
  height: var(--boemly-space-1-5);

  border-radius: var(--boemly-radii-full);
  background-color: var(--boemly-colors-primary-500);

  position: absolute;
  left: calc(var(--boemly-space-3) * -1);
  top: calc(50% - (var(--boemly-space-1-5) / 2));
`;
