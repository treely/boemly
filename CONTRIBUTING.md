# Contributing

Thanks for you interest in contributing to Boemly.

This document is a guideline. Don't worry about getting everything perfect. We are happy to work
with you on your contribution.

[Upvoting existing issues](#upvoting-issues), [reporting new issues](#reporting-issues), or
[giving feedback](#tell-us-about-your-experience) about your experience are the easiest ways to
contribute.

We also accept pull requests for changes to the code and to the documentation. For more information
on how to do this, read our [developer guide](#development).

If you have any questions, please reach out via any of our support channels on our
[website](https://tree.ly).

## Upvoting Issues

An easy way to contribute is to upvote existing issues that are relevant to you. This will give us
a better idea what is important for you and other users.

Please avoid content-less +1 comments but instead use the emoji reaction to upvote with a 👍. This
allows people to sort issues by reaction and doesn't spam the maintainers.

## Reporting Issues

Before you report an issue, please search the existing issues to make sure someone hasn't already
reported it. When reporting a new issue, include as much detail as possible. Please include:

- What you did, what happened, and what you expected to happen
- Steps to reproduce the issue
- Which Boemly version you are using
- Logs or stacktraces

## Tell us about your experience

You don't have to create a detailed bug report or request a new feature to make a valuable
contribution. Giving us feedback about your experience with Boemly is incredibly valuable as well.
Please get in touch with us to tell us what you like and don't like about it on our
[website](https://tree.ly).

# Development

Node.js version: `22`

To make a code contribution to Boemly you need to know how to setup and develop it. First, you need
to install the dependencies by using the following command:

```bash
npm install
```

To work on a component you can run the bundler in watch-mode by using the following command:

```bash
npm start
```

To see the changes in the documentation run:

```bash
npm run storybook
```

## Code quality

There are multiple tools like eslint, prettier, and jest used to ensure code quality. To run
the automated checks run the following commands:

```bash
npm run lint  # eslint and prettier
npm run test  # jest using react-testing-library
```

## Compile for production

To create a production build you need to build the Boemly packages as well as the Storybook. Do
that by running the following commands:

```bash
npm run build  # Build the packages
npm run build-storybook  # Build the Storybook
```

## Releases (Commit message format)

The repository uses [semantic-release](https://semantic-release.gitbook.io/) to make automated
releases in workflows. `semantic-release` uses the commit messages to determine the consumer impact
of changes in the codebase. Following formalized conventions for commit messages, semantic-release
automatically determines the next semantic version number, generates a changelog and publishes the
release.

The table below shows which commit message gets you which release type when `semantic-release`
runs:

| Commit message                                                                                                                                                     | Release type                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `fix(Button): Stop text from overflowing`                                                                                                                          | ~~Patch~~ Fix Release                                                                                           |
| `feat(Button): Add 'size' property`                                                                                                                                | ~~Minor~~ Feature Release                                                                                       |
| `perf(Button): Remove 'icon' property`<br><br>`BREAKING CHANGE: The 'icon' property has been removed.`<br>`It's not possible anymore to pass an icon to a button.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer of the commit) |

# Structure

Each component consists of the component itself, a test file, a stories file, maybe some styles,
and an index files to export everything that can be used by the user of the component library.

```bash
.
└── Button
    ├── Button.stories.tsx # File containing the stories for the Storybook
    ├── Button.test.tsx    # File containing the tests
    ├── Button.tsx         # The component itself containing the component and a props interface
    ├── index.ts           # Index file exporting the useable component itself as default
    └── styles.ts          # The styled componentss
```
