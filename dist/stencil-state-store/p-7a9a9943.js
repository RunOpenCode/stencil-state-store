class t{constructor(){this.resolve=t=>{this._resolve(t)},this.reject=t=>{this._reject(t)},this._promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}then(t,s){return this._promise.then(t,s)}catch(t){return this._promise.catch(t)}finally(t){return this._promise.finally(t)}}class s{constructor(t,s,e){this._name=t,this._property=s,this._consumer=e}get name(){return this._name}get consumer(){return this._consumer}get property(){return this._property}}function e(s){return function(e,r){let n=Reflect.getMetadata("@runopencode:state:consume:requests",e)||[],h=new i(s,r),o=`__${r}__`;n.push(h),Reflect.defineMetadata("@runopencode:state:consume:requests",n,e),delete e.constructor.prototype[r],Object.defineProperty(e.constructor.prototype,r,{configurable:!0,enumerable:!0,get:function(){return this[o]||Object.defineProperty(this,o,{value:new t,enumerable:!1,writable:!1}),this[o]}})}}function r(t){let e=[];return Reflect.getMetadata("@runopencode:state:consume:requests",t).forEach(r=>{let i=new s(r.name,r.property,t);e.push(i)}),e}class i{constructor(t,s){this._name=t,this._property=s}get name(){return this._name}get property(){return this._property}}function n(t){return"function"==typeof t}let h=!1;const o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else h&&console.log("RxJS: Back to a better error behavior. Thank you. <3");h=t},get useDeprecatedSynchronousErrorHandling(){return h}};function c(t){setTimeout(()=>{throw t},0)}const u={closed:!0,next(t){},error(t){if(o.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete(){}},l=Array.isArray||(t=>t&&"number"==typeof t.length),a=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,s)=>`${s+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();class f{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:s,_unsubscribe:e,_subscriptions:r}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,s instanceof f)s.remove(this);else if(null!==s)for(let n=0;n<s.length;++n)s[n].remove(this);if(n(e))try{e.call(this)}catch(h){t=h instanceof a?b(h.errors):[h]}if(l(r)){let s=-1,e=r.length;for(;++s<e;){const e=r[s];if(null!==(i=e)&&"object"==typeof i)try{e.unsubscribe()}catch(h){t=t||[],h instanceof a?t=t.concat(b(h.errors)):t.push(h)}}}var i;if(t)throw new a(t)}add(t){let s=t;if(!t)return f.EMPTY;switch(typeof t){case"function":s=new f(t);case"object":if(s===this||s.closed||"function"!=typeof s.unsubscribe)return s;if(this.closed)return s.unsubscribe(),s;if(!(s instanceof f)){const t=s;s=new f,s._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:e}=s;if(null===e)s._parentOrParents=this;else if(e instanceof f){if(e===this)return s;s._parentOrParents=[e,this]}else{if(-1!==e.indexOf(this))return s;e.push(this)}const r=this._subscriptions;return null===r?this._subscriptions=[s]:r.push(s),s}remove(t){const s=this._subscriptions;if(s){const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}}function b(t){return t.reduce((t,s)=>t.concat(s instanceof a?s.errors:s),[])}f.EMPTY=function(t){return t.closed=!0,t}(new f);const p="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random();class w extends f{constructor(t,s,e){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=u;break;case 1:if(!t){this.destination=u;break}if("object"==typeof t){t instanceof w?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new d(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new d(this,t,s,e)}}[p](){return this}static create(t,s,e){const r=new w(t,s,e);return r.syncErrorThrowable=!1,r}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class d extends w{constructor(t,s,e,r){let i;super(),this._parentSubscriber=t;let h=this;n(s)?i=s:s&&(i=s.next,e=s.error,r=s.complete,s!==u&&(h=Object.create(s),n(h.unsubscribe)&&this.add(h.unsubscribe.bind(h)),h.unsubscribe=this.unsubscribe.bind(this))),this._context=h,this._next=i,this._error=e,this._complete=r}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:s}=this;o.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable?this.__tryOrSetError(s,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:s}=this,{useDeprecatedSynchronousErrorHandling:e}=o;if(this._error)e&&s.syncErrorThrowable?(this.__tryOrSetError(s,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(s.syncErrorThrowable)e?(s.syncErrorValue=t,s.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),e)throw t;c(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const s=()=>this._complete.call(this._context);o.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,s),this.unsubscribe()):(this.__tryOrUnsub(s),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,s){try{t.call(this._context,s)}catch(e){if(this.unsubscribe(),o.useDeprecatedSynchronousErrorHandling)throw e;c(e)}}__tryOrSetError(t,s,e){if(!o.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{s.call(this._context,e)}catch(r){return o.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(c(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const y="function"==typeof Symbol&&Symbol.observable||"@@observable";function _(){}class m{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(t){const s=new m;return s.source=this,s.operator=t,s}subscribe(t,s,e){const{operator:r}=this,i=function(t,s,e){if(t){if(t instanceof w)return t;if(t[p])return t[p]()}return t||s||e?new w(t,s,e):new w(u)}(t,s,e);if(i.add(r?r.call(i,this.source):this.source||o.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),o.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i}_trySubscribe(t){try{return this._subscribe(t)}catch(s){o.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=s),function(t){for(;t;){const{closed:s,destination:e,isStopped:r}=t;if(s||r)return!1;t=e&&e instanceof w?e:null}return!0}(t)?t.error(s):console.warn(s)}}forEach(t,s){return new(s=g(s))((s,e)=>{let r;r=this.subscribe(s=>{try{t(s)}catch(i){e(i),r&&r.unsubscribe()}},e,s)})}_subscribe(t){const{source:s}=this;return s&&s.subscribe(t)}[y](){return this}pipe(...t){return 0===t.length?this:((s=t)?1===s.length?s[0]:function(t){return s.reduce((t,s)=>s(t),t)}:_)(this);var s}toPromise(t){return new(t=g(t))((t,s)=>{let e;this.subscribe(t=>e=t,t=>s(t),()=>t(e))})}}function g(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}m.create=t=>new m(t);const x=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class S extends f{constructor(t,s){super(),this.subject=t,this.subscriber=s,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,s=t.observers;if(this.subject=null,!s||0===s.length||t.isStopped||t.closed)return;const e=s.indexOf(this.subscriber);-1!==e&&s.splice(e,1)}}class v extends w{constructor(t){super(t),this.destination=t}}class E extends m{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[p](){return new v(this)}lift(t){const s=new O(this,this);return s.operator=t,s}next(t){if(this.closed)throw new x;if(!this.isStopped){const{observers:s}=this,e=s.length,r=s.slice();for(let i=0;i<e;i++)r[i].next(t)}}error(t){if(this.closed)throw new x;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:s}=this,e=s.length,r=s.slice();for(let i=0;i<e;i++)r[i].error(t);this.observers.length=0}complete(){if(this.closed)throw new x;this.isStopped=!0;const{observers:t}=this,s=t.length,e=t.slice();for(let r=0;r<s;r++)e[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new x;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new x;return this.hasError?(t.error(this.thrownError),f.EMPTY):this.isStopped?(t.complete(),f.EMPTY):(this.observers.push(t),new S(this,t))}asObservable(){const t=new m;return t.source=this,t}}E.create=(t,s)=>new O(t,s);class O extends E{constructor(t,s){super(),this.destination=t,this.source=s}next(t){const{destination:s}=this;s&&s.next&&s.next(t)}error(t){const{destination:s}=this;s&&s.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:s}=this;return s?this.source.subscribe(t):f.EMPTY}}class j extends E{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){const s=super._subscribe(t);return s&&!s.closed&&t.next(this._value),s}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new x;return this._value}next(t){super.next(this._value=t)}}class P{constructor(t,s){this.project=t,this.thisArg=s}call(t,s){return s.subscribe(new R(t,this.project,this.thisArg))}}class R extends w{constructor(t,s,e){super(t),this.project=s,this.count=0,this.thisArg=e||this}_next(t){let s;try{s=this.project.call(this.thisArg,t,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(s)}}class k{constructor(t=null){this._snapshot=t,this._subject=new j(t)}get observer(){return this._subject.asObservable()}select(t){return this._subject.pipe((s=t,function(t){if("function"!=typeof s)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return t.lift(new P(s,void 0))}));var s}snapshot(){return this._snapshot}set(t){this._snapshot=t,this._subject.next(t)}patch(t){this._snapshot=Object.assign(Object.assign({},this._snapshot||{}),t),this._subject.next(this._snapshot)}error(t){this._subject.error(t)}subscribe(t){return this._subject.subscribe(t)}}const $="@runopencode:state:provide:registry";function D(t){return function(s,e){t=Object.assign({defaults:null},t);let r=`__${e}__`;delete s.constructor.prototype[e],Object.defineProperty(s.constructor.prototype,e,{configurable:!0,enumerable:!0,get:function(){return this[r]||Object.defineProperty(this,r,{value:new k(t.defaults),enumerable:!1,writable:!1}),this[r]}});let i=Reflect.getMetadata($,s)||new Map;i.set(t.name,e),Reflect.defineMetadata($,i,s)}}function T(t){let s=Reflect.getMetadata($,t),e=new Map;return s.forEach((function(s,r){e.set(r,t[s])})),e}export{e as C,D as P,E as S,T as a,r as g}