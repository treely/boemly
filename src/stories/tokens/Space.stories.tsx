import React from 'react';
import { Meta } from '@storybook/react';

import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '../..';
import { SPACE } from '../../constants/customizations';

export default {
  title: 'Tokens/Space',
} as Meta;

interface SpaceRowProps {
  space: string;
}

const SpaceRow = ({ space }: SpaceRowProps) => {
  const [spaceValue] = useToken('space', [space]);

  return (
    <Tr>
      <Td>
        <Text size="mdMonoNormal">{space}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal">{spaceValue}</Text>
      </Td>
      <Td>
        <Box bg="primary.500" width={space} height="8" />
      </Td>
    </Tr>
  );
};

export const Space = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Token</Th>
        <Th>Value</Th>
        <Th>Example</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Object.keys(SPACE).map((space) => (
        <SpaceRow key={space} space={space} />
      ))}
    </Tbody>
  </Table>
);
