import { css } from '@emotion/react';
import { SLOW_TRANSITION_DURATION, MEDIUM_TRANSITION_DURATION } from './animations';
import { BANNER_HEIGHT, EXTENDED_HEADER_HEIGHT, HEADER_HEIGHT } from './layout';

const GLOBAL_STYLE = css`
  :root {
    // Layout
    --header-height: ${HEADER_HEIGHT}px;
    --extended-header-height: ${EXTENDED_HEADER_HEIGHT}px;
    --banner-height: ${BANNER_HEIGHT}px;

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

export default GLOBAL_STYLE;
