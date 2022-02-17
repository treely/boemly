import * as React from "react";

interface ImageMockProps {
  alt: string;
  src: string;
}
const ImageMock: React.FC<ImageMockProps> = ({ alt, src }: ImageMockProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img alt={alt} src={src} />
);

export default ImageMock;
