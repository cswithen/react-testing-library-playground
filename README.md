# React Testing Library Playground

- [jestjs.io/docs/expect]
- [github.com/testing-library/jest-dom#custom-matchers]

Using the command

```
screen.logTestingPlaygroundURL()
```

from the `@testing-library/react` library will give us a playground to select elements and roles for tests.

can use data-testid to add on specific ids within components to make them more testable `screen.getByTestId("users"))`. Not the recommended approach.

Use `// eslint-disable-next-line` to remove warning messages when using query selectors instead of roles

Use command prompts to filter which files to target while running the tests.

CLI tool startup

```
npx rtl-book serve roles-notes.js 
```