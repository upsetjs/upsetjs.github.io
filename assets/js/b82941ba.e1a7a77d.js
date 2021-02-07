(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(115));const o={title:"React.js"},i={unversionedId:"integrations/react",id:"integrations/react",isDocsHomePage:!1,title:"React.js",description:"Install",source:"@site/docs/integrations/react.md",slug:"/integrations/react",permalink:"/docs/integrations/react",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/integrations/react.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/integrations"},next:{title:"Vanilla Bundle",permalink:"/docs/integrations/vanilla"}},c=[{value:"Install",id:"install",children:[]},{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[]}],s={toc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/react react react-dom\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/react react react-dom\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n// import { extractSets, generateCombinations, UpSetJS } from '@upsetjs/react';\n\nfunction GettingStarted() {\n  const elems = useMemo(\n    () => [\n      { name: 'A', sets: ['S1', 'S2'] },\n      { name: 'B', sets: ['S1'] },\n      { name: 'C', sets: ['S2'] },\n      { name: 'D', sets: ['S1', 'S3'] },\n    ],\n    []\n  );\n\n  const sets = useMemo(() => extractSets(elems), [elems]);\n  const combinations = useMemo(() => generateCombinations(sets), [sets]);\n\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <UpSetJS\n      sets={sets}\n      combinations={combinations}\n      width={780}\n      height={400}\n      selection={selection}\n      onHover={setSelection}\n    />\n  );\n}\n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("p",null,"The most relevant and required properties of the ",Object(a.b)("inlineCode",{parentName:"p"},"UpSetJS")," component are:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"interface UpSetJSProps {\n  width: number;\n  height: number;\n\n  sets: ISet<T>[];\n  combinations?: ISetCombination<T>[] | GenerateCombinationOptions<T>;\n\n  selection?: ISetLike<T> | readonly T[] | null;\n\n  onHover?(selection: ISetLike<T> | null): void;\n  onClick?(selection: ISetLike<T> | null): void;\n\n  queries?: UpSetQuery<T>[];\n}\n")))}l.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);