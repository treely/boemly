import styled from '@emotion/styled';

interface TextCardWithIconContainerProps {
  displayAs: 'row' | 'column';
}
export const TextCardWithIconContainer = styled.div<TextCardWithIconContainerProps>`
  border: 1.5px solid var(--boemly-colors-gray-200);
  border-radius: var(--boemly-radii-2xl);

  height: var(--boemly-sizes-full);

  padding: var(--boemly-space-8) var(--boemly-space-6);

  margin-top: var(--boemly-space-4);
  &:first-of-type {
    margin-top: 0;
  }

  background-color: var(--boemly-colors-white);

  display: flex;
  flex-direction: ${({ displayAs }) => displayAs};
  align-items: ${({ displayAs }) => (displayAs === 'row' ? 'center' : 'flex-start')};
`;

interface IconContainerProps {
  displayAs: 'row' | 'column';
}
export const IconContainer = styled.div<IconContainerProps>`
  width: ${({ displayAs }) =>
    displayAs === 'row' ? 'var(--boemly-space-16)' : 'var(--boemly-space-8)'};
  min-width: ${({ displayAs }) =>
    displayAs === 'row' ? 'var(--boemly-space-16)' : 'var(--boemly-space-8)'};
  height: ${({ displayAs }) =>
    displayAs === 'row' ? 'var(--boemly-space-16)' : 'var(--boemly-space-8)'};

  background-color: ${({ displayAs }) =>
    displayAs === 'row' ? 'var(--boemly-colors-primary-50)' : 'transparent'};
  border-radius: ${({ displayAs }) => (displayAs === 'row' ? 'var(--boemly-radii-full)' : '0')};

  margin-right: var(--boemly-space-8);
  margin-bottom: ${({ displayAs }) => (displayAs === 'row' ? '0' : 'var(--boemly-space-6)')};

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

interface InnerIconContainerProps {
  displayAs: 'row' | 'column';
}
export const InnerIconContainer = styled.div<InnerIconContainerProps>`
  position: relative;
  width: ${({ displayAs }) =>
    displayAs === 'row' ? 'var(--boemly-space-7)' : 'var(--boemly-space-8)'};
  height: ${({ displayAs }) =>
    displayAs === 'row' ? 'var(--boemly-space-7)' : 'var(--boemly-space-8)'};
`;
