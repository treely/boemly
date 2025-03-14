import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { PortfolioCard } from './PortfolioCard';
import { storybookCoverUrl } from '../../test/storybookMedia';

const meta = {
  title: 'components/PortfolioCard',
  component: PortfolioCard,
  tags: ['autodocs'],
} satisfies Meta<typeof PortfolioCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    portfolioNumber: '#1',
    title: 'Portfolio Card',
    facts: [
      {
        id: 1,
        key: 'Key 1',
        value: '12.12',
      },
      {
        id: 2,
        key: 'Key 2',
        value: '12.12',
      },
    ],
    image: (
      <img
        src={storybookCoverUrl}
        alt="Alt"
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
    ),
    button: { text: 'Button', onClick: fn() },
  },
};

export const WithoutButton: Story = {
  args: {
    portfolioNumber: '#1',
    title: 'Portfolio Card Without Button',
    facts: [
      {
        id: 1,
        key: 'Key 1',
        value: '12.12',
      },
    ],
    image: (
      <img
        src={storybookCoverUrl}
        alt="Alt"
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
    ),
  },
};
