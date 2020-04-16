# UpSet.js

[![NPM Package][npm-image]][npm-url] [![Netlify Status][netlify-image]][netlify-url]

UpSet.js is a JavaScript re-implementation of [UpSetR](https://www.rdocumentation.org/packages/UpSetR/) which itself is based on [UpSet](http://vcg.github.io/upset/about/). The core library is written in React but provides also bundle editions for plain JavaScript use. The `UpSet` React component is implemented as a pure functional component solely depending on the given properties.

![interactions](https://user-images.githubusercontent.com/4129778/79372064-b262f980-7f55-11ea-872e-6e6857c0df82.png)

## Usage and Installation

### React

```sh
npm install @upsetjs/react react react-dom
```

```ts
import React from 'react';
import UpSet, { extractSets, generateIntersections, ISetLike } from '@upsetjs/react';

const elems = [
  { name: 'A', sets: ['S1', 'S2'] },
  { name: 'B', sets: ['S1'] },
  { name: 'C', sets: ['S2'] },
  { name: 'D', sets: ['S1', 'S3'] },
];

const sets = extractSets(elems);
const combinations = generateIntersections(sets);

<UpSet sets={sets} combinations={combinations} width={500} height={300} />;
```

with stored selection

```ts
const UpSetSelection = (props: any) => {
  [selection, setSelection] = React.useState(null as ISetLike<any> | null);

  return <UpSet {...props} selection={selection} onHover={setSelection} />;
};

<UpSetSelection sets={sets} combinations={combinations} />;
```

![simple](https://user-images.githubusercontent.com/4129778/79372711-4cc33d00-7f56-11ea-865e-e1f74261ccb2.png)

see also [Storybook Page](https://upsetjs.netlify.app/api/?path=/docs/upset--default)

### Bundled version

```sh
npm install @upsetjs/bundle
```

```js
import { extractSets, generateIntersections, renderUpSet } from '@upsetjs/bundle';

const elems = [
  { name: 'A', sets: ['S1', 'S2'] },
  { name: 'B', sets: ['S1'] },
  { name: 'C', sets: ['S2'] },
  { name: 'D', sets: ['S1', 'S3'] },
];

const sets = extractSets(elems);
const combinations = generateIntersections(sets);

renderUpSet(document.body, { sets, combinations, width: 500, height: 300 });
```

with stored selection

```js
let selection = null;

function onHover(set) {
  selection = set;
  render();
}

function render() {
  const props = { sets, combinations, width: 500, height: 300, selection, onHover };
  renderUpSet(document.body, props);
}

render();
```

![simple](https://user-images.githubusercontent.com/4129778/79372711-4cc33d00-7f56-11ea-865e-e1f74261ccb2.png)

see also [![Open in CodePen][codepen]](https://codepen.io/sgratzl/pen/GRpoMZY)

## More features

**Interactivity**

By specifying `onHover` and `selection` `UpSet` is fully interactive. As an alternative there is also the `onClick` property.

![interactions](https://user-images.githubusercontent.com/4129778/79372064-b262f980-7f55-11ea-872e-6e6857c0df82.png)

**Queries**

Similar to the original UpSetR, `UpSet` allows to specify queries by a set of elements which are then highlighted in the plot.
The first query is shown in full detail while others are shown using small indicators.

```ts
const queries = [
  { name: 'Q1', color: 'steelblue', elems: elems.filter(() => Math.random() > 0.7) },
  { name: 'Q2', color: 'red', elems: elems.filter(() => Math.random() > 0.8) },
];

renderUpSet(document.body, { sets, combinations, width: 500, height: 300, queries });
```

![queries](https://user-images.githubusercontent.com/4129778/79373208-9a3faa00-7f56-11ea-8281-47dabb9b42b9.png)

see also [![Open in CodePen][codepen]](https://codepen.io/sgratzl/pen/BaNmpJq)

## UpSet.js App

It contains a sample application for exploring sets and set intersections. It is the counterpart to the original [UpSet](http://vcg.github.io/upset/about/) and [UpSet2](https://vdl.sci.utah.edu/upset2/). The app is deployed at [https://upsetjs.netlify.app](https://upsetjs.netlify.app).

![upset_app1](https://user-images.githubusercontent.com/4129778/79368561-e3d8c680-7f4f-11ea-9a87-f4421a3846cf.png)


## Integration

### Observable HQ

A [ObservableHQ](https://observablehq.com/) wrapper is located at [upset-observable-library](https://observablehq.com/@sgratzl/upset-observable-library).

```js
data = fetch(
  'https://raw.githubusercontent.com/upsetjs/upsetjs/master/packages/bundle/example/simpsons.json'
).then(r => r.json())
}
```

```js
import { extractSets, UpSet, generateIntersections } from '@sgratzl/upset-observable-library';
```

```js
sets = extractSets(data);
```

```js
intersections = generateIntersections(sets);
```

```js
viewof selection = UpSet(sets, intersections)
```

```js
selection ? selection.elems.map((d) => d.name) : 'None';
```

[ObservableHQ](https://observablehq.com/@sgratzl/upset-observable-example)

An advanced example showing all datasets from the live UpSet demo is located at [ObservableHQ](https://observablehq.com/@sgratzl/upset-observable-dataset-chooser-example)

### R/RMarkdown/RShiny HTMLWidget

A R wrapper using [HTMLWidgets](https://www.htmlwidgets.org/) is located at [upset_r](https://github.com/upsetjs/upsetjs_r). The API follows the building pattern using the chaining operator `%>%`.
In contrast to the original UpsetR implementation it focusses on the UpSet plot itself only. However it supports interactivity either using custom Shiny events or HTMLWidgets Crosstalk. See also Shiny examples.

```R
devtools::install_github("upsetjs/upsetjs_r")
library(upsetjs)
```

```R
listInput <- list(one = c(1, 2, 3, 5, 7, 8, 11, 12, 13), two = c(1, 2, 4, 5, 10), three = c(1, 5, 6, 7, 8, 9, 10, 12, 13))
upsetjs() %>% fromList(listInput) %>% interactiveChart()
```

![List Input Example](https://user-images.githubusercontent.com/4129778/79375541-10dda700-7f59-11ea-933a-a3ffbca1bfd2.png)

see also [Basic.Rmd](https://github.com/upsetjs/upsetjs_r/master/vignettes/basic.Rmd)

and [R Package Documentation](https://upsetjs.github.io/upsetjs_r)

### Juptyer Widget

A Juptyer Widget wrapper is located at [upsetjs_jupyter_widget](https://github.com/upsetjs/upsetjs_jupyter_widget).

```bash
pip install upsetjs_jupyter_widget
jupyter labextension install @jupyter-widgets/jupyterlab-manager@3.0.0.alpha-0
```

```python
from upsetjs_jupyter_widget import UpSetWidget
```

```python
w = UpSetWidget[str]()
w.from_dict(dict(one = ['a', 'b', 'c', 'e', 'g', 'h', 'k', 'l', 'm'], two = ['a', 'b', 'd', 'e', 'j'], three = ['a', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm']))
w
```

![upset_from_dict](https://user-images.githubusercontent.com/4129778/79368564-e4715d00-7f4f-11ea-92f5-23ee89b5332f.png)

## License

### Commercial license

If you want to use Upset.js for a commercial application the commercial license is the appropriate license. Contact [@sgratzl](mailto:sam@sgratzl.com) for details.

### Open-source license

This library is released under the `GNU AGPLv3` version to be used for private and academic purposes. In case of a commercial use, please get in touch regarding a commercial license.

[npm-image]: https://badge.fury.io/js/%40upsetjs%2Freact.svg
[npm-url]: https://npmjs.org/package/@upsetjs/react
[netlify-image]: https://api.netlify.app/api/v1/badges/22f99fef-9985-46eb-8715-9eb91e16190f/deploy-status
[netlify-url]: https://app.netlify.app/sites/upsetjs/deploys
[codepen]: https://img.shields.io/badge/CodePen-open-blue?logo=codepen
