import { Box, Divider, Flex, Heading, SimpleGrid, Text, useToken } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { ArrowsOutSimple, MapPin } from '@phosphor-icons/react';
import React, { ReactNode } from 'react';

export interface ProjectCardProps {
  title: string;
  facts: {
    id: number;
    text: string;
  }[];
  footerTitle: string;
  footerSubTitle: string;
  image: ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  facts,
  footerTitle,
  footerSubTitle,
  image,
}: ProjectCardProps) => {
  const [gray500] = useToken('colors', ['gray.500']);

  const icons = [<ArrowsOutSimple color={gray500} />, <MapPin color={gray500} />];

  return (
    <Flex
      flexDir="column"
      height="full"
      position="relative"
      borderRadius="2xl"
      boxShadow="lg"
      maxWidth="sm"
      minWidth={['2xs', null, 'xs']}
    >
      <Box
        position="relative"
        width="full"
        height="40"
        borderTopRadius="3xl"
        css={css`
          & span,
          div,
          img {
            border-top-left-radius: var(--boemly-radii-3xl);
            border-top-right-radius: var(--boemly-radii-3xl);
          }
        `}
      >
        {image}
      </Box>
      <Box padding="6" marginBottom="auto">
        <Heading as="h6" size="sm">
          {title}
        </Heading>
        <SimpleGrid columns={2} spacing="6" mt="6">
          {facts.map((fact, index) => (
            <Box key={fact.id} display="flex" flexDirection="row" alignItems="center">
              {icons[index]}
              <Text size="smLowNormal" ml="2" color="black">
                {fact.text}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Divider colorScheme="gray.200" />
      <Box padding="6" pb="8">
        <Heading size="lg" as="h6">
          {footerTitle}
        </Heading>
        <Text size="smLowNormal" mt="1">
          {footerSubTitle}
        </Text>
      </Box>
    </Flex>
  );
};
