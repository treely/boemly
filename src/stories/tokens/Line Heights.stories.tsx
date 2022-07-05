import React from 'react';
import { Meta } from '@storybook/react';

import { Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '../..';
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
    <Tr>
      <Td>
        <Text size="mdMonoNormal">{lineHeight}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal">{lineHeightValue}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal" lineHeight={lineHeight} backgroundColor="blackAlpha.50">
          {`Line height = ${lineHeight}`}
        </Text>
      </Td>
    </Tr>
  );
};

export const LineHeights = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Token</Th>
        <Th>Value</Th>
        <Th>Example</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Object.keys(LINE_HEIGHTS).map((lineHeights) => (
        <LineHeightRow key={lineHeights} lineHeight={lineHeights} />
      ))}
    </Tbody>
  </Table>
);
