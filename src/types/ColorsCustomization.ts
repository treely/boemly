interface ColorToken {
  value: string;
}

interface ColorScale {
  [key: string]: ColorToken | undefined;
  50?: ColorToken;
  100?: ColorToken;
  200?: ColorToken;
  300?: ColorToken;
  400?: ColorToken;
  500?: ColorToken;
  600?: ColorToken;
  700?: ColorToken;
  800?: ColorToken;
  900?: ColorToken;
}

interface ColorsCustomization {
  black?: ColorToken;
  primary?: ColorScale;
  gray?: ColorScale;
  red?: ColorScale;
  blue?: ColorScale;
  [key: string]: ColorToken | ColorScale | undefined;
}

export default ColorsCustomization;
