import { Box, Divider, Spacer } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { DefaultSectionContainer } from '../DefaultSectionContainer';
import { Wrapper } from '../Wrapper';

export interface FooterProps {
  left: ReactNode;
  right: ReactNode;
  bottomLeft: ReactNode;
  bottomRight: ReactNode;
}

export const Footer: React.FC<FooterProps> = ({
  left,
  right,
  bottomLeft,
  bottomRight,
}: FooterProps) => (
  <DefaultSectionContainer>
    <Wrapper>
      <Box
        display="flex"
        flexDir={['column', null, null, 'row']}
        justifyContent="space-between"
        mb="8"
      >
        <Box mb={['10', null, null, '0']}>{left}</Box>
        <Box>{right}</Box>
      </Box>
      <Divider color="gray.200" />
      <Box display="flex" flexDir="row" justifyContent="space-between" mt="8">
        <Box>{bottomLeft}</Box>
        <Box>{bottomRight}</Box>
      </Box>
      <Spacer height={['8', null, null, '0']} />
    </Wrapper>
  </DefaultSectionContainer>
);
