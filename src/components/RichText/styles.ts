import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const StyledRichText = styled(ReactMarkdown)`
  & p {
    margin-bottom: var(--chakra-space-4);
  }
  & p:last-of-type {
    margin-bottom: 0;
  }
`;

export const ImageContainer = styled.img`
  border-radius: var(--chakra-radii-xl);
`;
