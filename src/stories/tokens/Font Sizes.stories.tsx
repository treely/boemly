import React from 'react';
import { Meta } from '@storybook/react';

import { Table, Text, useToken } from '../..';
import { FONT_SIZES } from '../../constants/customizations';

export default {
  title: 'Tokens/Font Sizes',
} as Meta;

interface FontSizesRowProps {
  fontSize: string;
}

const FontSizeRow = ({ fontSize }: FontSizesRowProps) => {
  const [fontSizeValue] = useToken('fontSizes', [fontSize]);

  return (
    <Table.Row>
      <Table.Cell>
        <Text size="mdMonoNormal">{fontSize}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal">{fontSizeValue}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal" fontSize={fontSize} lineHeight="100%">
          {`Font Size = ${fontSize}`}
        </Text>
      </Table.Cell>
    </Table.Row>
  );
};

export const FontSizes = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Token</Table.ColumnHeader>
        <Table.ColumnHeader>Value</Table.ColumnHeader>
        <Table.ColumnHeader>Example</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.keys(FONT_SIZES).map((fontSizes) => (
        <FontSizeRow key={fontSizes} fontSize={fontSizes} />
      ))}
    </Table.Body>
  </Table.Root>
);
