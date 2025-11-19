import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { ProjectCard } from './ProjectCard';
import { storybookCoverUrl } from '../../test/storybookMedia';

export default {
  title: 'components/ProjectCard',
  component: ProjectCard,
} as Meta<typeof ProjectCard>;

const Template: StoryFn<typeof ProjectCard> = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Project Card',
  facts: [
    {
      id: 1,
      text: '13.000 $',
    },
    {
      id: 2,
      text: '293 ha',
    },
  ],
  image: (
    <img
      src={storybookCoverUrl}
      alt="Alt"
      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
    />
  ),
  footerTitle: 'Footer title',
  footerSubTitle: 'Footer sub title',
};
