"use strict";(globalThis.webpackChunk_upsetjs_docs=globalThis.webpackChunk_upsetjs_docs||[]).push([[7547],{2129:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(9703);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6700:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(9703).createContext(void 0)},7680:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9703),a=n(6700);const o=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},5905:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(9703),a=n(4929),o=n(7680);function i(e){let{name:t}=e;const{siteConfig:n}=(0,a.Z)(),{isDarkTheme:i}=(0,o.Z)(),c=`${n.organizationName}/${n.projectName}/tree/${n.customFields.branch}/examples/${t}`;return r.createElement(r.Fragment,null,r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:`https://codesandbox.io/s/github/${c}`},"Open in CodeSandbox")),r.createElement("li",null,r.createElement("a",{href:`https://github.com/${c}`},"Show Source"))),r.createElement("iframe",{title:"Example Preview",className:"embedded-iframe",src:`https://codesandbox.io/embed/github/${c}?autoresize=1&fontsize=14&theme=${i?"dark":"light"}`},"Example Preview not available"))}},9453:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>c,toc:()=>s,default:()=>p});var r=n(9478),a=(n(9703),n(2129)),o=n(5905);const i={title:"Static Data",hide_table_of_contents:!0},c={unversionedId:"examples/staticData",id:"examples/staticData",isDocsHomePage:!1,title:"Static Data",description:"Basic example showing a UpSet.js Plot with statically iven data.",source:"@site/docs/examples/staticData.mdx",sourceDirName:"examples",slug:"/examples/staticData",permalink:"/docs/examples/staticData",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/examples/staticData.mdx",version:"current",frontMatter:{title:"Static Data",hide_table_of_contents:!0},sidebar:"someSidebar",previous:{title:"Plot Title",permalink:"/docs/examples/title"},next:{title:"Skeletons",permalink:"/docs/examples/skeletons"}},s=[],l={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Basic example showing a UpSet.js Plot with statically iven data."),(0,a.kt)(o.Z,{name:"staticData",mdxType:"CodeSandboxExample"}))}p.isMDXComponent=!0}}]);