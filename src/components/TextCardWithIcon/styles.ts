import styled from 'styled-components';

interface TextCardWithIconContainerProps {
  displayAs: 'row' | 'column';
}
export const TextCardWithIconContainer = styled.div<TextCardWithIconContainerProps>`
  box-shadow: var(--chakra-shadows-lg);
  border-radius: var(--chakra-radii-2xl);

  padding: var(--chakra-space-8) var(--chakra-space-6);

  margin-top: var(--chakra-space-4);
  &:first-of-type {
    margin-top: 0;
  }

  background-color: var(--chakra-colors-white);

  display: flex;
  flex-direction: ${({ displayAs }) => displayAs};
  align-items: ${({ displayAs }) => (displayAs === 'row' ? 'center' : 'flex-start')};
`;

interface IconContainerProps {
  displayAs: 'row' | 'column';
}
export const IconContainer = styled.div<IconContainerProps>`
  width: ${({ displayAs }) => (displayAs === 'row' ? '4.3rem' : '2rem')};
  min-width: ${({ displayAs }) => (displayAs === 'row' ? '4.3rem' : '2rem')};
  height: ${({ displayAs }) => (displayAs === 'row' ? '4.3rem' : '2rem')};

  background-color: ${({ displayAs }) =>
    displayAs === 'row' ? 'var(--chakra-colors-primary-50)' : 'transparent'};
  border-radius: ${({ displayAs }) => (displayAs === 'row' ? 'var(--chakra-radii-full)' : '0')};

  margin-right: var(--chakra-space-8);
  margin-bottom: ${({ displayAs }) => (displayAs === 'row' ? '0' : 'var(--chakra-space-6)')};

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

interface InnerIconContainerProps {
  displayAs: 'row' | 'column';
}
export const InnerIconContainer = styled.div<InnerIconContainerProps>`
  position: relative;
  width: ${({ displayAs }) => (displayAs === 'row' ? '1.75rem' : '2rem')};
  height: ${({ displayAs }) => (displayAs === 'row' ? '1.75rem' : '2rem')};
`;
