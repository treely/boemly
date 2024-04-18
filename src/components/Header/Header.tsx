import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

export interface HeaderProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ left, center, right }: HeaderProps) => (
  <Flex
    mx={['6', null, null, '8']}
    height="100%"
    flexDir="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Flex width={['76%', null, null, '24%']} flexDir="row" justifyContent="flex-start">
      {left}
    </Flex>

    <Flex display={['none', null, null, 'unset']} width="50%" flexDir="row" justifyContent="center">
      {center}
    </Flex>

    <Flex width="24%" flexDir="row" justifyContent="flex-end">
      {right}
    </Flex>
  </Flex>
);
