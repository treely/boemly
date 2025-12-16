import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Gradient } from '../Gradient';

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
  <Box
    position="relative"
    height="lg"
    textAlign="center"
    borderRadius="2xl"
    overflow="hidden"
    css={{
      '& span, div, img': {
        borderRadius: 'var(--boemly-radii-2xl)',
      },
    }}
  >
    {image && (
      <>
        {image}
        <Gradient />
      </>
    )}
    <Box position="absolute" width="full" top="50%" transform="translateY(-50%)" paddingX="4">
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
    </Box>
  </Box>
);
