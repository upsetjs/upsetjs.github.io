"use strict";(globalThis.webpackChunk_upsetjs_docs=globalThis.webpackChunk_upsetjs_docs||[]).push([[8369],{2129:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var n=r(9703);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,d=m["".concat(p,".").concat(b)]||m[b]||u[b]||s;return r?n.createElement(d,o(o({ref:t},i),{},{components:r})):n.createElement(d,o({ref:t},i))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7030:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>o,toc:()=>l,default:()=>c});var n=r(9478),a=(r(9703),r(2129));const s={title:"Observable HQ"},o={unversionedId:"integrations/observablehq",id:"integrations/observablehq",isDocsHomePage:!1,title:"Observable HQ",description:"Open Example",source:"@site/docs/integrations/observablehq.md",sourceDirName:"integrations",slug:"/integrations/observablehq",permalink:"/docs/integrations/observablehq",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/integrations/observablehq.md",version:"current",frontMatter:{title:"Observable HQ"},sidebar:"someSidebar",previous:{title:"Vue.js",permalink:"/docs/integrations/vue"},next:{title:"R/RMarkdown/RShiny",permalink:"/docs/integrations/r"}},l=[],p={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://observablehq.com/@sgratzl/upset-observable-example"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Example-open-red",alt:"Open Example"}))),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://observablehq.com/"},"ObservableHQ")," wrapper is located at ",(0,a.kt)("a",{parentName:"p",href:"https://observablehq.com/@sgratzl/upset-js"},"upset-js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"data = fetch(\n  'https://raw.githubusercontent.com/upsetjs/upsetjs/main/packages/bundle/example/got.json'\n).then(r => r.json())\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { extractSets, UpSetJSElement, generateIntersections } from '@sgratzl/upset-js';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sets = extractSets(data);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"intersections = generateIntersections(sets);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"viewof selection = UpSetJSElement(sets, intersections)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"selection ? selection.elems.map((d) => d.name) : 'None';\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://observablehq.com/@sgratzl/upset-js"},"ObservableHQ")),(0,a.kt)("p",null,"An advanced example showing all datasets from the live UpSet demo is located at ",(0,a.kt)("a",{parentName:"p",href:"https://observablehq.com/@sgratzl/upset-observable-dataset-chooser-example"},"ObservableHQ")))}c.isMDXComponent=!0}}]);