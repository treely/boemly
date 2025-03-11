// interface FontsCustomization {
//   body?: string;
//   display?: string;
//   heading?: string;
//   mono?: string;
// }

interface FontsCustomization {
  body?: { value: string };
  display?: { value: string };
  heading?: { value: string };
  mono?: { value: string };
}

export default FontsCustomization;
