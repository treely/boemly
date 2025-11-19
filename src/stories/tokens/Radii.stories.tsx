import React from 'react';
import { Meta } from '@storybook/react-webpack5';

import { Table, Text, Box, useToken } from '../..';
import { RADII } from '../../constants/customizations';

export default {
  title: 'Tokens/Radii',
} as Meta;

interface RadiiRowProps {
  radius: string;
}

const RadiiRow = ({ radius }: RadiiRowProps) => {
  const [radiiValue] = useToken('radii', [radius]);

  return (
    <Table.Row>
      <Table.Cell>
        <Text size="mdMonoNormal">{radius}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal">{radiiValue}</Text>
      </Table.Cell>
      <Table.Cell>
        <Box bg="primary.500" width="sm" height="16" borderRadius={radius} />
      </Table.Cell>
    </Table.Row>
  );
};

export const Radii = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Token</Table.ColumnHeader>
        <Table.ColumnHeader>Value</Table.ColumnHeader>
        <Table.ColumnHeader>Example</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.keys(RADII).map((radii) => (
        <RadiiRow key={radii} radius={radii} />
      ))}
    </Table.Body>
  </Table.Root>
);
