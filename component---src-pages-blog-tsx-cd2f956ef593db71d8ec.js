(self.webpackChunkfruki=self.webpackChunkfruki||[]).push([[410],{4245:function(e,t,n){"use strict";n.d(t,{Q:function(){return h}});var r=n(41),l=n(5893),i=(0,r.Z)((0,l.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),o=(0,r.Z)((0,l.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight"),a=n(5401),s=n(2097),u=n(8720),c=n(130),d=n(1193),f=n(7294);function m(e){let{children:t,disabled:n,onClick:r}=e;const l=(0,s.Z)();return f.createElement(u.Z,{sx:{...d.b}},f.createElement(c.Z,{disabled:n,onClick:r,sx:{background:l.palette.secondary.main,color:"white",":hover":{background:l.palette.secondary.main,opacity:.7}}},t))}var v=n(2218);const h=e=>{let{children:t,translate:n}=e;return f.createElement(a.Z,{sx:{transform:"translateY( "+(n||0)+"px)",marginBottom:(n||0)/8,px:"0px !important"}},f.createElement(v.ScrollMenu,{scrollContainerClassName:"bannerContainer",LeftArrow:()=>{const e=f.useContext(v.VisibilityContext);return f.createElement(m,{disabled:e.isFirstItemVisible,onClick:()=>e.scrollPrev()},f.createElement(i,null))},RightArrow:()=>{const{isLastItemVisible:e,scrollNext:t}=f.useContext(v.VisibilityContext);return f.createElement(f.Fragment,null,f.createElement(m,{disabled:e,onClick:()=>t()},f.createElement(o,null)))}},t))}},7103:function(e,t,n){"use strict";n.d(t,{J:function(){return i}});var r=n(1225),l=n(2097);function i(){return(0,r.Z)((0,l.Z)().breakpoints.up("md"),{})}},4149:function(e,t,n){"use strict";n.d(t,{i:function(){return l}});var r=n(7294);function l(e){return(0,r.useMemo)((()=>(e.edges||[]).map((e=>({...e.node.fields,...e.node.frontmatter})))),[e.edges])}},7512:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(7294),l=n(8720),i=n(1647),o=n(5401),a=n(8573),s=n(4245),u=n(2097),c=n(5722),d=n(3);function f(e){var t;let{onClick:n,post:{date:o,description:a,title:s}}=e;const f=(0,u.Z)();return r.createElement(c.Z,{sx:{maxHeight:384,height:384,width:"calc( 100% - 16px )",boxShadow:""+f.shadows[4],m:1,minWidth:272,background:f.palette.grey[50],flexBasis:"20%",color:"black",padding:2,"&:last-child":{marginRight:5},display:"flex",justifyContent:"space-between",flexDirection:"column"}},r.createElement(l.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"}},r.createElement(l.Z,{display:"flex"},r.createElement(l.Z,{sx:{display:"flex",border:"1px solid black",borderRadius:10,height:32,px:1}},r.createElement(l.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"}},r.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.91667 4.37476C7.91667 4.02958 7.63684 3.74976 7.29167 3.74976C6.94649 3.74976 6.66667 4.02958 6.66667 4.37476V5.62476H6.04167C4.77601 5.62476 3.75 6.65077 3.75 7.91642V13.9581C3.75 14.5671 3.98753 15.1206 4.375 15.531V15.6248H4.46878C4.8792 16.0122 5.43269 16.2498 6.04167 16.2498H13.9583C14.5673 16.2498 15.1208 16.0122 15.5312 15.6248H15.625V15.531C16.0125 15.1206 16.25 14.5671 16.25 13.9581V7.91642C16.25 6.65077 15.224 5.62476 13.9583 5.62476H13.3333V4.37476C13.3333 4.02958 13.0535 3.74976 12.7083 3.74976C12.3632 3.74976 12.0833 4.02958 12.0833 4.37476V5.62476H7.91667V4.37476ZM13.9583 6.87476C14.5336 6.87476 15 7.34113 15 7.91642V8.33309H5V7.91642C5 7.34113 5.46637 6.87476 6.04167 6.87476H13.9583Z",fill:"#5F99AF"}))),r.createElement(l.Z,{sx:{display:"flex",justifyContent:"flex-start",alignItems:"center"}},r.createElement(i.Z,{color:"primary",variant:"bodySmall",sx:{pl:1,fontSize:14,lineHeight:"14px"}},null===(t=new Date(o||""))||void 0===t?void 0:t.toLocaleDateString())))),r.createElement(i.Z,{color:"primary",variant:"bodyLarge",sx:{marginY:2,fontWeight:800}},s),r.createElement(i.Z,{color:"grey.600",variant:"bodySmall",sx:{marginBottom:2}},a)),r.createElement(l.Z,null,r.createElement(d.zx,{color:"secondary",endIcon:r.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.2753 6.22482C11.0965 6.04608 10.8277 5.9926 10.5942 6.08934C10.3606 6.18608 10.2083 6.41398 10.2083 6.66677V9.37509H5.625C5.27982 9.37509 5 9.65492 5 10.0001C5 10.3453 5.27982 10.6251 5.625 10.6251H10.2083V13.3334C10.2083 13.5862 10.3606 13.8141 10.5942 13.9109C10.8277 14.0076 11.0965 13.9541 11.2753 13.7754L14.6086 10.442C14.6163 10.4344 14.6237 10.4266 14.6309 10.4186C14.7308 10.3078 14.7917 10.161 14.7917 10.0001C14.7917 9.82672 14.7211 9.66984 14.6071 9.55662M14.6071 9.55662L11.2753 6.22482L14.6071 9.55662Z",fill:"#41B02A"})),variant:"text",onClick:n},"Ler Mais")))}var m=n(7103),v=n(8232);function h(e){let{posts:t}=e;const n=(0,m.J)();return r.createElement(l.Z,{sx:{pt:8,py:{sm:4,md:8},position:"relative",pl:"0px !important"}},r.createElement("svg",{style:{position:"absolute",top:80,zIndex:-1},width:"237",height:"735",viewBox:"0 0 237 735",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M170.833 321.805L-241.604 734.242L-252.8 723.046C-338.297 637.549 -336.798 498.644 -250.594 412.44L161.844 0.00292794L173.04 11.199C258.544 95.6707 257.553 235.084 170.833 321.805Z",fill:"#5F99AF"})),r.createElement(l.Z,null,r.createElement(i.Z,{color:"secondary",variant:"h5",fontWeight:700,align:"center"},"Novidades sobre a Fruki"),r.createElement(i.Z,{sx:{py:2},color:"grey.600",variant:"h6",fontSize:18,align:"center"},"Acompanhe as nossas últimas notícias.")),n?r.createElement(o.Z,null,r.createElement(s.Q,null,t.map((e=>r.createElement(f,{key:e.slug,post:e,onClick:()=>(0,v.navigate)((null==e?void 0:e.slug)||"")}))))):r.createElement(o.Z,null,r.createElement(a.Z,{sx:{display:"flex",flexDirection:"column",gap:2}},t.filter(((e,t)=>t<3)).map((e=>r.createElement(f,{key:e.slug,post:e,onClick:()=>(0,v.navigate)((null==e?void 0:e.url)||"")}))))),r.createElement(l.Z,{sx:{py:5,display:"flex",justifyContent:"center",alignItems:"center"}},r.createElement(d.zx,{to:"/blog",color:"secondary",variant:"contained"},"Ver todas as notícias"," ")))}var p=n(4149);var g=e=>{const t=(0,p.i)(e.data.posts);return r.createElement(h,{posts:t})}},2218:function(e,t,n){!function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--scroll-container.rtl {\n  direction: rtl;\n}\n\n.react-horizontal-scrolling-menu--inner-wrapper {\n  display: flex;\n  overflow-y: hidden;\n}\n\n.react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.react-horizontal-scrolling-menu--header,\n.react-horizontal-scrolling-menu--footer {\n  width: 100%;\n}\n\n.react-horizontal-scrolling-menu--arrow-left,\n.react-horizontal-scrolling-menu--arrow-right {\n  display: flex;\n}\n");const l="react-horizontal-scrolling-menu",i="-separator",o=`${l}--separator`,a=`${l}--item`,s=`${l}--scroll-container`,u=`${l}--wrapper`,c=`${l}--inner-wrapper`,d=`${l}--header`,f=`${l}--arrow-left`,m=`${l}--arrow-right`,v=`${l}--footer`,h="itemId",p="data-key",g="data-index";var b=Object.freeze({__proto__:null,rootClassName:l,separatorString:i,separatorClassName:o,itemClassName:a,scrollContainerClassName:s,wrapperClassName:u,innerWrapperClassName:c,headerClassName:d,arrowLeftClassName:f,arrowRightClassName:m,footerClassName:v,id:h,dataKeyAttribute:p,dataIndexAttribute:g});function x({className:e="",children:t,onScroll:n=(()=>{}),scrollRef:l}){const i=r.default.useMemo((()=>`${s} ${e}`),[e]);return r.default.createElement("div",{className:i,onScroll:n,ref:l},t)}var y,E=r.default.memo((function({className:e,id:t,index:n,refs:l}){const i=r.default.useRef(null);return l[n]=i,r.default.createElement("div",Object.assign({className:e},{[p]:t,[g]:n},{ref:i}))})),C=r.default.memo((function({children:e,className:t,id:n,index:l,refs:i}){const o=r.default.useRef(null);return i[String(l)]=o,r.default.createElement("div",Object.assign({className:t},{[p]:n,[g]:l},{ref:o}),e)}));function w(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function I(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function k(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return I(n.overflowY,t)||I(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function S(e,t,n,r,l,i,o,a){return i<e&&o>t||i>e&&o<t?0:i<=e&&a<=n||o>=t&&a>=n?i-e-r:o>t&&a<n||i<e&&a>n?o-t+l:0}function N(e,t){var n=window,r=t.scrollMode,l=t.block,i=t.inline,o=t.boundary,a=t.skipOverflowHiddenElements,s="function"==typeof o?o:function(e){return e!==o};if(!w(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,c=[],d=e;w(d)&&s(d);){if((d=d.parentElement)===u){c.push(d);break}null!=d&&d===document.body&&k(d)&&!k(document.documentElement)||null!=d&&k(d,a)&&c.push(d)}for(var f=n.visualViewport?n.visualViewport.width:innerWidth,m=n.visualViewport?n.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,p=e.getBoundingClientRect(),g=p.height,b=p.width,x=p.top,y=p.right,E=p.bottom,C=p.left,I="start"===l||"nearest"===l?x:"end"===l?E:x+g/2,N="center"===i?C+b/2:"end"===i?y:C,M=[],V=0;V<c.length;V++){var Z=c[V],L=Z.getBoundingClientRect(),W=L.height,R=L.width,A=L.top,$=L.right,j=L.bottom,H=L.left;if("if-needed"===r&&x>=0&&C>=0&&E<=m&&y<=f&&x>=A&&E<=j&&C>=H&&y<=$)return M;var B=getComputedStyle(Z),O=parseInt(B.borderLeftWidth,10),T=parseInt(B.borderTopWidth,10),z=parseInt(B.borderRightWidth,10),P=parseInt(B.borderBottomWidth,10),D=0,F=0,Y="offsetWidth"in Z?Z.offsetWidth-Z.clientWidth-O-z:0,_="offsetHeight"in Z?Z.offsetHeight-Z.clientHeight-T-P:0;if(u===Z)D="start"===l?I:"end"===l?I-m:"nearest"===l?S(h,h+m,m,T,P,h+I,h+I+g,g):I-m/2,F="start"===i?N:"center"===i?N-f/2:"end"===i?N-f:S(v,v+f,f,O,z,v+N,v+N+b,b),D=Math.max(0,D+h),F=Math.max(0,F+v);else{D="start"===l?I-A-T:"end"===l?I-j+P+_:"nearest"===l?S(A,j,W,T,P+_,I,I+g,g):I-(A+W/2)+_/2,F="start"===i?N-H-O:"center"===i?N-(H+R/2)+Y/2:"end"===i?N-$+z+Y:S(H,$,R,O,z+Y,N,N+b,b);var X=Z.scrollLeft,J=Z.scrollTop;I+=J-(D=Math.max(0,Math.min(J+D,Z.scrollHeight-W+_))),N+=X-(F=Math.max(0,Math.min(X+F,Z.scrollWidth-R+Y)))}M.push({el:Z,top:D,left:F})}return M}function M(e){return e===Object(e)&&0!==Object.keys(e).length}function V(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(M(t)&&"function"==typeof t.behavior)return t.behavior(n?N(e,t):[]);if(n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:M(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,l=e.top,i=e.left;r.scroll&&n?r.scroll({top:l,left:i,behavior:t}):(r.scrollTop=l,r.scrollLeft=i)}))}(N(e,r),r.behavior)}}var Z=function(){return y||(y="performance"in window?performance.now.bind(performance):Date.now),y()};function L(e){var t=Z(),n=Math.min((t-e.startTime)/e.duration,1),r=e.ease(n),l=e.startX+(e.x-e.startX)*r,i=e.startY+(e.y-e.startY)*r;e.method(l,i),l!==e.x||i!==e.y?requestAnimationFrame((function(){return L(e)})):e.cb()}function W(e,t,n,r,l,i){var o,a,s,u;void 0===r&&(r=600),void 0===l&&(l=function(e){return 1+--e*e*e*e*e}),o=e,a=e.scrollLeft,s=e.scrollTop,u=function(t,n){e.scrollLeft=Math.ceil(t),e.scrollTop=Math.ceil(n)},L({scrollable:o,method:u,startTime:Z(),startX:a,startY:s,x:t,y:n,duration:r,ease:l,cb:i})}var R=function(e,t){var n=t||{};return function(e){return e&&!e.behavior||"smooth"===e.behavior}(n)?V(e,{block:n.block,inline:n.inline,scrollMode:n.scrollMode,boundary:n.boundary,behavior:function(e){return Promise.all(e.reduce((function(e,t){var r=t.el,l=t.left,i=t.top,o=r.scrollLeft,a=r.scrollTop;return o===l&&a===i?e:[].concat(e,[new Promise((function(e){return W(r,l,i,n.duration,n.ease,(function(){return e({el:r,left:[o,l],top:[a,i]})}))}))])}),[]))}}):Promise.resolve(V(e,t))};function A(e,t,n,r,l,i){var o,a;const s=(null===(a=null===(o=e)||void 0===o?void 0:o.entry)||void 0===a?void 0:a.target)||e,u=t||"smooth";if(s)return i?null==s?void 0:s.scrollIntoView({behavior:u,inline:n||"end",block:r||"nearest"}):R(s,Object.assign({behavior:u,inline:n||"end",block:r||"nearest",duration:500},l))}const $=e=>document.querySelector(`[data-key='${e}']`),j=e=>document.querySelector(`[data-index='${e}']`);function H(e){return r.default.isValidElement(e)&&e||"function"==typeof e&&r.default.createElement(e,null)||null}const B=e=>e.filter((e=>!new RegExp(".*-separator$").test(e))),O=e=>{var t,n,r;return String((null===(n=null===(t=e)||void 0===t?void 0:t.props)||void 0===n?void 0:n[h])||String((null===(r=e)||void 0===r?void 0:r.key)||"").replace(/^\.\$/,""))};function T({children:e,itemClassName:t="",refs:n,separatorClassName:l=""}){const s=r.default.Children.toArray(e).filter(Boolean),u=s.length,c=r.default.useMemo((()=>`${a} ${t}`),[t]),d=r.default.useMemo((()=>`${o} ${l}`),[l]);return r.default.createElement(r.default.Fragment,null,s.map(((e,t)=>{const l=O(e),o=l+i,a=t+1===u;return[r.default.createElement(C,{className:c,id:l,key:"menuItem__"+l,refs:n,index:t},e),!a&&r.default.createElement(E,{className:d,id:o,refs:n,key:o,index:t+.1})]})))}const z="undefined"!=typeof window?r.default.useLayoutEffect:r.default.useEffect;function P({items:e,itemsChanged:t,refs:n,options:l}){const i=r.default.useRef(),[o,a]=r.default.useState([]),s=r.default.useRef(+setTimeout((()=>{}),0)),u=r.default.useCallback((t=>{e.set(function(e,t){return[...e].map((e=>{var n,r,l,i;const o=e.target,a=String(null!==(r=null===(n=null==o?void 0:o.dataset)||void 0===n?void 0:n.key)&&void 0!==r?r:"");return[a,{index:String(null!==(i=null===(l=null==o?void 0:o.dataset)||void 0===l?void 0:l.index)&&void 0!==i?i:""),key:a,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(t,l)),clearTimeout(s.current),s.current=+setTimeout((()=>requestAnimationFrame((()=>{a((t=>{const n=e.getVisible().map((e=>e[1].key));return JSON.stringify(t)!==JSON.stringify(n)?n:t}))}))),l.throttle)}),[e,l]);return z((()=>{const e=(e=>Object.values(e).map((e=>e.current)).filter(Boolean))(n),t=i.current||new IntersectionObserver(u,l);return i.current=t,e.forEach((e=>t.observe(e))),()=>{clearTimeout(s.current),t.disconnect(),i.current=void 0}}),[u,t,l,n]),{visibleElementsWithSeparators:o}}function D(e,t){const[n,l]=r.default.useState(""),i=r.default.useMemo((()=>{return t=e,r.default.Children.toArray(t).map(O).filter(Boolean);var t}),[e]);return r.default.useEffect((()=>{const e=i.filter(Boolean).join("");t.toItemsWithoutSeparators().filter((e=>!i.includes(e))).forEach((e=>{var n,r;const l=(null===(n=t.last())||void 0===n?void 0:n.key)===e&&(null===(r=t.prev(e))||void 0===r?void 0:r.key)||"";t.delete(l),t.delete(`${e}-separator`),t.delete(e)})),l(e)}),[i,t]),n}class F extends Map{toArr(){return this.sort([...this])}toItems(){return this.toArr().map((([e])=>e))}toItemsWithoutSeparators(){return B(this.toItems())}toItemsKeys(){return this.toItems()}sort(e){return e.sort((([,e],[,t])=>+e.index-+t.index))}set(e,t){return Array.isArray(e)?this.sort(e).forEach((([e,t])=>{super.set(String(e),t)})):super.set(String(e),t),this}first(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}last(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}filter(e){return this.toArr().filter(e)}find(e){return this.toArr().find(e)}findIndex(e){return this.toArr().findIndex(e)}getCurrentPos(e,t){const n=this.toArr().filter((e=>{var n;return t?!(null===(n=null==e?void 0:e[0])||void 0===n?void 0:n.includes(i)):e})),r=n.findIndex((([t,n])=>t===e||n===e));return[n,r]}prev(e,t){var n;const[r,l]=this.getCurrentPos(e,!!t);return-1!==l?null===(n=r[l-1])||void 0===n?void 0:n[1]:void 0}next(e,t){var n;const[r,l]=this.getCurrentPos(e,!!t);return-1!==l?null===(n=r[l+1])||void 0===n?void 0:n[1]:void 0}getVisible(){return this.filter((e=>e[1].visible))}getVisibleElements(){return this.filter((e=>!e[0].includes(i)&&e[1].visible))}}const Y={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95],throttle:100},_=r.default.createContext({}),X=e=>e.reduce(((e,t)=>e.concat(t).concat(`${t}-separator`)),[]).slice(0,-1);e.ScrollMenu=function({LeftArrow:e,RightArrow:t,children:n,Header:l,Footer:i,transitionDuration:o=500,transitionEase:a,transitionBehavior:s,onInit:h=(()=>{}),onUpdate:p=(()=>{}),onMouseDown:g,onMouseUp:b,onMouseMove:y,onScroll:E=(()=>{}),onWheel:C=(()=>{}),options:w=Y,scrollContainerClassName:I="",itemClassName:k="",separatorClassName:S="",wrapperClassName:N="",apiRef:M={current:{}},RTL:V,noPolyfill:Z}){const L=H(e),W=H(t),R=H(l),O=H(i),z=r.default.useRef(null),[X]=r.default.useState({}),J=r.default.useMemo((()=>Object.assign(Object.assign(Object.assign({},Y),w),{root:z.current})),[w,z.current]),q=r.default.useRef(new F).current,U=D(n,q),{visibleElementsWithSeparators:K}=P({items:q,itemsChanged:U,options:J,refs:X}),Q=!!K.length,G=r.default.useMemo((()=>function(e,t=[],n,r,l,i){var o,a;const s=B(t),u=!!(null===(o=e.first())||void 0===o?void 0:o.visible),c=!!(null===(a=e.last())||void 0===a?void 0:a.visible),d=t=>{var n;return null===(n=e.find((e=>e[1].key===String(t))))||void 0===n?void 0:n[1]},f=()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1])},m=()=>{var t,n,r,l;return e.next(null===(l=null===(r=null===(n=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===l?void 0:l[1])};return{getItemById:d,getItemElementById:$,getItemByIndex:t=>{var n;return null===(n=e.find((e=>String(e[1].index)===String(t))))||void 0===n?void 0:n[1]},getItemElementByIndex:j,getNextItem:m,getNextElement:()=>{var t,n,r,l;return e.next(null===(l=null===(r=null===(n=null===(t=e.getVisibleElements())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===l?void 0:l[1],!0)},getPrevItem:f,getPrevElement:()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisibleElements())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1],!0)},isFirstItemVisible:u,isItemVisible:e=>s.includes(String(e)),isLastItem:t=>e.last()===d(t),isLastItemVisible:c,scrollNext:(e,t,o,{duration:a,ease:s,boundary:u=(null==n?void 0:n.current)}={})=>{const c=null!=e?e:null==r?void 0:r.behavior;return A(m(),c,t||"start",o||"nearest",{boundary:u,duration:null!=a?a:null==r?void 0:r.duration,ease:null!=s?s:null==r?void 0:r.ease},l||i)},scrollPrev:(e,t,o,{duration:a,ease:s,boundary:u=(null==n?void 0:n.current)}={})=>{const c=null!=e?e:null==r?void 0:r.behavior;return A(f(),c,t||"end",o||"nearest",{boundary:u,duration:null!=a?a:null==r?void 0:r.duration,ease:null!=s?s:null==r?void 0:r.ease},l||i)},scrollToItem:(e,t,l,i,o)=>{var a,s;return A(e,null!=t?t:null==r?void 0:r.behavior,l,i,Object.assign(Object.assign({boundary:null==n?void 0:n.current},o),{duration:null!==(a=null==o?void 0:o.duration)&&void 0!==a?a:null==r?void 0:r.duration,ease:null!==(s=null==o?void 0:o.ease)&&void 0!==s?s:null==r?void 0:r.ease}))},visibleElements:s,visibleElementsWithSeparators:t,visibleItems:t,visibleItemsWithoutSeparators:s}}(q,K,z,{duration:o,ease:a,behavior:s},V,Z)),[q,K,U,V,Z]),ee=r.default.useCallback((()=>Object.assign(Object.assign({},G),{initComplete:Q,items:q,visibleElementsWithSeparators:K,scrollContainer:z})),[G,Q,q,K,z]),[te,ne]=r.default.useState(ee);!function({cb:e=(()=>{}),condition:t,hash:n}){r.default.useEffect((()=>{t&&e()}),[n,t])}({cb:()=>p(te),condition:function({cb:e,condition:t}){const[n,l]=r.default.useState(!1);return r.default.useEffect((()=>{t&&!n&&(l(!0),e())}),[t,n]),n}({cb:()=>h(te),condition:Q}),hash:JSON.stringify(K.concat(String(null==te?void 0:te.isFirstItemVisible)).concat(String(null==te?void 0:te.isLastItemVisible)))}),r.default.useEffect((()=>ne(ee())),[ee]),M.current=te;const re=r.default.useCallback((e=>E(te,e)),[E,te]),le=r.default.useCallback((e=>C(te,e)),[C,te]),ie=r.default.useMemo((()=>`${u} ${N}`),[N]),oe=r.default.useMemo((()=>`${I}${V?" rtl":""}`),[V,I]);return r.default.createElement("div",{className:ie,onWheel:le,onMouseDown:null==g?void 0:g(te),onMouseUp:null==b?void 0:b(te),onMouseMove:null==y?void 0:y(te)},r.default.createElement(_.Provider,{value:te},r.default.createElement("div",{className:d},R),r.default.createElement("div",{className:c},r.default.createElement("div",{className:f},L),r.default.createElement(x,{className:oe,onScroll:re,scrollRef:z},r.default.createElement(T,{refs:X,itemClassName:k,separatorClassName:S},n)),r.default.createElement("div",{className:m},W)),r.default.createElement("div",{className:v},O)))},e.VisibilityContext=_,e.constants=b,e.getItemsPos=e=>{var t;const n=(e=>e.filter(((e,t,n)=>{const r=0===t,l=t===n.length-1,o=new RegExp(i).test(e);return!((r||l)&&o)})))(e),r=n[Math.floor(n.length/2)];return{first:null==n?void 0:n[0],center:r,last:null===(t=n.slice(-1))||void 0===t?void 0:t[0]}},e.slidingWindow=function(e,t){const n=B(e),r=B(t);return{prev:()=>X(function(e,t){const n=e.findIndex((e=>e===(null==t?void 0:t[0]))),r=t.length,l=n-r,i=l<0,o=i?0:l,a=e.slice(o,i?r:n);return a.length===r?a:e.slice(n,r)}(n,r)),next:()=>X(function(e,t){const n=e.findIndex((e=>{var n;return e===(null===(n=t.slice(-1))||void 0===n?void 0:n[0])})),r=t.length,l=n+r+1,i=l>e.length-1,o=i?e.length-1:l,a=e.slice(i?o-r+1:n+1,o);return a.length===r?a:e.slice(e.length-r,e.length+r)}(n,r))}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-cd2f956ef593db71d8ec.js.map