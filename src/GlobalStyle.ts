import { createGlobalStyle } from 'styled-components';
import { SLOW_TRANSITION_DURATION, MEDIUM_TRANSITION_DURATION } from './constants/animations';
import { TREELY_CDN_URI } from './constants/cdn';
import { EXTENDED_HEADER_HEIGHT, HEADER_HEIGHT } from './constants/layout';

const GlobalStyle = createGlobalStyle`
//
// Fonts
//

// GintoNord
@font-face {
  font-family: "GintoNord";
  src: url("${TREELY_CDN_URI}/assets/v3/fonts/ABCGintoNord-Bold.woff2") format('woff2');
  font-style: normal;
  font-weight: 700;
  font-display: block;
}

// Inter
@font-face {
  font-family: "Inter";
  src: url("${TREELY_CDN_URI}/assets/v3/fonts/Inter-Regular.woff2") format('woff2');
  font-style: normal;
  font-weight: 400;
  font-display: block;
}
@font-face {
  font-family: "Inter";
  src: url("${TREELY_CDN_URI}/assets/v3/fonts/Inter-Medium.woff2") format('woff2');
  font-style: normal;
  font-weight: 500;
  font-display: block;
}
@font-face {
  font-family: "Inter";
  src: url("${TREELY_CDN_URI}/assets/v3/fonts/Inter-SemiBold.woff2") format('woff2');
  font-style: normal;
  font-weight: 600;
  font-display: block;
}
@font-face {
  font-family: "Inter";
  src: url("${TREELY_CDN_URI}/assets/v3/fonts/Inter-Bold.woff2") format('woff2');
  font-style: normal;
  font-weight: 700;
  font-display: block;
}

// SpaceMono
@font-face {
  font-family: "SpaceMono";
  src: url("${TREELY_CDN_URI}/assets/v3/fonts/SpaceMono-Bold.woff2") format('woff2');
  font-style: normal;
  font-weight: 700;
  font-display: block;
}

:root {
  // Layout
  --header-height: ${HEADER_HEIGHT}px;
  --extended-header-height: ${EXTENDED_HEADER_HEIGHT}px;

  --default-hero-height: calc(100vh - var(--chakra-space-24));
  --small-hero-height: var(--chakra-sizes-lg);

  // Transitions
  --medium-transition-duration: ${MEDIUM_TRANSITION_DURATION}s;
  --long-transition-duration: ${SLOW_TRANSITION_DURATION}s;

  --default-ease: ease;
}

html {
  position: relative;
  height: 100%;
  width: 100%;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  min-height: auto !important;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
  box-shadow: none;
}
`;

export default GlobalStyle;
