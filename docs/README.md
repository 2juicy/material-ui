# Material-UI docs

This is the documentation website of Material-UI.

To start the docs site in development mode, from the project root, run:

```sh
npm run docs:dev
```

<<<<<<< HEAD
Open `http://localhost:3000` to view the documentation site.

## Publishing
To publish the docs site, you need write access to the callemall/material-ui-docs-site repository,
and to have set it as a remote called `docs-site` **(this is important as it is referenced in the build script)**:

```sh
git remote add -t gh-pages docs-site https://github.com/callemall/material-ui-docs-site.git
```

Before publishing the docs, update the CHANGELOG, and bump the version number in `package.json`.

Run the build script with the new version number:

```sh
cd docs
./gh-pages-buils.js v0.x.x
```
The build script will update `www/versions.json`, commit this change, and tag the release, 
before building the docs site in the gh-pages branch. You must `cd` out of the docs directory to see the changes.

Return to master, push the preceeding commits to `mui-org/material-ui`, build and publish the release, 
then push the updated `gh-pages` branch to the `docs-site` remote:

```sh
git checkout gh-pages
git push docs-site gh-pages
```
 
=======
## How can I add a new demo in the documentation?

[You can follow this guide](https://github.com/mui-org/material-ui/blob/master/CONTRIBUTING.md)
on how to get started contributing to Material-UI.
>>>>>>> master
