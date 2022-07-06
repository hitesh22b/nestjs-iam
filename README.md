# Backend Library Boilerplate

![Build & Test](https://github.com/learnapp-co/backend-lib-boilerplate/workflows/Build%20&%20Test/badge.svg?branch=master)

## Description

This boilerplate is used to build reusable libraries for [Nest](https://github.com/nestjs/nest) framework using TypeScript. There are several best practices and automation built into this project which will help you focus more on the actual development and writing code.

## Documentation

- [Annotated code and component dependency diagrams](https://learnapp-co.github.io/backend-lib-boilerplate/)
- [Test Coverage](https://learnapp-co.github.io/backend-lib-boilerplate/tests/coverage/lcov-report)
- [Allure Report](https://learnapp-co.github.io/backend-lib-boilerplate/tests/report)

## Features

- Typescript support
- OOP and DI (IOC) using the [Nest](https://github.com/nestjs/nest) Framework
- Strict linting support via [TSLint](https://palantir.github.io/tslint/)
- Testing automation using [Jest](https://jestjs.io/docs/en)
- Auto generated documentation support using [JsDoc](https://jsdoc.app/) format
- Auto generated changelog following [Conventional Commit](https://www.conventionalcommits.org/) format

## Prerequisites

- NodeJs v10 or above

## Template Usage

You can use this repo as a template and start your own backend library. There are few things that you need to take care of while:

- **rename** the project in _package.json_ file
- project name must start with **@learnapp-co/**
- if you have admin privilege then add the github token as secret, else contact admin for support
- run `npm publish --dry-run` locally to test everything is packaged up as expected

## Installation

If you are using any private npm packages then you will have to set github access token in you global env variable to install dependencies. You can create your own token visiting [this link](https://github.com/settings/tokens) and make sure your token has _read:packages_ access.

Set env variable globally linux and mac

```bash
$ gedit ~/.profile
```

Paste **export NPM_TOKEN=YOUR_AUTH_TOKEN_HERE** to the bottom of the file.

Set env variable globally windows

```bash
C:\> setx /M NPM_TOKEN "YOUR_AUTH_TOKEN_HERE"
```

### Install the dependencies

```bash
$ npm install @learnapp-co/backend-lib-boilerplate
```

### Build

To build the library you can use the following command:

```bash
$ npm run start:dev
# or
$ npm run build
```

### Test

```bash
# unit tests
$ npm run test

# do TDD by watching test files and running unit test on file change
$ npm run test:watch

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Documentation

You can generate component and annotated source documentation as follows:

```bash
$ npm run docs
```

### Linting

There is an extensive support for linting via ESLint which enforces strict rules. The following commands can be used to help lint or fix minor linting issues:

```bash
# Format the code
$ npm run format

# Auto fix linting issues
$ npm run lint:fix
```

### Git Comment Format

All commit messages MUST follow the [Conventional Commit](https://www.conventionalcommits.org/) standards and the boilerplate application enforces this and wrong commit formats will fail and will be rejected by the system.

### Release

Once a feature is ready for deployment to the **Staging** environment (which a replica of production), the developer must log the changes in the CHANGELOG and increment the application version in the package.json file.

This process has been automated can be done by running the command:

```bash
npm run release
```

To forgo the automated version bump use --release-as with the argument major, minor or patch.
Suppose the last version of your code is 1.0.0, you've only landed fix: commits, but you would like your next release to be a minor.
Simply run the following:

```bash
npm run release -- --release-as minor
# Or
npm run release -- --release-as 1.1.0
```

If you would like to see what commands would be run, without committing to git or updating files:

```bash
npm run release -- --dry-run
```
