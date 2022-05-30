import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Layout } from './Layout';

export default {
  title: 'components/Layout',
  component: Layout,
  args: {
    header: (
      <div
        style={{
          backgroundColor: 'var(--boemly-colors-green-500)',
          height: 'var(--boemly-sizes-full)',
        }}
      >
        Header
      </div>
    ),
    extendableHeader: false,
    theme: 'light',
    body: (
      <div
        style={{
          backgroundColor: 'var(--boemly-colors-red-500)',
          height: 'var(--boemly-sizes-2xl)',
          paddingTop: 'var(--boemly-space-40)',
        }}
      >
        Body
      </div>
    ),
    footer: (
      <div
        style={{
          backgroundColor: 'var(--boemly-colors-orange-500)',
          height: 'var(--boemly-sizes-lg)',
        }}
      >
        Footer
      </div>
    ),
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const ExtendableHeader = Template.bind({});
ExtendableHeader.args = {
  extendableHeader: true,
};

export const HideFooter = Template.bind({});
HideFooter.args = {
  hideFooter: true,
};

export const WithBanner = Template.bind({});
WithBanner.args = {
  banner: (
    <div
      style={{
        backgroundColor: 'var(--boemly-colors-yellow-500)',
        height: 'var(--boemly-sizes-full)',
        width: 'var(--boemly-sizes-full)',
      }}
    >
      Banner
    </div>
  ),
};
