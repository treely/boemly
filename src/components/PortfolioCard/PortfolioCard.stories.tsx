import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { PortfolioCard } from './PortfolioCard';
import { storybookCoverUrl } from '../../test/storybookMedia';

export default {
  title: 'components/PortfolioCard',
  component: PortfolioCard,
} as Meta<typeof PortfolioCard>;

const Template: StoryFn<typeof PortfolioCard> = (args) => <PortfolioCard {...args} />;

export const Default = Template.bind({});
Default.args = {
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
};

export const WithButton = Template.bind({});
WithButton.args = {
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
  button: { text: 'Button', onClick: () => alert('Button clicked') },
};
