import convertToKebabCase from '../convertToKebabCase';

describe('The convertToKebabCase function', () => {
  it('returns a kebab-case string.', () => {
    const title = 'My Title';

    expect(convertToKebabCase(title)).toBe('my-title');
  });
});
