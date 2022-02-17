import { Box, Button, Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Heart } from 'phosphor-react';
import React, { ReactNode } from 'react';
import {
  CardContainer,
  CardHeaderContainer,
  CardIconContainer,
  CardImageContainer,
  CardInnerContainer,
} from './styles';

export interface PortfolioCardProps {
  id: number;
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
  <CardContainer data-testid="card">
    <CardImageContainer>{image}</CardImageContainer>
    <CardInnerContainer>
      <CardHeaderContainer>
        <div>
          <Text size="xsMonoUppercase">{portfolioNumber}</Text>
          <Heading as="h6" size="sm" mt="1">
            {title}
          </Heading>
        </div>
        <CardIconContainer>
          <Heart />
        </CardIconContainer>
      </CardHeaderContainer>
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
        <Button isFullWidth mt="6" size="lg" onClick={button.onClick}>
          {button.text}
        </Button>
      )}
    </CardInnerContainer>
  </CardContainer>
);
