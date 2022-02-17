import { Button } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { ActivePageIndicator, NavItemContainer } from './styles';

export interface NavItemProps {
  color: 'black' | 'white';
  link: { text: string; onClick: () => void };
  active?: boolean;
}
const variants = {
  visible: { scale: 1 },
  hidden: { scale: 0 },
};

export const NavItem: React.FC<NavItemProps> = ({ active = false, color, link }: NavItemProps) => {
  const controls = useAnimation();

  const animate = (state: 'visible' | 'hidden') => {
    if (!active) {
      controls.start(state);
    }
  };

  useEffect(() => {
    if (active) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [active]);

  return (
    <NavItemContainer onHoverStart={() => animate('visible')} onHoverEnd={() => animate('hidden')}>
      <ActivePageIndicator initial="hidden" animate={controls} variants={variants} />

      <Button size="md" color={color} variant="link" onClick={link.onClick}>
        {link.text}
      </Button>
    </NavItemContainer>
  );
};
