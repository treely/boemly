import styled from 'styled-components';
import { BREAKPOINT_MD } from '../../constants/breakpoints';

export const Wrapper = styled.div`
  max-width: var(--chakra-sizes-7xl);
  margin: 0 auto;
  padding: 0 var(--chakra-space-8);
  position: relative;

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    padding: 0 var(--chakra-space-6);
  }
`;
