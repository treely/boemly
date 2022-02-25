# 🌳 Boemly

![Boemly logo](https://cdn.tree.ly/assets/v3/boemly-banner@2x.webp)

[![Actions Status](https://github.com/treely/boemly/workflows/CI/badge.svg?branch=main)](https://github.com/treely/boemly/actions)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![https://www.npmjs.com/package/boemly](https://img.shields.io/npm/v/boemly/latest.svg)](https://www.npmjs.com/package/boemly)

Boemly is the open source design system maintained by Tree.ly based on
[ChakraUI](https://chakra-ui.com/).

## 🏃‍♀️ Getting started

Install Boemly:

```bash
npm i boemly --save
```

Include the theme provider in the root of your app and start using the Boemly components:

```jsx
import { Button, BoemlyThemeProvider } from 'boemly';

function App() {
  return (
    <BoemlyThemeProvider>
      <Button>Button</Button>
    </BoemlyThemeProvider>
  );
}

export default App;
```

## 📚 Documentation

You can find a detailed documentation of Boemly [here](https://boemly.tree.ly).

## 🚀 Contributing

We are happy about every contribution from our community! Please follow our
[contribution guideline](CONTRIBUTING.md).

## 💻 Development

For development on Boemly check out our [development docs](CONTRIBUTING.md#development).

## ⚙️ Technologies used

- [Typescript](https://www.typescriptlang.org/) as the programming language.
- [@emotion](https://emotion.sh/docs/introduction) for custom styles.
- [react-use](https://www.npmjs.com/package/react-use) as a collection of hooks.
- [Framer](https://www.framer.com/docs/) for animations.
- [Eslint](https://eslint.org/) combined with [Prettier](https://prettier.io/)
  as a linter/formatter.
- [Jest](https://jestjs.io/) as the testing framework.
- [Storybook](https://storybook.js.org/) for the design system and component
  documentation.

## 🌲 Who is behind Boemly

Boemly is maintained by [Tree.ly](https://tree.ly).

![Tree.ly logo](https://cdn.tree.ly/assets/v3/logo_full_green.svg)
