import React from 'react';
import { Meta } from '@storybook/react';

import { Heading, Text } from '@chakra-ui/layout';

export default {
  title: 'Foundations/Typography',
} as Meta;

export const Headings = () => (
  <div>
    <Heading size="4xl">Heading - size: 4xl</Heading>
    <br />
    <Heading size="3xl">Heading - size: 3xl</Heading>
    <br />
    <Heading size="2xl">Heading - size: 2xl</Heading>
    <br />
    <Heading size="xl">Heading - size: xl</Heading>
    <br />
    <Heading size="lg">Heading - size: lg</Heading>
    <br />
    <Heading size="md">Heading - size: md</Heading>
    <br />
    <Heading size="sm">Heading - size: sm</Heading>
    <br />
    <Heading size="xs">Heading - size: xs</Heading>
  </div>
);

export const Texts = () => (
  <div>
    <Text size="lgRegularNormal">Text - size: lgRegularNormal</Text>
    <Text size="mdRegularNormal">Text - size: mdRegularNormal</Text>
    <Text size="smRegularNormal">Text - size: smRegularNormal</Text>
    <Text size="xsRegularNormal">Text - size: xsRegularNormal</Text>
    <br />
    <Text size="lgRegularNormalBold">Text - size: lgRegularNormalBold</Text>
    <Text size="mdRegularNormalBold">Text - size: mdRegularNormalBold</Text>
    <Text size="smRegularNormalBold">Text - size: smRegularNormalBold</Text>
    <Text size="xsRegularNormalBold">Text - size: xsRegularNormalBold</Text>
    <br />
    <Text size="lgLowNormal">Text - size: lgLowNormal</Text>
    <Text size="mdLowNormal">Text - size: mdLowNormal</Text>
    <Text size="smLowNormal">Text - size: smLowNormal</Text>
    <Text size="xsLowNormal">Text - size: xsLowNormal</Text>
    <br />
    <Text size="lgLowBold">Text - size: lgLowBold</Text>
    <Text size="mdLowBold">Text - size: mdLowBold</Text>
    <Text size="smLowBold">Text - size: smLowBold</Text>
    <Text size="xsLowBold">Text - size: xsLowBold</Text>
    <br />
    <Text size="lgMonoNormal">Text - size: lgMonoNormal</Text>
    <Text size="mdMonoNormal">Text - size: mdMonoNormal</Text>
    <Text size="smMonoNormal">Text - size: smMonoNormal</Text>
    <Text size="xsMonoNormal">Text - size: xsMonoNormal</Text>
    <br />
    <Text size="lgMonoUppercase">Text - size: lgMonoUppercase</Text>
    <Text size="mdMonoUppercase">Text - size: mdMonoUppercase</Text>
    <Text size="smMonoUppercase">Text - size: smMonoUppercase</Text>
    <Text size="xsMonoUppercase">Text - size: xsMonoUppercase</Text>
  </div>
);
