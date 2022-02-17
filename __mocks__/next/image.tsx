import React from 'react';

interface ImageMockProps {
  alt: string;
  src: string;
}
const ImageMock: React.FC<ImageMockProps> = ({ alt, src }: ImageMockProps) => (
  <img alt={alt} src={src} />
);

export default ImageMock;
