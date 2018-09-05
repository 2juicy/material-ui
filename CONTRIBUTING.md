# Contributing

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Material-UI community. Here are a few guidelines that will help you along the way.

<<<<<<< HEAD
## Asking Questions

For how-to questions and other non-issues, please use [StackOverflow](http://stackoverflow.com/questions/tagged/material-ui) or [Gitter](https://gitter.im/callemall/material-ui) chat instead of Github issues. There is a StackOverflow tag called "material-ui" that you can use to tag your questions.

## Opening an Issue

If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported or fixed](https://github.com/callemall/material-ui/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aclosed). You can search through existing issues and PRs to see if someone has reported one similar to yours.

Next, create a new issue that briefly explains the problem, and provides a bit of background as to the circumstances that triggered it, and steps to reproduce it.

For code issues please include:
* Material-UI version
* React version
* Browser version
* A code example or link to a repo, gist or running site.

For visual or layout problems, images or animated gifs can help explain your issue.
It's even better with a live reproduction test case. Have a look at the [`ISSUE_TEMPLATE.md`](https://raw.githubusercontent.com/callemall/material-ui/master/.github/ISSUE_TEMPLATE.md) file for a live playground example.

For feature requests please include a link to the relevant section of Material Design spec, or a screenshot.

### Issue Guidelines

Please begin the title with '[ComponentName]' where appropriate, and use a succint description. "doesn't work" doesn't help others find similar issues.

Please don't group multiple topics into one issue, but instead each should be its own issue.

And please don't just '+1' an issue. It spams the maintainers and doesn't help move the issue forward.

=======
>>>>>>> master
## Submitting a Pull Request

Material-UI is a community project, so pull requests are always welcome, but before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

As with issues, please begin the title with [ComponentName].

<<<<<<< HEAD
When adding new features or modifying existing code, please attempt to include tests to confirm the new behaviour. You can read more about our test setup [here](https://github.com/mui-org/material-ui/blob/v0.x/test/README.md).

### Branch Structure

All stable releases are tagged ([view tags](https://github.com/callemall/material-ui/tags)). At any given time, `master` represents the latest development version of the library.

Work towards rebuilding Material-UI with a new styling system is underway on the `v1-alpha` branch. Please refer to the [roadmap](https://github.com/mui-org/material-ui/blob/v0.x/ROADMAP.md) for more details.
=======
When adding new features or modifying existing, please attempt to include tests to confirm the new behaviour. You can read more about our test setup [here](https://github.com/mui-org/material-ui/blob/master/test/README.md).

When migrating a component to master, or submitting a new component, please add it to the [lab](https://github.com/mui-org/material-ui/tree/master/packages/material-ui-lab).

### Branch Structure

All stable releases are tagged ([view tags](https://github.com/mui-org/material-ui/tags)). At any given time, `master` represents the latest development version of the library.
Patches or hotfix releases are prepared on an independent branch.
>>>>>>> master

#### `master` is unsafe

We will do our best to keep `master` in good shape, with tests passing at all times. But in order to move fast, we will make API changes that your application might not be compatible with.
<<<<<<< HEAD

=======
>>>>>>> master

## Getting started

Please create a new branch from an up to date master on your fork. (Note, urgent hotfixes should be branched off the latest stable release rather than master)

1. Fork the Material-UI repository on Github
2. Clone your fork to your local machine `git clone --depth 1 git@github.com:<yourname>/material-ui.git`
(For the `v1-alpha` branch, add the `-b v1-alpha` flag to the above command.)
3. Create a branch `git checkout -b my-topic-branch`
<<<<<<< HEAD
4. Make your changes, lint, then push to github with `git push --set-upstream origin my-topic-branch`.
5. Visit github and make your pull request.
=======
4. Make your changes, lint, then push to to GitHub with `git push --set-upstream origin my-topic-branch`.
5. Visit GitHub and make your pull request.
>>>>>>> master

If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.
```sh
git remote add upstream git@github.com:mui-org/material-ui.git
git checkout master
git pull upstream master
git checkout -b my-topic-branch
yarn
```

### Testing the documentation site

The documentation site is built with Material-UI and contains examples of all the components.
To get started:
```sh
yarn
yarn docs:dev
```
You can now access the documentation site [locally](http://localhost:3000).

Test coverage is limited at present, but where possible, please add tests for any changes you make. Tests can be run with `yarn test`.

### Updating the component API documentation

To update the component API documentation (auto generated from component PropTypes comments), run:
```sh
yarn docs:api
```

### Coding style

<<<<<<< HEAD
Please follow the coding style of the current code base. Material-UI uses eslint, so if possible, enable linting in your editor to get realtime feedback. Linting can be run manually with `npm run lint`.

Finally, when you submit a pull request, linting is run again by Continuous Integration testing, but hopefully by then your code is already clean!
=======
Please follow the coding style of the current code base. Material-UI uses eslint, so if possible, enable linting in your editor to get real-time feedback. The linting rules are also run when Webpack recompiles your changes, and can be run manually with `yarn lint`.

You can also run `yarn prettier` to reformat the code.
>>>>>>> master

Finally, when you submit a pull request, they are run again by Circle CI, but hopefully by then your code is already clean!

## How do I add a new demo in the documentation?

### Let's get started.

It's simple. You just need to **create** a new file and **modify** two files.
For example, let say you want to add new demos for buttons component, then you have to go through the following steps:

#### 1. Add a new React component file under the related directory.

In this case, I'm going to add the new file to the following directory:
```
docs/src/pages/demos/buttons/
```
And let's give it a name: `SuperButtons.js`.

#### 2. Edit the page Markdown file.

The Markdown file is the source for the website documentation. So, whatever you wrote there will be reflected on the website.
In this case, the file you need to edit is `docs/src/pages/demos/buttons/buttons.md`, and I'm going to add a description about SuperButtons.

```diff
+ ### Super buttons
+
+ Sometimes, you need a super button to make your app looks **superb**. Yea ...
+
+ {{"demo": "pages/demos/buttons/SuperButtons.js"}}
```

#### 3. Edit the Next.js page.

The Next.js page is saved under the following page.
There is a direct mapping between the filename in the repository and the pathname in the documentation.

```
pages/demos/buttons.js
```

Then, you will need to add the following code:
```diff
+ 'pages/demos/buttons/SuperButtons.js': {
+   js: require('docs/src/pages/demos/buttons/SuperButtons').default,
+   raw: preval`
+ module.exports = require('fs')
+  .readFileSync(require.resolve('docs/src/pages/demos/buttons/SuperButtons'), 'utf8')
+`,
+        },
```

<<<<<<< HEAD
To get a sense of where Material-UI is heading, or for ideas on where you could contribute, take a look at the [roadmap](https://github.com/mui-org/material-ui/blob/v0.x/ROADMAP.md) and the list of [Material Design components](https://github.com/callemall/material-ui/issues/2863).
=======
#### 4. You are done 🎉!

In case you missed something, [we have a real example that can be used as a summary report]((https://github.com/mui-org/material-ui/pull/8922/files)).

## How do I use my local distribution of material-ui in any project?

Sometimes it is good to test your changes in a real case scenario, in order to do that you can install your local distribution of Material-UI in any project.

First, you have to build your local distribution of Material-UI:

```shell
# From the root folder of the material-ui project
cd packages/material-ui
yarn build
```

Then, you can add Material-UI to any project you want to try your changes:

```shell
# From the root folder of any project
yarn add file:/path/to/material-ui/folder
```

Now, every time you import `material-ui` in your project, it is going to use your local distribution.

## Roadmap
>>>>>>> master

To get a sense of where Material-UI is heading, or for ideas on where you could contribute, take a look at the [ROADMAP](https://github.com/mui-org/material-ui/blob/master/ROADMAP.md).

## License

By contributing your code to the mui-org/material-ui GitHub repository, you agree to license your contribution under the MIT license.
