# UpSet.js as Tableau Extension

[![Github Actions][github-actions-image]][github-actions-url]

This repository contains a [Tableau](https://tableau.com) extension for showing UpSet.js plots in Tableau dashboards.

This package is part of the UpSet.js ecosystem located at the main [Github Monorepo](https://github.com/upsetjs/upsetjs).

![image](https://user-images.githubusercontent.com/4129778/80864773-04f62280-8c85-11ea-8db5-6df21683de0f.png)

## Installation

1. Download the extension description file at [upsetjs.trex](https://upset.js.org/integrations/tableau/upsetjs.trex)
1. Create a new dashboard and show at least one sheet in the dashboard
1. Follow [https://tableau.github.io/extensions-api/docs/trex_overview.html](https://tableau.github.io/extensions-api/docs/trex_overview.html) and choose the downloaded file
1. Use the `configure` button or the `configure` menu entry to specify the input data

**Notes**

Due to the restrictions of the dashboard extension system, you need to have at least one sheet in the dashboard that is showing the target data. For example, as in the Game of Thrones dataset one a bar chart showing the number of words spoken per character. The extension is then linked to this sheet and will get its data and selection from it. Similarly, the extension will set the selection in this sheet which then can propagate it to other sheets using dashboard actions.

## Example

see https://github.com/upsetjs/upsetjs_tableau_extension/examples/simpsowns.twb

## Dev Environment

requirements:

- a Tableau instance run via: `& 'C:\Program Files\Tableau\Tableau 2020.1\bin\tableau.exe' --remote-debugging-port=8696`
- Chrome 79 for debugging see https://tableau.github.io/extensions-api/docs/trex_debugging.html

alternatively one can append `#mock` to use mock data to test the extension in the web browser. It is based on a dump of the Game of Thrones dashboard.

```sh
npm i -g yarn
yarn set version berry
yarn install
yarn pnpify --sdk
```

### Building

```sh
yarn lint
yarn build
```

## Release

use `release-it`

```sh
yarn release:major
yarn release:minor
yarn release:patch
```

## Privacy Policy

UpSet.js is a client only library. The library or any of its integrations doesn't track you or transfers your data to any server. The uploaded data in the app are stored in your browser only using IndexedDB. The Tableau extension can run in a sandbox environment prohibiting any server requests. However, as soon as you export your session within the app to an external service (e.g., Codepen.io) your data will be transferred.

## License / Terms of Service

### Commercial license

If you want to use Upset.js for a commercial application the commercial license is the appropriate license. Contact [@sgratzl](mailto:sam@sgratzl.com) for details.

### Open-source license

This library is released under the `GNU AGPLv3` version to be used for private and academic purposes. In case of a commercial use, please get in touch regarding a commercial license.

[github-actions-image]: https://github.com/upsetjs/upsetjs_tableau_extension/workflows/ci/badge.svg
[github-actions-url]: https://github.com/upsetjs/upsetjs_tableau_extension/actions
[codepen]: https://img.shields.io/badge/CodePen-open-blue?logo=codepen
