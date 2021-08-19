# Waffles 2.0 Project Organization

## 💻 Available Commands

List of all relevant npm scripts in the project with a short description. Starting the scripts most important for _local development_.

For troubleshooting purposes, all scripts could be run locally.

| Script             | What it does?                                                                                                                                        | Runs on CI |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| workbench          | Start **Workbench**, isolated components development environment                                                                                     |            |
| doc:dev            | Start _NextJS_ documentation in dev mode                                                                                                             |            |
| test-unit          | Run _Jest_ unit tests in watch mode                                                                                                                  |            |
| test-stories       | Run _Cypress_ **Stories** aka components e2e tests and a11y checks                                                                                   |            |
| lint               | Check codebase for common errors with _ESLint_                                                                                                       | ✔️         |
| lint-commits       | Verify commits messages if they stick to _Conventional Commit_ spec                                                                                  | ✔️         |
| format             | Format whole codebase with _Prettier_                                                                                                                |            |
| build              | Build CommonJS and modern ES Modules library into `/dist` folder                                                                                     | ✔️         |
| build:copy-files   | Copy package.json and readme to `/dist` to be a part of npm package<br >ℹ️ To start it locally run `build` first                                     | ✔️         |
| build:package-json | Put package.json in each CommonJS component directory created during build step to support tree shaking<br >ℹ️ To start it locally run `build` first | ✔️         |
| doc:build          | Build optimized production version of documentation into `/build` directory<br >ℹ️ To start it locally run `build` first                             | ✔️         |
| test-unit:ci       | Run unit tests and generate code coverage report                                                                                                     | ✔️         |
| test-stories:ci    | Run e2e tests in headless browser<br >ℹ️ To start it locally run `build` first                                                                       | ✔️         |
| format:check       | Check if the codebase is properly formatted with _Prettier_                                                                                          | ✔️         |
| release            | Automatically release a library to npm, bump package version based on commit messages, and generate changelog                                        | ✔️         |
| prepare            | Set up git hooks with _Husky_                                                                                                                        |            |

## 📦 Directories

Overview of most important directories and files in the project:

```
src/                                  // Most important directory, all core componets live here
  |--component/                       // Example of component folder structure
  |  |--__tests__/                    // Containsunit tests, stories and Cypress e2e tests suite
  |  |  |--component.story.tsx
  |  |  |--component.spec.tsx
  |  |  |--component.e2e.ts
workbench/                            // Components dev environment, also used to run e2e tests, NextJS app
doc-site/                             // Official Waffles documentation, NextJS app
docs/                                 // Internal documentation
tools/                                // Internal tools used during build process
  |--prepare-workbench-stories.js     // Copy stories from each component to Workbench to run e2e tests
  |--generate-design-tokens.js        // Generate design tokens based on tokens.json compatible with Figma
  |--add-package-json-files.js        // Put package.json with treeshaking hint in each CommonJS component directory
.circleci/                            // CircleCI configuration
.husky/                               // Git hooks configuration
cypress/                              // Cypress custom commands and plugins configuration
cypress.json                          // Cypress e2e test runner configuration
release-it.js                         // Auto release configuration with release-it
jest.config.js                        // Jest test runner configuration
test-setup.ts                         // Additional Jest tests setup
tsconfig.json                         // Global typescript configuration
tsconfig.cjs.json                     // Typescript compiler config for releasing CommonJS modules
tsconfig.esm.json                     // Typescript compiler config for releasing modern ES Modules
```
