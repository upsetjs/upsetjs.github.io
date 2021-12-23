"use strict";(globalThis.webpackChunk_upsetjs_docs=globalThis.webpackChunk_upsetjs_docs||[]).push([[2756],{2129:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(9703);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4810:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,metadata:()=>o,toc:()=>s,default:()=>c});var r=t(9478),a=(t(9703),t(2129));const i={title:"Venn Diagram"},o={unversionedId:"components/venndiagram",id:"components/venndiagram",isDocsHomePage:!1,title:"Venn Diagram",description:"For comparison and convenience reasons UpSet.js also has a Venn Diagram component for rendering two or three sets.",source:"@site/docs/components/venndiagram.mdx",sourceDirName:"components",slug:"/components/venndiagram",permalink:"/docs/components/venndiagram",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/components/venndiagram.mdx",version:"current",frontMatter:{title:"Venn Diagram"},sidebar:"someSidebar",previous:{title:"UpSet.js Plot",permalink:"/docs/components/upsetjs"},next:{title:"Karnaugh Map",permalink:"/docs/components/karnaughmap"}},s=[{value:"Skeleton",id:"skeleton",children:[]},{value:"Title",id:"title",children:[]},{value:"Interactivity",id:"interactivity",children:[]},{value:"Click",id:"click",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Small Sets",id:"small-sets",children:[]}],l={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For comparison and convenience reasons UpSet.js also has a Venn Diagram component for rendering two or three sets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Default() {\n  return <VennDiagram sets={GameOfThronesDataSet.sets} width={780} height={500} />;\n}\n")),(0,a.kt)("h2",{id:"skeleton"},"Skeleton"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Skeleton() {\n  return <VennDiagramSkeleton width={780} height={500} />;\n}\n")),(0,a.kt)("h2",{id:"title"},"Title"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'// import React from \'react\';\n\nfunction Title() {\n  return (\n    <VennDiagram\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      title="Game of Thrones"\n      description="Information about the characters of the tv series Game of Thrones"\n    />\n  );\n}\n')),(0,a.kt)("h2",{id:"interactivity"},"Interactivity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Interactivity() {\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <VennDiagram\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      selection={selection}\n      onHover={setSelection}\n    />\n  );\n}\n")),(0,a.kt)("h2",{id:"click"},"Click"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Click() {\n  const [selection, setSelection] = React.useState(null);\n  return (\n    <VennDiagram\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      selection={selection}\n      onClick={setSelection}\n    />\n  );\n}\n")),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction Queries() {\n  return (\n    <VennDiagram\n      sets={GameOfThronesDataSet.sets}\n      width={780}\n      height={500}\n      queries={GameOfThronesDataSet.queries}\n      queryLegend\n    />\n  );\n}\n")),(0,a.kt)("h2",{id:"small-sets"},"Small Sets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import React from 'react';\n\nfunction SmallSets() {\n  return (\n    <div>\n      <VennDiagram\n        width={780}\n        height={500}\n        sets={asSets([\n          { name: 'one', elems: [1, 2, 3, 5, 7, 8, 11, 12, 13] },\n          { name: 'two', elems: [1, 2, 4, 5, 10] },\n          { name: 'three', elems: [1, 5, 6, 7, 8, 9, 10, 12, 13] },\n        ])}\n      />\n      <VennDiagram\n        width={780}\n        height={500}\n        sets={asSets([\n          { name: 'one', elems: [1, 2, 3] },\n          { name: 'two', elems: [1, 2, 4, 5] },\n          { name: 'three', elems: [1, 5] },\n        ])}\n      />\n    </div>\n  );\n}\n")))}c.isMDXComponent=!0}}]);