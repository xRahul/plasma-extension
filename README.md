# plasma-extension
`plasma-extension` is a fully-fledged PG Plasma client inside a chrome extension. You can download `plasma-extension` from the Chrome Web Store [here](http://TODO.add.this.link).

`plasma-extension` wraps our core node software, `plasma-core`, where most of the node logic is handled. If you're looking to work on the core node logic head over to the [`plasma-core`](https://github.com/plasma-group/plasma-core) repository.

## Overview
### Full Plasma Node
Unlike other extensions such as [MetaMask](https://metamask.io/), `plasma-extension` is a **full plasma node** that stores all of the information you need to keep your funds 100% safe. This means you don't need to point `plasma-extension` at another plasma node in order to spend your funds.

### Integration With MetaMask
`plasma-extension` does require that the user have a full *Ethereum* node (or at least points to a remote full node). For convenience, we've integrated `plasma-extension` with MetaMask. This means that all key storage is carried out by MetaMask and `plasma-extension` never touches your private keys.

## Contributing
Welcome! If you're looking to contribute to `plasma-extension`, you're in the right place.

### Contributing Guide and CoC
Plasma Group follows a [Contributing Guide and Code of Conduct](https://github.com/plasma-group/plasma-extension/blob/master/.github/CONTRIBUTING.md) adapted slightly from the [Contributor Covenant](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html). All contributors are expected to read through this guide. We're here to cultivate a welcoming and inclusive contributing environment, and every new contributor needs to do their part to uphold our community standards.

### Requirements and Setup
#### Node.js
`plasma-extension` is tested and built with [`Node.js`](https://nodejs.org/en/). Although you **do not need [`Node.js`] to run this chrome extension**, you'll need to install `Node.js` (and it's corresponding package manager, `npm`) for your system before contributing.

`plasma-extension` has been tested on the following versions of Node:

- 10.14.2

If you're having trouble getting a component of `plasma-extension` running, please make sure you have one of the above `Node.js` versions installed.

#### Packages
`plasma-extension` makes use of several `npm` packages.

Install all required packages with:

```
$ npm install
```

### Running Tests
`plasma-extension` makes use of a combination of [`Mocha`](https://mochajs.org/) (a testing framework) and [`Chai`](https://www.chaijs.com/) (an assertion library) for testing.

Run all tests with:

```
$ npm test
```

### Building
We're using `gulp` to provide a process to build `plasma-extension` for publication.

If you'd like to build `plasma-extension` yourself, simply run:

```
$ npm run build
```
