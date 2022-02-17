import { motion } from 'framer-motion';
import styled from 'styled-components';

interface MobileMenuContainerProps {
  numberOfItems: number;
}
export const MobileMenuContainer = styled(motion.div)<MobileMenuContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  height: 100%;

  background-color: var(--chakra-colors-white);
  padding-top: calc(
    50vh - (${({ numberOfItems }) => numberOfItems} * (var(--chakra-space-10) + 37px) / 2)
  );
`;

export const MobileMenuLinksContainer = styled(motion.div)`
  margin: 0 var(--chakra-space-6);
  width: calc(100vw - (2 * var(--chakra-space-6)));
`;
