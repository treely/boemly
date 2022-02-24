import React from 'react';
import { Meta } from '@storybook/react';

import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '@chakra-ui/react';
import { RADII } from '../../src/constants/customizations';

export default {
  title: 'Tokens/Radii',
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
        <Box bg="primary.500" width="sm" height="16" borderRadius={radius} />
      </Td>
    </Tr>
  );
};

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
      {Object.keys(RADII).map((radii) => (
        <RadiiRow key={radii} radius={radii} />
      ))}
    </Tbody>
  </Table>
);
