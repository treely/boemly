// interface BorderRadiiCustomization {
//   none?: string;
//   sm?: string;
//   base?: string;
//   md?: string;
//   lg?: string;
//   xl?: string;
//   '2xl'?: string;
//   '3xl'?: string;
//   full?: string;
// }

interface BorderRadiiCustomization {
  none?: { value: string };
  sm?: { value: string };
  base?: { value: string };
  md?: { value: string };
  lg?: { value: string };
  xl?: { value: string };
  '2xl'?: { value: string };
  '3xl'?: { value: string };
  full?: { value: string };
}

export default BorderRadiiCustomization;
