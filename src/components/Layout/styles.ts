import styled from 'styled-components';
import { BREAKPOINT_MD } from '../../constants/breakpoints';

interface HeaderProps {
  extended: boolean;
  theme: 'light' | 'dark';
}
export const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${({ extended }) =>
    extended ? 'var(--extended-header-height)' : 'var(--header-height)'};
  background-color: ${({ extended }) => (extended ? 'transparent' : 'var(--chakra-colors-white)')};
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--chakra-colors-white)' : 'var(--chakra-colors-black)'};
  z-index: var(--chakra-zIndices-docked);
  box-shadow: ${({ extended }) => (extended ? 'unset' : 'var(--chakra-shadows-lg)')};

  transition: var(--default-ease) var(--medium-transition-duration) height,
    var(--default-ease) var(--medium-transition-duration) background-color,
    var(--default-ease) var(--medium-transition-duration) color;

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    height: var(--header-height);
  }
`;

export const Main = styled.main`
  position: relative;
`;
