(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,p=m["".concat(s,".").concat(g)]||m[g]||d[g]||o;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=(n(0),n(132));const o={title:"Categorical"},s={unversionedId:"addons/categorical",id:"addons/categorical",isDocsHomePage:!1,title:"Categorical",description:"The Cateogrical addon summarizes categorical attributes using a mosaic chart.",source:"@site/docs/addons/categorical.mdx",slug:"/addons/categorical",permalink:"/docs/addons/categorical",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/addons/categorical.mdx",version:"current",sidebar:"someSidebar",previous:{title:"BoxPlot",permalink:"/docs/addons/boxplot"},next:{title:"Plots",permalink:"/docs/plots"}},c=[{value:"Example",id:"example",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Basic Component",id:"basic-component",children:[{value:"Horizontal",id:"horizontal",children:[]},{value:"Vertical",id:"vertical",children:[]},{value:"Dark",id:"dark",children:[]}]}],i={toc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Cateogrical")," addon summarizes categorical attributes using a mosaic chart."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Example() {\n  const [selection, setSelection] = useState(null);\n\n  const categories = ['c1', 'c2', 'c3'];\n  const elems = useMemo(\n    () => [\n      { name: '1', sets: ['one', 'two', 'three'], value: categories[0] },\n      { name: '2', sets: ['one', 'two'], value: categories[1] },\n      { name: '3', sets: ['one'], value: categories[2] },\n      { name: '4', sets: ['two'], value: categories[0] },\n      { name: '5', sets: ['one', 'two', 'three'], value: categories[1] },\n      { name: '6', sets: ['three'], value: categories[2] },\n      { name: '7', sets: ['one', 'three'], value: categories[0] },\n      { name: '8', sets: ['one', 'three'], value: categories[1] },\n      { name: '9', sets: ['three'], value: categories[2] },\n      { name: '10', sets: ['two', 'three'], value: categories[0] },\n      { name: '11', sets: ['one'], value: categories[1] },\n      { name: '12', sets: ['one', 'three'], value: categories[2] },\n      { name: '13', sets: ['one', 'three'], value: categories[0] },\n    ],\n    []\n  );\n  const { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\n  return (\n    <UpSetJS\n      sets={sets}\n      combinations={combinations}\n      width={780}\n      height={500}\n      selection={selection}\n      onHover={setSelection}\n      setAddons={[categoricalAddon('value', elems)]}\n      combinationAddons={[categoricalAddon('value', elems, { orient: 'vertical' })]}\n    />\n  );\n}\n")),Object(r.b)("h2",{id:"queries"},"Queries"),Object(r.b)("p",null,"This addon also support queries"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Example() {\n  const [selection, setSelection] = useState(null);\n\n  const categories = ['c1', 'c2', 'c3'];\n  const elems = useMemo(\n    () => [\n      { name: '1', sets: ['one', 'two', 'three'], value: categories[0] },\n      { name: '2', sets: ['one', 'two'], value: categories[1] },\n      { name: '3', sets: ['one'], value: categories[2] },\n      { name: '4', sets: ['two'], value: categories[0] },\n      { name: '5', sets: ['one', 'two', 'three'], value: categories[1] },\n      { name: '6', sets: ['three'], value: categories[2] },\n      { name: '7', sets: ['one', 'three'], value: categories[0] },\n      { name: '8', sets: ['one', 'three'], value: categories[1] },\n      { name: '9', sets: ['three'], value: categories[2] },\n      { name: '10', sets: ['two', 'three'], value: categories[0] },\n      { name: '11', sets: ['one'], value: categories[1] },\n      { name: '12', sets: ['one', 'three'], value: categories[2] },\n      { name: '13', sets: ['one', 'three'], value: categories[0] },\n    ],\n    []\n  );\n  const { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\n  return (\n    <UpSetJS\n      sets={sets}\n      combinations={combinations}\n      width={780}\n      height={500}\n      queries={[{ name: 'Q1', color: 'green', set: sets[0] }]}\n      setAddons={[categoricalAddon('value', elems)]}\n      combinationAddons={[categoricalAddon('value', elems, { orient: 'vertical' })]}\n    />\n  );\n}\n")),Object(r.b)("h2",{id:"basic-component"},"Basic Component"),Object(r.b)("h3",{id:"horizontal"},"Horizontal"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Example() {\n  const categories = ['c1', 'c2', 'c3'];\n  const values = Array(100)\n    .fill(0)\n    .map(() => categories[Math.floor(Math.random() * 3 - 0.01)]);\n  return (\n    <svg width={200} height={50}>\n      <Categorical width={200} height={50} categories={categories} values={values} />\n    </svg>\n  );\n}\n")),Object(r.b)("h3",{id:"vertical"},"Vertical"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Example() {\n  const categories = ['c1', 'c2', 'c3'];\n  const values = Array(100)\n    .fill(0)\n    .map(() => categories[Math.floor(Math.random() * 3 - 0.01)]);\n  return (\n    <svg width={50} height={200}>\n      <Categorical width={50} height={200} categories={categories} values={values} orient=\"vertical\" />\n    </svg>\n  );\n}\n")),Object(r.b)("h3",{id:"dark"},"Dark"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Example() {\n  const categories = ['c1', 'c2', 'c3'];\n  const values = Array(100)\n    .fill(0)\n    .map(() => categories[Math.floor(Math.random() * 3 - 0.01)]);\n  return (\n    <svg width={200} height={50}>\n      <Categorical width={200} height={50} categories={categories} values={values} theme=\"dark\" />\n    </svg>\n  );\n}\n")))}l.isMDXComponent=!0}}]);