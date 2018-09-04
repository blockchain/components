[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-green.svg)](https://conventionalcommits.org)

# Components
The library Components is based on React and styled-components. It contains basic components, "atoms", and more complex "molecules" that are used on the [Blockchain.com](https://www.blockchain.com) ecosystem.

## Tooling
Both `yarn` and `npm` are supported.
The commands are given using `npm` however you can use the `yarn` equivalent and it will Just Work™

## Installation
1. Just a quick `npm i @blockchain-com/components` and you are good to go!

## Hacking
1. Ensure Node version >= 8.0 is installed
2. Install packages: `npm i`
3. Start application in dev mode: `npm run start`
4. The library will now be accessible at [localhost:6006](http://localhost:6006)

## Tips
If you want to change the library and reflect your changes on your consumer app without having to push to the repo and release, just:

1. `git clone git@github.com:blockchain/components.git`
2. `cd path-to/components`
3. `npm link`
4. `cd path-to/my-app`
5. `npm link @blockchain-com/components`

You can also use the task `npm run build:watch` on `components` to automatically recompile the library and trigger a refresh on your app :fire:.

:zap: you need to run `npm link @blockchain-com/components` everytime you run `npm i` or `yarn`...

## Architecture
This library follows the [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) principles.

An additional attention has be taken to ensure that all components are available and fully functional accross major web browsers*, as well as responsive on any screen sizes.

Browsers with > 1% usage:
* IE 11
* Safari 11+
* Chrome / Edge / Firefox latest 2 major versions

## Code Quality
### Linting
The coding style rules are defined by [Prettier](https://prettier.io/) and enforced by [Eslint](https://eslint.org)
The "good practices™" that we follow are defined by the [Javascript Standard Style](https://standardjs.com/rules.html)

The following commands are available:
 * `npm run lint:js` Lints JS code
 * `npm run lint:css` Lints styled components

### Unit Tests
Please execute `npm test` to run the unit tests

Testing is done using [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/).

### Git Hooks
We use [Husky](https://github.com/typicode/husky) to automatically deploy git hooks

On every `git commit` and `git push` we run the unit tests and the linting tasks.

The commit messages are also validated and must follow the [Conventional Commits](https://conventionalcommits.org/) spec.
