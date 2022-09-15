import resizeObserverPolyfill from 'resize-observer-polyfill';

global.ResizeObserver = resizeObserverPolyfill;

global.scrollTo = jest.fn();
