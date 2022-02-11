import Image from 'next/image';
import { useToken } from '@chakra-ui/react';
import { ShapeContainer } from './styles';
import IImage from '../../models/components/IImage';

export interface ShapeProps {
  shape: IImage;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size?:
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '90rem';
  radius?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  zIndex?: string;
}

export const Shape: React.FC<ShapeProps> = ({
  shape,
  top = '',
  right = '',
  bottom = '',
  left = '',
  size = '2xs',
  radius = 'top-left',
  zIndex,
}: ShapeProps) => {
  const [zIndexHide] = useToken('zIndices', ['hide']);

  const containerZIndex = zIndex !== undefined ? zIndex : zIndexHide;
  return (
    <ShapeContainer
      data-testid="shape"
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      size={size}
      radius={radius}
      zIndex={containerZIndex}
    >
      <Image src={shape.src} alt={shape.alt} layout="fill" objectFit="cover" />
    </ShapeContainer>
  );
};
