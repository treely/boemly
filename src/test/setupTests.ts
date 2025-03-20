import '@testing-library/jest-dom';
import resizeObserverPolyfill from 'resize-observer-polyfill';

global.ResizeObserver = resizeObserverPolyfill;

global.scrollTo = jest.fn();

global.structuredClone = (obj) => {
  if (obj === undefined || obj === null) {
    return obj;
  }
  return JSON.parse(JSON.stringify(obj));
};
