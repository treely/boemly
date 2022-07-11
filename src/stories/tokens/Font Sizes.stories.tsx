import React from 'react';
import { Meta } from '@storybook/react';

import { Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '../..';
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
    <Tr>
      <Td>
        <Text size="mdMonoNormal">{fontSize}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal">{fontSizeValue}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal" fontSize={fontSize}>
          {`Font Size = ${fontSize}`}
        </Text>
      </Td>
    </Tr>
  );
};

export const FontSizes = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Token</Th>
        <Th>Value</Th>
        <Th>Example</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Object.keys(FONT_SIZES).map((fontSizes) => (
        <FontSizeRow key={fontSizes} fontSize={fontSizes} />
      ))}
    </Tbody>
  </Table>
);
