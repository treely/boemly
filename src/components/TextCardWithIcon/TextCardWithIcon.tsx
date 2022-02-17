import { Heading, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { IconContainer, InnerIconContainer, TextCardWithIconContainer } from './styles';

export interface TextCardWithIconProps {
  title: string;
  text: string;
  icon: ReactNode;

  displayAs?: 'row' | 'column';
}

export const TextCardWithIcon: React.FC<TextCardWithIconProps> = ({
  title,
  text,
  icon,
  displayAs = 'row',
}: TextCardWithIconProps) => (
  <TextCardWithIconContainer data-testid="text-card-with-icon" displayAs={displayAs}>
    <IconContainer displayAs={displayAs}>
      <InnerIconContainer displayAs={displayAs}>{icon}</InnerIconContainer>
    </IconContainer>
    <div>
      <Heading as="h6" size="xs" mb="2">
        {title}
      </Heading>
      <Text size="smRegularNormal">{text}</Text>
    </div>
  </TextCardWithIconContainer>
);
