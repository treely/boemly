import { Box, Divider, Heading, SimpleGrid, Text, useToken } from '@chakra-ui/react';
import Image from 'next/image';
import { ArrowsOutSimple, MapPin } from 'phosphor-react';
import IImage from '../../models/components/IImage';

import { CardContainer, CardImageContainer } from './styles';

export interface ProjectCardProps {
  title: string;
  facts: {
    id: number;
    text: string;
  }[];
  footerTitle: string;
  footerSubTitle: string;
  image: IImage;
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
    <CardContainer data-testid="project-card">
      <CardImageContainer>
        <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
      </CardImageContainer>
      <Box padding="6">
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
    </CardContainer>
  );
};
