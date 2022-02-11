import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MenuBurgerContainer = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;

  padding: 1px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

interface MenuBurgerItemProps {
  color: 'black' | 'white';
}
export const MenuBurgerItem = styled(motion.div)<MenuBurgerItemProps>`
  height: 2px;
  width: 1rem;

  border-radius: var(--chakra-radii-full);

  transition: background-color ease var(--medium-transition-duration);
  background-color: var(--chakra-colors-${({ color }) => color});
`;
