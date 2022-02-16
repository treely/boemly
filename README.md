# 🌳 Boemly

Welcome to the open-source design system of [Tree.ly](https://tree.ly) for
[React](https://reactjs.org/).

## 💻 Contribute

This library uses [Parcel](https://parceljs.org/) as the build tool. Parcel comes with
a watch mode for development by default. Run it by running the following command:

```bash
npm run watch // Currently not working since there is a bug in Parcel. https://github.com/parcel-bundler/parcel/issues/7652
```

To create a production build use the following command:

```bash
npm run build
```

## Setup to test with a React application

```bash
npm install
npm link <path-to-your-nextjs-app>/node_modules/react
```

Read more about why the link to for react is needed
[here](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react).
