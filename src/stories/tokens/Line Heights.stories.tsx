import React from 'react';
import { Meta } from '@storybook/react';

import { Table, Text, useToken } from '../..';
import { LINE_HEIGHTS } from '../../constants/customizations';

export default {
  title: 'Tokens/Line Heights',
} as Meta;

interface LineHeightsRowProps {
  lineHeight: string;
}

const LineHeightRow = ({ lineHeight }: LineHeightsRowProps) => {
  const [lineHeightValue] = useToken('lineHeights', [lineHeight]);

  return (
    <Table.Row>
      <Table.Cell>
        <Text size="mdMonoNormal">{lineHeight}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal">{lineHeightValue}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal" lineHeight={lineHeight} backgroundColor="blackAlpha.50">
          {`Line height = ${lineHeight}`}
        </Text>
      </Table.Cell>
    </Table.Row>
  );
};

export const LineHeights = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Token</Table.ColumnHeader>
        <Table.ColumnHeader>Value</Table.ColumnHeader>
        <Table.ColumnHeader>Example</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.keys(LINE_HEIGHTS).map((lineHeights) => (
        <LineHeightRow key={lineHeights} lineHeight={lineHeights} />
      ))}
    </Table.Body>
  </Table.Root>
);
