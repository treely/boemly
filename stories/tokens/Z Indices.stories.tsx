import React from 'react';
import { Meta } from '@storybook/react';

import { Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '@chakra-ui/react';
import { Z_INDICES } from '../../src/constants/customizations';

export default {
  title: 'Tokens/Z Indices',
} as Meta;

interface ZIndexRowProps {
  zIndex: string;
}

const ZIndexRow = ({ zIndex }: ZIndexRowProps) => {
  const [zIndexValue] = useToken('zIndices', [zIndex]);

  return (
    <Tr>
      <Td>
        <Text size="mdMonoNormal">{zIndex}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal">{zIndexValue}</Text>
      </Td>
    </Tr>
  );
};

export const ZIndices = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Token</Th>
        <Th>Value</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Object.keys(Z_INDICES).map((zIndex) => (
        <ZIndexRow key={zIndex} zIndex={zIndex} />
      ))}
    </Tbody>
  </Table>
);
