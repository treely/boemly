import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

export const StyledRichText = styled(Markdown)`
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
