import React from 'react';
import { Meta } from '@storybook/react';

import { Box, Heading, Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '@chakra-ui/react';
import { SIZES_ONLY } from '../../src/constants/customizations';
import { RichText } from '../..'

export default {
  title: 'Tokens/Sizes',
} as Meta;

interface SizesRowProps {
  size: string;
}

const SizeRow = ({ size }: SizesRowProps) => {
  const [sizeValue] = useToken('sizes', [size]);

  return (
    <Tr>
      <Td>
        <Text size="mdMonoNormal">{size}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal">{sizeValue}</Text>
      </Td>
      <Td>
        <Box bg="primary.500" width={size} height="8"  />
      </Td>
    </Tr>
  );
};

export const Sizes = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Token</Th>
        <Th>Value</Th>
        <Th>Example</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Object.keys(SIZES_ONLY).map((size) => (
        <SizeRow key={size} size={size} />
      ))}
    </Tbody>
  </Table>
);
