import styled from 'styled-components';

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    0deg,
    var(--chakra-colors-blackAlpha-500),
    var(--chakra-colors-blackAlpha-500)
  );
`;
