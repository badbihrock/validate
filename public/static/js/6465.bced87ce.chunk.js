"use strict";(self.webpackChunk_gateway_frontend=self.webpackChunk_gateway_frontend||[]).push([[6465],{96465:function(e,t,n){n.d(t,{Z:function(){return wt}});var o=n(96234),r=n(56666),i=n(31461),a=n(7896),s=n(30969),c=n.t(s,2),p=n(81856),u=n(26540),l=n(12589),f=n(74262),d=n(60233),m=n(94702),v=n(62649),h=n(24099),g=n(44312),y=n(522),b=n(87352),w=n(37574),x=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function O(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var Z={entering:{opacity:1,transform:O(1)},entered:{opacity:1,transform:"none"}},T="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),E=s.forwardRef((function(e,t){var n=e.addEndListener,o=e.appear,r=void 0===o||o,c=e.children,p=e.easing,u=e.in,l=e.onEnter,f=e.onEntered,d=e.onEntering,v=e.onExit,h=e.onExited,E=e.onExiting,P=e.style,R=e.timeout,j=void 0===R?"auto":R,M=e.TransitionComponent,D=void 0===M?g.ZP:M,L=(0,i.Z)(e,x),k=s.useRef(),A=s.useRef(),S=(0,m.Z)(),C=s.useRef(null),W=(0,b.Z)(C,c.ref,t),B=function(e){return function(t){if(e){var n=C.current;void 0===t?e(n):e(n,t)}}},H=B(d),N=B((function(e,t){(0,y.n)(e);var n,o=(0,y.C)({style:P,timeout:j,easing:p},{mode:"enter"}),r=o.duration,i=o.delay,a=o.easing;"auto"===j?(n=S.transitions.getAutoHeightDuration(e.clientHeight),A.current=n):n=r,e.style.transition=[S.transitions.create("opacity",{duration:n,delay:i}),S.transitions.create("transform",{duration:T?n:.666*n,delay:i,easing:a})].join(","),l&&l(e,t)})),I=B(f),F=B(E),q=B((function(e){var t,n=(0,y.C)({style:P,timeout:j,easing:p},{mode:"exit"}),o=n.duration,r=n.delay,i=n.easing;"auto"===j?(t=S.transitions.getAutoHeightDuration(e.clientHeight),A.current=t):t=o,e.style.transition=[S.transitions.create("opacity",{duration:t,delay:r}),S.transitions.create("transform",{duration:T?t:.666*t,delay:T?r:r||.333*t,easing:i})].join(","),e.style.opacity=0,e.style.transform=O(.75),v&&v(e)})),U=B(h);return s.useEffect((function(){return function(){clearTimeout(k.current)}}),[]),(0,w.jsx)(D,(0,a.Z)({appear:r,in:u,nodeRef:C,onEnter:N,onEntered:I,onEntering:H,onExit:q,onExited:U,onExiting:F,addEndListener:function(e){"auto"===j&&(k.current=setTimeout(e,A.current||0)),n&&n(C.current,e)},timeout:"auto"===j?null:j},L,{children:function(e,t){return s.cloneElement(c,(0,a.Z)({style:(0,a.Z)({opacity:0,transform:O(.75),visibility:"exited"!==e||u?void 0:"hidden"},Z[e],P,c.props.style),ref:W},t))}}))}));E.muiSupportAuto=!0;var P=E,R=n(16953),j=n(20571),M=n(22582);function D(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function L(e){return e instanceof D(e).Element||e instanceof Element}function k(e){return e instanceof D(e).HTMLElement||e instanceof HTMLElement}function A(e){return"undefined"!==typeof ShadowRoot&&(e instanceof D(e).ShadowRoot||e instanceof ShadowRoot)}var S=Math.max,C=Math.min,W=Math.round;function B(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function H(){return!/^((?!chrome|android).)*safari/i.test(B())}function N(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),r=1,i=1;t&&k(e)&&(r=e.offsetWidth>0&&W(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&W(o.height)/e.offsetHeight||1);var a=(L(e)?D(e):window).visualViewport,s=!H()&&n,c=(o.left+(s&&a?a.offsetLeft:0))/r,p=(o.top+(s&&a?a.offsetTop:0))/i,u=o.width/r,l=o.height/i;return{width:u,height:l,top:p,right:c+u,bottom:p+l,left:c,x:c,y:p}}function I(e){var t=D(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function F(e){return e?(e.nodeName||"").toLowerCase():null}function q(e){return((L(e)?e.ownerDocument:e.document)||window.document).documentElement}function U(e){return N(q(e)).left+I(e).scrollLeft}function V(e){return D(e).getComputedStyle(e)}function z(e){var t=V(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function _(e,t,n){void 0===n&&(n=!1);var o=k(t),r=k(t)&&function(e){var t=e.getBoundingClientRect(),n=W(t.width)/e.offsetWidth||1,o=W(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),i=q(t),a=N(e,r,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(o||!o&&!n)&&(("body"!==F(t)||z(i))&&(s=function(e){return e!==D(e)&&k(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:I(e);var t}(t)),k(t)?((c=N(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=U(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function X(e){var t=N(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Y(e){return"html"===F(e)?e:e.assignedSlot||e.parentNode||(A(e)?e.host:null)||q(e)}function G(e){return["html","body","#document"].indexOf(F(e))>=0?e.ownerDocument.body:k(e)&&z(e)?e:G(Y(e))}function J(e,t){var n;void 0===t&&(t=[]);var o=G(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=D(o),a=r?[i].concat(i.visualViewport||[],z(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(J(Y(a)))}function K(e){return["table","td","th"].indexOf(F(e))>=0}function Q(e){return k(e)&&"fixed"!==V(e).position?e.offsetParent:null}function $(e){for(var t=D(e),n=Q(e);n&&K(n)&&"static"===V(n).position;)n=Q(n);return n&&("html"===F(n)||"body"===F(n)&&"static"===V(n).position)?t:n||function(e){var t=/firefox/i.test(B());if(/Trident/i.test(B())&&k(e)&&"fixed"===V(e).position)return null;var n=Y(e);for(A(n)&&(n=n.host);k(n)&&["html","body"].indexOf(F(n))<0;){var o=V(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var ee="top",te="bottom",ne="right",oe="left",re="auto",ie=[ee,te,ne,oe],ae="start",se="end",ce="viewport",pe="popper",ue=ie.reduce((function(e,t){return e.concat([t+"-"+ae,t+"-"+se])}),[]),le=[].concat(ie,[re]).reduce((function(e,t){return e.concat([t,t+"-"+ae,t+"-"+se])}),[]),fe=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function de(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function me(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var ve={placement:"bottom",modifiers:[],strategy:"absolute"};function he(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ge(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?ve:r;return function(e,t,n){void 0===n&&(n=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},ve,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:r,setOptions:function(n){var s="function"===typeof n?n(r.options):n;p(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:L(e)?J(e):e.contextElement?J(e.contextElement):[],popper:J(t)};var u=function(e){var t=de(e);return fe.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=u.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:c,options:o}),p=function(){};a.push(s||p)}})),c.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(he(t,n)){r.rects={reference:_(t,$(n),"fixed"===r.options.strategy),popper:X(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var i=r.orderedModifiers[o],a=i.fn,p=i.options,u=void 0===p?{}:p,l=i.name;"function"===typeof a&&(r=a({state:r,options:u,name:l,instance:c})||r)}else r.reset=!1,o=-1}}},update:me((function(){return new Promise((function(e){c.forceUpdate(),e(r)}))})),destroy:function(){p(),s=!0}};if(!he(e,t))return c;function p(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ye={passive:!0};function be(e){return e.split("-")[0]}function we(e){return e.split("-")[1]}function xe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Oe(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?be(r):null,a=r?we(r):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(i){case ee:t={x:s,y:n.y-o.height};break;case te:t={x:s,y:n.y+n.height};break;case ne:t={x:n.x+n.width,y:c};break;case oe:t={x:n.x-o.width,y:c};break;default:t={x:n.x,y:n.y}}var p=i?xe(i):null;if(null!=p){var u="y"===p?"height":"width";switch(a){case ae:t[p]=t[p]-(n[u]/2-o[u]/2);break;case se:t[p]=t[p]+(n[u]/2-o[u]/2)}}return t}var Ze={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Te(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,p=e.adaptive,u=e.roundOffsets,l=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,v=void 0===m?0:m,h="function"===typeof u?u({x:d,y:v}):{x:d,y:v};d=h.x,v=h.y;var g=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),b=oe,w=ee,x=window;if(p){var O=$(n),Z="clientHeight",T="clientWidth";if(O===D(n)&&"static"!==V(O=q(n)).position&&"absolute"===s&&(Z="scrollHeight",T="scrollWidth"),r===ee||(r===oe||r===ne)&&i===se)w=te,v-=(l&&O===x&&x.visualViewport?x.visualViewport.height:O[Z])-o.height,v*=c?1:-1;if(r===oe||(r===ee||r===te)&&i===se)b=ne,d-=(l&&O===x&&x.visualViewport?x.visualViewport.width:O[T])-o.width,d*=c?1:-1}var E,P=Object.assign({position:s},p&&Ze),R=!0===u?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:W(t*o)/o||0,y:W(n*o)/o||0}}({x:d,y:v}):{x:d,y:v};return d=R.x,v=R.y,c?Object.assign({},P,((E={})[w]=y?"0":"",E[b]=g?"0":"",E.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",E)):Object.assign({},P,((t={})[w]=y?v+"px":"",t[b]=g?d+"px":"",t.transform="",t))}var Ee={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=le.reduce((function(e,n){return e[n]=function(e,t,n){var o=be(e),r=[oe,ee].indexOf(o)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[oe,ne].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=a}},Pe={left:"right",right:"left",bottom:"top",top:"bottom"};function Re(e){return e.replace(/left|right|bottom|top/g,(function(e){return Pe[e]}))}var je={start:"end",end:"start"};function Me(e){return e.replace(/start|end/g,(function(e){return je[e]}))}function De(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&A(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Le(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ke(e,t,n){return t===ce?Le(function(e,t){var n=D(e),o=q(e),r=n.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,c=0;if(r){i=r.width,a=r.height;var p=H();(p||!p&&"fixed"===t)&&(s=r.offsetLeft,c=r.offsetTop)}return{width:i,height:a,x:s+U(e),y:c}}(e,n)):L(t)?function(e,t){var n=N(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):Le(function(e){var t,n=q(e),o=I(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=S(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=S(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+U(e),c=-o.scrollTop;return"rtl"===V(r||n).direction&&(s+=S(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(q(e)))}function Ae(e,t,n,o){var r="clippingParents"===t?function(e){var t=J(Y(e)),n=["absolute","fixed"].indexOf(V(e).position)>=0&&k(e)?$(e):e;return L(n)?t.filter((function(e){return L(e)&&De(e,n)&&"body"!==F(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),a=i[0],s=i.reduce((function(t,n){var r=ke(e,n,o);return t.top=S(r.top,t.top),t.right=C(r.right,t.right),t.bottom=C(r.bottom,t.bottom),t.left=S(r.left,t.left),t}),ke(e,a,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Se(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Ce(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function We(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?"clippingParents":s,p=n.rootBoundary,u=void 0===p?ce:p,l=n.elementContext,f=void 0===l?pe:l,d=n.altBoundary,m=void 0!==d&&d,v=n.padding,h=void 0===v?0:v,g=Se("number"!==typeof h?h:Ce(h,ie)),y=f===pe?"reference":pe,b=e.rects.popper,w=e.elements[m?y:f],x=Ae(L(w)?w:w.contextElement||q(e.elements.popper),c,u,a),O=N(e.elements.reference),Z=Oe({reference:O,element:b,strategy:"absolute",placement:r}),T=Le(Object.assign({},b,Z)),E=f===pe?T:O,P={top:x.top-E.top+g.top,bottom:E.bottom-x.bottom+g.bottom,left:x.left-E.left+g.left,right:E.right-x.right+g.right},R=e.modifiersData.offset;if(f===pe&&R){var j=R[r];Object.keys(P).forEach((function(e){var t=[ne,te].indexOf(e)>=0?1:-1,n=[ee,te].indexOf(e)>=0?"y":"x";P[e]+=j[n]*t}))}return P}function Be(e,t,n){return S(e,C(t,n))}var He={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,p=n.rootBoundary,u=n.altBoundary,l=n.padding,f=n.tether,d=void 0===f||f,m=n.tetherOffset,v=void 0===m?0:m,h=We(t,{boundary:c,rootBoundary:p,padding:l,altBoundary:u}),g=be(t.placement),y=we(t.placement),b=!y,w=xe(g),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,Z=t.rects.reference,T=t.rects.popper,E="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,P="number"===typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,j={x:0,y:0};if(O){if(i){var M,D="y"===w?ee:oe,L="y"===w?te:ne,k="y"===w?"height":"width",A=O[w],W=A+h[D],B=A-h[L],H=d?-T[k]/2:0,N=y===ae?Z[k]:T[k],I=y===ae?-T[k]:-Z[k],F=t.elements.arrow,q=d&&F?X(F):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},V=U[D],z=U[L],_=Be(0,Z[k],q[k]),Y=b?Z[k]/2-H-_-V-P.mainAxis:N-_-V-P.mainAxis,G=b?-Z[k]/2+H+_+z+P.mainAxis:I+_+z+P.mainAxis,J=t.elements.arrow&&$(t.elements.arrow),K=J?"y"===w?J.clientTop||0:J.clientLeft||0:0,Q=null!=(M=null==R?void 0:R[w])?M:0,re=A+G-Q,ie=Be(d?C(W,A+Y-Q-K):W,A,d?S(B,re):B);O[w]=ie,j[w]=ie-A}if(s){var se,ce="x"===w?ee:oe,pe="x"===w?te:ne,ue=O[x],le="y"===x?"height":"width",fe=ue+h[ce],de=ue-h[pe],me=-1!==[ee,oe].indexOf(g),ve=null!=(se=null==R?void 0:R[x])?se:0,he=me?fe:ue-Z[le]-T[le]-ve+P.altAxis,ge=me?ue+Z[le]+T[le]-ve-P.altAxis:de,ye=d&&me?function(e,t,n){var o=Be(e,t,n);return o>n?n:o}(he,ue,ge):Be(d?he:fe,ue,d?ge:de);O[x]=ye,j[x]=ye-ue}t.modifiersData[o]=j}},requiresIfExists:["offset"]};var Ne={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=be(n.placement),c=xe(s),p=[oe,ne].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return Se("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ce(e,ie))}(r.padding,n),l=X(i),f="y"===c?ee:oe,d="y"===c?te:ne,m=n.rects.reference[p]+n.rects.reference[c]-a[c]-n.rects.popper[p],v=a[c]-n.rects.reference[c],h=$(i),g=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,y=m/2-v/2,b=u[f],w=g-l[p]-u[d],x=g/2-l[p]/2+y,O=Be(b,x,w),Z=c;n.modifiersData[o]=((t={})[Z]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!==typeof o||(o=t.elements.popper.querySelector(o)))&&De(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ie(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Fe(e){return[ee,ne,te,oe].some((function(t){return e[t]>=0}))}var qe=ge({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,c=D(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,ye)})),s&&c.addEventListener("resize",n.update,ye),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,ye)})),s&&c.removeEventListener("resize",n.update,ye)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Oe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,p={placement:be(t.placement),variation:we(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Te(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Te(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];k(r)&&F(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});k(o)&&F(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},Ee,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,p=n.padding,u=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=void 0===d||d,v=n.allowedAutoPlacements,h=t.options.placement,g=be(h),y=c||(g===h||!m?[Re(h)]:function(e){if(be(e)===re)return[];var t=Re(e);return[Me(e),t,Me(t)]}(h)),b=[h].concat(y).reduce((function(e,n){return e.concat(be(n)===re?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?le:c,u=we(o),l=u?s?ue:ue.filter((function(e){return we(e)===u})):ie,f=l.filter((function(e){return p.indexOf(e)>=0}));0===f.length&&(f=l);var d=f.reduce((function(t,n){return t[n]=We(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[be(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:p,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,Z=!0,T=b[0],E=0;E<b.length;E++){var P=b[E],R=be(P),j=we(P)===ae,M=[ee,te].indexOf(R)>=0,D=M?"width":"height",L=We(t,{placement:P,boundary:u,rootBoundary:l,altBoundary:f,padding:p}),k=M?j?ne:oe:j?te:ee;w[D]>x[D]&&(k=Re(k));var A=Re(k),S=[];if(i&&S.push(L[R]<=0),s&&S.push(L[k]<=0,L[A]<=0),S.every((function(e){return e}))){T=P,Z=!1;break}O.set(P,S)}if(Z)for(var C=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},W=m?3:1;W>0;W--){if("break"===C(W))break}t.placement!==T&&(t.modifiersData[o]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},He,Ne,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=We(t,{elementContext:"reference"}),s=We(t,{altBoundary:!0}),c=Ie(a,o),p=Ie(s,r,i),u=Fe(c),l=Fe(p);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),Ue=n(46622),Ve=n(45102),ze=n(62746);function _e(e){return(0,Ve.Z)("MuiPopperUnstyled",e)}(0,ze.Z)("MuiPopperUnstyled",["root"]);var Xe=n(3084),Ye=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],Ge=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Je(e){return"function"===typeof e?e():e}var Ke={},Qe=s.forwardRef((function(e,t){var n,r=e.anchorEl,c=e.children,p=e.component,l=e.direction,f=e.disablePortal,d=e.modifiers,m=e.open,v=e.ownerState,h=e.placement,g=e.popperOptions,y=e.popperRef,b=e.slotProps,x=void 0===b?{}:b,O=e.slots,Z=void 0===O?{}:O,T=e.TransitionProps,E=(0,i.Z)(e,Ye),P=s.useRef(null),M=(0,R.Z)(P,t),D=s.useRef(null),L=(0,R.Z)(D,y),k=s.useRef(L);(0,j.Z)((function(){k.current=L}),[L]),s.useImperativeHandle(y,(function(){return D.current}),[]);var A=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(h,l),S=s.useState(A),C=(0,o.Z)(S,2),W=C[0],B=C[1],H=s.useState(Je(r)),N=(0,o.Z)(H,2),I=N[0],F=N[1];s.useEffect((function(){D.current&&D.current.forceUpdate()})),s.useEffect((function(){r&&F(Je(r))}),[r]),(0,j.Z)((function(){if(I&&m){var e=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;B(t.placement)}}];null!=d&&(e=e.concat(d)),g&&null!=g.modifiers&&(e=e.concat(g.modifiers));var t=qe(I,P.current,(0,a.Z)({placement:A},g,{modifiers:e}));return k.current(t),function(){t.destroy(),k.current(null)}}}),[I,f,d,m,g,A]);var q={placement:W};null!==T&&(q.TransitionProps=T);var U=(0,u.Z)({root:["root"]},_e,{}),V=null!=(n=null!=p?p:Z.root)?n:"div",z=(0,Xe.Z)({elementType:V,externalSlotProps:x.root,externalForwardedProps:E,additionalProps:{role:"tooltip",ref:M},ownerState:(0,a.Z)({},e,v),className:U.root});return(0,w.jsx)(V,(0,a.Z)({},z,{children:"function"===typeof c?c(q):c}))})),$e=s.forwardRef((function(e,t){var n=e.anchorEl,r=e.children,c=e.container,p=e.direction,u=void 0===p?"ltr":p,l=e.disablePortal,f=void 0!==l&&l,d=e.keepMounted,m=void 0!==d&&d,v=e.modifiers,h=e.open,g=e.placement,y=void 0===g?"bottom":g,b=e.popperOptions,x=void 0===b?Ke:b,O=e.popperRef,Z=e.style,T=e.transition,E=void 0!==T&&T,P=(0,i.Z)(e,Ge),R=s.useState(!0),j=(0,o.Z)(R,2),D=j[0],L=j[1];if(!m&&!h&&(!E||D))return null;var k=c||(n?(0,M.Z)(Je(n)).body:void 0);return(0,w.jsx)(Ue.Z,{disablePortal:f,container:k,children:(0,w.jsx)(Qe,(0,a.Z)({anchorEl:n,direction:u,disablePortal:f,modifiers:v,ref:t,open:E?!D:h,placement:y,popperOptions:x,popperRef:O},P,{style:(0,a.Z)({position:"fixed",top:0,left:0,display:h||!m||E&&!D?null:"none"},Z),TransitionProps:E?{in:h,onEnter:function(){L(!1)},onExited:function(){L(!0)}}:null,children:r}))})})),et=n(33474),tt=["components","componentsProps","slots","slotProps"],nt=(0,d.ZP)($e,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),ot=s.forwardRef((function(e,t){var n,o=(0,et.Z)(),r=(0,v.Z)({props:e,name:"MuiPopper"}),s=r.components,c=r.componentsProps,p=r.slots,u=r.slotProps,l=(0,i.Z)(r,tt),f=null!=(n=null==p?void 0:p.root)?n:null==s?void 0:s.Root;return(0,w.jsx)(nt,(0,a.Z)({direction:null==o?void 0:o.direction,slots:{root:f},slotProps:null!=u?u:c},l,{ref:t}))})),rt=n(22410),it=0;var at=c.useId;var st=function(e){if(void 0!==at){var t=at();return null!=e?e:t}return function(e){var t=s.useState(e),n=(0,o.Z)(t,2),r=n[0],i=n[1],a=e||r;return s.useEffect((function(){null==r&&i("mui-".concat(it+=1))}),[r]),a}(e)},ct=n(1972),pt=n(45599);function ut(e){return(0,Ve.Z)("MuiTooltip",e)}var lt=(0,ze.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),ft=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];var dt=(0,d.ZP)(ot,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var n=e.ownerState;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((function(e){var t,n=e.theme,o=e.ownerState,i=e.open;return(0,a.Z)({zIndex:(n.vars||n).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},o.arrow&&(t={},(0,r.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(lt.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,r.Z)(t,'&[data-popper-placement*="top"] .'.concat(lt.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,r.Z)(t,'&[data-popper-placement*="right"] .'.concat(lt.arrow),(0,a.Z)({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,r.Z)(t,'&[data-popper-placement*="left"] .'.concat(lt.arrow),(0,a.Z)({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),mt=(0,d.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var n=e.ownerState;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,h.Z)(n.placement.split("-")[0]))]]}})((function(e){var t,n,o=e.theme,i=e.ownerState;return(0,a.Z)({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:(0,f.Fq)(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:"".concat((n=16/14,Math.round(1e5*n)/1e5),"em"),fontWeight:o.typography.fontWeightRegular},(t={},(0,r.Z)(t,".".concat(lt.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},i.isRtl?(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),(0,r.Z)(t,".".concat(lt.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},i.isRtl?(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),(0,r.Z)(t,".".concat(lt.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),(0,r.Z)(t,".".concat(lt.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),vt=(0,d.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,f.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),ht=!1,gt=null;function yt(e,t){return function(n){t&&t(n),e(n)}}var bt=s.forwardRef((function(e,t){var n,r,c,f,d,g,y,x,O,Z,T,E,R,j,M,D,L,k,A,S=(0,v.Z)({props:e,name:"MuiTooltip"}),C=S.arrow,W=void 0!==C&&C,B=S.children,H=S.components,N=void 0===H?{}:H,I=S.componentsProps,F=void 0===I?{}:I,q=S.describeChild,U=void 0!==q&&q,V=S.disableFocusListener,z=void 0!==V&&V,_=S.disableHoverListener,X=void 0!==_&&_,Y=S.disableInteractive,G=void 0!==Y&&Y,J=S.disableTouchListener,K=void 0!==J&&J,Q=S.enterDelay,$=void 0===Q?100:Q,ee=S.enterNextDelay,te=void 0===ee?0:ee,ne=S.enterTouchDelay,oe=void 0===ne?700:ne,re=S.followCursor,ie=void 0!==re&&re,ae=S.id,se=S.leaveDelay,ce=void 0===se?0:se,pe=S.leaveTouchDelay,ue=void 0===pe?1500:pe,le=S.onClose,fe=S.onOpen,de=S.open,me=S.placement,ve=void 0===me?"bottom":me,he=S.PopperComponent,ge=S.PopperProps,ye=void 0===ge?{}:ge,be=S.slotProps,we=void 0===be?{}:be,xe=S.slots,Oe=void 0===xe?{}:xe,Ze=S.title,Te=S.TransitionComponent,Ee=void 0===Te?P:Te,Pe=S.TransitionProps,Re=(0,i.Z)(S,ft),je=(0,m.Z)(),Me="rtl"===je.direction,De=s.useState(),Le=(0,o.Z)(De,2),ke=Le[0],Ae=Le[1],Se=s.useState(null),Ce=(0,o.Z)(Se,2),We=Ce[0],Be=Ce[1],He=s.useRef(!1),Ne=G||ie,Ie=s.useRef(),Fe=s.useRef(),qe=s.useRef(),Ue=s.useRef(),Ve=(0,pt.Z)({controlled:de,default:!1,name:"Tooltip",state:"open"}),ze=(0,o.Z)(Ve,2),_e=ze[0],Xe=ze[1],Ye=_e,Ge=st(ae),Je=s.useRef(),Ke=s.useCallback((function(){void 0!==Je.current&&(document.body.style.WebkitUserSelect=Je.current,Je.current=void 0),clearTimeout(Ue.current)}),[]);s.useEffect((function(){return function(){clearTimeout(Ie.current),clearTimeout(Fe.current),clearTimeout(qe.current),Ke()}}),[Ke]);var Qe=function(e){clearTimeout(gt),ht=!0,Xe(!0),fe&&!Ye&&fe(e)},$e=(0,rt.Z)((function(e){clearTimeout(gt),gt=setTimeout((function(){ht=!1}),800+ce),Xe(!1),le&&Ye&&le(e),clearTimeout(Ie.current),Ie.current=setTimeout((function(){He.current=!1}),je.transitions.duration.shortest)})),et=function(e){He.current&&"touchstart"!==e.type||(ke&&ke.removeAttribute("title"),clearTimeout(Fe.current),clearTimeout(qe.current),$||ht&&te?Fe.current=setTimeout((function(){Qe(e)}),ht?te:$):Qe(e))},tt=function(e){clearTimeout(Fe.current),clearTimeout(qe.current),qe.current=setTimeout((function(){$e(e)}),ce)},nt=(0,ct.Z)(),it=nt.isFocusVisibleRef,at=nt.onBlur,lt=nt.onFocus,bt=nt.ref,wt=s.useState(!1),xt=(0,o.Z)(wt,2)[1],Ot=function(e){at(e),!1===it.current&&(xt(!1),tt(e))},Zt=function(e){ke||Ae(e.currentTarget),lt(e),!0===it.current&&(xt(!0),et(e))},Tt=function(e){He.current=!0;var t=B.props;t.onTouchStart&&t.onTouchStart(e)},Et=et,Pt=tt;s.useEffect((function(){if(Ye)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||$e(e)}}),[$e,Ye]);var Rt=(0,b.Z)(B.ref,bt,Ae,t);Ze||0===Ze||(Ye=!1);var jt=s.useRef({x:0,y:0}),Mt=s.useRef(),Dt={},Lt="string"===typeof Ze;U?(Dt.title=Ye||!Lt||X?null:Ze,Dt["aria-describedby"]=Ye?Ge:null):(Dt["aria-label"]=Lt?Ze:null,Dt["aria-labelledby"]=Ye&&!Lt?Ge:null);var kt=(0,a.Z)({},Dt,Re,B.props,{className:(0,p.default)(Re.className,B.props.className),onTouchStart:Tt,ref:Rt},ie?{onMouseMove:function(e){var t=B.props;t.onMouseMove&&t.onMouseMove(e),jt.current={x:e.clientX,y:e.clientY},Mt.current&&Mt.current.update()}}:{});var At={};K||(kt.onTouchStart=function(e){Tt(e),clearTimeout(qe.current),clearTimeout(Ie.current),Ke(),Je.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ue.current=setTimeout((function(){document.body.style.WebkitUserSelect=Je.current,et(e)}),oe)},kt.onTouchEnd=function(e){B.props.onTouchEnd&&B.props.onTouchEnd(e),Ke(),clearTimeout(qe.current),qe.current=setTimeout((function(){$e(e)}),ue)}),X||(kt.onMouseOver=yt(Et,kt.onMouseOver),kt.onMouseLeave=yt(Pt,kt.onMouseLeave),Ne||(At.onMouseOver=Et,At.onMouseLeave=Pt)),z||(kt.onFocus=yt(Zt,kt.onFocus),kt.onBlur=yt(Ot,kt.onBlur),Ne||(At.onFocus=Zt,At.onBlur=Ot));var St=s.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(We),options:{element:We,padding:4}}];return null!=(e=ye.popperOptions)&&e.modifiers&&(t=t.concat(ye.popperOptions.modifiers)),(0,a.Z)({},ye.popperOptions,{modifiers:t})}),[We,ye]),Ct=(0,a.Z)({},S,{isRtl:Me,arrow:W,disableInteractive:Ne,placement:ve,PopperComponentProp:he,touch:He.current}),Wt=function(e){var t=e.classes,n=e.disableInteractive,o=e.arrow,r=e.touch,i=e.placement,a={popper:["popper",!n&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",r&&"touch","tooltipPlacement".concat((0,h.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,u.Z)(a,ut,t)}(Ct),Bt=null!=(n=null!=(r=Oe.popper)?r:N.Popper)?n:dt,Ht=null!=(c=null!=(f=null!=(d=Oe.transition)?d:N.Transition)?f:Ee)?c:P,Nt=null!=(g=null!=(y=Oe.tooltip)?y:N.Tooltip)?g:mt,It=null!=(x=null!=(O=Oe.arrow)?O:N.Arrow)?x:vt,Ft=(0,l.Z)(Bt,(0,a.Z)({},ye,null!=(Z=we.popper)?Z:F.popper,{className:(0,p.default)(Wt.popper,null==ye?void 0:ye.className,null==(T=null!=(E=we.popper)?E:F.popper)?void 0:T.className)}),Ct),qt=(0,l.Z)(Ht,(0,a.Z)({},Pe,null!=(R=we.transition)?R:F.transition),Ct),Ut=(0,l.Z)(Nt,(0,a.Z)({},null!=(j=we.tooltip)?j:F.tooltip,{className:(0,p.default)(Wt.tooltip,null==(M=null!=(D=we.tooltip)?D:F.tooltip)?void 0:M.className)}),Ct),Vt=(0,l.Z)(It,(0,a.Z)({},null!=(L=we.arrow)?L:F.arrow,{className:(0,p.default)(Wt.arrow,null==(k=null!=(A=we.arrow)?A:F.arrow)?void 0:k.className)}),Ct);return(0,w.jsxs)(s.Fragment,{children:[s.cloneElement(B,kt),(0,w.jsx)(Bt,(0,a.Z)({as:null!=he?he:ot,placement:ve,anchorEl:ie?{getBoundingClientRect:function(){return{top:jt.current.y,left:jt.current.x,right:jt.current.x,bottom:jt.current.y,width:0,height:0}}}:ke,popperRef:Mt,open:!!ke&&Ye,id:Ge,transition:!0},At,Ft,{popperOptions:St,children:function(e){var t=e.TransitionProps;return(0,w.jsx)(Ht,(0,a.Z)({timeout:je.transitions.duration.shorter},t,qt,{"data-foo":"bar",children:(0,w.jsxs)(Nt,(0,a.Z)({},Ut,{children:[Ze,W?(0,w.jsx)(It,(0,a.Z)({},Vt,{ref:Be})):null]}))}))}}))]})})),wt=bt}}]);
//# sourceMappingURL=6465.bced87ce.chunk.js.map