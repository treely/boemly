import { Heading, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import React, { ReactNode } from 'react';
import { Gradient } from '../Gradient';
import { HeroCardContainer, HeroInnerContainer } from './styles';

export interface HeroCardProps {
  title: string;
  subTitle: string;
  link?: {
    text: string;
    onClick: () => void;
  };
  image?: ReactNode;
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
        {image}
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
        <Button mt="6" size="lg" onClick={link.onClick}>
          {link.text}
        </Button>
      )}
    </HeroInnerContainer>
  </HeroCardContainer>
);
