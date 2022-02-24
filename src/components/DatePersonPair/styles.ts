import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: var(--boemly-sizes-7);
  height: var(--boemly-sizes-7);
  border-radius: var(--boemly-radii-lg);

  & span,
  div,
  img {
    border-radius: var(--boemly-radii-lg);
  }
`;
