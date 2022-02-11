import styled from 'styled-components';

interface PageContainerProps {
  extendableHeader: boolean;
  backgroundColor?: string;
}
export const PageContainer = styled.div<PageContainerProps>`
  margin-top: ${({ extendableHeader }) => (extendableHeader ? '0' : 'var(--header-height)')};
  min-height: ${({ extendableHeader }) =>
    extendableHeader ? '100vh' : 'calc(100vh - var(--header-height))'};

  background: ${({ backgroundColor }) => backgroundColor};
`;
