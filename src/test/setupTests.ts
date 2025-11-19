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

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});
