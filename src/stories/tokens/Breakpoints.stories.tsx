import React from 'react';
import { Meta } from '@storybook/react';

import { Table, Tbody, Td, Text, Th, Thead, Tr, useToken } from '../..';
import { BREAKPOINTS } from '../../constants/customizations';

export default {
  title: 'Tokens/Breakpoints',
} as Meta;

interface BreakpointRowProps {
  breakpoint: string;
}

const BreakpointRow = ({ breakpoint }: BreakpointRowProps) => {
  const [breakpointValue] = useToken('breakpoints', [breakpoint]);

  return (
    <Tr>
      <Td>
        <Text size="mdMonoNormal">{breakpoint}</Text>
      </Td>
      <Td>
        <Text size="mdMonoNormal">{breakpointValue}</Text>
      </Td>
    </Tr>
  );
};

export const Breakpoints = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Token</Th>
        <Th>Value</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Object.keys(BREAKPOINTS).map((breakpoint) => (
        <BreakpointRow key={breakpoint} breakpoint={breakpoint} />
      ))}
    </Tbody>
  </Table>
);
