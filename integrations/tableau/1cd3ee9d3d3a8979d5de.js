(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{110:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),o=s(88),n=s(94),l=s(96);const r=Object(l.a)();t.default=function(){return i.a.createElement(o.a,{api:r},i.a.createElement(n.a,null))}},88:function(e,t,s){"use strict";s.d(t,"a",(function(){return m})),s.d(t,"b",(function(){return p}));var a=s(87),i=s(0),o=s.n(i),n=s(27),l=s(2),r=s(90),c=s(98),b=s(89);function d(e,t){const s=t.toLowerCase();return e.columns.find(e=>e.fieldName.toLowerCase()===s)}class h extends r.a{constructor(){super(...arguments),this._dataTable=null,this._dataTablePromise=new Promise(()=>null),this._selectionDataTables=null,this._selectionDataTablesPromise=new Promise(()=>null),this.hover=null,this.selection=null,this.attributeFields=[],this.state="init",this.isViewMode=!1,this.worksheet=""}init(e){super.init(e),this.attributeFields=e.attributeFields,this.isViewMode=e.isViewingMode,this.worksheet=e.worksheet,this.regenerate()}handleUpdates(e){super.handleUpdates(e),e.has("attributeFields")&&(this.attributeFields=this.api.attributeFields),(e.has("dataSource")||e.has("worksheet")||e.has("nameField")||e.has("setFields")||e.has("attributeFields"))&&this.regenerate()}regenerate(){const e=this.api;if(this.worksheet&&e.offSelectionChanged(this.setSelectionDataTables),this.worksheet=e.worksheet,this._dataTable=null,this._selectionDataTables=null,!e.dataSource||!e.nameField||0===e.setFields.length||!e.worksheet)return this.state="config",this._dataTablePromise=Promise.resolve(null),void(this._selectionDataTablesPromise=Promise.resolve([]));this.state="loading",this._dataTablePromise=e.getUnderlyingData(e.worksheet,e.dataSource,[e.nameField,...e.setFields,...e.attributeFields].filter(Boolean)),this._dataTablePromise.then(e=>this.setDataTable(e)),this._selectionDataTablesPromise=e.getSelectedMarks(e.worksheet),this._selectionDataTablesPromise.then(e=>this.setSelectionDataTables(e)),e.onSelectionChanged(e.worksheet,this.setSelectionDataTables)}get elems(){const e=this.dataTable;if(!e)return[];const t=d(e,this.api.nameField);if(!t)return[];const s=this.api.attributeFields,a=s.map(t=>d(e,t)).filter(e=>null!=e),i=t.index;return e.data.map(e=>{const t=e[i].formattedValue,o={};return a.forEach((t,a)=>{o[s[a]]=e[t.index].value}),{name:t,attrs:o}})}get setAddons(){return this.attributeFields.map(e=>Object(c.a)(t=>t.attrs[e],this.elems,{name:e}))}get combinationAddons(){return this.attributeFields.map(e=>Object(c.a)(t=>t.attrs[e],this.elems,{name:e,orient:"vertical"}))}get selectedElems(){const e=this.selectionDataTables;if(0===e.length)return[];const t=this.api.nameField,s=e.find(e=>null!=d(e,t));if(!s)return[];const a=d(s,t).index,i=new Set(s.data.map(e=>e[a].formattedValue));return this.elems.filter(e=>i.has(e.name))}get sets(){const e=this.dataTable;if(!e)return[];const t=this.api.setFields.map(t=>d(e,t)).filter(e=>null!=e);if(0===t.length)return[];const s=this.elems;return t.map(t=>Object(b.a)({name:t.fieldName,elems:s.filter((s,a)=>function(e){if("boolean"==typeof e)return e;if("number"==typeof e)return 0!==e;const t=String(e).toLowerCase();return"1"===t||"true"===t||"t"===t||"yes"===t}(e.data[a][t.index].value))}))}get combinations(){return Object(b.c)(this.sets,Object.assign({elems:this.elems},this.combinationsOptions))}setDataTable(e){this.state=e?"ready":"config",this._dataTable=e}setSelectionDataTables(e){this._selectionDataTables=e}setHover(e){this.hover=e}setSelection(e){this.selection=e,this.api.setSelectedMarks(this.worksheet,this.api.nameField,e?e.elems.map(e=>e.name):[])}get dataTable(){if(this._dataTable)return this._dataTable;throw this._dataTablePromise}get selectionDataTables(){if(this._selectionDataTables)return this._selectionDataTables;throw this._selectionDataTablesPromise}}Object(a.b)([l.f.ref],h.prototype,"_dataTable",void 0),Object(a.b)([l.f.ref],h.prototype,"_dataTablePromise",void 0),Object(a.b)([l.f.ref],h.prototype,"_selectionDataTables",void 0),Object(a.b)([l.f.ref],h.prototype,"_selectionDataTablesPromise",void 0),Object(a.b)([l.f.ref],h.prototype,"hover",void 0),Object(a.b)([l.f.ref],h.prototype,"selection",void 0),Object(a.b)([l.f],h.prototype,"attributeFields",void 0),Object(a.b)([l.f],h.prototype,"state",void 0),Object(a.b)([l.f],h.prototype,"isViewMode",void 0),Object(a.b)([l.c],h.prototype,"elems",null),Object(a.b)([l.c],h.prototype,"setAddons",null),Object(a.b)([l.c],h.prototype,"combinationAddons",null),Object(a.b)([l.c],h.prototype,"selectedElems",null),Object(a.b)([l.c],h.prototype,"sets",null),Object(a.b)([l.c],h.prototype,"combinations",null),Object(a.b)([l.b],h.prototype,"setDataTable",null),Object(a.b)([l.b.bound],h.prototype,"setSelectionDataTables",null),Object(a.b)([l.b.bound],h.prototype,"setHover",null),Object(a.b)([l.b.bound],h.prototype,"setSelection",null);const u=o.a.createContext(null),m=({api:e,children:t})=>{const s=Object(n.c)(()=>new h(e));return o.a.createElement(u.Provider,{value:s}," ",t," ")},p=()=>{const e=o.a.useContext(u);if(!e)throw new Error("useStore must be used within a StoreProvider.");return e}},94:function(e,t,s){"use strict";var a=s(0),i=s.n(a),o=s(14),n=s(28),l=s(27),r=s(88),c=s(92),b=s(97),d=s(13);const h=Object(o.c)({root:{flexGrow:1,overflow:"hidden"},upset:{position:"absolute"}}),u={chartLabel:"13px",setLabel:"13px"},m=Object(l.a)(({width:e,height:t})=>{var s;const a=Object(r.b)(),o=a.ui.dark?d.b:d.c,n=a.selectedElems,l=a.hover?a.hover:0===n.length?void 0:n,b=null!==(s=a.props.color)&&void 0!==s?s:d.f.color,m=n.length>0?Object(d.h)(b):b,p=a.hover?d.i:b;return i.a.createElement(c.a,Object.assign({id:"u",theme:a.ui.theme,sets:a.sets,combinations:a.combinations,width:e,height:t,fontSizes:u},a.props,{className:h.upset,color:m,textColor:o.text,alternatingBackgroundColor:"rgba(0, 0, 0, 0.05)",selectionColor:p,fontFamily:!1,selection:l,onHover:a.setHover,onClick:a.setSelection,setAddons:a.setAddons,combinationAddons:a.combinationAddons,exportButtons:!1}))});function p({width:e,height:t}){return e>0&&t>0?i.a.createElement(a.Suspense,{fallback:"loading"},i.a.createElement(m,{width:e,height:t})):i.a.createElement("svg",{className:h.upset})}var f=Object(l.a)(()=>i.a.createElement("div",{className:h.root},i.a.createElement(b.a,{handleHeight:!0,handleWidth:!0,render:p})));const g=Object(o.c)({root:{flexGrow:1,position:"relative",display:"flex",flexDirection:"column",justifyContent:"center"},click:{alignSelf:"center"}});t.a=Object(l.a)(()=>{const e=Object(r.b)(),t=Object(a.useCallback)(()=>e.api.openDialog(),[e]);return i.a.createElement("div",{className:g.root},"loading"===e.state||"ready"===e.state&&i.a.createElement(f,null),"config"===e.state&&!e.isViewMode&&i.a.createElement(n.Button,{className:g.click,onClick:t,kind:e.ui.button},"Configure"),"init"===e.state&&i.a.createElement(n.Spinner,{className:g.click,color:e.ui.theme}))})}}]);