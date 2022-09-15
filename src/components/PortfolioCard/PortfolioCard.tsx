import { Box, Button, Center, Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Heart } from 'phosphor-react';
import React, { ReactNode } from 'react';

export interface PortfolioCardProps {
  portfolioNumber: string;
  title: string;
  facts: {
    id: number;
    key: string;
    value: string;
  }[];
  button?: { text: string; onClick: () => void };
  image: ReactNode;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  portfolioNumber,
  title,
  facts,
  button,
  image,
}: PortfolioCardProps) => (
  <Box borderRadius="2xl" boxShadow="lg" maxWidth="sm">
    <Box
      position="relative"
      width="full"
      height="36"
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
    <Box padding="8">
      <Flex flexDir="row" alignItems="center" justifyContent="space-between">
        <div>
          <Text size="xsMonoUppercase">{portfolioNumber}</Text>
          <Heading as="h6" size="sm" mt="1">
            {title}
          </Heading>
        </div>
        <Center
          width="8"
          height="8"
          borderRadius="xl"
          borderWidth="thin"
          borderStyle="solid"
          borderColor="gray.200"
        >
          <Heart />
        </Center>
      </Flex>
      <Divider colorScheme="gray.200" mt="6" mb="6" />
      <SimpleGrid columns={2} spacing="6">
        {facts.map((fact) => (
          <Box key={fact.id}>
            <Text size="smLowNormal">{fact.key}</Text>
            <Text size="smMonoNormal" mt="2" color="black">
              {fact.value}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {button && (
        <Button width="full" mt="6" size="lg" onClick={button.onClick}>
          {button.text}
        </Button>
      )}
    </Box>
  </Box>
);
