# Waffles Coding Style Guidelines

ℹ️ Below are a handful of simple rules to adhere to when developing for **Waffles**, for those that ESLint / Prettier won't handle.

🚧 Please note, these are still under construction and so may change as **Waffles** grows.

## Guidelines

1. Use kebab-case for file names.
2. Use regular fuction declaration (`function() {}`), including for functional components
3. Use arrow function declaration (`() => {}`) for anonymous functions.
4. For targetting components in tests directly (both e2e and unit), use the `data-testid` property. E.g. `<Button data-testid="example-button" ... >Example Button</Button>`
5. If using `TODO` comments, add your GitHub handle alongside the `@` prefix. E.g. `// TODO Implement important feature @handle`
6. Where appropriate, the remaining consumer-provided properties can be referenced as `restProps` and added to a component. E.g. `<Button {...restProps}>`
