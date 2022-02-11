import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ImageContainer } from './styles';

export interface DatePersonPairProps {
  date: string;
  person?: {
    name: string;
    imageUrl: string;
    imageAlt: string;
  };
}

export const DatePersonPair: React.FC<DatePersonPairProps> = ({
  date,
  person,
}: DatePersonPairProps) => (
  <Flex flexDir="row" alignItems="center">
    <Text size="smLowNormal" color="gray.500">
      {date}
    </Text>
    {person && (
      <>
        <Text size="smLowNormal" color="gray.500" mx="2">
          |
        </Text>
        <ImageContainer>
          <Image src={person.imageUrl} alt={person.imageAlt} layout="fill" objectFit="cover" />
        </ImageContainer>
        <Text ml="2">{person.name}</Text>
      </>
    )}
  </Flex>
);
