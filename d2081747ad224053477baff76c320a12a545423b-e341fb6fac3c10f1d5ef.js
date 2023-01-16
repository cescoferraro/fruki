(self.webpackChunkfruki=self.webpackChunkfruki||[]).push([[78],{4245:function(e,t,n){"use strict";n.d(t,{Q:function(){return h}});var r=n(41),o=n(5893),i=(0,r.Z)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),l=(0,r.Z)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight"),a=n(8720),s=n(2097),u=n(130),d=n(1193),c=n(917);function f(e){let{children:t,disabled:n,onClick:r}=e;const o=(0,s.Z)();return(0,c.tZ)(a.Z,{sx:{...d.b}},(0,c.tZ)(u.Z,{disabled:n,onClick:r,sx:{background:o.palette.secondary.main,color:"white",":hover":{background:o.palette.secondary.main,opacity:.7}}},t))}var v=n(7294),m=n(2218);const h=e=>{let{children:t,translate:n}=e;return(0,c.tZ)(a.Z,{sx:{transform:"translateY( "+(n||0)+"px)",marginBottom:(n||0)/8,px:"0px !important",pr:"0 !important"}},(0,c.tZ)(m.ScrollMenu,{scrollContainerClassName:"bannerContainer",LeftArrow:()=>{const e=(0,v.useContext)(m.VisibilityContext);return(0,c.tZ)(f,{disabled:e.isFirstItemVisible,onClick:()=>e.scrollPrev()},(0,c.tZ)(i,null))},RightArrow:()=>{const{isLastItemVisible:e,scrollNext:t}=(0,v.useContext)(m.VisibilityContext);return(0,c.tZ)(v.Fragment,null,(0,c.tZ)(f,{disabled:e,onClick:()=>t()},(0,c.tZ)(l,null)))}},t))}},3121:function(e,t,n){"use strict";n.d(t,{c:function(){return A}});var r=n(7462),o=n(3366),i=n(7294),l=n(6010),a=n(4780),s=n(1719),u=n(8884),d=n(5722),c=n(1588),f=n(4867);function v(e){return(0,f.Z)("MuiCard",e)}(0,c.Z)("MuiCard",["root"]);var m=n(5893);const h=["className","raised"],p=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var g=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=n,d=(0,o.Z)(n,h),c=(0,r.Z)({},n,{raised:s}),f=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},v,t)})(c);return(0,m.jsx)(p,(0,r.Z)({className:(0,l.Z)(f.root,i),elevation:s?8:void 0,ref:t,ownerState:c},d))}));function b(e){return(0,f.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);const C=["className","component"],y=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var w=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:i,component:s="div"}=n,d=(0,o.Z)(n,C),c=(0,r.Z)({},n,{component:s}),f=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},b,t)})(c);return(0,m.jsx)(y,(0,r.Z)({as:s,className:(0,l.Z)(f.root,i),ownerState:c,ref:t},d))})),x=n(2097),Z=n(1647),E=n(8720);function N(e){return(0,f.Z)("MuiCardActions",e)}(0,c.Z)("MuiCardActions",["root","spacing"]);const S=["disableSpacing","className"],M=(0,s.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,r.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var I=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:i=!1,className:s}=n,d=(0,o.Z)(n,S),c=(0,r.Z)({},n,{disableSpacing:i}),f=(e=>{const{classes:t,disableSpacing:n}=e,r={root:["root",!n&&"spacing"]};return(0,a.Z)(r,N,t)})(c);return(0,m.jsx)(M,(0,r.Z)({className:(0,l.Z)(f.root,s),ownerState:c,ref:t},d))})),k=n(5305),R=n(3723),V=n(917);function A(e){let{image:t,title:n,description:r,action:o="Ver mais",onClick:i}=e;return console.log(t),(0,V.tZ)(g,{sx:{width:496,ml:.5,mb:1,mr:1,borderRadius:5},tabIndex:0,onClick:i},(0,V.tZ)(R.G,{style:{height:240},alt:"",image:(0,R.c)(t)}),(0,V.tZ)(w,{sx:{height:"271px",background:(0,x.Z)().palette.primary.main,display:"flex",flexDirection:"column"}},(0,V.tZ)(Z.Z,{color:"primary.contrastText",variant:"h6",fontWeight:700},n),(0,V.tZ)(E.Z,{sx:{flexGrow:1}},r),(0,V.tZ)(I,null,(0,V.tZ)(k.Z,{variant:"text",color:"secondary",endIcon:(0,V.tZ)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,V.tZ)("path",{d:"M10.1578 8.95832L6.43306 12.6831C6.18898 12.9271 6.18898 13.3229 6.43306 13.5669C6.67714 13.811 7.07286 13.811 7.31694 13.5669L11.0417 9.84221L12.6831 11.4836C12.8618 11.6624 13.1306 11.7158 13.3642 11.6191C13.5977 11.5224 13.75 11.2945 13.75 11.0417V6.875C13.75 6.78215 13.7298 6.69403 13.6935 6.61482C13.6687 6.5607 13.6358 6.5094 13.5948 6.46275C13.5773 6.44282 13.5585 6.42402 13.5387 6.40646C13.4882 6.36183 13.4323 6.32675 13.3732 6.30121C13.2971 6.26826 13.2132 6.25 13.125 6.25H8.95835C8.70556 6.25 8.47766 6.40228 8.38093 6.63582C8.28419 6.86937 8.33766 7.13819 8.51641 7.31694L10.1578 8.95832Z",fill:"#41B02A"}))},o))))}},2218:function(e,t,n){!function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--scroll-container.rtl {\n  direction: rtl;\n}\n\n.react-horizontal-scrolling-menu--inner-wrapper {\n  display: flex;\n  overflow-y: hidden;\n}\n\n.react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.react-horizontal-scrolling-menu--header,\n.react-horizontal-scrolling-menu--footer {\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--arrow-left,\n.react-horizontal-scrolling-menu--arrow-right {\n  display: flex;\n}\n");const o="react-horizontal-scrolling-menu",i="-separator",l=`${o}--separator`,a=`${o}--item`,s=`${o}--scroll-container`,u=`${o}--wrapper`,d=`${o}--inner-wrapper`,c=`${o}--header`,f=`${o}--arrow-left`,v=`${o}--arrow-right`,m=`${o}--footer`,h="itemId",p="data-key",g="data-index";var b=Object.freeze({__proto__:null,rootClassName:o,separatorString:i,separatorClassName:l,itemClassName:a,scrollContainerClassName:s,wrapperClassName:u,innerWrapperClassName:d,headerClassName:c,arrowLeftClassName:f,arrowRightClassName:v,footerClassName:m,id:h,dataKeyAttribute:p,dataIndexAttribute:g});function C({className:e="",children:t,onScroll:n=(()=>{}),scrollRef:o}){const i=r.default.useMemo((()=>`${s} ${e}`),[e]);return r.default.createElement("div",{className:i,onScroll:n,ref:o},t)}var y,w=r.default.memo((function({className:e,id:t,index:n,refs:o}){const i=r.default.useRef(null);return o[n]=i,r.default.createElement("div",Object.assign({className:e},{[p]:t,[g]:n},{ref:i}))})),x=r.default.memo((function({children:e,className:t,id:n,index:o,refs:i}){const l=r.default.useRef(null);return i[String(o)]=l,r.default.createElement("div",Object.assign({className:t},{[p]:n,[g]:o},{ref:l}),e)}));function Z(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function E(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function N(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return E(n.overflowY,t)||E(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function S(e,t,n,r,o,i,l,a){return i<e&&l>t||i>e&&l<t?0:i<=e&&a<=n||l>=t&&a>=n?i-e-r:l>t&&a<n||i<e&&a>n?l-t+o:0}function M(e,t){var n=window,r=t.scrollMode,o=t.block,i=t.inline,l=t.boundary,a=t.skipOverflowHiddenElements,s="function"==typeof l?l:function(e){return e!==l};if(!Z(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,d=[],c=e;Z(c)&&s(c);){if((c=c.parentElement)===u){d.push(c);break}null!=c&&c===document.body&&N(c)&&!N(document.documentElement)||null!=c&&N(c,a)&&d.push(c)}for(var f=n.visualViewport?n.visualViewport.width:innerWidth,v=n.visualViewport?n.visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,p=e.getBoundingClientRect(),g=p.height,b=p.width,C=p.top,y=p.right,w=p.bottom,x=p.left,E="start"===o||"nearest"===o?C:"end"===o?w:C+g/2,M="center"===i?x+b/2:"end"===i?y:x,I=[],k=0;k<d.length;k++){var R=d[k],V=R.getBoundingClientRect(),A=V.height,W=V.width,$=V.top,j=V.right,L=V.bottom,O=V.left;if("if-needed"===r&&C>=0&&x>=0&&w<=v&&y<=f&&C>=$&&w<=L&&x>=O&&y<=j)return I;var T=getComputedStyle(R),B=parseInt(T.borderLeftWidth,10),P=parseInt(T.borderTopWidth,10),z=parseInt(T.borderRightWidth,10),H=parseInt(T.borderBottomWidth,10),D=0,F=0,_="offsetWidth"in R?R.offsetWidth-R.clientWidth-B-z:0,Y="offsetHeight"in R?R.offsetHeight-R.clientHeight-P-H:0;if(u===R)D="start"===o?E:"end"===o?E-v:"nearest"===o?S(h,h+v,v,P,H,h+E,h+E+g,g):E-v/2,F="start"===i?M:"center"===i?M-f/2:"end"===i?M-f:S(m,m+f,f,B,z,m+M,m+M+b,b),D=Math.max(0,D+h),F=Math.max(0,F+m);else{D="start"===o?E-$-P:"end"===o?E-L+H+Y:"nearest"===o?S($,L,A,P,H+Y,E,E+g,g):E-($+A/2)+Y/2,F="start"===i?M-O-B:"center"===i?M-(O+W/2)+_/2:"end"===i?M-j+z+_:S(O,j,W,B,z+_,M,M+b,b);var X=R.scrollLeft,q=R.scrollTop;E+=q-(D=Math.max(0,Math.min(q+D,R.scrollHeight-A+Y))),M+=X-(F=Math.max(0,Math.min(X+F,R.scrollWidth-W+_)))}I.push({el:R,top:D,left:F})}return I}function I(e){return e===Object(e)&&0!==Object.keys(e).length}function k(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(I(t)&&"function"==typeof t.behavior)return t.behavior(n?M(e,t):[]);if(n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:I(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,o=e.top,i=e.left;r.scroll&&n?r.scroll({top:o,left:i,behavior:t}):(r.scrollTop=o,r.scrollLeft=i)}))}(M(e,r),r.behavior)}}var R=function(){return y||(y="performance"in window?performance.now.bind(performance):Date.now),y()};function V(e){var t=R(),n=Math.min((t-e.startTime)/e.duration,1),r=e.ease(n),o=e.startX+(e.x-e.startX)*r,i=e.startY+(e.y-e.startY)*r;e.method(o,i),o!==e.x||i!==e.y?requestAnimationFrame((function(){return V(e)})):e.cb()}function A(e,t,n,r,o,i){var l,a,s,u;void 0===r&&(r=600),void 0===o&&(o=function(e){return 1+--e*e*e*e*e}),l=e,a=e.scrollLeft,s=e.scrollTop,u=function(t,n){e.scrollLeft=Math.ceil(t),e.scrollTop=Math.ceil(n)},V({scrollable:l,method:u,startTime:R(),startX:a,startY:s,x:t,y:n,duration:r,ease:o,cb:i})}var W=function(e,t){var n=t||{};return function(e){return e&&!e.behavior||"smooth"===e.behavior}(n)?k(e,{block:n.block,inline:n.inline,scrollMode:n.scrollMode,boundary:n.boundary,behavior:function(e){return Promise.all(e.reduce((function(e,t){var r=t.el,o=t.left,i=t.top,l=r.scrollLeft,a=r.scrollTop;return l===o&&a===i?e:[].concat(e,[new Promise((function(e){return A(r,o,i,n.duration,n.ease,(function(){return e({el:r,left:[l,o],top:[a,i]})}))}))])}),[]))}}):Promise.resolve(k(e,t))};function $(e,t,n,r,o,i){var l,a;const s=(null===(a=null===(l=e)||void 0===l?void 0:l.entry)||void 0===a?void 0:a.target)||e,u=t||"smooth";if(s)return i?null==s?void 0:s.scrollIntoView({behavior:u,inline:n||"end",block:r||"nearest"}):W(s,Object.assign({behavior:u,inline:n||"end",block:r||"nearest",duration:500},o))}const j=e=>document.querySelector(`[data-key='${e}']`),L=e=>document.querySelector(`[data-index='${e}']`);function O(e){return r.default.isValidElement(e)&&e||"function"==typeof e&&r.default.createElement(e,null)||null}const T=e=>e.filter((e=>!new RegExp(".*-separator$").test(e))),B=e=>{var t,n,r;return String((null===(n=null===(t=e)||void 0===t?void 0:t.props)||void 0===n?void 0:n[h])||String((null===(r=e)||void 0===r?void 0:r.key)||"").replace(/^\.\$/,""))};function P({children:e,itemClassName:t="",refs:n,separatorClassName:o=""}){const s=r.default.Children.toArray(e).filter(Boolean),u=s.length,d=r.default.useMemo((()=>`${a} ${t}`),[t]),c=r.default.useMemo((()=>`${l} ${o}`),[o]);return r.default.createElement(r.default.Fragment,null,s.map(((e,t)=>{const o=B(e),l=o+i,a=t+1===u;return[r.default.createElement(x,{className:d,id:o,key:"menuItem__"+o,refs:n,index:t},e),!a&&r.default.createElement(w,{className:c,id:l,refs:n,key:l,index:t+.1})]})))}const z="undefined"!=typeof window?r.default.useLayoutEffect:r.default.useEffect;function H({items:e,itemsChanged:t,refs:n,options:o}){const i=r.default.useRef(),[l,a]=r.default.useState([]),s=r.default.useRef(+setTimeout((()=>{}),0)),u=r.default.useCallback((t=>{e.set(function(e,t){return[...e].map((e=>{var n,r,o,i;const l=e.target,a=String(null!==(r=null===(n=null==l?void 0:l.dataset)||void 0===n?void 0:n.key)&&void 0!==r?r:"");return[a,{index:String(null!==(i=null===(o=null==l?void 0:l.dataset)||void 0===o?void 0:o.index)&&void 0!==i?i:""),key:a,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(t,o)),clearTimeout(s.current),s.current=+setTimeout((()=>requestAnimationFrame((()=>{a((t=>{const n=e.getVisible().map((e=>e[1].key));return JSON.stringify(t)!==JSON.stringify(n)?n:t}))}))),o.throttle)}),[e,o]);return z((()=>{const e=(e=>Object.values(e).map((e=>e.current)).filter(Boolean))(n),t=i.current||new IntersectionObserver(u,o);return i.current=t,e.forEach((e=>t.observe(e))),()=>{clearTimeout(s.current),t.disconnect(),i.current=void 0}}),[u,t,o,n]),{visibleElementsWithSeparators:l}}function D(e,t){const[n,o]=r.default.useState(""),i=r.default.useMemo((()=>{return t=e,r.default.Children.toArray(t).map(B).filter(Boolean);var t}),[e]);return r.default.useEffect((()=>{const e=i.filter(Boolean).join("");t.toItemsWithoutSeparators().filter((e=>!i.includes(e))).forEach((e=>{var n,r;const o=(null===(n=t.last())||void 0===n?void 0:n.key)===e&&(null===(r=t.prev(e))||void 0===r?void 0:r.key)||"";t.delete(o),t.delete(`${e}-separator`),t.delete(e)})),o(e)}),[i,t]),n}class F extends Map{toArr(){return this.sort([...this])}toItems(){return this.toArr().map((([e])=>e))}toItemsWithoutSeparators(){return T(this.toItems())}toItemsKeys(){return this.toItems()}sort(e){return e.sort((([,e],[,t])=>+e.index-+t.index))}set(e,t){return Array.isArray(e)?this.sort(e).forEach((([e,t])=>{super.set(String(e),t)})):super.set(String(e),t),this}first(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}last(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}filter(e){return this.toArr().filter(e)}find(e){return this.toArr().find(e)}findIndex(e){return this.toArr().findIndex(e)}getCurrentPos(e,t){const n=this.toArr().filter((e=>{var n;return t?!(null===(n=null==e?void 0:e[0])||void 0===n?void 0:n.includes(i)):e})),r=n.findIndex((([t,n])=>t===e||n===e));return[n,r]}prev(e,t){var n;const[r,o]=this.getCurrentPos(e,!!t);return-1!==o?null===(n=r[o-1])||void 0===n?void 0:n[1]:void 0}next(e,t){var n;const[r,o]=this.getCurrentPos(e,!!t);return-1!==o?null===(n=r[o+1])||void 0===n?void 0:n[1]:void 0}getVisible(){return this.filter((e=>e[1].visible))}getVisibleElements(){return this.filter((e=>!e[0].includes(i)&&e[1].visible))}}const _={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95],throttle:100},Y=r.default.createContext({}),X=e=>e.reduce(((e,t)=>e.concat(t).concat(`${t}-separator`)),[]).slice(0,-1);e.ScrollMenu=function({LeftArrow:e,RightArrow:t,children:n,Header:o,Footer:i,transitionDuration:l=500,transitionEase:a,transitionBehavior:s,onInit:h=(()=>{}),onUpdate:p=(()=>{}),onMouseDown:g,onMouseUp:b,onMouseMove:y,onScroll:w=(()=>{}),onWheel:x=(()=>{}),options:Z=_,scrollContainerClassName:E="",itemClassName:N="",separatorClassName:S="",wrapperClassName:M="",apiRef:I={current:{}},RTL:k,noPolyfill:R}){const V=O(e),A=O(t),W=O(o),B=O(i),z=r.default.useRef(null),[X]=r.default.useState({}),q=r.default.useMemo((()=>Object.assign(Object.assign(Object.assign({},_),Z),{root:z.current})),[Z,z.current]),J=r.default.useRef(new F).current,U=D(n,J),{visibleElementsWithSeparators:G}=H({items:J,itemsChanged:U,options:q,refs:X}),K=!!G.length,Q=r.default.useMemo((()=>function(e,t=[],n,r,o,i){var l,a;const s=T(t),u=!!(null===(l=e.first())||void 0===l?void 0:l.visible),d=!!(null===(a=e.last())||void 0===a?void 0:a.visible),c=t=>{var n;return null===(n=e.find((e=>e[1].key===String(t))))||void 0===n?void 0:n[1]},f=()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1])},v=()=>{var t,n,r,o;return e.next(null===(o=null===(r=null===(n=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===o?void 0:o[1])};return{getItemById:c,getItemElementById:j,getItemByIndex:t=>{var n;return null===(n=e.find((e=>String(e[1].index)===String(t))))||void 0===n?void 0:n[1]},getItemElementByIndex:L,getNextItem:v,getNextElement:()=>{var t,n,r,o;return e.next(null===(o=null===(r=null===(n=null===(t=e.getVisibleElements())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===o?void 0:o[1],!0)},getPrevItem:f,getPrevElement:()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisibleElements())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1],!0)},isFirstItemVisible:u,isItemVisible:e=>s.includes(String(e)),isLastItem:t=>e.last()===c(t),isLastItemVisible:d,scrollNext:(e,t,l,{duration:a,ease:s,boundary:u=(null==n?void 0:n.current)}={})=>{const d=null!=e?e:null==r?void 0:r.behavior;return $(v(),d,t||"start",l||"nearest",{boundary:u,duration:null!=a?a:null==r?void 0:r.duration,ease:null!=s?s:null==r?void 0:r.ease},o||i)},scrollPrev:(e,t,l,{duration:a,ease:s,boundary:u=(null==n?void 0:n.current)}={})=>{const d=null!=e?e:null==r?void 0:r.behavior;return $(f(),d,t||"end",l||"nearest",{boundary:u,duration:null!=a?a:null==r?void 0:r.duration,ease:null!=s?s:null==r?void 0:r.ease},o||i)},scrollToItem:(e,t,o,i,l)=>{var a,s;return $(e,null!=t?t:null==r?void 0:r.behavior,o,i,Object.assign(Object.assign({boundary:null==n?void 0:n.current},l),{duration:null!==(a=null==l?void 0:l.duration)&&void 0!==a?a:null==r?void 0:r.duration,ease:null!==(s=null==l?void 0:l.ease)&&void 0!==s?s:null==r?void 0:r.ease}))},visibleElements:s,visibleElementsWithSeparators:t,visibleItems:t,visibleItemsWithoutSeparators:s}}(J,G,z,{duration:l,ease:a,behavior:s},k,R)),[J,G,U,k,R]),ee=r.default.useCallback((()=>Object.assign(Object.assign({},Q),{initComplete:K,items:J,visibleElementsWithSeparators:G,scrollContainer:z})),[Q,K,J,G,z]),[te,ne]=r.default.useState(ee);!function({cb:e=(()=>{}),condition:t,hash:n}){r.default.useEffect((()=>{t&&e()}),[n,t])}({cb:()=>p(te),condition:function({cb:e,condition:t}){const[n,o]=r.default.useState(!1);return r.default.useEffect((()=>{t&&!n&&(o(!0),e())}),[t,n]),n}({cb:()=>h(te),condition:K}),hash:JSON.stringify(G.concat(String(null==te?void 0:te.isFirstItemVisible)).concat(String(null==te?void 0:te.isLastItemVisible)))}),r.default.useEffect((()=>ne(ee())),[ee]),I.current=te;const re=r.default.useCallback((e=>w(te,e)),[w,te]),oe=r.default.useCallback((e=>x(te,e)),[x,te]),ie=r.default.useMemo((()=>`${u} ${M}`),[M]),le=r.default.useMemo((()=>`${E}${k?" rtl":""}`),[k,E]);return r.default.createElement("div",{className:ie,onWheel:oe,onMouseDown:null==g?void 0:g(te),onMouseUp:null==b?void 0:b(te),onMouseMove:null==y?void 0:y(te)},r.default.createElement(Y.Provider,{value:te},r.default.createElement("div",{className:c},W),r.default.createElement("div",{className:d},r.default.createElement("div",{className:f},V),r.default.createElement(C,{className:le,onScroll:re,scrollRef:z},r.default.createElement(P,{refs:X,itemClassName:N,separatorClassName:S},n)),r.default.createElement("div",{className:v},A)),r.default.createElement("div",{className:m},B)))},e.VisibilityContext=Y,e.constants=b,e.getItemsPos=e=>{var t;const n=(e=>e.filter(((e,t,n)=>{const r=0===t,o=t===n.length-1,l=new RegExp(i).test(e);return!((r||o)&&l)})))(e),r=n[Math.floor(n.length/2)];return{first:null==n?void 0:n[0],center:r,last:null===(t=n.slice(-1))||void 0===t?void 0:t[0]}},e.slidingWindow=function(e,t){const n=T(e),r=T(t);return{prev:()=>X(function(e,t){const n=e.findIndex((e=>e===(null==t?void 0:t[0]))),r=t.length,o=n-r,i=o<0,l=i?0:o,a=e.slice(l,i?r:n);return a.length===r?a:e.slice(n,r)}(n,r)),next:()=>X(function(e,t){const n=e.findIndex((e=>{var n;return e===(null===(n=t.slice(-1))||void 0===n?void 0:n[0])})),r=t.length,o=n+r+1,i=o>e.length-1,l=i?e.length-1:o,a=e.slice(i?l-r+1:n+1,l);return a.length===r?a:e.slice(e.length-r,e.length+r)}(n,r))}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))}}]);