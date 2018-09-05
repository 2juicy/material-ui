<p align="center">
  <a href="https://material-ui.com/" rel="noopener" target="_blank"><img width="150" src="https://material-ui.com/static/images/material-ui-logo.svg" alt="Material-UI logo"></a></p>
</p>

<<<<<<< HEAD
For *how-to* questions and other non-issues,
please use [StackOverflow](http://stackoverflow.com/questions/tagged/material-ui)
instead of Github issues. There is a StackOverflow tag called "material-ui"
that you can use to tag your questions.

# [Material-UI](http://www.material-ui.com/)

[![npm package](https://img.shields.io/npm/v/material-ui.svg?style=flat-square)](https://www.npmjs.org/package/material-ui)
[![Build Status](https://travis-ci.org/callemall/material-ui.svg?branch=master)](https://travis-ci.org/callemall/material-ui)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-f81a65.svg?style=flat-square)](https://gitter.im/callemall/material-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Coverage Status](https://coveralls.io/repos/github/callemall/material-ui/badge.svg?branch=master)](https://coveralls.io/github/callemall/material-ui?branch=master)

[![PeerDependencies](https://img.shields.io/david/peer/callemall/material-ui.svg?style=flat-square)](https://david-dm.org/callemall/material-ui#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/callemall/material-ui.svg?style=flat-square)](https://david-dm.org/callemall/material-ui)
[![DevDependencies](https://img.shields.io/david/dev/callemall/material-ui.svg?style=flat-square)](https://david-dm.org/callemall/material-ui#info=devDependencies&view=list)

Material-UI is a set of [React](http://facebook.github.io/react/) components that implement
[Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html)
specification.
=======
<h1 align="center">Material-UI</h1>
>>>>>>> master

<div align="center">

[React](http://facebook.github.io/react/) components that implement [Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html).

<<<<<<< HEAD
## Required Knowledge

We recommend that you get to know [React](http://facebook.github.io/react/)
before diving into material-ui. Material-UI is a set of React components,
so understanding how React fits into web development is important.

(If you're not familiar with Node, or with the concept of Single Page Applications (SPAs),
head over to the [documentation website](http://material-ui.com/#/get-started/required-knowledge)
for a quick introduction before you read on.)
=======
[![npm package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)](https://www.npmjs.com/package/@material-ui/core)
[![CircleCI](https://img.shields.io/circleci/project/github/mui-org/material-ui/v1-beta.svg)](https://circleci.com/gh/mui-org/material-ui/tree/v1-beta)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-f81a65.svg)](https://gitter.im/callemall/material-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/v1-beta.svg)](https://codecov.io/gh/mui-org/material-ui/branch/v1-beta)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1320/badge)](https://bestpractices.coreinfrastructure.org/projects/1320)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Follow on Twitter](https://img.shields.io/twitter/follow/MaterialUI.svg?label=follow+Material-UI)](https://twitter.com/MaterialUI)
[![PeerDependencies](https://img.shields.io/david/peer/mui-org/material-ui.svg)](https://david-dm.org/mui-org/material-ui?type=peer)
[![Dependencies](https://img.shields.io/david/mui-org/material-ui.svg)](https://david-dm.org/mui-org/material-ui)
[![DevDependencies](https://img.shields.io/david/dev/mui-org/material-ui.svg)](https://david-dm.org/mui-org/material-ui?type=dev)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](http://isitmaintained.com/project/mui-org/material-ui "Average time to resolve an issue")

</div>
>>>>>>> master

## Installation

Material-UI is available as an [npm package](https://www.npmjs.com/package/@material-ui/core).

**[Stable channel v1](https://material-ui.com/)**
```sh
// with npm
npm install @material-ui/core

// with yarn
yarn add @material-ui/core
```

<<<<<<< HEAD
Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.


### React-Tap-Event-Plugin

(not needed for versions 0.19.0 and higher)

Some components use
[react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) to
listen for touch events because onClick is not fast enough
_This dependency is temporary and will eventually go away._ Until then,
be sure to inject this plugin at the start of your app.

```js
import injectTapEventPlugin from 'react-tap-event-plugin';
=======
**[v0.x](https://v0.material-ui.com/)** ([Migration to v1](https://material-ui.com/guides/migration-v0x/))
```sh
// with npm
npm install material-ui
>>>>>>> master

// with yarn
yarn add material-ui
```


Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.

## Supporting Material-UI

Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to the support of these awesome [backers](/BACKERS.md). If you'd like to join them, please consider:
- [Become a backer or sponsor on Patreon](https://www.patreon.com/oliviertassinari).
- [Become a backer or sponsor on OpenCollective](https://opencollective.com/material-ui).

Your contributions, donations, and sponsorship allow us to build a sustainable organization. They directly support office hours, continued enhancements, great documentation and learning materials!

### What's the difference between Patreon and OpenCollective?

Funds donated via Patreon directly support [Olivier Tassinari](https://github.com/oliviertassinari)'s work on Material-UI.
Funds donated via OpenCollective also support Olivier, but will be shared amongst other contributors and pay for operating expenses.
These funds are managed transparently through the OpenCollective website.
Your name/logo will receive proper recognition and exposure by donating on either platform.

<h3 align="center">Gold Sponsors</h3>

Gold Sponsors are those who have pledged $500/month and more to Material-UI.

#### via [Patreon](https://www.patreon.com/oliviertassinari)

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://www.creative-tim.com/?utm_source=material-ui&utm_medium=docs&utm_campaign=homepage" rel="noopener" target="_blank">
          <img
            width="126"
            src="https://avatars1.githubusercontent.com/u/20172349?s=378"
            alt="0"
            title="Premium Themes"
          >
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://bitsrc.io" rel="noopener" target="_blank">
          <img
            width="80"
            src="https://avatars1.githubusercontent.com/u/24789812?s=180"
            alt="1"
            title="The fastest way to share code"
          >
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://coreui.io/?utm_source=material-ui&utm_medium=logo&utm_campaign=homepage" rel="noopener" target="_blank">
          <img
            width="80"
            src="https://avatars1.githubusercontent.com/u/36859861?s=180"
            alt="1"
            title="The fastest way to build modern dashboard"
          >
        </a>
      </td>
    </tr>
  </tbody>
</table>

#### via [OpenCollective](https://opencollective.com/material-ui)

<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/0/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/0/avatar.svg" alt="0" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/1/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/1/avatar.svg" alt="1" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/2/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/2/avatar.svg" alt="2" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/3/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/3/avatar.svg" alt="3" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/4/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/4/avatar.svg" alt="4" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/5/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/5/avatar.svg" alt="5" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/6/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/6/avatar.svg" alt="6" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/7/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/7/avatar.svg" alt="7" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/8/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/8/avatar.svg" alt="8" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/9/website" rel="noopener" target="_blank"  style="margin-right: 8px;"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/9/avatar.svg" alt="9" /></a>

<<<<<<< HEAD
Beginning with v0.15.0, Material-UI components require a theme to be provided. The quickest way to get up and running is by using the `MuiThemeProvider` to inject the theme into your application context. Following that, you can use any of the components as demonstrated in the documentation.
=======
## Usage
>>>>>>> master

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="raised" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4j7m47vlm4)

## Questions

<<<<<<< HEAD
* [Use a custom theme to style components](http://material-ui.com/#/customization/themes)
* [Override individual component styles via the `style` prop](http://www.material-ui.com/#/customization/styles)
=======
For *how-to* questions and other non-issues,
please use [StackOverflow](http://stackoverflow.com/questions/tagged/material-ui) instead of Github issues.
There is a StackOverflow tag called "material-ui" that you can use to tag your questions.
>>>>>>> master

## Examples

Are you looking for an example project to get started?
[We host some](https://material-ui.com/getting-started/example-projects/).

## Documentation

Check out our [documentation website](https://material-ui.com/).

## Contributing

<<<<<<< HEAD
The future plans and high priority features and enhancements can be found
in the [ROADMAP.md](https://github.com/mui-org/material-ui/blob/v0.x/ROADMAP.md) file.
=======
We'd greatly appreciate any [contribution](/CONTRIBUTING.md) you make. :)
>>>>>>> master

## Changelog

<<<<<<< HEAD
[Material-UI](http://www.material-ui.com/) came about from our love of
[React](http://facebook.github.io/react/) and
[Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html).
We're currently using it on a project at [Call-Em-All](https://www.call-em-all.com/Careers)
and plan on adding to it and making it better. If you'd like to help,
check out the [docs folder](https://github.com/callemall/material-ui/tree/master/docs).
We'd greatly appreciate any [contribution](https://github.com/mui-org/material-ui/blob/v0.x/CONTRIBUTING.md)
you make. :)
=======
Recently Updated?
Please read the [changelog](https://github.com/mui-org/material-ui/releases).

## Roadmap

The future plans and high priority features and enhancements can be found in the [ROADMAP.md](https://material-ui.com/discover-more/roadmap/) file.
>>>>>>> master

## Thanks

[<img src="https://www.browserstack.com/images/mail/browserstack-logo-footer.png" width="120">](https://www.browserstack.com/)

<<<<<<< HEAD
Thank you to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test `material-ui` in real browsers.
=======
Thank you to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers.
>>>>>>> master

## License

This project is licensed under the terms of the
<<<<<<< HEAD
[MIT license](https://github.com/mui-org/material-ui/blob/v0.x/LICENSE)
=======
[MIT license](/LICENSE).
>>>>>>> master
