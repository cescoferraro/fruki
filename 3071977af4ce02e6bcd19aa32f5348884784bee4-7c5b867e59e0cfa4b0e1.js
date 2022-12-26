(self.webpackChunkfruki=self.webpackChunkfruki||[]).push([[690],{4245:function(e,t,n){"use strict";n.d(t,{Q:function(){return h}});var r=n(41),o=n(5893),i=(0,r.Z)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),l=(0,r.Z)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight"),a=n(5401),s=n(2097),u=n(8720),c=n(130),d=n(1193),f=n(7294);function m(e){let{children:t,disabled:n,onClick:r}=e;const o=(0,s.Z)();return f.createElement(u.Z,{sx:{...d.b}},f.createElement(c.Z,{disabled:n,onClick:r,sx:{background:o.palette.secondary.main,color:"white",":hover":{background:o.palette.secondary.main,opacity:.7}}},t))}var v=n(2218);const h=e=>{let{children:t,translate:n}=e;return f.createElement(a.Z,{sx:{transform:"translateY( "+(n||0)+"px)",marginBottom:(n||0)/8,px:"0px !important"}},f.createElement(v.ScrollMenu,{scrollContainerClassName:"bannerContainer",LeftArrow:()=>{const e=f.useContext(v.VisibilityContext);return f.createElement(m,{disabled:e.isFirstItemVisible,onClick:()=>e.scrollPrev()},f.createElement(i,null))},RightArrow:()=>{const{isLastItemVisible:e,scrollNext:t}=f.useContext(v.VisibilityContext);return f.createElement(f.Fragment,null,f.createElement(m,{disabled:e,onClick:()=>t()},f.createElement(l,null)))}},t))}},9794:function(e,t,n){"use strict";n.d(t,{c:function(){return O}});var r=n(7462),o=n(3366),i=n(7294),l=n(6010),a=n(4780),s=n(1719),u=n(8884),c=n(5722),d=n(1588),f=n(4867);function m(e){return(0,f.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var v=n(5893);const h=["className","raised"],p=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var g=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=n,c=(0,o.Z)(n,h),d=(0,r.Z)({},n,{raised:s}),f=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},m,t)})(d);return(0,v.jsx)(p,(0,r.Z)({className:(0,l.Z)(f.root,i),elevation:s?8:void 0,ref:t,ownerState:d},c))}));function b(e){return(0,f.Z)("MuiCardMedia",e)}(0,d.Z)("MuiCardMedia",["root","media","img"]);const C=["children","className","component","image","src","style"],y=(0,s.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:r,isImageComponent:o}=n;return[t.root,r&&t.media,o&&t.img]}})((({ownerState:e})=>(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),w=["video","audio","picture","iframe","img"],x=["picture","img"];var E=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCardMedia"}),{children:i,className:s,component:c="div",image:d,src:f,style:m}=n,h=(0,o.Z)(n,C),p=-1!==w.indexOf(c),g=!p&&d?(0,r.Z)({backgroundImage:`url("${d}")`},m):m,E=(0,r.Z)({},n,{component:c,isMediaComponent:p,isImageComponent:-1!==x.indexOf(c)}),M=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:r}=e,o={root:["root",n&&"media",r&&"img"]};return(0,a.Z)(o,b,t)})(E);return(0,v.jsx)(y,(0,r.Z)({className:(0,l.Z)(M.root,s),as:c,role:!p&&d?"img":void 0,ref:t,style:g,ownerState:E,src:p?d||f:void 0},h,{children:i}))}));function M(e){return(0,f.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);const S=["className","component"],N=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var I=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:i,component:s="div"}=n,c=(0,o.Z)(n,S),d=(0,r.Z)({},n,{component:s}),f=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},M,t)})(d);return(0,v.jsx)(N,(0,r.Z)({as:s,className:(0,l.Z)(f.root,i),ownerState:d,ref:t},c))})),Z=n(2097),k=n(1647),R=n(8720);function V(e){return(0,f.Z)("MuiCardActions",e)}(0,d.Z)("MuiCardActions",["root","spacing"]);const A=["disableSpacing","className"],$=(0,s.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,r.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var j=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:i=!1,className:s}=n,c=(0,o.Z)(n,A),d=(0,r.Z)({},n,{disableSpacing:i}),f=(e=>{const{classes:t,disableSpacing:n}=e,r={root:["root",!n&&"spacing"]};return(0,a.Z)(r,V,t)})(d);return(0,v.jsx)($,(0,r.Z)({className:(0,l.Z)(f.root,s),ownerState:d,ref:t},c))})),W=n(5305);function O(e){let{image:t,title:n,description:r,action:o="Ver mais",onClick:l}=e;return i.createElement(g,{sx:{width:496,ml:.5,mb:1,mr:1,borderRadius:5},tabIndex:0,onClick:l},i.createElement(E,{image:t,sx:{height:240}}),i.createElement(I,{sx:{height:"271px",background:(0,Z.Z)().palette.primary.main,display:"flex",flexDirection:"column"}},i.createElement(k.Z,{color:"primary.contrastText",variant:"h6",fontWeight:700},n),i.createElement(R.Z,{sx:{flexGrow:1}},r),i.createElement(j,null,i.createElement(W.Z,{variant:"text",color:"secondary",endIcon:i.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M10.1578 8.95832L6.43306 12.6831C6.18898 12.9271 6.18898 13.3229 6.43306 13.5669C6.67714 13.811 7.07286 13.811 7.31694 13.5669L11.0417 9.84221L12.6831 11.4836C12.8618 11.6624 13.1306 11.7158 13.3642 11.6191C13.5977 11.5224 13.75 11.2945 13.75 11.0417V6.875C13.75 6.78215 13.7298 6.69403 13.6935 6.61482C13.6687 6.5607 13.6358 6.5094 13.5948 6.46275C13.5773 6.44282 13.5585 6.42402 13.5387 6.40646C13.4882 6.36183 13.4323 6.32675 13.3732 6.30121C13.2971 6.26826 13.2132 6.25 13.125 6.25H8.95835C8.70556 6.25 8.47766 6.40228 8.38093 6.63582C8.28419 6.86937 8.33766 7.13819 8.51641 7.31694L10.1578 8.95832Z",fill:"#41B02A"}))},o))))}},2218:function(e,t,n){!function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--scroll-container.rtl {\n  direction: rtl;\n}\n\n.react-horizontal-scrolling-menu--inner-wrapper {\n  display: flex;\n  overflow-y: hidden;\n}\n\n.react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.react-horizontal-scrolling-menu--header,\n.react-horizontal-scrolling-menu--footer {\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--arrow-left,\n.react-horizontal-scrolling-menu--arrow-right {\n  display: flex;\n}\n");const o="react-horizontal-scrolling-menu",i="-separator",l=`${o}--separator`,a=`${o}--item`,s=`${o}--scroll-container`,u=`${o}--wrapper`,c=`${o}--inner-wrapper`,d=`${o}--header`,f=`${o}--arrow-left`,m=`${o}--arrow-right`,v=`${o}--footer`,h="itemId",p="data-key",g="data-index";var b=Object.freeze({__proto__:null,rootClassName:o,separatorString:i,separatorClassName:l,itemClassName:a,scrollContainerClassName:s,wrapperClassName:u,innerWrapperClassName:c,headerClassName:d,arrowLeftClassName:f,arrowRightClassName:m,footerClassName:v,id:h,dataKeyAttribute:p,dataIndexAttribute:g});function C({className:e="",children:t,onScroll:n=(()=>{}),scrollRef:o}){const i=r.default.useMemo((()=>`${s} ${e}`),[e]);return r.default.createElement("div",{className:i,onScroll:n,ref:o},t)}var y,w=r.default.memo((function({className:e,id:t,index:n,refs:o}){const i=r.default.useRef(null);return o[n]=i,r.default.createElement("div",Object.assign({className:e},{[p]:t,[g]:n},{ref:i}))})),x=r.default.memo((function({children:e,className:t,id:n,index:o,refs:i}){const l=r.default.useRef(null);return i[String(o)]=l,r.default.createElement("div",Object.assign({className:t},{[p]:n,[g]:o},{ref:l}),e)}));function E(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function M(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function S(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return M(n.overflowY,t)||M(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function N(e,t,n,r,o,i,l,a){return i<e&&l>t||i>e&&l<t?0:i<=e&&a<=n||l>=t&&a>=n?i-e-r:l>t&&a<n||i<e&&a>n?l-t+o:0}function I(e,t){var n=window,r=t.scrollMode,o=t.block,i=t.inline,l=t.boundary,a=t.skipOverflowHiddenElements,s="function"==typeof l?l:function(e){return e!==l};if(!E(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,c=[],d=e;E(d)&&s(d);){if((d=d.parentElement)===u){c.push(d);break}null!=d&&d===document.body&&S(d)&&!S(document.documentElement)||null!=d&&S(d,a)&&c.push(d)}for(var f=n.visualViewport?n.visualViewport.width:innerWidth,m=n.visualViewport?n.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,p=e.getBoundingClientRect(),g=p.height,b=p.width,C=p.top,y=p.right,w=p.bottom,x=p.left,M="start"===o||"nearest"===o?C:"end"===o?w:C+g/2,I="center"===i?x+b/2:"end"===i?y:x,Z=[],k=0;k<c.length;k++){var R=c[k],V=R.getBoundingClientRect(),A=V.height,$=V.width,j=V.top,W=V.right,O=V.bottom,L=V.left;if("if-needed"===r&&C>=0&&x>=0&&w<=m&&y<=f&&C>=j&&w<=O&&x>=L&&y<=W)return Z;var T=getComputedStyle(R),B=parseInt(T.borderLeftWidth,10),P=parseInt(T.borderTopWidth,10),z=parseInt(T.borderRightWidth,10),H=parseInt(T.borderBottomWidth,10),D=0,F=0,_="offsetWidth"in R?R.offsetWidth-R.clientWidth-B-z:0,Y="offsetHeight"in R?R.offsetHeight-R.clientHeight-P-H:0;if(u===R)D="start"===o?M:"end"===o?M-m:"nearest"===o?N(h,h+m,m,P,H,h+M,h+M+g,g):M-m/2,F="start"===i?I:"center"===i?I-f/2:"end"===i?I-f:N(v,v+f,f,B,z,v+I,v+I+b,b),D=Math.max(0,D+h),F=Math.max(0,F+v);else{D="start"===o?M-j-P:"end"===o?M-O+H+Y:"nearest"===o?N(j,O,A,P,H+Y,M,M+g,g):M-(j+A/2)+Y/2,F="start"===i?I-L-B:"center"===i?I-(L+$/2)+_/2:"end"===i?I-W+z+_:N(L,W,$,B,z+_,I,I+b,b);var X=R.scrollLeft,q=R.scrollTop;M+=q-(D=Math.max(0,Math.min(q+D,R.scrollHeight-A+Y))),I+=X-(F=Math.max(0,Math.min(X+F,R.scrollWidth-$+_)))}Z.push({el:R,top:D,left:F})}return Z}function Z(e){return e===Object(e)&&0!==Object.keys(e).length}function k(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(Z(t)&&"function"==typeof t.behavior)return t.behavior(n?I(e,t):[]);if(n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:Z(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,o=e.top,i=e.left;r.scroll&&n?r.scroll({top:o,left:i,behavior:t}):(r.scrollTop=o,r.scrollLeft=i)}))}(I(e,r),r.behavior)}}var R=function(){return y||(y="performance"in window?performance.now.bind(performance):Date.now),y()};function V(e){var t=R(),n=Math.min((t-e.startTime)/e.duration,1),r=e.ease(n),o=e.startX+(e.x-e.startX)*r,i=e.startY+(e.y-e.startY)*r;e.method(o,i),o!==e.x||i!==e.y?requestAnimationFrame((function(){return V(e)})):e.cb()}function A(e,t,n,r,o,i){var l,a,s,u;void 0===r&&(r=600),void 0===o&&(o=function(e){return 1+--e*e*e*e*e}),l=e,a=e.scrollLeft,s=e.scrollTop,u=function(t,n){e.scrollLeft=Math.ceil(t),e.scrollTop=Math.ceil(n)},V({scrollable:l,method:u,startTime:R(),startX:a,startY:s,x:t,y:n,duration:r,ease:o,cb:i})}var $=function(e,t){var n=t||{};return function(e){return e&&!e.behavior||"smooth"===e.behavior}(n)?k(e,{block:n.block,inline:n.inline,scrollMode:n.scrollMode,boundary:n.boundary,behavior:function(e){return Promise.all(e.reduce((function(e,t){var r=t.el,o=t.left,i=t.top,l=r.scrollLeft,a=r.scrollTop;return l===o&&a===i?e:[].concat(e,[new Promise((function(e){return A(r,o,i,n.duration,n.ease,(function(){return e({el:r,left:[l,o],top:[a,i]})}))}))])}),[]))}}):Promise.resolve(k(e,t))};function j(e,t,n,r,o,i){var l,a;const s=(null===(a=null===(l=e)||void 0===l?void 0:l.entry)||void 0===a?void 0:a.target)||e,u=t||"smooth";if(s)return i?null==s?void 0:s.scrollIntoView({behavior:u,inline:n||"end",block:r||"nearest"}):$(s,Object.assign({behavior:u,inline:n||"end",block:r||"nearest",duration:500},o))}const W=e=>document.querySelector(`[data-key='${e}']`),O=e=>document.querySelector(`[data-index='${e}']`);function L(e){return r.default.isValidElement(e)&&e||"function"==typeof e&&r.default.createElement(e,null)||null}const T=e=>e.filter((e=>!new RegExp(".*-separator$").test(e))),B=e=>{var t,n,r;return String((null===(n=null===(t=e)||void 0===t?void 0:t.props)||void 0===n?void 0:n[h])||String((null===(r=e)||void 0===r?void 0:r.key)||"").replace(/^\.\$/,""))};function P({children:e,itemClassName:t="",refs:n,separatorClassName:o=""}){const s=r.default.Children.toArray(e).filter(Boolean),u=s.length,c=r.default.useMemo((()=>`${a} ${t}`),[t]),d=r.default.useMemo((()=>`${l} ${o}`),[o]);return r.default.createElement(r.default.Fragment,null,s.map(((e,t)=>{const o=B(e),l=o+i,a=t+1===u;return[r.default.createElement(x,{className:c,id:o,key:"menuItem__"+o,refs:n,index:t},e),!a&&r.default.createElement(w,{className:d,id:l,refs:n,key:l,index:t+.1})]})))}const z="undefined"!=typeof window?r.default.useLayoutEffect:r.default.useEffect;function H({items:e,itemsChanged:t,refs:n,options:o}){const i=r.default.useRef(),[l,a]=r.default.useState([]),s=r.default.useRef(+setTimeout((()=>{}),0)),u=r.default.useCallback((t=>{e.set(function(e,t){return[...e].map((e=>{var n,r,o,i;const l=e.target,a=String(null!==(r=null===(n=null==l?void 0:l.dataset)||void 0===n?void 0:n.key)&&void 0!==r?r:"");return[a,{index:String(null!==(i=null===(o=null==l?void 0:l.dataset)||void 0===o?void 0:o.index)&&void 0!==i?i:""),key:a,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(t,o)),clearTimeout(s.current),s.current=+setTimeout((()=>requestAnimationFrame((()=>{a((t=>{const n=e.getVisible().map((e=>e[1].key));return JSON.stringify(t)!==JSON.stringify(n)?n:t}))}))),o.throttle)}),[e,o]);return z((()=>{const e=(e=>Object.values(e).map((e=>e.current)).filter(Boolean))(n),t=i.current||new IntersectionObserver(u,o);return i.current=t,e.forEach((e=>t.observe(e))),()=>{clearTimeout(s.current),t.disconnect(),i.current=void 0}}),[u,t,o,n]),{visibleElementsWithSeparators:l}}function D(e,t){const[n,o]=r.default.useState(""),i=r.default.useMemo((()=>{return t=e,r.default.Children.toArray(t).map(B).filter(Boolean);var t}),[e]);return r.default.useEffect((()=>{const e=i.filter(Boolean).join("");t.toItemsWithoutSeparators().filter((e=>!i.includes(e))).forEach((e=>{var n,r;const o=(null===(n=t.last())||void 0===n?void 0:n.key)===e&&(null===(r=t.prev(e))||void 0===r?void 0:r.key)||"";t.delete(o),t.delete(`${e}-separator`),t.delete(e)})),o(e)}),[i,t]),n}class F extends Map{toArr(){return this.sort([...this])}toItems(){return this.toArr().map((([e])=>e))}toItemsWithoutSeparators(){return T(this.toItems())}toItemsKeys(){return this.toItems()}sort(e){return e.sort((([,e],[,t])=>+e.index-+t.index))}set(e,t){return Array.isArray(e)?this.sort(e).forEach((([e,t])=>{super.set(String(e),t)})):super.set(String(e),t),this}first(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}last(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}filter(e){return this.toArr().filter(e)}find(e){return this.toArr().find(e)}findIndex(e){return this.toArr().findIndex(e)}getCurrentPos(e,t){const n=this.toArr().filter((e=>{var n;return t?!(null===(n=null==e?void 0:e[0])||void 0===n?void 0:n.includes(i)):e})),r=n.findIndex((([t,n])=>t===e||n===e));return[n,r]}prev(e,t){var n;const[r,o]=this.getCurrentPos(e,!!t);return-1!==o?null===(n=r[o-1])||void 0===n?void 0:n[1]:void 0}next(e,t){var n;const[r,o]=this.getCurrentPos(e,!!t);return-1!==o?null===(n=r[o+1])||void 0===n?void 0:n[1]:void 0}getVisible(){return this.filter((e=>e[1].visible))}getVisibleElements(){return this.filter((e=>!e[0].includes(i)&&e[1].visible))}}const _={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95],throttle:100},Y=r.default.createContext({}),X=e=>e.reduce(((e,t)=>e.concat(t).concat(`${t}-separator`)),[]).slice(0,-1);e.ScrollMenu=function({LeftArrow:e,RightArrow:t,children:n,Header:o,Footer:i,transitionDuration:l=500,transitionEase:a,transitionBehavior:s,onInit:h=(()=>{}),onUpdate:p=(()=>{}),onMouseDown:g,onMouseUp:b,onMouseMove:y,onScroll:w=(()=>{}),onWheel:x=(()=>{}),options:E=_,scrollContainerClassName:M="",itemClassName:S="",separatorClassName:N="",wrapperClassName:I="",apiRef:Z={current:{}},RTL:k,noPolyfill:R}){const V=L(e),A=L(t),$=L(o),B=L(i),z=r.default.useRef(null),[X]=r.default.useState({}),q=r.default.useMemo((()=>Object.assign(Object.assign(Object.assign({},_),E),{root:z.current})),[E,z.current]),J=r.default.useRef(new F).current,U=D(n,J),{visibleElementsWithSeparators:K}=H({items:J,itemsChanged:U,options:q,refs:X}),G=!!K.length,Q=r.default.useMemo((()=>function(e,t=[],n,r,o,i){var l,a;const s=T(t),u=!!(null===(l=e.first())||void 0===l?void 0:l.visible),c=!!(null===(a=e.last())||void 0===a?void 0:a.visible),d=t=>{var n;return null===(n=e.find((e=>e[1].key===String(t))))||void 0===n?void 0:n[1]},f=()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1])},m=()=>{var t,n,r,o;return e.next(null===(o=null===(r=null===(n=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===o?void 0:o[1])};return{getItemById:d,getItemElementById:W,getItemByIndex:t=>{var n;return null===(n=e.find((e=>String(e[1].index)===String(t))))||void 0===n?void 0:n[1]},getItemElementByIndex:O,getNextItem:m,getNextElement:()=>{var t,n,r,o;return e.next(null===(o=null===(r=null===(n=null===(t=e.getVisibleElements())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===o?void 0:o[1],!0)},getPrevItem:f,getPrevElement:()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisibleElements())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1],!0)},isFirstItemVisible:u,isItemVisible:e=>s.includes(String(e)),isLastItem:t=>e.last()===d(t),isLastItemVisible:c,scrollNext:(e,t,l,{duration:a,ease:s,boundary:u=(null==n?void 0:n.current)}={})=>{const c=null!=e?e:null==r?void 0:r.behavior;return j(m(),c,t||"start",l||"nearest",{boundary:u,duration:null!=a?a:null==r?void 0:r.duration,ease:null!=s?s:null==r?void 0:r.ease},o||i)},scrollPrev:(e,t,l,{duration:a,ease:s,boundary:u=(null==n?void 0:n.current)}={})=>{const c=null!=e?e:null==r?void 0:r.behavior;return j(f(),c,t||"end",l||"nearest",{boundary:u,duration:null!=a?a:null==r?void 0:r.duration,ease:null!=s?s:null==r?void 0:r.ease},o||i)},scrollToItem:(e,t,o,i,l)=>{var a,s;return j(e,null!=t?t:null==r?void 0:r.behavior,o,i,Object.assign(Object.assign({boundary:null==n?void 0:n.current},l),{duration:null!==(a=null==l?void 0:l.duration)&&void 0!==a?a:null==r?void 0:r.duration,ease:null!==(s=null==l?void 0:l.ease)&&void 0!==s?s:null==r?void 0:r.ease}))},visibleElements:s,visibleElementsWithSeparators:t,visibleItems:t,visibleItemsWithoutSeparators:s}}(J,K,z,{duration:l,ease:a,behavior:s},k,R)),[J,K,U,k,R]),ee=r.default.useCallback((()=>Object.assign(Object.assign({},Q),{initComplete:G,items:J,visibleElementsWithSeparators:K,scrollContainer:z})),[Q,G,J,K,z]),[te,ne]=r.default.useState(ee);!function({cb:e=(()=>{}),condition:t,hash:n}){r.default.useEffect((()=>{t&&e()}),[n,t])}({cb:()=>p(te),condition:function({cb:e,condition:t}){const[n,o]=r.default.useState(!1);return r.default.useEffect((()=>{t&&!n&&(o(!0),e())}),[t,n]),n}({cb:()=>h(te),condition:G}),hash:JSON.stringify(K.concat(String(null==te?void 0:te.isFirstItemVisible)).concat(String(null==te?void 0:te.isLastItemVisible)))}),r.default.useEffect((()=>ne(ee())),[ee]),Z.current=te;const re=r.default.useCallback((e=>w(te,e)),[w,te]),oe=r.default.useCallback((e=>x(te,e)),[x,te]),ie=r.default.useMemo((()=>`${u} ${I}`),[I]),le=r.default.useMemo((()=>`${M}${k?" rtl":""}`),[k,M]);return r.default.createElement("div",{className:ie,onWheel:oe,onMouseDown:null==g?void 0:g(te),onMouseUp:null==b?void 0:b(te),onMouseMove:null==y?void 0:y(te)},r.default.createElement(Y.Provider,{value:te},r.default.createElement("div",{className:d},$),r.default.createElement("div",{className:c},r.default.createElement("div",{className:f},V),r.default.createElement(C,{className:le,onScroll:re,scrollRef:z},r.default.createElement(P,{refs:X,itemClassName:S,separatorClassName:N},n)),r.default.createElement("div",{className:m},A)),r.default.createElement("div",{className:v},B)))},e.VisibilityContext=Y,e.constants=b,e.getItemsPos=e=>{var t;const n=(e=>e.filter(((e,t,n)=>{const r=0===t,o=t===n.length-1,l=new RegExp(i).test(e);return!((r||o)&&l)})))(e),r=n[Math.floor(n.length/2)];return{first:null==n?void 0:n[0],center:r,last:null===(t=n.slice(-1))||void 0===t?void 0:t[0]}},e.slidingWindow=function(e,t){const n=T(e),r=T(t);return{prev:()=>X(function(e,t){const n=e.findIndex((e=>e===(null==t?void 0:t[0]))),r=t.length,o=n-r,i=o<0,l=i?0:o,a=e.slice(l,i?r:n);return a.length===r?a:e.slice(n,r)}(n,r)),next:()=>X(function(e,t){const n=e.findIndex((e=>{var n;return e===(null===(n=t.slice(-1))||void 0===n?void 0:n[0])})),r=t.length,o=n+r+1,i=o>e.length-1,l=i?e.length-1:o,a=e.slice(i?l-r+1:n+1,l);return a.length===r?a:e.slice(e.length-r,e.length+r)}(n,r))}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))}}]);
//# sourceMappingURL=3071977af4ce02e6bcd19aa32f5348884784bee4-7c5b867e59e0cfa4b0e1.js.map