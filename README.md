[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Blockchain Components
The library Blockchain Components is based on React and styled-components. It contains basic components, "atoms", and more complex "molecules" that are used on the [Blockchain.com](https://www.blockchain.com) ecosystem.

## Tooling
Both `yarn` and `npm` are supported.
The commands are given using `npm` however you can use the `yarn` equivalent and it will Just Work™

## Installation
1. Just a quick `npm i blockchain-info-components` and you are good to go!
2. Use your favourite bundler to import the following extensions: 'js', 'css', 'svg', 'ttf' and 'png'

## Hacking

1. Ensure Node version >= 8.0 is installed
2. Install packages: `npm i`
3. Start application in dev mode: `npm run start`
4. The library will now be accessible at [localhost:6006](http://localhost:6006)

## Architecture
This library follows the [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) principles.

An additional attention has be taken to ensure that all components are available and fully functional accross major web browsers*, as well as responsive on any screen sizes.

Browsers with > 1% usage:
* IE 11
* Safari 11+
* Chrome / Edge / Firefox latest 2 major versions

## Release
To create a new release, just run `npm version patch|minor|major`

Please make sure that you are on `master` with a clean `git status` first

Once the versioning pull request is merged, you can generate the changelog using:
`git-changelog -t @LAST-VERSION-HERE@`

`git-changelog` can be installed with the following: `npm i -g git-changelog`

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
