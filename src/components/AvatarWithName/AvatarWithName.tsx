import { Text } from '@chakra-ui/react';
import Image from 'next/image';
import IImage from '../../models/components/IImage';
import { AvatarContainer, AvatarImageContainer } from './styles';

export interface AvatarWithNameProps {
  name: string;
  description: string;
  image: IImage;
}

export const AvatarWithName: React.FC<AvatarWithNameProps> = ({
  name,
  description,
  image,
}: AvatarWithNameProps) => (
  <AvatarContainer data-testid="avatar-with-name">
    <AvatarImageContainer>
      <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
    </AvatarImageContainer>
    <Text size="smRegularNormal">
      {name}
      <br />
      {description}
    </Text>
  </AvatarContainer>
);
