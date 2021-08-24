# Waffles 2.0 Local Development Guide

All **Waffles** components and their tests exist in the `src` directory with matching official documentation in the `doc-site` folder. All npm scripts are run from the root — there is no need to navigate to sub-directories.

## 🏆 Core Principles

1. Release process is fully **automatic**, including publishing to npm, version bumps, and changelog generation
2. Has a lightweight isolated **component development environment** — Workbench
3. Official documentation and Workbench consumes the **same modules** that are later published to npm
4. All tests are **co-located** with components, both unit and e2e stories
5. Local development and production environments are **identical** — you can execute all commands locally

## 💻 Before You Start

- Make sure you have a compatible version of **node** installed: **14+**
- Install the latest version of **yarn** package manager: **1.22+**
- Run **yarn** in the root directory to install all dependencies

## 🔧 Workbench

**Workbench** is a lightweight _local development environment_ created specifically for updating existing or developing new components.

To start **Workbench** run `yarn workbench` npm script and navigate to `http://localhost:4040`. You will be presented with an empty canvas.

### Adding Components to Workbench

To add a component to **Workbench**: navigate to `workbench/workbench.tsx` and import the component as you would in a regular application. Let's use `button` as an example:

```js
import { Button } from '@datacamp/waffles/button';

function Workbench() {
  return <Button>Hello there!</Button>;
}

export default Workbench;
```

Now when you modify the imported component in `src/button` the changes will be automatically reflected in the **Workbench** preview.

ℹ️ When you're finished **DO NOT commit** `workbench/workbench.tsx` file. Please leave it pristine for other developers.

### Useful Commands for Local Component Development

- To run unit tests with Jest run `yarn test:unit`
- To run e2e Cypress stories test suites run `yarn test:stories`
- To check for common coding errors run `yarn lint`
- To format code with prettier run `yarn format`
- To verify commits messages run `yarn lint:commits`

## 📄 Docs Website

To update the official **Waffles** documentation run `yarn doc:dev` then navigate to `http://localhost:3000`.

All documentation is built using the [NextJS](https://nextjs.org/docs) framework. Pages are placed in `doc-site/pages` directory. For writing component documentation we use [mdx](https://mdxjs.com/), a flavor of markdown, which is accessible for technical and non-technical people.

Components used internally by the documentation can be found in the `doc-site/components` folder.

## 🧪 Tests

> Write tests. Not too many. Mostly integration.

In **Waffles** there are two kinds of tests to keep the codebase healthy and of high quality.

### Unit Tests

To run unit tests run `yarn test:unit` npm script.

Regular unit tests are placed in a `__tests__` sub-directory of each component and each test file has a `.spec.tsx` extension. We are using the [Jest](https://jestjs.io/docs/getting-started) test runner and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### Stories

To test stories use `yarn test:stories` command. Cypress test runner should open shortly, and each story could be inspected one by one.

Stories are Waffle's _integration_ and _visual regression_ tests. Similar to unit tests, they are placed with each component in a `__tests__` sub-directory. Each **story** lives in a separate `.story.tsx` file and should be added to the component's e2e test suite in the appropriate `.e2e.ts` file. We are using [Cypress](https://docs.cypress.io/) to run these tests. For example, to load the story placed in `basic-button.story.tsx` file just run `cy.loadStory('basic-button')`.

It is also possible to test for various **accessibility (a11y) violations** against [WCAG 2.1 AA guidelines](https://www.w3.org/TR/WCAG21/) by using `cy.a11yCheck()`.

Under the hood **Workbench** runs these stories.

## 🖼️ Design Tokens and Icons

Both design tokens and icons are generated from source files using matching `generate` scripts:

- **design tokens** are generated based on `src/tokens/tokens.json` file, which contains definitions compatible with [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) plugin, by running `generate:design-tokens` command
- **icons** are generated based on SVG files from `src/icon/raw` directory via `generate:icons` command

The output is:

- **design tokens**: a `src/tokens/tokens.ts` file
- **icons**: new React components in the `src/icon` folder and an updated `src/icon/index.ts` file

ℹ️ After adding new design tokens or icons, please run the appropriate `generate` script(s). After this **commit** the resulting files. That way they can be easily consumed internally.

## 📦 Releases

To make the release process and versioning easier we use [Semantic Versioning](https://semver.org/). On each commit, code is automatically formatted and the commit message is verified to check it adheres to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

The release process is _fully automated_, which makes proper commits messages critically important. Often used commit types include: `feat:`, `fix:`, `chore:`, `docs:`, `perf:`, `test:`. It is also possible to add a scope to commit message, e.g. `feat(button):`.

ℹ️ If you are only tweaking documentation or internal scripts, feel free to skip releasing by adding **[skip ci]** to the body of the last commit of your PR.
