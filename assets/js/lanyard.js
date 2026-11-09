var NE=Object.create;var Jv=Object.defineProperty;var LE=Object.getOwnPropertyDescriptor;var OE=Object.getOwnPropertyNames;var IE=Object.getPrototypeOf,PE=Object.prototype.hasOwnProperty;var Xi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var zE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of OE(t))!PE.call(e,s)&&s!==n&&Jv(e,s,{get:()=>t[s],enumerable:!(i=LE(t,s))||i.enumerable});return e};var Ba=(e,t,n)=>(n=e!=null?NE(IE(e)):{},zE(t||!e||!e.__esModule?Jv(n,"default",{value:e,enumerable:!0}):n,e));var l_=Xi(Wt=>{"use strict";var pp=Symbol.for("react.transitional.element"),BE=Symbol.for("react.portal"),FE=Symbol.for("react.fragment"),HE=Symbol.for("react.strict_mode"),VE=Symbol.for("react.profiler"),GE=Symbol.for("react.consumer"),kE=Symbol.for("react.context"),XE=Symbol.for("react.forward_ref"),qE=Symbol.for("react.suspense"),WE=Symbol.for("react.memo"),t_=Symbol.for("react.lazy"),YE=Symbol.for("react.activity"),ZE=Symbol.for("react.view_transition"),Kv=Symbol.iterator;function JE(e){return e===null||typeof e!="object"?null:(e=Kv&&e[Kv]||e["@@iterator"],typeof e=="function"?e:null)}var e_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n_=Object.assign,i_={};function Br(e,t,n){this.props=e,this.context=t,this.refs=i_,this.updater=n||e_}Br.prototype.isReactComponent={};Br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function s_(){}s_.prototype=Br.prototype;function mp(e,t,n){this.props=e,this.context=t,this.refs=i_,this.updater=n||e_}var gp=mp.prototype=new s_;gp.constructor=mp;n_(gp,Br.prototype);gp.isPureReactComponent=!0;var Qv=Array.isArray;function dp(){}var Re={H:null,A:null,T:null,S:null},a_=Object.prototype.hasOwnProperty;function vp(e,t,n){var i=n.ref;return{$$typeof:pp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function KE(e,t){return vp(e.type,t,e.props)}function _p(e){return typeof e=="object"&&e!==null&&e.$$typeof===pp}function QE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jv=/\/+/g;function fp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?QE(""+e.key):t.toString(36)}function jE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(dp,dp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function zr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case pp:case BE:r=!0;break;case t_:return r=e._init,zr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+fp(e,0):i,Qv(s)?(n="",r!=null&&(n=r.replace(jv,"$&/")+"/"),zr(s,t,n,"",function(c){return c})):s!=null&&(_p(s)&&(s=KE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(jv,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Qv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+fp(i,l),r+=zr(i,t,n,a,s);else if(l=JE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+fp(i,l++),r+=zr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return zr(jE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function xu(e,t,n){if(e==null)return e;var i=[],s=0;return zr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function $E(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var $v=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function r_(e){var t=Re.T,n={};n.types=t!==null?t.types:null,Re.T=n;try{var i=e(),s=Re.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(dp,$v)}catch(a){$v(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Re.T=t}}function o_(e){var t=Re.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else r_(o_.bind(null,e))}var tT={map:xu,forEach:function(e,t,n){xu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xu(e,function(){t++}),t},toArray:function(e){return xu(e,function(t){return t})||[]},only:function(e){if(!_p(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Wt.Activity=YE;Wt.Children=tT;Wt.Component=Br;Wt.Fragment=FE;Wt.Profiler=VE;Wt.PureComponent=mp;Wt.StrictMode=HE;Wt.Suspense=qE;Wt.ViewTransition=ZE;Wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Re;Wt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Re.H.useMemoCache(e)}};Wt.addTransitionType=o_;Wt.cache=function(e){return function(){return e.apply(null,arguments)}};Wt.cacheSignal=function(){return null};Wt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=n_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!a_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return vp(e.type,s,i)};Wt.createContext=function(e){return e={$$typeof:kE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:GE,_context:e},e};Wt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)a_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return vp(e,a,s)};Wt.createRef=function(){return{current:null}};Wt.forwardRef=function(e){return{$$typeof:XE,render:e}};Wt.isValidElement=_p;Wt.lazy=function(e){return{$$typeof:t_,_payload:{_status:-1,_result:e},_init:$E}};Wt.memo=function(e,t){return{$$typeof:WE,type:e,compare:t===void 0?null:t}};Wt.startTransition=r_;Wt.unstable_useCacheRefresh=function(){return Re.H.useCacheRefresh()};Wt.use=function(e){return Re.H.use(e)};Wt.useActionState=function(e,t,n){return Re.H.useActionState(e,t,n)};Wt.useCallback=function(e,t){return Re.H.useCallback(e,t)};Wt.useContext=function(e){return Re.H.useContext(e)};Wt.useDebugValue=function(){};Wt.useDeferredValue=function(e,t){return Re.H.useDeferredValue(e,t)};Wt.useEffect=function(e,t){return Re.H.useEffect(e,t)};Wt.useEffectEvent=function(e){return Re.H.useEffectEvent(e)};Wt.useId=function(){return Re.H.useId()};Wt.useImperativeHandle=function(e,t,n){return Re.H.useImperativeHandle(e,t,n)};Wt.useInsertionEffect=function(e,t){return Re.H.useInsertionEffect(e,t)};Wt.useLayoutEffect=function(e,t){return Re.H.useLayoutEffect(e,t)};Wt.useMemo=function(e,t){return Re.H.useMemo(e,t)};Wt.useOptimistic=function(e,t){return Re.H.useOptimistic(e,t)};Wt.useReducer=function(e,t,n){return Re.H.useReducer(e,t,n)};Wt.useRef=function(e){return Re.H.useRef(e)};Wt.useState=function(e){return Re.H.useState(e)};Wt.useSyncExternalStore=function(e,t,n){return Re.H.useSyncExternalStore(e,t,n)};Wt.useTransition=function(){return Re.H.useTransition()};Wt.version="19.3.1"});var El=Xi((_N,c_)=>{"use strict";c_.exports=l_()});var y_=Xi(Oe=>{"use strict";function Mp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Su(s,t))e[i]=t,e[n]=s,n=i;else break t}}function qi(e){return e.length===0?null:e[0]}function bu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Su(o,n))l<s&&0>Su(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Su(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Su(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Oe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(u_=performance,Oe.unstable_now=function(){return u_.now()}):(yp=Date,h_=yp.now(),Oe.unstable_now=function(){return yp.now()-h_});var u_,yp,h_,gs=[],Xs=[],eT=1,pi=null,xn=3,bp=!1,Tl=!1,Al=!1,Ep=!1,p_=typeof setTimeout=="function"?setTimeout:null,m_=typeof clearTimeout=="function"?clearTimeout:null,f_=typeof setImmediate<"u"?setImmediate:null;function Mu(e){for(var t=qi(Xs);t!==null;){if(t.callback===null)bu(Xs);else if(t.startTime<=e)bu(Xs),t.sortIndex=t.expirationTime,Mp(gs,t);else break;t=qi(Xs)}}function Tp(e){if(Al=!1,Mu(e),!Tl)if(qi(gs)!==null)Tl=!0,Hr||(Hr=!0,Fr());else{var t=qi(Xs);t!==null&&Ap(Tp,t.startTime-e)}}var Hr=!1,wl=-1,g_=5,v_=-1;function __(){return Ep?!0:!(Oe.unstable_now()-v_<g_)}function xp(){if(Ep=!1,Hr){var e=Oe.unstable_now();v_=e;var t=!0;try{t:{Tl=!1,Al&&(Al=!1,m_(wl),wl=-1),bp=!0;var n=xn;try{e:{for(Mu(e),pi=qi(gs);pi!==null&&!(pi.expirationTime>e&&__());){var i=pi.callback;if(typeof i=="function"){pi.callback=null,xn=pi.priorityLevel;var s=i(pi.expirationTime<=e);if(e=Oe.unstable_now(),typeof s=="function"){pi.callback=s,Mu(e),t=!0;break e}pi===qi(gs)&&bu(gs),Mu(e)}else bu(gs);pi=qi(gs)}if(pi!==null)t=!0;else{var a=qi(Xs);a!==null&&Ap(Tp,a.startTime-e),t=!1}}break t}finally{pi=null,xn=n,bp=!1}t=void 0}}finally{t?Fr():Hr=!1}}}var Fr;typeof f_=="function"?Fr=function(){f_(xp)}:typeof MessageChannel<"u"?(Sp=new MessageChannel,d_=Sp.port2,Sp.port1.onmessage=xp,Fr=function(){d_.postMessage(null)}):Fr=function(){p_(xp,0)};var Sp,d_;function Ap(e,t){wl=p_(function(){e(Oe.unstable_now())},t)}Oe.unstable_IdlePriority=5;Oe.unstable_ImmediatePriority=1;Oe.unstable_LowPriority=4;Oe.unstable_NormalPriority=3;Oe.unstable_Profiling=null;Oe.unstable_UserBlockingPriority=2;Oe.unstable_cancelCallback=function(e){e.callback=null};Oe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g_=0<e?Math.floor(1e3/e):5};Oe.unstable_getCurrentPriorityLevel=function(){return xn};Oe.unstable_next=function(e){switch(xn){case 1:case 2:case 3:var t=3;break;default:t=xn}var n=xn;xn=t;try{return e()}finally{xn=n}};Oe.unstable_requestPaint=function(){Ep=!0};Oe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=xn;xn=e;try{return t()}finally{xn=n}};Oe.unstable_scheduleCallback=function(e,t,n){var i=Oe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:eT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Mp(Xs,e),qi(gs)===null&&e===qi(Xs)&&(Al?(m_(wl),wl=-1):Al=!0,Ap(Tp,n-i))):(e.sortIndex=s,Mp(gs,e),Tl||bp||(Tl=!0,Hr||(Hr=!0,Fr()))),e};Oe.unstable_shouldYield=__;Oe.unstable_wrapCallback=function(e){var t=xn;return function(){var n=xn;xn=t;try{return e.apply(this,arguments)}finally{xn=n}}}});var S_=Xi((xN,x_)=>{"use strict";x_.exports=y_()});var E_=Xi(Sn=>{"use strict";var nT=El();function b_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function qs(){}var wn={d:{f:qs,r:function(){throw Error(b_(522))},D:qs,C:qs,L:qs,m:qs,X:qs,S:qs,M:qs},p:0,findDOMNode:null},iT=Symbol.for("react.portal"),sT=Symbol.for("react.recoverable"),M_=Symbol.for("react.optimistic_key");function aT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:iT,key:i==null?null:i===M_?M_:""+i,children:e,containerInfo:t,implementation:n}}var Rl=nT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Eu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=wn;Sn.browser=function(e){return{$$typeof:sT,_reason:e}};Sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(b_(299));return aT(e,t,null,n)};Sn.flushSync=function(e){var t=Rl.T,n=wn.p;try{if(Rl.T=null,wn.p=2,e)return e()}finally{Rl.T=t,wn.p=n,wn.d.f()}};Sn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,wn.d.C(e,t))};Sn.prefetchDNS=function(e){typeof e=="string"&&wn.d.D(e)};Sn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Eu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?wn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&wn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Sn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Eu(t.as,t.crossOrigin);wn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&wn.d.M(e)};Sn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Eu(n,t.crossOrigin);wn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Sn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Eu(t.as,t.crossOrigin);wn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else wn.d.m(e)};Sn.requestFormReset=function(e){wn.d.r(e)};Sn.unstable_batchedUpdates=function(e,t){return e(t)};Sn.useFormState=function(e,t,n){return Rl.H.useFormState(e,t,n)};Sn.useFormStatus=function(){return Rl.H.useHostTransitionStatus()};Sn.version="19.3.1"});var w_=Xi((MN,A_)=>{"use strict";function T_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T_)}catch(e){console.error(e)}}T_(),A_.exports=E_()});var d1=Xi(rf=>{"use strict";var $e=S_(),fx=El(),rT=w_();function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function dx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function px(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R_(e){if(mc(e)!==e)throw Error(K(188))}function oT(e){var t=e.alternate;if(!t){if(t=mc(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return R_(s),e;if(a===i)return R_(s),t;a=a.sibling}throw Error(K(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function gx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=gx(e),t!==null)return t;e=e.sibling}return null}function Gn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Gn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function ar(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function C_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function vx(e){var t=[null,null],n=ar(e);return n===null||_x(t,e,n.child,{foundSelf:!1}),t}function _x(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&_x(e,t,n.child,i))return!0;n=n.sibling}return!1}function je(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(K(559))}}var Yr=null,sm=null;function lT(e,t,n){return e===n?!0:e===t?(Yr=e,!0):!1}function cT(e,t,n){return e===n?(sm=e,!1):e===t?(sm!==null&&(Yr=e),!0):!1}function D_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function am(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var we=Object.assign,uT=Symbol.for("react.element"),Tu=Symbol.for("react.transitional.element"),Il=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),yx=Symbol.for("react.strict_mode"),rm=Symbol.for("react.profiler"),xx=Symbol.for("react.consumer"),Qi=Symbol.for("react.context"),mg=Symbol.for("react.forward_ref"),om=Symbol.for("react.suspense"),lm=Symbol.for("react.suspense_list"),gg=Symbol.for("react.memo"),Js=Symbol.for("react.lazy");Symbol.for("react.scope");var cm=Symbol.for("react.activity"),hT=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var fT=Symbol.for("react.memo_cache_sentinel"),um=Symbol.for("react.view_transition"),dT=Symbol.for("react.recoverable"),U_=Symbol.iterator;function Cl(e){return e===null||typeof e!="object"?null:(e=U_&&e[U_]||e["@@iterator"],typeof e=="function"?e:null)}var pT=Symbol.for("react.client.reference");function hm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zr:return"Fragment";case rm:return"Profiler";case yx:return"StrictMode";case om:return"Suspense";case lm:return"SuspenseList";case cm:return"Activity";case um:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Il:return"Portal";case Qi:return e.displayName||"Context";case xx:return(e._context.displayName||"Context")+".Consumer";case mg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gg:return t=e.displayName||null,t!==null?t:hm(e.type)||"Memo";case Js:t=e._payload,e=e._init;try{return hm(e(t))}catch{}}return null}var Pl=Array.isArray,kt=fx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me=rT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wa={pending:!1,data:null,method:null,action:null},fm=[],Jr=-1;function ss(e){return{current:e}}function pn(e){0>Jr||(e.current=fm[Jr],fm[Jr]=null,Jr--)}function Ue(e,t){Jr++,fm[Jr]=e.current,e.current=t}var es=ss(null),$l=ss(null),sa=ss(null),hh=ss(null);function fh(e,t){switch(Ue(sa,t),Ue($l,e),Ue(es,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qy(t),e=GM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pn(es),Ue(es,e)}function go(){pn(es),pn($l),pn(sa)}function dm(e){var t=e.memoizedState;t!==null&&(Ao._currentValue=t.memoizedState,Ue(hh,e)),t=es.current;var n=GM(t,e.type);t!==n&&(Ue($l,e),Ue(es,n))}function dh(e){$l.current===e&&(pn(es),pn($l)),hh.current===e&&(pn(hh),Ao._currentValue=Wa)}var wp,N_;function Ys(e){if(wp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wp=t&&t[1]||"",N_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wp+e+N_}var Rp=!1;function Cp(e,t){if(!e||Rp)return"";Rp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var h=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){h=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){h=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Rp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ys(n):""}function mT(e,t){switch(e.tag){case 26:case 27:case 5:return Ys(e.type);case 16:return Ys("Lazy");case 13:return e.child!==t&&t!==null?Ys("Suspense Fallback"):Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 15:return Cp(e.type,!1);case 11:return Cp(e.type.render,!1);case 1:return Cp(e.type,!0);case 31:return Ys("Activity");case 30:return Ys("ViewTransition");default:return""}}function L_(e){try{var t="",n=null;do t+=mT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var pm=Object.prototype.hasOwnProperty,vg=$e.unstable_scheduleCallback,Dp=$e.unstable_cancelCallback,gT=$e.unstable_shouldYield,vT=$e.unstable_requestPaint,$n=$e.unstable_now,_T=$e.unstable_getCurrentPriorityLevel,Sx=$e.unstable_ImmediatePriority,Mx=$e.unstable_UserBlockingPriority,ph=$e.unstable_NormalPriority,yT=$e.unstable_LowPriority,bx=$e.unstable_IdlePriority,xT=$e.log,ST=$e.unstable_setDisableYieldValue,gc=null,ti=null;function js(e){if(typeof xT=="function"&&ST(e),ti&&typeof ti.setStrictMode=="function")try{ti.setStrictMode(gc,e)}catch{}}var ei=Math.clz32?Math.clz32:ET,MT=Math.log,bT=Math.LN2;function ET(e){return e>>>=0,e===0?32:31-(MT(e)/bT|0)|0}var Au=256,wu=262144,Ru=4194304;function Va(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Va(i):(r&=o,r!==0?s=Va(r):n||(n=o&~e,n!==0&&(s=Va(n))))):(o=i&~a,o!==0?s=Va(o):r!==0?s=Va(r):n||(n=i&~e,n!==0&&(s=Va(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function vc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ex(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ei(n),s=1<<i;t|=e[i],n&=~s}return t}function TT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tx(){var e=Ru;return Ru<<=1,(Ru&62914560)===0&&(Ru=4194304),e}function Up(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _c(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function AT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-ei(n),d=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var p=h[u];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Ax(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Ax(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ei(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function wx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ei(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Rx(e,t){var n=t&-t;return n=(n&42)!==0?1:_g(n),(n&(e.suspendedLanes|t))!==0?0:n}function _g(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cx(){var e=me.p;return e!==0?e:(e=window.event,e===void 0?32:u1(e.type))}function O_(e,t){var n=me.p;try{return me.p=e,t()}finally{me.p=n}}var Cs=Math.random().toString(36).slice(2),fn="__reactFiber$"+Cs,kn="__reactProps$"+Cs,Co="__reactContainer$"+Cs,I_="__reactEvents$"+Cs,wT="__reactListeners$"+Cs,RT="__reactHandles$"+Cs,P_="__reactResources$"+Cs,yc="__reactMarker$"+Cs,mh="__reactLoad$"+Cs;function Vh(e){delete e[fn],delete e[kn],delete e[wT],delete e[RT]}function Xa(e){var t;if(t=e[fn])return t;for(var n=e.parentNode;n;){if(t=n[Co]||n[fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$y(e);e!==null;){if(n=e[fn])return n;e=$y(e)}return t}e=n,n=e.parentNode}return null}function Do(e){if(e=e[fn]||e[Co]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function ao(e){var t=e[P_];return t||(t=e[P_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function on(e){e[yc]=!0}function Dx(e){e[mh]=void 0}var Ux=new Set,Nx={};function rr(e,t){vo(e,t),vo(e+"Capture",t)}function vo(e,t){for(Nx[e]=t,e=0;e<t.length;e++)Ux.add(t[e])}var CT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),z_={},B_={};function DT(e){return pm.call(B_,e)?!0:pm.call(z_,e)?!1:CT.test(e)?B_[e]=!0:(z_[e]=!0,!1)}var fe=!1;function F_(){var e=fe;return fe=!1,e}function Wu(e,t,n){if(DT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Cu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function vs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Jn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function UT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mm(e){if(!e._valueTracker){var t=Lx(e)?"checked":"value";e._valueTracker=UT(e,t,""+e[t])}}function Ox(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Lx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var NT=/[\n"\\]/g;function yi(e){return e.replace(NT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gm(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Jn(t)):e.value!==""+Jn(t)&&(e.value=""+Jn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Np(e,Jn(e.value)):Np(e,Jn(t)):n!=null?Np(e,Jn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Jn(o):e.removeAttribute("name")}function Ix(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){mm(e);return}n=n!=null?""+Jn(n):"",t=t!=null?""+Jn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),mm(e)}function Np(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ro(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Jn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Px(e,t,n){if(t!=null&&(t=""+Jn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Jn(n):""}function zx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(K(92));if(Pl(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Jn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),mm(e)}function _o(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var LT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function H_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||LT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Bx(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",fe=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(H_(e,s,i),fe=!0)}else for(var a in t)t.hasOwnProperty(a)&&H_(e,a,t[a])}function xg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var OT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),IT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yu(e){return IT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var vm=null;function Sg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kr=null,oo=null;function V_(e){var t=Do(e);if(t&&(e=t.stateNode)){var n=e[kn]||null;t:switch(e=t.stateNode,t.type){case"input":if(gm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[kn]||null;if(!s)throw Error(K(90));gm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ox(i)}break t;case"textarea":Px(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&ro(e,!!n.multiple,t,!1)}}}var Lp=!1;function Fx(e,t,n){if(Lp)return e(t,n);Lp=!0;try{var i=e(t);return i}finally{if(Lp=!1,(Kr!==null||oo!==null)&&(ef(),Kr&&(t=Kr,e=oo,oo=Kr=null,V_(t),e)))for(t=0;t<e.length;t++)V_(e[t])}}function tc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[kn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var bs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_m=!1;if(bs)try{Vr={},Object.defineProperty(Vr,"passive",{get:function(){_m=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{_m=!1}var Vr,$s=null,Mg=null,Zu=null;function Hx(){if(Zu)return Zu;var e,t=Mg,n=t.length,i,s="value"in $s?$s.value:$s.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Zu=s.slice(e,1<i?1-i:void 0)}function Ju(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Du(){return!0}function G_(){return!1}function Un(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Du:G_,this.isPropagationStopped=G_,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Du)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Du)},persist:function(){},isPersistent:Du}),t}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gh=Un(ya),xc=we({},ya,{view:0,detail:0}),PT=Un(xc),Op,Ip,Dl,kh=we({},xc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dl&&(Dl&&e.type==="mousemove"?(Op=e.screenX-Dl.screenX,Ip=e.screenY-Dl.screenY):Ip=Op=0,Dl=e),Op)},movementY:function(e){return"movementY"in e?e.movementY:Ip}}),k_=Un(kh),zT=we({},kh,{dataTransfer:0}),BT=Un(zT),FT=we({},xc,{relatedTarget:0}),Pp=Un(FT),HT=we({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),VT=Un(HT),GT=we({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kT=Un(GT),XT=we({},ya,{data:0}),X_=Un(XT),qT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=YT[e])?!!t[e]:!1}function bg(){return ZT}var JT=we({},xc,{key:function(e){if(e.key){var t=qT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ju(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?WT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bg,charCode:function(e){return e.type==="keypress"?Ju(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ju(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),KT=Un(JT),QT=we({},kh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q_=Un(QT),jT=we({},ya,{submitter:0}),$T=Un(jT),tA=we({},xc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bg}),eA=Un(tA),nA=we({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),iA=Un(nA),sA=we({},kh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aA=Un(sA),rA=we({},ya,{newState:0,oldState:0,source:0}),oA=Un(rA),lA=[9,13,27,32],Eg=bs&&"CompositionEvent"in window,Hl=null;bs&&"documentMode"in document&&(Hl=document.documentMode);var cA=bs&&"TextEvent"in window&&!Hl,Vx=bs&&(!Eg||Hl&&8<Hl&&11>=Hl),W_=" ",Y_=!1;function Gx(e,t){switch(e){case"keyup":return lA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function uA(e,t){switch(e){case"compositionend":return kx(t);case"keypress":return t.which!==32?null:(Y_=!0,W_);case"textInput":return e=t.data,e===W_&&Y_?null:e;default:return null}}function hA(e,t){if(Qr)return e==="compositionend"||!Eg&&Gx(e,t)?(e=Hx(),Zu=Mg=$s=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vx&&t.locale!=="ko"?null:t.data;default:return null}}var fA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Z_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fA[e.type]:t==="textarea"}function Xx(e,t,n,i){Kr?oo?oo.push(i):oo=[i]:Kr=i,t=zh(t,"onChange"),0<t.length&&(n=new Gh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Vl=null,ec=null;function dA(e){FM(e,0)}function Xh(e){var t=zl(e);if(Ox(t))return e}function J_(e,t){if(e==="change")return t}var qx=!1;bs&&(bs?(Nu="oninput"in document,Nu||(zp=document.createElement("div"),zp.setAttribute("oninput","return;"),Nu=typeof zp.oninput=="function"),Uu=Nu):Uu=!1,qx=Uu&&(!document.documentMode||9<document.documentMode));var Uu,Nu,zp;function K_(){Vl&&(Vl.detachEvent("onpropertychange",Wx),ec=Vl=null)}function Wx(e){if(e.propertyName==="value"&&Xh(ec)){var t=[];Xx(t,ec,e,Sg(e)),Fx(dA,t)}}function pA(e,t,n){e==="focusin"?(K_(),Vl=t,ec=n,Vl.attachEvent("onpropertychange",Wx)):e==="focusout"&&K_()}function mA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xh(ec)}function gA(e,t){if(e==="click")return Xh(t)}function vA(e,t){if(e==="input"||e==="change")return Xh(t)}function _A(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ii=typeof Object.is=="function"?Object.is:_A;function nc(e,t){if(ii(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!pm.call(t,s)||!ii(e[s],t[s]))return!1}return!0}function ym(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Q_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function j_(e,t){var n=Q_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Q_(n)}}function Yx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ym(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ym(e.document)}return t}function Tg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var yA=bs&&"documentMode"in document&&11>=document.documentMode,jr=null,xm=null,Gl=null,Sm=!1;function $_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sm||jr==null||jr!==ym(i)||(i=jr,"selectionStart"in i&&Tg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Gl&&nc(Gl,i)||(Gl=i,i=zh(xm,"onSelect"),0<i.length&&(t=new Gh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=jr)))}function Fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $r={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionrun:Fa("Transition","TransitionRun"),transitionstart:Fa("Transition","TransitionStart"),transitioncancel:Fa("Transition","TransitionCancel"),transitionend:Fa("Transition","TransitionEnd")},Bp={},Jx={};bs&&(Jx=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function or(e){if(Bp[e])return Bp[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jx)return Bp[e]=t[n];return e}var Kx=or("animationend"),Qx=or("animationiteration"),jx=or("animationstart"),xA=or("transitionrun"),SA=or("transitionstart"),MA=or("transitioncancel"),$x=or("transitionend"),tS=new Map,Mm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mm.push("scrollEnd");function Ui(e,t){tS.set(e,t),rr(t,[e])}var bA=0;function Es(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Di.identifierPrefix;var n=bA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function ty(e){if(e==null||typeof e=="string")return e;var t=null,n=mo;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Ds(e,t){return e=ty(e),t=ty(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var gh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],to=0,Ag=0;function qh(){for(var e=to,t=Ag=to=0;t<e;){var n=gi[t];gi[t++]=null;var i=gi[t];gi[t++]=null;var s=gi[t];gi[t++]=null;var a=gi[t];if(gi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&eS(n,s,a)}}function Wh(e,t,n,i){gi[to++]=e,gi[to++]=t,gi[to++]=n,gi[to++]=i,Ag|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function wg(e,t,n,i){return Wh(e,t,n,i),vh(e)}function lr(e,t){return Wh(e,null,null,t),vh(e)}function eS(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ei(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function vh(e){if(50<jl)throw jl=0,ah=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var eo={};function EA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,n,i){return new EA(e,t,n,i)}function Rg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ss(e,t){var n=e.alternate;return n===null?(n=Hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function nS(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ku(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Rg(i)&&(r=1);else if(typeof i=="string")r=Kw(e,n,es.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case cm:return e=Hn(31,n,t,s),e.elementType=cm,e.lanes=a,e;case Zr:return Ya(n.children,s,a,t);case yx:r=8,s|=24;break;case rm:return e=Hn(12,n,t,s|2),e.elementType=rm,e.lanes=a,e;case om:return e=Hn(13,n,t,s),e.elementType=om,e.lanes=a,e;case lm:return e=Hn(19,n,t,s),e.elementType=lm,e.lanes=a,e;case hT:case um:return e=s|32,e=Hn(30,n,t,e),e.elementType=um,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Qi:r=10;break t;case xx:r=9;break t;case mg:r=11;break t;case gg:r=14;break t;case Js:r=16,i=null;break t}r=29,n=Error(K(130,e===null?"null":typeof e,"")),i=null}return t=Hn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ya(e,t,n,i){return e=Hn(7,e,i,t),e.lanes=n,e}function Fp(e,t,n){return e=Hn(6,e,null,t),e.lanes=n,e}function iS(e){var t=Hn(18,null,null,0);return t.stateNode=e,t}function Hp(e,t,n){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ey=new WeakMap;function xi(e,t){if(typeof e=="object"&&e!==null){var n=ey.get(e);return n!==void 0?n:(t={value:e,source:t,stack:L_(t)},ey.set(e,t),t)}return{value:e,source:t,stack:L_(t)}}var no=[],io=0,_h=null,ic=0,vi=[],_i=0,pa=null,$i=1,ts="";function ys(e,t){no[io++]=ic,no[io++]=_h,_h=e,ic=t}function sS(e,t,n){vi[_i++]=$i,vi[_i++]=ts,vi[_i++]=pa,pa=e;var i=$i;e=ts;var s=32-ei(i)-1;i&=~(1<<s),n+=1;var a=32-ei(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,$i=1<<32-ei(t)+s|n<<s|i,ts=a+e}else $i=1<<a|n<<s|i,ts=e}function Yh(e){e.return!==null&&(ys(e,1),sS(e,1,0))}function Cg(e){for(;e===_h;)_h=no[--io],no[io]=null,ic=no[--io],no[io]=null;for(;e===pa;)pa=vi[--_i],vi[_i]=null,ts=vi[--_i],vi[_i]=null,$i=vi[--_i],vi[_i]=null}function aS(e,t){vi[_i++]=$i,vi[_i++]=ts,vi[_i++]=pa,$i=t.id,ts=t.overflow,pa=e}var ln=null,De=null,ee=!1,aa=null,Si=!1,bm=Error(K(519));function ma(e){var t=Error(K(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sc(xi(t,e)),bm}function ny(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[fn]=e,t[kn]=i,n){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(n=0;n<lc.length;n++)se(lc[n],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Ix(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),zx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||VM(t.textContent,n)?(i.popover!=null&&(se("beforetoggle",t),se("toggle",t)),i.onScroll!=null&&se("scroll",t),i.onScrollEnd!=null&&se("scrollend",t),i.onClick!=null&&(t.onclick=ji),t=!0):t=!1,t||ma(e,!0)}function yh(e){for(ln=e.return;ln;)switch(ln.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:ln=ln.return}}function Gr(e){if(e!==ln)return!1;if(!ee)return yh(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||og(e.type,e.memoizedProps)),n=!n),n&&De&&ma(e),yh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));De=jy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));De=jy(e)}else t===27?(t=De,xa(e.type)?(e=hg,hg=null,De=e):De=t):De=ln?Mi(e.stateNode.nextSibling):null;return!0}function Qa(){De=ln=null,ee=!1}function Vp(){var e=aa;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),aa=null),e}function sc(e){aa===null?aa=[e]:aa.push(e)}var Em=ss(null),cr=null,xs=null;function ta(e,t,n){Ue(Em,t._currentValue),t._currentValue=n}function Ms(e){e._currentValue=Em.current,pn(Em)}function Qu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Tm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Qu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(K(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Qu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Qu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function ja(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(K(387));if(r=r.memoizedProps,r!==null){var o=s.type;ii(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===hh.current){if(r=s.alternate,r===null)throw Error(K(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}s=s.return}return e!==null&&Tm(t,e,n,i),t.flags|=262144,e!==null}function xh(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){cr=e,xs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dn(e){return rS(cr,e)}function Lu(e,t){return cr===null&&$a(e),rS(e,t)}function rS(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xs===null){if(e===null)throw Error(K(308));xs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xs=xs.next=t;return n}var TA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},AA=$e.unstable_scheduleCallback,wA=$e.unstable_NormalPriority,Ye={$$typeof:Qi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dg(){return{controller:new TA,data:new Map,refCount:0}}function Sc(e){e.refCount--,e.refCount===0&&AA(wA,function(){e.controller.abort()})}function iy(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Bl=null;function RA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var kl=null,Am=0,tr=0,lo=null;function CA(e,t){if(kl===null){var n=kl=[];Am=0,tr=s0(),lo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Am++,t.then(sy,sy),t}function sy(){if(--Am===0&&(Bl=null,kl!==null)){lo!==null&&(lo.status="fulfilled");var e=kl;kl=null,tr=0,lo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function DA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var ay=kt.S;kt.S=function(e,t){if(EM=$n(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&CA(e,t),Bl!==null)for(var n=bo;n!==null;)iy(n,Bl),n=n.next;if(n=e.types,n!==null){for(var i=bo;i!==null;)iy(i,n),i=i.next;if(tr!==0){i=Bl,i===null&&(i=Bl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}ay!==null&&ay(e,t)};var Za=ss(null);function Ug(){var e=Za.current;return e!==null?e:Ae.pooledCache}function ju(e,t){t===null?Ue(Za,Za.current):Ue(Za,t.pool)}function oS(){var e=Ug();return e===null?null:{parent:Ye._currentValue,pool:e}}var Uo=Error(K(460)),Ng=Error(K(474)),Zh=Error(K(542)),Sh={then:function(){}};function ry(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ji,ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ly(e),e===void 0&&!("reason"in t)?Error(K(600)):e;default:if(typeof t.status=="string")t.then(ji,ji);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ly(e),e}throw Ja=t,Uo}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ja=n,Uo):n}}var Ja=null;function oy(){if(Ja===null)throw Error(K(459));var e=Ja;return Ja=null,e}function ly(e){if(e===Uo||e===Zh)throw Error(K(483))}var co=null,ac=0;function Ou(e){var t=ac;return ac+=1,co===null&&(co=[]),lS(co,e,t)}function Ws(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Iu(e,t){throw t.$$typeof===uT?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cS(e){function t(f,v){if(e){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key===null?v.set(f.index,f):v.set(f.key,f),f=f.sibling;return v}function s(f,v){return f=Ss(f,v),f.index=0,f.sibling=null,f}function a(f,v,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=134217730,v)):(f.flags|=1048576,v)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,v,_,y){return v===null||v.tag!==6?(v=Fp(_,f.mode,y),v.return=f,v):(v=s(v,_),v.return=f,v)}function l(f,v,_,y){var A=_.type;return A===Zr?(f=u(f,v,_.props.children,y,_.key),Ws(f,_),f):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Js&&Ga(A)===v.type)?(v=s(v,_.props),Ws(v,_),v.return=f,v):(v=Ku(_.type,_.key,_.props,null,f.mode,y),Ws(v,_),v.return=f,v)}function c(f,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Hp(_,f.mode,y),v.return=f,v):(v=s(v,_.children||[]),v.return=f,v)}function u(f,v,_,y,A){return v===null||v.tag!==7?(v=Ya(_,f.mode,y,A),v.return=f,v):(v=s(v,_),v.return=f,v)}function d(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Fp(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tu:return _=Ku(v.type,v.key,v.props,null,f.mode,_),Ws(_,v),_.return=f,_;case Il:return v=Hp(v,f.mode,_),v.return=f,v;case Js:return v=Ga(v),d(f,v,_)}if(Pl(v)||Cl(v))return v=Ya(v,f.mode,_,null),v.return=f,v;if(typeof v.then=="function")return d(f,Ou(v),_);if(v.$$typeof===Qi)return d(f,Lu(f,v),_);Iu(f,v)}return null}function h(f,v,_,y){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A!==null?null:o(f,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Tu:return _.key===A?l(f,v,_,y):null;case Il:return _.key===A?c(f,v,_,y):null;case Js:return _=Ga(_),h(f,v,_,y)}if(Pl(_)||Cl(_))return A!==null?null:u(f,v,_,y,null);if(typeof _.then=="function")return h(f,v,Ou(_),y);if(_.$$typeof===Qi)return h(f,v,Lu(f,_),y);Iu(f,_)}return null}function p(f,v,_,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(_)||null,o(v,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Tu:return f=f.get(y.key===null?_:y.key)||null,l(v,f,y,A);case Il:return f=f.get(y.key===null?_:y.key)||null,c(v,f,y,A);case Js:return y=Ga(y),p(f,v,_,y,A)}if(Pl(y)||Cl(y))return f=f.get(_)||null,u(v,f,y,A,null);if(typeof y.then=="function")return p(f,v,_,Ou(y),A);if(y.$$typeof===Qi)return p(f,v,_,Lu(v,y),A);Iu(v,y)}return null}function g(f,v,_,y){for(var A=null,R=null,w=v,U=v=0,E=null;w!==null&&U<_.length;U++){w.index>U?(E=w,w=null):E=w.sibling;var S=h(f,w,_[U],y);if(S===null){w===null&&(w=E);break}e&&w&&S.alternate===null&&t(f,w),v=a(S,v,U),R===null?A=S:R.sibling=S,R=S,w=E}if(U===_.length)return n(f,w),ee&&ys(f,U),A;if(w===null){for(;U<_.length;U++)w=d(f,_[U],y),w!==null&&(v=a(w,v,U),R===null?A=w:R.sibling=w,R=w);return ee&&ys(f,U),A}for(w=i(w);U<_.length;U++)E=p(w,f,U,_[U],y),E!==null&&(e&&(S=E.alternate,S!==null&&w.delete(S.key===null?U:S.key)),v=a(E,v,U),R===null?A=E:R.sibling=E,R=E);return e&&w.forEach(function(C){return t(f,C)}),ee&&ys(f,U),A}function x(f,v,_,y){if(_==null)throw Error(K(151));for(var A=null,R=null,w=v,U=v=0,E=null,S=_.next();w!==null&&!S.done;U++,S=_.next()){w.index>U?(E=w,w=null):E=w.sibling;var C=h(f,w,S.value,y);if(C===null){w===null&&(w=E);break}e&&w&&C.alternate===null&&t(f,w),v=a(C,v,U),R===null?A=C:R.sibling=C,R=C,w=E}if(S.done)return n(f,w),ee&&ys(f,U),A;if(w===null){for(;!S.done;U++,S=_.next())S=d(f,S.value,y),S!==null&&(v=a(S,v,U),R===null?A=S:R.sibling=S,R=S);return ee&&ys(f,U),A}for(w=i(w);!S.done;U++,S=_.next())S=p(w,f,U,S.value,y),S!==null&&(e&&(E=S.alternate,E!==null&&w.delete(E.key===null?U:E.key)),v=a(S,v,U),R===null?A=S:R.sibling=S,R=S);return e&&w.forEach(function(z){return t(f,z)}),ee&&ys(f,U),A}function m(f,v,_,y){if(typeof _=="object"&&_!==null&&_.type===Zr&&_.key===null&&_.props.ref===void 0&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Tu:t:{for(var A=_.key;v!==null;){if(v.key===A){if(A=_.type,A===Zr){if(v.tag===7){n(f,v.sibling),y=s(v,_.props.children),Ws(y,_),y.return=f,f=y;break t}}else if(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Js&&Ga(A)===v.type){n(f,v.sibling),y=s(v,_.props),Ws(y,_),y.return=f,f=y;break t}n(f,v);break}else t(f,v);v=v.sibling}_.type===Zr?(y=Ya(_.props.children,f.mode,y,_.key),Ws(y,_),y.return=f,f=y):(y=Ku(_.type,_.key,_.props,null,f.mode,y),Ws(y,_),y.return=f,f=y)}return r(f);case Il:t:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(f,v.sibling),y=s(v,_.children||[]),y.return=f,f=y;break t}else{n(f,v);break}else t(f,v);v=v.sibling}y=Hp(_,f.mode,y),y.return=f,f=y}return r(f);case Js:return _=Ga(_),m(f,v,_,y)}if(Pl(_))return g(f,v,_,y);if(Cl(_)){if(A=Cl(_),typeof A!="function")throw Error(K(150));return _=A.call(_),x(f,v,_,y)}if(typeof _.then=="function")return m(f,v,Ou(_),y);if(_.$$typeof===Qi)return m(f,v,Lu(f,_),y);Iu(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,v!==null&&v.tag===6?(n(f,v.sibling),y=s(v,_),y.return=f,f=y):(n(f,v),y=Fp(_,f.mode,y),y.return=f,f=y),r(f)):n(f,v)}return function(f,v,_,y){try{ac=0;var A=m(f,v,_,y);return co=null,A}catch(w){if(w===Uo||w===Zh)throw w;var R=Hn(29,w,null,f.mode);return R.lanes=y,R.return=f,R}finally{}}}var er=cS(!0),uS=cS(!1),Ks=!1;function Lg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=vh(e),eS(e,null,n),t}return Wh(e,i,t,n),vh(e)}function Xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,wx(e,n)}}function Gp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Rm=!1;function ql(){if(Rm){var e=lo;if(e!==null)throw e}}function Wl(e,t,n,i){Rm=!1;var s=e.updateQueue;Ks=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,u=c=l=null,o=a;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(le&h)===h:(i&h)===h){h!==0&&h===tr&&(Rm=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;h=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,h);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break t;d=we({},d,h);break t;case 2:Ks=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),_a|=r,e.lanes=r,e.memoizedState=d}}function hS(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function fS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)hS(n[e],t)}var ga=ss(null),Mh=ss(0);function cy(e,t){e=Rs,Ue(Mh,e),Ue(ga,t),Rs=e|t.baseLanes}function Cm(){Ue(Mh,Rs),Ue(ga,ga.current)}function Og(){Rs=Mh.current,pn(ga),pn(Mh)}var vn=ss(null),Mn=null;function la(e){var t=e.alternate;Ue(mn,mn.current&1),Ue(vn,e),Mn===null&&(t===null||ga.current!==null||t.memoizedState!==null)&&(Mn=e)}function Dm(e){Ue(mn,mn.current),Ue(vn,e),Mn===null&&(Mn=e)}function dS(e){e.tag===22?(Ue(mn,mn.current),Ue(vn,e),Mn===null&&(Mn=e)):ca()}function ca(){Ue(mn,mn.current),Ue(vn,vn.current)}function Kn(e){pn(vn),Mn===e&&(Mn=null),pn(mn)}var mn=ss(0);function rc(e,t){Ue(vn,vn.current),Ue(mn,t)}function Ig(e){pn(mn),pn(vn),Mn===e&&(Mn=null)}function bh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ug(n)||l0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ts=0,Jt=null,be=null,We=null,Eh=!1,uo=!1,nr=!1,Th=0,oc=0,ho=null,UA=0;function He(){throw Error(K(321))}function Pg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ii(e[n],t[n]))return!1;return!0}function zg(e,t,n,i,s,a){return Ts=a,Jt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kt.H=e===null||e.memoizedState===null?XS:qS,nr=!1,a=n(i,s),nr=!1,uo&&(a=mS(t,n,i,s)),pS(e),a}function pS(e){kt.H=Ah;var t=be!==null&&be.next!==null;if(Ts=0,We=be=Jt=null,Eh=!1,oc=0,ho=null,t)throw Error(K(300));e===null||Ze||(e=e.dependencies,e!==null&&xh(e)&&(Ze=!0))}function mS(e,t,n,i){Jt=e;var s=0;do{if(uo&&(ho=null),oc=0,uo=!1,25<=s)throw Error(K(301));if(s+=1,We=be=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}kt.H=FA,a=t(n,i)}while(uo);return a}function NA(){var e=kt.H,t=e.useState()[0];return t=typeof t.then=="function"?Mc(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(Jt.flags|=1024),t}function Bg(){var e=Th!==0;return Th=0,e}function Fg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Hg(e){if(Eh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Eh=!1}Ts=0,We=be=Jt=null,uo=!1,oc=Th=0,ho=null}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Jt.memoizedState=We=e:We=We.next=e,We}function Ge(){if(be===null){var e=Jt.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=We===null?Jt.memoizedState:We.next;if(t!==null)We=t,be=e;else{if(e===null)throw Jt.alternate===null?Error(K(467)):Error(K(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},We===null?Jt.memoizedState=We=e:We=We.next=e}return We}function Jh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mc(e){var t=oc;return oc+=1,ho===null&&(ho=[]),e=lS(ho,e,t),t=Jt,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,kt.H=t===null||t.memoizedState===null?XS:qS),e}function Kh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mc(e);if(e.$$typeof===dT)return;if(e.$$typeof===Qi)return dn(e)}throw Error(K(438,String(e)))}function Vg(e){var t=null,n=Jt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Jt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Jh(),Jt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=fT;return t.index++,n}function As(e,t){return typeof t=="function"?t(e):t}function $u(e){var t=Ge();return Gg(t,be,e)}function Gg(e,t,n){var i=e.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(le&d)===d:(Ts&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===tr&&(u=!0);else if((Ts&h)===h){c=c.next,h===tr&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Jt.lanes|=h,_a|=h;d=c.action,nr&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,Jt.lanes|=d,_a|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!ii(a,e.memoizedState)&&(Ze=!0,u&&(n=lo,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function kp(e){var t=Ge(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);ii(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function gS(e,t,n){var i=Jt,s=Ge(),a=ee;if(a){if(n===void 0)throw Error(K(407));n=n()}else n=t();var r=!ii((be||s).memoizedState,n);if(r&&(s.memoizedState=n,Ze=!0),s=s.queue,kg(yS.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||We!==null&&(We.memoizedState.tag&1)!==0,yo(e?9:8,{destroy:void 0},_S.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ae===null)throw Error(K(349));a||(Ts&127)!==0||vS(i,t,n)}return n}function vS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Jt.updateQueue,t===null?(t=Jh(),Jt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _S(e,t,n,i){t.value=n,t.getSnapshot=i,xS(t)&&SS(e)}function yS(e,t,n){return n(function(){xS(t)&&SS(e)})}function xS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ii(e,n)}catch{return!0}}function SS(e){var t=lr(e,2);t!==null&&Vn(t,e,2)}function Um(e){var t=Dn();if(typeof e=="function"){var n=e;if(e=n(),nr){js(!0);try{n()}finally{js(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:e},t}function MS(e,t,n,i){return e.baseState=n,Gg(e,be,typeof i=="function"?i:As)}function LA(e,t,n,i,s){if(jh(e))throw Error(K(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};kt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,bS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function bS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=kt.T,r={};r.types=a!==null?a.types:null,kt.T=r;try{var o=n(s,i),l=kt.S;l!==null&&l(r,o),uy(e,t,o)}catch(c){Nm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),kt.T=a}}else try{a=n(s,i),uy(e,t,a)}catch(c){Nm(e,t,c)}}function uy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){hy(e,t,i)},function(i){return Nm(e,t,i)}):hy(e,t,n)}function hy(e,t,n){t.status="fulfilled",t.value=n,ES(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bS(e,n)))}function Nm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ES(t),t=t.next;while(t!==i)}e.action=null}function ES(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function TS(e,t){return t}function fy(e,t){if(ee){var n=Ae.formState;if(n!==null){t:{var i=Jt;if(ee){if(De){e:{for(var s=De,a=Si;s.nodeType!==8;){if(!a){s=null;break e}if(s=Mi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){De=Mi(s.nextSibling),i=s.data==="F!";break t}}ma(i)}i=!1}i&&(t=n[0])}}return n=Dn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:TS,lastRenderedState:t},n.queue=i,n=VS.bind(null,Jt,i),i.dispatch=n,i=Um(!1),a=Yg.bind(null,Jt,!1,i.queue),i=Dn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=LA.bind(null,Jt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function dy(e){var t=Ge();return AS(t,be,e)}function AS(e,t,n){if(t=Gg(e,t,TS)[0],e=$u(As)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Mc(t)}catch(r){throw r===Uo?Zh:r}else i=t;t=Ge();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Jt.flags|=2048,yo(9,{destroy:void 0},OA.bind(null,s,n),null)),[i,a,e]}function OA(e,t){e.action=t}function py(e){var t=Ge(),n=be;if(n!==null)return AS(t,n,e);Ge(),t=t.memoizedState,n=Ge();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function yo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Jt.updateQueue,t===null&&(t=Jh(),Jt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function wS(){return Ge().memoizedState}function th(e,t,n,i){var s=Dn();Jt.flags|=e,s.memoizedState=yo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Qh(e,t,n,i){var s=Ge();i=i===void 0?null:i;var a=s.memoizedState.inst;be!==null&&i!==null&&Pg(i,be.memoizedState.deps)?s.memoizedState=yo(t,a,n,i):(Jt.flags|=e,s.memoizedState=yo(1|t,a,n,i))}function my(e,t){th(8390656,8,e,t)}function kg(e,t){Qh(2048,8,e,t)}function IA(e){Jt.flags|=4;var t=Jt.updateQueue;if(t===null)t=Jh(),Jt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function RS(e){var t=Ge().memoizedState;return IA({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(K(440));return t.impl.apply(void 0,arguments)}}function CS(e,t){return Qh(4,2,e,t)}function DS(e,t){return Qh(4,4,e,t)}function US(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function NS(e,t,n){n=n!=null?n.concat([e]):null,Qh(4,4,US.bind(null,t,e),n)}function Xg(){}function LS(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Pg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function OS(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Pg(t,i[1]))return i[0];if(i=e(),nr){js(!0);try{e()}finally{js(!1)}}return n.memoizedState=[i,t],i}function qg(e,t,n){return n===void 0||(Ts&1073741824)!==0&&(le&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=AM(),Jt.lanes|=e,_a|=e,n)}function IS(e,t,n,i){return ii(n,t)?n:ga.current!==null?(e=qg(e,n,i),ii(e,t)||(Ze=!0),e):(Ts&106)===0||(Ts&1073741824)!==0&&(le&261930)===0?(Ze=!0,e.memoizedState=n):(e=AM(),Jt.lanes|=e,_a|=e,t)}function PS(e,t,n,i,s){var a=me.p;me.p=a!==0&&8>a?a:8;var r=kt.T,o={};o.types=r!==null?r.types:null,kt.T=o,Yg(e,!1,t,n);try{var l=s(),c=kt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=DA(l,i);Yl(e,t,u,ni(e))}else Yl(e,t,i,ni(e))}catch(d){Yl(e,t,{then:function(){},status:"rejected",reason:d},ni())}finally{me.p=a,r!==null&&o.types!==null&&(r.types=o.types),kt.T=r}}function PA(){}function Lm(e,t,n,i){if(e.tag!==5)throw Error(K(476));var s=zS(e).queue;PS(e,s,t,Wa,n===null?PA:function(){return BS(e),n(i)})}function zS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Wa,baseState:Wa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:Wa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function BS(e){var t=zS(e);t.next===null&&(t=e.alternate.memoizedState),Yl(e,t.next.queue,{},ni())}function Wg(){return dn(Ao)}function FS(){return Ge().memoizedState}function HS(){return Ge().memoizedState}function zA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ni();e=ra(n);var i=oa(t,e,n);i!==null&&(Vn(i,t,n),Xl(i,t,n)),t={cache:Dg()},e.payload=t;return}t=t.return}}function BA(e,t,n){var i=ni();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},jh(e)?GS(t,n):(n=wg(e,t,n,i),n!==null&&(Vn(n,e,i),kS(n,t,i)))}function VS(e,t,n){var i=ni();Yl(e,t,n,i)}function Yl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(jh(e))GS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ii(o,r))return Wh(e,t,s,0),Ae===null&&qh(),!1}catch{}finally{}if(n=wg(e,t,s,i),n!==null)return Vn(n,e,i),kS(n,t,i),!0}return!1}function Yg(e,t,n,i){if(i={lane:2,revertLane:s0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},jh(e)){if(t)throw Error(K(479))}else t=wg(e,n,i,2),t!==null&&Vn(t,e,2)}function jh(e){var t=e.alternate;return e===Jt||t!==null&&t===Jt}function GS(e,t){uo=Eh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,wx(e,n)}}var Ah={readContext:dn,use:Kh,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He,useEffectEvent:He},XS={readContext:dn,use:Kh,useCallback:function(e,t){return Dn().memoizedState=[e,t===void 0?null:t],e},useContext:dn,useEffect:my,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,th(4194308,4,US.bind(null,t,e),n)},useLayoutEffect:function(e,t){return th(4194308,4,e,t)},useInsertionEffect:function(e,t){th(4,2,e,t)},useMemo:function(e,t){var n=Dn();t=t===void 0?null:t;var i=e();if(nr){js(!0);try{e()}finally{js(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Dn();if(n!==void 0){var s=n(t);if(nr){js(!0);try{n(t)}finally{js(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=BA.bind(null,Jt,e),[i.memoizedState,e]},useRef:function(e){var t=Dn();return e={current:e},t.memoizedState=e},useState:function(e){e=Um(e);var t=e.queue,n=VS.bind(null,Jt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xg,useDeferredValue:function(e,t){var n=Dn();return qg(n,e,t)},useTransition:function(){var e=Um(!1);return e=PS.bind(null,Jt,e.queue,!0,!1),Dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Jt,s=Dn();if(ee){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),Ae===null)throw Error(K(349));(le&127)!==0||vS(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,my(yS.bind(null,i,a,e),[e]),i.flags|=2048,yo(9,{destroy:void 0},_S.bind(null,i,a,n,t),null),n},useId:function(){var e=Dn(),t=Ae.identifierPrefix;if(ee){var n=ts,i=$i;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Th++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=UA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Wg,useFormState:fy,useActionState:fy,useOptimistic:function(e){var t=Dn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Yg.bind(null,Jt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vg,useCacheRefresh:function(){return Dn().memoizedState=zA.bind(null,Jt)},useEffectEvent:function(e){var t=Dn(),n={impl:e};return t.memoizedState=n,function(){if((pe&2)!==0)throw Error(K(440));return n.impl.apply(void 0,arguments)}}},qS={readContext:dn,use:Kh,useCallback:LS,useContext:dn,useEffect:kg,useImperativeHandle:NS,useInsertionEffect:CS,useLayoutEffect:DS,useMemo:OS,useReducer:$u,useRef:wS,useState:function(){return $u(As)},useDebugValue:Xg,useDeferredValue:function(e,t){var n=Ge();return IS(n,be.memoizedState,e,t)},useTransition:function(){var e=$u(As)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Mc(e),t]},useSyncExternalStore:gS,useId:FS,useHostTransitionStatus:Wg,useFormState:dy,useActionState:dy,useOptimistic:function(e,t){var n=Ge();return MS(n,be,e,t)},useMemoCache:Vg,useCacheRefresh:HS,useEffectEvent:RS},FA={readContext:dn,use:Kh,useCallback:LS,useContext:dn,useEffect:kg,useImperativeHandle:NS,useInsertionEffect:CS,useLayoutEffect:DS,useMemo:OS,useReducer:kp,useRef:wS,useState:function(){return kp(As)},useDebugValue:Xg,useDeferredValue:function(e,t){var n=Ge();return be===null?qg(n,e,t):IS(n,be.memoizedState,e,t)},useTransition:function(){var e=kp(As)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Mc(e),t]},useSyncExternalStore:gS,useId:FS,useHostTransitionStatus:Wg,useFormState:py,useActionState:py,useOptimistic:function(e,t){var n=Ge();return be!==null?MS(n,be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Vg,useCacheRefresh:HS,useEffectEvent:RS};function Xp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Om={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ni(),s=ra(i);s.payload=t,n!=null&&(s.callback=n),t=oa(e,s,i),t!==null&&(Vn(t,e,i),Xl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ni(),s=ra(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=oa(e,s,i),t!==null&&(Vn(t,e,i),Xl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ni(),i=ra(n);i.tag=2,t!=null&&(i.callback=t),t=oa(e,i,n),t!==null&&(Vn(t,e,n),Xl(t,e,n))}};function gy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!nc(n,i)||!nc(s,a):!0}function vy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Om.enqueueReplaceState(t,t.state,null)}function ir(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=we({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function WS(e){gh(e)}function YS(e){console.error(e)}function ZS(e){gh(e)}function wh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function _y(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Im(e,t,n){return n=ra(n),n.tag=3,n.payload={element:null},n.callback=function(){wh(e,t)},n}function JS(e){return e=ra(e),e.tag=3,e}function KS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){_y(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){_y(t,n,i),typeof s!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function HA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ja(t,n,s,!0),n=vn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Mn===null?Ih():n.alternate===null&&Ve===0&&(Ve=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Sh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Qp(e,i,s)),!1;case 22:return n.flags|=65536,i===Sh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Qp(e,i,s)),!1}throw Error(K(435,n.tag))}return Qp(e,i,s),Ih(),!1}if(ee)return t=vn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==bm&&(e=Error(K(422),{cause:i}),sc(xi(e,n)))):(i!==bm&&(t=Error(K(423),{cause:i}),sc(xi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=xi(i,n),s=Im(e.stateNode,i,s),Gp(e,s),Ve!==4&&(Ve=2)),!1;var a=Error(K(520),{cause:i});if(a=xi(a,n),Ql===null?Ql=[a]:Ql.push(a),Ve!==4&&(Ve=2),t===null)return!0;i=xi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Im(n.stateNode,i,e),Gp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ua===null||!ua.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=JS(s),KS(s,e,n,i),Gp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Zg=Error(K(461)),Ze=!1;function Qe(e,t,n,i){t.child=e===null?uS(t,null,n,i):er(t,e.child,n,i)}function yy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return $a(t),i=zg(e,t,n,r,a,s),o=Bg(),e!==null&&!Ze?(Fg(e,t,s),ws(e,t,s)):(ee&&o&&Yh(t),t.flags|=1,Qe(e,t,i,s),t.child)}function xy(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Rg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,QS(e,t,a,i,s)):(e=Ku(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Kg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:nc,n(r,i)&&e.ref===t.ref)return ws(e,t,s)}return t.flags|=1,e=Ss(a,i),e.ref=t.ref,e.return=t,t.child=e}function QS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(nc(a,i)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=i=a,Kg(e,s))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ws(e,t,s)}return Pm(e,t,n,i,s)}function jS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Sy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ju(t,a!==null?a.cachePool:null),a!==null?cy(t,a):Cm(),dS(t);else return i=t.lanes=536870912,Sy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(ju(t,a.cachePool),cy(t,a),ca(),t.memoizedState=null):(e!==null&&ju(t,null),Cm(),ca());return Qe(e,t,s,n),t.child}function Zl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Sy(e,t,n,i,s){var a=Ug();return a=a===null?null:{parent:Ye._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ju(t,null),Cm(),dS(t),e!==null&&ja(e,t,i,!0),t.childLanes=s,null}function eh(e,t){return t=$h({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function My(e,t,n){return er(t,e.child,null,n),e=eh(t,t.pendingProps),e.flags|=2,Kn(t),t.memoizedState=null,e}function VA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(i.mode==="hidden")return e=eh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Zl(null,e);if(Dm(t),(e=De)?(e=jM(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:$i,overflow:ts}:null,retryLane:536870912,hydrationErrors:null},n=iS(e),n.return=t,t.child=n,ln=t,De=null)):e=null,e===null)throw ma(t);return t.lanes=536870912,null}return eh(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Dm(t),s)if(t.flags&256)t.flags&=-257,t=My(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(K(558));else if(Ze||ja(e,t,n,!1),s=(n&e.childLanes)!==0,Ze||s){if(ga.current===null){if(i=Ae,i!==null&&(r=Rx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,lr(e,r),Vn(i,e,r),Zg;Ih()}t=My(e,t,n)}else e=a.treeContext,De=Mi(r.nextSibling),ln=t,ee=!0,aa=null,Si=!1,e!==null&&aS(t,e),t=eh(t,i),t.flags|=134221824;return t}return e=Ss(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Pm(e,t,n,i,s){return $a(t),n=zg(e,t,n,i,void 0,s),i=Bg(),e!==null&&!Ze?(Fg(e,t,s),ws(e,t,s)):(ee&&i&&Yh(t),t.flags|=1,Qe(e,t,n,s),t.child)}function by(e,t,n,i,s,a){return $a(t),t.updateQueue=null,n=mS(t,i,n,s),pS(e),i=Bg(),e!==null&&!Ze?(Fg(e,t,a),ws(e,t,a)):(ee&&i&&Yh(t),t.flags|=1,Qe(e,t,n,a),t.child)}function Ey(e,t,n,i,s){if($a(t),t.stateNode===null){var a=eo,r=n.contextType;typeof r=="object"&&r!==null&&(a=dn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Om,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Lg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?dn(r):eo,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Xp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Om.enqueueReplaceState(a,a.state,null),Wl(t,i,a,s),ql(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=ir(n,o);a.props=l;var c=a.context,u=n.contextType;r=eo,typeof u=="object"&&u!==null&&(r=dn(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&vy(t,a,i,r),Ks=!1;var h=t.memoizedState;a.state=h,Wl(t,i,a,s),ql(),c=t.memoizedState,o||h!==c||Ks?(typeof d=="function"&&(Xp(t,n,d,i),c=t.memoizedState),(l=Ks||gy(t,n,l,i,h,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,wm(e,t),r=t.memoizedProps,u=ir(n,r),a.props=u,d=t.pendingProps,h=a.context,c=n.contextType,l=eo,typeof c=="object"&&c!==null&&(l=dn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||h!==l)&&vy(t,a,i,l),Ks=!1,h=t.memoizedState,a.state=h,Wl(t,i,a,s),ql();var p=t.memoizedState;r!==d||h!==p||Ks||e!==null&&e.dependencies!==null&&xh(e.dependencies)?(typeof o=="function"&&(Xp(t,n,o,i),p=t.memoizedState),(u=Ks||gy(t,n,u,i,h,p,l)||e!==null&&e.dependencies!==null&&xh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Xr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=er(t,e.child,null,s),t.child=er(t,null,n,s)):Qe(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ws(e,t,s),e}function Ty(e,t,n,i){return Qa(),t.flags|=256,Qe(e,t,n,i),t.child}var zm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bm(e){return{baseLanes:e,cachePool:oS()}}function Fm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=jn),e}function $S(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(s?la(t):ca(),(e=De)?(e=jM(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:$i,overflow:ts}:null,retryLane:536870912,hydrationErrors:null},n=iS(e),n.return=t,t.child=n,ln=t,De=null)):e=null,e===null)throw ma(t);return l0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(ca(),s=t.mode,a=$h({mode:"hidden",children:a},s),i=Ya(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Bm(n),i.childLanes=Fm(e,r,n),t.memoizedState=zm,Zl(null,i)):(la(t),Jg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return GA(e,t,a,r,i,l,o,n)}return s?(ca(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Ss(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Ss(l,s):(s=Ya(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Zl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Bm(n):(a=s.cachePool,a!==null?(o=Ye._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=oS(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Fm(e,r,n),t.memoizedState=zm,Zl(e.child,i)):(la(t),n=e.child,e=n.sibling,n=Ss(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Jg(e,t){return t=$h({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $h(e,t){return e=Hn(22,e,null,t),e.lanes=0,e}function Pu(e,t,n){return er(t,e.child,null,n),e=Jg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function GA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(la(t),t.flags&=-257,Pu(e,t,o)):t.memoizedState!==null?(ca(),t.child=e.child,t.flags|=128,null):(ca(),a=s.fallback,r=t.mode,s=$h({mode:"visible",children:s.children},r),a=Ya(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,er(t,e.child,null,o),s=t.child,s.memoizedState=Bm(o),s.childLanes=Fm(e,i,o),t.memoizedState=zm,Zl(null,s));if(la(t),l0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(K(419)),s.stack="",s.digest=i,sc({value:s,source:null,stack:null})),Pu(e,t,o)}if(Ze||ja(e,t,o,!1),i=(o&e.childLanes)!==0,Ze||i){if(ga.current!==null)return Pu(e,t,o);if(i=Ae,i!==null&&(s=Rx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,lr(e,s),Vn(i,e,s),Zg;return ug(a)||Ih(),Pu(e,t,o)}return ug(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,De=Mi(a.nextSibling),ln=t,ee=!0,aa=null,Si=!1,e!==null&&aS(t,e),t=Jg(t,s.children),t.flags|=134221824,t)}function Ay(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Qu(e.return,t,n)}function wy(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&bh(n)===null&&(t=e),e=e.sibling}return t}function zu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function qp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Hm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=mn.current;if(t.flags&128)return rc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,rc(t,r),s==="backwards"&&e!==null?(qp(e),Qe(e,t,i,n),qp(e)):Qe(e,t,i,n),i=ee?ic:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ay(e,n,t);else if(e.tag===19)Ay(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=wy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,qp(t)),zu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&bh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}zu(t,!0,n,null,a,i);break;case"together":zu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=wy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),zu(t,!1,s,n,a,i)}return t.child}function Ry(e,t,n){var i=t.pendingProps;return ta(t,t.type,i.value),Qe(e,t,i.children,n),t.child}function ws(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_a|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ja(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=Ss(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ss(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xh(e)))}function kA(e,t,n){switch(t.tag){case 3:fh(t,t.stateNode.containerInfo),ta(t,Ye,e.memoizedState.cache),Qa();break;case 27:case 5:dm(t);break;case 4:fh(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Dm(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return la(t),t.flags|=128,null;i=ja(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?$S(e,t,n):(la(t),e=ws(e,t,n),e!==null?e.sibling:null)}la(t);break;case 19:if(t.flags&128)return Hm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(ja(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Hm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),rc(t,mn.current),i)break;return null;case 22:return t.lanes=0,jS(e,t,n,t.pendingProps);case 24:ta(t,Ye,e.memoizedState.cache)}return ws(e,t,n)}function tM(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Kg(e,n)&&(t.flags&128)===0)return Ze=!1,kA(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,ee&&(t.flags&1048576)!==0&&sS(t,ic,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e=="function")Rg(e)?(i=ir(e,i),t.tag=1,t=Ey(null,t,e,i,n)):(t.tag=0,t=Pm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===mg){t.tag=11,t=yy(null,t,e,i,n);break t}else if(s===gg){t.tag=14,t=xy(null,t,e,i,n);break t}else if(s===Qi){t.tag=10,t.type=e,t=Ry(null,t,n);break t}}throw t=hm(e)||e,Error(K(306,t,""))}}return t;case 0:return Pm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ir(i,t.pendingProps),Ey(e,t,i,s,n);case 3:t:{if(fh(t,t.stateNode.containerInfo),e===null)throw Error(K(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,wm(e,t),Wl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ta(t,Ye,i),i!==a.cache&&Tm(t,[Ye],n,!0),ql(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Ty(e,t,i,n);break t}else if(i!==s){s=xi(Error(K(424)),t),sc(s),t=Ty(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Mi(e.firstChild),ln=t,ee=!0,aa=null,Si=!0,n=uS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Qa(),i===s){t=ws(e,t,n);break t}Qe(e,t,i,n)}t=t.child}return t;case 26:return Xr(e,t),e===null?(n=ex(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(t.stateNode=kM(t.type,t.pendingProps,sa.current,t)):t.memoizedState=ex(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return dm(t),e===null&&ee&&(i=t.stateNode=$M(t.type,t.pendingProps,sa.current),ln=t,Si=!0,s=De,xa(t.type)?(hg=s,De=Mi(i.firstChild)):De=s),Qe(e,t,t.pendingProps.children,n),Xr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((s=i=De)&&(i=Iw(i,t.type,t.pendingProps,Si),i!==null?(t.stateNode=i,ln=t,De=Mi(i.firstChild),Si=!1,s=!0):s=!1),s||ma(t)),dm(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,og(s,a)?i=null:r!==null&&og(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=zg(e,t,NA,null,null,n),Ao._currentValue=s),Xr(e,t),Qe(e,t,i,n),t.child;case 6:return e===null&&ee&&((e=n=De)&&(n=Pw(n,t.pendingProps,Si),n!==null?(t.stateNode=n,ln=t,De=null,e=!0):e=!1),e||ma(t)),null;case 13:return $S(e,t,n);case 4:return fh(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=er(t,null,i,n):Qe(e,t,i,n),t.child;case 11:return yy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Xr(e,t),Qe(e,t,i,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:return Ry(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,$a(t),s=dn(s),i=i(s),t.flags|=1,Qe(e,t,i,n),t.child;case 14:return xy(e,t,t.type,t.pendingProps,n);case 15:return QS(e,t,t.type,t.pendingProps,n);case 19:return Hm(e,t,n);case 31:return VA(e,t,n);case 22:return jS(e,t,n,t.pendingProps);case 24:return $a(t),i=dn(Ye),e===null?(s=Ug(),s===null&&(s=Ae,a=Dg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Lg(t),ta(t,Ye,s)):((e.lanes&n)!==0&&(wm(e,t),Wl(t,null,null,n),ql()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ta(t,Ye,i)):(i=a.cache,ta(t,Ye,i),i!==s.cache&&Tm(t,[Ye],n,!0))),Qe(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:ee&&Yh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Xr(e,t),Qe(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}function _s(e){e.flags|=4}function Wp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?sx(t,i):sx(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(CM())e.flags|=8192;else throw Ja=Sh,Ng}else e.flags&=-16777217}function Cy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!i1(t))if(CM())e.flags|=8192;else throw Ja=Sh,Ng}function Bu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Tx():536870912,e.lanes|=t,xo|=t)}function Ul(e,t){if(!ee)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function XA(e,t,n){var i=t.pendingProps;switch(Cg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ms(Ye),go(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gr(t)?_s(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vp())),Ce(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(_s(t),a!==null?(Ce(t),Cy(t,a)):(Ce(t),Wp(t,s,null,i,n))):a?a!==e.memoizedState?(_s(t),Ce(t),Cy(t,a)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&_s(t),Ce(t),Wp(t,s,e,i,n)),null;case 27:if(dh(t),n=sa.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Ce(t),t.subtreeFlags&=-33554433,null}e=es.current,Gr(t)?ny(t,e):(e=$M(s,i,n),t.stateNode=e,_s(t))}return Ce(t),t.subtreeFlags&=-33554433,null;case 5:if(dh(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Ce(t),t.subtreeFlags&=-33554433,null}if(a=es.current,Gr(t))ny(t,a);else{var r=uc(sa.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[fn]=t,a[kn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(gn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&_s(t)}}return Ce(t),t.subtreeFlags&=-33554433,Wp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(K(166));if(e=sa.current,Gr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=ln,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[fn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||VM(e.nodeValue,n)),e||ma(t,!0)}else e=uc(e).createTextNode(i),e[fn]=t,t.stateNode=e}return Ce(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Gr(t),n!==null){if(e===null){if(!i)throw Error(K(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(557));e[fn]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else n=Vp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Kn(t),t):(Kn(t),null);if((t.flags&128)!==0)throw Error(K(558))}return Ce(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Gr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(K(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[fn]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else s=Vp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Kn(t),t):(Kn(t),null)}return Kn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bu(t,t.updateQueue),Ce(t),null);case 4:return go(),e===null&&a0(t.stateNode.containerInfo),t.flags|=67108864,Ce(t),null;case 10:return Ms(t.type),Ce(t),null;case 19:if(Ig(t),i=t.memoizedState,i===null)return Ce(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Ul(i,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=bh(e),a!==null){for(t.flags|=128,Ul(i,!1),e=a.updateQueue,t.updateQueue=e,Bu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)nS(n,e),n=n.sibling;return rc(t,mn.current&1|2),ee&&ys(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&$n()>Lh&&(t.flags|=128,s=!0,Ul(i,!1),t.lanes=4194304)}else{if(!s)if(e=bh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Bu(t,e),Ul(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!ee)return Ce(t),null}else 2*$n()-i.renderingStartTime>Lh&&n!==536870912&&(t.flags|=128,s=!0,Ul(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=$n(),e.sibling=null,a=mn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||ee?rc(t,a):(n=a,Ue(vn,t),Ue(mn,n),Mn===null&&(Mn=t)),ee&&ys(t,i.treeForkCount),e}return Ce(t),null;case 22:case 23:return Kn(t),Og(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),n=t.updateQueue,n!==null&&Bu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&pn(Za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ms(Ye),Ce(t),null;case 25:return null;case 30:return t.flags|=33554432,Ce(t),null}throw Error(K(156,t.tag))}function qA(e,t){switch(Cg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ms(Ye),go(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return dh(t),null;case 31:if(t.memoizedState!==null){if(Kn(t),t.alternate===null)throw Error(K(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Kn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ig(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return go(),null;case 10:return Ms(t.type),null;case 22:case 23:return Kn(t),Og(),e!==null&&pn(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ms(Ye),null;case 25:return null;default:return null}}function eM(e,t){switch(Cg(t),t.tag){case 3:Ms(Ye),go();break;case 26:case 27:case 5:dh(t);break;case 4:go();break;case 31:t.memoizedState!==null&&Kn(t);break;case 13:Kn(t);break;case 19:Ig(t);break;case 10:Ms(t.type);break;case 22:case 23:Kn(t),Og(),e!==null&&pn(Za);break;case 24:Ms(Ye)}}function bc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){xe(t,t.return,o)}}function va(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){xe(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){xe(t,t.return,u)}}function nM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fS(t,n)}catch(i){xe(e,e.return,i)}}}function iM(e,t,n){n.props=ir(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){xe(e,t,i)}}function Ji(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Es(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=YM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new si(e);Gn(e.child,!1,Lw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){xe(e,t,o)}}function hn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){xe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){xe(e,t,s)}else n.current=null}function Rh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)QM(e.stateNode,t[n])}function Dy(e){for(var t=e.return;t!==null&&(jg(t)&&QM(e.stateNode,t.stateNode),!Qg(t));)t=t.return}function Jl(e){for(var t=e.return;t!==null&&(jg(t)&&Ow(e.stateNode,t.stateNode),!Qg(t));)t=t.return}function Qg(e){return e.tag===5||e.tag===3||e.tag===27}function jg(e){return e&&e.tag===7&&e.stateNode!==null}function Vm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){xe(e,e.return,s)}}function Yp(e,t,n){try{var i=e.stateNode;mw(i,e.type,n,t),i[kn]=t}catch(s){xe(e,e.return,s)}}function sM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function Zp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||sM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji)),Rh(e,i),fe=!0;else if(s!==4&&(s===27&&(Rh(e,i),i=null,xa(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Gm(e,t,n,i),e=e.sibling;e!==null;)Gm(e,t,n,i),e=e.sibling}function Ch(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Rh(e,i),fe=!0;else if(s!==4&&(s===27&&(Rh(e,i),i=null,xa(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ch(e,t,n,i),e=e.sibling;e!==null;)Ch(e,t,n,i),e=e.sibling}function aM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);gn(t,i,n),t[fn]=e,t[kn]=n}catch(a){xe(e,e.return,a)}}var Dh=!1,Qn=null;function Uy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Dh=!0)}var Ki=null;function Ny(){var e=Ki;return Ki=null,e}var Fn=0;function No(e,t,n,i,s){return Fn=0,rM(e.child,t,n,i,s)}function rM(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=lg(r);i.push(o),o.view&&(a=!0)}else a||lg(r).view&&(a=!0);Dh=!0,XM(r,Fn===0?t:t+"_"+Fn,n),Fn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||rM(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function is(e,t){for(;e!==null;)e.tag===5?qM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||is(e.child,t)),e=e.sibling}function nh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(nh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(K(544));var n=t.name;t=Ds(t.default,t.share),t!=="none"&&(No(e,n,t,null,!1)||is(e.child,!1))}e=e.sibling}}function km(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Es(i,n),a=Ds(i.default,n.paired?i.share:i.enter);a!=="none"?No(e,s,a,null,!1)?(nh(e),n.paired||t||So(e,i.onEnter)):is(e.child,!1):nh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)km(e,t),e=e.sibling;else nh(e)}function Xm(e){if(Qn!==null&&Qn.size!==0){var t=Qn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Ds(n.default,n.share);if(a!=="none"&&(No(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,So(e,n.onShare)):is(e.child,!1)),t.delete(i),t.size===0)break}}}Xm(e)}e=e.sibling}}}function qm(e){if(e.tag===30){var t=e.memoizedProps,n=Es(t,e.stateNode),i=Qn!==null?Qn.get(n):void 0,s=Ds(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(No(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Qn.delete(n),So(e,t.onShare)):So(e,t.onExit):is(e.child,!1)),Qn!==null&&Xm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qm(e),e=e.sibling;else Qn!==null&&Xm(e)}function oM(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Es(t,e.stateNode);t=Ds(t.default,t.update),e.flags&=-5,t!=="none"&&No(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&oM(e);e=e.sibling}}function Wm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,is(e.child,!1))}Wm(e)}e=e.sibling}}function ih(e){if(e.tag===30)e.stateNode.paired=null,is(e.child,!1),Wm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ih(e),e=e.sibling;else Wm(e)}function lM(e){for(e=e.child;e!==null;)e.tag===30?is(e.child,!1):(e.subtreeFlags&33554432)!==0&&lM(e),e=e.sibling}function $g(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Fn<a.length){var c=a[Fn],u=lg(l);(c.view||u.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(u.clip)d=!0;else{d=c.rect;var h=u.rect;d=d.y!==h.y||d.x!==h.x||d.height!==h.height||d.width!==h.width}d&&(e.flags|=4),u.abs?u=!c.abs:(c=c.rect,u=u.rect,u=c.height!==u.height||c.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&XM(l,Fn===0?n:n+"_"+Fn,s),o&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(l,Fn===0?i:i+"_"+Fn,t.memoizedProps)),Fn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:$g(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function cM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Es(n,i),a=Ds(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(Sw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Fn=0,s=$g(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||So(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&cM(e,t);e=e.sibling}}var an=!1,ge=!1,Wi=!1,Jp=!1,Ly=typeof WeakSet=="function"?WeakSet:Set,rn=null,Yi=!1,Fl=!1,Uh=!1,Ym=!1;function WA(e,t,n){if(e=e.containerInfo,ag=wo,e=Zx(e),Tg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,u=0,d=0,h=e,p=null;e:for(;;){for(var g;h!==i||a!==0&&h.nodeType!==3||(l=o+a),h!==r||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===e)break e;if(p===i&&++u===a&&(l=o),p===r&&++d===s&&(c=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(rg={focusedElem:e,selectionRange:i},wo=!1,n=(n&335544064)===n,rn=t,t=n?9270:1024;rn!==null;){if(e=rn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&qm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Uy(e),Fu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&qm(i),Fu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Uy(e),Fu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,rn=i):(n&&oM(e),Fu(n))}}Qn=null}function Fu(e){for(;rn!==null;){var t=rn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=ir(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){xe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)cg(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":cg(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Es(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Ds(s.default,s.update),s!=="none"&&No(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(K(163))}if(i=t.sibling,i!==null){i.return=t.return,rn=i;break}rn=t.return}}function uM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Zi(e,n),i&4&&bc(5,n);break;case 1:if(Zi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){xe(n,n.return,r)}else{var s=ir(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){xe(n,n.return,r)}}i&64&&nM(n),i&512&&Ji(n,n.return);break;case 3:if(Zi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fS(e,t)}catch(r){xe(n,n.return,r)}}break;case 27:t===null&&i&4&&aM(n);case 26:case 5:Zi(e,n),t===null&&i&4&&Vm(n),i&512&&Ji(n,n.return);break;case 12:Zi(e,n);break;case 31:Zi(e,n),i&4&&pM(e,n);break;case 13:Zi(e,n),i&4&&mM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sw.bind(null,n),zw(e,n))));break;case 22:if(i=n.memoizedState!==null||an,!i){var a=t!==null&&t.memoizedState!==null||ge;t=an,s=ge,an=i,(ge=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),wi(e,n,i)):Zi(e,n),an=t,ge=s}break;case 30:Zi(e,n),i&512&&Ji(n,n.return);break;case 7:i&512&&Ji(n,n.return);default:Zi(e,n)}}function Zm(e,t){for(e=e.child;e!==null;)hM(e,t),e=e.sibling}function hM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){xe(e,e.return,l)}Jm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,fe=!0}catch(l){xe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Jy(o,!0):Jy(e.stateNode,!1)}catch(l){xe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Zm(e,t);break;default:Zm(e,t)}}function Jm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:hM(n,i);break t;case 22:n.memoizedState===null&&Jm(n,i);break t;default:Jm(n,i)}}e=e.sibling}}function fM(e){var t=e.alternate;t!==null&&(e.alternate=null,fM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,zn=!1;function Ai(e,t,n){for(n=n.child;n!==null;)dM(e,t,n),n=n.sibling}function dM(e,t,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 26:ge||hn(n,t),Ai(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ge&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ge||hn(n,t),Jl(n);var i=Ie,s=zn;xa(n.type)&&(Ie=n.stateNode,zn=!1),Ai(e,t,n),t1(n.stateNode,n.type,n.memoizedProps),Ie=i,zn=s;break;case 5:ge||hn(n,t),Jl(n);case 6:if(n.tag===6&&Jl(n),i=Ie,s=zn,Ie=null,Ai(e,t,n),Ie=i,zn=s,Ie!==null)if(zn)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(n.stateNode),fe=!0}catch(a){xe(n,t,a)}else try{Ie.removeChild(n.stateNode),fe=!0}catch(a){xe(n,t,a)}break;case 18:Ie!==null&&(zn?(e=Ie,Zy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ro(e)):Zy(Ie,n.stateNode));break;case 4:i=Ie,s=zn,Ie=n.stateNode.containerInfo,zn=!0,Ai(e,t,n),Ie=i,zn=s;break;case 0:case 11:case 14:case 15:va(2,n,t),ge||va(4,n,t),Ai(e,t,n);break;case 1:ge||(hn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&iM(n,t,i)),Ai(e,t,n);break;case 21:Ai(e,t,n);break;case 22:ge=(i=ge)||n.memoizedState!==null,Ai(e,t,n),ge=i;break;case 30:hn(n,t),Ai(e,t,n);break;case 7:ge||hn(n,t),Ai(e,t,n);break;default:Ai(e,t,n)}}function pM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ro(e)}catch(n){xe(t,t.return,n)}}}function mM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ro(e)}catch(n){xe(t,t.return,n)}}function YA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ly),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ly),t;default:throw Error(K(435,e.tag))}}function Hu(e,t){var n=YA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=aw.bind(null,e,i);i.then(s,s)}})}function Rn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(xa(l.type)){Ie=l.stateNode,zn=!1;break t}break;case 5:Ie=l.stateNode,zn=!1;break t;case 3:case 4:Ie=l.stateNode.containerInfo,zn=!0;break t}l=l.return}if(Ie===null)throw Error(K(160));dM(r,o,a),Ie=null,zn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gM(t,e,n),t=t.sibling}var Ri=null;function gM(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Rn(t,e,n),Cn(e),s&4&&(va(3,e,e.return),bc(3,e),va(5,e,e.return));break;case 1:Rn(t,e,n),Cn(e),s&512&&(ge||i===null||hn(i,i.return)),s&64&&an&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Ri,Rn(t,e,n),Cn(e),s&512&&(ge||i===null||hn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(an)e.stateNode=kM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[yc]||i[fn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),gn(i,t,n),i[fn]=e,on(i),t=i;break t;case"link":if(a=ix("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),gn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=ix("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),gn(i,t,n),s.head.appendChild(i);break;default:throw Error(K(468,t))}i[fn]=e,on(i),t=i}e.stateNode=t}else an||fg(a,e.type,e.stateNode);else e.stateNode=nx(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||ge||t.parentNode.removeChild(t)):s.count--,n===null?an||fg(a,e.type,e.stateNode):nx(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Yp(e,e.memoizedProps,i.memoizedProps);break;case 27:Rn(t,e,n),Cn(e),s&512&&(ge||i===null||hn(i,i.return)),i!==null&&s&4&&Yp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Wi,Wi=!1,Rn(t,e,n),Wi=a,Cn(e),s&512&&(ge||i===null||hn(i,i.return)),e.flags&32){t=e.stateNode;try{_o(t,""),fe=!0}catch(u){xe(e,e.return,u)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Yp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Jp=!0);break;case 6:if(Rn(t,e,n),Cn(e),s&4){if(e.stateNode===null)throw Error(K(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,fe=!0}catch(u){xe(e,e.return,u)}}break;case 3:if(fe=!1,oh=null,a=Ri,Ri=hc(t.containerInfo),Rn(t,e,n),Ri=a,Cn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Ro(t.containerInfo)}catch(u){xe(e,e.return,u)}Jp&&(Jp=!1,vM(e)),fe=!1;break;case 4:s=Wi,Wi=an,i=F_(),a=Ri,Ri=hc(e.stateNode.containerInfo),Rn(t,e,n),Cn(e),Ri=a,fe&&Fl&&(Uh=!0),fe=i,Wi=s;break;case 12:Rn(t,e,n),Cn(e);break;case 31:Rn(t,e,n),Cn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Hu(e,t)));break;case 13:Rn(t,e,n),Cn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(tf=$n()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Hu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=an,l=ge,c=Wi;an=o||a,Wi=c||a,ge=l||r,Rn(t,e,n),ge=l,Wi=c,an=o,Cn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||an||ge||(t=r||ge,n=an,i=ge,an=a||an,ge=t,Zs(e,2),an=n,ge=i),!a&&Wi||Zm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Hu(e,n))));break;case 19:Rn(t,e,n),Cn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Hu(e,t)));break;case 30:s&512&&(ge||i===null||hn(i,i.return)),s=F_(),a=Fl,r=(n&335544064)===n,o=e.memoizedProps,Fl=r&&Ds(o.default,o.update)!=="none",Rn(t,e,n),Cn(e),r&&i!==null&&fe&&(e.flags|=4),Fl=a,fe=s;break;case 21:break;case 7:s&512&&(ge||i===null||hn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Rn(t,e,n),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(sM(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(jg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Qg(s))break;s=s.return}var r=i;if(n==null)throw Error(K(160));switch(n.tag){case 27:var o=n.stateNode,l=Zp(e);Ch(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(_o(c,""),n.flags&=-33);var u=Zp(e);Ch(e,u,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=Zp(e);Gm(e,h,d,r);break;default:throw Error(K(161))}}catch(p){xe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vM(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,wo=!0,t.reset(),wo=!1),e=e.sibling}}function kr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)_M(t,e),t=t.sibling;else cM(t,!1)}function _M(e,t){var n=e.alternate;if(n===null)km(e,!1);else switch(e.tag){case 3:if(Ym=Yi=!1,Ny(),kr(t,e),!Yi&&!Uh){if(e=Ki,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];qM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ym=!0}Ki=null;break;case 5:kr(t,e);break;case 4:i=Yi,Yi=!1,kr(t,e),Yi&&(Uh=!0),Yi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?km(e,!1):kr(t,e));break;case 30:i=Yi,s=Ny(),Yi=!1,kr(t,e),Yi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Es(a,r),r=Es(n.memoizedProps,r);var o=Ds(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Fn=0,t=$g(e,n,t,r,o,a,!0),Fn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(So(e,e.memoizedProps.onUpdate),Ki=s):s!==null&&(s.push.apply(s,Ki),Ki=s),Yi=(e.flags&32)!==0?!0:i;break;default:kr(t,e)}}function Zi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uM(e,t.alternate,t),t=t.sibling}function Zs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),Zs(n,i);break;case 1:hn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&iM(n,n.return,s),Zs(n,i);break;case 27:(i&2)!==0&&t1(n.stateNode,n.type,n.memoizedProps);case 5:hn(n,n.return),n.tag!==5&&n.tag!==27||Jl(n),Zs(n,i);break;case 6:Jl(n);break;case 26:hn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||ge||s.parentNode.removeChild(s),Zs(n,i);break;case 22:n.memoizedState===null&&Zs(n,i);break;case 30:hn(n,n.return),Zs(n,i);break;case 7:hn(n,n.return);default:Zs(n,i)}e=e.sibling}}function wi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:wi(s,a,n),bc(4,a);break;case 1:if(wi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(u){xe(i,i.return,u)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)hS(c[s],l)}catch(u){xe(i,i.return,u)}}o&&r&64&&nM(a),Ji(a,a.return);break;case 27:(n&2)!==0&&aM(a);case 5:a.tag!==5&&a.tag!==27||Dy(a),wi(s,a,n),o&&i===null&&r&4&&Vm(a),Ji(a,a.return);break;case 6:Dy(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||an||fg(hc(l.ownerDocument),a.type,l),wi(s,a,n),o&&i===null&&r&4&&Vm(a),Ji(a,a.return);break;case 12:wi(s,a,n);break;case 31:wi(s,a,n),o&&r&4&&pM(s,a);break;case 13:wi(s,a,n),o&&r&4&&mM(s,a);break;case 22:a.memoizedState===null&&wi(s,a,n),Ji(a,a.return);break;case 30:wi(s,a,n),Ji(a,a.return);break;case 7:Ji(a,a.return);default:wi(s,a,n)}t=t.sibling}}function t0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Sc(n))}function e0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sc(e))}function mi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)yM(e,t,n,i),t=t.sibling;else s&&lM(t)}function yM(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ih(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:mi(e,t,n,i),a&2048&&bc(9,t);break;case 1:mi(e,t,n,i);break;case 3:mi(e,t,n,i),s&&Ym&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Sc(a)));break;case 12:if(a&2048){mi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){xe(t,t.return,c)}}else mi(e,t,n,i);break;case 31:mi(e,t,n,i);break;case 13:mi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&ih(o),r._visibility&2?mi(e,t,n,i):Kl(e,t)):(s&&o!==null&&o.memoizedState!==null&&ih(t),r._visibility&2?mi(e,t,n,i):(r._visibility|=2,qr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&t0(o,t);break;case 24:mi(e,t,n,i),a&2048&&e0(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(is(a.child,!0),is(t.child,!0))),mi(e,t,n,i);break;default:mi(e,t,n,i)}}function qr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:qr(a,r,o,l,s),bc(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?qr(a,r,o,l,s):Kl(a,r):(u._visibility|=2,qr(a,r,o,l,s)),s&&c&2048&&t0(r.alternate,r);break;case 24:qr(a,r,o,l,s),s&&c&2048&&e0(r.alternate,r);break;default:qr(a,r,o,l,s)}t=t.sibling}}function Kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Kl(n,i),s&2048&&t0(i.alternate,i);break;case 24:Kl(n,i),s&2048&&e0(i.alternate,i);break;default:Kl(n,i)}t=t.sibling}}var ka=8192;function Ha(e,t,n){if(e.subtreeFlags&ka)for(e=e.child;e!==null;)xM(e,t,n),e=e.sibling}function xM(e,t,n){switch(e.tag){case 26:Ha(e,t,n),e.flags&ka&&(e.memoizedState!==null?Qw(n,Ri,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&ax(n,e)));break;case 5:Ha(e,t,n),e.flags&ka&&(e=e.stateNode,(t&335544128)===t&&ax(n,e));break;case 3:case 4:var i=Ri;Ri=hc(e.stateNode.containerInfo),Ha(e,t,n),Ri=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ka,ka=16777216,Ha(e,t,n),ka=i):Ha(e,t,n));break;case 30:if((e.flags&ka)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Qn===null&&(Qn=new Map),Qn.set(i,s)}Ha(e,t,n);break;default:Ha(e,t,n)}}function SM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];rn=i,bM(i,e)}SM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)MM(e),e=e.sibling}function MM(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&va(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,sh(e)):Nl(e);break;default:Nl(e)}}function sh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];rn=i,bM(i,e)}SM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),sh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,sh(t));break;default:sh(t)}e=e.sibling}}function bM(e,t){for(;rn!==null;){var n=rn;switch(n.tag){case 0:case 11:case 15:va(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Sc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,rn=i;else t:for(n=e;rn!==null;){i=rn;var s=i.sibling,a=i.return;if(fM(i),i===n){rn=null;break t}if(s!==null){s.return=a,rn=s;break t}rn=a}}}var ZA={getCacheForType:function(e){var t=dn(Ye),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return dn(Ye).controller.signal}},JA=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ae=null,ae=null,le=0,_e=0,Zn=null,ea=!1,Lo=!1,n0=!1,Rs=0,Ve=0,_a=0,Ka=0,Nh=0,jn=0,xo=0,Ql=null,Bn=null,Km=!1,tf=0,EM=0,Lh=1/0,Oh=null,ua=null,ze=0,Di=null,sr=null,ns=0,Qm=0,jm=null,TM=null,fo=null,po=null,mo=null,jl=0,ah=null;function ni(){return(pe&2)!==0&&le!==0?le&-le:kt.T!==null?s0():Cx()}function AM(){if(jn===0)if((le&536870912)===0||ee){var e=wu;wu<<=1,(wu&3932160)===0&&(wu=262144),jn=e}else jn=536870912;return e=vn.current,e!==null&&(e.flags|=32),jn}function So(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=YM(Es(e.memoizedProps,n))),po===null&&(po=[]),po.push(t.bind(null,i))}}function Vn(e,t,n){(e===Ae&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(Mo(e,0),na(e,le,jn,!1)),_c(e,n),((pe&2)===0||e!==Ae)&&(e===Ae&&((pe&2)===0&&(Ka|=n),Ve===4&&na(e,le,jn,!1)),as(e))}function wM(e,t,n){if((pe&6)!==0)throw Error(K(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vc(e,t),s=i?jA(e,t):Kp(e,t,!0),a=i;do{if(s===0){Lo&&!i&&na(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!KA(n)){s=Kp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Ql;var l=o.current.memoizedState.isDehydrated;if(l&&(Mo(o,r).flags|=256),r=Kp(o,r,!1),r!==2&&r!==6){if(n0&&!l){o.errorRecoveryDisabledLanes|=a,Ka|=a,s=4;break t}a=Bn,Bn=s,a!==null&&(Bn===null?Bn=a:Bn.push.apply(Bn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Mo(e,0),na(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(K(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:na(i,t,jn,!ea);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(K(329))}if((t&62914560)===t&&(s=tf+300-$n(),10<s)){if(na(i,t,jn,!ea),Hh(i,0,!0)!==0)break t;ns=t,i.timeoutHandle=r0(Oy.bind(null,i,n,Bn,Oh,Km,t,jn,Ka,xo,ea,a,"Throttled",-0,0),s);break t}Oy(i,n,Bn,Oh,Km,t,jn,Ka,xo,ea,a,null,-0,0)}}break}while(!0);as(e)}function Oy(e,t,n,i,s,a,r,o,l,c,u,d,h,p){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Qn=null,xM(t,a,d),x&&(g=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=fc.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?tf-$n():(a&4194048)===a?EM-$n():0,g=jw(d,g),g!==null)){ns=a,e.cancelPendingCommit=g(Py.bind(null,e,t,a,n,i,s,r,o,l,c,u,d,null,h,p)),na(e,a,r,!c);return}Py(e,t,a,n,i,s,r,o,l,c,u,d)}function KA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ii(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,i){t=Ex(e,t),t&=~Nh,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ei(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Ax(e,n,t)}function ef(){return(pe&6)===0?(Ec(0,!1),!1):!0}function i0(){if(ae!==null){if(_e===0)var e=ae.return;else e=ae,xs=cr=null,Hg(e),co=null,ac=0,e=ae;for(;e!==null;)eM(e.alternate,e),e=e.return;ae=null}}function Mo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_w(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ns=0,i0(),Ae=e,ae=n=Ss(e.current,null),le=t,_e=0,Zn=null,ea=!1,Lo=vc(e,t),n0=!1,xo=jn=Nh=Ka=_a=Ve=0,Bn=Ql=null,Km=!1,Rs=Ex(e,t),qh(),n}function RM(e,t){Jt=null,kt.H=Ah,t===Uo||t===Zh?(t=oy(),_e=3):t===Ng?(t=oy(),_e=4):_e=t===Zg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Zn=t,ae===null&&(Ve=1,wh(e,xi(t,e.current)))}function CM(){var e=vn.current;return e===null?!0:(le&4194048)===le?Mn===null:(le&62914560)===le||(le&536870912)!==0?e===Mn:!1}function DM(){var e=kt.H;return kt.H=Ah,e===null?Ah:e}function UM(){var e=kt.A;return kt.A=ZA,e}function Ih(){Ve=4,ea||(le&4194048)!==le&&vn.current!==null||(Lo=!0),(_a&134217727)===0&&(Ka&134217727)===0||Ae===null||na(Ae,le,jn,!1)}function Kp(e,t,n){var i=pe;pe|=2;var s=DM(),a=UM();(Ae!==e||le!==t)&&(Oh=null,Mo(e,t)),t=!1;var r=Ve;t:do try{if(_e!==0&&ae!==null){var o=ae,l=Zn;switch(_e){case 8:i0(),r=6;break t;case 3:case 2:case 9:case 6:vn.current===null&&(t=!0);var c=_e;if(_e=0,Zn=null,so(e,o,l,c),n&&Lo){r=0;break t}break;default:c=_e,_e=0,Zn=null,so(e,o,l,c)}}QA(),r=Ve;break}catch(u){RM(e,u)}while(!0);return t&&e.shellSuspendCounter++,xs=cr=null,pe=i,kt.H=s,kt.A=a,ae===null&&(Ae=null,le=0,qh()),r}function QA(){for(;ae!==null;)NM(ae)}function jA(e,t){var n=pe;pe|=2;var i=DM(),s=UM();Ae!==e||le!==t?(Oh=null,Lh=$n()+500,Mo(e,t)):Lo=vc(e,t);t:do try{if(_e!==0&&ae!==null){t=ae;var a=Zn;e:switch(_e){case 1:_e=0,Zn=null,so(e,t,a,1);break;case 2:case 9:if(ry(a)){_e=0,Zn=null,Iy(t);break}t=function(){_e!==2&&_e!==9||Ae!==e||(_e=7),as(e)},a.then(t,t);break t;case 3:_e=7;break t;case 4:_e=5;break t;case 7:ry(a)?(_e=0,Zn=null,Iy(t)):(_e=0,Zn=null,so(e,t,a,7));break;case 5:var r=null;switch(ae.tag){case 26:r=ae.memoizedState;case 5:case 27:var o=ae;if(r?i1(r):o.stateNode.complete){_e=0,Zn=null;var l=o.sibling;if(l!==null)ae=l;else{var c=o.return;c!==null?(ae=c,nf(c)):ae=null}break e}}_e=0,Zn=null,so(e,t,a,5);break;case 6:_e=0,Zn=null,so(e,t,a,6);break;case 8:i0(),Ve=6;break t;default:throw Error(K(462))}}$A();break}catch(u){RM(e,u)}while(!0);return xs=cr=null,kt.H=i,kt.A=s,pe=n,ae!==null?0:(Ae=null,le=0,qh(),Ve)}function $A(){for(;ae!==null&&!gT();)NM(ae)}function NM(e){var t=tM(e.alternate,e,Rs);e.memoizedProps=e.pendingProps,t===null?nf(e):ae=t}function Iy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=by(n,t,t.pendingProps,t.type,void 0,le);break;case 11:t=by(n,t,t.pendingProps,t.type.render,t.ref,le);break;case 5:Hg(t);var i=t;i===ln&&(ee?(yh(i),i.tag===5&&i.stateNode!=null&&(De=i.stateNode)):(yh(i),ee=!0));default:eM(n,t),t=ae=nS(t,Rs),t=tM(n,t,Rs)}e.memoizedProps=e.pendingProps,t===null?nf(e):ae=t}function so(e,t,n,i){xs=cr=null,Hg(t),co=null,ac=0;var s=t.return;try{if(HA(e,s,t,n,le)){Ve=1,wh(e,xi(n,e.current)),ae=null;return}}catch(a){if(s!==null)throw ae=s,a;Ve=1,wh(e,xi(n,e.current)),ae=null;return}t.flags&32768?(ee||i===1?e=!0:Lo||(le&536870912)!==0?e=!1:(ea=e=!0,(i===2||i===9||i===3||i===6)&&(i=vn.current,i!==null&&i.tag===13&&(i.flags|=16384))),LM(t,e)):nf(t)}function nf(e){var t=e;do{if((t.flags&32768)!==0){LM(t,ea);return}e=t.return;var n=XA(t.alternate,t,Rs);if(n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Ve===0&&(Ve=5)}function LM(e,t){do{var n=qA(e.alternate,e);if(n!==null){n.flags&=32767,ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=n}while(e!==null);Ve=6,ae=null}function Py(e,t,n,i,s,a,r,o,l,c,u,d){e.cancelPendingCommit=null;do sf();while(ze!==0);if((pe&6)!==0)throw Error(K(327));if(t!==null){if(t===e.current)throw Error(K(177));e===Ae&&(ae=Ae=null,le=0),sr=t,Di=e,ns=n,jm=s,TM=i,tw(e,t,n,r,o,l,d)}}function tw(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Qm=o,o|=Ag,AT(e,n,o,i,s,a),po=null,(n&335544064)===n?(mo=RA(e),i=10262):(mo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,rw(ph,function(){return ng(),null})):(e.callbackNode=null,e.callbackPriority=0),Dh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=kt.T,kt.T=null,s=me.p,me.p=2,a=pe,pe|=4;try{WA(e,t,n)}finally{pe=a,me.p=s,kt.T=i}}ze=1,Dh?fo=Ew(r,e.containerInfo,mo,$m,tg,nw,eg,ng,ew,null,null):($m(),tg(),eg())}function ew(e){if(ze!==0){var t=Di.onRecoverableError;t(e,{componentStack:null})}}function nw(){ze===3&&(ze=0,_M(sr,Di),ze=4)}function $m(){if(ze===1){ze=0;var e=Di,t=sr,n=ns,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=kt.T,kt.T=null;var s=me.p;me.p=2;var a=pe;pe|=4;try{Fl=Uh=!1,gM(t,e,n),n=rg;var r=Zx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Yx(o.ownerDocument.documentElement,o)){if(l!==null&&Tg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!p.extend&&x>m&&(r=m,m=x,x=r);var f=j_(o,x),v=j_(o,m);if(f&&v&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var _=d.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),x>m?(p.addRange(_),p.extend(v.node,v.offset)):(_.setEnd(v.node,v.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}wo=!!ag,rg=ag=null}finally{pe=a,me.p=s,kt.T=i}}e.current=t,ze=2}}function tg(){if(ze===2){ze=0;var e=Di,t=sr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=kt.T,kt.T=null;var i=me.p;me.p=2;var s=pe;pe|=4;try{uM(e,t.alternate,t)}finally{pe=s,me.p=i,kt.T=n}}ze=3}}function eg(){if(ze===4||ze===3){ze=0;var e=fo;fo=null,vT();var t=Di,n=sr,i=ns,s=TM,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?ze=5:(ze=0,sr=Di=null,OM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(ua=null),yg(i),n=n.stateNode,ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(gc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=kt.T,a=me.p,me.p=2,kt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{kt.T=n,me.p=a}}if(s=po,r=mo,mo=null,s!==null&&(po=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(ns&3)!==0&&sf(),as(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===ah?jl++:(jl=0,ah=t):(jl=0,ah=null),Ec(0,!1)}}function OM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sc(t)))}function sf(){return fo!==null&&(fo.skipTransition(),fo=null),$m(),tg(),eg(),ng()}function ng(){if(ze!==5)return!1;var e=Di,t=Qm;Qm=0;var n=yg(ns),i=kt.T,s=me.p;try{me.p=32>n?32:n,kt.T=null,n=jm,jm=null;var a=Di,r=ns;if(ze=0,sr=Di=null,ns=0,(pe&6)!==0)throw Error(K(331));var o=pe;if(pe|=4,MM(a.current),yM(a,a.current,r,n),pe=o,Ec(0,!1),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(gc,a)}catch{}return!0}finally{me.p=s,kt.T=i,OM(e,t)}}function zy(e,t,n){t=xi(n,t),t=Im(e.stateNode,t,2),e=oa(e,t,2),e!==null&&(_c(e,2),as(e))}function xe(e,t,n){if(e.tag===3)zy(e,e,n);else for(;t!==null;){if(t.tag===3){zy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ua===null||!ua.has(i))){e=xi(n,e),n=JS(2),i=oa(t,n,2),i!==null&&(KS(n,i,t,e),_c(i,2),as(i));break}}t=t.return}}function Qp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new JA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(n0=!0,s.add(n),e=iw.bind(null,e,t,n),t.then(e,e))}function iw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(le&n)===n&&((Ve===4||Ve===3&&(le&62914560)===le&&300>$n()-tf)&&(pe&2)===0?Mo(e,0):Nh|=n,xo===le&&(xo=0)),as(e)}function IM(e,t){t===0&&(t=Tx()),e=lr(e,t),e!==null&&(_c(e,t),as(e))}function sw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),IM(e,n)}function aw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(t),IM(e,n)}function rw(e,t){return vg(e,t)}var bo=null,Wr=null,ig=!1,Ph=!1,jp=!1,ia=0;function as(e){e!==Wr&&e.next===null&&(Wr===null?bo=Wr=e:Wr=Wr.next=e),Ph=!0,ig||(ig=!0,lw())}function Ec(e,t){if(!jp&&Ph){jp=!0;do for(var n=!1,i=bo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ei(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,By(i,a))}else a=le,a=Hh(i,i===Ae?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||vc(i,a)||(n=!0,By(i,a));i=i.next}while(n);jp=!1}}function ow(){PM()}function PM(){Ph=ig=!1;var e=0;ia!==0&&vw()&&(e=ia);for(var t=$n(),n=null,i=bo;i!==null;){var s=i.next,a=zM(i,t);a===0?(i.next=null,n===null?bo=s:n.next=s,s===null&&(Wr=n)):(n=i,(e!==0||(a&3)!==0)&&(Ph=!0)),i=s}ze!==0&&ze!==5||Ec(e,!1),ia!==0&&(ia=0)}function zM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ei(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=TT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ae,n=le,n=Hh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Dp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Dp(i),yg(n)){case 2:case 8:n=Mx;break;case 32:n=ph;break;case 268435456:n=bx;break;default:n=ph}return i=BM.bind(null,e),n=vg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Dp(i),e.callbackPriority=2,e.callbackNode=null,2}function BM(e,t){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(sf()&&e.callbackNode!==n)return null;var i=le;return i=Hh(e,e===Ae?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(wM(e,i,t),zM(e,$n()),e.callbackNode!=null&&e.callbackNode===n?BM.bind(null,e):null)}function By(e,t){if(sf())return null;wM(e,t,!0)}function lw(){yw(function(){(pe&6)!==0?vg(Sx,ow):PM()})}function s0(){if(ia===0){var e=tr;e===0&&(e=Au,Au<<=1,(Au&261888)===0&&(Au=256)),ia=e}return ia}function Fy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yu(e)}function cw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Fy((s[kn]||null).action),r=i.submitter;r&&(t=(t=r[kn]||null)?Fy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Gh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ia!==0){var l=new FormData(s,r);Lm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Lm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Vu=0;Vu<Mm.length;Vu++)Gu=Mm[Vu],Hy=Gu.toLowerCase(),Vy=Gu[0].toUpperCase()+Gu.slice(1),Ui(Hy,"on"+Vy);var Gu,Hy,Vy,Vu;Ui(Kx,"onAnimationEnd");Ui(Qx,"onAnimationIteration");Ui(jx,"onAnimationStart");Ui("dblclick","onDoubleClick");Ui("focusin","onFocus");Ui("focusout","onBlur");Ui(xA,"onTransitionRun");Ui(SA,"onTransitionStart");Ui(MA,"onTransitionCancel");Ui($x,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lc));function FM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){gh(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){gh(u)}s.currentTarget=null,a=l}}}}function se(e,t){var n=t[I_];n===void 0&&(n=t[I_]=new Set);var i=e+"__bubble";n.has(i)||(HM(t,e,2,!1),n.add(i))}function $p(e,t,n){var i=0;t&&(i|=4),HM(n,e,i,t)}var ku="_reactListening"+Math.random().toString(36).slice(2);function a0(e){if(!e[ku]){e[ku]=!0,Ux.forEach(function(n){n!=="selectionchange"&&(uw.has(n)||$p(n,!1,e),$p(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ku]||(t[ku]=!0,$p("selectionchange",!1,t))}}function HM(e,t,n,i){switch(u1(t)){case 2:var s=nR;break;case 8:s=iR;break;default:s=f0}n=s.bind(null,t,n,e),s=void 0,!_m||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function tm(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Xa(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Fx(function(){var c=a,u=Sg(n),d=[];t:{var h=tS.get(e);if(h!==void 0){var p=Gh,g=e;switch(e){case"keypress":if(Ju(n)===0)break t;case"keydown":case"keyup":p=KT;break;case"focusin":g="focus",p=Pp;break;case"focusout":g="blur",p=Pp;break;case"beforeblur":case"afterblur":p=Pp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=k_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=BT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=eA;break;case Kx:case Qx:case jx:p=VT;break;case $x:p=iA;break;case"scroll":case"scrollend":p=PT;break;case"wheel":p=aA;break;case"copy":case"cut":case"paste":p=kT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=q_;break;case"submit":p=$T;break;case"toggle":case"beforetoggle":p=oA}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),f=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,_;v!==null;){var y=v;if(_=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||_===null||f===null||(y=tc(v,f),y!=null&&x.push(cc(v,y,_))),m)break;v=v.return}0<x.length&&(h=new p(h,g,null,n,u),d.push({event:h,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==vm&&(g=n.relatedTarget||n.fromElement)&&(Xa(g)||g[Co]))break t;(h||p)&&(g=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?Xa(p):null,p!==null&&(m=mc(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(h=null,p=c),h!==p&&(x=k_,y="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(x=q_,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=h==null?g:zl(h),_=p==null?g:zl(p),g=new x(y,v+"leave",h,n,u),g.target=m,g.relatedTarget=_,y=null,Xa(u)===c&&(x=new x(f,v+"enter",p,n,u),x.target=_,x.relatedTarget=m,y=x),m=y,x=h&&p?am(h,p,hw):null,h!==null&&Gy(d,g,h,x,!1),p!==null&&m!==null&&Gy(d,m,p,x,!0)))}t:{if(h=c?zl(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=J_;else if(Z_(h))if(qx)A=vA;else{A=mA;var R=pA}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&xg(c.elementType)&&(A=J_):A=gA;if(A&&(A=A(e,c))){Xx(d,A,n,u);break t}R&&R(e,h,c)}switch(R=c?zl(c):window,e){case"focusin":(Z_(R)||R.contentEditable==="true")&&(jr=R,xm=c,Gl=null);break;case"focusout":Gl=xm=jr=null;break;case"mousedown":Sm=!0;break;case"contextmenu":case"mouseup":case"dragend":Sm=!1,$_(d,n,u);break;case"selectionchange":if(yA)break;case"keydown":case"keyup":$_(d,n,u)}var w;if(Eg)t:{switch(e){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else Qr?Gx(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Vx&&n.locale!=="ko"&&(Qr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Qr&&(w=Hx()):($s=u,Mg="value"in $s?$s.value:$s.textContent,Qr=!0)),R=zh(c,U),0<R.length&&(U=new X_(U,e,null,n,u),d.push({event:U,listeners:R}),w?U.data=w:(w=kx(n),w!==null&&(U.data=w)))),(w=cA?uA(e,n):hA(e,n))&&(U=zh(c,"onBeforeInput"),0<U.length&&(R=new X_("onBeforeInput","beforeinput",null,n,u),d.push({event:R,listeners:U}),R.data=w)),cw(d,e,c,n,u)}FM(d,t)})}function cc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=tc(e,n),s!=null&&i.unshift(cc(e,s,a)),s=tc(e,t),s!=null&&i.push(cc(e,s,a))),e.tag===3)return i;e=e.return}return[]}function hw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=tc(n,a),c!=null&&r.unshift(cc(n,c,l))):s||(c=tc(n,a),c!=null&&r.push(cc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var fw=/\r\n?/g,dw=/\u0000|\uFFFD/g;function ky(e){return(typeof e=="string"?e:""+e).replace(fw,`
`).replace(dw,"")}function VM(e,t){return t=ky(t),ky(e)===t}function ye(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||_o(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&_o(e,""+i);else return;break;case"className":Cu(e,"class",i);break;case"tabIndex":Cu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Cu(e,n,i);break;case"style":Bx(e,i,a);return;case"data":if(t!=="object"){Cu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ye(e,t,"name",s.name,s,null),ye(e,t,"formEncType",s.formEncType,s,null),ye(e,t,"formMethod",s.formMethod,s,null),ye(e,t,"formTarget",s.formTarget,s,null)):(ye(e,t,"encType",s.encType,s,null),ye(e,t,"method",s.method,s,null),ye(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ji);return;case"onScroll":i!=null&&se("scroll",e);return;case"onScrollEnd":i!=null&&se("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(K(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Yu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":se("beforetoggle",e),se("toggle",e),Wu(e,"popover",i);break;case"xlinkActuate":vs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":vs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":vs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":vs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":vs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":vs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":vs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":vs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":vs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Wu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=OT.get(n)||n,Wu(e,n,i);else return}fe=!0}function sg(e,t,n,i,s,a){switch(n){case"style":Bx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(K(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")_o(e,i);else if(typeof i=="number"||typeof i=="bigint")_o(e,""+i);else return;break;case"onScroll":i!=null&&se("scroll",e);return;case"onScrollEnd":i!=null&&se("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Nx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[kn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}fe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Wu(e,n,i)}return}fe=!0}function gn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ye(e,t,a,r,n,null)}}s&&ye(e,t,"srcSet",n.srcSet,n,null),i&&ye(e,t,"src",n.src,n,null);return;case"input":se("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(K(137,t));break;default:ye(e,t,i,u,n,null)}}Ix(e,a,o,l,c,r,s,!1);return;case"select":se("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ye(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?ro(e,!!i,t,!1):n!=null&&ro(e,!!i,n,!0);return;case"textarea":se("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:ye(e,t,r,o,n,null)}zx(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ye(e,t,l,i,n,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(i=0;i<lc.length;i++)se(lc[i],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:ye(e,t,c,i,n,null)}return;default:if(xg(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&sg(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ye(e,t,o,i,n,null))}var pw={};function mw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ye(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":p!==d&&(fe=!0),a=p;break;case"name":p!==d&&(fe=!0),s=p;break;case"checked":p!==d&&(fe=!0),c=p;break;case"defaultChecked":p!==d&&(fe=!0),u=p;break;case"value":p!==d&&(fe=!0),r=p;break;case"defaultValue":p!==d&&(fe=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(K(137,t));break;default:p!==d&&ye(e,t,h,p,i,d)}}gm(e,r,o,l,c,u,a,s);return;case"select":p=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||ye(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(fe=!0),h=a;break;case"defaultValue":a!==l&&(fe=!0),o=a;break;case"multiple":a!==l&&(fe=!0),r=a;default:a!==l&&ye(e,t,s,a,i,l)}t=o,n=r,i=p,h!=null?ro(e,!!n,h,!1):!!i!=!!n&&(t!=null?ro(e,!!n,t,!0):ro(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ye(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(fe=!0),h=s;break;case"defaultValue":s!==a&&(fe=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(K(91));break;default:s!==a&&ye(e,t,r,s,i,a)}Px(e,h,p);return;case"option":for(var g in n)if(h=n[g],n.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:ye(e,t,g,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":h!==p&&(fe=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ye(e,t,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x)&&ye(e,t,x,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(K(137,t));break;default:ye(e,t,c,h,i,p)}return;default:if(xg(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&sg(e,t,m,void 0,i,h);for(u in i)h=i[u],p=n[u],!i.hasOwnProperty(u)||h===p||h===void 0&&p===void 0||sg(e,t,u,h,i,p);return}}for(var f in n)h=n[f],n.hasOwnProperty(f)&&h!=null&&!i.hasOwnProperty(f)&&ye(e,t,f,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||ye(e,t,d,h,i,p)}function Xy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Xy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&Xy(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ag=null,rg=null;function uc(e){return e.nodeType===9?e:e.ownerDocument}function qy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function GM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function kM(e,t,n,i){return n=uc(n).createElement(e),n[fn]=i,n[kn]=t,gn(n,e,t),on(n),n}function og(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var em=null;function vw(){var e=window.event;return e&&e.type==="popstate"?e===em?!1:(em=e,!0):(em=null,!1)}var r0=typeof setTimeout=="function"?setTimeout:void 0,_w=typeof clearTimeout=="function"?clearTimeout:void 0,Wy=typeof Promise=="function"?Promise:void 0,Yy=typeof requestAnimationFrame=="function"?requestAnimationFrame:r0,yw=typeof queueMicrotask=="function"?queueMicrotask:typeof Wy<"u"?function(e){return Wy.resolve(null).then(e).catch(xw)}:r0;function xw(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function Zy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Ro(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")im(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,im(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[yc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&im(e.ownerDocument.body);n=s}while(n);Ro(t)}function Jy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function XM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function qM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function WM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function lg(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return WM(t,n,e)}function Sw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return WM(t,n,e)}function Mw(e){return e.documentElement.clientHeight}function bw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Ew(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var u=c.startViewTransition({update:function(){var h=c.defaultView,p=h.navigation&&h.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(Mw(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,f=0,v=0;v<m.length;v++){var _=m[v];if(!_.complete){var y=_.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<h.innerHeight&&y.left<h.innerWidth){if(f+=s1(_),f>lh){x.length=g;break}_=new Promise(bw.bind(_)),x.push(_)}}}if(0<x.length)return h=Promise.race([Promise.all(x),new Promise(function(A){return setTimeout(A,500)})]).then(s,s),(p?Promise.allSettled([p.finished,h]):h).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),p=0;p<h.length;p++){var g=h[p],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=x.getKeyframes();for(var f=m=void 0,v=!0,_=0;_<g.length;_++){var y=g[_],A=y.width;if(m===void 0)m=A;else if(m!==A){v=!1;break}if(A=y.height,f===void 0)f=A;else if(f!==A){v=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}v&&m!==void 0&&f!==void 0&&(x.setKeyframes(g),v=getComputedStyle(x.target,x.pseudoElement),v.width!==m||v.height!==f)&&(v=g[0],v.width=m,v.height=f,v=g[g.length-1],v.width=m,v.height=f,x.setKeyframes(g))}}r()},function(h){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&l(h)}finally{i(),s(),r()}}),u.finished.finally(function(){for(var h=0;h<d.length;h++)d[h].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),o()}),u}catch{return i(),s(),r(),null}}function qa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}qa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:we({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};qa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};qa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function YM(e){return{name:e,group:new qa("group",e),imagePair:new qa("image-pair",e),old:new qa("old",e),new:new qa("new",e)}}function si(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(ZM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Eo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Gn(this._fragmentFiber.child,!1,Tw,e,o,i)}this._eventListeners=a}};function Tw(e,t,n,i){return je(e).addEventListener(t,n,i),!1}si.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=ZM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Eo(s.optionsOrUseCapture),Gn(this._fragmentFiber.child,!1,Aw,e,n,s),i.splice(t,1),a!==null&&a()}};function Aw(e,t,n,i){return je(e).removeEventListener(t,n,i),!1}function Eo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ky(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function ZM(e,t,n,i){if(e.length===0)return-1;i=Ky(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Ky(a.optionsOrUseCapture)===i)return s}return-1}si.prototype.dispatchEvent=function(e){var t=ar(this._fragmentFiber);if(t===null)return!0;t=je(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Eo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Eo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};si.prototype.focus=function(e){Gn(this._fragmentFiber.child,!0,JM,e,void 0,void 0)};function JM(e,t){return e.tag===6?!1:(e=je(e),Bw(e,t))}si.prototype.focusLast=function(e){var t=[];Gn(this._fragmentFiber.child,!0,o0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!JM(t[n],e);n--);};function o0(e,t){return t.push(e),!1}si.prototype.blur=function(){var e=ar(this._fragmentFiber);e!==null&&(e=je(e),e=uc(e).activeElement,e!==null&&Gn(this._fragmentFiber.child,!1,ww,e,void 0,void 0))};function ww(e,t){return e.tag===6?!1:(e=je(e),e===t||e.contains(t)?(t.blur(),!0):!1)}si.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Gn(this._fragmentFiber.child,!1,Rw,e,void 0,void 0)};function Rw(e,t){return e.tag===6||(e=je(e),t.observe(e)),!1}si.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Gn(this._fragmentFiber.child,!1,Cw,e,void 0,void 0);for(var n=t=0;n<Ci.length;n++){var i=Ci[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ci[t++]=i}Ci.length=t}};function Cw(e,t){return e.tag===6||(e=je(e),t.unobserve(e)),!1}var Ci=[],nm=!1;function Dw(e,t,n){Ci.push({fragmentInstance:e,observer:t,instance:n}),nm||(nm=!0,Fw(function(){nm=!1;var i=Ci;Ci=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}si.prototype.getClientRects=function(){var e=[];return Gn(this._fragmentFiber.child,!1,Uw,e,void 0,void 0),e};function Uw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=je(e),t.push.apply(t,e.getClientRects());return!1}si.prototype.getRootNode=function(e){var t=ar(this._fragmentFiber);return t===null?this:je(t).getRootNode(e)};si.prototype.compareDocumentPosition=function(e){var t=ar(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Gn(this._fragmentFiber.child,!1,o0,n,void 0,void 0);var i=je(t);if(n.length===0){if(n=i,C_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=vx(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=je(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=je(n[0]),s=je(n[n.length-1]);var a=C_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Nw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Nw(e,t,n,i,s){var a=Xa(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=ar(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=am(n,a,D_),t===null?t=!1:(Gn(t,!0,lT,a,n),a=Yr,Yr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=am(i,a,D_),t===null?t=!1:(Gn(t,!0,cT,a,i),a=Yr,sm=Yr=null,t=a!==null)),t):!1}function Qy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(K(566));var t=[];Gn(this._fragmentFiber.child,!1,o0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=vx(this._fragmentFiber);if(i=n?i[1]||i[0]||ar(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=je(i),Qy(e,n);return}if(i=je(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=je(s),Qy(s,n)):je(s).scrollIntoView(e),i+=n?-1:1}};function Lw(e,t){return e=je(e),KM(e,t),!1}function KM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function QM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Eo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ci.length;o++){var l=Ci[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ci[r++]=l)}Ci.length=r,a.observe(e)}),KM(e,t))}function Ow(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Eo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?Dw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function cg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cg(n),Vh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Iw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[yc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function Pw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mi(e.nextSibling),e===null))return null;return e}function jM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mi(e.nextSibling),e===null))return null;return e}function ug(e){return e.data==="$?"||e.data==="$~"}function l0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Mi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hg=null;function jy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Mi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $y(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Bw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Fw(e){Yy(function(){Yy(function(t){return e(t)})})}function $M(e,t,n){switch(t=uc(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}function t1(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&ye(e,t,i,null,pw,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),Vh(e)}function im(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vh(e)}var bi=new Map,tx=new Set;function hc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Us=me.d;me.d={f:Hw,r:Vw,D:Gw,C:kw,L:Xw,m:qw,X:Yw,S:Ww,M:Zw};function Hw(){var e=Us.f(),t=ef();return e||t}function Vw(e){var t=Do(e);t!==null&&t.tag===5&&t.type==="form"?BS(t):Us.r(e)}var Oo=typeof document>"u"?null:document;function e1(e,t,n){var i=Oo;if(i&&typeof t=="string"&&t){var s=yi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),tx.has(s)||(tx.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),gn(t,"link",e),on(t),i.head.appendChild(t)))}}function Gw(e){Us.D(e),e1("dns-prefetch",e,null)}function kw(e,t){Us.C(e,t),e1("preconnect",e,t)}function Xw(e,t,n){Us.L(e,t,n);var i=Oo;if(i&&e&&t){var s='link[rel="preload"][as="'+yi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+yi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+yi(n.imageSizes)+'"]')):s+='[href="'+yi(e)+'"]';var a=s;switch(t){case"style":a=To(e);break;case"script":a=Io(e)}if(!(bi.has(a)||(e=we({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),bi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Tc(a))||t==="script"&&i.querySelector(Ac(a))))){var r=i.createElement("link");gn(r,"link",e),t==="style"&&(r[mh]=!0,r.onload=r.onerror=function(){Dx(r)}),on(r),i.head.appendChild(r)}}}function qw(e,t){Us.m(e,t);var n=Oo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+yi(i)+'"][href="'+yi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Io(e)}if(!bi.has(a)&&(e=we({rel:"modulepreload",href:e},t),bi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ac(a)))return}i=n.createElement("link"),gn(i,"link",e),on(i),n.head.appendChild(i)}}}function Ww(e,t,n){Us.S(e,t,n);var i=Oo;if(i&&e){var s=ao(i).hoistableStyles,a=To(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Tc(a)))o.loading=5;else{e=we({rel:"stylesheet",href:e,"data-precedence":t},n),(n=bi.get(a))&&c0(e,n);var l=r=i.createElement("link");on(l),gn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,rh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function Yw(e,t){Us.X(e,t);var n=Oo;if(n&&e){var i=ao(n).hoistableScripts,s=Io(e),a=i.get(s);a||(a=n.querySelector(Ac(s)),a||(e=we({src:e,async:!0},t),(t=bi.get(s))&&u0(e,t),a=n.createElement("script"),on(a),gn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Zw(e,t){Us.M(e,t);var n=Oo;if(n&&e){var i=ao(n).hoistableScripts,s=Io(e),a=i.get(s);a||(a=n.querySelector(Ac(s)),a||(e=we({src:e,async:!0,type:"module"},t),(t=bi.get(s))&&u0(e,t),a=n.createElement("script"),on(a),gn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function ex(e,t,n,i){var s=(s=sa.current)?hc(s):null;if(!s)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=To(n.href),t=ao(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=To(n.href);var a=ao(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Tc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=bi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bi.set(e,a)),Jw(s,e,a,r.state))),t&&i===null)throw Error(K(528,""));return r}if(t&&i!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Io(n),t=ao(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function To(e){return'href="'+yi(e)+'"'}function Tc(e){return'link[rel="stylesheet"]['+e+"]"}function n1(e){return we({},e,{"data-precedence":e.precedence,precedence:null})}function Jw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[mh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[mh]=!0,t.onload=t.onerror=Dx.bind(null,t),gn(t,"link",n),on(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Io(e){return'[src="'+yi(e)+'"]'}function Ac(e){return"script[async]"+e}function nx(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+yi(n.href)+'"]');if(i)return t.instance=i,on(i),i;var s=we({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),on(i),gn(i,"style",s),rh(i,n.precedence,e),t.instance=i;case"stylesheet":s=To(n.href);var a=e.querySelector(Tc(s));if(a)return t.state.loading|=4,t.instance=a,on(a),a;i=n1(n),(s=bi.get(s))&&c0(i,s),a=(e.ownerDocument||e).createElement("link"),on(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),gn(a,"link",i),t.state.loading|=4,rh(a,n.precedence,e),t.instance=a;case"script":return a=Io(n.src),(s=e.querySelector(Ac(a)))?(t.instance=s,on(s),s):(i=n,(s=bi.get(a))&&(i=we({},n),u0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),on(s),gn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,rh(i,n.precedence,e));return t.instance}function rh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function c0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function u0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var oh=null;function ix(e,t,n){if(oh===null){var i=new Map,s=oh=new Map;s.set(n,i)}else s=oh,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[yc]||a[fn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function fg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Kw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function i1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function s1(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ax(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=s1(t),e.suspenseyImages.push(t)),e=$w.bind(e),t.decode().then(e,e))}function Qw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=To(i.href),a=t.querySelector(Tc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,on(a);return}a=t.ownerDocument||t,i=n1(i),(s=bi.get(s))&&c0(i,s),a=a.createElement("link"),on(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),gn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=fc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var lh=0;function jw(e,t){return e.stylesheets&&e.count===0&&ch(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&lh===0&&(lh=62500*gw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>lh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function a1(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ch(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function fc(){this.count--,a1(this)}function $w(){this.imgCount--,a1(this)}var Bh=null;function ch(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bh=new Map,t.forEach(tR,e),Bh=null,fc.call(e))}function tR(e,t){if(!(t.state.loading&4)){var n=Bh.get(e);if(n)var i=n.get(null);else{n=new Map,Bh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=fc.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Ao={$$typeof:Qi,Provider:null,Consumer:null,_currentValue:Wa,_currentValue2:Wa,_threadCount:0};function eR(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Up(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Up(0),this.hiddenUpdates=Up(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function r1(e,t,n,i,s,a,r,o,l,c,u,d){return e=new eR(e,t,n,r,l,c,u,d,o),t=1,a===!0&&(t|=24),a=Hn(3,null,null,t),e.current=a,a.stateNode=e,t=Dg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Lg(a),e}function o1(e){return e?(e=eo,e):eo}function l1(e,t,n,i,s,a){s=o1(s),i.context===null?i.context=s:i.pendingContext=s,i=ra(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=oa(e,i,t),n!==null&&(Vn(n,e,t),Xl(n,e,t))}function rx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function h0(e,t){rx(e,t),(e=e.alternate)&&rx(e,t)}function c1(e){if(e.tag===13||e.tag===31){var t=lr(e,67108864);t!==null&&Vn(t,e,67108864),h0(e,67108864)}}function ox(e){if(e.tag===13||e.tag===31){var t=ni();t=_g(t);var n=lr(e,t);n!==null&&Vn(n,e,t),h0(e,t)}}var wo=!0;function nR(e,t,n,i){var s=kt.T;kt.T=null;var a=me.p;try{me.p=2,f0(e,t,n,i)}finally{me.p=a,kt.T=s}}function iR(e,t,n,i){var s=kt.T;kt.T=null;var a=me.p;try{me.p=8,f0(e,t,n,i)}finally{me.p=a,kt.T=s}}function f0(e,t,n,i){if(wo){var s=dg(i);if(s===null)tm(e,t,i,Fh,n),lx(e,i);else if(aR(s,e,t,n,i))i.stopPropagation();else if(lx(e,i),t&4&&-1<sR.indexOf(e)){for(;s!==null;){var a=Do(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Va(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ei(r);o.entanglements[1]|=l,r&=~l}as(a),(pe&6)===0&&(Lh=$n()+500,Ec(0,!1))}}break;case 31:case 13:o=lr(a,2),o!==null&&Vn(o,a,2),ef(),h0(a,2)}if(a=dg(i),a===null&&tm(e,t,i,Fh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else tm(e,t,i,null,n)}}function dg(e){return e=Sg(e),d0(e)}var Fh=null;function d0(e){if(Fh=null,e=Xa(e),e!==null){var t=mc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=px(t),e!==null)return e;e=null}else if(n===31){if(e=mx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fh=e,null}function u1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_T()){case Sx:return 2;case Mx:return 8;case ph:case yT:return 32;case bx:return 268435456;default:return 32}default:return 32}}var pg=!1,ha=null,fa=null,da=null,dc=new Map,pc=new Map,Qs=[],sR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lx(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":dc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pc.delete(t.pointerId)}}function Ll(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Do(t),t!==null&&c1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function aR(e,t,n,i,s){switch(t){case"focusin":return ha=Ll(ha,e,t,n,i,s),!0;case"dragenter":return fa=Ll(fa,e,t,n,i,s),!0;case"mouseover":return da=Ll(da,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return dc.set(a,Ll(dc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,pc.set(a,Ll(pc.get(a)||null,e,t,n,i,s)),!0}return!1}function h1(e){var t=Xa(e.target);if(t!==null){var n=mc(t);if(n!==null){if(t=n.tag,t===13){if(t=px(n),t!==null){e.blockedOn=t,O_(e.priority,function(){ox(n)});return}}else if(t===31){if(t=mx(n),t!==null){e.blockedOn=t,O_(e.priority,function(){ox(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);vm=i,n.target.dispatchEvent(i),vm=null}else return t=Do(n),t!==null&&c1(t),e.blockedOn=n,!1;t.shift()}return!0}function cx(e,t,n){uh(e)&&n.delete(t)}function rR(){pg=!1,ha!==null&&uh(ha)&&(ha=null),fa!==null&&uh(fa)&&(fa=null),da!==null&&uh(da)&&(da=null),dc.forEach(cx),pc.forEach(cx)}function Xu(e,t){e.blockedOn===t&&(e.blockedOn=null,pg||(pg=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,rR)))}var qu=null;function ux(e){qu!==e&&(qu=e,$e.unstable_scheduleCallback($e.unstable_NormalPriority,function(){qu===e&&(qu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(d0(i||n)===null)continue;break}var a=Do(n);a!==null&&(e.splice(t,3),t-=3,Lm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Ro(e){function t(l){return Xu(l,e)}ha!==null&&Xu(ha,e),fa!==null&&Xu(fa,e),da!==null&&Xu(da,e),dc.forEach(t),pc.forEach(t);for(var n=0;n<Qs.length;n++){var i=Qs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Qs.length&&(n=Qs[0],n.blockedOn===null);)h1(n),n.blockedOn===null&&Qs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[kn]||null;if(typeof a=="function")r||ux(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[kn]||null)o=r.formAction;else if(d0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ux(n)}}}function f1(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function p0(e){this._internalRoot=e}af.prototype.render=p0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,i=ni();l1(n,i,e,t,null,null)};af.prototype.unmount=p0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;l1(e.current,2,null,e,null,null),ef(),t[Co]=null}};function af(e){this._internalRoot=e}af.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qs.length&&t!==0&&t<Qs[n].priority;n++);Qs.splice(n,0,e),n===0&&h1(e)}};var hx=fx.version;if(hx!=="19.3.1")throw Error(K(527,hx,"19.3.1"));me.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=oT(t),e=e!==null?gx(e):null,e=e===null?null:e.stateNode,e};var oR={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:kt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ol.isDisabled&&Ol.supportsFiber))try{gc=Ol.inject(oR),ti=Ol}catch{}var Ol;rf.createRoot=function(e,t){if(!dx(e))throw Error(K(299));var n=!1,i="",s=WS,a=YS,r=ZS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=r1(e,1,!1,null,null,n,i,null,s,a,r,f1),e[Co]=t.current,a0(e),new p0(t)};rf.hydrateRoot=function(e,t,n){if(!dx(e))throw Error(K(299));var i=!1,s="",a=WS,r=YS,o=ZS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=r1(e,1,!0,t,n??null,i,s,l,a,r,o,f1),t.context=o1(null),n=t.current,i=ni(),i=_g(i),s=ra(i),s.callback=null,oa(n,s,i),n=i,t.current.lanes=n,_c(t,n),as(t),e[Co]=t.current,a0(e),new af(t)};rf.version="19.3.1"});var g1=Xi((EN,m1)=>{"use strict";function p1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p1)}catch(e){console.error(e)}}p1(),m1.exports=d1()});var fE=Xi($d=>{"use strict";var kU=Symbol.for("react.transitional.element"),XU=Symbol.for("react.fragment");function hE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:kU,type:e,key:i,ref:t!==void 0?t:null,props:n}}$d.Fragment=XU;$d.jsx=hE;$d.jsxs=hE});var fu=Xi((FI,dE)=>{"use strict";dE.exports=fE()});var ap=Ba(El()),DE=Ba(g1());var Ur=Ba(El());var G1=0,ev=1,k1=2;var nv=1,X1=2,fs=3,Bs=0,On=1,hi=2,Hs=0,mr=1,iv=2,sv=3,av=4,q1=5,Ra=100,W1=101,Y1=102,Z1=103,J1=104,K1=200,Q1=201,j1=202,$1=203,Cf=204,Df=205,tb=206,eb=207,nb=208,ib=209,sb=210,ab=211,rb=212,ob=213,lb=214,id=0,sd=1,ad=2,gr=3,rd=4,od=5,ld=6,cd=7,rv=0,cb=1,ub=2,Vs=0,hb=1,fb=2,db=3,pb=4,mb=5,gb=6,ud=7;var ov=300,Er=301,Tr=302,hd=303,fd=304,au=306,us=1e3,os=1001,Uf=1002,qn=1003,vb=1004;var ru=1005;var oi=1006,dd=1007;var ds=1008;var Bi=1009,lv=1010,cv=1011,hl=1012,pd=1013,Ia=1014,ps=1015,fl=1016,md=1017,gd=1018,dl=1020,uv=35902,hv=35899,fv=1021,dv=1022,Ti=1023,Jo=1026,pl=1027,pv=1028,vd=1029,mv=1030,_d=1031;var yd=1033,ou=33776,lu=33777,cu=33778,uu=33779,xd=35840,Sd=35841,Md=35842,bd=35843,Ed=36196,Td=37492,Ad=37496,wd=37808,Rd=37809,Cd=37810,Dd=37811,Ud=37812,Nd=37813,Ld=37814,Od=37815,Id=37816,Pd=37817,zd=37818,Bd=37819,Fd=37820,Hd=37821,Vd=36492,Gd=36494,kd=36495,Xd=36283,qd=36284,Wd=36285,Yd=36286;var Ic=2300,Nf=2301,Rf=2302,G0=2400,k0=2401,X0=2402;var _b=3200,yb=3201;var gv=0,xb=1,Gs="",_n="srgb",vr="srgb-linear",Pc="linear",Se="srgb";var pr=7680;var q0=519,Sb=512,Mb=513,bb=514,vv=515,Eb=516,Tb=517,Ab=518,wb=519,W0=35044;var _v="300 es",Ii=2e3,zc=2001;var Fs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var m0=Math.PI/180,Lf=180/Math.PI;function ml(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[e&255]+bn[e>>8&255]+bn[e>>16&255]+bn[e>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[n&63|128]+bn[n>>8&255]+"-"+bn[n>>16&255]+bn[n>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function ie(e,t,n){return Math.max(t,Math.min(n,e))}function lR(e,t){return(e%t+t)%t}function g0(e,t,n){return(1-n)*e+n*t}function wc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Xn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var gt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==h||c!==p||u!==g){let m=1-o,f=l*h+c*p+u*g+d*x,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let A=Math.sqrt(_),R=Math.atan2(A,f*v);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let y=o*v;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,d=d*m+x*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],h=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+u*d+l*p-c*h,t[n+1]=l*g+u*h+c*d-o*p,t[n+2]=c*g+u*p+o*h-l*d,t[n+3]=u*g-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),h=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(v1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(v1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return v0.copy(this).projectOnVector(t),this.sub(v0)}reflect(t){return this.sub(v0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},v0=new N,v1=new Wn,Kt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],v=s[1],_=s[4],y=s[7],A=s[2],R=s[5],w=s[8];return a[0]=r*x+o*v+l*A,a[3]=r*m+o*_+l*R,a[6]=r*f+o*y+l*w,a[1]=c*x+u*v+d*A,a[4]=c*m+u*_+d*R,a[7]=c*f+u*y+d*w,a[2]=h*x+p*v+g*A,a[5]=h*m+p*_+g*R,a[8]=h*f+p*y+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,h=o*l-u*a,p=c*a-r*l,g=n*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*r)*x,t[3]=h*x,t[4]=(u*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(_0.makeScale(t,n)),this}rotate(t){return this.premultiply(_0.makeRotation(-t)),this}translate(t,n){return this.premultiply(_0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_0=new Kt;function yv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Bc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Rb(){let e=Bc("canvas");return e.style.display="block",e}var _1={};function Ko(e){e in _1||(_1[e]=!0,console.warn(e))}function Cb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var y1=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x1=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cR(){let e={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Se&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Se&&(s.r=Zo(s.r),s.g=Zo(s.g),s.b=Zo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gs?Pc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[vr]:{primaries:t,whitePoint:i,transfer:Pc,toXYZ:y1,fromXYZ:x1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:y1,fromXYZ:x1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),e}var he=cR();function zs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Zo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Po,Of=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Po===void 0&&(Po=Bc("canvas")),Po.width=t.width,Po.height=t.height;let s=Po.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Po}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Bc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=zs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zs(n[i]/255)*255):n[i]=zs(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uR=0,Qo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uR++}),this.uuid=ml(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(y0(s[r].image)):a.push(y0(s[r]))}else a=y0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function y0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Of.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hR=0,x0=new N,Nn=class e extends Fs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=os,s=os,a=oi,r=ds,o=Ti,l=Bi,c=e.DEFAULT_ANISOTROPY,u=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=ml(),this.name="",this.source=new Qo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(x0).x}get height(){return this.source.getSize(x0).y}get depth(){return this.source.getSize(x0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ov)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case Uf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case Uf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=ov;Nn.DEFAULT_ANISOTROPY=1;var Fe=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,y=(p+1)/2,A=(f+1)/2,R=(u+h)/4,w=(d+x)/4,U=(g+m)/4;return _>y&&_>A?_<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(_),s=R/i,a=w/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=R/s,a=U/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=w/a,s=U/a),this.set(i,s,a,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this.w=ie(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this.w=ie(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},If=class extends Fs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Fe(0,0,t,n),this.scissorTest=!1,this.viewport=new Fe(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Nn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Qo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hs=class extends If{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Fc=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pf=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=qn,this.minFilter=qn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ca=class{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ni.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ni.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ni.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ni):Ni.fromBufferAttribute(a,r),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),of.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),of.copy(i.boundingBox)),of.applyMatrix4(t.matrixWorld),this.union(of)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rc),lf.subVectors(this.max,Rc),zo.subVectors(t.a,Rc),Bo.subVectors(t.b,Rc),Fo.subVectors(t.c,Rc),Sa.subVectors(Bo,zo),Ma.subVectors(Fo,Bo),ur.subVectors(zo,Fo);let n=[0,-Sa.z,Sa.y,0,-Ma.z,Ma.y,0,-ur.z,ur.y,Sa.z,0,-Sa.x,Ma.z,0,-Ma.x,ur.z,0,-ur.x,-Sa.y,Sa.x,0,-Ma.y,Ma.x,0,-ur.y,ur.x,0];return!S0(n,zo,Bo,Fo,lf)||(n=[1,0,0,0,1,0,0,0,1],!S0(n,zo,Bo,Fo,lf))?!1:(cf.crossVectors(Sa,Ma),n=[cf.x,cf.y,cf.z],S0(n,zo,Bo,Fo,lf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ns=[new N,new N,new N,new N,new N,new N,new N,new N],Ni=new N,of=new Ca,zo=new N,Bo=new N,Fo=new N,Sa=new N,Ma=new N,ur=new N,Rc=new N,lf=new N,cf=new N,hr=new N;function S0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){hr.fromArray(e,a);let o=s.x*Math.abs(hr.x)+s.y*Math.abs(hr.y)+s.z*Math.abs(hr.z),l=t.dot(hr),c=n.dot(hr),u=i.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var fR=new Ca,Cc=new N,M0=new N,jo=class{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):fR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cc.subVectors(t,this.center);let n=Cc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Cc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(M0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cc.copy(t.center).add(M0)),this.expandByPoint(Cc.copy(t.center).sub(M0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ls=new N,b0=new N,uf=new N,ba=new N,E0=new N,hf=new N,T0=new N,Hc=class{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ls)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ls.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ls.copy(this.origin).addScaledVector(this.direction,n),Ls.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){b0.copy(t).add(n).multiplyScalar(.5),uf.copy(n).sub(t).normalize(),ba.copy(this.origin).sub(b0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(uf),o=ba.dot(this.direction),l=-ba.dot(uf),c=ba.lengthSq(),u=Math.abs(1-r*r),d,h,p,g;if(u>0)if(d=r*l-o,h=r*o-l,g=a*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(b0).addScaledVector(uf,h),p}intersectSphere(t,n){Ls.subVectors(t.center,this.origin);let i=Ls.dot(this.direction),s=Ls.dot(Ls)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ls)!==null}intersectTriangle(t,n,i,s,a){E0.subVectors(n,t),hf.subVectors(i,t),T0.crossVectors(E0,hf);let r=this.direction.dot(T0),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ba.subVectors(this.origin,t);let l=o*this.direction.dot(hf.crossVectors(ba,hf));if(l<0)return null;let c=o*this.direction.dot(E0.cross(ba));if(c<0||l+c>r)return null;let u=-o*ba.dot(T0);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class e{constructor(t,n,i,s,a,r,o,l,c,u,d,h,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,d,h,p,g,x,m)}set(t,n,i,s,a,r,o,l,c,u,d,h,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Ho.setFromMatrixColumn(t,0).length(),a=1/Ho.setFromMatrixColumn(t,1).length(),r=1/Ho.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let h=r*u,p=r*d,g=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h+x*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=p*o-g,n[6]=x+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,g=c*u,x=c*d;n[0]=h-x*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*u,n[9]=x-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*u,p=r*d,g=o*u,x=o*d;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*u,n[4]=x-h*d,n[8]=g*d+p,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+g,n[10]=h-x*d}else if(t.order==="XZY"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=r*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dR,t,pR)}lookAt(t,n,i){let s=this.elements;return ai.subVectors(t,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ea.crossVectors(i,ai),Ea.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ea.crossVectors(i,ai)),Ea.normalize(),ff.crossVectors(ai,Ea),s[0]=Ea.x,s[4]=ff.x,s[8]=ai.x,s[1]=Ea.y,s[5]=ff.y,s[9]=ai.y,s[2]=Ea.z,s[6]=ff.z,s[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],A=i[15],R=s[0],w=s[4],U=s[8],E=s[12],S=s[1],C=s[5],z=s[9],G=s[13],W=s[2],Y=s[6],q=s[10],it=s[14],k=s[3],ot=s[7],St=s[11],Tt=s[15];return a[0]=r*R+o*S+l*W+c*k,a[4]=r*w+o*C+l*Y+c*ot,a[8]=r*U+o*z+l*q+c*St,a[12]=r*E+o*G+l*it+c*Tt,a[1]=u*R+d*S+h*W+p*k,a[5]=u*w+d*C+h*Y+p*ot,a[9]=u*U+d*z+h*q+p*St,a[13]=u*E+d*G+h*it+p*Tt,a[2]=g*R+x*S+m*W+f*k,a[6]=g*w+x*C+m*Y+f*ot,a[10]=g*U+x*z+m*q+f*St,a[14]=g*E+x*G+m*it+f*Tt,a[3]=v*R+_*S+y*W+A*k,a[7]=v*w+_*C+y*Y+A*ot,a[11]=v*U+_*z+y*q+A*St,a[15]=v*E+_*G+y*it+A*Tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+a*l*d-s*c*d-a*o*h+i*c*h+s*o*p-i*l*p)+x*(+n*l*p-n*c*h+a*r*h-s*r*p+s*c*u-a*l*u)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*u-i*c*u)+f*(-s*o*u-n*l*d+n*o*h+s*r*d-i*r*h+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],v=d*m*c-x*h*c+x*l*p-o*m*p-d*l*f+o*h*f,_=g*h*c-u*m*c-g*l*p+r*m*p+u*l*f-r*h*f,y=u*x*c-g*d*c+g*o*p-r*x*p-u*o*f+r*d*f,A=g*d*l-u*x*l-g*o*h+r*x*h+u*o*m-r*d*m,R=n*v+i*_+s*y+a*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=v*w,t[1]=(x*h*a-d*m*a-x*s*p+i*m*p+d*s*f-i*h*f)*w,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*f+i*l*f)*w,t[3]=(d*l*a-o*h*a-d*s*c+i*h*c+o*s*p-i*l*p)*w,t[4]=_*w,t[5]=(u*m*a-g*h*a+g*s*p-n*m*p-u*s*f+n*h*f)*w,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*f-n*l*f)*w,t[7]=(r*h*a-u*l*a+u*s*c-n*h*c-r*s*p+n*l*p)*w,t[8]=y*w,t[9]=(g*d*a-u*x*a-g*i*p+n*x*p+u*i*f-n*d*f)*w,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*f+n*o*f)*w,t[11]=(u*o*a-r*d*a-u*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=A*w,t[13]=(u*x*s-g*d*s+g*i*h-n*x*h-u*i*m+n*d*m)*w,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-u*o*s+u*i*l-n*d*l-r*i*h+n*o*h)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,d=o+o,h=a*c,p=a*u,g=a*d,x=r*u,m=r*d,f=o*d,v=l*c,_=l*u,y=l*d,A=i.x,R=i.y,w=i.z;return s[0]=(1-(x+f))*A,s[1]=(p+y)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(h+f))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+_)*w,s[9]=(m-v)*w,s[10]=(1-(h+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=Ho.set(s[0],s[1],s[2]).length(),r=Ho.set(s[4],s[5],s[6]).length(),o=Ho.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Li.copy(this);let c=1/a,u=1/r,d=1/o;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=d,Li.elements[9]*=d,Li.elements[10]*=d,n.setFromRotationMatrix(Li),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Ii,l=!1){let c=this.elements,u=2*a/(n-t),d=2*a/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Ii)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===zc)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ii,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Ii)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===zc)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Ho=new N,Li=new Le,dR=new N(0,0,0),pR=new N(1,1,1),Ea=new N,ff=new N,ai=new N,S1=new Le,M1=new Wn,Pi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return S1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(S1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return M1.setFromEuler(this),this.setFromQuaternion(M1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var $o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mR=0,b1=new N,Vo=new Wn,Os=new Le,df=new N,Dc=new N,gR=new N,vR=new Wn,E1=new N(1,0,0),T1=new N(0,1,0),A1=new N(0,0,1),w1={type:"added"},_R={type:"removed"},Go={type:"childadded",child:null},A0={type:"childremoved",child:null},Ln=class e extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new N,n=new Pi,i=new Wn,s=new N(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Kt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Vo.setFromAxisAngle(t,n),this.quaternion.multiply(Vo),this}rotateOnWorldAxis(t,n){return Vo.setFromAxisAngle(t,n),this.quaternion.premultiply(Vo),this}rotateX(t){return this.rotateOnAxis(E1,t)}rotateY(t){return this.rotateOnAxis(T1,t)}rotateZ(t){return this.rotateOnAxis(A1,t)}translateOnAxis(t,n){return b1.copy(t).applyQuaternion(this.quaternion),this.position.add(b1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(E1,t)}translateY(t){return this.translateOnAxis(T1,t)}translateZ(t){return this.translateOnAxis(A1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Os.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?df.copy(t):df.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Dc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Os.lookAt(Dc,df,this.up):Os.lookAt(df,Dc,this.up),this.quaternion.setFromRotationMatrix(Os),s&&(Os.extractRotation(s.matrixWorld),Vo.setFromRotationMatrix(Os),this.quaternion.premultiply(Vo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(w1),Go.child=t,this.dispatchEvent(Go),Go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(_R),A0.child=t,this.dispatchEvent(A0),A0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Os.multiply(t.parent.matrixWorld)),t.applyMatrix4(Os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(w1),Go.child=t,this.dispatchEvent(Go),Go.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dc,t,gR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dc,vR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ln.DEFAULT_UP=new N(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oi=new N,Is=new N,w0=new N,Ps=new N,ko=new N,Xo=new N,R1=new N,R0=new N,C0=new N,D0=new N,U0=new Fe,N0=new Fe,L0=new Fe,wa=class e{constructor(t=new N,n=new N,i=new N){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Oi.subVectors(t,n),s.cross(Oi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Oi.subVectors(s,n),Is.subVectors(i,n),w0.subVectors(t,n);let r=Oi.dot(Oi),o=Oi.dot(Is),l=Oi.dot(w0),c=Is.dot(Is),u=Is.dot(w0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,g=(r*u-o*l)*h;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ps)===null?!1:Ps.x>=0&&Ps.y>=0&&Ps.x+Ps.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ps)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ps.x),l.addScaledVector(r,Ps.y),l.addScaledVector(o,Ps.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return U0.setScalar(0),N0.setScalar(0),L0.setScalar(0),U0.fromBufferAttribute(t,n),N0.fromBufferAttribute(t,i),L0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(U0,a.x),r.addScaledVector(N0,a.y),r.addScaledVector(L0,a.z),r}static isFrontFacing(t,n,i,s){return Oi.subVectors(i,n),Is.subVectors(t,n),Oi.cross(Is).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),Is.subVectors(this.a,this.b),Oi.cross(Is).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;ko.subVectors(s,i),Xo.subVectors(a,i),R0.subVectors(t,i);let l=ko.dot(R0),c=Xo.dot(R0);if(l<=0&&c<=0)return n.copy(i);C0.subVectors(t,s);let u=ko.dot(C0),d=Xo.dot(C0);if(u>=0&&d<=u)return n.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(ko,r);D0.subVectors(t,a);let p=ko.dot(D0),g=Xo.dot(D0);if(g>=0&&p<=g)return n.copy(a);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Xo,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return R1.subVectors(a,s),o=(d-u)/(d-u+(p-g)),n.copy(s).addScaledVector(R1,o);let f=1/(m+x+h);return r=x*f,o=h*f,n.copy(i).addScaledVector(ko,r).addScaledVector(Xo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Db={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ta={h:0,s:0,l:0},pf={h:0,s:0,l:0};function O0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Qt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=he.workingColorSpace){return this.r=t,this.g=n,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=he.workingColorSpace){if(t=lR(t,1),n=ie(n,0,1),i=ie(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=O0(r,a,t+1/3),this.g=O0(r,a,t),this.b=O0(r,a,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,n=_n){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=_n){let i=Db[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return he.workingToColorSpace(En.copy(this),t),Math.round(ie(En.r*255,0,255))*65536+Math.round(ie(En.g*255,0,255))*256+Math.round(ie(En.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=he.workingColorSpace){he.workingToColorSpace(En.copy(this),n);let i=En.r,s=En.g,a=En.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=he.workingColorSpace){return he.workingToColorSpace(En.copy(this),n),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=_n){he.workingToColorSpace(En.copy(this),t);let n=En.r,i=En.g,s=En.b;return t!==_n?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ta),this.setHSL(Ta.h+t,Ta.s+n,Ta.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ta),t.getHSL(pf);let i=g0(Ta.h,pf.h,n),s=g0(Ta.s,pf.s,n),a=g0(Ta.l,pf.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new Qt;Qt.NAMES=Db;var yR=0,Da=class extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=mr,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=Df,this.blendEquation=Ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==Bs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cf&&(i.blendSrc=this.blendSrc),this.blendDst!==Df&&(i.blendDst=this.blendDst),this.blendEquation!==Ra&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_r=class extends Da{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Je=new N,mf=new gt,xR=0,yn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=W0,this.updateRanges=[],this.gpuType=ps,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mf.fromBufferAttribute(this,n),mf.applyMatrix3(t),this.setXY(n,mf.x,mf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.applyMatrix3(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.applyMatrix4(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.applyNormalMatrix(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Je.fromBufferAttribute(this,n),Je.transformDirection(t),this.setXYZ(n,Je.x,Je.y,Je.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=wc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=wc(n,this.array)),n}setX(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=wc(n,this.array)),n}setY(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=wc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=wc(n,this.array)),n}setW(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),s=Xn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),i=Xn(i,this.array),s=Xn(s,this.array),a=Xn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==W0&&(t.usage=this.usage),t}};var Vc=class extends yn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Gc=class extends yn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var un=class extends yn{constructor(t,n,i){super(new Float32Array(t),n,i)}},SR=0,Ei=new Le,I0=new Ln,qo=new N,ri=new Ca,Uc=new Ca,cn=new N,li=class e extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SR++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yv(t)?Gc:Vc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Kt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,n,i){return Ei.makeTranslation(t,n,i),this.applyMatrix4(Ei),this}scale(t,n,i){return Ei.makeScale(t,n,i),this.applyMatrix4(Ei),this}lookAt(t){return I0.lookAt(t),I0.updateMatrix(),this.applyMatrix4(I0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qo).negate(),this.translate(qo.x,qo.y,qo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new un(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ri.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Uc.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(ri.min,Uc.min),ri.expandByPoint(cn),cn.addVectors(ri.max,Uc.max),ri.expandByPoint(cn)):(ri.expandByPoint(Uc.min),ri.expandByPoint(Uc.max))}ri.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)cn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(cn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)cn.fromBufferAttribute(o,c),l&&(qo.fromBufferAttribute(t,c),cn.add(qo)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new N,l[U]=new N;let c=new N,u=new N,d=new N,h=new gt,p=new gt,g=new gt,x=new N,m=new N;function f(U,E,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(a,U),p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,S),u.sub(c),d.sub(c),p.sub(h),g.sub(h);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),o[U].add(x),o[E].add(x),o[S].add(x),l[U].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let U=0,E=v.length;U<E;++U){let S=v[U],C=S.start,z=S.count;for(let G=C,W=C+z;G<W;G+=3)f(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let _=new N,y=new N,A=new N,R=new N;function w(U){A.fromBufferAttribute(s,U),R.copy(A);let E=o[U];_.copy(E),_.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(R,E);let C=y.dot(l[U])<0?-1:1;r.setXYZW(U,_.x,_.y,_.z,C)}for(let U=0,E=v.length;U<E;++U){let S=v[U],C=S.start,z=S.count;for(let G=C,W=C+z;G<W;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new N,a=new N,r=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)cn.fromBufferAttribute(t,n),cn.normalize(),t.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new yn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],d=a[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},C1=new Le,fr=new Hc,gf=new jo,D1=new N,vf=new N,_f=new N,yf=new N,P0=new N,xf=new N,U1=new N,Sf=new N,ke=class extends Ln{constructor(t=new li,n=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){xf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(P0.fromBufferAttribute(d,t),r?xf.addScaledVector(P0,u):xf.addScaledVector(P0.sub(n),u))}n.add(xf)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gf.copy(i.boundingSphere),gf.applyMatrix4(a),fr.copy(t.ray).recast(t.near),!(gf.containsPoint(fr.origin)===!1&&(fr.intersectSphere(gf,D1)===null||fr.origin.distanceToSquared(D1)>(t.far-t.near)**2))&&(C1.copy(a).invert(),fr.copy(t.ray).applyMatrix4(C1),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,fr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],f=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){let R=o.getX(y),w=o.getX(y+1),U=o.getX(y+2);s=Mf(this,f,t,i,c,u,d,R,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=Mf(this,r,t,i,c,u,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],f=r[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){let R=y,w=y+1,U=y+2;s=Mf(this,f,t,i,c,u,d,R,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=m,_=m+1,y=m+2;s=Mf(this,r,t,i,c,u,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function MR(e,t,n,i,s,a,r,o){let l;if(t.side===On?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Bs,o),l===null)return null;Sf.copy(o),Sf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Sf);return c<n.near||c>n.far?null:{distance:c,point:Sf.clone(),object:e}}function Mf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,vf),e.getVertexPosition(l,_f),e.getVertexPosition(c,yf);let u=MR(e,t,n,i,vf,_f,yf,U1);if(u){let d=new N;wa.getBarycoord(U1,vf,_f,yf,d),s&&(u.uv=wa.getInterpolatedAttribute(s,o,l,c,d,new gt)),a&&(u.uv1=wa.getInterpolatedAttribute(a,o,l,c,d,new gt)),r&&(u.normal=wa.getInterpolatedAttribute(r,o,l,c,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new N,materialIndex:0};wa.getNormal(vf,_f,yf,h.normal),u.face=h,u.barycoord=d}return u}var tl=class e extends li{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(d,2));function g(x,m,f,v,_,y,A,R,w,U,E){let S=y/w,C=A/U,z=y/2,G=A/2,W=R/2,Y=w+1,q=U+1,it=0,k=0,ot=new N;for(let St=0;St<q;St++){let Tt=St*C-G;for(let Xt=0;Xt<Y;Xt++){let Yt=Xt*S-z;ot[x]=Yt*v,ot[m]=Tt*_,ot[f]=W,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[f]=R>0?1:-1,u.push(ot.x,ot.y,ot.z),d.push(Xt/w),d.push(1-St/U),it+=1}}for(let St=0;St<U;St++)for(let Tt=0;Tt<w;Tt++){let Xt=h+Tt+Y*St,Yt=h+Tt+Y*(St+1),re=h+(Tt+1)+Y*(St+1),ne=h+(Tt+1)+Y*St;l.push(Xt,Yt,ne),l.push(Yt,re,ne),k+=6}o.addGroup(p,k,E),p+=k,h+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ar(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function An(e){let t={};for(let n=0;n<e.length;n++){let i=Ar(e[n]);for(let s in i)t[s]=i[s]}return t}function bR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function xv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Ub={clone:Ar,merge:An},ER=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zi=class extends Da{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ER,this.fragmentShader=TR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=bR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},kc=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Aa=new N,N1=new gt,L1=new gt,Tn=class extends kc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(m0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(m0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z),Aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z)}getViewSize(t,n){return this.getViewBounds(t,N1,L1),n.subVectors(L1,N1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(m0*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Wo=-90,Yo=1,zf=class extends Ln{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(Wo,Yo,t,n);s.layers=this.layers,this.add(s);let a=new Tn(Wo,Yo,t,n);a.layers=this.layers,this.add(a);let r=new Tn(Wo,Yo,t,n);r.layers=this.layers,this.add(r);let o=new Tn(Wo,Yo,t,n);o.layers=this.layers,this.add(o);let l=new Tn(Wo,Yo,t,n);l.layers=this.layers,this.add(l);let c=new Tn(Wo,Yo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Xc=class extends Nn{constructor(t=[],n=Er,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bf=class extends hs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Xc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tl(5,5,5),a=new zi({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:Hs});a.uniforms.tEquirect.value=n;let r=new ke(s,a),o=n.minFilter;return n.minFilter===ds&&(n.minFilter=oi),new zf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},ls=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},AR={type:"move"},el=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ls;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var nl=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var qc=class extends Nn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=qn,u=qn,d,h){super(null,r,o,l,c,u,s,a,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var z0=new N,wR=new N,RR=new Kt,rs=class{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=z0.subVectors(i,n).cross(wR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(z0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||RR.getNormalMatrix(t),s=this.coplanarPoint(z0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},dr=new jo,CR=new gt(.5,.5),bf=new N,il=class{constructor(t=new rs,n=new rs,i=new rs,s=new rs,a=new rs,r=new rs){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ii,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],h=a[6],p=a[7],g=a[8],x=a[9],m=a[10],f=a[11],v=a[12],_=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-u,f-g,A-v).normalize(),s[1].setComponents(c+r,p+u,f+g,A+v).normalize(),s[2].setComponents(c+o,p+d,f+x,A+_).normalize(),s[3].setComponents(c-o,p-d,f-x,A-_).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,f-m,A-y).normalize();else if(s[4].setComponents(c-l,p-h,f-m,A-y).normalize(),n===Ii)s[5].setComponents(c+l,p+h,f+m,A+y).normalize();else if(n===zc)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){dr.center.set(0,0,0);let n=CR.distanceTo(t.center);return dr.radius=.7071067811865476+n,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(bf.x=s.normal.x>0?t.max.x:t.min.x,bf.y=s.normal.y>0?t.max.y:t.min.y,bf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yr=class extends Nn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wc=class extends Nn{constructor(t,n,i=Ia,s,a,r,o=qn,l=qn,c,u=Jo,d=1){if(u!==Jo&&u!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Yc=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let u=i[s],h=i[s+1]-u,p=(r-u)/h;return(s+p)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new gt:new N);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new N,s=[],a=[],r=[],o=new N,l=new Le;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new N)}a[0]=new N,r[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ie(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(n===!0){let p=Math.acos(ie(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},sl=class extends ci{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new gt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ff=class extends sl{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Sv(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,d){let h=(r-a)/c-(o-a)/(c+u)+(o-r)/u,p=(o-r)/u-(l-r)/(u+d)+(l-o)/d;h*=u,p*=u,s(r,o,h,p)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var Ef=new N,B0=new Sv,F0=new Sv,H0=new Sv,al=class extends ci{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new N){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(Ef.subVectors(s[0],s[1]).add(s[0]),c=Ef);let d=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(Ef.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=Ef),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),B0.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,m),F0.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,m),H0.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(B0.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),F0.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),H0.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(B0.calc(l),F0.calc(l),H0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function O1(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function DR(e,t){let n=1-e;return n*n*t}function UR(e,t){return 2*(1-e)*e*t}function NR(e,t){return e*e*t}function Lc(e,t,n,i){return DR(e,t)+UR(e,n)+NR(e,i)}function LR(e,t){let n=1-e;return n*n*n*t}function OR(e,t){let n=1-e;return 3*n*n*e*t}function IR(e,t){return 3*(1-e)*e*e*t}function PR(e,t){return e*e*e*t}function Oc(e,t,n,i,s){return LR(e,t)+OR(e,n)+IR(e,i)+PR(e,s)}var Zc=class extends ci{constructor(t=new gt,n=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new gt){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Oc(t,s.x,a.x,r.x,o.x),Oc(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hf=class extends ci{constructor(t=new N,n=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new N){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(Oc(t,s.x,a.x,r.x,o.x),Oc(t,s.y,a.y,r.y,o.y),Oc(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jc=class extends ci{constructor(t=new gt,n=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new gt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new gt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vf=class extends ci{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kc=class extends ci{constructor(t=new gt,n=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new gt){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Lc(t,s.x,a.x,r.x),Lc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gf=class extends ci{constructor(t=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new N){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(Lc(t,s.x,a.x,r.x),Lc(t,s.y,a.y,r.y),Lc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qc=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new gt){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(O1(o,l.x,c.x,u.x,d.x),O1(o,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new gt().fromArray(s))}return this}},Y0=Object.freeze({__proto__:null,ArcCurve:Ff,CatmullRomCurve3:al,CubicBezierCurve:Zc,CubicBezierCurve3:Hf,EllipseCurve:sl,LineCurve:Jc,LineCurve3:Vf,QuadraticBezierCurve:Kc,QuadraticBezierCurve3:Gf,SplineCurve:Qc}),kf=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Y0[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new Y0[s.type]().fromJSON(s))}return this}},xr=class extends kf{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new Jc(this.currentPoint.clone(),new gt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let a=new Kc(this.currentPoint.clone(),new gt(t,n),new gt(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,a,r){let o=new Zc(this.currentPoint.clone(),new gt(t,n),new gt(i,s),new gt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new Qc(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,s,a,r),this}absarc(t,n,i,s,a,r){return this.absellipse(t,n,i,i,s,a,r),this}ellipse(t,n,i,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,n+u,i,s,a,r,o,l),this}absellipse(t,n,i,s,a,r,o,l){let c=new sl(t,n,i,s,a,r,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ua=class extends xr{constructor(t){super(t),this.uuid=ml(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new xr().fromJSON(s))}return this}};function zR(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,a=Nb(e,0,s,n,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=GR(e,t,a,n)),e.length>80*n){o=1/0,l=1/0;let u=-1/0,d=-1/0;for(let h=n;h<s;h+=n){let p=e[h],g=e[h+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return jc(a,r,n,o,l,c,0),r}function Nb(e,t,n,i,s){let a;if(s===$R(e,t,n,i)>0)for(let r=t;r<n;r+=i)a=I1(r/i|0,e[r],e[r+1],a);else for(let r=n-i;r>=t;r-=i)a=I1(r/i|0,e[r],e[r+1],a);return a&&rl(a,a.next)&&(tu(a),a=a.next),a}function Sr(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(rl(n,n.next)||Be(n.prev,n,n.next)===0)){if(tu(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function jc(e,t,n,i,s,a,r){if(!e)return;!r&&a&&YR(e,i,s,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(a?FR(e,i,s,a):BR(e)){t.push(l.i,e.i,c.i),tu(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=HR(Sr(e),t),jc(e,t,n,i,s,a,2)):r===2&&VR(e,t,n,i,s,a):jc(Sr(e),t,n,i,s,a,1);break}}}function BR(e){let t=e.prev,n=e,i=e.next;if(Be(t,n,i)>=0)return!1;let s=t.x,a=n.x,r=i.x,o=t.y,l=n.y,c=i.y,u=Math.min(s,a,r),d=Math.min(o,l,c),h=Math.max(s,a,r),p=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&Nc(s,o,a,l,r,c,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function FR(e,t,n,i){let s=e.prev,a=e,r=e.next;if(Be(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,d=a.y,h=r.y,p=Math.min(o,l,c),g=Math.min(u,d,h),x=Math.max(o,l,c),m=Math.max(u,d,h),f=Z0(p,g,t,n,i),v=Z0(x,m,t,n,i),_=e.prevZ,y=e.nextZ;for(;_&&_.z>=f&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Nc(o,u,l,d,c,h,_.x,_.y)&&Be(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Nc(o,u,l,d,c,h,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Nc(o,u,l,d,c,h,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Nc(o,u,l,d,c,h,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function HR(e,t){let n=e;do{let i=n.prev,s=n.next.next;!rl(i,s)&&Ob(i,n,n.next,s)&&$c(i,s)&&$c(s,i)&&(t.push(i.i,n.i,s.i),tu(n),tu(n.next),n=e=s),n=n.next}while(n!==e);return Sr(n)}function VR(e,t,n,i,s,a){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&KR(r,o)){let l=Ib(r,o);r=Sr(r,r.next),l=Sr(l,l.next),jc(r,t,n,i,s,a,0),jc(l,t,n,i,s,a,0);return}o=o.next}r=r.next}while(r!==e)}function GR(e,t,n,i){let s=[];for(let a=0,r=t.length;a<r;a++){let o=t[a]*i,l=a<r-1?t[a+1]*i:e.length,c=Nb(e,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(JR(c))}s.sort(kR);for(let a=0;a<s.length;a++)n=XR(s[a],n);return n}function kR(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}return n}function XR(e,t){let n=qR(e,t);if(!n)return t;let i=Ib(n,e);return Sr(i,i.next),Sr(n,n.next)}function qR(e,t){let n=t,i=e.x,s=e.y,a=-1/0,r;if(rl(e,n))return n;do{if(rl(e,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>a&&(a=d,r=n.x<n.next.x?n:n.next,d===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Lb(s<c?i:a,s,l,c,s<c?a:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);$c(n,e)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&WR(r,n)))&&(r=n,u=d)}n=n.next}while(n!==o);return r}function WR(e,t){return Be(e.prev,e,t.prev)<0&&Be(t.next,e,e.next)<0}function YR(e,t,n,i){let s=e;do s.z===0&&(s.z=Z0(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,ZR(s)}function ZR(e){let t,n=1;do{let i=e,s;e=null;let a=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:e=s,s.prevZ=a,a=s;i=r}a.nextZ=null,n*=2}while(t>1);return e}function Z0(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function JR(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Lb(e,t,n,i,s,a,r,o){return(s-r)*(t-o)>=(e-r)*(a-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(a-o)>=(s-r)*(i-o)}function Nc(e,t,n,i,s,a,r,o){return!(e===r&&t===o)&&Lb(e,t,n,i,s,a,r,o)}function KR(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!QR(e,t)&&($c(e,t)&&$c(t,e)&&jR(e,t)&&(Be(e.prev,e,t.prev)||Be(e,t.prev,t))||rl(e,t)&&Be(e.prev,e,e.next)>0&&Be(t.prev,t,t.next)>0)}function Be(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function rl(e,t){return e.x===t.x&&e.y===t.y}function Ob(e,t,n,i){let s=Af(Be(e,t,n)),a=Af(Be(e,t,i)),r=Af(Be(n,i,e)),o=Af(Be(n,i,t));return!!(s!==a&&r!==o||s===0&&Tf(e,n,t)||a===0&&Tf(e,i,t)||r===0&&Tf(n,e,i)||o===0&&Tf(n,t,i))}function Tf(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Af(e){return e>0?1:e<0?-1:0}function QR(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ob(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function $c(e,t){return Be(e.prev,e,e.next)<0?Be(e,t,e.next)>=0&&Be(e,e.prev,t)>=0:Be(e,t,e.prev)<0||Be(e,e.next,t)<0}function jR(e,t){let n=e,i=!1,s=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&s<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function Ib(e,t){let n=J0(e.i,e.x,e.y),i=J0(t.i,t.x,t.y),s=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,a.next=i,i.prev=a,i}function I1(e,t,n,i){let s=J0(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function tu(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function J0(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $R(e,t,n,i){let s=0;for(let a=t,r=n-i;a<n;a+=i)s+=(e[r]-e[a])*(e[a+1]+e[r+1]),r=a;return s}var K0=class{static triangulate(t,n,i=2){return zR(t,n,i)}},cs=class e{static area(t){let n=t.length,i=0;for(let s=n-1,a=0;a<n;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],a=[];P1(t),z1(i,t);let r=t.length;n.forEach(P1);for(let l=0;l<n.length;l++)s.push(r),r+=n[l].length,z1(i,n[l]);let o=K0.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function P1(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function z1(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ol=class e extends li{constructor(t=new Ua([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new un(s,3)),this.setAttribute("uv",new un(a,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,f=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:tC,_,y=!1,A,R,w,U;f&&(_=f.getSpacedPoints(u),y=!0,h=!1,A=f.computeFrenetFrames(u,!1),R=new N,w=new N,U=new N),h||(m=0,p=0,g=0,x=0);let E=o.extractPoints(c),S=E.shape,C=E.holes;if(!cs.isClockWise(S)){S=S.reverse();for(let et=0,j=C.length;et<j;et++){let Z=C[et];cs.isClockWise(Z)&&(C[et]=Z.reverse())}}function G(et){let Z=10000000000000001e-36,J=et[0];for(let dt=1;dt<=et.length;dt++){let st=dt%et.length,ft=et[st],Gt=ft.x-J.x,Ft=ft.y-J.y,T=Gt*Gt+Ft*Ft,M=Math.max(Math.abs(ft.x),Math.abs(ft.y),Math.abs(J.x),Math.abs(J.y)),P=Z*M*M;if(T<=P){et.splice(st,1),dt--;continue}J=ft}}G(S),C.forEach(G);let W=C.length,Y=S;for(let et=0;et<W;et++){let j=C[et];S=S.concat(j)}function q(et,j,Z){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(j,Z)}let it=S.length;function k(et,j,Z){let J,dt,st,ft=et.x-j.x,Gt=et.y-j.y,Ft=Z.x-et.x,T=Z.y-et.y,M=ft*ft+Gt*Gt,P=ft*T-Gt*Ft;if(Math.abs(P)>Number.EPSILON){let H=Math.sqrt(M),tt=Math.sqrt(Ft*Ft+T*T),X=j.x-Gt/H,at=j.y+ft/H,ht=Z.x-T/tt,Rt=Z.y+Ft/tt,Ct=((ht-X)*T-(Rt-at)*Ft)/(ft*T-Gt*Ft);J=X+ft*Ct-et.x,dt=at+Gt*Ct-et.y;let lt=J*J+dt*dt;if(lt<=2)return new gt(J,dt);st=Math.sqrt(lt/2)}else{let H=!1;ft>Number.EPSILON?Ft>Number.EPSILON&&(H=!0):ft<-Number.EPSILON?Ft<-Number.EPSILON&&(H=!0):Math.sign(Gt)===Math.sign(T)&&(H=!0),H?(J=-Gt,dt=ft,st=Math.sqrt(M)):(J=ft,dt=Gt,st=Math.sqrt(M/2))}return new gt(J/st,dt/st)}let ot=[];for(let et=0,j=Y.length,Z=j-1,J=et+1;et<j;et++,Z++,J++)Z===j&&(Z=0),J===j&&(J=0),ot[et]=k(Y[et],Y[Z],Y[J]);let St=[],Tt,Xt=ot.concat();for(let et=0,j=W;et<j;et++){let Z=C[et];Tt=[];for(let J=0,dt=Z.length,st=dt-1,ft=J+1;J<dt;J++,st++,ft++)st===dt&&(st=0),ft===dt&&(ft=0),Tt[J]=k(Z[J],Z[st],Z[ft]);St.push(Tt),Xt=Xt.concat(Tt)}let Yt;if(m===0)Yt=cs.triangulateShape(Y,C);else{let et=[],j=[];for(let Z=0;Z<m;Z++){let J=Z/m,dt=p*Math.cos(J*Math.PI/2),st=g*Math.sin(J*Math.PI/2)+x;for(let ft=0,Gt=Y.length;ft<Gt;ft++){let Ft=q(Y[ft],ot[ft],st);It(Ft.x,Ft.y,-dt),J===0&&et.push(Ft)}for(let ft=0,Gt=W;ft<Gt;ft++){let Ft=C[ft];Tt=St[ft];let T=[];for(let M=0,P=Ft.length;M<P;M++){let H=q(Ft[M],Tt[M],st);It(H.x,H.y,-dt),J===0&&T.push(H)}J===0&&j.push(T)}}Yt=cs.triangulateShape(et,j)}let re=Yt.length,ne=g+x;for(let et=0;et<it;et++){let j=h?q(S[et],Xt[et],ne):S[et];y?(w.copy(A.normals[0]).multiplyScalar(j.x),R.copy(A.binormals[0]).multiplyScalar(j.y),U.copy(_[0]).add(w).add(R),It(U.x,U.y,U.z)):It(j.x,j.y,0)}for(let et=1;et<=u;et++)for(let j=0;j<it;j++){let Z=h?q(S[j],Xt[j],ne):S[j];y?(w.copy(A.normals[et]).multiplyScalar(Z.x),R.copy(A.binormals[et]).multiplyScalar(Z.y),U.copy(_[et]).add(w).add(R),It(U.x,U.y,U.z)):It(Z.x,Z.y,d/u*et)}for(let et=m-1;et>=0;et--){let j=et/m,Z=p*Math.cos(j*Math.PI/2),J=g*Math.sin(j*Math.PI/2)+x;for(let dt=0,st=Y.length;dt<st;dt++){let ft=q(Y[dt],ot[dt],J);It(ft.x,ft.y,d+Z)}for(let dt=0,st=C.length;dt<st;dt++){let ft=C[dt];Tt=St[dt];for(let Gt=0,Ft=ft.length;Gt<Ft;Gt++){let T=q(ft[Gt],Tt[Gt],J);y?It(T.x,T.y+_[u-1].y,_[u-1].x+Z):It(T.x,T.y,d+Z)}}}Q(),nt();function Q(){let et=s.length/3;if(h){let j=0,Z=it*j;for(let J=0;J<re;J++){let dt=Yt[J];wt(dt[2]+Z,dt[1]+Z,dt[0]+Z)}j=u+m*2,Z=it*j;for(let J=0;J<re;J++){let dt=Yt[J];wt(dt[0]+Z,dt[1]+Z,dt[2]+Z)}}else{for(let j=0;j<re;j++){let Z=Yt[j];wt(Z[2],Z[1],Z[0])}for(let j=0;j<re;j++){let Z=Yt[j];wt(Z[0]+it*u,Z[1]+it*u,Z[2]+it*u)}}i.addGroup(et,s.length/3-et,0)}function nt(){let et=s.length/3,j=0;Mt(Y,j),j+=Y.length;for(let Z=0,J=C.length;Z<J;Z++){let dt=C[Z];Mt(dt,j),j+=dt.length}i.addGroup(et,s.length/3-et,1)}function Mt(et,j){let Z=et.length;for(;--Z>=0;){let J=Z,dt=Z-1;dt<0&&(dt=et.length-1);for(let st=0,ft=u+m*2;st<ft;st++){let Gt=it*st,Ft=it*(st+1),T=j+J+Gt,M=j+dt+Gt,P=j+dt+Ft,H=j+J+Ft;jt(T,M,P,H)}}}function It(et,j,Z){l.push(et),l.push(j),l.push(Z)}function wt(et,j,Z){ce(et),ce(j),ce(Z);let J=s.length/3,dt=v.generateTopUV(i,s,J-3,J-2,J-1);D(dt[0]),D(dt[1]),D(dt[2])}function jt(et,j,Z,J){ce(et),ce(j),ce(J),ce(j),ce(Z),ce(J);let dt=s.length/3,st=v.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);D(st[0]),D(st[1]),D(st[3]),D(st[1]),D(st[2]),D(st[3])}function ce(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function D(et){a.push(et.x),a.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return eC(n,i,t)}static fromJSON(t,n){let i=[];for(let a=0,r=t.shapes.length;a<r;a++){let o=n[t.shapes[a]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Y0[s.type]().fromJSON(s)),new e(i,t.options)}},tC={generateTopUV:function(e,t,n,i,s){let a=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new gt(a,r),new gt(o,l),new gt(c,u)]},generateSideWallUV:function(e,t,n,i,s,a){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new gt(r,1-l),new gt(c,1-d),new gt(h,1-g),new gt(x,1-f)]:[new gt(o,1-l),new gt(u,1-d),new gt(p,1-g),new gt(m,1-f)]}};function eC(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let a=e[i];n.shapes.push(a.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Mr=class e extends li{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=n/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){let v=f*h-r;for(let _=0;_<c;_++){let y=_*d-a;g.push(y,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let _=v+c*f,y=v+c*(f+1),A=v+1+c*(f+1),R=v+1+c*f;p.push(_,y,R),p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var eu=class e extends li{constructor(t=new Ua([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new un(s,3)),this.setAttribute("normal",new un(a,3)),this.setAttribute("uv",new un(r,2));function c(u){let d=s.length/3,h=u.extractPoints(n),p=h.shape,g=h.holes;cs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let v=g[m];cs.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=cs.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let v=g[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){let v=p[m];s.push(v.x,v.y,0),a.push(0,0,1),r.push(v.x,v.y)}for(let m=0,f=x.length;m<f;m++){let v=x[m],_=v[0]+d,y=v[1]+d,A=v[2]+d;i.push(_,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return nC(n,t)}static fromJSON(t,n){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let r=n[t.shapes[s]];i.push(r)}return new e(i,t.curveSegments)}};function nC(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}var ll=class e extends li{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);let r=[],o=[],l=[],c=[],u=new N,d=new N,h=new N;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*a,m=p/i*Math.PI*2;d.x=(t+n*Math.cos(m))*Math.cos(x),d.y=(t+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;r.push(x,m,v),r.push(m,f,v)}this.setIndex(r),this.setAttribute("position",new un(o,3)),this.setAttribute("normal",new un(l,3)),this.setAttribute("uv",new un(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var cl=class extends Da{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gv,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Na=class extends cl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Xf=class extends Da{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qf=class extends Da{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wf(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function iC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var br=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wf=class extends br{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:G0,endingEnd:G0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case k0:a=t,o=2*n-i;break;case X0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case k0:r=t,l=2*i-n;break;case X0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,f=-h*m+2*h*x-h*g,v=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let A=0;A!==o;++A)a[A]=f*r[u+A]+v*r[c+A]+_*r[l+A]+y*r[d+A];return a}},Yf=class extends br{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*u;return a}},Zf=class extends br{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ui=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wf(n,this.TimeBufferType),this.values=wf(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:wf(t.times,Array),values:wf(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Zf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Ic:n=this.InterpolantFactoryMethodDiscrete;break;case Nf:n=this.InterpolantFactoryMethodLinear;break;case Rf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ic;case this.InterpolantFactoryMethodLinear:return Nf;case this.InterpolantFactoryMethodSmooth:return Rf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&iC(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Rf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let x=n[d+g];if(x!==n[h+g]||x!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Nf;var La=class extends ui{constructor(t,n,i){super(t,n,i)}};La.prototype.ValueTypeName="bool";La.prototype.ValueBufferType=Array;La.prototype.DefaultInterpolation=Ic;La.prototype.InterpolantFactoryMethodLinear=void 0;La.prototype.InterpolantFactoryMethodSmooth=void 0;var Jf=class extends ui{constructor(t,n,i,s){super(t,n,i,s)}};Jf.prototype.ValueTypeName="color";var Kf=class extends ui{constructor(t,n,i,s){super(t,n,i,s)}};Kf.prototype.ValueTypeName="number";var Qf=class extends br{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)Wn.slerpFlat(a,0,r,c-o,r,c,l);return a}},nu=class extends ui{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Qf(this.times,this.values,this.getValueSize(),t)}};nu.prototype.ValueTypeName="quaternion";nu.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends ui{constructor(t,n,i){super(t,n,i)}};Oa.prototype.ValueTypeName="string";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=Ic;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var jf=class extends ui{constructor(t,n,i,s){super(t,n,i,s)}};jf.prototype.ValueTypeName="vector";var $f=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Pb=new $f,td=class{constructor(t){this.manager=t!==void 0?t:Pb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};td.DEFAULT_MATERIAL_NAME="__DEFAULT";var ed=class extends Ln{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var V0=new Le,B1=new N,F1=new N,Q0=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;B1.setFromMatrixPosition(t.matrixWorld),n.position.copy(B1),F1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(F1),n.updateMatrixWorld(),V0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(V0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(V0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var iu=class extends kc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},j0=class extends Q0{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ul=class extends ed{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new j0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var nd=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Mv="\\[\\]\\.:\\/",sC=new RegExp("["+Mv+"]","g"),bv="[^"+Mv+"]",aC="[^"+Mv.replace("\\.","")+"]",rC=/((?:WC+[\/:])*)/.source.replace("WC",bv),oC=/(WCOD+)?/.source.replace("WCOD",aC),lC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bv),cC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bv),uC=new RegExp("^"+rC+oC+lC+cC+"$"),hC=["material","materials","bones","map"],$0=class{constructor(t,n,i){let s=i||Ne.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ne=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sC,"")}static parseTrackName(t){let n=uC.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);hC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=$0;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TN=new Float32Array(1);var H1=new Le,su=class{constructor(t,n,i=0,s=1/0){this.ray=new Hc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return H1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(H1),this}intersectObject(t,n=!0,i=[]){return tv(t,this,i,n),i.sort(V1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)tv(t[s],this,i,n);return i.sort(V1),i}};function V1(e,t){return e.distance-t.distance}function tv(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)tv(a[r],t,n,!0)}}function Ev(e,t,n,i){let s=fC(i);switch(n){case fv:return e*t;case pv:return e*t/s.components*s.byteLength;case vd:return e*t/s.components*s.byteLength;case mv:return e*t*2/s.components*s.byteLength;case _d:return e*t*2/s.components*s.byteLength;case dv:return e*t*3/s.components*s.byteLength;case Ti:return e*t*4/s.components*s.byteLength;case yd:return e*t*4/s.components*s.byteLength;case ou:case lu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case cu:case uu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sd:case bd:return Math.max(e,16)*Math.max(t,8)/4;case xd:case Md:return Math.max(e,8)*Math.max(t,8)/2;case Ed:case Td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ad:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case zd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Vd:case Gd:case kd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Xd:case qd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wd:case Yd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fC(e){switch(e){case Bi:case lv:return{byteLength:1,components:1};case hl:case cv:case fl:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case Ia:case pd:case ps:return{byteLength:4,components:1};case uv:case hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function rE(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function pC(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var mC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_C=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,EC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,BC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qC="gl_FragColor = linearToOutputTexel( gl_FragColor );",WC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$C=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Q2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,d3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:mC,alphahash_pars_fragment:gC,alphamap_fragment:vC,alphamap_pars_fragment:_C,alphatest_fragment:yC,alphatest_pars_fragment:xC,aomap_fragment:SC,aomap_pars_fragment:MC,batching_pars_vertex:bC,batching_vertex:EC,begin_vertex:TC,beginnormal_vertex:AC,bsdfs:wC,iridescence_fragment:RC,bumpmap_pars_fragment:CC,clipping_planes_fragment:DC,clipping_planes_pars_fragment:UC,clipping_planes_pars_vertex:NC,clipping_planes_vertex:LC,color_fragment:OC,color_pars_fragment:IC,color_pars_vertex:PC,color_vertex:zC,common:BC,cube_uv_reflection_fragment:FC,defaultnormal_vertex:HC,displacementmap_pars_vertex:VC,displacementmap_vertex:GC,emissivemap_fragment:kC,emissivemap_pars_fragment:XC,colorspace_fragment:qC,colorspace_pars_fragment:WC,envmap_fragment:YC,envmap_common_pars_fragment:ZC,envmap_pars_fragment:JC,envmap_pars_vertex:KC,envmap_physical_pars_fragment:o2,envmap_vertex:QC,fog_vertex:jC,fog_pars_vertex:$C,fog_fragment:t2,fog_pars_fragment:e2,gradientmap_pars_fragment:n2,lightmap_pars_fragment:i2,lights_lambert_fragment:s2,lights_lambert_pars_fragment:a2,lights_pars_begin:r2,lights_toon_fragment:l2,lights_toon_pars_fragment:c2,lights_phong_fragment:u2,lights_phong_pars_fragment:h2,lights_physical_fragment:f2,lights_physical_pars_fragment:d2,lights_fragment_begin:p2,lights_fragment_maps:m2,lights_fragment_end:g2,logdepthbuf_fragment:v2,logdepthbuf_pars_fragment:_2,logdepthbuf_pars_vertex:y2,logdepthbuf_vertex:x2,map_fragment:S2,map_pars_fragment:M2,map_particle_fragment:b2,map_particle_pars_fragment:E2,metalnessmap_fragment:T2,metalnessmap_pars_fragment:A2,morphinstance_vertex:w2,morphcolor_vertex:R2,morphnormal_vertex:C2,morphtarget_pars_vertex:D2,morphtarget_vertex:U2,normal_fragment_begin:N2,normal_fragment_maps:L2,normal_pars_fragment:O2,normal_pars_vertex:I2,normal_vertex:P2,normalmap_pars_fragment:z2,clearcoat_normal_fragment_begin:B2,clearcoat_normal_fragment_maps:F2,clearcoat_pars_fragment:H2,iridescence_pars_fragment:V2,opaque_fragment:G2,packing:k2,premultiplied_alpha_fragment:X2,project_vertex:q2,dithering_fragment:W2,dithering_pars_fragment:Y2,roughnessmap_fragment:Z2,roughnessmap_pars_fragment:J2,shadowmap_pars_fragment:K2,shadowmap_pars_vertex:Q2,shadowmap_vertex:j2,shadowmask_pars_fragment:$2,skinbase_vertex:t3,skinning_pars_vertex:e3,skinning_vertex:n3,skinnormal_vertex:i3,specularmap_fragment:s3,specularmap_pars_fragment:a3,tonemapping_fragment:r3,tonemapping_pars_fragment:o3,transmission_fragment:l3,transmission_pars_fragment:c3,uv_pars_fragment:u3,uv_pars_vertex:h3,uv_vertex:f3,worldpos_vertex:d3,background_vert:p3,background_frag:m3,backgroundCube_vert:g3,backgroundCube_frag:v3,cube_vert:_3,cube_frag:y3,depth_vert:x3,depth_frag:S3,distanceRGBA_vert:M3,distanceRGBA_frag:b3,equirect_vert:E3,equirect_frag:T3,linedashed_vert:A3,linedashed_frag:w3,meshbasic_vert:R3,meshbasic_frag:C3,meshlambert_vert:D3,meshlambert_frag:U3,meshmatcap_vert:N3,meshmatcap_frag:L3,meshnormal_vert:O3,meshnormal_frag:I3,meshphong_vert:P3,meshphong_frag:z3,meshphysical_vert:B3,meshphysical_frag:F3,meshtoon_vert:H3,meshtoon_frag:V3,points_vert:G3,points_frag:k3,shadow_vert:X3,shadow_frag:q3,sprite_vert:W3,sprite_frag:Y3},xt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ms={basic:{uniforms:An([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:An([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:An([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:An([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:An([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:An([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:An([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:An([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:An([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:An([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:An([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:An([xt.common,xt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:An([xt.lights,xt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ms.physical={uniforms:An([ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Zd={r:0,b:0,g:0},wr=new Pi,Z3=new Le;function J3(e,t,n,i,s,a,r){let o=new Qt(0),l=a===!0?0:1,c,u,d=null,h=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:t).get(y)),y}function x(_){let y=!1,A=g(_);A===null?f(o,l):A&&A.isColor&&(f(A,1),y=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===au)?(u===void 0&&(u=new ke(new tl(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Ar(ms.backgroundCube.uniforms),vertexShader:ms.backgroundCube.vertexShader,fragmentShader:ms.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),wr.copy(y.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Z3.makeRotationFromEuler(wr)),u.material.toneMapped=he.getTransfer(A.colorSpace)!==Se,(d!==A||h!==A.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ke(new Mr(2,2),new zi({name:"BackgroundMaterial",uniforms:Ar(ms.background.uniforms),vertexShader:ms.background.vertexShader,fragmentShader:ms.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=he.getTransfer(A.colorSpace)!==Se,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(Zd,xv(e)),i.buffers.color.setClear(Zd.r,Zd.g,Zd.b,y,r)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:x,addToRenderList:m,dispose:v}}function K3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(S,C,z,G,W){let Y=!1,q=d(G,z,C);a!==q&&(a=q,c(a.object)),Y=p(S,G,z,W),Y&&g(S,G,z,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,y(S,C,z,G),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function u(S){return e.deleteVertexArray(S)}function d(S,C,z){let G=z.wireframe===!0,W=i[S.id];W===void 0&&(W={},i[S.id]=W);let Y=W[C.id];Y===void 0&&(Y={},W[C.id]=Y);let q=Y[G];return q===void 0&&(q=h(l()),Y[G]=q),q}function h(S){let C=[],z=[],G=[];for(let W=0;W<n;W++)C[W]=0,z[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:G,object:S,attributes:{},index:null}}function p(S,C,z,G){let W=a.attributes,Y=C.attributes,q=0,it=z.getAttributes();for(let k in it)if(it[k].location>=0){let St=W[k],Tt=Y[k];if(Tt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(Tt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(Tt=S.instanceColor)),St===void 0||St.attribute!==Tt||Tt&&St.data!==Tt.data)return!0;q++}return a.attributesNum!==q||a.index!==G}function g(S,C,z,G){let W={},Y=C.attributes,q=0,it=z.getAttributes();for(let k in it)if(it[k].location>=0){let St=Y[k];St===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(St=S.instanceColor));let Tt={};Tt.attribute=St,St&&St.data&&(Tt.data=St.data),W[k]=Tt,q++}a.attributes=W,a.attributesNum=q,a.index=G}function x(){let S=a.newAttributes;for(let C=0,z=S.length;C<z;C++)S[C]=0}function m(S){f(S,0)}function f(S,C){let z=a.newAttributes,G=a.enabledAttributes,W=a.attributeDivisors;z[S]=1,G[S]===0&&(e.enableVertexAttribArray(S),G[S]=1),W[S]!==C&&(e.vertexAttribDivisor(S,C),W[S]=C)}function v(){let S=a.newAttributes,C=a.enabledAttributes;for(let z=0,G=C.length;z<G;z++)C[z]!==S[z]&&(e.disableVertexAttribArray(z),C[z]=0)}function _(S,C,z,G,W,Y,q){q===!0?e.vertexAttribIPointer(S,C,z,W,Y):e.vertexAttribPointer(S,C,z,G,W,Y)}function y(S,C,z,G){x();let W=G.attributes,Y=z.getAttributes(),q=C.defaultAttributeValues;for(let it in Y){let k=Y[it];if(k.location>=0){let ot=W[it];if(ot===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){let St=ot.normalized,Tt=ot.itemSize,Xt=t.get(ot);if(Xt===void 0)continue;let Yt=Xt.buffer,re=Xt.type,ne=Xt.bytesPerElement,Q=re===e.INT||re===e.UNSIGNED_INT||ot.gpuType===pd;if(ot.isInterleavedBufferAttribute){let nt=ot.data,Mt=nt.stride,It=ot.offset;if(nt.isInstancedInterleavedBuffer){for(let wt=0;wt<k.locationSize;wt++)f(k.location+wt,nt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let wt=0;wt<k.locationSize;wt++)m(k.location+wt);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let wt=0;wt<k.locationSize;wt++)_(k.location+wt,Tt/k.locationSize,re,St,Mt*ne,(It+Tt/k.locationSize*wt)*ne,Q)}else{if(ot.isInstancedBufferAttribute){for(let nt=0;nt<k.locationSize;nt++)f(k.location+nt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let nt=0;nt<k.locationSize;nt++)m(k.location+nt);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let nt=0;nt<k.locationSize;nt++)_(k.location+nt,Tt/k.locationSize,re,St,Tt*ne,Tt/k.locationSize*nt*ne,Q)}}else if(q!==void 0){let St=q[it];if(St!==void 0)switch(St.length){case 2:e.vertexAttrib2fv(k.location,St);break;case 3:e.vertexAttrib3fv(k.location,St);break;case 4:e.vertexAttrib4fv(k.location,St);break;default:e.vertexAttrib1fv(k.location,St)}}}}v()}function A(){U();for(let S in i){let C=i[S];for(let z in C){let G=C[z];for(let W in G)u(G[W].object),delete G[W];delete C[z]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;let C=i[S.id];for(let z in C){let G=C[z];for(let W in G)u(G[W].object),delete G[W];delete C[z]}delete i[S.id]}function w(S){for(let C in i){let z=i[C];if(z[S.id]===void 0)continue;let G=z[S.id];for(let W in G)u(G[W].object),delete G[W];delete z[S.id]}}function U(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Q3(e,t,n){let i;function s(c){i=c}function a(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,d){d!==0&&(e.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function j3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Ti&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let U=w===fl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Bi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ps&&!U)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:R}}function $3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new rs,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{let v=a?0:i,_=v*4,y=f.clippingState||null;l.value=y,y=u(g,h,_,p);for(let A=0;A!==_;++A)y[A]=n[A];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==x;++_,y+=4)r.copy(d[_]).applyMatrix4(v,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function tD(e){let t=new WeakMap;function n(r,o){return o===hd?r.mapping=Er:o===fd&&(r.mapping=Tr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===hd||o===fd)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Bf(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var vl=4,zb=[.125,.215,.35,.446,.526,.582],Dr=20,Tv=new iu,Bb=new Qt,Av=null,wv=0,Rv=0,Cv=!1,Cr=(1+Math.sqrt(5))/2,gl=1/Cr,Fb=[new N(-Cr,gl,0),new N(Cr,gl,0),new N(-gl,0,Cr),new N(gl,0,Cr),new N(0,Cr,-gl),new N(0,Cr,gl),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],eD=new N,yl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=eD}=a;Av=this._renderer.getRenderTarget(),wv=this._renderer.getActiveCubeFace(),Rv=this._renderer.getActiveMipmapLevel(),Cv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Av,wv,Rv),this._renderer.xr.enabled=Cv,t.scissorTest=!1,Jd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Er||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Av=this._renderer.getRenderTarget(),wv=this._renderer.getActiveCubeFace(),Rv=this._renderer.getActiveMipmapLevel(),Cv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:fl,format:Ti,colorSpace:vr,depthBuffer:!1},s=Hb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nD(a)),this._blurMaterial=iD(a,t,n)}return s}_compileMaterial(t){let n=new ke(this._lodPlanes[0],t);this._renderer.compile(n,Tv)}_sceneToCubeUV(t,n,i,s,a){let l=new Tn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Bb),d.toneMapping=Vs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new _r({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),m=new ke(new tl,x),f=!1,v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,f=!0):(x.color.copy(Bb),f=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[_],a.y,a.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[_],a.z)):(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[_]));let A=this._cubeSize;Jd(s,y*A,_>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Er||t.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new ke(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Jd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Tv)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Fb[(s-a-1)%Fb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ke(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),x=a/g,m=isFinite(a)?1+Math.floor(u*x):Dr;m>Dr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);let f=[],v=0;for(let w=0;w<Dr;++w){let U=w/x,E=Math.exp(-U*U/2);f.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;let y=this._sizeLods[s],A=3*y*(s>_-vl?s-_+vl:0),R=4*(this._cubeSize-y);Jd(n,A,R,3*y,2*y),l.setRenderTarget(n),l.render(d,Tv)}};function nD(e){let t=[],n=[],i=[],s=e,a=e-vl+1+zb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-vl?l=zb[r-e+vl-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,U=R>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];v.set(E,x*g*R),_.set(h,m*g*R);let S=[R,R,R,R,R,R];y.set(S,f*g*R)}let A=new li;A.setAttribute("position",new yn(v,x)),A.setAttribute("uv",new yn(_,m)),A.setAttribute("faceIndex",new yn(y,f)),t.push(A),s>vl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Hb(e,t,n){let i=new hs(e,t,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function iD(e,t,n){let i=new Float32Array(Dr),s=new N(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function Vb(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function Gb(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function Fv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sD(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===hd||l===fd,u=l===Er||l===Tr;if(c||u){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new yl(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new yl(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function aD(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ko("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rD(e,t,n,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){let A=v[_+0],R=v[_+1],w=v[_+2];h.push(A,R,R,w,w,A)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let A=_+0,R=_+1,w=_+2;h.push(A,R,R,w,w,A)}}else return;let m=new(yv(h)?Gc:Vc)(h,1);m.version=x;let f=a.get(d);f&&t.remove(f),a.set(d,m)}function u(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function oD(e,t,n){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,a,h*r),n.update(p,i,1)}function c(h,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,h*r,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function d(h,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/r,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,x,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*x[v];n.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function lD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function cD(e,t,n){let i=new WeakMap,s=new Fe;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*A*4*d),w=new Fc(R,y,A,d);w.type=ps,w.needsUpdate=!0;let U=_*4;for(let S=0;S<d;S++){let C=m[S],z=f[S],G=v[S],W=y*A*4*S;for(let Y=0;Y<C.count;Y++){let q=Y*U;p===!0&&(s.fromBufferAttribute(C,Y),R[W+q+0]=s.x,R[W+q+1]=s.y,R[W+q+2]=s.z,R[W+q+3]=0),g===!0&&(s.fromBufferAttribute(z,Y),R[W+q+4]=s.x,R[W+q+5]=s.y,R[W+q+6]=s.z,R[W+q+7]=0),x===!0&&(s.fromBufferAttribute(G,Y),R[W+q+8]=s.x,R[W+q+9]=s.y,R[W+q+10]=s.z,R[W+q+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new gt(y,A)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function uD(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var oE=new Nn,kb=new Wc(1,1),lE=new Fc,cE=new Pf,uE=new Xc,Xb=[],qb=[],Wb=new Float32Array(16),Yb=new Float32Array(9),Zb=new Float32Array(4);function xl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Xb[s];if(a===void 0&&(a=new Float32Array(s),Xb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function tn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function en(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function jd(e,t){let n=qb[t];n===void 0&&(n=new Int32Array(t),qb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function hD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function fD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2fv(this.addr,t),en(n,t)}}function dD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tn(n,t))return;e.uniform3fv(this.addr,t),en(n,t)}}function pD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4fv(this.addr,t),en(n,t)}}function mD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;Zb.set(i),e.uniformMatrix2fv(this.addr,!1,Zb),en(n,i)}}function gD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;Yb.set(i),e.uniformMatrix3fv(this.addr,!1,Yb),en(n,i)}}function vD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;Wb.set(i),e.uniformMatrix4fv(this.addr,!1,Wb),en(n,i)}}function _D(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function yD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2iv(this.addr,t),en(n,t)}}function xD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3iv(this.addr,t),en(n,t)}}function SD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4iv(this.addr,t),en(n,t)}}function MD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2uiv(this.addr,t),en(n,t)}}function ED(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3uiv(this.addr,t),en(n,t)}}function TD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4uiv(this.addr,t),en(n,t)}}function AD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(kb.compareFunction=vv,a=kb):a=oE,n.setTexture2D(t||a,s)}function wD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||cE,s)}function RD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||uE,s)}function CD(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||lE,s)}function DD(e){switch(e){case 5126:return hD;case 35664:return fD;case 35665:return dD;case 35666:return pD;case 35674:return mD;case 35675:return gD;case 35676:return vD;case 5124:case 35670:return _D;case 35667:case 35671:return yD;case 35668:case 35672:return xD;case 35669:case 35673:return SD;case 5125:return MD;case 36294:return bD;case 36295:return ED;case 36296:return TD;case 35678:case 36198:case 36298:case 36306:case 35682:return AD;case 35679:case 36299:case 36307:return wD;case 35680:case 36300:case 36308:case 36293:return RD;case 36289:case 36303:case 36311:case 36292:return CD}}function UD(e,t){e.uniform1fv(this.addr,t)}function ND(e,t){let n=xl(t,this.size,2);e.uniform2fv(this.addr,n)}function LD(e,t){let n=xl(t,this.size,3);e.uniform3fv(this.addr,n)}function OD(e,t){let n=xl(t,this.size,4);e.uniform4fv(this.addr,n)}function ID(e,t){let n=xl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function PD(e,t){let n=xl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zD(e,t){let n=xl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function BD(e,t){e.uniform1iv(this.addr,t)}function FD(e,t){e.uniform2iv(this.addr,t)}function HD(e,t){e.uniform3iv(this.addr,t)}function VD(e,t){e.uniform4iv(this.addr,t)}function GD(e,t){e.uniform1uiv(this.addr,t)}function kD(e,t){e.uniform2uiv(this.addr,t)}function XD(e,t){e.uniform3uiv(this.addr,t)}function qD(e,t){e.uniform4uiv(this.addr,t)}function WD(e,t,n){let i=this.cache,s=t.length,a=jd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||oE,a[r])}function YD(e,t,n){let i=this.cache,s=t.length,a=jd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||cE,a[r])}function ZD(e,t,n){let i=this.cache,s=t.length,a=jd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||uE,a[r])}function JD(e,t,n){let i=this.cache,s=t.length,a=jd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||lE,a[r])}function KD(e){switch(e){case 5126:return UD;case 35664:return ND;case 35665:return LD;case 35666:return OD;case 35674:return ID;case 35675:return PD;case 35676:return zD;case 5124:case 35670:return BD;case 35667:case 35671:return FD;case 35668:case 35672:return HD;case 35669:case 35673:return VD;case 5125:return GD;case 36294:return kD;case 36295:return XD;case 36296:return qD;case 35678:case 36198:case 36298:case 36306:case 35682:return WD;case 35679:case 36299:case 36307:return YD;case 35680:case 36300:case 36308:case 36293:return ZD;case 36289:case 36303:case 36311:case 36292:return JD}}var Uv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=DD(n.type)}},Nv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KD(n.type)}},Lv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Dv=/(\w+)(\])?(\[|\.)?/g;function Jb(e,t){e.seq.push(t),e.map[t.id]=t}function QD(e,t,n){let i=e.name,s=i.length;for(Dv.lastIndex=0;;){let a=Dv.exec(i),r=Dv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Jb(n,c===void 0?new Uv(o,e,t):new Nv(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Lv(o),Jb(n,d)),n=d}}}var _l=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);QD(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Kb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var jD=37297,$D=0;function tU(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Qb=new Kt;function eU(e){he._getMatrix(Qb,he.workingColorSpace,e);let t=`mat3( ${Qb.elements.map(n=>n.toFixed(4))} )`;switch(he.getTransfer(e)){case Pc:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function jb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+tU(e.getShaderSource(t),o)}else return a}function nU(e,t){let n=eU(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function iU(e,t){let n;switch(t){case hb:n="Linear";break;case fb:n="Reinhard";break;case db:n="Cineon";break;case pb:n="ACESFilmic";break;case gb:n="AgX";break;case ud:n="Neutral";break;case mb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Kd=new N;function sU(){he.getLuminanceCoefficients(Kd);let e=Kd.x.toFixed(4),t=Kd.y.toFixed(4),n=Kd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aU(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hu).join(`
`)}function rU(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function oU(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function hu(e){return e!==""}function $b(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tE(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ov(e){return e.replace(lU,uU)}var cU=new Map;function uU(e,t){let n=$t[t];if(n===void 0){let i=cU.get(t);if(i!==void 0)n=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ov(n)}var hU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eE(e){return e.replace(hU,fU)}function fU(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function nE(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dU(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===nv?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===X1?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===fs&&(t="SHADOWMAP_TYPE_VSM"),t}function pU(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Er:case Tr:t="ENVMAP_TYPE_CUBE";break;case au:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mU(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Tr:t="ENVMAP_MODE_REFRACTION";break}return t}function gU(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case rv:t="ENVMAP_BLENDING_MULTIPLY";break;case cb:t="ENVMAP_BLENDING_MIX";break;case ub:t="ENVMAP_BLENDING_ADD";break}return t}function vU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function _U(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=dU(n),c=pU(n),u=mU(n),d=gU(n),h=vU(n),p=aU(n),g=rU(a),x=s.createProgram(),m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hu).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hu).join(`
`),f.length>0&&(f+=`
`)):(m=[nE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hu).join(`
`),f=[nE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vs?"#define TONE_MAPPING":"",n.toneMapping!==Vs?$t.tonemapping_pars_fragment:"",n.toneMapping!==Vs?iU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,nU("linearToOutputTexel",n.outputColorSpace),sU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hu).join(`
`)),r=Ov(r),r=$b(r,n),r=tE(r,n),o=Ov(o),o=$b(o,n),o=tE(o,n),r=eE(r),o=eE(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=v+m+r,y=v+f+o,A=Kb(s,s.VERTEX_SHADER,_),R=Kb(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,R),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(e.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(R)||"",Y=z.trim(),q=G.trim(),it=W.trim(),k=!0,ot=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,A,R);else{let St=jb(s,A,"vertex"),Tt=jb(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+St+`
`+Tt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||it==="")&&(ot=!1);ot&&(C.diagnostics={runnable:k,programLog:Y,vertexShader:{log:q,prefix:m},fragmentShader:{log:it,prefix:f}})}s.deleteShader(A),s.deleteShader(R),U=new _l(s,x),E=oU(s,x)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,jD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$D++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}var yU=0,Iv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Pv(t),n.set(t,i)),i}},Pv=class{constructor(t){this.id=yU++,this.code=t,this.usedTimes=0}};function xU(e,t,n,i,s,a,r){let o=new $o,l=new Iv,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,C,z,G){let W=z.fog,Y=G.geometry,q=E.isMeshStandardMaterial?z.environment:null,it=(E.isMeshStandardMaterial?n:t).get(E.envMap||q),k=it&&it.mapping===au?it.image.height:null,ot=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Tt=St!==void 0?St.length:0,Xt=0;Y.morphAttributes.position!==void 0&&(Xt=1),Y.morphAttributes.normal!==void 0&&(Xt=2),Y.morphAttributes.color!==void 0&&(Xt=3);let Yt,re,ne,Q;if(ot){let ue=ms[ot];Yt=ue.vertexShader,re=ue.fragmentShader}else Yt=E.vertexShader,re=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),Q=l.getFragmentShaderID(E);let nt=e.getRenderTarget(),Mt=e.state.buffers.depth.getReversed(),It=G.isInstancedMesh===!0,wt=G.isBatchedMesh===!0,jt=!!E.map,ce=!!E.matcap,D=!!it,et=!!E.aoMap,j=!!E.lightMap,Z=!!E.bumpMap,J=!!E.normalMap,dt=!!E.displacementMap,st=!!E.emissiveMap,ft=!!E.metalnessMap,Gt=!!E.roughnessMap,Ft=E.anisotropy>0,T=E.clearcoat>0,M=E.dispersion>0,P=E.iridescence>0,H=E.sheen>0,tt=E.transmission>0,X=Ft&&!!E.anisotropyMap,at=T&&!!E.clearcoatMap,ht=T&&!!E.clearcoatNormalMap,Rt=T&&!!E.clearcoatRoughnessMap,Ct=P&&!!E.iridescenceMap,lt=P&&!!E.iridescenceThicknessMap,pt=H&&!!E.sheenColorMap,Dt=H&&!!E.sheenRoughnessMap,Et=!!E.specularMap,vt=!!E.specularColorMap,qt=!!E.specularIntensityMap,L=tt&&!!E.transmissionMap,ut=tt&&!!E.thicknessMap,mt=!!E.gradientMap,bt=!!E.alphaMap,rt=E.alphaTest>0,$=!!E.alphaHash,Ut=!!E.extensions,Ht=Vs;E.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ht=e.toneMapping);let ve={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:re,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:wt,batchingColor:wt&&G._colorsTexture!==null,instancing:It,instancingColor:It&&G.instanceColor!==null,instancingMorph:It&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:vr,alphaToCoverage:!!E.alphaToCoverage,map:jt,matcap:ce,envMap:D,envMapMode:D&&it.mapping,envMapCubeUVHeight:k,aoMap:et,lightMap:j,bumpMap:Z,normalMap:J,displacementMap:h&&dt,emissiveMap:st,normalMapObjectSpace:J&&E.normalMapType===xb,normalMapTangentSpace:J&&E.normalMapType===gv,metalnessMap:ft,roughnessMap:Gt,anisotropy:Ft,anisotropyMap:X,clearcoat:T,clearcoatMap:at,clearcoatNormalMap:ht,clearcoatRoughnessMap:Rt,dispersion:M,iridescence:P,iridescenceMap:Ct,iridescenceThicknessMap:lt,sheen:H,sheenColorMap:pt,sheenRoughnessMap:Dt,specularMap:Et,specularColorMap:vt,specularIntensityMap:qt,transmission:tt,transmissionMap:L,thicknessMap:ut,gradientMap:mt,opaque:E.transparent===!1&&E.blending===mr&&E.alphaToCoverage===!1,alphaMap:bt,alphaTest:rt,alphaHash:$,combine:E.combine,mapUv:jt&&x(E.map.channel),aoMapUv:et&&x(E.aoMap.channel),lightMapUv:j&&x(E.lightMap.channel),bumpMapUv:Z&&x(E.bumpMap.channel),normalMapUv:J&&x(E.normalMap.channel),displacementMapUv:dt&&x(E.displacementMap.channel),emissiveMapUv:st&&x(E.emissiveMap.channel),metalnessMapUv:ft&&x(E.metalnessMap.channel),roughnessMapUv:Gt&&x(E.roughnessMap.channel),anisotropyMapUv:X&&x(E.anisotropyMap.channel),clearcoatMapUv:at&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ht&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(E.sheenRoughnessMap.channel),specularMapUv:Et&&x(E.specularMap.channel),specularColorMapUv:vt&&x(E.specularColorMap.channel),specularIntensityMapUv:qt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:ut&&x(E.thicknessMap.channel),alphaMapUv:bt&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(J||Ft),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(jt||bt),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ht,decodeVideoTexture:jt&&E.map.isVideoTexture===!0&&he.getTransfer(E.map.colorSpace)===Se,decodeVideoTextureEmissive:st&&E.emissiveMap.isVideoTexture===!0&&he.getTransfer(E.emissiveMap.colorSpace)===Se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hi,flipSided:E.side===On,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function f(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let C in E.defines)S.push(C),S.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(v(S,E),_(S,E),S.push(e.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let S=g[E.type],C;if(S){let z=ms[S];C=Ub.clone(z.uniforms)}else C=E.uniforms;return C}function A(E,S){let C;for(let z=0,G=u.length;z<G;z++){let W=u[z];if(W.cacheKey===S){C=W,++C.usedTimes;break}}return C===void 0&&(C=new _U(e,S,E,a),u.push(C)),C}function R(E){if(--E.usedTimes===0){let S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:U}}function SU(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function MU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function iE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function sE(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,h,p,g,x,m){let f=e[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},e[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function o(d,h,p,g,x,m){let f=r(d,h,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):n.push(f)}function l(d,h,p,g,x,m){let f=r(d,h,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||MU),i.length>1&&i.sort(h||iE),s.length>1&&s.sort(h||iE)}function u(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function bU(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new sE,e.set(i,[r])):s>=a.length?(r=new sE,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function EU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Qt};break;case"SpotLight":n={position:new N,direction:new N,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function TU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var AU=0;function wU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function RU(e){let t=new EU,n=TU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,a=new Le,r=new Le;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,v=0,_=0,y=0,A=0,R=0,w=0;c.sort(wU);for(let E=0,S=c.length;E<S;E++){let C=c[E],z=C.color,G=C.intensity,W=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*G,d+=z.g*G,h+=z.b*G;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],G);w++}else if(C.isDirectionalLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let it=C.shadow,k=n.get(C);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=q,p++}else if(C.isSpotLight){let q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(z).multiplyScalar(G),q.distance=W,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[x]=q;let it=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,it.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[x]=it.matrix,C.castShadow){let k=n.get(C);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=Y,y++}x++}else if(C.isRectAreaLight){let q=t.get(C);q.color.copy(z).multiplyScalar(G),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=q,m++}else if(C.isPointLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let it=C.shadow,k=n.get(C);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,k.shadowCameraNear=it.camera.near,k.shadowCameraFar=it.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=C.shadow.matrix,_++}i.point[g]=q,g++}else if(C.isHemisphereLight){let q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(G),q.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[f]=q,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==v||U.numPointShadows!==_||U.numSpotShadows!==y||U.numSpotMaps!==A||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=v,U.numPointShadows=_,U.numSpotShadows=y,U.numSpotMaps=A,U.numLightProbes=w,i.version=AU++)}function l(c,u){let d=0,h=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let _=c[f];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(_.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function aE(e){let t=new RU(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function CU(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new aE(e),t.set(s,[o])):a>=r.length?(o=new aE(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var DU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NU(e,t,n){let i=new il,s=new gt,a=new gt,r=new Fe,o=new Xf({depthPacking:yb}),l=new qf,c={},u=n.maxTextureSize,d={[Bs]:On,[On]:Bs,[hi]:hi},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:DU,fragmentShader:UU}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new li;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nv;let f=this.type;this.render=function(R,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=e.getRenderTarget(),S=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),z=e.state;z.setBlending(Hs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=f!==fs&&this.type===fs,W=f===fs&&this.type!==fs;for(let Y=0,q=R.length;Y<q;Y++){let it=R[Y],k=it.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ot=k.getFrameExtents();if(s.multiply(ot),a.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/ot.x),s.x=a.x*ot.x,k.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/ot.y),s.y=a.y*ot.y,k.mapSize.y=a.y)),k.map===null||G===!0||W===!0){let Tt=this.type!==fs?{minFilter:qn,magFilter:qn}:{};k.map!==null&&k.map.dispose(),k.map=new hs(s.x,s.y,Tt),k.map.texture.name=it.name+".shadowMap",k.camera.updateProjectionMatrix()}e.setRenderTarget(k.map),e.clear();let St=k.getViewportCount();for(let Tt=0;Tt<St;Tt++){let Xt=k.getViewport(Tt);r.set(a.x*Xt.x,a.y*Xt.y,a.x*Xt.z,a.y*Xt.w),z.viewport(r),k.updateMatrices(it,Tt),i=k.getFrustum(),y(w,U,k.camera,it,this.type)}k.isPointLightShadow!==!0&&this.type===fs&&v(k,U),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(E,S,C)};function v(R,w){let U=t.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hs(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,U,h,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,U,p,x,null)}function _(R,w,U,E){let S=null,C=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=U.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let z=S.uuid,G=w.uuid,W=c[z];W===void 0&&(W={},c[z]=W);let Y=W[G];Y===void 0&&(Y=S.clone(),W[G]=Y,w.addEventListener("dispose",A)),S=Y}if(S.visible=w.visible,S.wireframe=w.wireframe,E===fs?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let z=e.properties.get(S);z.light=U}return S}function y(R,w,U,E,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===fs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let G=t.update(R),W=R.material;if(Array.isArray(W)){let Y=G.groups;for(let q=0,it=Y.length;q<it;q++){let k=Y[q],ot=W[k.materialIndex];if(ot&&ot.visible){let St=_(R,ot,E,S);R.onBeforeShadow(e,R,w,U,G,St,k),e.renderBufferDirect(U,null,G,St,R,k),R.onAfterShadow(e,R,w,U,G,St,k)}}}else if(W.visible){let Y=_(R,W,E,S);R.onBeforeShadow(e,R,w,U,G,Y,null),e.renderBufferDirect(U,null,G,Y,R,null),R.onAfterShadow(e,R,w,U,G,Y,null)}}let z=R.children;for(let G=0,W=z.length;G<W;G++)y(z[G],w,U,E,S)}function A(R){R.target.removeEventListener("dispose",A);for(let U in c){let E=c[U],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var LU={[id]:sd,[ad]:ld,[rd]:cd,[gr]:od,[sd]:id,[ld]:ad,[cd]:rd,[od]:gr};function OU(e,t){function n(){let L=!1,ut=new Fe,mt=null,bt=new Fe(0,0,0,0);return{setMask:function(rt){mt!==rt&&!L&&(e.colorMask(rt,rt,rt,rt),mt=rt)},setLocked:function(rt){L=rt},setClear:function(rt,$,Ut,Ht,ve){ve===!0&&(rt*=Ht,$*=Ht,Ut*=Ht),ut.set(rt,$,Ut,Ht),bt.equals(ut)===!1&&(e.clearColor(rt,$,Ut,Ht),bt.copy(ut))},reset:function(){L=!1,mt=null,bt.set(-1,0,0,0)}}}function i(){let L=!1,ut=!1,mt=null,bt=null,rt=null;return{setReversed:function($){if(ut!==$){let Ut=t.get("EXT_clip_control");$?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ut=$;let Ht=rt;rt=null,this.setClear(Ht)}},getReversed:function(){return ut},setTest:function($){$?nt(e.DEPTH_TEST):Mt(e.DEPTH_TEST)},setMask:function($){mt!==$&&!L&&(e.depthMask($),mt=$)},setFunc:function($){if(ut&&($=LU[$]),bt!==$){switch($){case id:e.depthFunc(e.NEVER);break;case sd:e.depthFunc(e.ALWAYS);break;case ad:e.depthFunc(e.LESS);break;case gr:e.depthFunc(e.LEQUAL);break;case rd:e.depthFunc(e.EQUAL);break;case od:e.depthFunc(e.GEQUAL);break;case ld:e.depthFunc(e.GREATER);break;case cd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}bt=$}},setLocked:function($){L=$},setClear:function($){rt!==$&&(ut&&($=1-$),e.clearDepth($),rt=$)},reset:function(){L=!1,mt=null,bt=null,rt=null,ut=!1}}}function s(){let L=!1,ut=null,mt=null,bt=null,rt=null,$=null,Ut=null,Ht=null,ve=null;return{setTest:function(ue){L||(ue?nt(e.STENCIL_TEST):Mt(e.STENCIL_TEST))},setMask:function(ue){ut!==ue&&!L&&(e.stencilMask(ue),ut=ue)},setFunc:function(ue,fi,Yn){(mt!==ue||bt!==fi||rt!==Yn)&&(e.stencilFunc(ue,fi,Yn),mt=ue,bt=fi,rt=Yn)},setOp:function(ue,fi,Yn){($!==ue||Ut!==fi||Ht!==Yn)&&(e.stencilOp(ue,fi,Yn),$=ue,Ut=fi,Ht=Yn)},setLocked:function(ue){L=ue},setClear:function(ue){ve!==ue&&(e.clearStencil(ue),ve=ue)},reset:function(){L=!1,ut=null,mt=null,bt=null,rt=null,$=null,Ut=null,Ht=null,ve=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,_=null,y=null,A=null,R=null,w=new Qt(0,0,0),U=0,E=!1,S=null,C=null,z=null,G=null,W=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,it=0,k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=it>=1):k.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=it>=2);let ot=null,St={},Tt=e.getParameter(e.SCISSOR_BOX),Xt=e.getParameter(e.VIEWPORT),Yt=new Fe().fromArray(Tt),re=new Fe().fromArray(Xt);function ne(L,ut,mt,bt){let rt=new Uint8Array(4),$=e.createTexture();e.bindTexture(L,$),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ut=0;Ut<mt;Ut++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ut,0,e.RGBA,1,1,bt,0,e.RGBA,e.UNSIGNED_BYTE,rt):e.texImage2D(ut+Ut,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,rt);return $}let Q={};Q[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),Q[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Q[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),nt(e.DEPTH_TEST),r.setFunc(gr),Z(!1),J(ev),nt(e.CULL_FACE),et(Hs);function nt(L){u[L]!==!0&&(e.enable(L),u[L]=!0)}function Mt(L){u[L]!==!1&&(e.disable(L),u[L]=!1)}function It(L,ut){return d[L]!==ut?(e.bindFramebuffer(L,ut),d[L]=ut,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=ut),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=ut),!0):!1}function wt(L,ut){let mt=p,bt=!1;if(L){mt=h.get(ut),mt===void 0&&(mt=[],h.set(ut,mt));let rt=L.textures;if(mt.length!==rt.length||mt[0]!==e.COLOR_ATTACHMENT0){for(let $=0,Ut=rt.length;$<Ut;$++)mt[$]=e.COLOR_ATTACHMENT0+$;mt.length=rt.length,bt=!0}}else mt[0]!==e.BACK&&(mt[0]=e.BACK,bt=!0);bt&&e.drawBuffers(mt)}function jt(L){return g!==L?(e.useProgram(L),g=L,!0):!1}let ce={[Ra]:e.FUNC_ADD,[W1]:e.FUNC_SUBTRACT,[Y1]:e.FUNC_REVERSE_SUBTRACT};ce[Z1]=e.MIN,ce[J1]=e.MAX;let D={[K1]:e.ZERO,[Q1]:e.ONE,[j1]:e.SRC_COLOR,[Cf]:e.SRC_ALPHA,[sb]:e.SRC_ALPHA_SATURATE,[nb]:e.DST_COLOR,[tb]:e.DST_ALPHA,[$1]:e.ONE_MINUS_SRC_COLOR,[Df]:e.ONE_MINUS_SRC_ALPHA,[ib]:e.ONE_MINUS_DST_COLOR,[eb]:e.ONE_MINUS_DST_ALPHA,[ab]:e.CONSTANT_COLOR,[rb]:e.ONE_MINUS_CONSTANT_COLOR,[ob]:e.CONSTANT_ALPHA,[lb]:e.ONE_MINUS_CONSTANT_ALPHA};function et(L,ut,mt,bt,rt,$,Ut,Ht,ve,ue){if(L===Hs){x===!0&&(Mt(e.BLEND),x=!1);return}if(x===!1&&(nt(e.BLEND),x=!0),L!==q1){if(L!==m||ue!==E){if((f!==Ra||y!==Ra)&&(e.blendEquation(e.FUNC_ADD),f=Ra,y=Ra),ue)switch(L){case mr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case iv:e.blendFunc(e.ONE,e.ONE);break;case sv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case av:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case mr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case iv:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case sv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case av:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,A=null,R=null,w.set(0,0,0),U=0,m=L,E=ue}return}rt=rt||ut,$=$||mt,Ut=Ut||bt,(ut!==f||rt!==y)&&(e.blendEquationSeparate(ce[ut],ce[rt]),f=ut,y=rt),(mt!==v||bt!==_||$!==A||Ut!==R)&&(e.blendFuncSeparate(D[mt],D[bt],D[$],D[Ut]),v=mt,_=bt,A=$,R=Ut),(Ht.equals(w)===!1||ve!==U)&&(e.blendColor(Ht.r,Ht.g,Ht.b,ve),w.copy(Ht),U=ve),m=L,E=!1}function j(L,ut){L.side===hi?Mt(e.CULL_FACE):nt(e.CULL_FACE);let mt=L.side===On;ut&&(mt=!mt),Z(mt),L.blending===mr&&L.transparent===!1?et(Hs):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let bt=L.stencilWrite;o.setTest(bt),bt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),st(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):Mt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Z(L){S!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),S=L)}function J(L){L!==G1?(nt(e.CULL_FACE),L!==C&&(L===ev?e.cullFace(e.BACK):L===k1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Mt(e.CULL_FACE),C=L}function dt(L){L!==z&&(q&&e.lineWidth(L),z=L)}function st(L,ut,mt){L?(nt(e.POLYGON_OFFSET_FILL),(G!==ut||W!==mt)&&(e.polygonOffset(ut,mt),G=ut,W=mt)):Mt(e.POLYGON_OFFSET_FILL)}function ft(L){L?nt(e.SCISSOR_TEST):Mt(e.SCISSOR_TEST)}function Gt(L){L===void 0&&(L=e.TEXTURE0+Y-1),ot!==L&&(e.activeTexture(L),ot=L)}function Ft(L,ut,mt){mt===void 0&&(ot===null?mt=e.TEXTURE0+Y-1:mt=ot);let bt=St[mt];bt===void 0&&(bt={type:void 0,texture:void 0},St[mt]=bt),(bt.type!==L||bt.texture!==ut)&&(ot!==mt&&(e.activeTexture(mt),ot=mt),e.bindTexture(L,ut||Q[L]),bt.type=L,bt.texture=ut)}function T(){let L=St[ot];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(L){Yt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Yt.copy(L))}function Dt(L){re.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function Et(L,ut){let mt=c.get(ut);mt===void 0&&(mt=new WeakMap,c.set(ut,mt));let bt=mt.get(L);bt===void 0&&(bt=e.getUniformBlockIndex(ut,L.name),mt.set(L,bt))}function vt(L,ut){let bt=c.get(ut).get(L);l.get(ut)!==bt&&(e.uniformBlockBinding(ut,bt,L.__bindingPointIndex),l.set(ut,bt))}function qt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},ot=null,St={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,v=null,_=null,y=null,A=null,R=null,w=new Qt(0,0,0),U=0,E=!1,S=null,C=null,z=null,G=null,W=null,Yt.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:nt,disable:Mt,bindFramebuffer:It,drawBuffers:wt,useProgram:jt,setBlending:et,setMaterial:j,setFlipSided:Z,setCullFace:J,setLineWidth:dt,setPolygonOffset:st,setScissorTest:ft,activeTexture:Gt,bindTexture:Ft,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:P,texImage2D:Ct,texImage3D:lt,updateUBOMapping:Et,uniformBlockBinding:vt,texStorage2D:ht,texStorage3D:Rt,texSubImage2D:H,texSubImage3D:tt,compressedTexSubImage2D:X,compressedTexSubImage3D:at,scissor:pt,viewport:Dt,reset:qt}}function IU(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):Bc("canvas")}function x(T,M,P){let H=1,tt=Ft(T);if((tt.width>P||tt.height>P)&&(H=P/Math.max(tt.width,tt.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let X=Math.floor(H*tt.width),at=Math.floor(H*tt.height);d===void 0&&(d=g(X,at));let ht=M?g(X,at):d;return ht.width=X,ht.height=at,ht.getContext("2d").drawImage(T,0,0,X,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+X+"x"+at+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){e.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(T,M,P,H,tt=!1){if(T!==null){if(e[T]!==void 0)return e[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=M;if(M===e.RED&&(P===e.FLOAT&&(X=e.R32F),P===e.HALF_FLOAT&&(X=e.R16F),P===e.UNSIGNED_BYTE&&(X=e.R8)),M===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(X=e.R8UI),P===e.UNSIGNED_SHORT&&(X=e.R16UI),P===e.UNSIGNED_INT&&(X=e.R32UI),P===e.BYTE&&(X=e.R8I),P===e.SHORT&&(X=e.R16I),P===e.INT&&(X=e.R32I)),M===e.RG&&(P===e.FLOAT&&(X=e.RG32F),P===e.HALF_FLOAT&&(X=e.RG16F),P===e.UNSIGNED_BYTE&&(X=e.RG8)),M===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(X=e.RG8UI),P===e.UNSIGNED_SHORT&&(X=e.RG16UI),P===e.UNSIGNED_INT&&(X=e.RG32UI),P===e.BYTE&&(X=e.RG8I),P===e.SHORT&&(X=e.RG16I),P===e.INT&&(X=e.RG32I)),M===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(X=e.RGB8UI),P===e.UNSIGNED_SHORT&&(X=e.RGB16UI),P===e.UNSIGNED_INT&&(X=e.RGB32UI),P===e.BYTE&&(X=e.RGB8I),P===e.SHORT&&(X=e.RGB16I),P===e.INT&&(X=e.RGB32I)),M===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),P===e.UNSIGNED_INT&&(X=e.RGBA32UI),P===e.BYTE&&(X=e.RGBA8I),P===e.SHORT&&(X=e.RGBA16I),P===e.INT&&(X=e.RGBA32I)),M===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),M===e.RGBA){let at=tt?Pc:he.getTransfer(H);P===e.FLOAT&&(X=e.RGBA32F),P===e.HALF_FLOAT&&(X=e.RGBA16F),P===e.UNSIGNED_BYTE&&(X=at===Se?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(T,M){let P;return T?M===null||M===Ia||M===dl?P=e.DEPTH24_STENCIL8:M===ps?P=e.DEPTH32F_STENCIL8:M===hl&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ia||M===dl?P=e.DEPTH_COMPONENT24:M===ps?P=e.DEPTH_COMPONENT32F:M===hl&&(P=e.DEPTH_COMPONENT16),P}function A(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==qn&&T.minFilter!==oi?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){let M=T.target;M.removeEventListener("dispose",R),U(M),M.isVideoTexture&&u.delete(M)}function w(T){let M=T.target;M.removeEventListener("dispose",w),S(M)}function U(T){let M=i.get(T);if(M.__webglInit===void 0)return;let P=T.source,H=h.get(P);if(H){let tt=H[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(T),Object.keys(H).length===0&&h.delete(P)}i.remove(T)}function E(T){let M=i.get(T);e.deleteTexture(M.__webglTexture);let P=T.source,H=h.get(P);delete H[M.__cacheKey],r.memory.textures--}function S(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let tt=0;tt<M.__webglFramebuffer[H].length;tt++)e.deleteFramebuffer(M.__webglFramebuffer[H][tt]);else e.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)e.deleteFramebuffer(M.__webglFramebuffer[H]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let P=T.textures;for(let H=0,tt=P.length;H<tt;H++){let X=i.get(P[H]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),r.memory.textures--),i.remove(P[H])}i.remove(T)}let C=0;function z(){C=0}function G(){let T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function W(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function Y(T,M){let P=i.get(T);if(T.isVideoTexture&&ft(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&P.__version!==T.version){let H=T.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(P,T,M);return}}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+M)}function q(T,M){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){Q(P,T,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+M)}function it(T,M){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){Q(P,T,M);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+M)}function k(T,M){let P=i.get(T);if(T.version>0&&P.__version!==T.version){nt(P,T,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+M)}let ot={[us]:e.REPEAT,[os]:e.CLAMP_TO_EDGE,[Uf]:e.MIRRORED_REPEAT},St={[qn]:e.NEAREST,[vb]:e.NEAREST_MIPMAP_NEAREST,[ru]:e.NEAREST_MIPMAP_LINEAR,[oi]:e.LINEAR,[dd]:e.LINEAR_MIPMAP_NEAREST,[ds]:e.LINEAR_MIPMAP_LINEAR},Tt={[Sb]:e.NEVER,[wb]:e.ALWAYS,[Mb]:e.LESS,[vv]:e.LEQUAL,[bb]:e.EQUAL,[Ab]:e.GEQUAL,[Eb]:e.GREATER,[Tb]:e.NOTEQUAL};function Xt(T,M){if(M.type===ps&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===oi||M.magFilter===dd||M.magFilter===ru||M.magFilter===ds||M.minFilter===oi||M.minFilter===dd||M.minFilter===ru||M.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,ot[M.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,ot[M.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,ot[M.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,St[M.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,St[M.minFilter]),M.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,Tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qn||M.minFilter!==ru&&M.minFilter!==ds||M.type===ps&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Yt(T,M){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));let H=M.source,tt=h.get(H);tt===void 0&&(tt={},h.set(H,tt));let X=W(M);if(X!==T.__cacheKey){tt[X]===void 0&&(tt[X]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),tt[X].usedTimes++;let at=tt[T.__cacheKey];at!==void 0&&(tt[T.__cacheKey].usedTimes--,at.usedTimes===0&&E(M)),T.__cacheKey=X,T.__webglTexture=tt[X].texture}return P}function re(T,M,P){return Math.floor(Math.floor(T/P)/M)}function ne(T,M,P,H){let X=T.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,P,H,M.data);else{X.sort((lt,pt)=>lt.start-pt.start);let at=0;for(let lt=1;lt<X.length;lt++){let pt=X[at],Dt=X[lt],Et=pt.start+pt.count,vt=re(Dt.start,M.width,4),qt=re(pt.start,M.width,4);Dt.start<=Et+1&&vt===qt&&re(Dt.start+Dt.count-1,M.width,4)===vt?pt.count=Math.max(pt.count,Dt.start+Dt.count-pt.start):(++at,X[at]=Dt)}X.length=at+1;let ht=e.getParameter(e.UNPACK_ROW_LENGTH),Rt=e.getParameter(e.UNPACK_SKIP_PIXELS),Ct=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let lt=0,pt=X.length;lt<pt;lt++){let Dt=X[lt],Et=Math.floor(Dt.start/4),vt=Math.ceil(Dt.count/4),qt=Et%M.width,L=Math.floor(Et/M.width),ut=vt,mt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,qt,L,ut,mt,P,H,M.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ht),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ct)}}function Q(T,M,P){let H=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=e.TEXTURE_3D);let tt=Yt(T,M),X=M.source;n.bindTexture(H,T.__webglTexture,e.TEXTURE0+P);let at=i.get(X);if(X.version!==at.__version||tt===!0){n.activeTexture(e.TEXTURE0+P);let ht=he.getPrimaries(he.workingColorSpace),Rt=M.colorSpace===Gs?null:he.getPrimaries(M.colorSpace),Ct=M.colorSpace===Gs||ht===Rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let lt=x(M.image,!1,s.maxTextureSize);lt=Gt(M,lt);let pt=a.convert(M.format,M.colorSpace),Dt=a.convert(M.type),Et=_(M.internalFormat,pt,Dt,M.colorSpace,M.isVideoTexture);Xt(H,M);let vt,qt=M.mipmaps,L=M.isVideoTexture!==!0,ut=at.__version===void 0||tt===!0,mt=X.dataReady,bt=A(M,lt);if(M.isDepthTexture)Et=y(M.format===pl,M.type),ut&&(L?n.texStorage2D(e.TEXTURE_2D,1,Et,lt.width,lt.height):n.texImage2D(e.TEXTURE_2D,0,Et,lt.width,lt.height,0,pt,Dt,null));else if(M.isDataTexture)if(qt.length>0){L&&ut&&n.texStorage2D(e.TEXTURE_2D,bt,Et,qt[0].width,qt[0].height);for(let rt=0,$=qt.length;rt<$;rt++)vt=qt[rt],L?mt&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,vt.width,vt.height,pt,Dt,vt.data):n.texImage2D(e.TEXTURE_2D,rt,Et,vt.width,vt.height,0,pt,Dt,vt.data);M.generateMipmaps=!1}else L?(ut&&n.texStorage2D(e.TEXTURE_2D,bt,Et,lt.width,lt.height),mt&&ne(M,lt,pt,Dt)):n.texImage2D(e.TEXTURE_2D,0,Et,lt.width,lt.height,0,pt,Dt,lt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&ut&&n.texStorage3D(e.TEXTURE_2D_ARRAY,bt,Et,qt[0].width,qt[0].height,lt.depth);for(let rt=0,$=qt.length;rt<$;rt++)if(vt=qt[rt],M.format!==Ti)if(pt!==null)if(L){if(mt)if(M.layerUpdates.size>0){let Ut=Ev(vt.width,vt.height,M.format,M.type);for(let Ht of M.layerUpdates){let ve=vt.data.subarray(Ht*Ut/vt.data.BYTES_PER_ELEMENT,(Ht+1)*Ut/vt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,Ht,vt.width,vt.height,1,pt,ve)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,0,vt.width,vt.height,lt.depth,pt,vt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,rt,Et,vt.width,vt.height,lt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?mt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,0,vt.width,vt.height,lt.depth,pt,Dt,vt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,rt,Et,vt.width,vt.height,lt.depth,0,pt,Dt,vt.data)}else{L&&ut&&n.texStorage2D(e.TEXTURE_2D,bt,Et,qt[0].width,qt[0].height);for(let rt=0,$=qt.length;rt<$;rt++)vt=qt[rt],M.format!==Ti?pt!==null?L?mt&&n.compressedTexSubImage2D(e.TEXTURE_2D,rt,0,0,vt.width,vt.height,pt,vt.data):n.compressedTexImage2D(e.TEXTURE_2D,rt,Et,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?mt&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,vt.width,vt.height,pt,Dt,vt.data):n.texImage2D(e.TEXTURE_2D,rt,Et,vt.width,vt.height,0,pt,Dt,vt.data)}else if(M.isDataArrayTexture)if(L){if(ut&&n.texStorage3D(e.TEXTURE_2D_ARRAY,bt,Et,lt.width,lt.height,lt.depth),mt)if(M.layerUpdates.size>0){let rt=Ev(lt.width,lt.height,M.format,M.type);for(let $ of M.layerUpdates){let Ut=lt.data.subarray($*rt/lt.data.BYTES_PER_ELEMENT,($+1)*rt/lt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,lt.width,lt.height,1,pt,Dt,Ut)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,pt,Dt,lt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Et,lt.width,lt.height,lt.depth,0,pt,Dt,lt.data);else if(M.isData3DTexture)L?(ut&&n.texStorage3D(e.TEXTURE_3D,bt,Et,lt.width,lt.height,lt.depth),mt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,pt,Dt,lt.data)):n.texImage3D(e.TEXTURE_3D,0,Et,lt.width,lt.height,lt.depth,0,pt,Dt,lt.data);else if(M.isFramebufferTexture){if(ut)if(L)n.texStorage2D(e.TEXTURE_2D,bt,Et,lt.width,lt.height);else{let rt=lt.width,$=lt.height;for(let Ut=0;Ut<bt;Ut++)n.texImage2D(e.TEXTURE_2D,Ut,Et,rt,$,0,pt,Dt,null),rt>>=1,$>>=1}}else if(qt.length>0){if(L&&ut){let rt=Ft(qt[0]);n.texStorage2D(e.TEXTURE_2D,bt,Et,rt.width,rt.height)}for(let rt=0,$=qt.length;rt<$;rt++)vt=qt[rt],L?mt&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,pt,Dt,vt):n.texImage2D(e.TEXTURE_2D,rt,Et,pt,Dt,vt);M.generateMipmaps=!1}else if(L){if(ut){let rt=Ft(lt);n.texStorage2D(e.TEXTURE_2D,bt,Et,rt.width,rt.height)}mt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,pt,Dt,lt)}else n.texImage2D(e.TEXTURE_2D,0,Et,pt,Dt,lt);m(M)&&f(H),at.__version=X.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function nt(T,M,P){if(M.image.length!==6)return;let H=Yt(T,M),tt=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+P);let X=i.get(tt);if(tt.version!==X.__version||H===!0){n.activeTexture(e.TEXTURE0+P);let at=he.getPrimaries(he.workingColorSpace),ht=M.colorSpace===Gs?null:he.getPrimaries(M.colorSpace),Rt=M.colorSpace===Gs||at===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Ct=M.isCompressedTexture||M.image[0].isCompressedTexture,lt=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Ct&&!lt?pt[$]=x(M.image[$],!0,s.maxCubemapSize):pt[$]=lt?M.image[$].image:M.image[$],pt[$]=Gt(M,pt[$]);let Dt=pt[0],Et=a.convert(M.format,M.colorSpace),vt=a.convert(M.type),qt=_(M.internalFormat,Et,vt,M.colorSpace),L=M.isVideoTexture!==!0,ut=X.__version===void 0||H===!0,mt=tt.dataReady,bt=A(M,Dt);Xt(e.TEXTURE_CUBE_MAP,M);let rt;if(Ct){L&&ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,bt,qt,Dt.width,Dt.height);for(let $=0;$<6;$++){rt=pt[$].mipmaps;for(let Ut=0;Ut<rt.length;Ut++){let Ht=rt[Ut];M.format!==Ti?Et!==null?L?mt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ut,0,0,Ht.width,Ht.height,Et,Ht.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ut,qt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ut,0,0,Ht.width,Ht.height,Et,vt,Ht.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ut,qt,Ht.width,Ht.height,0,Et,vt,Ht.data)}}}else{if(rt=M.mipmaps,L&&ut){rt.length>0&&bt++;let $=Ft(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,bt,qt,$.width,$.height)}for(let $=0;$<6;$++)if(lt){L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Et,vt,pt[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,pt[$].width,pt[$].height,0,Et,vt,pt[$].data);for(let Ut=0;Ut<rt.length;Ut++){let ve=rt[Ut].image[$].image;L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ut+1,0,0,ve.width,ve.height,Et,vt,ve.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ut+1,qt,ve.width,ve.height,0,Et,vt,ve.data)}}else{L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Et,vt,pt[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,Et,vt,pt[$]);for(let Ut=0;Ut<rt.length;Ut++){let Ht=rt[Ut];L?mt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ut+1,0,0,Et,vt,Ht.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ut+1,qt,Et,vt,Ht.image[$])}}}m(M)&&f(e.TEXTURE_CUBE_MAP),X.__version=tt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Mt(T,M,P,H,tt,X){let at=a.convert(P.format,P.colorSpace),ht=a.convert(P.type),Rt=_(P.internalFormat,at,ht,P.colorSpace),Ct=i.get(M),lt=i.get(P);if(lt.__renderTarget=M,!Ct.__hasExternalTextures){let pt=Math.max(1,M.width>>X),Dt=Math.max(1,M.height>>X);tt===e.TEXTURE_3D||tt===e.TEXTURE_2D_ARRAY?n.texImage3D(tt,X,Rt,pt,Dt,M.depth,0,at,ht,null):n.texImage2D(tt,X,Rt,pt,Dt,0,at,ht,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,tt,lt.__webglTexture,0,dt(M)):(tt===e.TEXTURE_2D||tt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,tt,lt.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function It(T,M,P){if(e.bindRenderbuffer(e.RENDERBUFFER,T),M.depthBuffer){let H=M.depthTexture,tt=H&&H.isDepthTexture?H.type:null,X=y(M.stencilBuffer,tt),at=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=dt(M);st(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ht,X,M.width,M.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,ht,X,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,X,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,at,e.RENDERBUFFER,T)}else{let H=M.textures;for(let tt=0;tt<H.length;tt++){let X=H[tt],at=a.convert(X.format,X.colorSpace),ht=a.convert(X.type),Rt=_(X.internalFormat,at,ht,X.colorSpace),Ct=dt(M);P&&st(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,Rt,M.width,M.height):st(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ct,Rt,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,Rt,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function wt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=i.get(M.depthTexture);H.__renderTarget=M,(!H.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let tt=H.__webglTexture,X=dt(M);if(M.depthTexture.format===Jo)st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0);else if(M.depthTexture.format===pl)st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function jt(T){let M=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let H=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){let tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",tt)};H.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=H}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let H=T.texture.mipmaps;H&&H.length>0?wt(M.__webglFramebuffer[0],T):wt(M.__webglFramebuffer,T)}else if(P){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=e.createRenderbuffer(),It(M.__webglDepthbuffer[H],T,!1);else{let tt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,X)}}else{let H=T.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),It(M.__webglDepthbuffer,T,!1);else{let tt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ce(T,M,P){let H=i.get(T);M!==void 0&&Mt(H.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&jt(T)}function D(T){let M=T.texture,P=i.get(T),H=i.get(M);T.addEventListener("dispose",w);let tt=T.textures,X=T.isWebGLCubeRenderTarget===!0,at=tt.length>1;if(at||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=M.version,r.memory.textures++),X){P.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer[ht]=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)P.__webglFramebuffer[ht][Rt]=e.createFramebuffer()}else P.__webglFramebuffer[ht]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){P.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)P.__webglFramebuffer[ht]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(at)for(let ht=0,Rt=tt.length;ht<Rt;ht++){let Ct=i.get(tt[ht]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&st(T)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){let Rt=tt[ht];P.__webglColorRenderbuffer[ht]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[ht]);let Ct=a.convert(Rt.format,Rt.colorSpace),lt=a.convert(Rt.type),pt=_(Rt.internalFormat,Ct,lt,Rt.colorSpace,T.isXRRenderTarget===!0),Dt=dt(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,pt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,P.__webglColorRenderbuffer[ht])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),It(P.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Xt(e.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)Mt(P.__webglFramebuffer[ht][Rt],T,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt);else Mt(P.__webglFramebuffer[ht],T,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(M)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(at){for(let ht=0,Rt=tt.length;ht<Rt;ht++){let Ct=tt[ht],lt=i.get(Ct),pt=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(pt,lt.__webglTexture),Xt(pt,Ct),Mt(P.__webglFramebuffer,T,Ct,e.COLOR_ATTACHMENT0+ht,pt,0),m(Ct)&&f(pt)}n.unbindTexture()}else{let ht=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ht,H.__webglTexture),Xt(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)Mt(P.__webglFramebuffer[Rt],T,M,e.COLOR_ATTACHMENT0,ht,Rt);else Mt(P.__webglFramebuffer,T,M,e.COLOR_ATTACHMENT0,ht,0);m(M)&&f(ht),n.unbindTexture()}T.depthBuffer&&jt(T)}function et(T){let M=T.textures;for(let P=0,H=M.length;P<H;P++){let tt=M[P];if(m(tt)){let X=v(T),at=i.get(tt).__webglTexture;n.bindTexture(X,at),f(X),n.unbindTexture()}}}let j=[],Z=[];function J(T){if(T.samples>0){if(st(T)===!1){let M=T.textures,P=T.width,H=T.height,tt=e.COLOR_BUFFER_BIT,X=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=i.get(T),ht=M.length>1;if(ht)for(let Ct=0;Ct<M.length;Ct++)n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let Rt=T.texture.mipmaps;Rt&&Rt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let Ct=0;Ct<M.length;Ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=e.STENCIL_BUFFER_BIT)),ht){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,at.__webglColorRenderbuffer[Ct]);let lt=i.get(M[Ct]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,lt,0)}e.blitFramebuffer(0,0,P,H,0,0,P,H,tt,e.NEAREST),l===!0&&(j.length=0,Z.length=0,j.push(e.COLOR_ATTACHMENT0+Ct),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(X),Z.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Z)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,j))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ht)for(let Ct=0;Ct<M.length;Ct++){n.bindFramebuffer(e.FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.RENDERBUFFER,at.__webglColorRenderbuffer[Ct]);let lt=i.get(M[Ct]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,at.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.TEXTURE_2D,lt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function dt(T){return Math.min(s.maxSamples,T.samples)}function st(T){let M=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(T){let M=r.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Gt(T,M){let P=T.colorSpace,H=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==vr&&P!==Gs&&(he.getTransfer(P)===Se?(H!==Ti||tt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),M}function Ft(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=it,this.setTextureCube=k,this.rebindTextures=ce,this.setupRenderTarget=D,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=st}function PU(e,t){function n(i,s=Gs){let a,r=he.getTransfer(s);if(i===Bi)return e.UNSIGNED_BYTE;if(i===md)return e.UNSIGNED_SHORT_4_4_4_4;if(i===gd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===uv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===hv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===lv)return e.BYTE;if(i===cv)return e.SHORT;if(i===hl)return e.UNSIGNED_SHORT;if(i===pd)return e.INT;if(i===Ia)return e.UNSIGNED_INT;if(i===ps)return e.FLOAT;if(i===fl)return e.HALF_FLOAT;if(i===fv)return e.ALPHA;if(i===dv)return e.RGB;if(i===Ti)return e.RGBA;if(i===Jo)return e.DEPTH_COMPONENT;if(i===pl)return e.DEPTH_STENCIL;if(i===pv)return e.RED;if(i===vd)return e.RED_INTEGER;if(i===mv)return e.RG;if(i===_d)return e.RG_INTEGER;if(i===yd)return e.RGBA_INTEGER;if(i===ou||i===lu||i===cu||i===uu)if(r===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ou)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ou)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===Sd||i===Md||i===bd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===xd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===Td||i===Ad)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ed||i===Td)return r===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ad)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wd||i===Rd||i===Cd||i===Dd||i===Ud||i===Nd||i===Ld||i===Od||i===Id||i===Pd||i===zd||i===Bd||i===Fd||i===Hd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===wd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ud)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ld)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Od)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Id)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vd||i===Gd||i===kd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Vd)return r===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===qd||i===Wd||i===Yd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Xd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===qd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var zU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Yc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new zi({vertexShader:zU,fragmentShader:BU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ke(new Mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bv=class extends Fs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new zv,f={},v=n.getContextAttributes(),_=null,y=null,A=[],R=[],w=new gt,U=null,E=new Tn;E.viewport=new Fe;let S=new Tn;S.viewport=new Fe;let C=[E,S],z=new nd,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let nt=A[Q];return nt===void 0&&(nt=new el,A[Q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Q){let nt=A[Q];return nt===void 0&&(nt=new el,A[Q]=nt),nt.getGripSpace()},this.getHand=function(Q){let nt=A[Q];return nt===void 0&&(nt=new el,A[Q]=nt),nt.getHandSpace()};function Y(Q){let nt=R.indexOf(Q.inputSource);if(nt===-1)return;let Mt=A[nt];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,c||r),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",it);for(let Q=0;Q<A.length;Q++){let nt=R[Q];nt!==null&&(R[Q]=null,A[Q].disconnect(nt))}G=null,W=null,m.reset();for(let Q in f)delete f[Q];t.setRenderTarget(_),p=null,h=null,d=null,s=null,y=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await n.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,It=null,wt=null;v.depth&&(wt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=v.stencil?pl:Jo,It=v.stencil?dl:Ia);let jt={colorFormat:n.RGBA8,depthFormat:wt,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(jt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new hs(h.textureWidth,h.textureHeight,{format:Ti,type:Bi,depthTexture:new Wc(h.textureWidth,h.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let Mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,Mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new hs(p.framebufferWidth,p.framebufferHeight,{format:Ti,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Q){for(let nt=0;nt<Q.removed.length;nt++){let Mt=Q.removed[nt],It=R.indexOf(Mt);It>=0&&(R[It]=null,A[It].disconnect(Mt))}for(let nt=0;nt<Q.added.length;nt++){let Mt=Q.added[nt],It=R.indexOf(Mt);if(It===-1){for(let jt=0;jt<A.length;jt++)if(jt>=R.length){R.push(Mt),It=jt;break}else if(R[jt]===null){R[jt]=Mt,It=jt;break}if(It===-1)break}let wt=A[It];wt&&wt.connect(Mt)}}let k=new N,ot=new N;function St(Q,nt,Mt){k.setFromMatrixPosition(nt.matrixWorld),ot.setFromMatrixPosition(Mt.matrixWorld);let It=k.distanceTo(ot),wt=nt.projectionMatrix.elements,jt=Mt.projectionMatrix.elements,ce=wt[14]/(wt[10]-1),D=wt[14]/(wt[10]+1),et=(wt[9]+1)/wt[5],j=(wt[9]-1)/wt[5],Z=(wt[8]-1)/wt[0],J=(jt[8]+1)/jt[0],dt=ce*Z,st=ce*J,ft=It/(-Z+J),Gt=ft*-Z;if(nt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Gt),Q.translateZ(ft),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),wt[10]===-1)Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Ft=ce+ft,T=D+ft,M=dt-Gt,P=st+(It-Gt),H=et*D/T*Ft,tt=j*D/T*Ft;Q.projectionMatrix.makePerspective(M,P,H,tt,Ft,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Tt(Q,nt){nt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(nt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let nt=Q.near,Mt=Q.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),z.near=S.near=E.near=nt,z.far=S.far=E.far=Mt,(G!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,W=z.far),z.layers.mask=Q.layers.mask|6,E.layers.mask=z.layers.mask&3,S.layers.mask=z.layers.mask&5;let It=Q.parent,wt=z.cameras;Tt(z,It);for(let jt=0;jt<wt.length;jt++)Tt(wt[jt],It);wt.length===2?St(z,E,S):z.projectionMatrix.copy(E.projectionMatrix),Xt(Q,z,It)};function Xt(Q,nt,Mt){Mt===null?Q.matrix.copy(nt.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(nt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(nt.projectionMatrix),Q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Lf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Q){return f[Q]};let Yt=null;function re(Q,nt){if(u=nt.getViewerPose(c||r),g=nt,u!==null){let Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let It=!1;Mt.length!==z.cameras.length&&(z.cameras.length=0,It=!0);for(let D=0;D<Mt.length;D++){let et=Mt[D],j=null;if(p!==null)j=p.getViewport(et);else{let J=d.getViewSubImage(h,et);j=J.viewport,D===0&&(t.setRenderTargetTextures(y,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(y))}let Z=C[D];Z===void 0&&(Z=new Tn,Z.layers.enable(D),Z.viewport=new Fe,C[D]=Z),Z.matrix.fromArray(et.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(et.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(j.x,j.y,j.width,j.height),D===0&&(z.matrix.copy(Z.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),It===!0&&z.cameras.push(Z)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let D=d.getDepthInformation(Mt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<Mt.length;D++){let et=Mt[D].camera;if(et){let j=f[et];j||(j=new Yc,f[et]=j);let Z=d.getCameraImage(et);j.sourceTexture=Z}}}}for(let Mt=0;Mt<A.length;Mt++){let It=R[Mt],wt=A[Mt];It!==null&&wt!==void 0&&wt.update(It,nt,c||r)}Yt&&Yt(Q,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}let ne=new rE;ne.setAnimationLoop(re),this.setAnimationLoop=function(Q){Yt=Q},this.dispose=function(){}}},Rr=new Pi,FU=new Le;function HU(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,xv(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===On&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===On&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,Rr.copy(y),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(FU.makeRotationFromEuler(Rr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===On&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VU(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",m));let A=_.program;i.updateUBOMapping(v,A);let R=t.render.frame;a[v.id]!==R&&(h(v),a[v.id]=R)}function u(v){let _=d();v.__bindingPointIndex=_;let y=e.createBuffer(),A=v.__size,R=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,A,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let _=s[v.id],y=v.uniforms,A=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let R=0,w=y.length;R<w;R++){let U=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,S=U.length;E<S;E++){let C=U[E];if(p(C,R,E,A)===!0){let z=C.__offset,G=Array.isArray(C.value)?C.value:[C.value],W=0;for(let Y=0;Y<G.length;Y++){let q=G[Y],it=x(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,z+W,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,W),W+=it.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,_,y,A){let R=v.value,w=_+"_"+y;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{let U=A[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return A[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(v){let _=v.uniforms,y=0,A=16;for(let w=0,U=_.length;w<U;w++){let E=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,C=E.length;S<C;S++){let z=E[S],G=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Y=G.length;W<Y;W++){let q=G[W],it=x(q),k=y%A,ot=k%it.boundary,St=k+ot;y+=ot,St!==0&&A-St<it.storage&&(y+=A-St),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=it.storage}}}let R=y%A;return R>0&&(y+=A-R),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function f(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:f}}var Qd=class{constructor(t={}){let{canvas:n=Rb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=_n;let R=0,w=0,U=null,E=-1,S=null,C=new Fe,z=new Fe,G=null,W=new Qt(0),Y=0,q=n.width,it=n.height,k=1,ot=null,St=null,Tt=new Fe(0,0,q,it),Xt=new Fe(0,0,q,it),Yt=!1,re=new il,ne=!1,Q=!1,nt=new Le,Mt=new N,It=new Fe,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function ce(){return U===null?k:1}let D=i;function et(b,O){return n.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",rt,!1),D===null){let O="webgl2";if(D=et(O,b),D===null)throw et(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let j,Z,J,dt,st,ft,Gt,Ft,T,M,P,H,tt,X,at,ht,Rt,Ct,lt,pt,Dt,Et,vt,qt;function L(){j=new aD(D),j.init(),Et=new PU(D,j),Z=new j3(D,j,t,Et),J=new OU(D,j),Z.reversedDepthBuffer&&h&&J.buffers.depth.setReversed(!0),dt=new lD(D),st=new SU,ft=new IU(D,j,J,st,Z,Et,dt),Gt=new tD(y),Ft=new sD(y),T=new pC(D),vt=new K3(D,T),M=new rD(D,T,dt,vt),P=new uD(D,M,T,dt),lt=new cD(D,Z,ft),ht=new $3(st),H=new xU(y,Gt,Ft,j,Z,vt,ht),tt=new HU(y,st),X=new bU,at=new CU(j),Ct=new J3(y,Gt,Ft,J,P,p,l),Rt=new NU(y,P,Z),qt=new VU(D,dt,Z,J),pt=new Q3(D,j,dt),Dt=new oD(D,j,dt),dt.programs=H.programs,y.capabilities=Z,y.extensions=j,y.properties=st,y.renderLists=X,y.shadowMap=Rt,y.state=J,y.info=dt}L();let ut=new Bv(y,D);this.xr=ut,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=j.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=j.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(q,it,!1))},this.getSize=function(b){return b.set(q,it)},this.setSize=function(b,O,B=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,it=O,n.width=Math.floor(b*k),n.height=Math.floor(O*k),B===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(q*k,it*k).floor()},this.setDrawingBufferSize=function(b,O,B){q=b,it=O,k=B,n.width=Math.floor(b*B),n.height=Math.floor(O*B),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(Tt)},this.setViewport=function(b,O,B,F){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,O,B,F),J.viewport(C.copy(Tt).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Xt)},this.setScissor=function(b,O,B,F){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,O,B,F),J.scissor(z.copy(Xt).multiplyScalar(k).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(b){J.setScissorTest(Yt=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){St=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,B=!0){let F=0;if(b){let I=!1;if(U!==null){let ct=U.texture.format;I=ct===yd||ct===_d||ct===vd}if(I){let ct=U.texture.type,_t=ct===Bi||ct===Ia||ct===hl||ct===dl||ct===md||ct===gd,Nt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Bt=Nt.r,Vt=Nt.g,zt=Nt.b;_t?(g[0]=Bt,g[1]=Vt,g[2]=zt,g[3]=yt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Bt,x[1]=Vt,x[2]=zt,x[3]=yt,D.clearBufferiv(D.COLOR,0,x))}else F|=D.COLOR_BUFFER_BIT}O&&(F|=D.DEPTH_BUFFER_BIT),B&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",rt,!1),Ct.dispose(),X.dispose(),at.dispose(),st.dispose(),Gt.dispose(),Ft.dispose(),P.dispose(),vt.dispose(),qt.dispose(),H.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Yn),ut.removeEventListener("sessionend",Sl),Fi.stop()};function mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=dt.autoReset,O=Rt.enabled,B=Rt.autoUpdate,F=Rt.needsUpdate,I=Rt.type;L(),dt.autoReset=b,Rt.enabled=O,Rt.autoUpdate=B,Rt.needsUpdate=F,Rt.type=I}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $(b){let O=b.target;O.removeEventListener("dispose",$),Ut(O)}function Ut(b){Ht(b),st.remove(b)}function Ht(b){let O=st.get(b).programs;O!==void 0&&(O.forEach(function(B){H.releaseProgram(B)}),b.isShaderMaterial&&H.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,B,F,I,ct){O===null&&(O=wt);let _t=I.isMesh&&I.matrixWorld.determinant()<0,Nt=_u(b,O,B,F,I);J.setMaterial(F,_t);let yt=B.index,Bt=1;if(F.wireframe===!0){if(yt=M.getWireframeAttribute(B),yt===void 0)return;Bt=2}let Vt=B.drawRange,zt=B.attributes.position,te=Vt.start*Bt,V=(Vt.start+Vt.count)*Bt;ct!==null&&(te=Math.max(te,ct.start*Bt),V=Math.min(V,(ct.start+ct.count)*Bt)),yt!==null?(te=Math.max(te,0),V=Math.min(V,yt.count)):zt!=null&&(te=Math.max(te,0),V=Math.min(V,zt.count));let Lt=V-te;if(Lt<0||Lt===1/0)return;vt.setup(I,F,Nt,B,yt);let Pt,Ot=pt;if(yt!==null&&(Pt=T.get(yt),Ot=Dt,Ot.setIndex(Pt)),I.isMesh)F.wireframe===!0?(J.setLineWidth(F.wireframeLinewidth*ce()),Ot.setMode(D.LINES)):Ot.setMode(D.TRIANGLES);else if(I.isLine){let At=F.linewidth;At===void 0&&(At=1),J.setLineWidth(At*ce()),I.isLineSegments?Ot.setMode(D.LINES):I.isLineLoop?Ot.setMode(D.LINE_LOOP):Ot.setMode(D.LINE_STRIP)}else I.isPoints?Ot.setMode(D.POINTS):I.isSprite&&Ot.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Ot.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let At=I._multiDrawStarts,oe=I._multiDrawCounts,Zt=I._multiDrawCount,Xe=yt?T.get(yt).bytesPerElement:1,Pe=st.get(F).currentProgram.getUniforms();for(let nn=0;nn<Zt;nn++)Pe.setValue(D,"_gl_DrawID",nn),Ot.render(At[nn]/Xe,oe[nn])}else if(I.isInstancedMesh)Ot.renderInstances(te,Lt,I.count);else if(B.isInstancedBufferGeometry){let At=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,oe=Math.min(B.instanceCount,At);Ot.renderInstances(te,Lt,oe)}else Ot.render(te,Lt)};function ve(b,O,B){b.transparent===!0&&b.side===hi&&b.forceSinglePass===!1?(b.side=On,b.needsUpdate=!0,Or(b,O,B),b.side=Bs,b.needsUpdate=!0,Or(b,O,B),b.side=hi):Or(b,O,B)}this.compile=function(b,O,B=null){B===null&&(B=b),f=at.get(B),f.init(O),_.push(f),B.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),b!==B&&b.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();let F=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let ct=I.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let Nt=ct[_t];ve(Nt,B,I),F.add(Nt)}else ve(ct,B,I),F.add(ct)}),f=_.pop(),F},this.compileAsync=function(b,O,B=null){let F=this.compile(b,O,B);return new Promise(I=>{function ct(){if(F.forEach(function(_t){st.get(_t).currentProgram.isReady()&&F.delete(_t)}),F.size===0){I(b);return}setTimeout(ct,10)}j.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ue=null;function fi(b){ue&&ue(b)}function Yn(){Fi.stop()}function Sl(){Fi.start()}let Fi=new rE;Fi.setAnimationLoop(fi),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(b){ue=b,ut.setAnimationLoop(b),b===null?Fi.stop():Fi.start()},ut.addEventListener("sessionstart",Yn),ut.addEventListener("sessionend",Sl),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(O),O=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,O,U),f=at.get(b,_.length),f.init(O),_.push(f),nt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),re.setFromProjectionMatrix(nt,Ii,O.reversedDepth),Q=this.localClippingEnabled,ne=ht.init(this.clippingPlanes,Q),m=X.get(b,v.length),m.init(),v.push(m),ut.enabled===!0&&ut.isPresenting===!0){let ct=y.xr.getDepthSensingMesh();ct!==null&&Nr(ct,O,-1/0,y.sortObjects)}Nr(b,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ot,St),jt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,jt&&Ct.addToRenderList(m,b),this.info.render.frame++,ne===!0&&ht.beginShadows();let B=f.state.shadowsArray;Rt.render(B,b,O),ne===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=m.opaque,I=m.transmissive;if(f.setupLights(),O.isArrayCamera){let ct=O.cameras;if(I.length>0)for(let _t=0,Nt=ct.length;_t<Nt;_t++){let yt=ct[_t];Ml(F,I,b,yt)}jt&&Ct.render(b);for(let _t=0,Nt=ct.length;_t<Nt;_t++){let yt=ct[_t];gu(m,b,yt,yt.viewport)}}else I.length>0&&Ml(F,I,b,O),jt&&Ct.render(b),gu(m,b,O);U!==null&&w===0&&(ft.updateMultisampleRenderTarget(U),ft.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(y,b,O),vt.resetDefaultState(),E=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],ne===!0&&ht.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Nr(b,O,B,F){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||re.intersectsSprite(b)){F&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);let _t=P.update(b),Nt=b.material;Nt.visible&&m.push(b,_t,Nt,B,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||re.intersectsObject(b))){let _t=P.update(b),Nt=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),It.copy(_t.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(Nt)){let yt=_t.groups;for(let Bt=0,Vt=yt.length;Bt<Vt;Bt++){let zt=yt[Bt],te=Nt[zt.materialIndex];te&&te.visible&&m.push(b,_t,te,B,It.z,zt)}}else Nt.visible&&m.push(b,_t,Nt,B,It.z,null)}}let ct=b.children;for(let _t=0,Nt=ct.length;_t<Nt;_t++)Nr(ct[_t],O,B,F)}function gu(b,O,B,F){let I=b.opaque,ct=b.transmissive,_t=b.transparent;f.setupLightsView(B),ne===!0&&ht.setGlobalState(y.clippingPlanes,B),F&&J.viewport(C.copy(F)),I.length>0&&Hi(I,O,B),ct.length>0&&Hi(ct,O,B),_t.length>0&&Hi(_t,O,B),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Ml(b,O,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[F.id]===void 0&&(f.state.transmissionRenderTarget[F.id]=new hs(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?fl:Bi,minFilter:ds,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let ct=f.state.transmissionRenderTarget[F.id],_t=F.viewport||C;ct.setSize(_t.z*y.transmissionResolutionScale,_t.w*y.transmissionResolutionScale);let Nt=y.getRenderTarget(),yt=y.getActiveCubeFace(),Bt=y.getActiveMipmapLevel();y.setRenderTarget(ct),y.getClearColor(W),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),jt&&Ct.render(B);let Vt=y.toneMapping;y.toneMapping=Vs;let zt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),f.setupLightsView(F),ne===!0&&ht.setGlobalState(y.clippingPlanes,F),Hi(b,B,F),ft.updateMultisampleRenderTarget(ct),ft.updateRenderTargetMipmap(ct),j.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let V=0,Lt=O.length;V<Lt;V++){let Pt=O[V],Ot=Pt.object,At=Pt.geometry,oe=Pt.material,Zt=Pt.group;if(oe.side===hi&&Ot.layers.test(F.layers)){let Xe=oe.side;oe.side=On,oe.needsUpdate=!0,Lr(Ot,B,F,At,oe,Zt),oe.side=Xe,oe.needsUpdate=!0,te=!0}}te===!0&&(ft.updateMultisampleRenderTarget(ct),ft.updateRenderTargetMipmap(ct))}y.setRenderTarget(Nt,yt,Bt),y.setClearColor(W,Y),zt!==void 0&&(F.viewport=zt),y.toneMapping=Vt}function Hi(b,O,B){let F=O.isScene===!0?O.overrideMaterial:null;for(let I=0,ct=b.length;I<ct;I++){let _t=b[I],Nt=_t.object,yt=_t.geometry,Bt=_t.group,Vt=_t.material;Vt.allowOverride===!0&&F!==null&&(Vt=F),Nt.layers.test(B.layers)&&Lr(Nt,O,B,yt,Vt,Bt)}}function Lr(b,O,B,F,I,ct){b.onBeforeRender(y,O,B,F,I,ct),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(y,O,B,F,b,ct),I.transparent===!0&&I.side===hi&&I.forceSinglePass===!1?(I.side=On,I.needsUpdate=!0,y.renderBufferDirect(B,O,F,I,b,ct),I.side=Bs,I.needsUpdate=!0,y.renderBufferDirect(B,O,F,I,b,ct),I.side=hi):y.renderBufferDirect(B,O,F,I,b,ct),b.onAfterRender(y,O,B,F,I,ct)}function Or(b,O,B){O.isScene!==!0&&(O=wt);let F=st.get(b),I=f.state.lights,ct=f.state.shadowsArray,_t=I.state.version,Nt=H.getParameters(b,I.state,ct,O,B),yt=H.getProgramCacheKey(Nt),Bt=F.programs;F.environment=b.isMeshStandardMaterial?O.environment:null,F.fog=O.fog,F.envMap=(b.isMeshStandardMaterial?Ft:Gt).get(b.envMap||F.environment),F.envMapRotation=F.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",$),Bt=new Map,F.programs=Bt);let Vt=Bt.get(yt);if(Vt!==void 0){if(F.currentProgram===Vt&&F.lightsStateVersion===_t)return vu(b,Nt),Vt}else Nt.uniforms=H.getUniforms(b),b.onBeforeCompile(Nt,y),Vt=H.acquireProgram(Nt,yt),Bt.set(yt,Vt),F.uniforms=Nt.uniforms;let zt=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=ht.uniform),vu(b,Nt),F.needsLights=yu(b),F.lightsStateVersion=_t,F.needsLights&&(zt.ambientLightColor.value=I.state.ambient,zt.lightProbe.value=I.state.probe,zt.directionalLights.value=I.state.directional,zt.directionalLightShadows.value=I.state.directionalShadow,zt.spotLights.value=I.state.spot,zt.spotLightShadows.value=I.state.spotShadow,zt.rectAreaLights.value=I.state.rectArea,zt.ltc_1.value=I.state.rectAreaLTC1,zt.ltc_2.value=I.state.rectAreaLTC2,zt.pointLights.value=I.state.point,zt.pointLightShadows.value=I.state.pointShadow,zt.hemisphereLights.value=I.state.hemi,zt.directionalShadowMap.value=I.state.directionalShadowMap,zt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,zt.spotShadowMap.value=I.state.spotShadowMap,zt.spotLightMatrix.value=I.state.spotLightMatrix,zt.spotLightMap.value=I.state.spotLightMap,zt.pointShadowMap.value=I.state.pointShadowMap,zt.pointShadowMatrix.value=I.state.pointShadowMatrix),F.currentProgram=Vt,F.uniformsList=null,Vt}function Vi(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=_l.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function vu(b,O){let B=st.get(b);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function _u(b,O,B,F,I){O.isScene!==!0&&(O=wt),ft.resetTextureUnits();let ct=O.fog,_t=F.isMeshStandardMaterial?O.environment:null,Nt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:vr,yt=(F.isMeshStandardMaterial?Ft:Gt).get(F.envMap||_t),Bt=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Vt=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),zt=!!B.morphAttributes.position,te=!!B.morphAttributes.normal,V=!!B.morphAttributes.color,Lt=Vs;F.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Lt=y.toneMapping);let Pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ot=Pt!==void 0?Pt.length:0,At=st.get(F),oe=f.state.lights;if(ne===!0&&(Q===!0||b!==S)){let sn=b===S&&F.id===E;ht.setState(F,b,sn)}let Zt=!1;F.version===At.__version?(At.needsLights&&At.lightsStateVersion!==oe.state.version||At.outputColorSpace!==Nt||I.isBatchedMesh&&At.batching===!1||!I.isBatchedMesh&&At.batching===!0||I.isBatchedMesh&&At.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&At.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&At.instancing===!1||!I.isInstancedMesh&&At.instancing===!0||I.isSkinnedMesh&&At.skinning===!1||!I.isSkinnedMesh&&At.skinning===!0||I.isInstancedMesh&&At.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&At.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&At.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&At.instancingMorph===!1&&I.morphTexture!==null||At.envMap!==yt||F.fog===!0&&At.fog!==ct||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==ht.numPlanes||At.numIntersection!==ht.numIntersection)||At.vertexAlphas!==Bt||At.vertexTangents!==Vt||At.morphTargets!==zt||At.morphNormals!==te||At.morphColors!==V||At.toneMapping!==Lt||At.morphTargetsCount!==Ot)&&(Zt=!0):(Zt=!0,At.__version=F.version);let Xe=At.currentProgram;Zt===!0&&(Xe=Or(F,O,I));let Pe=!1,nn=!1,ki=!1,Ee=Xe.getUniforms(),Pn=At.uniforms;if(J.useProgram(Xe.program)&&(Pe=!0,nn=!0,ki=!0),F.id!==E&&(E=F.id,nn=!0),Pe||S!==b){J.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ee.setValue(D,"projectionMatrix",b.projectionMatrix),Ee.setValue(D,"viewMatrix",b.matrixWorldInverse);let Te=Ee.map.cameraPosition;Te!==void 0&&Te.setValue(D,Mt.setFromMatrixPosition(b.matrixWorld)),Z.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,nn=!0,ki=!0)}if(I.isSkinnedMesh){Ee.setOptional(D,I,"bindMatrix"),Ee.setOptional(D,I,"bindMatrixInverse");let sn=I.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ee.setValue(D,"boneTexture",sn.boneTexture,ft))}I.isBatchedMesh&&(Ee.setOptional(D,I,"batchingTexture"),Ee.setValue(D,"batchingTexture",I._matricesTexture,ft),Ee.setOptional(D,I,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",I._indirectTexture,ft),Ee.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",I._colorsTexture,ft));let qe=B.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&lt.update(I,B,Xe),(nn||At.receiveShadow!==I.receiveShadow)&&(At.receiveShadow=I.receiveShadow,Ee.setValue(D,"receiveShadow",I.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Pn.envMap.value=yt,Pn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&O.environment!==null&&(Pn.envMapIntensity.value=O.environmentIntensity),nn&&(Ee.setValue(D,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&rp(Pn,ki),ct&&F.fog===!0&&tt.refreshFogUniforms(Pn,ct),tt.refreshMaterialUniforms(Pn,F,k,it,f.state.transmissionRenderTarget[b.id]),_l.upload(D,Vi(At),Pn,ft)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(_l.upload(D,Vi(At),Pn,ft),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ee.setValue(D,"center",I.center),Ee.setValue(D,"modelViewMatrix",I.modelViewMatrix),Ee.setValue(D,"normalMatrix",I.normalMatrix),Ee.setValue(D,"modelMatrix",I.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let sn=F.uniformsGroups;for(let Te=0,di=sn.length;Te<di;Te++){let de=sn[Te];qt.update(de,Xe),qt.bind(de,Xe)}}return Xe}function rp(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function yu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,O,B){let F=st.get(b);F.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),st.get(b.texture).__webglTexture=O,st.get(b.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:B,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let B=st.get(b);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0};let Gi=D.createFramebuffer();this.setRenderTarget=function(b,O=0,B=0){U=b,R=O,w=B;let F=!0,I=null,ct=!1,_t=!1;if(b){let yt=st.get(b);if(yt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(D.FRAMEBUFFER,null),F=!1;else if(yt.__webglFramebuffer===void 0)ft.setupRenderTarget(b);else if(yt.__hasExternalTextures)ft.rebindTextures(b,st.get(b.texture).__webglTexture,st.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let zt=b.depthTexture;if(yt.__boundDepthTexture!==zt){if(zt!==null&&st.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(b)}}let Bt=b.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(_t=!0);let Vt=st.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?I=Vt[O][B]:I=Vt[O],ct=!0):b.samples>0&&ft.useMultisampledRTT(b)===!1?I=st.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?I=Vt[B]:I=Vt,C.copy(b.viewport),z.copy(b.scissor),G=b.scissorTest}else C.copy(Tt).multiplyScalar(k).floor(),z.copy(Xt).multiplyScalar(k).floor(),G=Yt;if(B!==0&&(I=Gi),J.bindFramebuffer(D.FRAMEBUFFER,I)&&F&&J.drawBuffers(b,I),J.viewport(C),J.scissor(z),J.setScissorTest(G),ct){let yt=st.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,B)}else if(_t){let yt=O;for(let Bt=0;Bt<b.textures.length;Bt++){let Vt=st.get(b.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,B,yt)}}else if(b!==null&&B!==0){let yt=st.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(b,O,B,F,I,ct,_t,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){J.bindFramebuffer(D.FRAMEBUFFER,yt);try{let Bt=b.textures[Nt],Vt=Bt.format,zt=Bt.type;if(!Z.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-F&&B>=0&&B<=b.height-I&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Nt),D.readPixels(O,B,F,I,Et.convert(Vt),Et.convert(zt),ct))}finally{let Bt=U!==null?st.get(U).__webglFramebuffer:null;J.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,O,B,F,I,ct,_t,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt)if(O>=0&&O<=b.width-F&&B>=0&&B<=b.height-I){J.bindFramebuffer(D.FRAMEBUFFER,yt);let Bt=b.textures[Nt],Vt=Bt.format,zt=Bt.type;if(!Z.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,te),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Nt),D.readPixels(O,B,F,I,Et.convert(Vt),Et.convert(zt),0);let V=U!==null?st.get(U).__webglFramebuffer:null;J.bindFramebuffer(D.FRAMEBUFFER,V);let Lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cb(D,Lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(te),D.deleteSync(Lt),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,B=0){let F=Math.pow(2,-B),I=Math.floor(b.image.width*F),ct=Math.floor(b.image.height*F),_t=O!==null?O.x:0,Nt=O!==null?O.y:0;ft.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,_t,Nt,I,ct),J.unbindTexture()};let bl=D.createFramebuffer(),Ir=D.createFramebuffer();this.copyTextureToTexture=function(b,O,B=null,F=null,I=0,ct=null){ct===null&&(I!==0?(Ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=I,I=0):ct=0);let _t,Nt,yt,Bt,Vt,zt,te,V,Lt,Pt=b.isCompressedTexture?b.mipmaps[ct]:b.image;if(B!==null)_t=B.max.x-B.min.x,Nt=B.max.y-B.min.y,yt=B.isBox3?B.max.z-B.min.z:1,Bt=B.min.x,Vt=B.min.y,zt=B.isBox3?B.min.z:0;else{let qe=Math.pow(2,-I);_t=Math.floor(Pt.width*qe),Nt=Math.floor(Pt.height*qe),b.isDataArrayTexture?yt=Pt.depth:b.isData3DTexture?yt=Math.floor(Pt.depth*qe):yt=1,Bt=0,Vt=0,zt=0}F!==null?(te=F.x,V=F.y,Lt=F.z):(te=0,V=0,Lt=0);let Ot=Et.convert(O.format),At=Et.convert(O.type),oe;O.isData3DTexture?(ft.setTexture3D(O,0),oe=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ft.setTexture2DArray(O,0),oe=D.TEXTURE_2D_ARRAY):(ft.setTexture2D(O,0),oe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let Zt=D.getParameter(D.UNPACK_ROW_LENGTH),Xe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Pe=D.getParameter(D.UNPACK_SKIP_PIXELS),nn=D.getParameter(D.UNPACK_SKIP_ROWS),ki=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zt);let Ee=b.isDataArrayTexture||b.isData3DTexture,Pn=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let qe=st.get(b),sn=st.get(O),Te=st.get(qe.__renderTarget),di=st.get(sn.__renderTarget);J.bindFramebuffer(D.READ_FRAMEBUFFER,Te.__webglFramebuffer),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let de=0;de<yt;de++)Ee&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(b).__webglTexture,I,zt+de),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(O).__webglTexture,ct,Lt+de)),D.blitFramebuffer(Bt,Vt,_t,Nt,te,V,_t,Nt,D.DEPTH_BUFFER_BIT,D.NEAREST);J.bindFramebuffer(D.READ_FRAMEBUFFER,null),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(I!==0||b.isRenderTargetTexture||st.has(b)){let qe=st.get(b),sn=st.get(O);J.bindFramebuffer(D.READ_FRAMEBUFFER,bl),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ir);for(let Te=0;Te<yt;Te++)Ee?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,I,zt+Te):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,I),Pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,ct,Lt+Te):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,ct),I!==0?D.blitFramebuffer(Bt,Vt,_t,Nt,te,V,_t,Nt,D.COLOR_BUFFER_BIT,D.NEAREST):Pn?D.copyTexSubImage3D(oe,ct,te,V,Lt+Te,Bt,Vt,_t,Nt):D.copyTexSubImage2D(oe,ct,te,V,Bt,Vt,_t,Nt);J.bindFramebuffer(D.READ_FRAMEBUFFER,null),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Pn?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(oe,ct,te,V,Lt,_t,Nt,yt,Ot,At,Pt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(oe,ct,te,V,Lt,_t,Nt,yt,Ot,Pt.data):D.texSubImage3D(oe,ct,te,V,Lt,_t,Nt,yt,Ot,At,Pt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,te,V,_t,Nt,Ot,At,Pt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,te,V,Pt.width,Pt.height,Ot,Pt.data):D.texSubImage2D(D.TEXTURE_2D,ct,te,V,_t,Nt,Ot,At,Pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Zt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ki),ct===0&&O.generateMipmaps&&D.generateMipmap(oe),J.unbindTexture()},this.initRenderTarget=function(b){st.get(b).__webglFramebuffer===void 0&&ft.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ft.setTextureCube(b,0):b.isData3DTexture?ft.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ft.setTexture2DArray(b,0):ft.setTexture2D(b,0),J.unbindTexture()},this.resetState=function(){R=0,w=0,U=null,J.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),n.unpackColorSpace=he._getUnpackColorSpace()}};var CE=Ba(fu()),pE={portrait:[1.6,2.25],landscape:[2.25,1.6]},qU={left:.27,center:.5,right:.73},mu=.018,In=.007,Ke=4,mE=1/.05,WU=1/960,YU=2,ks=72,gE=24,Hv=.36,bE=.095,ZU=.0135,tp=.036,pu=.15,vE=1024,_E={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},ep=[0,.07,.93,1],JU=[-.95,-.28,.28,.95],KU=9,QU=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,jU=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,$U=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,tN=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,yE={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Pa=(e,t,n)=>Math.min(n,Math.max(t,e)),du=(e,t,n)=>e+(t-e)*n,Vv=(e,t)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return t;n.fillStyle="#000000",n.fillStyle=e;let i=n.fillStyle;if(i.startsWith("#")){let a=parseInt(i.slice(1),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}let s=i.match(/[\d.]+/g);return!s||s.length<3?t:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255]}catch{return t}},eN=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],np=(e,t=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${t})`,EE=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},qv=(e,t,n,i,s,a)=>{let r=Math.max(0,Math.min(a,i/2,s/2)),o=r*.4477;e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.bezierCurveTo(t+i-o,n,t+i,n+o,t+i,n+r),e.lineTo(t+i,n+s-r),e.bezierCurveTo(t+i,n+s-o,t+i-o,n+s,t+i-r,n+s),e.lineTo(t+r,n+s),e.bezierCurveTo(t+o,n+s,t,n+s-o,t,n+s-r),e.lineTo(t,n+r),e.bezierCurveTo(t,n+o,t+o,n,t+r,n)},Gv=(e,t)=>{if(!t)return Promise.resolve(null);let n=e.get(t);if(n)return n;let i=new Promise(s=>{let a=new Image;a.crossOrigin="anonymous",a.decoding="async",a.onload=()=>s(a),a.onerror=()=>s(null),a.src=t});return e.set(t,i),i},xE=(e,t)=>{let[n,i]=pE[e]||pE.portrait,s=du(.03,Math.min(n,i)*.2,Pa(t,0,1)),a={width:.34,height:.07,y:i/2-.13},r=i/2-.055;return{width:n,height:i,radius:s,slot:a,ringY:r,hangY:r+bE}},nN=e=>{let{width:t,height:n,radius:i,slot:s}=e,a=new Ua;qv(a,-t/2+In,-n/2+In,t-In*2,n-In*2,Math.max(i-In,.005));let r=new xr;qv(r,-s.width/2-In,s.y-s.height/2-In,s.width+In*2,s.height+In*2,s.height/2+In),a.holes.push(r);let o=new ol(a,{depth:mu,bevelEnabled:!0,bevelThickness:In,bevelSize:In,bevelSegments:5,curveSegments:24});o.translate(0,0,-mu/2);let l=new eu(a,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let d=0;d<c.count;d++)u.setXY(d,(c.getX(d)+t/2)/t,(c.getY(d)+n/2)/n);return u.needsUpdate=!0,{body:o,face:l}},SE=e=>{let t=new Ua,n=e*1.16;qv(t,-n/2+.014,-pu/2+.014,n-.028,pu-.028,.024);let i=new ol(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},iN=e=>{let t=ep.length,n=new li;n.setAttribute("position",new yn(new Float32Array(e*t*3),3)),n.setAttribute("normal",new yn(new Float32Array(e*t*3),3)),n.setAttribute("uv",new yn(new Float32Array(e*t*2),2));let i=[];for(let s=0;s<e-1;s++)for(let a=0;a<t-1;a++){let r=s*t+a;i.push(r,r+t,r+1,r+1,r+t,r+t+1)}return n.setIndex(i),n},sN=e=>{let t=new nl;t.background=new Qt(.035,.035,.04);let n=new Mr(1,1),i=[],s=(o,l,c,u=0)=>{let d=new _r({color:new Qt(o,o,o),side:hi});i.push(d);let h=new ke(n,d);h.position.set(...l),h.scale.set(c[0],c[1],1),h.lookAt(0,0,0),h.rotateZ(u),t.add(h)};s(2.6,[0,4.5,8],[9,4]),s(6,[-5.5,.5,7],[.9,14]),s(4,[5,-.5,8],[.6,14]),s(3.5,[0,-1,9],[24,.35],Math.PI/3),s(2.5,[1,2.5,9],[24,.2],Math.PI/3),s(1.4,[0,6,-6],[12,4]),s(.5,[0,-7,1],[16,6]),s(.9,[8,0,-2],[4,10]);let a=new yl(e),r=a.fromScene(t,.035);return a.dispose(),n.dispose(),i.forEach(o=>o.dispose()),r},kv=(e,t)=>{let n=new yr(e);return n.colorSpace=_n,n.anisotropy=t,n},aN=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n)return new yr(t);let i=EE(7),s=Float32Array.from({length:16384},()=>i()),a=(l,c)=>{let u=0;for(let d=-1;d<=1;d++)for(let h=-1;h<=1;h++)u+=s[(c+d+128)%128*128+(l+h+128)%128];return u/9*1.6},r=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=a((c-1+128)%128,l)-a((c+1)%128,l),d=a(c,(l-1+128)%128)-a(c,(l+1)%128),h=Math.hypot(u,d,1),p=(l*128+c)*4;r.data[p]=(u/h*.5+.5)*255,r.data[p+1]=(d/h*.5+.5)*255,r.data[p+2]=(1/h*.5+.5)*255,r.data[p+3]=255}n.putImageData(r,0,0);let o=new yr(t);return o.wrapS=us,o.wrapT=us,o.repeat.set(5,7),o},rN=()=>{let n=EE(19),i=Float32Array.from({length:16384},()=>n()),s=l=>Math.sqrt(Math.max(0,1-4*l*l)),a=(l,c)=>{let u=(l%128+128)%128,d=(c%128+128)%128,h=u/128*8,p=d/128*8,g=Math.floor(h),x=Math.floor(p),m=h-g-.5,f=p-x-.5,v=(g+x)%2===0,_=s(m)*(.55+.45*Math.cos(f*Math.PI*(v?1:.6))),y=s(f)*(.55+.45*Math.cos(m*Math.PI*(v?.6:1)));return(v?Math.max(_,y*.7):Math.max(y,_*.7))+i[d*128+u]*.08},r=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(a(c-1,l)-a(c+1,l))*1.6,d=(a(c,l-1)-a(c,l+1))*1.6,h=Math.hypot(u,d,1),p=(l*128+c)*4;r[p]=(u/h*.5+.5)*255,r[p+1]=(d/h*.5+.5)*255,r[p+2]=(1/h*.5+.5)*255,r[p+3]=255}let o=new qc(r,128,128);return o.wrapS=us,o.wrapT=us,o.magFilter=oi,o.minFilter=ds,o.generateMipmaps=!0,o.needsUpdate=!0,o},oN=(e,t,n,i,s)=>{let a=(s==="contain"?Math.min:Math.max)(n/t.width,i/t.height),r=t.width*a,o=t.height*a;e.drawImage(t,(n-r)/2,(i-o)/2,r,o)},ME=(e,t,n,i)=>{let s=e.getContext("2d");s&&(s.fillStyle=np(n),s.fillRect(0,0,e.width,e.height),t&&oN(s,t,e.width,e.height,i))},lN=(e,t,n)=>{let s=t?Math.max(64,Math.round(t.width/t.height*192)):384;e.width=192,e.height=s;let a=e.getContext("2d");if(!a)return s/192;if(a.fillStyle=np(n),a.fillRect(0,0,192,s),t)return a.save(),a.translate(192,0),a.rotate(Math.PI/2),a.drawImage(t,0,0,s,192),a.restore(),s/192;let r=eN(n)>.5?[0,0,0]:[1,1,1];a.fillStyle=np(r,.05);for(let o=0;o<s;o+=4)a.fillRect(0,o,192,1);a.fillStyle=np(r,.2);for(let o=0;o<s;o+=14)a.fillRect(192*.075,o,2,8),a.fillRect(192*.925-2,o,2,8);return s/192},cN=()=>{let e=()=>Array.from({length:Ke+1},()=>new N);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(Ke),impulses:new Float64Array(Ke),rest:1,anchor:new N,body:{position:new N,previous:new N,velocity:new N,quaternion:new Wn,previousQuaternion:new Wn,angular:new N,mass:1,inverseInertia:new N(1,1,1),hang:new N},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Me={a:new N,b:new N,c:new N,d:new N,e:new N,f:new N,g:new N,pin:new N,q:new Wn,r:new Wn},Wv=(e,t,n)=>(Me.r.copy(e.quaternion).invert(),n.copy(t).applyQuaternion(Me.r),n.set(n.x*e.inverseInertia.x,n.y*e.inverseInertia.y,n.z*e.inverseInertia.z),n.applyQuaternion(e.quaternion)),TE=(e,t)=>{let{x:n,y:i,z:s,w:a}=e;e.x+=.5*(t.x*a+t.y*s-t.z*i),e.y+=.5*(t.y*a+t.z*n-t.x*s),e.z+=.5*(t.z*a+t.x*i-t.y*n),e.w+=.5*(-t.x*n-t.y*i-t.z*s),e.normalize()},AE=(e,t,n)=>{let i=Me.c.crossVectors(t,n);return 1/e.mass+i.dot(Wv(e,i,Me.d))},wE=(e,t,n)=>{e.position.addScaledVector(n,1/e.mass),TE(e.quaternion,Wv(e,Me.e.crossVectors(t,n),Me.f))},uN=(e,t,n,i)=>{let{nodes:s,body:a}=e,r=s[t],o=t===0?0:mE,l=t===Ke-1,c=Me.g,u=s[t+1];l&&(c.copy(a.hang).applyQuaternion(a.quaternion),u=Me.b.copy(a.position).add(c));let d=Me.a.subVectors(u,r),h=d.length(),p=h-e.rest;if(p<=0||h<1e-9)return;let g=d.divideScalar(h),x=l?AE(a,c,g):mE,m=(h-e.lengths[t])/n,v=(i.hold*Math.tanh(i.stiffness*p/i.hold)+i.spring*p+i.bandDamping*Math.max(0,m))*n*n-e.impulses[t];if(v<=0)return;let _=Math.min(p/(o+x),v);e.impulses[t]+=_,o&&r.addScaledVector(g,_*o),l?wE(a,c,g.multiplyScalar(-_)):u.addScaledVector(g,-_*x)},hN=(e,t,n)=>{let i=Me.g.copy(t.local).applyQuaternion(e.quaternion),s=Me.a.copy(n).sub(e.position).sub(i),a=s.length();if(a<1e-9)return;let r=s.divideScalar(a),o=a/AE(e,i,r);wE(e,i,r.multiplyScalar(o))},Xv=(e,t,n)=>{let{nodes:i,previous:s,velocities:a,body:r,anchor:o}=e;i[0].copy(o);for(let c=1;c<=Ke;c++)i[c].copy(i[c-1]),n?i[c].x+=e.rest:i[c].y-=e.rest;r.quaternion.identity(),n&&r.quaternion.setFromAxisAngle(new N(0,0,1),Math.PI/2),r.hang.set(0,t.hangY,0);let l=Me.a.copy(r.hang).applyQuaternion(r.quaternion);r.position.copy(i[Ke]).sub(l),r.previous.copy(r.position),r.previousQuaternion.copy(r.quaternion),r.velocity.set(0,0,0),r.angular.set(0,0,0);for(let c=0;c<=Ke;c++)s[c].copy(i[c]),a[c].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},fN=(e,t,n)=>{e.rest=n/Ke;let{width:i,height:s}=t,a=e.body,r=mu+In*2;a.mass=1,a.inverseInertia.set(12/(s*s+r*r),12/(i*i+r*r),12/(i*i+s*s)),a.hang.set(0,t.hangY,0)},dN=(e,t,n,i)=>{let s=Math.max(1,Math.ceil(t/WU-1e-6)),a=t/s,{nodes:r,previous:o,velocities:l,body:c}=e,u=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,d=n.breeze*Math.sin(i*.37+.6)*2,h=e.grab,p=Me.pin,g=Math.exp(-n.nodeDrag*a),x=Math.exp(-n.linearDrag*a),m=Math.exp(-n.angularDrag*a);for(let v=0;v<s;v++){for(let S=1;S<Ke;S++){let C=l[S];C.y-=n.gravity*a,C.x+=u*a,C.z+=d*a,o[S].copy(r[S]),r[S].addScaledVector(C,a)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let _=c.quaternion;if(h){let S=Me.q.copy(h.rotation).multiply(Me.r.copy(_).invert());S.w<0&&S.set(-S.x,-S.y,-S.z,-S.w);let C=Me.a.set(S.x,S.y,S.z).multiplyScalar(2*n.grip);C.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(Wv(c,C,Me.b),a)}let y=Me.a.set(0,1,0).applyQuaternion(_),A=Me.b.set(-y.x*y.z,-y.y*y.z,1-y.z*y.z);if(A.lengthSq()>.001){let S=Me.d.set(0,0,1).applyQuaternion(_),C=Math.atan2(Me.e.crossVectors(A,S).dot(y),A.dot(S)),z=C-e.twistRaw;z>Math.PI?z-=Math.PI*2:z<-Math.PI&&(z+=Math.PI*2),e.twist+=z,e.twistRaw=C}if(!h){let S=c.angular.dot(y);c.angular.addScaledVector(y,(n.twist*(e.turn-e.twist)-n.twistDamping*S)*a)}c.velocity.y-=n.gravity*a,c.velocity.x+=u*.35*a,c.velocity.z+=d*.35*a,c.position.addScaledVector(c.velocity,a),TE(c.quaternion,Me.f.copy(c.angular).multiplyScalar(a)),e.impulses.fill(0),h&&p.lerpVectors(h.from,h.target,(v+1)/s);for(let S=0;S<YU;S++){for(let C=0;C<Ke;C++)uN(e,C,a,n);h&&hN(c,h,p)}for(let S=1;S<Ke;S++){let C=l[S].subVectors(r[S],o[S]).divideScalar(a).multiplyScalar(g);C.multiplyScalar(1/(1+n.nodeAir*C.length()*a))}c.velocity.subVectors(c.position,c.previous).divideScalar(a);let R=Me.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(R.x,R.y,R.z).multiplyScalar(2/a*(R.w<0?-1:1));let w=Me.a.set(0,0,1).applyQuaternion(c.quaternion),U=c.velocity.dot(w),E=Me.b.copy(c.velocity).addScaledVector(w,-U);E.multiplyScalar(1/(1+n.air*E.length()*a)),c.velocity.copy(E).addScaledVector(w,U/(1+n.broadside*Math.abs(U)*a)).multiplyScalar(x),c.angular.multiplyScalar(m/(1+n.spinAir*c.angular.length()*a)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),r[Ke].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let S=0;S<Ke;S++)e.lengths[S]=r[S].distanceTo(r[S+1])}h&&h.from.copy(h.target);let f=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let v=1;v<Ke;v++)f+=l[v].lengthSq()*.05;e.calm=f<2e-4?e.calm+t:0},pN=({frontImage:e,backImage:t,imageFit:n="cover",cardColor:i="#ffffff",orientation:s="portrait",finish:a="glossy",cornerRadius:r=.3,size:o=.6,anchor:l="center",strapLength:c=.5,strapImage:u,strapColor:d="#111111",strapWidth:h=.65,metal:p="silver",gravity:g=1,damping:x=.5,elasticity:m=.5,breeze:f=.5,interactive:v=!0,intro:_=!0,className:y="",renderArea:A,style:R})=>{let w=(0,Ur.useRef)(null),U=(0,Ur.useRef)(null),E=(0,Ur.useRef)(null);return U.current={frontImage:e,backImage:t,imageFit:n==="contain"?"contain":"cover",cardColor:i,orientation:s==="landscape"?"landscape":"portrait",finish:a,cornerRadius:r,size:o,anchor:l,strapLength:c,strapImage:u,strapColor:d,strapWidth:h,metal:p,gravity:g,damping:x,elasticity:m,breeze:f,interactive:v,intro:_},(0,Ur.useEffect)(()=>{E.current?.()}),(0,Ur.useEffect)(()=>{let S=w.current;if(!S)return;let C;try{C=new Qd({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}C.setClearColor(0,0),C.outputColorSpace=_n,C.toneMapping=ud,C.toneMappingExposure=1;let z=C.domElement;z.className="lanyard-canvas",z.setAttribute("aria-hidden","true");let G=A&&document.querySelector(A)||S,W=G!==S;G.appendChild(z),W&&Object.assign(z.style,{position:"absolute",left:"0",top:"0",zIndex:"2",pointerEvents:"none"});let Y=G.style.cursor,q=Math.min(8,C.capabilities.getMaxAnisotropy()),it=new nl,k=sN(C);it.environment=k.texture;let ot=new Tn(gE,1,.1,200),St=new ul(16777215,1.6);St.position.set(-2.5,4,6);let Tt=new ul(16777215,.35);Tt.position.set(3,-1,4),it.add(St,Tt);let Xt=new Map,Yt={front:null,back:null,strap:null},re=document.createElement("canvas"),ne=document.createElement("canvas"),Q=document.createElement("canvas"),nt=kv(re,q),Mt=kv(ne,q),It=kv(Q,q);It.wrapS=os,It.wrapT=us;let wt=aN(),jt=rN(),ce={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new N},foilFill:{value:new N},foilTop:{value:new N}},D=V=>{Object.assign(V.uniforms,ce),V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
${QU}`).replace("#include <project_vertex>",`#include <project_vertex>
${jU}`),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
${$U}`).replace("#include <opaque_fragment>",`${tN}
#include <opaque_fragment>`)},et=new Na({map:nt,normalMap:wt,normalScale:new gt(.06,.06)}),j=new Na({map:Mt,normalMap:wt,normalScale:new gt(.06,.06)});et.onBeforeCompile=D,j.onBeforeCompile=D;let Z=new Na,J=new cl({metalness:1}),dt=new Na({map:It,normalMap:jt,normalScale:new gt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new Qt(.32,.32,.34),side:hi}),st=new ls,ft=new ke(void 0,Z),Gt=new ke(void 0,et),Ft=new ke(void 0,j),T=new ke(new ll(bE,ZU,18,72),J);T.rotation.y=Math.PI/2-.7,st.add(ft,Gt,Ft,T),it.add(st);let M=iN(ks),P=new ke(M,dt);P.frustumCulled=!1,it.add(P);let H=new ls,tt=new ke(SE(Hv),J);tt.position.y=tp+pu/2-.004;let X=new ke(new ll(tp,.0105,14,40),J);H.add(tt,X),it.add(H);let at=cN(),ht=[],Rt=new N,Ct=new N,lt=new al(ht,!1,"centripetal"),pt={width:1,height:1},Dt=xE("portrait",.3),Et={},vt=Hv,qt=2,L=0,ut=performance.now(),mt=0,bt=!0,rt=!0,$=!1,Ut=!1,Ht=null,ve=0,ue=!1,fi=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Yn=()=>{let V=U.current,Lt=Vv(V.cardColor,[1,1,1]),Pt=vE,Ot=Math.round(vE*Dt.height/Dt.width);(re.width!==Pt||re.height!==Ot)&&(re.width=Pt,re.height=Ot,ne.width=Pt,ne.height=Ot,nt.dispose(),Mt.dispose()),ME(re,Yt.front,Lt,V.imageFit),ME(ne,Yt.back||Yt.front,Lt,V.imageFit),nt.needsUpdate=!0,Mt.needsUpdate=!0,Gi()},Sl=()=>{let V=U.current;qt=lN(Q,Yt.strap,Vv(V.strapColor,[.07,.07,.07])),jt.repeat.set(2,2*qt),It.dispose(),It.needsUpdate=!0,Gi()},Fi=()=>{if(W){let V=S.getBoundingClientRect(),Lt=G.getBoundingClientRect(),Pt=Math.max(1,G.clientWidth),Ot=Math.max(1,G.clientHeight);C.setSize(Pt,Ot,!1),ot.setViewOffset(pt.width,pt.height,Lt.left-V.left,Lt.top-V.top,Pt,Ot)}else C.setSize(pt.width,pt.height,!1),ot.clearViewOffset();ot.updateProjectionMatrix()},Nr=V=>{ue=V,z.style.touchAction=V?"none":"auto",W&&(z.style.pointerEvents=V?"auto":"none")},gu=()=>{let V=U.current,Lt=pt.width/pt.height,Pt=Dt.height/Pa(V.size,.15,.9),Ot=Dt.width/.72;Pt*Lt<Ot&&(Pt=Ot/Lt);let At=Pt*Lt;ot.aspect=Lt,ot.position.set(0,0,Pt/2/Math.tan(gE*Math.PI/360)),ot.lookAt(0,0,0),ot.updateProjectionMatrix(),ot.updateMatrixWorld(),ce.foilKey.value.set(-2.5,4,6).normalize().transformDirection(ot.matrixWorldInverse),ce.foilFill.value.set(3,-1,4).normalize().transformDirection(ot.matrixWorldInverse),ce.foilTop.value.set(.5,4.5,8).normalize().transformDirection(ot.matrixWorldInverse);let oe=((qU[V.anchor]??.5)-.5)*At,Zt=Pt/2+.2,Pe=Pt/2-Pt*du(.12,.42,Pa(V.strapLength,0,1))+(Dt.hangY-Dt.height/2);at.anchor.set(oe,Zt,0),fN(at,Dt,Zt-Pe),at.nodes[0].copy(at.anchor),at.previous[0].copy(at.anchor)},Ml=()=>{let V=U.current,Lt=`${V.orientation}|${V.cornerRadius}`;if(Lt!==Et.layoutKey){Dt=xE(V.orientation,V.cornerRadius);let Pe=nN(Dt);ft.geometry.dispose(),Gt.geometry.dispose(),Ft.geometry.dispose(),ft.geometry=Pe.body,Gt.geometry=Pe.face,Ft.geometry=Pe.face.clone(),Gt.position.z=mu/2+In+6e-4,Ft.rotation.y=Math.PI,Ft.position.z=-(mu/2+In+6e-4),T.position.set(0,Dt.ringY,0),Et.framingKey=""}let Pt=`${Lt}|${V.size}|${V.anchor}|${V.strapLength}|${pt.width}|${pt.height}`;Pt!==Et.framingKey&&(gu(),$?Lt!==Et.layoutKey&&Xv(at,Dt,!1):(Xv(at,Dt,V.intro&&!fi),$=!0));let Ot=`${V.frontImage}|${V.backImage}|${V.strapImage}`;if(Ot!==Et.imageKey){let Pe=++ve;Promise.all([Gv(Xt,V.frontImage),Gv(Xt,V.backImage),Gv(Xt,V.strapImage)]).then(([nn,ki,Ee])=>{!rt||Pe!==ve||(Yt.front=nn,Yt.back=ki,Yt.strap=Ee,Yn(),Sl())})}let At=`${Lt}|${V.cardColor}|${V.imageFit}`;At!==Et.faceKey&&Yn(),V.strapColor!==Et.strapColor&&Sl();let oe=_E[V.finish]||_E.glossy,Zt=Vv(V.cardColor,[1,1,1]);[et,j].forEach(Pe=>{Pe.roughness=oe.roughness,Pe.metalness=oe.metalness,Pe.clearcoat=oe.clearcoat,Pe.clearcoatRoughness=oe.clearcoatRoughness,Pe.anisotropy=oe.anisotropy}),ce.foilStrength.value=oe.foil,ce.foilAspect.value=Dt.height/Dt.width,Z.color.setRGB(Zt[0]*.92,Zt[1]*.92,Zt[2]*.92,_n),Z.roughness=Math.min(oe.roughness,.35),Z.metalness=oe.metalness,Z.clearcoat=1,Z.clearcoatRoughness=.08;let Xe=yE[V.metal]||yE.silver;J.color.set(Xe.color),J.roughness=Xe.roughness,vt=Hv*Pa(V.strapWidth,.4,2),vt!==Et.strapScale&&(tt.geometry.dispose(),tt.geometry=SE(vt)),z.style.touchAction=V.interactive&&ue?"none":"auto",Fi(),Et={layoutKey:Lt,framingKey:Pt,imageKey:Ot,faceKey:At,strapColor:V.strapColor,strapScale:vt},Gi()},Hi=Array.from({length:ks},()=>new N),Lr=Array.from({length:ks},()=>new N),Or=JU.map(V=>[Math.cos(V),Math.sin(V)]),Vi={tangent:new N,toCamera:new N,basis:new Le,up:new N,across:new N,facing:new N,end:new N},vu=()=>{let V=at.nodes[Ke],Lt=tp+pu+.05,Pt=Ke-1;for(;Pt>0&&at.nodes[Pt].distanceTo(V)<Lt*1.1;)Pt--;let Ot=Vi.up.subVectors(at.nodes[Pt],V);Ot.lengthSq()<1e-8&&Ot.set(0,1,0).applyQuaternion(at.body.quaternion),Ot.normalize(),Rt.copy(V).addScaledVector(Ot,Lt),Ct.copy(V).addScaledVector(Ot,tp+pu*.35),ht.length=0;for(let de=0;de<=Pt;de++)ht.push(at.nodes[de]);ht.push(Rt,Ct),lt.updateArcLengths();for(let de=0;de<ks;de++)lt.getPointAt(de/(ks-1),Hi[de]);let At=lt.getLength(),oe=1-Rt.distanceTo(Ct)/Math.max(At,.001),Zt=M.getAttribute("position"),Xe=M.getAttribute("normal"),Pe=M.getAttribute("uv"),nn=ep.length,ki=at.rest*Ke,Ee=ki/(vt*qt),Pn=vt/Math.pow(Math.max(1,At/Math.max(ki,.001)),.35),{tangent:qe,toCamera:sn,across:Te,facing:di}=Vi;for(let de=0;de<ks;de++){qe.subVectors(Hi[Math.min(ks-1,de+1)],Hi[Math.max(0,de-1)]),qe.lengthSq()<1e-12&&qe.set(0,-1,0),qe.normalize(),sn.subVectors(ot.position,Hi[de]).normalize();let za=Lr[de].crossVectors(sn,qe);za.lengthSq()<1e-10&&za.copy(de>0?Lr[de-1]:Me.a.set(1,0,0)),za.normalize(),de>0&&za.dot(Lr[de-1])<0&&za.negate();let Zv=-at.twist*Math.pow(Math.min(1,de/(ks-1)/oe),1.3);di.crossVectors(qe,za),Te.copy(za).multiplyScalar(Math.cos(Zv)).addScaledVector(di,Math.sin(Zv)),di.crossVectors(qe,Te);let op=Hi[de],UE=(1-de/(ks-1))*Ee;for(let Pr=0;Pr<nn;Pr++){let lp=de*nn+Pr,cp=(ep[Pr]-.5)*Pn,[up,hp]=Or[Pr];Zt.setXYZ(lp,op.x+Te.x*cp,op.y+Te.y*cp,op.z+Te.z*cp),Xe.setXYZ(lp,di.x*up+Te.x*hp,di.y*up+Te.y*hp,di.z*up+Te.z*hp),Pe.setXY(lp,ep[Pr],UE)}}Vi.end.copy(Te),Zt.needsUpdate=!0,Xe.needsUpdate=!0,Pe.needsUpdate=!0,Te.copy(Vi.end).addScaledVector(Ot,-Vi.end.dot(Ot)).normalize(),di.crossVectors(Te,Ot).normalize(),Vi.basis.makeBasis(Te,Ot,di),H.quaternion.setFromRotationMatrix(Vi.basis),H.position.copy(V)},_u=()=>{st.position.copy(at.body.position),st.quaternion.copy(at.body.quaternion),vu(),C.render(it,ot)},rp=()=>{let V=U.current,Lt=40*Pa(V.gravity,0,3),Pt=Math.max(Lt,20),Ot=Pa(V.elasticity,0,1),At=Pa(V.damping,0,1);return{gravity:Lt,hold:Pt*du(2.2,5.5,Ot),stiffness:Pt*10*Ke,spring:Pt*du(.1,.4,Ot)*Ke,bandDamping:Pt*du(.3,.08,Ot)*Ke,linearDrag:.25*Math.pow(16,At),angularDrag:.5*Math.pow(12,At),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:fi?0:Pa(V.breeze,0,1)}},yu=V=>{if(L=0,!rt)return;let Lt=Math.min(1/30,Math.max(1/240,(V-ut)/1e3));ut=V,mt+=Lt;let Pt=rp();dN(at,Lt,Pt,mt);let Ot=at.body;Number.isFinite(Ot.position.x+Ot.position.y+Ot.position.z+Ot.quaternion.w)||(at.grab=null,Xv(at,Dt,!1)),_u();let At=at.calm>1.2&&!at.grab&&Pt.breeze===0;bt&&!At&&(L=requestAnimationFrame(yu))},Gi=()=>{L||!bt||!rt||(at.calm=0,ut=performance.now(),L=requestAnimationFrame(yu))},bl=new su,Ir=new gt,b=V=>{let Lt=z.getBoundingClientRect();Ir.set((V.clientX-Lt.left)/Lt.width*2-1,-((V.clientY-Lt.top)/Lt.height)*2+1),bl.setFromCamera(Ir,ot)},O=()=>Math.abs(Ir.x)>1||Math.abs(Ir.y)>1?null:(st.updateMatrixWorld(),bl.intersectObjects([ft,Gt,Ft],!1)[0]||null),B=V=>{z.style.cursor!==V&&(z.style.cursor=V),W&&(G.style.cursor=V||Y)},F=V=>{let Lt=at.body,Pt=Me.a.set(0,1,0).applyQuaternion(Lt.quaternion),Ot=at.turn>0?-1:1;if(at.turn===0){let At=Me.c.subVectors(V,ot.position).normalize();Ot=Me.b.subVectors(V,Lt.position).cross(At).dot(Pt)<0?-1:1}at.turn=at.turn===0?Math.PI*Ot:0,Lt.angular.addScaledVector(Pt,KU*Ot)},I=V=>{if(!U.current.interactive||V.button>0||V.defaultPrevented||V.target.closest?.("a, button, input, textarea, select, [contenteditable]"))return;b(V);let Lt=O();Lt&&(at.grab={local:Lt.point.clone().sub(at.body.position).applyQuaternion(at.body.quaternion.clone().invert()),rotation:at.body.quaternion.clone(),reach:Lt.distance,from:Lt.point.clone(),target:Lt.point.clone()},Ht={x:V.clientX,y:V.clientY,time:performance.now(),point:Lt.point.clone()},Nr(!0),z.setPointerCapture?.(V.pointerId),B("grabbing"),V.preventDefault(),Gi())},ct=V=>{if(U.current.interactive){if(b(V),at.grab){Ht&&Math.hypot(V.clientX-Ht.x,V.clientY-Ht.y)>6&&(Ht=null),bl.ray.at(at.grab.reach,at.grab.target),Gi();return}V.pointerType!=="touch"&&(Ut=!!O(),B(Ut?"grab":""))}},_t=V=>{at.grab&&(at.grab=null,Ht&&V.type==="pointerup"&&performance.now()-Ht.time<450&&F(Ht.point),Ht=null,z.hasPointerCapture?.(V.pointerId)&&z.releasePointerCapture(V.pointerId),Nr(!1),B(Ut&&V.pointerType!=="touch"?"grab":""),Gi())},Nt=V=>{!U.current.interactive||V.touches.length!==1||V.target.closest?.("a, button, input, textarea, select, [contenteditable]")||(b(V.touches[0]),O()&&V.preventDefault())},yt=W?document:z;yt.addEventListener("pointerdown",I),yt.addEventListener("pointermove",ct),yt.addEventListener("pointerup",_t),yt.addEventListener("pointercancel",_t),z.addEventListener("lostpointercapture",_t),yt.addEventListener("touchstart",Nt,{passive:!1});let Bt=()=>{pt.width=Math.max(1,S.clientWidth),pt.height=Math.max(1,S.clientHeight),C.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Ml(),Fi(),_u()},Vt=new ResizeObserver(Bt);Vt.observe(S),W&&Vt.observe(G),window.addEventListener("resize",Bt);let zt=new IntersectionObserver(([V])=>{bt=V.isIntersecting,bt&&Gi()});zt.observe(G);let te=()=>{document.hidden||Gi()};return document.addEventListener("visibilitychange",te),E.current=Ml,Bt(),()=>{rt=!1,cancelAnimationFrame(L),E.current=null,Vt.disconnect(),window.removeEventListener("resize",Bt),G.style.cursor=Y,zt.disconnect(),document.removeEventListener("visibilitychange",te),yt.removeEventListener("pointerdown",I),yt.removeEventListener("pointermove",ct),yt.removeEventListener("pointerup",_t),yt.removeEventListener("pointercancel",_t),z.removeEventListener("lostpointercapture",_t),yt.removeEventListener("touchstart",Nt),[ft,Gt,Ft,T,tt,X,P].forEach(V=>V.geometry?.dispose()),[et,j,Z,J,dt].forEach(V=>V.dispose()),[nt,Mt,It,wt,jt].forEach(V=>V.dispose()),k.dispose(),C.dispose(),z.parentNode&&z.parentNode.removeChild(z)}},[]),(0,CE.jsx)("div",{ref:w,className:`lanyard ${y}`.trim(),style:R})},RE=pN;var sp=Ba(fu()),ip=document.getElementById("portfolio-lanyard"),Yv=e=>new URL(`../../assets/images/${e}`,import.meta.url).href;function mN(){let e=(0,ap.useRef)(null);return(0,ap.useEffect)(()=>{let t=document.getElementById("inicio"),n=new MutationObserver(()=>{t?.querySelector(".lanyard-canvas")&&(ip.classList.add("is-ready"),n.disconnect())});return n.observe(t,{childList:!0,subtree:!0}),t.querySelector(".lanyard-canvas")&&ip.classList.add("is-ready"),()=>n.disconnect()},[]),(0,sp.jsx)("div",{ref:e,className:"portfolio-lanyard-scene",children:(0,sp.jsx)(RE,{frontImage:Yv("card-front.png"),backImage:Yv("card-back.png"),strapImage:Yv("band.png"),renderArea:"#inicio",anchor:"center",cardColor:"#271a36",strapColor:"#7444a2",metal:"silver",finish:"glossy",size:.72,strapLength:.4,strapWidth:.65,breeze:.12,damping:.65,interactive:!0,intro:!0})})}ip&&(0,DE.createRoot)(ip.querySelector(".portfolio-lanyard-mount")).render((0,sp.jsx)(mN,{}));
/*! For license information please see lanyard.js.LEGAL.txt */
