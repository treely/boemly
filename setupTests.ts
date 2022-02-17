import '@testing-library/jest-dom';

Object.defineProperty(global.self, 'scrollTo', { value: jest.fn() });
