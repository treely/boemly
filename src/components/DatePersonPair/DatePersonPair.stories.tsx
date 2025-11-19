import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { storybookAvatarUrl } from '../../test/storybookMedia';
import { DatePersonPair } from './DatePersonPair';

export default {
  title: 'components/DatePersonPair',
  component: DatePersonPair,
} as Meta<typeof DatePersonPair>;

const Template: StoryFn<typeof DatePersonPair> = (args) => <DatePersonPair {...args} />;

export const DateOnly = Template.bind({});
DateOnly.args = {
  date: '10/1/2022',
};

export const WithPerson = Template.bind({});
WithPerson.args = {
  date: '10/1/2022',
  person: {
    name: 'Lukas',
    image: <img src={storybookAvatarUrl} alt="Alt" />,
  },
};
