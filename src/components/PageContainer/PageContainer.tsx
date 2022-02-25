import React from 'react';
import { Box } from '@chakra-ui/react';

interface PageContainerProps {
  extendableHeader: boolean;
  backgroundColor?: string;
  children: JSX.Element | JSX.Element[];
}
export const PageContainer: React.FC<PageContainerProps> = ({
  extendableHeader,
  backgroundColor,
  children,
}: PageContainerProps) => (
  <Box
    marginTop={extendableHeader ? '0' : 'var(--header-height)'}
    minHeight={extendableHeader ? '100vh' : 'calc(100vh - var(--header-height))'}
    background={backgroundColor}
  >
    {children}
  </Box>
);
