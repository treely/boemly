import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: var(--chakra-radii-2xl);
  box-shadow: var(--chakra-shadows-lg);
  max-width: var(--chakra-sizes-sm);
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: var(--chakra-space-36);
  position: relative;
  border-top-left-radius: var(--chakra-radii-3xl);
  border-top-right-radius: var(--chakra-radii-3xl);

  & span,
  div {
    border-top-left-radius: var(--chakra-radii-3xl);
    border-top-right-radius: var(--chakra-radii-3xl);
  }
`;

export const CardInnerContainer = styled.div`
  padding: var(--chakra-space-8);
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardIconContainer = styled.div`
  width: var(--chakra-space-8);
  height: var(--chakra-space-8);
  border-radius: var(--chakra-radii-xl);
  border: solid 1px var(--chakra-colors-gray-200);

  display: flex;
  align-items: center;
  justify-content: center;
`;
