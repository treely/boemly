import styled from 'styled-components';
import { BREAKPOINT_MD } from '../../constants/breakpoints';

interface DefaultSectionContainerProps {
  backgroundColor?: string;
}

export const DefaultSectionContainer = styled.div<DefaultSectionContainerProps>`
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor || 'unset'};
  padding: ${({ backgroundColor }) => (backgroundColor ? 'var(--boemly-space-28) 0' : 'unset')};
  margin: ${({ backgroundColor }) => (!backgroundColor ? 'var(--boemly-space-28) 0' : 'unset')};
  overflow: ${({ backgroundColor }) => (backgroundColor ? 'hidden' : 'unset')};

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    padding: ${({ backgroundColor }) => (backgroundColor ? 'var(--boemly-space-12) 0' : 'unset')};
    margin: ${({ backgroundColor }) => (!backgroundColor ? 'var(--boemly-space-8) 0' : 'unset')};
  }
`;
