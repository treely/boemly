import { Flex, IconButton } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { MEDIUM_TRANSITION_DURATION } from '../../constants/animations';
import { MenuBurgerItem } from './styles';

export interface MobileMenuBurgerProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  color: 'black' | 'white';
}

export const MobileMenuBurger: React.FC<MobileMenuBurgerProps> = ({
  onOpen,
  onClose,
  isOpen,
  color,
}: MobileMenuBurgerProps) => {
  const controls = useAnimation();

  const topVariants = {
    open: { rotate: 45, y: 7, x: 0 },
    close: { rotate: 0, y: 0, x: 0 },
  };
  const centerVariants = {
    open: { x: 16, opacity: 0 },
    close: { x: 0, opacity: 1 },
  };
  const bottomVariants = {
    open: { rotate: -45, y: -7, x: 0 },
    close: { rotate: 0, y: 0, x: 0 },
  };

  const toggleOpen = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  useEffect(() => {
    controls.start(isOpen ? 'open' : 'close');
  }, [isOpen, controls]);

  return (
    <IconButton
      aria-label="Menu toggle"
      onClick={toggleOpen}
      variant="ghost"
      data-testid={isOpen ? 'x' : 'list'}
      icon={
        <Flex
          position="relative"
          width="4"
          height="4"
          flexDirection="column"
          justifyContent="space-between"
          overflow="hidden"
        >
          <MenuBurgerItem
            animate={controls}
            variants={topVariants}
            transition={{ duration: MEDIUM_TRANSITION_DURATION }}
            color={color}
          />
          <MenuBurgerItem
            animate={controls}
            variants={centerVariants}
            transition={{ duration: MEDIUM_TRANSITION_DURATION }}
            color={color}
          />
          <MenuBurgerItem
            animate={controls}
            variants={bottomVariants}
            transition={{ duration: MEDIUM_TRANSITION_DURATION }}
            color={color}
          />
        </Flex>
      }
    />
  );
};
