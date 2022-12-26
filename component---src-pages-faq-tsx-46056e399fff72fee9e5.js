"use strict";(self.webpackChunkfruki=self.webpackChunkfruki||[]).push([[288],{3508:function(e,t,a){var o=a(4836);t.Z=void 0;var n=o(a(4938)),r=a(5893),i=(0,n.default)((0,r.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i},7103:function(e,t,a){a.d(t,{J:function(){return r}});var o=a(1225),n=a(2097);function r(){return(0,o.Z)((0,n.Z)().breakpoints.up("md"))}},2151:function(e,t,a){a.r(t),a.d(t,{default:function(){return ze}});var o=a(3508),n=a(2097),r=a(8720),i=a(1647),s=a(976),l=a(5401),d=a(7462),c=a(3366),u=a(7294),p=a(6010),m=a(4780),h=a(8884),g=a(1588),v=a(4867);function b(e){return(0,v.Z)("MuiPagination",e)}(0,g.Z)("MuiPagination",["root","ul","outlined","text"]);var x=a(8925);const f=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var C=a(1796);function Z(e){return(0,v.Z)("MuiPaginationItem",e)}var y=(0,g.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),w=a(2384),E=a(6622),R=a(41),k=a(5893),M=(0,R.Z)((0,k.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),S=(0,R.Z)((0,k.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),$=(0,R.Z)((0,k.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),L=(0,R.Z)((0,k.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),z=a(1719);const P=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],N=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,E.Z)(a.size)}`],"text"===a.variant&&t[`text${(0,E.Z)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,E.Z)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},B=(0,z.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:N})((({theme:e,ownerState:t})=>(0,d.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${y.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"small"===t.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)}))),I=(0,z.ZP)(w.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:N})((({theme:e,ownerState:t})=>(0,d.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${y.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${y.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,C.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${y.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,C.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${y.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},"small"===t.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)},"rounded"===t.shape&&{borderRadius:(e.vars||e).shape.borderRadius})),(({theme:e,ownerState:t})=>(0,d.Z)({},"text"===t.variant&&{[`&.${y.selected}`]:(0,d.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${y.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},"outlined"===t.variant&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${y.selected}`]:(0,d.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:(0,C.Fq)(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:(0,C.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,C.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,C.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${y.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})}))),A=(0,z.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((({theme:e,ownerState:t})=>(0,d.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(22)})));var j=u.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiPaginationItem"}),{className:o,color:r="standard",component:i,components:s={},disabled:l=!1,page:u,selected:g=!1,shape:v="circular",size:b="medium",slots:x={},type:f="page",variant:C="text"}=a,y=(0,c.Z)(a,P),w=(0,d.Z)({},a,{color:r,disabled:l,selected:g,shape:v,size:b,type:f,variant:C}),R=(0,n.Z)(),z=(e=>{const{classes:t,color:a,disabled:o,selected:n,size:r,shape:i,type:s,variant:l}=e,d={root:["root",`size${(0,E.Z)(r)}`,l,i,"standard"!==a&&`${l}${(0,E.Z)(a)}`,o&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,m.Z)(d,Z,t)})(w),N=("rtl"===R.direction?{previous:x.next||s.next||L,next:x.previous||s.previous||$,last:x.first||s.first||M,first:x.last||s.last||S}:{previous:x.previous||s.previous||$,next:x.next||s.next||L,first:x.first||s.first||M,last:x.last||s.last||S})[f];return"start-ellipsis"===f||"end-ellipsis"===f?(0,k.jsx)(B,{ref:t,ownerState:w,className:(0,p.Z)(z.root,o),children:"…"}):(0,k.jsxs)(I,(0,d.Z)({ref:t,ownerState:w,component:i,disabled:l,className:(0,p.Z)(z.root,o)},y,{children:["page"===f&&u,N?(0,k.jsx)(A,{as:N,ownerState:w,className:z.icon}):null]}))}));const T=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],W=(0,z.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),O=(0,z.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function q(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}var V=u.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiPagination"}),{boundaryCount:o=1,className:n,color:r="standard",count:i=1,defaultPage:s=1,disabled:l=!1,getItemAriaLabel:u=q,hideNextButton:g=!1,hidePrevButton:v=!1,renderItem:C=(e=>(0,k.jsx)(j,(0,d.Z)({},e))),shape:Z="circular",showFirstButton:y=!1,showLastButton:w=!1,siblingCount:E=1,size:R="medium",variant:M="text"}=a,S=(0,c.Z)(a,T),{items:$}=function(e={}){const{boundaryCount:t=1,componentName:a="usePagination",count:o=1,defaultPage:n=1,disabled:r=!1,hideNextButton:i=!1,hidePrevButton:s=!1,onChange:l,page:u,showFirstButton:p=!1,showLastButton:m=!1,siblingCount:h=1}=e,g=(0,c.Z)(e,f),[v,b]=(0,x.Z)({controlled:u,default:n,name:a,state:"page"}),C=(e,t)=>{u||b(t),l&&l(e,t)},Z=(e,t)=>{const a=t-e+1;return Array.from({length:a},((t,a)=>e+a))},y=Z(1,Math.min(t,o)),w=Z(Math.max(o-t+1,t+1),o),E=Math.max(Math.min(v-h,o-t-2*h-1),t+2),R=Math.min(Math.max(v+h,t+2*h+2),w.length>0?w[0]-2:o-1),k=[...p?["first"]:[],...s?[]:["previous"],...y,...E>t+2?["start-ellipsis"]:t+1<o-t?[t+1]:[],...Z(E,R),...R<o-t-1?["end-ellipsis"]:o-t>t?[o-t]:[],...w,...i?[]:["next"],...m?["last"]:[]],M=e=>{switch(e){case"first":return 1;case"previous":return v-1;case"next":return v+1;case"last":return o;default:return null}},S=k.map((e=>"number"==typeof e?{onClick:t=>{C(t,e)},type:"page",page:e,selected:e===v,disabled:r,"aria-current":e===v?"true":void 0}:{onClick:t=>{C(t,M(e))},type:e,page:M(e),selected:!1,disabled:r||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?v>=o:v<=1)}));return(0,d.Z)({items:S},g)}((0,d.Z)({},a,{componentName:"Pagination"})),L=(0,d.Z)({},a,{boundaryCount:o,color:r,count:i,defaultPage:s,disabled:l,getItemAriaLabel:u,hideNextButton:g,hidePrevButton:v,renderItem:C,shape:Z,showFirstButton:y,showLastButton:w,siblingCount:E,size:R,variant:M}),z=(e=>{const{classes:t,variant:a}=e,o={root:["root",a],ul:["ul"]};return(0,m.Z)(o,b,t)})(L);return(0,k.jsx)(W,(0,d.Z)({"aria-label":"pagination navigation",className:(0,p.Z)(z.root,n),ownerState:L,ref:t},S,{children:(0,k.jsx)(O,{className:z.ul,ownerState:L,children:$.map(((e,t)=>(0,k.jsx)("li",{children:C((0,d.Z)({},e,{color:r,"aria-label":u(e.type,e.page,e.selected),shape:Z,size:R,variant:M}))},t)))})}))})),F=(a(6607),a(8052)),G=a(3204),D=a(3566),H=a(4771);function J(e){return(0,v.Z)("MuiCollapse",e)}(0,g.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Q=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],U=(0,z.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.orientation],"entered"===a.state&&t.entered,"exited"===a.state&&!a.in&&"0px"===a.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,d.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,d.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),_=(0,z.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,d.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),K=(0,z.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,d.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),X=u.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiCollapse"}),{addEndListener:o,children:r,className:i,collapsedSize:s="0px",component:l,easing:g,in:v,onEnter:b,onEntered:x,onEntering:f,onExit:C,onExited:Z,onExiting:y,orientation:w="vertical",style:E,timeout:R=G.x9.standard,TransitionComponent:M=F.ZP}=a,S=(0,c.Z)(a,Q),$=(0,d.Z)({},a,{orientation:w,collapsedSize:s}),L=(e=>{const{orientation:t,classes:a}=e,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,m.Z)(o,J,a)})($),z=(0,n.Z)(),P=u.useRef(),N=u.useRef(null),B=u.useRef(),I="number"==typeof s?`${s}px`:s,A="horizontal"===w,j=A?"width":"height";u.useEffect((()=>()=>{clearTimeout(P.current)}),[]);const T=u.useRef(null),W=(0,H.Z)(t,T),O=e=>t=>{if(e){const a=T.current;void 0===t?e(a):e(a,t)}},q=()=>N.current?N.current[A?"clientWidth":"clientHeight"]:0,V=O(((e,t)=>{N.current&&A&&(N.current.style.position="absolute"),e.style[j]=I,b&&b(e,t)})),X=O(((e,t)=>{const a=q();N.current&&A&&(N.current.style.position="");const{duration:o,easing:n}=(0,D.C)({style:E,timeout:R,easing:g},{mode:"enter"});if("auto"===R){const t=z.transitions.getAutoHeightDuration(a);e.style.transitionDuration=`${t}ms`,B.current=t}else e.style.transitionDuration="string"==typeof o?o:`${o}ms`;e.style[j]=`${a}px`,e.style.transitionTimingFunction=n,f&&f(e,t)})),Y=O(((e,t)=>{e.style[j]="auto",x&&x(e,t)})),ee=O((e=>{e.style[j]=`${q()}px`,C&&C(e)})),te=O(Z),ae=O((e=>{const t=q(),{duration:a,easing:o}=(0,D.C)({style:E,timeout:R,easing:g},{mode:"exit"});if("auto"===R){const a=z.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${a}ms`,B.current=a}else e.style.transitionDuration="string"==typeof a?a:`${a}ms`;e.style[j]=I,e.style.transitionTimingFunction=o,y&&y(e)}));return(0,k.jsx)(M,(0,d.Z)({in:v,onEnter:V,onEntered:Y,onEntering:X,onExit:ee,onExited:te,onExiting:ae,addEndListener:e=>{"auto"===R&&(P.current=setTimeout(e,B.current||0)),o&&o(T.current,e)},nodeRef:T,timeout:"auto"===R?null:R},S,{children:(e,t)=>(0,k.jsx)(U,(0,d.Z)({as:l,className:(0,p.Z)(L.root,i,{entered:L.entered,exited:!v&&"0px"===I&&L.hidden}[e]),style:(0,d.Z)({[A?"minWidth":"minHeight"]:I},E),ownerState:(0,d.Z)({},$,{state:e}),ref:W},t,{children:(0,k.jsx)(_,{ownerState:(0,d.Z)({},$,{state:e}),className:L.wrapper,ref:N,children:(0,k.jsx)(K,{ownerState:(0,d.Z)({},$,{state:e}),className:L.wrapperInner,children:r})})}))}))}));X.muiSupportAuto=!0;var Y=X,ee=a(5722);var te=u.createContext({}),ae=a(2293);function oe(e){return(0,v.Z)("MuiAccordion",e)}var ne=(0,g.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);const re=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],ie=(0,z.ZP)(ee.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{[`& .${ne.region}`]:t.region},t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${ne.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${ne.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:t})=>(0,d.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${ne.expanded}`]:{margin:"16px 0"}})));var se=u.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiAccordion"}),{children:o,className:n,defaultExpanded:r=!1,disabled:i=!1,disableGutters:s=!1,expanded:l,onChange:g,square:v=!1,TransitionComponent:b=Y,TransitionProps:x}=a,f=(0,c.Z)(a,re),[C,Z]=(0,ae.Z)({controlled:l,default:r,name:"Accordion",state:"expanded"}),y=u.useCallback((e=>{Z(!C),g&&g(e,!C)}),[C,g,Z]),[w,...E]=u.Children.toArray(o),R=u.useMemo((()=>({expanded:C,disabled:i,disableGutters:s,toggle:y})),[C,i,s,y]),M=(0,d.Z)({},a,{square:v,disabled:i,disableGutters:s,expanded:C}),S=(e=>{const{classes:t,square:a,expanded:o,disabled:n,disableGutters:r}=e,i={root:["root",!a&&"rounded",o&&"expanded",n&&"disabled",!r&&"gutters"],region:["region"]};return(0,m.Z)(i,oe,t)})(M);return(0,k.jsxs)(ie,(0,d.Z)({className:(0,p.Z)(S.root,n),ref:t,ownerState:M,square:v},f,{children:[(0,k.jsx)(te.Provider,{value:R,children:w}),(0,k.jsx)(b,(0,d.Z)({in:C,timeout:"auto"},x,{children:(0,k.jsx)("div",{"aria-labelledby":w.props.id,id:w.props["aria-controls"],role:"region",className:S.region,children:E})}))]}))}));function le(e){return(0,v.Z)("MuiAccordionDetails",e)}(0,g.Z)("MuiAccordionDetails",["root"]);const de=["className"],ce=(0,z.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)})));var ue=u.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiAccordionDetails"}),{className:o}=a,n=(0,c.Z)(a,de),r=a,i=(e=>{const{classes:t}=e;return(0,m.Z)({root:["root"]},le,t)})(r);return(0,k.jsx)(ce,(0,d.Z)({className:(0,p.Z)(i.root,o),ref:t,ownerState:r},n))}));function pe(e){return(0,v.Z)("MuiAccordionSummary",e)}var me=(0,g.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);const he=["children","className","expandIcon","focusVisibleClassName","onClick"],ge=(0,z.ZP)(w.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const a={duration:e.transitions.duration.shortest};return(0,d.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],a),[`&.${me.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${me.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${me.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${me.expanded}`]:{minHeight:64}})})),ve=(0,z.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,d.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${me.expanded}`]:{margin:"20px 0"}}))),be=(0,z.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${me.expanded}`]:{transform:"rotate(180deg)"}})));var xe=u.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiAccordionSummary"}),{children:o,className:n,expandIcon:r,focusVisibleClassName:i,onClick:s}=a,l=(0,c.Z)(a,he),{disabled:g=!1,disableGutters:v,expanded:b,toggle:x}=u.useContext(te),f=(0,d.Z)({},a,{expanded:b,disabled:g,disableGutters:v}),C=(e=>{const{classes:t,expanded:a,disabled:o,disableGutters:n}=e,r={root:["root",a&&"expanded",o&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return(0,m.Z)(r,pe,t)})(f);return(0,k.jsxs)(ge,(0,d.Z)({focusRipple:!1,disableRipple:!0,disabled:g,component:"div","aria-expanded":b,className:(0,p.Z)(C.root,n),focusVisibleClassName:(0,p.Z)(C.focusVisible,i),onClick:e=>{x&&x(e),s&&s(e)},ref:t,ownerState:f},l,{children:[(0,k.jsx)(ve,{className:C.content,ownerState:f,children:o}),r&&(0,k.jsx)(be,{className:C.expandIconWrapper,ownerState:f,children:r})]}))})),fe=a(1193),Ce=a(6570),Ze=a(5305),ye=a.p+"static/img_9-f6f67bd8705a79166761883319804c91.png",we=a(5564),Ee=a(7103);const Re=e=>u.createElement("svg",Object.assign({width:164,height:353,viewBox:"0 0 164 353",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"M38.148 126.221L480.369 -316L669.178 -127.191L226.957 315.03C176.077 365.909 92.3995 364.768 40.114 312.483C-11.5905 260.778 -12.7313 177.1 38.148 126.221Z",fill:"#034638"})),ke=e=>u.createElement("svg",Object.assign({width:417,height:292,viewBox:"0 0 417 292",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"M494.065 -11.785L-98.1504 -604L-351 -351.15L241.215 241.065C309.352 309.201 421.412 307.674 491.432 237.654C560.674 168.412 562.201 56.3517 494.065 -11.785Z",fill:"#034638"}));function Me(){const e=(0,Ee.J)();return u.createElement(we.T5,{sx:{background:"#5F99AF",flexDirection:{xs:"column",sm:"column",md:"row"}}},u.createElement(we.P4,{sx:{backgroundImage:"url("+ye+")",backgroundSize:"cover",backgroundPosition:"center",borderWidth:2,borderBottomRightRadius:{xs:240,sm:240,md:440}}}),u.createElement(we.P4,{padding:"right",sx:{zIndex:3}},u.createElement(Re,{style:{display:e?"none":"block",position:"absolute",right:0,zIndex:-1}}),u.createElement(ke,{style:{display:e?"block":"none",position:"absolute",top:0,right:0}}),u.createElement(i.Z,{variant:e?"h1":"h5",sx:{fontWeight:700,zIndex:2},color:"secondary.contrastText"},"Precisa de ajuda?"),u.createElement(i.Z,{color:"secondary.contrastText",variant:"body1",fontSize:20},"Se você está com alguma dúvida, estamos aqui para ajudar! Escolha seu canal preferido para podermos atender você da melhor forma."," "),u.createElement(r.Z,{sx:{"& > div:nth-of-type(n + 2)":{mt:2}}},u.createElement(r.Z,null,u.createElement(Ze.Z,{variant:"outlined",startIcon:u.createElement("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.03539 17.1017L5.22832 17.4056L4.40963 20.371L7.47594 19.5733L7.77188 19.7474C9.01543 20.4795 10.4414 20.867 11.8953 20.8677H11.8985C16.3638 20.8677 19.998 17.2624 20 12.8316C20.0005 10.6841 19.1588 8.66497 17.6292 7.14606C16.0995 5.6273 14.0657 4.79022 11.9016 4.78931C7.43281 4.78931 3.79864 8.39417 3.79688 12.825C3.79626 14.3434 4.22435 15.8221 5.03539 17.1017ZM8.91431 8.36504C9.08782 8.37209 9.27983 8.38021 9.46229 8.78259C9.5867 9.05708 9.79584 9.56836 9.96286 9.97663C10.0866 10.279 10.1872 10.525 10.2132 10.5764C10.2739 10.6973 10.3146 10.8384 10.2333 10.9997C10.2211 11.024 10.2098 11.047 10.199 11.0689C10.1381 11.1922 10.0933 11.2829 9.99016 11.4027C9.94934 11.45 9.90713 11.5009 9.86493 11.5518C9.78115 11.6529 9.69741 11.7539 9.62464 11.826C9.50251 11.9464 9.37565 12.0773 9.51773 12.3189C9.65981 12.5609 10.1486 13.3519 10.8726 13.9925C11.6505 14.6806 12.3261 14.9716 12.6693 15.1194C12.7367 15.1484 12.7913 15.1719 12.8313 15.1918C13.0747 15.3127 13.2169 15.2926 13.3589 15.131C13.5011 14.9699 13.9675 14.4257 14.1299 14.1841C14.2923 13.9421 14.4546 13.9823 14.6779 14.0629C14.9012 14.1436 16.0985 14.7282 16.3422 14.8491C16.3896 14.8726 16.4339 14.8938 16.475 14.9135C16.6451 14.9949 16.76 15.0499 16.809 15.131C16.8699 15.2321 16.8699 15.7157 16.6669 16.28C16.464 16.8443 15.4696 17.3885 15.023 17.4287C14.9801 17.4326 14.9374 17.4375 14.8935 17.4427C14.4808 17.4909 13.9601 17.5518 12.1004 16.8242C9.81291 15.9291 8.30453 13.711 7.99252 13.2523C7.96688 13.2146 7.94932 13.1887 7.94007 13.1765L7.93743 13.173C7.80634 12.9992 6.94566 11.8578 6.94566 10.6771C6.94566 9.56433 7.49683 8.98098 7.75051 8.71249C7.76787 8.69411 7.78384 8.67721 7.79815 8.66172C8.02121 8.42005 8.28511 8.35942 8.44753 8.35942C8.45813 8.35942 8.46872 8.35942 8.47931 8.35942C8.63092 8.35939 8.7815 8.35936 8.91431 8.36504Z",fill:"#41B02A"})),sx:{whiteSpace:"nowrap",minWidth:"auto",background:"white",":hover":{background:"white"}},size:"large"},"Mandar mensagem")),u.createElement(r.Z,null,u.createElement(Ze.Z,{sx:{whiteSpace:"nowrap",minWidth:"auto",background:"white",":hover":{background:"white"}},startIcon:u.createElement("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M6.25 6.49854C5.2835 6.49854 4.5 7.28204 4.5 8.24854C4.5 12.0195 5.60803 15.1047 7.75092 17.2476C9.89381 19.3905 12.9791 20.4985 16.75 20.4985C17.7165 20.4985 18.5 19.715 18.5 18.7485V15.7485C18.5 15.0496 17.9411 14.5239 17.2983 14.4829C16.5604 14.4358 15.6579 14.2872 15.0522 14.0599C14.4701 13.8414 13.6388 14.021 13.3239 14.7556L13.0199 15.465C12.1644 15.3463 11.3477 14.9191 10.7082 14.3024C10.0657 13.6828 9.64768 12.9172 9.53245 12.1653L10.4071 11.6655C11.0502 11.298 11.1698 10.5343 10.9579 9.99626C10.7207 9.39401 10.5643 8.46207 10.5157 7.70026C10.4748 7.0574 9.949 6.49854 9.25009 6.49854L6.25 6.49854Z",fill:"#41B02A"})),variant:"outlined",color:"primary",size:"large"},"Ligar agora")),u.createElement(r.Z,null,u.createElement(Ze.Z,{startIcon:u.createElement("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 9.24854C4.5 7.72975 5.73122 6.49854 7.25 6.49854H16.75C18.2688 6.49854 19.5 7.72975 19.5 9.24854V15.2485C19.5 16.7673 18.2688 17.9985 16.75 17.9985H12.7515C12.4487 17.9985 12.1562 18.1084 11.9283 18.3078L8.49388 21.313C8.27241 21.5068 7.95807 21.5531 7.69009 21.4315C7.4221 21.3099 7.25 21.0428 7.25 20.7485V18.6235C7.25 18.2784 6.97018 17.9985 6.625 17.9985C5.4514 17.9985 4.5 17.0471 4.5 15.8735V9.24854ZM7.5 10.7485C7.5 10.3343 7.83579 9.99854 8.25 9.99854H14.25C14.6642 9.99854 15 10.3343 15 10.7485C15 11.1627 14.6642 11.4985 14.25 11.4985H8.25C7.83579 11.4985 7.5 11.1627 7.5 10.7485ZM7.5 13.7485C7.5 13.3343 7.83579 12.9985 8.25 12.9985H11.25C11.6642 12.9985 12 13.3343 12 13.7485C12 14.1627 11.6642 14.4985 11.25 14.4985H8.25C7.83579 14.4985 7.5 14.1627 7.5 13.7485Z",fill:"#41B02A"})),sx:{whiteSpace:"nowrap",minWidth:"auto",background:"white",":hover":{background:"white"}},variant:"outlined",color:"primary",size:"large"},"Conversar no chat online")),u.createElement(Ze.Z,{variant:"text",startIcon:u.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 15C12.4142 15 12.75 15.3358 12.75 15.75V15.76C12.75 16.1742 12.4142 16.51 12 16.51C11.5858 16.51 11.25 16.1742 11.25 15.76V15.75C11.25 15.3358 11.5858 15 12 15ZM12.5853 7.55765C12.0033 7.44189 11.4001 7.5013 10.8519 7.72836C10.3038 7.95543 9.83524 8.33994 9.50559 8.83329C9.17595 9.32664 9 9.90666 9 10.5C9 10.9142 9.33579 11.25 9.75 11.25C10.1642 11.25 10.5 10.9142 10.5 10.5C10.5 10.2033 10.588 9.91332 10.7528 9.66665C10.9176 9.41997 11.1519 9.22771 11.426 9.11418C11.7001 9.00065 12.0017 8.97095 12.2926 9.02882C12.5836 9.0867 12.8509 9.22956 13.0607 9.43934C13.2704 9.64912 13.4133 9.91639 13.4712 10.2074C13.5291 10.4983 13.4993 10.7999 13.3858 11.074C13.2723 11.3481 13.08 11.5824 12.8334 11.7472C12.5867 11.912 12.2967 12 12 12C11.8011 12 11.6103 12.079 11.4697 12.2197C11.329 12.3603 11.25 12.5511 11.25 12.75L11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.3596 14 12.6602 13.7469 12.7331 13.409C13.064 13.3257 13.38 13.186 13.6667 12.9944C14.1601 12.6648 14.5446 12.1962 14.7716 11.6481C14.9987 11.0999 15.0581 10.4967 14.9424 9.91473C14.8266 9.33279 14.5409 8.79824 14.1213 8.37868C13.7018 7.95912 13.1672 7.6734 12.5853 7.55765Z",fill:"white"})),sx:()=>({mt:4,color:"white"})},"Ver as dúvidas frequentes"))))}var Se=a(2281),$e=a(8235),Le=a(7434);var ze=e=>{let{data:t}=e;const[a,d]=u.useState(!1),[c,p]=u.useState(""),m=t.faqs.edges.map((e=>({body:e.node.body,...e.node.frontmatter}))),h=(0,n.Z)(),g="40px !important",{0:v,1:b}=(0,u.useState)(1);let x=m.filter((e=>{var t;return""===c||(null==e||null===(t=e.question)||void 0===t?void 0:t.toLocaleLowerCase().includes(c.toLocaleLowerCase()))}));const f=Math.ceil((null==x?void 0:x.length)/10);return u.createElement(u.Fragment,null,u.createElement(Ce.D,null),u.createElement(we.Tw,null,u.createElement(r.Z,{sx:{...fe.b,background:"#034638",height:350}},u.createElement(r.Z,{display:"flex",flexDirection:"column",sx:{minWidth:"40vw",p:4}},u.createElement(i.Z,{variant:"h6",fontWeight:700,align:"center",color:"primary.contrastText"},"FAQ"),u.createElement(i.Z,{variant:"h3",align:"center",color:"secondary"},"Como podemos ajudar?"),u.createElement(s.Z,{onChange:e=>{p(e.target.value)},InputProps:{endAdornment:u.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M10.5 4.5C7.18629 4.5 4.5 7.18629 4.5 10.5C4.5 13.8137 7.18629 16.5 10.5 16.5C11.8865 16.5 13.1632 16.0297 14.1792 15.2399L18.2197 19.2803C18.5126 19.5732 18.9874 19.5732 19.2803 19.2803C19.5732 18.9874 19.5732 18.5126 19.2803 18.2197L15.2399 14.1792C16.0297 13.1632 16.5 11.8865 16.5 10.5C16.5 7.18629 13.8137 4.5 10.5 4.5Z",fill:"#41B02A",stroke:"#41B02A",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},sx:{background:"white",borderRadius:10,marginTop:5,"& fieldset":{borderRadius:0,borderColor:"transparent"}},placeholder:"Digite sua dúvida",InputLabelProps:{shrink:!1},variant:"outlined"}))),u.createElement(l.Z,{sx:{py:8}},u.createElement(i.Z,{sx:{pb:5},align:"center",color:"primary",variant:"h4"},"Dúvidas Frequentes"),u.createElement("div",null,x.slice(10*(v-1),10*v).map((e=>{const t=a===(null==e?void 0:e.question);return u.createElement(se,{sx:{"&::before":{height:0},borderRadius:g,mb:2},variant:"outlined",expanded:t,onChange:(t,a)=>{d(!!a&&((null==e?void 0:e.question)||""))}},u.createElement(xe,{expandIcon:u.createElement(o.Z,null),"aria-controls":"panel1bh-content",id:"panel1bh-header",sx:{borderTopLeftRadius:g,borderTopRightRadius:g,color:t?h.palette.primary.contrastText:"unset",background:t?h.palette.primary.main:"unset"}},u.createElement(i.Z,{fontWeight:700},null==e?void 0:e.question)),u.createElement(ue,null,u.createElement(Le.D,null,(null==e?void 0:e.body)||"")))}))),u.createElement(r.Z,{sx:{...fe.b,py:4}},u.createElement(V,{page:v,count:f,onChange:(e,t)=>{b(t)}}))),u.createElement(Me,null),u.createElement(Se.i,{brands:(0,$e.t)(null==t?void 0:t.brands)})))}}}]);
//# sourceMappingURL=component---src-pages-faq-tsx-46056e399fff72fee9e5.js.map