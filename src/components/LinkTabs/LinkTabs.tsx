import { Box, Button, Flex, Link } from '@chakra-ui/react';
import React, { FC } from 'react';

export interface LinkTabsProps {
  tabs: { key: string; title: string; href: string }[];
  activeTabKey?: string;
}

export const LinkTabs: FC<LinkTabsProps> = ({ tabs, activeTabKey }: LinkTabsProps) => {
  return (
    <Box>
      <Flex width="full" gap="8" overflowX="auto">
        {tabs.map((tab) => (
          <Box key={tab.key}>
            <Button
              href={tab.href}
              as={Link}
              variant="link"
              color="primary.800"
              fontWeight="bold"
              pb="2"
              cursor="pointer"
            >
              {tab.title}
            </Button>
            {tab.key === activeTabKey && (
              <Box
                backgroundColor="primary.700"
                borderTopRadius="full"
                height="3px"
                data-testid="active-indicator"
              />
            )}
          </Box>
        ))}
      </Flex>

      <Box color="gray.200" borderTop="1px" mt="-1px" />
    </Box>
  );
};
