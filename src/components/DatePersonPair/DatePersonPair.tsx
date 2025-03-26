import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { css } from '@emotion/react';

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
        <Box
          position="relative"
          width="7"
          height="7"
          borderRadius="lg"
          css={{
            '& span, div, img': {
              borderRadius: 'var(--boemly-radii-lg)',
            },
          }}
        >
          {person.image}
        </Box>
        <Text ml="2">{person.name}</Text>
      </>
    )}
  </Flex>
);
