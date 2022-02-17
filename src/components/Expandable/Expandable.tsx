import { Box, Heading, IconButton, Flex, Text, Spinner } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { CaretDown, CaretUp } from 'phosphor-react';
import React, { useEffect } from 'react';

export interface ExpandableProps {
  icon: JSX.Element;
  tagline: string | JSX.Element;
  title: string | JSX.Element;
  tag?: string | JSX.Element;
  children: JSX.Element | JSX.Element[];
  isActive?: boolean;
  isOpen: boolean;
  interactive?: boolean;
  onToggle: () => void;
  loading?: boolean;
}

export const Expandable: React.FC<ExpandableProps> = ({
  icon,
  tagline,
  title,
  tag,
  isActive = false,
  isOpen,
  interactive = true,
  onToggle,
  children,
  loading = false,
}: ExpandableProps) => {
  const controls = useAnimation();

  const variants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        opacity: { delay: 0.2, duration: 0.1 },
        height: { duration: 0.3 },
      },
    },
    close: {
      height: 0,
      opacity: 0,
      transition: {
        opacity: { duration: 0.1 },
        height: { duration: 0.3 },
      },
    },
  };

  useEffect(() => {
    controls.start(isOpen ? 'open' : 'close');
  }, [isOpen]);

  return (
    <Box
      borderRadius="xl"
      borderColor={isActive ? 'black' : 'gray.200'}
      borderWidth={isActive ? '2px' : '1px'}
      boxShadow={isActive ? 'lg' : 'unset'}
      padding="6"
      backgroundColor="white"
      overflow="hidden"
    >
      <Flex flexDir="row" justifyContent="space-between" alignItems="center">
        <Flex flexDir="row" alignItems="center">
          <Box width="20" height="20" display={['none', null, null, 'unset']}>
            {icon}
          </Box>
          <Box ml={['0', null, null, '8']}>
            <Flex flexDir="row" alignItems="center">
              <Text size="xsLowBold" color="gray.500" mr="2">
                {tagline}
              </Text>
              {tag && tag}
            </Flex>
            <Heading size="xl" mt="2">
              {title}
            </Heading>
          </Box>
        </Flex>
        <IconButton
          aria-label="Open/Close"
          variant="outline"
          icon={isOpen ? <CaretUp /> : <CaretDown />}
          isDisabled={!interactive}
          onClick={onToggle}
        />
      </Flex>
      <motion.div variants={variants} animate={controls} initial={isOpen ? 'open' : 'close'}>
        {loading ? (
          <Box pt="6" textAlign="center">
            <Spinner emptyColor="gray.200" color="primary.500" />
          </Box>
        ) : (
          <Box pt="6">{children}</Box>
        )}
      </motion.div>
    </Box>
  );
};
