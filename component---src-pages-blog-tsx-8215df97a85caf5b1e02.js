"use strict";(self.webpackChunkfruki=self.webpackChunkfruki||[]).push([[410],{18720:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(87462),a=n(63366),r=n(67294),i=n(86010),l=n(32126),s=n(86523),c=n(39707),d=n(96682),u=n(85893);const m=["className","component"];var v=n(37078);const p=function(e={}){const{defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:v,styleFunctionSx:p=s.Z}=e,f=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(p);return r.forwardRef((function(e,r){const l=(0,d.Z)(t),s=(0,c.Z)(e),{className:p,component:x="div"}=s,h=(0,a.Z)(s,m);return(0,u.jsx)(f,(0,o.Z)({as:x,ref:r,className:(0,i.Z)(p,v?v(n):n),theme:l},h))}))}({defaultTheme:(0,n(41487).Z)(),defaultClassName:"MuiBox-root",generateClassName:v.Z.generate});var f=p},48120:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(63366),a=n(87462),r=n(67294),i=n(86010),l=n(28320),s=n(34867),c=n(94780),d=n(29628),u=n(13264),m=n(22161),v=n(85893);const p=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,m.Z)(),x=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),h=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:f});var g=n(36622),Z=n(81719),b=n(78884);const w=function(e={}){const{createStyledComponent:t=x,useThemeProps:n=h,componentName:d="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const o=n,a=e.breakpoints.values[o];return 0!==a&&(t[e.breakpoints.up(o)]={maxWidth:`${a}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),m=r.forwardRef((function(e,t){const r=n(e),{className:m,component:f="div",disableGutters:x=!1,fixed:h=!1,maxWidth:g="lg"}=r,Z=(0,o.Z)(r,p),b=(0,a.Z)({},r,{component:f,disableGutters:x,fixed:h,maxWidth:g}),w=((e,t)=>{const{classes:n,fixed:o,disableGutters:a,maxWidth:r}=e,i={root:["root",r&&`maxWidth${(0,l.Z)(String(r))}`,o&&"fixed",a&&"disableGutters"]};return(0,c.Z)(i,(e=>(0,s.Z)(t,e)),n)})(b,d);return(0,v.jsx)(u,(0,a.Z)({as:f,ownerState:b,className:(0,i.Z)(w.root,m),ref:t},Z))}));return m}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,g.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,b.Z)({props:e,name:"MuiContainer"})});var C=w},28881:function(e,t,n){n.d(t,{R:function(){return p}});var o=n(63366),a=n(87462),r=n(67294),i=n(86010),l=n(94780),s=n(41796),c=n(81719),d=n(78884),u=n(7892),m=n(85893);const v=["className","component","elevation","square","variant"],p=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},f=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,a.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",p(t.elevation))}, ${(0,s.Fq)("#fff",p(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),x=r.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiPaper"}),{className:r,component:s="div",elevation:c=1,square:p=!1,variant:x="elevation"}=n,h=(0,o.Z)(n,v),g=(0,a.Z)({},n,{component:s,elevation:c,square:p,variant:x}),Z=(e=>{const{square:t,elevation:n,variant:o,classes:a}=e,r={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${n}`]};return(0,l.Z)(r,u.J,a)})(g);return(0,m.jsx)(f,(0,a.Z)({as:s,ownerState:g,className:(0,i.Z)(Z.root,r),ref:t},h))}));t.Z=x},7892:function(e,t,n){n.d(t,{J:function(){return r}});var o=n(1588),a=n(34867);function r(e){return(0,a.Z)("MuiPaper",e)}const i=(0,o.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);t.Z=i},9144:function(e,t,n){var o=n(63366),a=n(87462),r=n(67294),i=n(95408),l=n(62605),s=n(39707),c=n(59766),d=n(81719),u=n(78884),m=n(85893);const v=["component","direction","spacing","divider","children"];function p(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,a)=>(e.push(o),a<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${a}`})),e)),[])}const f=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,a.Z)({display:"flex",flexDirection:"column"},(0,i.k9)({theme:t},(0,i.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,l.hB)(t),a=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),r=(0,i.P$)({values:e.direction,base:a}),s=(0,i.P$)({values:e.spacing,base:a});"object"==typeof r&&Object.keys(r).forEach(((e,t,n)=>{if(!r[e]){const o=t>0?r[n[t-1]]:"column";r[e]=o}}));const d=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${a=n?r[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,l.NA)(o,t)}};var a};n=(0,c.Z)(n,(0,i.k9)({theme:t},s,d))}return n=(0,i.dt)(t.breakpoints,n),n})),x=r.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiStack"}),r=(0,s.Z)(n),{component:i="div",direction:l="column",spacing:c=0,divider:d,children:x}=r,h=(0,o.Z)(r,v),g={direction:l,spacing:c};return(0,m.jsx)(f,(0,a.Z)({as:i,ownerState:g,ref:t},h,{children:d?p(x,d):x}))}));t.Z=x},62097:function(e,t,n){n.d(t,{Z:function(){return r}});n(67294);var o=n(96682),a=n(25165);function r(){return(0,o.Z)(a.Z)}},13264:function(e,t,n){const o=(0,n(32807).ZP)();t.Z=o},30489:function(e,t,n){n.d(t,{W:function(){return p}});var o=n(18720),a=n(81138),r=n(48120),i=n(62097),l=n(28881),s=n(67294);function c(){return s.createElement("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8Z",fill:"#6AA156"}),s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.14645 3.14645C9.34171 2.95118 9.65829 2.95118 9.85355 3.14645L14.3536 7.64645C14.5488 7.84171 14.5488 8.15829 14.3536 8.35355L9.85355 12.8536C9.65829 13.0488 9.34171 13.0488 9.14645 12.8536C8.95118 12.6583 8.95118 12.3417 9.14645 12.1464L13.2929 8L9.14645 3.85355C8.95118 3.65829 8.95118 3.34171 9.14645 3.14645Z",fill:"#6AA156"}))}var d=n(48861);function u(e){var t;let{onClick:n,post:{date:r,description:u,title:m}}=e;const v=(0,i.Z)();return s.createElement(l.Z,{sx:{maxHeight:384,height:384,width:272,minWidth:272,background:v.palette.grey[50],flexBasis:"20%",color:"black",padding:2,"&:last-child":{marginRight:5},display:"flex",justifyContent:"space-between",flexDirection:"column"}},s.createElement(o.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"}},s.createElement(o.Z,{display:"flex"},s.createElement(o.Z,{sx:{display:"flex",border:"1px solid black",borderRadius:10,height:32,px:1}},s.createElement(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"}},s.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.91667 4.37476C7.91667 4.02958 7.63684 3.74976 7.29167 3.74976C6.94649 3.74976 6.66667 4.02958 6.66667 4.37476V5.62476H6.04167C4.77601 5.62476 3.75 6.65077 3.75 7.91642V13.9581C3.75 14.5671 3.98753 15.1206 4.375 15.531V15.6248H4.46878C4.8792 16.0122 5.43269 16.2498 6.04167 16.2498H13.9583C14.5673 16.2498 15.1208 16.0122 15.5312 15.6248H15.625V15.531C16.0125 15.1206 16.25 14.5671 16.25 13.9581V7.91642C16.25 6.65077 15.224 5.62476 13.9583 5.62476H13.3333V4.37476C13.3333 4.02958 13.0535 3.74976 12.7083 3.74976C12.3632 3.74976 12.0833 4.02958 12.0833 4.37476V5.62476H7.91667V4.37476ZM13.9583 6.87476C14.5336 6.87476 15 7.34113 15 7.91642V8.33309H5V7.91642C5 7.34113 5.46637 6.87476 6.04167 6.87476H13.9583Z",fill:"#5F99AF"}))),s.createElement(o.Z,{sx:{display:"flex",justifyContent:"flex-start",alignItems:"center"}},s.createElement(a.Z,{color:"primary",variant:"bodySmall",sx:{pl:1,fontSize:14,lineHeight:"14px"}},null===(t=new Date(r||""))||void 0===t?void 0:t.toLocaleDateString())))),s.createElement(a.Z,{color:"primary",variant:"bodyLarge",sx:{marginY:2,fontWeight:800}},m),s.createElement(a.Z,{color:"grey.600",variant:"bodySmall",sx:{marginBottom:2}},u)),s.createElement(o.Z,null,s.createElement(d.zx,{color:"secondary",endIcon:s.createElement(c,null),variant:"text",onClick:n},"Ler Mais")))}var m=n(28232),v=n(83643);function p(e){let{posts:t}=e;return s.createElement(o.Z,{sx:{pt:8,py:{sm:4,md:8},position:"relative",pl:"0px !important"}},s.createElement("svg",{style:{position:"absolute",top:80,zIndex:-1},width:"237",height:"735",viewBox:"0 0 237 735",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{d:"M170.833 321.805L-241.604 734.242L-252.8 723.046C-338.297 637.549 -336.798 498.644 -250.594 412.44L161.844 0.00292794L173.04 11.199C258.544 95.6707 257.553 235.084 170.833 321.805Z",fill:"#5F99AF"})),s.createElement(o.Z,{sx:{pl:2}},s.createElement(a.Z,{color:"secondary",variant:"h5",sx:{fontWeight:700},align:"center"},"Novidades sobre a Fruki"),s.createElement(a.Z,{color:"grey.600",align:"center"},"Acompanhe as nossas últimas notícias.")),s.createElement(r.Z,null,s.createElement(v.a,{sx:{overflowX:"auto",overflowY:"hidden",pt:8},direction:"row",justifyContent:"space-between",alignItems:"center",gap:4},t.map((e=>s.createElement(u,{key:e.slug,post:e,onClick:()=>(0,m.navigate)((null==e?void 0:e.slug)||"")}))))),s.createElement(o.Z,{sx:{py:5,display:"flex",justifyContent:"center",alignItems:"center"}},s.createElement(d.zx,{to:"/blog",color:"secondary",variant:"contained"},"Ver todas as notícias"," ")))}},83643:function(e,t,n){n.d(t,{a:function(){return l}});var o,a=n(81880),r=n(81719),i=n(9144);const l=(0,r.ZP)(i.Z)(o||(o=(0,a.Z)(["\n  padding-bottom: 10px;\n  scrollbar-width: none; /* Firefox */\n\n  && {\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  }\n"])))},84149:function(e,t,n){n.d(t,{i:function(){return a}});var o=n(67294);function a(e){return(0,o.useMemo)((()=>(e.edges||[]).map((e=>({...e.node.fields,...e.node.frontmatter})))),[e.edges])}},98645:function(e,t,n){n.r(t);var o=n(67294),a=n(30489),r=n(84149);t.default=e=>{const t=(0,r.i)(e.data.posts);return o.createElement(a.W,{posts:t})}},81880:function(e,t,n){function o(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-8215df97a85caf5b1e02.js.map