import React from 'react';
import { Meta } from '@storybook/react';

import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '../..';
import { COLOR_SCHEMES } from '../../constants/docs';

export default {
  title: 'Tokens/Colors',
} as Meta;

interface ColorRowProps {
  colorToken: string;
}

const ColorRow: React.FC<ColorRowProps> = ({ colorToken }: ColorRowProps) => {
  const [color] = useToken('colors', [colorToken]);

  return (
    <Tr>
      <Td>
        <Text size="mdMonoNormal">{colorToken}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal">{color}</Text>
      </Td>
      <Td>
        <Box bg={colorToken} width="sm" height="8" />
      </Td>
    </Tr>
  );
};

const colorWeights = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

export const Colors = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Token</Th>
        <Th>Value</Th>
        <Th>Example</Th>
      </Tr>
    </Thead>
    <Tbody>
      <ColorRow colorToken="transparent" />
      <ColorRow colorToken="black" />
      <ColorRow colorToken="white" />
      {COLOR_SCHEMES.map((color) =>
        colorWeights.map((weight) => <ColorRow colorToken={`${color}.${weight}`} />)
      )}
    </Tbody>
  </Table>
);
