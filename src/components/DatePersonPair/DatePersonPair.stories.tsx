import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { storybookAvatarUrl } from '../../test/storybookMedia';
import { DatePersonPair } from './DatePersonPair';

export default {
  title: 'components/DatePersonPair',
  component: DatePersonPair,
} as ComponentMeta<typeof DatePersonPair>;

const Template: ComponentStory<typeof DatePersonPair> = (args) => <DatePersonPair {...args} />;

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
