"use strict";(globalThis.webpackChunk_upsetjs_docs=globalThis.webpackChunk_upsetjs_docs||[]).push([[9407],{2129:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9703);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6700:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(9703).createContext(void 0)},7680:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(9703),o=r(6700);const a=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},5905:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9703),o=r(4929),a=r(7680);function i(e){let{name:t}=e;const{siteConfig:r}=(0,o.Z)(),{isDarkTheme:i}=(0,a.Z)(),s=`${r.organizationName}/${r.projectName}/tree/${r.customFields.branch}/examples/${t}`;return n.createElement(n.Fragment,null,n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:`https://codesandbox.io/s/github/${s}`},"Open in CodeSandbox")),n.createElement("li",null,n.createElement("a",{href:`https://github.com/${s}`},"Show Source"))),n.createElement("iframe",{title:"Example Preview",className:"embedded-iframe",src:`https://codesandbox.io/embed/github/${s}?autoresize=1&fontsize=14&theme=${i?"dark":"light"}`},"Example Preview not available"))}},5773:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,metadata:()=>s,toc:()=>l,default:()=>p});var n=r(9478),o=(r(9703),r(2129)),a=r(5905);const i={title:"Basic",slug:"/examples",hide_table_of_contents:!0},s={unversionedId:"examples/_index",id:"examples/_index",isDocsHomePage:!1,title:"Basic",description:"Basic example showing a simple UpSet.js.",source:"@site/docs/examples/_index.mdx",sourceDirName:"examples",slug:"/examples",permalink:"/docs/examples",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/examples/_index.mdx",version:"current",frontMatter:{title:"Basic",slug:"/examples",hide_table_of_contents:!0},sidebar:"someSidebar",previous:{title:"Tableau",permalink:"/docs/integrations/tableau"},next:{title:"Colored Plot",permalink:"/docs/examples/colored"}},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Basic example showing a simple UpSet.js."),(0,o.kt)(a.Z,{name:"basic",mdxType:"CodeSandboxExample"}))}p.isMDXComponent=!0}}]);