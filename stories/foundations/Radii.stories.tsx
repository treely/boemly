import React from 'react';
import { Meta } from '@storybook/react';

import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '@chakra-ui/react';

export default {
  title: 'Foundations/Radii',
} as Meta;

interface RadiiRowProps {
  radius: string;
}

const RadiiRow = ({ radius }: RadiiRowProps) => {
  const [radiiValue] = useToken('radii', [radius]);

  return (
    <Tr>
      <Td>
        <Text size="mdMonoNormal">{radius}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal">{radiiValue}</Text>
      </Td>
      <Td>
        <Box bg="primary.500" width="sm" height="4rem" borderRadius={radius} />
      </Td>
    </Tr>
  );
};

const radiis = ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];

export const Radii = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Token</Th>
        <Th>Value</Th>
        <Th>Example</Th>
      </Tr>
    </Thead>
    <Tbody>
      {radiis.map((radii) => (
        <RadiiRow radius={radii} />
      ))}
    </Tbody>
  </Table>
);
