// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Math.abs(r)}function t(r){return r!=r}var n=Math.floor,e=Math.ceil;function o(r){return r<0?e(r):n(r)}var a=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;function u(r){return r===i||r===a}var f="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty,l=Object.prototype,y=l.toString,v=l.__defineGetter__,p=l.__defineSetter__,b=l.__lookupGetter__,A=l.__lookupSetter__;var _=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?c:function(r,t,n){var e,o,a,i;if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===y.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(b.call(r,t)||A.call(r,t)?(e=r.__proto__,r.__proto__=l,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,i="set"in n,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&v&&v.call(r,t,n.get),i&&p&&p.call(r,t,n.set),r};function s(r,t,n){_(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var m=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol.toStringTag:"";var h=w&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return m.call(r);n=r[U],a=U,t=null!=(o=r)&&d.call(o,a);try{r[U]=void 0}catch(t){return m.call(r)}return e=m.call(r),t?r[U]=n:delete r[U],e}:function(r){return m.call(r)},g="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null;var I,O="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var r,t,n;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(g&&n instanceof Uint32Array||"[object Uint32Array]"===h(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S=I,E="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var N,H="function"==typeof Float64Array?Float64Array:void 0;N=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F([1,3.14,-3.14,NaN]),n=t,r=(E&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?H:function(){throw new Error("not implemented")};var T=N,G="function"==typeof Uint8Array;var P="function"==typeof Uint8Array?Uint8Array:null;var L,V="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,256,257]),n=t,r=(G&&n instanceof Uint8Array||"[object Uint8Array]"===h(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W=L,M="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var x,Y="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,65536,65537]),n=t,r=(M&&n instanceof Uint16Array||"[object Uint16Array]"===h(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var C,q={uint16:x,uint8:W};(C=new q.uint16(1))[0]=4660;var z,B,D=52===new q.uint8(C.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new T(1),Q=new S(K.buffer),R=J.HIGH,X=J.LOW;function Z(r,t,n,e){return K[0]=r,t[e]=Q[R],t[e+n]=Q[X],t}function $(r){return Z(r,[0,0],1,0)}s($,"assign",Z);var rr,tr,nr=!0===D?1:0,er=new T(1),or=new S(er.buffer);function ar(r){return er[0]=r,or[nr]}!0===D?(rr=1,tr=0):(rr=0,tr=1);var ir={HIGH:rr,LOW:tr},ur=new T(1),fr=new S(ur.buffer),cr=ir.HIGH,lr=ir.LOW;function yr(r,t){return fr[cr]=r,fr[lr]=t,ur[0]}var vr=[0,0];function pr(n,e,o,a){return t(n)||u(n)?(e[a]=n,e[a+o]=0,e):0!==n&&r(n)<22250738585072014e-324?(e[a]=4503599627370496*n,e[a+o]=-52,e):(e[a]=n,e[a+o]=0,e)}s((function(r){return pr(r,[0,0],1,0)}),"assign",pr);var br=[0,0],Ar=[0,0];function _r(r,n){var e,o,f,c,l,y;return 0===n||0===r||t(r)||u(r)?r:(pr(r,br,1,0),n+=br[1],n+=function(r){var t=ar(r);return(t=(2146435072&t)>>>20)-1023|0}(r=br[0]),n<-1074?(f=0,c=r,$.assign(f,vr,1,0),l=vr[0],l&=2147483647,y=ar(c),yr(l|=y&=2147483648,vr[1])):n>1023?r<0?a:i:(n<=-1023?(n+=52,o=2220446049250313e-31):o=1,$.assign(r,Ar,1,0),e=Ar[0],e&=2148532223,o*yr(e|=n+1023<<20,Ar[1])))}function sr(r){var n;return t(r)||r===i?r:r===a?0:r>709.782712893384?i:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,a,i;return _r(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(n=o(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function wr(t){return 1/function(t){var n,e;if((e=r(t))>44.014845965556525)return t<0?-1:1;if(e>=.625)e=1-2/((n=sr(2*e))+1),t<0&&(e=-e);else{if(0===t)return t;e=t+t*(n=t*t)*function(r){var t,n;return 0===r?-.3333333333333332:((r<0?-r:r)<=1?(t=r*(r*(0*r-.9643991794250523)-99.28772310019185)-1614.6876844170845,n=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+1*r))):(t=0+(r=1/r)*(r*(-1614.6876844170845*r-99.28772310019185)-.9643991794250523),n=1+r*(112.81167849163293+r*(2235.4883906010045+4844.063053251255*r))),t/n)}(n)}return e}(t)}export{wr as default};
//# sourceMappingURL=mod.js.map
