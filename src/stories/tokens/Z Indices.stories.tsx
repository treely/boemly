import React from 'react';
import { Meta } from '@storybook/react-webpack5';

import { Table, Text } from '../..';
import { Z_INDICES } from '../../constants/customizations';

export default {
  title: 'Tokens/Z Indices',
} as Meta;

interface ZIndexRowProps {
  zIndex: string;
}

const ZIndexRow = ({ zIndex }: ZIndexRowProps) => {
  const zIndexValue = Z_INDICES[zIndex]?.value;

  return (
    <Table.Row>
      <Table.Cell>
        <Text size="mdMonoNormal">{zIndex}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal">{zIndexValue}</Text>
      </Table.Cell>
    </Table.Row>
  );
};

export const ZIndices = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Token</Table.ColumnHeader>
        <Table.ColumnHeader>Value</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.keys(Z_INDICES).map((zIndex) => (
        <ZIndexRow key={zIndex} zIndex={zIndex} />
      ))}
    </Table.Body>
  </Table.Root>
);
