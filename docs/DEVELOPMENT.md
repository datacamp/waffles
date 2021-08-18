# Waffles 2.0 Local Development Guide

All **Waffles** components and their tests exist in the `src` directory, and their official documentation is in the `doc-site` folder. All npm scripts are run from the root – no need to navigate to subsequent directories.

## 🏆 Core Principles

1. 100% automatic library release process (publishing to npm, version bumps, changelog generation)
2. Lightweight isolated components development environment (Workbench)
3. Official documentation consumes the same modules later published to npm
4. All tests collocated with components (both unit and e2e stories)
5. Nearly identical local development and production CI environments (all commands could be run locally)

## 💻 Before You Start

- Make sure you have a compatible version of **node** installed (14+)
- Install the latest version (1.22+) of **yarn** package manager
- Run **yarn** in the root directory to install all dependencies

## 🔧 Workbench

**Workbench** is a lightweight _local development environment_ created specifically for developing new components or updating the existing ones.

To start **Workbench** run `yarn workbench` npm script and navigate to `http://localhost:4040`. You will notice an empty canvas.

### Adding Component to Workbench

To add a component to **Workbench** navigate to `workbench/workbench.tsx` and import the component as you would in a regular application (let's use `button` example):

```js
import { Button } from '@datacamp/waffles/button';

function Workbench() {
  return <Button>Hello there!</Button>;
}

export default Workbench;
```

After that start modifying the imported component in `src/button` and the changes will be automatically reflected in the **Workbench** preview.

ℹ️ When you're done, make sure to **NOT commit** `workbench/workbench.tsx` file and leave it pristine for other developers.

### Useful Commands for Local Components Development

- To run unit tests with jest run `yarn test-unit`
- To check for common coding errors run `yarn lint`
- To format code with prettier run `yarn format`
- To verify commits messages run `yarn lint-commits`

## 📄 Docs Website

Whenever you want to update official **Waffles** documentation run `doc:dev` npm script and navigate to `http://localhost:3000`.

Documentation is built in [NextJS](https://nextjs.org/docs) framework. All relevant pages are placed in `doc-site/pages` directory. For writing components' documentation, we use [mdx](https://mdxjs.com/), the flavor of markdown. It is accessible even for non-technical people.

You can find components used internally in `doc-site/components` folder.

## 🧪 Tests

> Write tests. Not too many. Mostly integration.

In **Waffles** there are 2 kinds of tests to keep the codebase healthy and of high quality.

### Unit Tests

To run unit tests run `yarn test-unit` npm script.

Regular unit tests are placed in `__tests__` directory next to the component and have a `.spec.tsx` file extension. We are using [Jest](https://jestjs.io/docs/getting-started) test runner and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### Stories

To test stories use `yarn test-stories` command. Cypress test runner should open shortly, where, if you wish, you can inspect each story one by one.

Stories are the Waffle's _integration_ and _visual regression_ tests. Similar to unit tests they are placed next to the component in `__tests__` folder. Each **story** lives in a separate `.story.tsx` file and it should be added to the component's e2e test suite in the appropriate `.e2e.ts` file. We are using [Cypress](https://docs.cypress.io/) to run those tests. For example to load story placed in `basic-button.story.tsx` file just run `cy.loadStory('basic-button')`.

It is also possible to test for various **a11y violations** against [WCAG 2.1 AA guidelines](https://www.w3.org/TR/WCAG21/) by using `cy.a11yCheck()`.

Under the hood **Workbench** is used to run those stories.

## 📦 Releases

To make the versioning and release process easier we use [Semantic Versioning](https://semver.org/). On each commit, code is automatically formatted, and the commit message is verified whether it adheres to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

The whole release process is _fully automated_. That's why proper commits messages are important. Often used commit types: `feat:`, `fix:`, `chore:`, `docs:`, `perf:`, `test:`. It is also possible to add scope to commit message, e.g. `feat(button):`.

ℹ️ If you were only tweaking documentation or internal scripts in your PR be free to skip release by adding **[skip ci]** to the body of the last commit.
