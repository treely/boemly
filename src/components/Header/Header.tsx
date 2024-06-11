import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

export interface HeaderProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
  hideCenter?: boolean;
  showWrapper?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  left,
  center,
  right,
  hideCenter = false,
  showWrapper = false,
}) => {
  return (
    <Flex
      height="full"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      maxWidth={showWrapper ? '7xl' : 'full'}
      marginX={showWrapper ? 'auto' : ['6', null, null, '8']}
      paddingX={showWrapper ? ['6', null, '8'] : undefined}
    >
      <Flex
        width={hideCenter ? '50%' : ['76%', null, null, '24%']}
        flexDir="row"
        justifyContent="flex-start"
      >
        {left}
      </Flex>
      {!hideCenter && (
        <Flex
          display={['none', null, null, 'flex']}
          width="50%"
          flexDir="row"
          justifyContent="center"
        >
          {center}
        </Flex>
      )}

      <Flex width={hideCenter ? '50%' : '24%'} flexDir="row" justifyContent="flex-end">
        {right}
      </Flex>
    </Flex>
  );
};
