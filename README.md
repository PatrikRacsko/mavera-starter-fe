# Mavera FE Starter

Use and upgrade this template for future projects

## Recommended package manager
PNPM -> due to caching

## Project Setup

```sh
pnpm install
```

### Husky setup

```sh
npm run prepare
```

#### Commitlint is active
use this website to learn about commit conventions
```
https://commitlint.js.org/#/concepts-commit-conventions
```

### Configure environment variable

```sh
cp .env.example .env
```
#### Fill in the provided API secrets

### Compile and Hot-Reload for Development

```sh
npm start
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

ESLint and Prettier are automatically run before commiting to your origin


## Branching conventions

Use feature | bugfix | refactor as prefixes to your card number to keep track of branches

```
e.g. feature/MAV-001
```
