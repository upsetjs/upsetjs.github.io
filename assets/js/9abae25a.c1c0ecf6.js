(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),i=(n(0),n(132));const a={title:"PowerBI"},o={unversionedId:"integrations/powerbi",id:"integrations/powerbi",isDocsHomePage:!1,title:"PowerBI",description:"A PowerBI Custom Visual is available for rendering UpSet.js.",source:"@site/docs/integrations/powerbi.md",slug:"/integrations/powerbi",permalink:"/docs/integrations/powerbi",editUrl:"https://github.com/upsetjs/upsetjs/edit/main/packages/docs/docs/integrations/powerbi.md",version:"current",sidebar:"someSidebar",previous:{title:"Python Jupyter",permalink:"/docs/integrations/jupyter"},next:{title:"Tableau",permalink:"/docs/integrations/tableau"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Data Roles",id:"data-roles",children:[]},{value:"Interaction",id:"interaction",children:[]},{value:"Venn Diagram",id:"venn-diagram",children:[]}],l={toc:s};function c({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A ",Object(i.b)("a",{parentName:"p",href:"https://powerbi.microsoft.com/en-us/developers/custom-visualization/?cdn=disable"},"PowerBI Custom Visual")," is available for rendering ",Object(i.b)("a",{parentName:"p",href:"https://upset.js.org"},"UpSet.js"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4129778/80864985-9b771380-8c86-11ea-809c-a4473b32ed3b.png",alt:"UpSet.js Report"})),Object(i.b)("p",null,"see also ",Object(i.b)("a",{parentName:"p",href:"https://upset.js.org/integrations/powerbi/got.pbix"},"Sample PBIX file")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Download the latest package from ",Object(i.b)("a",{parentName:"p",href:"https://upset.js.org/integrations/powerbi/upsetjs.pbiviz"},"https://upset.js.org/integrations/powerbi/upsetjs.pbiviz")," and install into your PowerBI environment."),Object(i.b)("h2",{id:"data-roles"},"Data Roles"),Object(i.b)("p",null,"The UpSet.js visual has three data roles:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Elements")," exactly one grouping with a unique identifier for each row (e.g., a name)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Sets")," one or more measures or groupings which represent the sets. When it's value at row ",Object(i.b)("inlineCode",{parentName:"li"},"i")," results in a trueish value (e.g., 1, true, ...) UpSet.js will interpret it that the element at row ",Object(i.b)("inlineCode",{parentName:"li"},"i")," is part of this set"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Attributes")," zero or more numeric measures that are used to generate boxplots for each set intersection")),Object(i.b)("p",null,"In addition, the visual supports various styling options including the customization of how the set combinations are generated."),Object(i.b)("h2",{id:"interaction"},"Interaction"),Object(i.b)("p",null,"The UpSet.js visual reacts to selections from other widgets by highlighting the elements in its chart. Moreover, when the user ",Object(i.b)("strong",{parentName:"p"},"clicks")," on an element in the chart, the corresponding set (combination) will be selected."),Object(i.b)("h2",{id:"venn-diagram"},"Venn Diagram"),Object(i.b)("p",null,"In addition, there is a sibling extension for rendering Venn and Euler Diagrams:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4129778/85765896-d6417900-b716-11ea-8b89-8ae01f6456a0.png",alt:"Venn Report"})),Object(i.b)("p",null,"see also ",Object(i.b)("a",{parentName:"p",href:"https://upset.js.org/integrations/powerbi/got_venn.pbix"},"Sample PBIX file")))}c.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return n?i.a.createElement(d,s(s({ref:t},c),{},{components:n})):i.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);