System.register([],(function(e,t){"use strict";return{execute:function(){const s="stencil-state-store";let n;let l;let o;let $=false;let r=false;let c=false;let i=false;let a=0;let f=false;const d=typeof window!=="undefined"?window:{};const u=d.CSS;const m=d.document||{head:{}};const h={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n)};const g=(()=>(m.head.attachShadow+"").indexOf("[native")>-1)();const p=e=>Promise.resolve(e);const b="{visibility:hidden}.hydrated{visibility:inherit}";const y=(e,t="")=>{{return()=>{}}};const R=(e,t)=>{{return()=>{}}};const w={};const N=e=>e!=null;const v=e=>{e=typeof e;return e==="object"||e==="function"};const x=e=>`__sc_import_${e.replace(/\s|-/g,"_")}`;const C=e("h",(e,t,...s)=>{let n=null;let l=null;let o=false;let $=false;let r=[];const c=t=>{for(let s=0;s<t.length;s++){n=t[s];if(Array.isArray(n)){c(n)}else if(n!=null&&typeof n!=="boolean"){if(o=typeof e!=="function"&&!v(n)){n=String(n)}if(o&&$){r[r.length-1].$text$+=n}else{r.push(o?S(null,n):n)}$=o}}};c(s);if(t){if(t.name){l=t.name}}const i=S(e,null);i.$attrs$=t;if(r.length>0){i.$children$=r}{i.$name$=l}return i});const S=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{s.$attrs$=null}{s.$name$=null}return s};const T=e("H",{});const E=e=>e&&e.$tag$===T;const j=(e,t,s,n,l,o)=>{if(s!==n){let r=be(e,t);let c=t.toLowerCase();if(!r&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(be(d,c)){t=c.slice(2)}else{t=c[2]+t.slice(3)}if(s){h.rel(e,t,s,false)}if(n){h.ael(e,t,n,false)}}else{const c=v(n);if((r||c&&n!==null)&&!l){try{if(!e.tagName.includes("-")){let l=n==null?"":n;if(t==="list"){r=false}else if(s==null||e[t]!=l){e[t]=l}}else{e[t]=n}}catch($){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!r||o&4||l)&&!c){n=n===true?"":n;{e.setAttribute(t,n)}}}}};const M=(e,t,s,n)=>{const l=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;const o=e&&e.$attrs$||w;const $=t.$attrs$||w;{for(n in o){if(!(n in $)){j(l,n,o[n],undefined,s,t.$flags$)}}}for(n in $){j(l,n,o[n],$[n],s,t.$flags$)}};const L=(e,t,s,r)=>{let a=t.$children$[s];let f=0;let d;let u;let h;if(!$){c=true;if(a.$tag$==="slot"){if(n){r.classList.add(n+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){d=a.$elm$=m.createTextNode(a.$text$)}else if(a.$flags$&1){d=a.$elm$=m.createTextNode("")}else{d=a.$elm$=m.createElement(a.$flags$&2?"slot-fb":a.$tag$);{M(null,a,i)}if(N(n)&&d["s-si"]!==n){d.classList.add(d["s-si"]=n)}if(a.$children$){for(f=0;f<a.$children$.length;++f){u=L(e,a,f,d);if(u){d.appendChild(u)}}}}{d["s-hn"]=o;if(a.$flags$&(2|1)){d["s-sr"]=true;d["s-cr"]=l;d["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[s];if(h&&h.$tag$===a.$tag$&&e.$elm$){U(e.$elm$,false)}}}return d};const U=(e,t)=>{h.$flags$|=1;const s=e.childNodes;for(let n=s.length-1;n>=0;n--){const e=s[n];if(e["s-hn"]!==o&&e["s-ol"]){O(e).insertBefore(e,P(e));e["s-ol"].remove();e["s-ol"]=undefined;c=true}if(t){U(e,t)}}h.$flags$&=~1};const A=(e,t,s,n,l,$)=>{let r=e["s-cr"]&&e["s-cr"].parentNode||e;let c;if(r.shadowRoot&&r.tagName===o){r=r.shadowRoot}for(;l<=$;++l){if(n[l]){c=L(null,s,l,e);if(c){n[l].$elm$=c;r.insertBefore(c,P(t))}}}};const k=(e,t,s,n,l)=>{for(;t<=s;++t){if(n=e[t]){l=n.$elm$;{r=true;if(l["s-ol"]){l["s-ol"].remove()}else{U(l,true)}}l.remove()}}};const B=(e,t,s,n)=>{let l=0;let o=0;let $=t.length-1;let r=t[0];let c=t[$];let i=n.length-1;let a=n[0];let f=n[i];let d;while(l<=$&&o<=i){if(r==null){r=t[++l]}else if(c==null){c=t[--$]}else if(a==null){a=n[++o]}else if(f==null){f=n[--i]}else if(I(r,a)){_(r,a);r=t[++l];a=n[++o]}else if(I(c,f)){_(c,f);c=t[--$];f=n[--i]}else if(I(r,f)){if(r.$tag$==="slot"||f.$tag$==="slot"){U(r.$elm$.parentNode,false)}_(r,f);e.insertBefore(r.$elm$,c.$elm$.nextSibling);r=t[++l];f=n[--i]}else if(I(c,a)){if(r.$tag$==="slot"||f.$tag$==="slot"){U(c.$elm$.parentNode,false)}_(c,a);e.insertBefore(c.$elm$,r.$elm$);c=t[--$];a=n[++o]}else{{d=L(t&&t[o],s,o,e);a=n[++o]}if(d){{O(r.$elm$).insertBefore(d,P(r.$elm$))}}}}if(l>$){A(e,n[i+1]==null?null:n[i+1].$elm$,s,n,o,i)}else if(o>i){k(t,l,$)}};const I=(e,t)=>{if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};const P=e=>e&&e["s-ol"]||e;const O=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const _=(e,t)=>{const s=t.$elm$=e.$elm$;const n=e.$children$;const l=t.$children$;const o=t.$tag$;const $=t.$text$;let r;if($===null){{if(o==="slot");else{M(e,t,i)}}if(n!==null&&l!==null){B(s,n,t,l)}else if(l!==null){if(e.$text$!==null){s.textContent=""}A(s,null,t,l,0,l.length-1)}else if(n!==null){k(n,0,n.length-1)}}else if(r=s["s-cr"]){r.parentNode.textContent=$}else if(e.$text$!==$){s.data=$}};const z=e=>{let t=e.childNodes;let s;let n;let l;let o;let $;let r;for(n=0,l=t.length;n<l;n++){s=t[n];if(s.nodeType===1){if(s["s-sr"]){$=s["s-sn"];s.hidden=false;for(o=0;o<l;o++){if(t[o]["s-hn"]!==s["s-hn"]){r=t[o].nodeType;if($!==""){if(r===1&&$===t[o].getAttribute("slot")){s.hidden=true;break}}else{if(r===1||r===3&&t[o].textContent.trim()!==""){s.hidden=true;break}}}}}z(s)}}};const H=[];const V=e=>{let t;let s;let n;let l;let o;let $;let c=0;let i=e.childNodes;let a=i.length;for(;c<a;c++){t=i[c];if(t["s-sr"]&&(s=t["s-cr"])){n=s.parentNode.childNodes;l=t["s-sn"];for($=n.length-1;$>=0;$--){s=n[$];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==t["s-hn"]){if(q(s,l)){o=H.find(e=>e.$nodeToRelocate$===s);r=true;s["s-sn"]=s["s-sn"]||l;if(o){o.$slotRefNode$=t}else{H.push({$slotRefNode$:t,$nodeToRelocate$:s})}if(s["s-sr"]){H.map(e=>{if(q(e.$nodeToRelocate$,s["s-sn"])){o=H.find(e=>e.$nodeToRelocate$===s);if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}})}}else if(!H.some(e=>e.$nodeToRelocate$===s)){H.push({$nodeToRelocate$:s})}}}}if(t.nodeType===1){V(t)}}};const q=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const F=(e,t)=>{const s=e.$hostElement$;const i=e.$cmpMeta$;const a=e.$vnode$||S(null,null);const f=E(t)?t:C(null,null,t);o=s.tagName;f.$tag$=null;f.$flags$|=4;e.$vnode$=f;f.$elm$=a.$elm$=s.shadowRoot||s;{n=s["s-sc"]}{l=s["s-cr"];$=g&&(i.$flags$&1)!==0;r=false}_(a,f);{if(c){h.$flags$|=1;V(f.$elm$);let e;let t;let s;let n;let l;let o;let $=0;for(;$<H.length;$++){e=H[$];t=e.$nodeToRelocate$;if(!t["s-ol"]){s=m.createTextNode("");s["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=s,t)}}for($=0;$<H.length;$++){e=H[$];t=e.$nodeToRelocate$;if(e.$slotRefNode$){n=e.$slotRefNode$.parentNode;l=e.$slotRefNode$.nextSibling;s=t["s-ol"];while(s=s.previousSibling){o=s["s-nr"];if(o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&n!==t.parentNode||t.nextSibling!==l){if(t!==l){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}n.insertBefore(t,l)}}}else{if(t.nodeType===1){t.hidden=true}}}h.$flags$&=~1}if(r){z(f.$elm$)}H.length=0}};const D=e("g",e=>he(e).$hostElement$);const Q=e("c",(e,t,s)=>{const n=D(e);return{emit:e=>W(n,t,{bubbles:!!(s&4),composed:!!(s&2),cancelable:!!(s&1),detail:e})}});const W=(e,t,s)=>{const n=new CustomEvent(t,s);e.dispatchEvent(n);return n};const G=(e,t)=>{if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))}};const J=(e,t)=>{{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}const s=y("scheduleUpdate",e.$cmpMeta$.$tagName$);const n=e.$ancestorComponent$;const l=e.$lazyInstance$;const o=()=>K(e,l);G(e,n);let $;s();return se($,()=>Me(o))};const K=(e,t,s)=>{const n=e.$hostElement$;const l=y("update",e.$cmpMeta$.$tagName$);const o=n["s-rc"];const $=y("render",e.$cmpMeta$.$tagName$);{{F(e,X(t))}}if(h.$cssShim$){h.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(o){o.map(e=>e());n["s-rc"]=undefined}$();l();{const t=n["s-p"];const s=()=>Y(e);if(t.length===0){s()}else{Promise.all(t).then(s);e.$flags$|=4;t.length=0}}};const X=e=>{try{e=e.render()}catch(t){ye(t)}return e};const Y=e=>{const t=e.$cmpMeta$.$tagName$;const s=e.$hostElement$;const n=y("postUpdate",t);const l=e.$lazyInstance$;const o=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ne(s)}{te(l,"componentDidLoad")}n();{e.$onReadyResolve$(s);if(!o){ee()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){je(()=>J(e))}e.$flags$&=~(4|512)}};const Z=e=>{{const t=he(e);const s=t.$hostElement$.isConnected;if(s&&(t.$flags$&(2|16))===2){J(t)}return s}};const ee=e=>{{ne(m.documentElement)}{h.$flags$|=2}je(()=>W(d,"appload",{detail:{namespace:s}}))};const te=(e,t,s)=>{if(e&&e[t]){try{return e[t](s)}catch(n){ye(n)}}return undefined};const se=(e,t)=>e&&e.then?e.then(t):t();const ne=e=>e.classList.add("hydrated");const le=(e,t)=>{if(e!=null&&!v(e)){if(t&1){return String(e)}return e}return e};const oe=(e,t)=>he(e).$instanceValues$.get(t);const $e=(e,t,s,n)=>{const l=he(e);const o=l.$instanceValues$.get(t);const $=l.$flags$;const r=l.$lazyInstance$;s=le(s,n.$members$[t][0]);if((!($&8)||o===undefined)&&s!==o){l.$instanceValues$.set(t,s);if(r){if(($&(2|16))===2){J(l)}}}};const re=(e,t,s)=>{if(t.$members$){const n=Object.entries(t.$members$);const l=e.prototype;n.map(([e,[n]])=>{if(n&31||s&2&&n&32){Object.defineProperty(l,e,{get(){return oe(this,e)},set(s){$e(this,e,s,t)},configurable:true,enumerable:true})}});if(s&1){const t=new Map;l.attributeChangedCallback=function(e,s,n){h.jmp(()=>{const s=t.get(e);this[s]=n===null&&typeof this[s]==="boolean"?false:n})};e.observedAttributes=n.filter(([e,t])=>t[0]&15).map(([e,s])=>{const n=s[1]||e;t.set(n,e);return n})}}return e};const ce=async(e,t,s,n,l)=>{if((t.$flags$&32)===0){t.$flags$|=32;{l=we(s);if(l.then){const e=R();l=await l;e()}if(!l.isProxied){re(l,s,2);l.isProxied=true}const e=y("createInstance",s.$tagName$);{t.$flags$|=8}try{new l(t)}catch(r){ye(r)}{t.$flags$&=~8}e();ie(t.$lazyInstance$)}}const o=t.$ancestorComponent$;const $=()=>J(t);if(o&&o["s-rc"]){o["s-rc"].push($)}else{$()}};const ie=e=>{{te(e,"connectedCallback")}};const ae=e=>{if((h.$flags$&1)===0){const t=he(e);const s=t.$cmpMeta$;const n=y("connectedCallback",s.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(s.$flags$&(4|8)){fe(e)}}{let s=e;while(s=s.parentNode||s.host){if(s["s-p"]){G(t,t.$ancestorComponent$=s);break}}}if(s.$members$){Object.entries(s.$members$).map(([t,[s]])=>{if(s&31&&e.hasOwnProperty(t)){const s=e[t];delete e[t];e[t]=s}})}{ce(e,t,s)}}else{ie(t.$lazyInstance$)}n()}};const fe=e=>{const t=e["s-cr"]=m.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const de=e=>{if((h.$flags$&1)===0){const t=he(e);const s=t.$lazyInstance$;if(h.$cssShim$){h.$cssShim$.removeHost(e)}{te(s,"disconnectedCallback")}}};const ue=e("b",(e,t={})=>{const s=y();const n=[];const l=t.exclude||[];const o=d.customElements;const $=m.head;const r=$.querySelector("meta[charset]");const c=m.createElement("style");const i=[];let a;let f=true;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",m.baseURI).href;if(t.syncQueue){h.$flags$|=4}e.map(e=>e[1].map(t=>{const s={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{s.$members$=t[2]}if(!g&&s.$flags$&1){s.$flags$|=8}const $=s.$tagName$;const r=class extends HTMLElement{constructor(e){super(e);e=this;pe(e,s);if(s.$flags$&1){if(g){{e.attachShadow({mode:"open"})}}else if(!("shadowRoot"in e)){e.shadowRoot=e}}}connectedCallback(){if(a){clearTimeout(a);a=null}if(f){i.push(this)}else{h.jmp(()=>ae(this))}}disconnectedCallback(){h.jmp(()=>de(this))}forceUpdate(){Z(this)}componentOnReady(){return he(this).$onReadyPromise$}};s.$lazyBundleIds$=e[0];if(!l.includes($)&&!o.get($)){n.push($);o.define($,re(r,s,1))}}));{c.innerHTML=n+b;c.setAttribute("data-styles","");$.insertBefore(c,r?r.nextSibling:$.firstChild)}f=false;if(i.length){i.map(e=>e.connectedCallback())}else{{h.jmp(()=>a=setTimeout(ee,30))}}s()});const me=new WeakMap;const he=e=>me.get(e);const ge=e("r",(e,t)=>me.set(t.$lazyInstance$=e,t));const pe=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{s.$onReadyPromise$=new Promise(e=>s.$onReadyResolve$=e);e["s-p"]=[];e["s-rc"]=[]}return me.set(e,s)};const be=(e,t)=>t in e;const ye=e=>console.error(e);const Re=new Map;const we=(e,s,n)=>{const l=e.$tagName$.replace(/-/g,"_");const o=e.$lazyBundleIds$;const $=Re.get(o);if($){return $[l]}return t.import(`./${o}.entry.js${""}`).then(e=>{{Re.set(o,e)}return e[l]},ye)};const Ne=[];const ve=[];const xe=[];const Ce=(e,t)=>s=>{e.push(s);if(!f){f=true;if(t&&h.$flags$&4){je(Ee)}else{h.raf(Ee)}}};const Se=e=>{for(let s=0;s<e.length;s++){try{e[s](performance.now())}catch(t){ye(t)}}e.length=0};const Te=(e,t)=>{let s=0;let n=0;while(s<e.length&&(n=performance.now())<t){try{e[s++](n)}catch(l){ye(l)}}if(s===e.length){e.length=0}else if(s!==0){e.splice(0,s)}};const Ee=()=>{a++;Se(Ne);const e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;Te(ve,e);Te(xe,e);if(ve.length>0){xe.push(...ve);ve.length=0}if(f=Ne.length+ve.length+xe.length>0){h.raf(Ee)}else{a=0}};const je=e=>p().then(e);const Me=Ce(ve,true);const Le=e("a",()=>{if(!(u&&u.supports&&u.supports("color","var(--c)"))){return t.import("./p-8408381d.system.js").then(()=>{if(h.$cssShim$=d.__cssshim){return h.$cssShim$.i()}else{return 0}})}return p()});const Ue=e("p",()=>{{h.$cssShim$=d.__cssshim}const e=Array.from(m.querySelectorAll("script")).find(e=>new RegExp(`/${s}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===s);const n=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then(){}}}{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,d.location.href)).href;{Ae(n.resourcesUrl,e)}if(!d.customElements){return t.import("./p-83541d71.system.js").then(()=>n)}}return p(n)});const Ae=(e,t)=>{const n=x(s);try{d[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;d[n]=l=>{const o=new URL(l,e).href;let $=s.get(o);if(!$){const e=m.createElement("script");e.type="module";e.crossOrigin=t.crossOrigin;e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${n}.m = m;`],{type:"application/javascript"}));$=new Promise(t=>{e.onload=()=>{t(d[n].m);e.remove()}});s.set(o,$);m.head.appendChild(e)}return $}}}}}}));