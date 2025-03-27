import React from 'react';
import { Accordion, Box, Heading } from '@chakra-ui/react';
import { RichText } from '../RichText';

export interface BoemlyAccordionProps {
  variant?: 'white' | 'black';
  rows: {
    id: number;
    key: string;
    value: string;
  }[];
  defaultIndex: number[];
}

export const BoemlyAccordion: React.FC<BoemlyAccordionProps> = ({
  variant = 'black',
  rows,
  defaultIndex,
}: BoemlyAccordionProps) => {
  const textColor = variant === 'black' ? 'gray.500' : 'white';
  const initialExpandedValues = defaultIndex.map((index) => rows[index].id.toString());

  return (
    <Accordion.Root defaultValue={initialExpandedValues} collapsible>
      {rows.map(({ id, key, value }) => (
        <Accordion.Item key={id} value={id.toString()}>
          <Accordion.ItemTrigger>
            <Box flex="1" textAlign="left">
              <Heading as="h6" size="sm" color={variant} mr="8">
                {key}
              </Heading>
            </Box>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <RichText
                headingProps={{ color: textColor }}
                textProps={{ color: textColor }}
                listProps={{ textColor: textColor }}
                content={value}
              />
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
