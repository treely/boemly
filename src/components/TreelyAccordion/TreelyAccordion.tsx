import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import { RichText } from '../RichText';

export interface TreelyAccordionProps {
  variant?: 'white' | 'black';
  rows: {
    id: number;
    key: string;
    value: string;
  }[];
  defaultIndex: number;
}

export const TreelyAccordion: React.FC<TreelyAccordionProps> = ({
  variant = 'black',
  rows,
  defaultIndex,
}: TreelyAccordionProps) => {
  const textColor = variant === 'black' ? 'gray.500' : 'white';
  return (
    <Accordion defaultIndex={[defaultIndex]} variant={variant}>
      {rows.map(({ id, key, value }) => (
        <AccordionItem key={id}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading as="h6" size="sm" color={variant} mr="8">
                {key}
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <RichText
              headingProps={{ color: textColor }}
              textProps={{ color: textColor }}
              content={value}
            />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
