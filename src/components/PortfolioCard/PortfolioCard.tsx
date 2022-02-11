import { Box, Button, Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'phosphor-react';
import {
  CardContainer,
  CardHeaderContainer,
  CardIconContainer,
  CardImageContainer,
  CardInnerContainer,
} from './styles';
import ILink from '../../models/components/ILink';
import IImage from '../../models/components/IImage';

export interface PortfolioCardProps {
  id: number;
  portfolioNumber: string;
  title: string;
  facts: {
    id: number;
    key: string;
    value: string;
  }[];
  button: ILink;
  image: IImage;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  portfolioNumber,
  title,
  facts,
  button,
  image,
}: PortfolioCardProps) => (
  <CardContainer data-testid="card">
    <CardImageContainer>
      <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
    </CardImageContainer>
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

      <Link href={button.href} passHref>
        <Button isFullWidth mt="6" size="lg">
          {button.text}
        </Button>
      </Link>
    </CardInnerContainer>
  </CardContainer>
);
