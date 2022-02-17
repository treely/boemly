import { Heading, Button } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { SLOW_TRANSITION_DURATION } from '../../constants/animations';
import { MobileMenuContainer, MobileMenuLinksContainer } from './styles';

export interface MobileMenuProps {
  isOpen: boolean;
  headerLinks: {
    text: string;
    onClick: () => void;
  }[];
  onClose: () => void;
}

const linksAnimations = [
  { offsetX: 100, opacity: 0.1 },
  { offsetX: 30, opacity: 0.5 },
  { offsetX: 70, opacity: 1 },
  { offsetX: 80, opacity: 0.5 },
  { offsetX: 90, opacity: 0.2 },
];
const transition = { duration: SLOW_TRANSITION_DURATION, ease: 'easeIn' };

export const MobileMenu: React.FC<MobileMenuProps> = ({
  onClose,
  isOpen,
  headerLinks,
}: MobileMenuProps) => {
  const { width } = useWindowSize();
  const controls = useAnimation();

  const variants = {
    open: { width },
    close: { width: 0 },
  };

  const linkVariants = linksAnimations.map((linkAnimation) => ({
    open: { x: 0, opacity: 1 },
    close: { x: -width + linkAnimation.offsetX, opacity: 0 },
  }));

  useEffect(() => {
    controls.start(isOpen ? 'open' : 'close');
  }, [isOpen]);

  return (
    <MobileMenuContainer
      initial="close"
      animate={controls}
      variants={variants}
      transition={transition}
      numberOfItems={headerLinks.length}
    >
      {headerLinks.map((link, index) => (
        <MobileMenuLinksContainer
          key={link.text.toLowerCase().replace(' ', '')}
          initial="close"
          animate={controls}
          variants={linkVariants[index]}
          transition={transition}
        >
          <Button
            variant="link"
            onClick={() => {
              link.onClick();
              onClose();
            }}
          >
            <Heading size="2xl" py="5">
              {link.text}
            </Heading>
          </Button>
        </MobileMenuLinksContainer>
      ))}
    </MobileMenuContainer>
  );
};
