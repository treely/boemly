import { Button } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ILink from '../../models/components/ILink';
import { ActivePageIndicator, NavItemContainer } from './styles';

export interface NavItemProps {
  color: 'black' | 'white';
  link: ILink;
}
const variants = {
  visible: { scale: 1 },
  hidden: { scale: 0 },
};

export const NavItem: React.FC<NavItemProps> = ({ color, link }: NavItemProps) => {
  const { asPath } = useRouter();
  const controls = useAnimation();

  const animate = (state: 'visible' | 'hidden') => {
    if (link.href !== asPath) {
      controls.start(state);
    }
  };

  useEffect(() => {
    if (link.href === asPath) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [asPath]);

  return (
    <NavItemContainer onHoverStart={() => animate('visible')} onHoverEnd={() => animate('hidden')}>
      <ActivePageIndicator initial="hidden" animate={controls} variants={variants} />

      <Link href={link.href} passHref>
        <Button size="md" color={color} variant="link">
          {link.text}
        </Button>
      </Link>
    </NavItemContainer>
  );
};
