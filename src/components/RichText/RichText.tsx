import React from 'react';
import { HeadingProps, TextProps } from '@chakra-ui/react';
import { StyledRichText } from './styles';

export interface RichTextProps {
  content: string;
  headingProps?: HeadingProps;
  textProps?: TextProps;
}

// interface ComponentProps {
//   children: ReactNode;
// }

// interface ListComponentProps extends ComponentProps {
//   ordered: boolean;
//   index: number;
// }

// interface LinkComponentProps extends ComponentProps {
//   href?: string;
// }

// interface ImageComponentProps {
//   alt?: string;
//   src?: string;
// }

export const RichText: React.FC<RichTextProps> = ({
  content,
}: // headingProps = {},
// textProps = {},
RichTextProps) => <StyledRichText>{content}</StyledRichText>;
