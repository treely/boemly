import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { HeroCard } from './HeroCard';
import { storybookCoverUrl } from '../../test/storybookMedia';

export default {
  title: 'components/HeroCard',
  component: HeroCard,
  argTypes: {
    'link.onClick': { action: 'Link clicked' },
  },
} as Meta<typeof HeroCard>;

const Template: StoryFn<typeof HeroCard> = (args) => <HeroCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to the Forest',
  subTitle: 'Discover the beauty of nature and help us plant more trees for a sustainable future.',
  image: <img src={storybookCoverUrl} alt="Forest cover" style={{ objectFit: 'cover' }} />,
};

export const WithLink = Template.bind({});
WithLink.args = {
  title: 'Welcome to the Forest',
  subTitle: 'Discover the beauty of nature and help us plant more trees for a sustainable future.',
  link: {
    text: 'Learn More',
    onClick: () => {},
  },
  image: <img src={storybookCoverUrl} alt="Forest cover" style={{ objectFit: 'cover' }} />,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Welcome to the Forest',
  subTitle: 'Discover the beauty of nature and help us plant more trees for a sustainable future.',
  link: {
    text: 'Get Started',
    onClick: () => {},
  },
};
WithoutImage.globals = {
  backgrounds: { value: 'dark' },
};
