import React from 'react';
import { Meta } from '@storybook/react';

import { Table, Text, Box } from '../..';
import { SPACE } from '../../constants/customizations';

export default {
  title: 'Tokens/Space',
} as Meta;

interface SpaceRowProps {
  space: string;
}

const SpaceRow = ({ space }: SpaceRowProps) => {
  const spaceValue = SPACE[space]?.value;

  return (
    <Table.Row>
      <Table.Cell>
        <Text size="mdMonoNormal">{space}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal">{spaceValue}</Text>
      </Table.Cell>
      <Table.Cell>
        <Box bg="primary.500" width={space} height="8" />
      </Table.Cell>
    </Table.Row>
  );
};

export const Space = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Token</Table.ColumnHeader>
        <Table.ColumnHeader>Value</Table.ColumnHeader>
        <Table.ColumnHeader>Example</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.keys(SPACE).map((space) => (
        <SpaceRow key={space} space={space} />
      ))}
    </Table.Body>
  </Table.Root>
);
