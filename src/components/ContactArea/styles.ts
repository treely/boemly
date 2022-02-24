import styled from 'styled-components';
import { BREAKPOINT_LG } from '../../constants/breakpoints';

export const ContactCardContainer = styled.div`
  border: solid 1px var(--boemly-colors-gray-200);
  border-radius: var(--boemly-radii-2xl);

  padding: var(--boemly-space-6);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${BREAKPOINT_LG}) {
    flex-direction: column;
    align-items: flex-start;

    & button {
      margin-top: var(--boemly-space-6);
    }
  }
`;
