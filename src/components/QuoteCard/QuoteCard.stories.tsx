import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QuoteCard } from './QuoteCard';
import { storybookAvatarUrl } from '../../test/storybookMedia';

export default {
  title: 'components/QuoteCard',
  component: QuoteCard,
} as ComponentMeta<typeof QuoteCard>;

const Template: ComponentStory<typeof QuoteCard> = (args) => <QuoteCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '"This is a very impressing quote"',
  avatar: {
    name: 'Hans',
    description: 'CEO @ a company',
    image: <img src={storybookAvatarUrl} alt="Alt" />,
  },
};
