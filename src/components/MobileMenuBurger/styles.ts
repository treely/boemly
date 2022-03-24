import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface MenuBurgerItemProps {
  color: 'black' | 'white';
}
export const MenuBurgerItem = styled(motion.div)<MenuBurgerItemProps>`
  height: var(--boemly-space-0-5);
  width: var(--boemly-space-4);

  border-radius: var(--boemly-radii-full);

  transition: background-color ease var(--medium-transition-duration);
  background-color: var(--boemly-colors-${({ color }) => color});
`;
