import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavItemContainer = styled(motion.div)`
  position: relative;
  margin: 0 var(--chakra-space-4);
`;

export const ActivePageIndicator = styled(motion.div)`
  width: 0.375rem;
  height: 0.375rem;

  border-radius: var(--chakra-radii-full);
  background-color: var(--chakra-colors-primary-500);

  position: absolute;
  left: calc(var(--chakra-space-3) * -1);
  top: calc(50% - (0.375rem / 2));
`;
