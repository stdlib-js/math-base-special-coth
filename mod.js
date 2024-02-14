// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor,t=Math.ceil;function e(e){return e<0?t(e):r(e)}var n=Number,a=n.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY,c=n.NEGATIVE_INFINITY;var u=Number.POSITIVE_INFINITY,f=n.NEGATIVE_INFINITY;function l(r){return r===u||r===f}var s="function"==typeof Object.defineProperty?Object.defineProperty:null;var p=Object.defineProperty;function y(r){return"number"==typeof r}function v(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function g(r,t,e){var n=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+v(a):v(a)+r,n&&(r="-"+r)),r}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!y(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=g(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=g(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===h.call(r.specifier)?h.call(e):d.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function b(r){return"string"==typeof r}var A=Math.abs,m=String.prototype.toLowerCase,F=String.prototype.toUpperCase,I=String.prototype.replace,E=/e\+(\d)$/,_=/e-(\d)$/,N=/^(\d+)$/,S=/^(\d+)e/,U=/\.0$/,T=/\.0*e/,j=/(\..*[^0])0*e/;function k(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":A(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=I.call(e,j,"$1e"),e=I.call(e,T,"e"),e=I.call(e,U,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=I.call(e,E,"e+0$1"),e=I.call(e,_,"e-0$1"),r.alternate&&(e=I.call(e,N,"$1."),e=I.call(e,S,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===F.call(r.specifier)?F.call(e):m.call(e)}function x(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function O(r,t,e){var n=t-r.length;return n<0?r:r=e?r+x(n):x(n)+r}var V=String.fromCharCode,G=isNaN,H=Array.isArray;function W(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function $(r){var t,e,n,a,i,o,c,u,f;if(!H(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(b(n=r[u]))o+=n;else{if(t=void 0!==n.precision,!(n=W(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(a=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,G(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,G(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!G(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=G(i)?String(n.arg):V(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=g(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function C(r){var t,e,n,a;for(e=[],a=0,n=L.exec(r);n;)(t=r.slice(a,L.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),a=L.lastIndex,n=L.exec(r);return(t=r.slice(a)).length&&e.push(t),e}function R(r){return"string"==typeof r}function Y(r){var t,e;if(!R(r))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[C(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return $.apply(null,t)}var M=Object.prototype,Z=M.toString,X=M.__defineGetter__,z=M.__defineSetter__,q=M.__lookupGetter__,B=M.__lookupSetter__;var D=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?p:function(r,t,e){var n,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((a="value"in e)&&(q.call(r,t)||B.call(r,t)?(n=r.__proto__,r.__proto__=M,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,o="set"in e,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&X&&X.call(r,t,e.get),o&&z&&z.call(r,t,e.set),r};function J(r,t,e){D(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var tr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof tr?tr.toStringTag:"";var nr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,a,i;if(null==r)return Q.call(r);e=r[er],i=er,t=null!=(a=r)&&rr.call(a,i);try{r[er]=void 0}catch(t){return Q.call(r)}return n=Q.call(r),t?r[er]=e:delete r[er],n}:function(r){return Q.call(r)},ar="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var or,cr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,t,e;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(ar&&e instanceof Uint32Array||"[object Uint32Array]"===nr(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var ur=or,fr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var sr,pr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,t,e;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,NaN]),e=t,r=(fr&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr=sr,vr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var dr,hr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,e;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,256,257]),e=t,r=(vr&&e instanceof Uint8Array||"[object Uint8Array]"===nr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr=dr,br="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var mr,Fr="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,t,e;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),e=t,r=(br&&e instanceof Uint16Array||"[object Uint16Array]"===nr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Ir,Er={uint16:mr,uint8:wr};(Ir=new Er.uint16(1))[0]=4660;var _r,Nr,Sr=52===new Er.uint8(Ir.buffer)[0];!0===Sr?(_r=1,Nr=0):(_r=0,Nr=1);var Ur={HIGH:_r,LOW:Nr},Tr=new yr(1),jr=new ur(Tr.buffer),kr=Ur.HIGH,xr=Ur.LOW;function Or(r,t,e,n){return Tr[0]=r,t[n]=jr[kr],t[n+e]=jr[xr],t}function Vr(r){return Or(r,[0,0],1,0)}J(Vr,"assign",Or);var Gr="function"==typeof Float64Array;var Hr="function"==typeof Float64Array?Float64Array:null;var Wr,$r="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Hr)return!1;try{t=new Hr([1,3.14,-3.14,NaN]),e=t,r=(Gr&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Lr=!0===Sr?1:0,Pr=new Wr(1),Cr=new ur(Pr.buffer);function Rr(r){return Pr[0]=r,Cr[Lr]}var Yr="function"==typeof Float64Array;var Mr="function"==typeof Float64Array?Float64Array:null;var Zr,Xr,zr,qr="function"==typeof Float64Array?Float64Array:void 0;Zr=function(){var r,t,e;if("function"!=typeof Mr)return!1;try{t=new Mr([1,3.14,-3.14,NaN]),e=t,r=(Yr&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")},!0===Sr?(Xr=1,zr=0):(Xr=0,zr=1);var Br={HIGH:Xr,LOW:zr},Dr=new Zr(1),Jr=new ur(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW;function rt(r,t){return Jr[Kr]=r,Jr[Qr]=t,Dr[0]}var tt=[0,0];function et(r,t,e,n){return function(r){return r!=r}(r)||l(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}J((function(r){return et(r,[0,0],1,0)}),"assign",et);var nt="function"==typeof Float64Array;var at="function"==typeof Float64Array?Float64Array:null;var it,ot,ct,ut="function"==typeof Float64Array?Float64Array:void 0;it=function(){var r,t,e;if("function"!=typeof at)return!1;try{t=new at([1,3.14,-3.14,NaN]),e=t,r=(nt&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ut:function(){throw new Error("not implemented")},!0===Sr?(ot=1,ct=0):(ot=0,ct=1);var ft={HIGH:ot,LOW:ct},lt=new it(1),st=new ur(lt.buffer),pt=ft.HIGH,yt=ft.LOW;function vt(r,t,e,n){return lt[0]=r,t[n]=st[pt],t[n+e]=st[yt],t}function gt(r){return vt(r,[0,0],1,0)}J(gt,"assign",vt);var dt=[0,0],ht=[0,0];function wt(r,t){var e,n,a;return 0===t||0===r||(a=r)!=a||l(r)?r:(et(r,dt,1,0),t+=dt[1],t+=function(r){var t=Rr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=dt[0]),t<-1074?function(r,t){var e,n;return Vr.assign(r,tt,1,0),e=tt[0],e&=2147483647,n=Rr(t),rt(e|=n&=2147483648,tt[1])}(0,r):t>1023?r<0?c:o:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,gt.assign(r,ht,1,0),e=ht[0],e&=2148532223,n*rt(e|=t+1023<<20,ht[1])))}function bt(r){var t;return function(r){return r!=r}(r)||r===i?r:r===a?0:r>709.782712893384?i:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,e){var n,a,i,o;return wt(1-(t-(n=r-t)*(i=n-(a=n*n)*(0===(o=a)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(t=e(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function At(r){var t,e;if(e=function(r){return Math.abs(r)}(r),e>44.014845965556525)return r<0?-1:1;if(e>=.625)e=1-2/((t=bt(2*e))+1),r<0&&(e=-e);else{if(0===r)return r;e=r+r*(t=r*r)*function(r){var t,e;return 0===r?-.3333333333333332:((r<0?-r:r)<=1?(t=r*(r*(0*r-.9643991794250523)-99.28772310019185)-1614.6876844170845,e=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+1*r))):(t=0+(r=1/r)*(r*(-1614.6876844170845*r-99.28772310019185)-.9643991794250523),e=1+r*(112.81167849163293+r*(2235.4883906010045+4844.063053251255*r))),t/e)}(t)}return e}function mt(r){return 1/At(r)}export{mt as default};
//# sourceMappingURL=mod.js.map
