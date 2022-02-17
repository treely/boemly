import styled from 'styled-components';

export const HeroCardContainer = styled.div`
  position: relative;
  height: var(--chakra-sizes-lg);

  text-align: center;

  border-radius: var(--chakra-radii-2xl);

  & span,
  div {
    border-radius: var(--chakra-radii-2xl);
  }
`;

export const HeroInnerContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);

  padding: 0 var(--chakra-space-4);
`;
