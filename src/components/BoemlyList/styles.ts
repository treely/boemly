import styled from 'styled-components';

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: var(--boemly-space-4);

  &:first-of-type {
    margin-top: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: var(--boemly-space-6);
  min-width: var(--boemly-space-6);
  height: var(--boemly-space-6);
  background-color: var(--boemly-colors-primary-50);
  border-radius: var(--boemly-radii-lg);

  margin-right: var(--boemly-space-4);
`;
