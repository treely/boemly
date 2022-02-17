import styled from 'styled-components';

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: var(--chakra-space-4);

  &:first-of-type {
    margin-top: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: var(--chakra-space-6);
  min-width: var(--chakra-space-6);
  height: var(--chakra-space-6);
  background-color: var(--chakra-colors-primary-50);
  border-radius: var(--chakra-radii-lg);

  margin-right: var(--chakra-space-4);
`;
