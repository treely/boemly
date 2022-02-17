import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: var(--chakra-sizes-7);
  height: var(--chakra-sizes-7);
  border-radius: var(--chakra-radii-lg);

  & span,
  div,
  img {
    border-radius: var(--chakra-radii-lg);
  }
`;
