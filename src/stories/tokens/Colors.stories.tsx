import React from 'react';
import { Meta } from '@storybook/react-webpack5';
import { Box, Table, Text, useToken } from '../..';

import { COLOR_PALETTES } from '../../constants/colorPalettes';

export default {
  title: 'Tokens/Colors',
} as Meta;

interface ColorRowProps {
  colorToken: string;
}

const ColorRow: React.FC<ColorRowProps> = ({ colorToken }: ColorRowProps) => {
  const [color] = useToken('colors', [colorToken]);

  return (
    <Table.Row>
      <Table.Cell>
        <Text size="mdMonoNormal">{colorToken}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal">{color}</Text>
      </Table.Cell>
      <Table.Cell>
        <Box bg={colorToken} width="sm" height="8" />
      </Table.Cell>
    </Table.Row>
  );
};

const colorWeights = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

export const Colors = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Token</Table.ColumnHeader>
        <Table.ColumnHeader>Value</Table.ColumnHeader>
        <Table.ColumnHeader>Example</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <ColorRow colorToken="transparent" />
      <ColorRow colorToken="black" />
      <ColorRow colorToken="white" />
      {COLOR_PALETTES.map((color) =>
        colorWeights.map((weight) => <ColorRow colorToken={`${color}.${weight}`} />)
      )}
    </Table.Body>
  </Table.Root>
);
