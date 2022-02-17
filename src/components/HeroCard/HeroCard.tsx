import { Button, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import IImage from '../../models/components/IImage';
import ILink from '../../models/components/ILink';
import { Gradient } from '../Gradient';
import { HeroCardContainer, HeroInnerContainer } from './styles';

export interface HeroCardProps {
  title: string;
  subTitle: string;
  link?: ILink;
  image?: IImage;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  title,
  subTitle,
  link,
  image,
}: HeroCardProps) => (
  <HeroCardContainer data-testid="hero-card">
    {image && (
      <>
        <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
        <Gradient />
      </>
    )}
    <HeroInnerContainer>
      <Heading as="h2" size="3xl" color="white" maxW="3xl" mx="auto">
        {title}
      </Heading>
      <Text size="mdRegularNormal" color="white" maxW="2xl" mx="auto" mt="6">
        {subTitle}
      </Text>
      {link && (
        <Link href={link.href} passHref>
          <Button mt="6" size="lg">
            {link.text}
          </Button>
        </Link>
      )}
    </HeroInnerContainer>
  </HeroCardContainer>
);
