import styled from 'styled-components';
import { BREAKPOINT_MD } from '../../constants/breakpoints';

export const CardContainer = styled.div`
  position: relative;
  border-radius: var(--chakra-radii-2xl);
  box-shadow: var(--chakra-shadows-lg);
  max-width: var(--chakra-sizes-sm);
  min-width: var(--chakra-sizes-xs);

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    min-width: var(--chakra-sizes-2xs);
  }
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 10rem;
  position: relative;
  border-top-left-radius: var(--chakra-radii-3xl);
  border-top-right-radius: var(--chakra-radii-3xl);

  & span,
  div {
    border-top-left-radius: var(--chakra-radii-3xl);
    border-top-right-radius: var(--chakra-radii-3xl);
  }
`;
