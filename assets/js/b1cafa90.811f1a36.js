"use strict";(globalThis.webpackChunk_upsetjs_docs=globalThis.webpackChunk_upsetjs_docs||[]).push([[8823],{2129:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(9703);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9725:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,metadata:()=>o,toc:()=>i,default:()=>c});var r=n(9478),s=(n(9703),n(2129));const a={title:"Venn Diagrams"},o={unversionedId:"getting-started/venndiagram",id:"getting-started/venndiagram",isDocsHomePage:!1,title:"Venn Diagrams",description:"Install Upset.js",source:"@site/docs/getting-started/venndiagram.mdx",sourceDirName:"getting-started",slug:"/getting-started/venndiagram",permalink:"/docs/getting-started/venndiagram",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/getting-started/venndiagram.mdx",version:"current",frontMatter:{title:"Venn Diagrams"},sidebar:"someSidebar",previous:{title:"Quick Start",permalink:"/docs/getting-started"},next:{title:"Karnaugh Map",permalink:"/docs/getting-started/karnaughmap"}},i=[{value:"Install Upset.js",id:"install-upsetjs",children:[]},{value:"Defining your elements",id:"defining-your-elements",children:[]},{value:"Extract the sets",id:"extract-the-sets",children:[]},{value:"Result",id:"result",children:[]},{value:"Bundle version",id:"bundle-version",children:[]}],l={toc:i};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"install-upsetjs"},"Install Upset.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/react react react-dom\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/react react react-dom\n")),(0,s.kt)("h2",{id:"defining-your-elements"},"Defining your elements"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const elems = useMemo(\n  () => [\n    { name: 'A', sets: ['S1', 'S2'] },\n    { name: 'B', sets: ['S1'] },\n    { name: 'C', sets: ['S2'] },\n    { name: 'D', sets: ['S1', 'S3'] },\n  ],\n  []\n);\n")),(0,s.kt)("h2",{id:"extract-the-sets"},"Extract the sets"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"// import { extractSets, generateCombinations } from '@upsetjs/react';\nconst sets = useMemo(() => extractSets(elems), [elems]);\nconst combinations = useMemo(() => generateCombinations(sets), [sets]);\n")),(0,s.kt)("h2",{id:"result"},"Result"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n// import { extractSets, generateCombinations, VennDiagram } from '@upsetjs/react';\n\nfunction GettingStarted() {\n  const elems = useMemo(\n    () => [\n      { name: 'A', sets: ['S1', 'S2'] },\n      { name: 'B', sets: ['S1'] },\n      { name: 'C', sets: ['S2'] },\n      { name: 'D', sets: ['S1', 'S3'] },\n    ],\n    []\n  );\n\n  const sets = useMemo(() => extractSets(elems), [elems]);\n  const combinations = useMemo(() => generateCombinations(sets), [sets]);\n\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <VennDiagram\n      sets={sets}\n      combinations={combinations}\n      width={780}\n      height={400}\n      selection={selection}\n      onHover={setSelection}\n    />\n  );\n}\n")),(0,s.kt)("h2",{id:"bundle-version"},"Bundle version"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/bundle\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/bundle\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { extractSets, generateCombinations, renderVennDiagram } from '@upsetjs/bundle';\n\nconst elems = [\n  { name: 'A', sets: ['S1', 'S2'] },\n  { name: 'B', sets: ['S1'] },\n  { name: 'C', sets: ['S2'] },\n  { name: 'D', sets: ['S1', 'S3'] },\n];\nconst sets = useMemo(() => extractSets(elems), [elems]);\nconst combinations = useMemo(() => generateCombinations(sets), [sets]);\n\nlet selection = null;\n\nfunction onHover(set) {\n  selection = set;\n  rerender();\n}\n\nfunction rerender() {\n  const props = { sets, combinations, width: 780, height: 400, selection, onHover };\n  renderVennDiagram(document.body, props);\n}\n\nrerender();\n")))}c.isMDXComponent=!0}}]);