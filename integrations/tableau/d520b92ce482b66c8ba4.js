(globalThis.webpackChunk_upsetjs_tableau_extension=globalThis.webpackChunk_upsetjs_tableau_extension||[]).push([[963],{8963:(e,t,a)=>{"use strict";a.d(t,{Z:()=>F});var i=a(364),n=a(1943),l=a(6791),s=a(2291),r=a(6160),o=a(4704);const d=(0,l.oB)({flex:"1 1 0",minHeight:"2.5em",overflow:"auto",border:"1px solid #E6E6E6",borderRadius:"5px",position:"relative",$nest:{"& > div":{position:"absolute",width:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"start",padding:"0.5em"}}}),c=(0,l.zE)({root:{display:"flex",position:"relative",overflow:"hidden",$nest:{[`&[data-type=measure] .${d}[data-type=measure], &[data-type=dimension] .${d}[data-type=dimension]`]:{borderColor:o.D1.action},[`&[data-type=measure] .${d}[data-type=measure]:hover, &[data-type=dimension] .${d}[data-type=dimension]:hover`]:{background:"#F5F5F5"},[`&[data-theme=dark][data-type=measure] .${d}[data-type=measure]:hover, &[data-type=dimension] .${d}[data-type=dimension]:hover`]:{background:"#252525"},"&[data-type]":{cursor:"grabbing !important"}}},header:{margin:"0.5em 0"},side:{flex:"1 1 0",display:"flex",flexDirection:"column",marginRight:"0.5em"},target:{flex:"1 1 0",display:"flex",flexDirection:"column",marginLeft:"0.5em"},error:{borderColor:o.D1.attention},pill:{cursor:"grab",width:"15em",textOverflow:"ellipsis",margin:"2px",color:"inherit !important"},dragged:{pointerEvents:"none",position:"absolute",left:0,top:0},grabbing:{cursor:"grabbing"},elems:{flexGrow:1},sets:{flexGrow:8},attributes:{flexGrow:3}}),u=(0,n.Pi)((({field:e,schema:t})=>{const a=(0,r.IA)(),n=(0,i.useCallback)((t=>{if(0!==t.button)return;const i=t.currentTarget,n=i.closest(`.${c.root}`);n.dataset.type=i.dataset.type;const l=n.getBoundingClientRect();a.setDraggedField(e,{x:t.clientX-l.x,y:t.clientY-l.y})}),[a,e]);return i.createElement(s.Pill,{kind:"dimension"===e.role?"discrete":"continuous",schema:t,"data-id":e.id,"data-type":e.role,className:c.pill,onMouseDown:n},e.name)})),m=(0,n.Pi)((()=>{const e=(0,r.IA)(),t=e.draggedField;return t?i.createElement(s.Pill,{style:{transform:`translate(${e.draggedPosition.x}px,${e.draggedPosition.y}px)`},ref:e.draggedFieldRef,kind:"dimension"===t.role?"discrete":"continuous","data-id":t.id,"data-type":t.role,className:(0,l.Sh)(c.pill,c.dragged)},t.name):null})),p=(0,n.Pi)((()=>{var e;const t=(0,r.IA)(),a=(0,i.useCallback)((e=>t.changeDataSource(e.target.value)),[t]),n=(0,i.useCallback)((e=>t.changeWorksheet(e.target.value)),[t]),o=(0,i.useCallback)((e=>{delete e.currentTarget.dataset.type,t.setDraggedField(null)}),[t]),p=(0,i.useCallback)((()=>{if(!t.draggedField)return;const e=t.draggedField.id;t.toggleSetField(e,!1),t.nameField===e&&t.setNameField("")}),[t]),h=(0,i.useCallback)((()=>{if(!t.draggedField)return;const e=t.draggedField.id;t.toggleAttributeField(e,!1)}),[t]),g=(0,i.useCallback)((()=>{if(!t.draggedField)return;const e=t.draggedField.id;t.setNameField(e)}),[t]),b=(0,i.useCallback)((()=>{if(!t.draggedField)return;const e=t.draggedField.id;t.toggleSetField(e,!0)}),[t]),v=(0,i.useCallback)((()=>{if(!t.draggedField)return;const e=t.draggedField.id;t.toggleAttributeField(e,!0)}),[t]),y=(0,i.useCallback)((e=>{if(!t.draggedFieldRef.current)return;const a=e.currentTarget.getBoundingClientRect(),i=e.clientX-a.x,n=e.clientY-a.y;t.draggedFieldRef.current.style.transform=`translate(${i}px, ${n}px)`}),[t]);return i.createElement("div",{className:c.root,"data-theme":t.ui.theme,onMouseMove:y,onMouseUp:o,onMouseLeave:o},i.createElement("div",{className:c.side},i.createElement("h4",{className:c.header},"Associated Worksheet"),i.createElement("div",{className:c.root},t.worksheets.map((e=>i.createElement(s.Radio,{key:e.name,value:e.name,onChange:n,checked:e.name===t.worksheet},e.name)))),t.worksheet&&t.dataSources&&t.dataSources.length>1&&i.createElement(i.Fragment,null,i.createElement("h4",{className:c.header},"Data Sources"),i.createElement("div",{className:c.root},(null!==(e=t.dataSources)&&void 0!==e?e:[]).map((e=>i.createElement(s.Radio,{key:e.id,value:e.id,onChange:a,checked:e.id===t.dataSource},e.name))))),i.createElement("h5",{className:c.header},"Dimensions"),i.createElement("div",{className:(0,l.Sh)(d,c.sets),"data-type":"dimension",onMouseUp:p},i.createElement("div",null,t.dimensions.filter((e=>t.nameField!==e.id&&!t.setFields.includes(e.id))).map((e=>i.createElement(u,{key:e.id,field:e,schema:!0}))))),i.createElement("h5",{className:c.header},"Measures"),i.createElement("div",{className:(0,l.Sh)(d,c.attributes),"data-type":"measure",onMouseUp:h},i.createElement("div",null,t.measures.filter((e=>!t.attributeFields.includes(e.id))).map((e=>i.createElement(u,{key:e.id,field:e,schema:!0})))))),i.createElement("div",{className:c.target},i.createElement("h4",{className:c.header},"Mapped Data"),i.createElement("h5",{className:c.header},"Elements (exactly 1)"),i.createElement("div",{className:(0,l.Sh)(d,c.elems,!t.nameField&&c.error),"data-type":"dimension",onMouseUp:g},i.createElement("div",null,t.dimensions.filter((e=>t.nameField===e.id)).map((e=>i.createElement(u,{key:e.id,field:e}))))),i.createElement("h5",{className:c.header},"Sets (one or more)"),i.createElement("div",{className:(0,l.Sh)(d,c.sets,0===t.setFields.length&&c.error),"data-type":"dimension",onMouseUp:b},i.createElement("div",null,t.dimensions.filter((e=>t.setFields.includes(e.id))).map((e=>i.createElement(u,{key:e.id,field:e}))))),i.createElement("h5",{className:c.header},"Attributes"),i.createElement("div",{className:(0,l.Sh)(d,c.attributes),"data-type":"measure",onMouseUp:v},i.createElement("div",null,t.measures.filter((e=>t.attributeFields.includes(e.id))).map((e=>i.createElement(u,{key:e.id,field:e})))))),i.createElement(m,null))})),h=(0,l.zE)({root:{display:"flex",flexDirection:"column",alignItems:"start",$nest:{"& > div":{flexDirection:"row",marginBottom:"0.2em"},"& > div > label":{width:"12em"}}}}),g=(0,n.Pi)((()=>{var e,t,a,n,l;const d=(0,r.IA)(),c=d.combinationsOptions,u=Array.isArray(c.order)?c.order.join(","):null!==(e=c.order)&&void 0!==e?e:o.vC.order.join(",");return i.createElement("div",{className:h.root},i.createElement(s.DropdownSelect,{label:"Ordering",required:!0,value:u,onChange:(0,i.useCallback)((e=>d.changeCombinationsOptions({order:e.target.value.split(",")})),[d])},i.createElement("option",{value:"name"},"1. Name"),i.createElement("option",{value:"cardinality,name"},"1. Cardinality 2. Name"),i.createElement("option",{value:"cardinality,degree,name"},"1. Cardinality 2. Degree 3. Name"),i.createElement("option",{value:"degree,name"},"1. Degree 2. Name"),i.createElement("option",{value:"degree,cardinality,name"},"1. Degree 2. Cardinality 3. Name"),i.createElement("option",{value:"group,name"},"1. Set Group 2. Name"),i.createElement("option",{value:"group,cardinality,name"},"1. Set Group 2. Cardinality 3. Name"),i.createElement("option",{value:"group,degree,name"},"1. Set Group 2. Degree 3. Name"),i.createElement("option",{value:"group,degree,cardinality,name"},"1. Set Group 2. Degree 3. Cardinality 4. Name")),i.createElement(s.DropdownSelect,{label:"Mode",value:null!==(t=c.type)&&void 0!==t?t:o.vC.type,onChange:(0,i.useCallback)((e=>d.changeCombinationsOptions({type:e.target.value})),[d])},i.createElement("option",{value:"intersection"},"Set Intersections"),i.createElement("option",{value:"distinctIntersection"},"Distinct Set Intersections"),i.createElement("option",{value:"union"},"Set Unions")),i.createElement(s.Stepper,{label:"Minimum Set Members",name:"min",step:1,min:0,required:!0,pageSteps:1,value:null!==(a=c.min)&&void 0!==a?a:o.vC.min,onValueChange:(0,i.useCallback)((e=>d.changeCombinationsOptions({min:e})),[d])}),i.createElement(s.Stepper,{label:"Maximum Set Members",name:"max",step:1,min:0,required:!0,pageSteps:1,value:null!==(n=c.max)&&void 0!==n?n:o.vC.max,onValueChange:(0,i.useCallback)((e=>d.changeCombinationsOptions({max:e})),[d])}),i.createElement(s.Stepper,{label:"Max # Combinations",name:"limit",step:1,min:0,required:!0,pageSteps:10,value:null!==(l=c.limit)&&void 0!==l?l:o.vC.limit,onValueChange:(0,i.useCallback)((e=>d.changeCombinationsOptions({limit:e})),[d])}),i.createElement(s.Checkbox,{checked:c.empty,onChange:(0,i.useCallback)((e=>d.changeCombinationsOptions({empty:e.target.checked})),[d])},"Include Empty Combinations"))})),b=(0,l.zE)({root:{display:"flex",flexDirection:"column",alignItems:"start",$nest:{"& > div":{flexDirection:"row",marginBottom:"0.2em"},"& > div > :first-child":{width:"12em",color:"#4f4f4f",fontSize:"12px"}}},line:{display:"flex"},color:{display:"flex",flexDirection:"column"}}),v=(0,n.Pi)((()=>{var e,t;const a=(0,r.IA)(),n=(0,i.useCallback)((e=>a.changeProps({[e.target.name]:e.target.value})),[a]);return i.createElement("div",{className:b.root},i.createElement("div",{className:b.line},i.createElement("label",null,"Color"),i.createElement("div",{className:b.color},o.K5.map((e=>i.createElement(s.Radio,{key:e,name:"color",value:e,onChange:n,checked:e===a.props.color},i.createElement("span",{style:{color:e}},"◼ ",e)))))),i.createElement(s.TextField,{label:"Set Axis Label",name:"setName",value:null!==(e=a.props.setName)&&void 0!==e?e:o.lG.setName,onChange:n}),i.createElement(s.TextField,{label:"Combination Axis Label",name:"combinationName",value:null!==(t=a.props.combinationName)&&void 0!==t?t:o.lG.combinationName,onChange:n}))})),y=(0,l.zE)({root:{flexGrow:1,display:"flex",flexDirection:"column"},grow:{flexGrow:1},buttonBar:{display:"flex",justifyContent:"center",$nest:{"& > *":{marginRight:"1em",cursor:"pointer"}}},tabs:{flex:"1 1 0",display:"flex",flexDirection:"column",$nest:{"& > [role=tablist] button":{cursor:"pointer"},"& > [role=tabpanel]":{flex:"1 1 0",display:"flex"},"& > [role=tabpanel] > *":{flex:"1 1 0"}}}}),f=(0,n.Pi)((()=>{const e=(0,r.IA)();return i.createElement(i.Fragment,null,"init"===e.state||"loading"===e.state&&i.createElement(s.Spinner,{color:e.ui.theme}),"ready"===e.state&&i.createElement(i.Suspense,{fallback:i.createElement(s.Spinner,{color:e.ui.theme})},0===e.selectedTabIndex&&i.createElement(p,null),1===e.selectedTabIndex&&i.createElement(g,null),2===e.selectedTabIndex&&i.createElement(v,null)))})),F=(0,n.Pi)((()=>{const e=(0,r.IA)(),t=(0,i.useCallback)((()=>e.api.save()),[e]),a=(0,i.useCallback)((()=>e.api.closeDialog(!1)),[e]),n=(0,i.useCallback)((()=>e.api.closeDialog()),[e]);return i.createElement("div",{className:y.root},i.createElement(s.Tabs,{className:y.tabs,selectedTabIndex:e.selectedTabIndex,onTabChange:e.setSelectedTabIndex,activation:"automatic",alignment:"justified",tabs:[{title:"Data",content:"Data"},{title:"Set Combinations",content:"Set Combinations"},{title:"Style",content:"Style"}]},i.createElement(f,null)),i.createElement("div",{className:y.buttonBar},i.createElement(s.Button,{onClick:t,kind:"primary",disabled:!e.valid},"Save Changes"),i.createElement(s.Button,{onClick:n,kind:e.ui.button,disabled:!e.valid},"Save Changes and Close"),i.createElement(s.Button,{onClick:a,kind:e.ui.button},"Cancel")))}))},6160:(e,t,a)=>{"use strict";a.d(t,{DW:()=>c,IA:()=>u});var i=a(2830),n=a(364),l=a(1943),s=a(1259),r=a(4993);class o extends r.Z{constructor(e){super(e),this.selectedTabIndex=0,this._dataSources=null,this.draggedField=null,this.draggedPosition={x:0,y:0},this.draggedFieldRef=(0,n.createRef)(),this.worksheets=[],this._dataSourcesPromise=new Promise((()=>null)),this.dataSource="",this.worksheet="",this.nameField="",this.setFields=[],this.attributeFields=[],this.state="init",(0,s.rC)(this)}init(e){super.init(e),this.state="loading",this.nameField=e.nameField,this.setFields=e.setFields,this.attributeFields=e.attributeFields,this.worksheet=e.worksheet,this.dataSource=e.dataSource,this.worksheets=e.getWorksheets(),this._dataSourcesPromise=e.getDataSources(e.worksheet),this._dataSourcesPromise.then((e=>this.setDataSources(e)))}setDataSources(e){this.state="ready",this._dataSources=e,this.dataSource||1!==e.length||(this.dataSource=e[0].id,this.api.dataSource=e[0].id)}setDraggedField(e,t={x:0,y:0}){this.draggedField=e,this.draggedPosition=t}get dataSources(){if(this._dataSources)return this._dataSources;throw this._dataSourcesPromise}get fields(){if(!this._dataSources)return[];const e=this._dataSources.find((e=>this.dataSource===e.id));return e?e.fields.filter((e=>!e.isHidden&&!e.isGenerated)):[]}handleUpdates(e){super.handleUpdates(e),e.has("dataSource")&&(this.dataSource=this.api.dataSource),e.has("nameField")&&(this.nameField=this.api.nameField),e.has("setFields")&&(this.setFields=this.api.setFields),e.has("attributeFields")&&(this.attributeFields=this.api.attributeFields)}changeWorksheet(e){this.worksheet=e,this.api.worksheet=e,this.changeDataSource(""),this._dataSourcesPromise=this.api.getDataSources(e),this._dataSourcesPromise.then((e=>this.setDataSources(e)))}changeDataSource(e){this.dataSource=e,this.nameField="",this.setFields=[],this.attributeFields=[],this.api.dataSource=this.dataSource,this.api.nameField=this.nameField,this.api.setFields=this.setFields,this.api.attributeFields=this.attributeFields}setSelectedTabIndex(e){this.selectedTabIndex=e}get measures(){return this.fields.filter((e=>"measure"===e.role))}get dimensions(){return this.fields.filter((e=>"dimension"===e.role))}get valid(){return""!==this.nameField&&this.setFields.length>0}setNameField(e){this.nameField=e,this.api.nameField=e}toggleSetField(e,t){const a=this.setFields.includes(e);a!==t&&(a?this.setFields.splice(this.setFields.indexOf(e),1):this.setFields.push(e),this.api.setFields=this.setFields)}toggleAttributeField(e,t){const a=this.attributeFields.includes(e);a!==t&&(a?this.attributeFields.splice(this.attributeFields.indexOf(e),1):this.attributeFields.push(e),this.api.attributeFields=this.attributeFields)}changeProps(e){const t=Object.assign({},this.props,e);this.api.props=t,this.props=t}changeCombinationsOptions(e){const t=Object.assign({},this.combinationsOptions,e);this.api.combinationsOptions=t,this.combinationsOptions=t}}(0,i.gn)([s.LO],o.prototype,"selectedTabIndex",void 0),(0,i.gn)([s.LO.shallow],o.prototype,"_dataSources",void 0),(0,i.gn)([s.LO.ref],o.prototype,"draggedField",void 0),(0,i.gn)([s.LO],o.prototype,"draggedPosition",void 0),(0,i.gn)([s.LO.shallow],o.prototype,"worksheets",void 0),(0,i.gn)([s.LO.ref],o.prototype,"_dataSourcesPromise",void 0),(0,i.gn)([s.LO.ref],o.prototype,"dataSource",void 0),(0,i.gn)([s.LO.ref],o.prototype,"worksheet",void 0),(0,i.gn)([s.LO],o.prototype,"nameField",void 0),(0,i.gn)([s.LO],o.prototype,"setFields",void 0),(0,i.gn)([s.LO],o.prototype,"attributeFields",void 0),(0,i.gn)([s.LO],o.prototype,"state",void 0),(0,i.gn)([s.aD],o.prototype,"setDataSources",null),(0,i.gn)([s.aD],o.prototype,"setDraggedField",null),(0,i.gn)([s.Fl],o.prototype,"fields",null),(0,i.gn)([s.aD],o.prototype,"changeWorksheet",null),(0,i.gn)([s.aD],o.prototype,"changeDataSource",null),(0,i.gn)([s.aD.bound],o.prototype,"setSelectedTabIndex",null),(0,i.gn)([s.Fl],o.prototype,"measures",null),(0,i.gn)([s.Fl],o.prototype,"dimensions",null),(0,i.gn)([s.Fl],o.prototype,"valid",null),(0,i.gn)([s.aD],o.prototype,"setNameField",null),(0,i.gn)([s.aD],o.prototype,"toggleSetField",null),(0,i.gn)([s.aD],o.prototype,"toggleAttributeField",null),(0,i.gn)([s.aD],o.prototype,"changeProps",null),(0,i.gn)([s.aD],o.prototype,"changeCombinationsOptions",null);const d=n.createContext(null),c=({api:e,children:t})=>{const a=(0,l.fv)((()=>new o(e)));return n.createElement(d.Provider,{value:a}," ",t," ")},u=()=>{const e=n.useContext(d);if(!e)throw new Error("useStore must be used within a StoreProvider.");return e}},2830:(e,t,a)=>{"use strict";function i(e,t,a,i){var n,l=arguments.length,s=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(s=(l<3?n(s):l>3?n(t,a,s):n(t,a))||s);return l>3&&s&&Object.defineProperty(t,a,s),s}function n(e,t,a,i){return new(a||(a=Promise))((function(n,l){function s(e){try{o(i.next(e))}catch(e){l(e)}}function r(e){try{o(i.throw(e))}catch(e){l(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,r)}o((i=i.apply(e,t||[])).next())}))}a.d(t,{gn:()=>i,mG:()=>n}),Object.create,Object.create}}]);