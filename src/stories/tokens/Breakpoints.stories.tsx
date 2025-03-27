import React from 'react';
import { Meta } from '@storybook/react';

import { Table, Text, useToken } from '../..';
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
    <Table.Row>
      <Table.Cell>
        <Text size="mdMonoNormal">{breakpoint}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text size="mdMonoNormal">{breakpointValue}</Text>
      </Table.Cell>
    </Table.Row>
  );
};

export const Breakpoints = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Token</Table.ColumnHeader>
        <Table.ColumnHeader>Value</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.keys(BREAKPOINTS).map((breakpoint) => (
        <BreakpointRow key={breakpoint} breakpoint={breakpoint} />
      ))}
    </Table.Body>
  </Table.Root>
);
