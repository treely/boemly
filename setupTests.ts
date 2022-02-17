// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

Object.defineProperty(global.self, 'scrollTo', { value: jest.fn() });
