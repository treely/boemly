import React from 'react';
import { Meta } from '@storybook/react';

import { Table, Text, Box, useToken } from '../..';
import { SIZES_ONLY } from '../../constants/customizations';

export default {
  title: 'Tokens/Sizes',
} as Meta;

interface SizesRowProps {
  size: string;
}

const SizeRow = ({ size }: SizesRowProps) => {
  const [sizeValue] = useToken('sizes', [size]);

  return (
    <Table.Row>
      <Table.Cell>
        <Text size="mdMonoNormal">{size}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal">{sizeValue}</Text>
      </Table.Cell>
      <Table.Cell>
        <Box bg="primary.500" width={size} height="8" />
      </Table.Cell>
    </Table.Row>
  );
};

export const Sizes = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Token</Table.ColumnHeader>
        <Table.ColumnHeader>Value</Table.ColumnHeader>
        <Table.ColumnHeader>Example</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.keys(SIZES_ONLY).map((size) => (
        <SizeRow key={size} size={size} />
      ))}
    </Table.Body>
  </Table.Root>
);
