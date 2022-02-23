import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import { ReactNode } from 'react';
import { ImageContainer } from './styles';

export interface DatePersonPairProps {
  date: string;
  person?: {
    name: string;
    image: ReactNode;
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
        <ImageContainer>{person.image}</ImageContainer>
        <Text ml="2">{person.name}</Text>
      </>
    )}
  </Flex>
);
