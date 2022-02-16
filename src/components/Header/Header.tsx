import { Flex } from '@chakra-ui/react';

interface HeaderProps {
  left: JSX.Element;
  center: JSX.Element;
  right: JSX.Element;
}

export const Header: React.FC<HeaderProps> = ({ left, center, right }: HeaderProps) => (
  <Flex
    mx={['6', null, null, '8']}
    height="100%"
    flexDir="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Flex width="24%" flexDir="row" justifyContent="flex-start">
      {left}
    </Flex>
    <Flex width="50%" flexDir="row" justifyContent="center">
      {center}
    </Flex>
    <Flex width="24%" flexDir="row" justifyContent="flex-end">
      {right}
    </Flex>
  </Flex>
);
