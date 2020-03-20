var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */!function(t){!function(){var r="object"==typeof n?n:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),e=i(t);function i(t,n){return function(r,e){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:e}),n&&n(r,e)}}void 0===r.Reflect?r.Reflect=t:e=i(r.Reflect,e),function(t){var n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,e=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",u="function"==typeof Object.create,o={__proto__:[]}instanceof Array,f=!u&&!o,c={create:u?function(){return z(Object.create(null))}:o?function(){return z({__proto__:null})}:function(){return z({})},has:f?function(t,r){return n.call(t,r)}:function(t,n){return n in t},get:f?function(t,r){return n.call(t,r)?t[r]:void 0}:function(t,n){return t[n]}},a=Object.getPrototypeOf(Function),s="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=s||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},n=[],r=function(){function t(t,n,r){this._index=0,this._keys=t,this._values=n,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=n,this._values=n):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=n,this._values=n),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=n,this._values=n),{value:t,done:!0}},t}();return function(){function n(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(n.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),n.prototype.has=function(t){return this._find(t,!1)>=0},n.prototype.get=function(t){var n=this._find(t,!1);return n>=0?this._values[n]:void 0},n.prototype.set=function(t,n){var r=this._find(t,!0);return this._values[r]=n,this},n.prototype.delete=function(n){var r=this._find(n,!1);if(r>=0){for(var e=this._keys.length,i=r+1;i<e;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,n===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},n.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},n.prototype.keys=function(){return new r(this._keys,this._values,e)},n.prototype.values=function(){return new r(this._keys,this._values,u)},n.prototype.entries=function(){return new r(this._keys,this._values,o)},n.prototype["@@iterator"]=function(){return this.entries()},n.prototype[i]=function(){return this.entries()},n.prototype._find=function(t,n){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&n&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},n}();function e(t){return t}function u(t,n){return n}function o(t,n){return[t,n]}}():Map,y=s||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new h}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,v=new(s||"function"!=typeof WeakMap?function(){var t=c.create(),r=e();return function(){function t(){this._key=e()}return t.prototype.has=function(t){var n=i(t,!1);return void 0!==n&&c.has(n,this._key)},t.prototype.get=function(t){var n=i(t,!1);return void 0!==n?c.get(n,this._key):void 0},t.prototype.set=function(t,n){return i(t,!0)[this._key]=n,this},t.prototype.delete=function(t){var n=i(t,!1);return void 0!==n&&delete n[this._key]},t.prototype.clear=function(){this._key=e()},t}();function e(){var n;do{n="@@WeakMap@@"+o()}while(c.has(t,n));return t[n]=!0,n}function i(t,e){if(!n.call(t,r)){if(!e)return;Object.defineProperty(t,r,{value:c.create()})}return t[r]}function u(t,n){for(var r=0;r<n;++r)t[r]=255*Math.random()|0;return t}function o(){var t="function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(16)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(16)):u(new Uint8Array(16),16):u(Array(16),16);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var n="",r=0;r<16;++r){var e=t[r];4!==r&&6!==r&&8!==r||(n+="-"),e<16&&(n+="0"),n+=e.toString(16).toLowerCase()}return n}}():WeakMap);function w(t,n,r){var e=v.get(t);if(E(e)){if(!r)return;e=new h,v.set(t,e)}var i=e.get(n);if(E(i)){if(!r)return;i=new h,e.set(n,i)}return i}function p(t,n,r){var e=w(n,r,!1);return!E(e)&&function(t){return!!t}(e.has(t))}function l(t,n,r){var e=w(n,r,!1);if(!E(e))return e.get(t)}function d(t,n,r,e){w(r,e,!0).set(t,n)}function b(t,n){var r=[],e=w(t,n,!1);if(E(e))return r;for(var u=function(t){var n=S(t,i);if(!m(n))throw new TypeError;var r=n.call(t);if(!g(r))throw new TypeError;return r}(e.keys()),o=0;;){var f=U(u);if(!f)return r.length=o,r;var c=_(f);try{r[o]=c}catch(a){try{k(u)}finally{throw a}}o++}}function T(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function E(t){return void 0===t}function j(t){return null===t}function g(t){return"object"==typeof t?null!==t:"function"==typeof t}function O(t){var n=function(t){switch(T(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var n=S(t,e);if(void 0!==n){var r=n.call(t,"string");if(g(r))throw new TypeError;return r}return function(t){var n,r,e=t.toString;if(m(e)&&!g(r=e.call(t)))return r;if(m(n=t.valueOf)&&!g(r=n.call(t)))return r;throw new TypeError}(t)}(t);return function(t){return"symbol"==typeof t}(n)?n:function(t){return""+t}(n)}function M(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function m(t){return"function"==typeof t}function A(t){return"function"==typeof t}function S(t,n){var r=t[n];if(null!=r){if(!m(r))throw new TypeError;return r}}function _(t){return t.value}function U(t){var n=t.next();return!n.done&&n}function k(t){var n=t.return;n&&n.call(t)}function W(t){var n=Object.getPrototypeOf(t);if("function"!=typeof t||t===a)return n;if(n!==a)return n;var r=t.prototype,e=r&&Object.getPrototypeOf(r);if(null==e||e===Object.prototype)return n;var i=e.constructor;return"function"!=typeof i||i===t?n:i}function z(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,n,r,e){if(E(r)){if(!M(t))throw new TypeError;if(!A(n))throw new TypeError;return function(t,n){for(var r=t.length-1;r>=0;--r){var e=(0,t[r])(n);if(!E(e)&&!j(e)){if(!A(e))throw new TypeError;n=e}}return n}(t,n)}if(!M(t))throw new TypeError;if(!g(n))throw new TypeError;if(!g(e)&&!E(e)&&!j(e))throw new TypeError;return j(e)&&(e=void 0),function(t,n,r,e){for(var i=t.length-1;i>=0;--i){var u=(0,t[i])(n,r,e);if(!E(u)&&!j(u)){if(!g(u))throw new TypeError;e=u}}return e}(t,n,r=O(r),e)})),t("metadata",(function(t,n){return function(r,e){if(!g(r))throw new TypeError;if(!E(e)&&!function(t){switch(T(t)){case 3:case 4:return!0;default:return!1}}(e))throw new TypeError;d(t,n,r,e)}})),t("defineMetadata",(function(t,n,r,e){if(!g(r))throw new TypeError;return E(e)||(e=O(e)),d(t,n,r,e)})),t("hasMetadata",(function(t,n,r){if(!g(n))throw new TypeError;return E(r)||(r=O(r)),function t(n,r,e){if(p(n,r,e))return!0;var i=W(r);return!j(i)&&t(n,i,e)}(t,n,r)})),t("hasOwnMetadata",(function(t,n,r){if(!g(n))throw new TypeError;return E(r)||(r=O(r)),p(t,n,r)})),t("getMetadata",(function(t,n,r){if(!g(n))throw new TypeError;return E(r)||(r=O(r)),function t(n,r,e){if(p(n,r,e))return l(n,r,e);var i=W(r);return j(i)?void 0:t(n,i,e)}(t,n,r)})),t("getOwnMetadata",(function(t,n,r){if(!g(n))throw new TypeError;return E(r)||(r=O(r)),l(t,n,r)})),t("getMetadataKeys",(function(t,n){if(!g(t))throw new TypeError;return E(n)||(n=O(n)),function t(n,r){var e=b(n,r),i=W(n);if(null===i)return e;var u=t(i,r);if(u.length<=0)return e;if(e.length<=0)return u;for(var o=new y,f=[],c=0,a=e;c<a.length;c++)o.has(v=a[c])||(o.add(v),f.push(v));for(var s=0,h=u;s<h.length;s++){var v;o.has(v=h[s])||(o.add(v),f.push(v))}return f}(t,n)})),t("getOwnMetadataKeys",(function(t,n){if(!g(t))throw new TypeError;return E(n)||(n=O(n)),b(t,n)})),t("deleteMetadata",(function(t,n,r){if(!g(n))throw new TypeError;E(r)||(r=O(r));var e=w(n,r,!1);if(E(e))return!1;if(!e.delete(t))return!1;if(e.size>0)return!0;var i=v.get(n);return i.delete(r),i.size>0||v.delete(n),!0}))}(e)}()}(t||(t={}));