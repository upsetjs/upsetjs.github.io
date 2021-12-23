"use strict";(globalThis.webpackChunk_upsetjs_docs=globalThis.webpackChunk_upsetjs_docs||[]).push([[4185],{2129:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var s=n(9703);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?s.createElement(g,i(i({ref:t},m),{},{components:n})):s.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9436:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,metadata:()=>i,toc:()=>o,default:()=>c});var s=n(9478),r=(n(9703),n(2129));const a={id:"_index",title:"Quick Start",slug:"/getting-started"},i={unversionedId:"getting-started/_index",id:"getting-started/_index",isDocsHomePage:!1,title:"Quick Start",description:"Install Upset.js",source:"@site/docs/getting-started/_index.mdx",sourceDirName:"getting-started",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/getting-started/_index.mdx",version:"current",frontMatter:{id:"_index",title:"Quick Start",slug:"/getting-started"},sidebar:"someSidebar",previous:{title:"Data",permalink:"/docs/data"},next:{title:"Venn Diagrams",permalink:"/docs/getting-started/venndiagram"}},o=[{value:"Install Upset.js",id:"install-upsetjs",children:[]},{value:"Defining your elements",id:"defining-your-elements",children:[]},{value:"Extract the sets",id:"extract-the-sets",children:[]},{value:"Result",id:"result",children:[]},{value:"Interactivity",id:"interactivity",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Bundle version",id:"bundle-version",children:[]}],l={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install-upsetjs"},"Install Upset.js"),(0,r.kt)("p",null,"UpSet.js comes with an React based version ",(0,r.kt)("inlineCode",{parentName:"p"},"@upsetjs/react")," and a pure Vanilla JavaScript version ",(0,r.kt)("inlineCode",{parentName:"p"},"@upsetjs/bundle"),".\nIn addition, there is a Vue.js wrapper at ",(0,r.kt)("inlineCode",{parentName:"p"},"@upsetjs/vue"),". All of them have the same feature set and interface.\nThe bundle version has no framework dependencies and can be used in general cases. In the followign the React version is shown, later also the bundled version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/react react react-dom\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/react react react-dom\n")),(0,r.kt)("h2",{id:"defining-your-elements"},"Defining your elements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const elems = useMemo(\n  () => [\n    { name: 'A', sets: ['S1', 'S2'] },\n    { name: 'B', sets: ['S1'] },\n    { name: 'C', sets: ['S2'] },\n    { name: 'D', sets: ['S1', 'S3'] },\n  ],\n  []\n);\n")),(0,r.kt)("h2",{id:"extract-the-sets"},"Extract the sets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// import { extractCombinations } from '@upsetjs/react';\nconst { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n")),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n// import { extractCombinations, UpSetJS } from '@upsetjs/react';\n\nfunction GettingStarted() {\n  const elems = useMemo(\n    () => [\n      { name: 'A', sets: ['S1', 'S2'] },\n      { name: 'B', sets: ['S1'] },\n      { name: 'C', sets: ['S2'] },\n      { name: 'D', sets: ['S1', 'S3'] },\n    ],\n    []\n  );\n\n  const { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\n  return <UpSetJS sets={sets} combinations={combinations} width={780} height={400} />;\n}\n")),(0,r.kt)("h2",{id:"interactivity"},"Interactivity"),(0,r.kt)("p",null,"By specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"onHover")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"selection")," UpSet.js is fully interactive. As an alternative there is also the ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n// import { extractCombinations, UpSetJS } from '@upsetjs/react';\n\nfunction GettingStarted() {\n  const elems = useMemo(\n    () => [\n      { name: 'A', sets: ['S1', 'S2'] },\n      { name: 'B', sets: ['S1'] },\n      { name: 'C', sets: ['S2'] },\n      { name: 'D', sets: ['S1', 'S3'] },\n    ],\n    []\n  );\n\n  const { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <UpSetJS\n      sets={sets}\n      combinations={combinations}\n      width={780}\n      height={400}\n      selection={selection}\n      onHover={setSelection}\n    />\n  );\n}\n")),(0,r.kt)("h2",{id:"queries"},"Queries"),(0,r.kt)("p",null,"Similar to the original UpSetR, UpSet.js allows to specify queries by a set of elements which are then highlighted in the plot.\nThe first query is shown in full detail while others are shown using small indicators."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n// import { extractCombinations, UpSetJS } from '@upsetjs/react';\n\nfunction GettingStarted() {\n  const elems = useMemo(\n    () => [\n      { name: 'A', sets: ['S1', 'S2'] },\n      { name: 'B', sets: ['S1'] },\n      { name: 'C', sets: ['S2'] },\n      { name: 'D', sets: ['S1', 'S3'] },\n    ],\n    []\n  );\n\n  const { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\n  const queries = useMemo(\n    () => [\n      { name: 'Q1', color: 'steelblue', elems: elems.slice(0, 2) },\n      { name: 'Q2', color: 'red', elems: elems.slice(2) },\n    ],\n    [elems]\n  );\n\n  return <UpSetJS sets={sets} combinations={combinations} width={780} height={400} queries={queries} />;\n}\n")),(0,r.kt)("h2",{id:"bundle-version"},"Bundle version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/bundle\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/bundle\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { extractCombinations, renderUpSetJS } from '@upsetjs/bundle';\n\nconst elems = [\n  { name: 'A', sets: ['S1', 'S2'] },\n  { name: 'B', sets: ['S1'] },\n  { name: 'C', sets: ['S2'] },\n  { name: 'D', sets: ['S1', 'S3'] },\n];\nconst { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\nlet selection = null;\n\nfunction onHover(set) {\n  selection = set;\n  rerender();\n}\n\nfunction rerender() {\n  const props = { sets, combinations, width: 780, height: 400, selection, onHover };\n  renderUpSetJS(document.body, props);\n}\n\nrerender();\n")))}c.isMDXComponent=!0}}]);