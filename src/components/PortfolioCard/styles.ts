import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: var(--boemly-radii-2xl);
  box-shadow: var(--boemly-shadows-lg);
  max-width: var(--boemly-sizes-sm);
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: var(--boemly-space-36);
  position: relative;
  border-top-left-radius: var(--boemly-radii-3xl);
  border-top-right-radius: var(--boemly-radii-3xl);

  & span,
  div {
    border-top-left-radius: var(--boemly-radii-3xl);
    border-top-right-radius: var(--boemly-radii-3xl);
  }
`;

export const CardInnerContainer = styled.div`
  padding: var(--boemly-space-8);
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardIconContainer = styled.div`
  width: var(--boemly-space-8);
  height: var(--boemly-space-8);
  border-radius: var(--boemly-radii-xl);
  border: solid 1px var(--boemly-colors-gray-200);

  display: flex;
  align-items: center;
  justify-content: center;
`;
