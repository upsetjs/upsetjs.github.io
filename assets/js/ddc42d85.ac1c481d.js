(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=(t(0),t(132));const o={title:"Vanilla Bundle"},i={unversionedId:"integrations/vanilla",id:"integrations/vanilla",isDocsHomePage:!1,title:"Vanilla Bundle",description:"Install",source:"@site/docs/integrations/vanilla.md",slug:"/integrations/vanilla",permalink:"/docs/integrations/vanilla",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/integrations/vanilla.md",version:"current",sidebar:"someSidebar",previous:{title:"React.js",permalink:"/docs/integrations/react"},next:{title:"Vue.js",permalink:"/docs/integrations/vue"}},c=[{value:"Install",id:"install",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function s({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm install @upsetjs/bundle\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @upsetjs/bundle\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { extractCombinations, renderUpSetJS } from '@upsetjs/bundle';\n\nconst elems = [\n  { name: 'A', sets: ['S1', 'S2'] },\n  { name: 'B', sets: ['S1'] },\n  { name: 'C', sets: ['S2'] },\n  { name: 'D', sets: ['S1', 'S3'] },\n];\nconst { sets, combinations } = useMemo(() => extractCombinations(elems), [elems]);\n\nlet selection = null;\n\nfunction onHover(set) {\n  selection = set;\n  rerender();\n}\n\nfunction rerender() {\n  const props = { sets, combinations, width: 780, height: 400, selection, onHover };\n  renderUpSetJS(document.body, props);\n}\n\nrerender();\n")))}s.isMDXComponent=!0},132:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);