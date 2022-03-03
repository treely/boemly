import { SerializedStyles } from '@emotion/react';
import {
  FONT_IMPORT_INTER,
  FONT_IMPORT_RALEWAY,
  FONT_IMPORT_SPACEMONO,
} from '../constants/defaultFonts';
import FontsCustomization from '../types/FontsCustomization';

const getDefaultFontImports = (fontsCustomization: FontsCustomization) => {
  let fontImports: SerializedStyles[] = [];

  if (!fontsCustomization.display) fontImports.push(FONT_IMPORT_RALEWAY);
  if (!fontsCustomization.mono) fontImports.push(FONT_IMPORT_SPACEMONO);
  if (!fontsCustomization.body) {
    fontImports.push(FONT_IMPORT_INTER);
    return fontImports; // So that Inter won't get imported twice
  }

  if (!fontsCustomization.heading) fontImports.push(FONT_IMPORT_INTER);
  return fontImports;
};

export default getDefaultFontImports;
