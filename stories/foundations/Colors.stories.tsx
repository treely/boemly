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
      <ColorRow colorToken="transparent" />
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
        <ColorRow colorToken={`orange.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`yellow.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`green.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`teal.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`blue.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`cyan.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`purple.${weight}`} />
      ))}
      {colorWeights.map((weight) => (
        <ColorRow colorToken={`pink.${weight}`} />
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
