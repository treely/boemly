import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { Wrapper } from '../Wrapper';

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
  const Content = (
    <Flex
      mx={['6', null, null, '8']}
      height="100%"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
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
  return showWrapper ? <Wrapper data-testid="wrapper">{Content}</Wrapper> : Content;
};
