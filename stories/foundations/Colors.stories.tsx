import React from 'react';
import { Meta } from '@storybook/react';

import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '@chakra-ui/react';

export default {
  title: 'Foundations',
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
        <Box bg={colorToken} width="sm" height="6" />
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
      <ColorRow colorToken="black" />
      <ColorRow colorToken="white" />
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`primary.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`gray.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`red.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`blue.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`blackAlpha.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`whiteAlpha.${weight}`} />
      ))}
    </Tbody>
  </Table>
);
