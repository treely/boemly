import { FONTS } from '../../constants/customizations';
import {
  FONT_IMPORT_INTER,
  FONT_IMPORT_RALEWAY,
  FONT_IMPORT_SPACEMONO,
} from '../../constants/defaultFonts';
import getDefaultFontImports from '../getDefaultFontImports';

describe('The getDefaultFontImports function', () => {
  it('returns an array of all three defaults when its argument is empty.', () => {
    const fonts = getDefaultFontImports({});
    expect(fonts.length).toBe(3);
    expect(fonts).toContain(FONT_IMPORT_RALEWAY);
    expect(fonts).toContain(FONT_IMPORT_INTER);
    expect(fonts).toContain(FONT_IMPORT_SPACEMONO);
  });
  it('returns an array of all the uncustomized fonts.', () => {
    const fonts = getDefaultFontImports({ body: 'Arial', heading: 'Arial' });
    expect(fonts.length).toBe(2);
    expect(fonts).toContain(FONT_IMPORT_RALEWAY);
    expect(fonts).toContain(FONT_IMPORT_SPACEMONO);
  });
  it('returns empty array when all customized fonts match the default fonts.', () => {
    const fonts = getDefaultFontImports(FONTS);
    expect(fonts.length).toBe(0);
  });
});
