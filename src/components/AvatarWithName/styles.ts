import styled from 'styled-components';
import { BREAKPOINT_MD } from '../../constants/breakpoints';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AvatarImageContainer = styled.div`
  position: relative;

  width: 3.5rem;
  min-width: 3.5rem;
  height: 3.5rem;

  margin-right: var(--boemly-space-6);

  border-radius: var(--boemly-radii-xl);

  & span,
  div,
  img {
    border-radius: var(--boemly-radii-xl);
  }

  @media screen and (min-width: ${BREAKPOINT_MD}) {
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
  }
`;
