System.register([],(function(e,t){"use strict";return{execute:function(){const s="stencil-state-store";let n;let l;let o=false;let $=false;let r=false;let c=false;let i=0;let a=false;const f=typeof window!=="undefined"?window:{};const u=f.CSS;const d=f.document||{head:{}};const m={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n)};const h=e=>Promise.resolve(e);const g="{visibility:hidden}.hydrated{visibility:inherit}";const p=(e,t="")=>{{return()=>{}}};const b=(e,t)=>{{return()=>{}}};const y={};const R=e=>{e=typeof e;return e==="object"||e==="function"};const N=e=>`__sc_import_${e.replace(/\s|-/g,"_")}`;const w=e("h",(e,t,...s)=>{let n=null;let l=null;let o=false;let $=false;let r=[];const c=t=>{for(let s=0;s<t.length;s++){n=t[s];if(Array.isArray(n)){c(n)}else if(n!=null&&typeof n!=="boolean"){if(o=typeof e!=="function"&&!R(n)){n=String(n)}if(o&&$){r[r.length-1].$text$+=n}else{r.push(o?v(null,n):n)}$=o}}};c(s);if(t){if(t.name){l=t.name}}const i=v(e,null);i.$attrs$=t;if(r.length>0){i.$children$=r}{i.$name$=l}return i});const v=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{s.$attrs$=null}{s.$name$=null}return s};const x=e("H",{});const C=e=>e&&e.$tag$===x;const T=(e,t,s,n,l,o)=>{if(s!==n){let r=he(e,t);let c=t.toLowerCase();if(!r&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(he(f,c)){t=c.slice(2)}else{t=c[2]+t.slice(3)}if(s){m.rel(e,t,s,false)}if(n){m.ael(e,t,n,false)}}else{const c=R(n);if((r||c&&n!==null)&&!l){try{if(!e.tagName.includes("-")){let l=n==null?"":n;if(t==="list"){r=false}else if(s==null||e[t]!=l){e[t]=l}}else{e[t]=n}}catch($){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!r||o&4||l)&&!c){n=n===true?"":n;{e.setAttribute(t,n)}}}}};const S=(e,t,s,n)=>{const l=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;const o=e&&e.$attrs$||y;const $=t.$attrs$||y;{for(n in o){if(!(n in $)){T(l,n,o[n],undefined,s,t.$flags$)}}}for(n in $){T(l,n,o[n],$[n],s,t.$flags$)}};const E=(e,t,s,$)=>{let i=t.$children$[s];let a=0;let f;let u;let m;if(!o){r=true;if(i.$tag$==="slot"){i.$flags$|=i.$children$?2:1}}if(i.$text$!==null){f=i.$elm$=d.createTextNode(i.$text$)}else if(i.$flags$&1){f=i.$elm$=d.createTextNode("")}else{f=i.$elm$=d.createElement(i.$flags$&2?"slot-fb":i.$tag$);{S(null,i,c)}if(i.$children$){for(a=0;a<i.$children$.length;++a){u=E(e,i,a);if(u){f.appendChild(u)}}}}{f["s-hn"]=l;if(i.$flags$&(2|1)){f["s-sr"]=true;f["s-cr"]=n;f["s-sn"]=i.$name$||"";m=e&&e.$children$&&e.$children$[s];if(m&&m.$tag$===i.$tag$&&e.$elm$){j(e.$elm$,false)}}}return f};const j=(e,t)=>{m.$flags$|=1;const s=e.childNodes;for(let n=s.length-1;n>=0;n--){const e=s[n];if(e["s-hn"]!==l&&e["s-ol"]){B(e).insertBefore(e,k(e));e["s-ol"].remove();e["s-ol"]=undefined;r=true}if(t){j(e,t)}}m.$flags$&=~1};const M=(e,t,s,n,l,o)=>{let $=e["s-cr"]&&e["s-cr"].parentNode||e;let r;for(;l<=o;++l){if(n[l]){r=E(null,s,l);if(r){n[l].$elm$=r;$.insertBefore(r,k(t))}}}};const U=(e,t,s,n,l)=>{for(;t<=s;++t){if(n=e[t]){l=n.$elm$;{$=true;if(l["s-ol"]){l["s-ol"].remove()}else{j(l,true)}}l.remove()}}};const A=(e,t,s,n)=>{let l=0;let o=0;let $=t.length-1;let r=t[0];let c=t[$];let i=n.length-1;let a=n[0];let f=n[i];let u;while(l<=$&&o<=i){if(r==null){r=t[++l]}else if(c==null){c=t[--$]}else if(a==null){a=n[++o]}else if(f==null){f=n[--i]}else if(L(r,a)){I(r,a);r=t[++l];a=n[++o]}else if(L(c,f)){I(c,f);c=t[--$];f=n[--i]}else if(L(r,f)){if(r.$tag$==="slot"||f.$tag$==="slot"){j(r.$elm$.parentNode,false)}I(r,f);e.insertBefore(r.$elm$,c.$elm$.nextSibling);r=t[++l];f=n[--i]}else if(L(c,a)){if(r.$tag$==="slot"||f.$tag$==="slot"){j(c.$elm$.parentNode,false)}I(c,a);e.insertBefore(c.$elm$,r.$elm$);c=t[--$];a=n[++o]}else{{u=E(t&&t[o],s,o);a=n[++o]}if(u){{B(r.$elm$).insertBefore(u,k(r.$elm$))}}}}if(l>$){M(e,n[i+1]==null?null:n[i+1].$elm$,s,n,o,i)}else if(o>i){U(t,l,$)}};const L=(e,t)=>{if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};const k=e=>e&&e["s-ol"]||e;const B=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const I=(e,t)=>{const s=t.$elm$=e.$elm$;const n=e.$children$;const l=t.$children$;const o=t.$tag$;const $=t.$text$;let r;if($===null){{if(o==="slot");else{S(e,t,c)}}if(n!==null&&l!==null){A(s,n,t,l)}else if(l!==null){if(e.$text$!==null){s.textContent=""}M(s,null,t,l,0,l.length-1)}else if(n!==null){U(n,0,n.length-1)}}else if(r=s["s-cr"]){r.parentNode.textContent=$}else if(e.$text$!==$){s.data=$}};const P=e=>{let t=e.childNodes;let s;let n;let l;let o;let $;let r;for(n=0,l=t.length;n<l;n++){s=t[n];if(s.nodeType===1){if(s["s-sr"]){$=s["s-sn"];s.hidden=false;for(o=0;o<l;o++){if(t[o]["s-hn"]!==s["s-hn"]){r=t[o].nodeType;if($!==""){if(r===1&&$===t[o].getAttribute("slot")){s.hidden=true;break}}else{if(r===1||r===3&&t[o].textContent.trim()!==""){s.hidden=true;break}}}}}P(s)}}};const _=[];const z=e=>{let t;let s;let n;let l;let o;let r;let c=0;let i=e.childNodes;let a=i.length;for(;c<a;c++){t=i[c];if(t["s-sr"]&&(s=t["s-cr"])){n=s.parentNode.childNodes;l=t["s-sn"];for(r=n.length-1;r>=0;r--){s=n[r];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==t["s-hn"]){if(O(s,l)){o=_.find(e=>e.$nodeToRelocate$===s);$=true;s["s-sn"]=s["s-sn"]||l;if(o){o.$slotRefNode$=t}else{_.push({$slotRefNode$:t,$nodeToRelocate$:s})}if(s["s-sr"]){_.map(e=>{if(O(e.$nodeToRelocate$,s["s-sn"])){o=_.find(e=>e.$nodeToRelocate$===s);if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}})}}else if(!_.some(e=>e.$nodeToRelocate$===s)){_.push({$nodeToRelocate$:s})}}}}if(t.nodeType===1){z(t)}}};const O=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const H=(e,t)=>{const s=e.$hostElement$;const c=e.$cmpMeta$;const i=e.$vnode$||v(null,null);const a=C(t)?t:w(null,null,t);l=s.tagName;a.$tag$=null;a.$flags$|=4;e.$vnode$=a;a.$elm$=i.$elm$=s;{n=s["s-cr"];o=(c.$flags$&1)!==0;$=false}I(i,a);{if(r){m.$flags$|=1;z(a.$elm$);let e;let t;let s;let n;let l;let o;let $=0;for(;$<_.length;$++){e=_[$];t=e.$nodeToRelocate$;if(!t["s-ol"]){s=d.createTextNode("");s["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=s,t)}}for($=0;$<_.length;$++){e=_[$];t=e.$nodeToRelocate$;if(e.$slotRefNode$){n=e.$slotRefNode$.parentNode;l=e.$slotRefNode$.nextSibling;s=t["s-ol"];while(s=s.previousSibling){o=s["s-nr"];if(o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&n!==t.parentNode||t.nextSibling!==l){if(t!==l){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}n.insertBefore(t,l)}}}else{if(t.nodeType===1){t.hidden=true}}}m.$flags$&=~1}if($){P(a.$elm$)}_.length=0}};const V=e("g",e=>ue(e).$hostElement$);const q=e("c",(e,t,s)=>{const n=V(e);return{emit:e=>F(n,t,{bubbles:!!(s&4),composed:!!(s&2),cancelable:!!(s&1),detail:e})}});const F=(e,t,s)=>{const n=new CustomEvent(t,s);e.dispatchEvent(n);return n};const D=(e,t)=>{if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))}};const Q=(e,t)=>{{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}const s=p("scheduleUpdate",e.$cmpMeta$.$tagName$);const n=e.$ancestorComponent$;const l=e.$lazyInstance$;const o=()=>W(e,l);D(e,n);let $;s();return Z($,()=>Se(o))};const W=(e,t,s)=>{const n=e.$hostElement$;const l=p("update",e.$cmpMeta$.$tagName$);const o=n["s-rc"];const $=p("render",e.$cmpMeta$.$tagName$);{{H(e,G(t))}}if(m.$cssShim$){m.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(o){o.map(e=>e());n["s-rc"]=undefined}$();l();{const t=n["s-p"];const s=()=>J(e);if(t.length===0){s()}else{Promise.all(t).then(s);e.$flags$|=4;t.length=0}}};const G=e=>{try{e=e.render()}catch(t){ge(t)}return e};const J=e=>{const t=e.$cmpMeta$.$tagName$;const s=e.$hostElement$;const n=p("postUpdate",t);const l=e.$lazyInstance$;const o=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ee(s)}{Y(l,"componentDidLoad")}n();{e.$onReadyResolve$(s);if(!o){X()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Te(()=>Q(e))}e.$flags$&=~(4|512)}};const K=e=>{{const t=ue(e);const s=t.$hostElement$.isConnected;if(s&&(t.$flags$&(2|16))===2){Q(t)}return s}};const X=e=>{{ee(d.documentElement)}{m.$flags$|=2}Te(()=>F(f,"appload",{detail:{namespace:s}}))};const Y=(e,t,s)=>{if(e&&e[t]){try{return e[t](s)}catch(n){ge(n)}}return undefined};const Z=(e,t)=>e&&e.then?e.then(t):t();const ee=e=>e.classList.add("hydrated");const te=(e,t)=>{if(e!=null&&!R(e)){if(t&1){return String(e)}return e}return e};const se=(e,t)=>ue(e).$instanceValues$.get(t);const ne=(e,t,s,n)=>{const l=ue(e);const o=l.$instanceValues$.get(t);const $=l.$flags$;const r=l.$lazyInstance$;s=te(s,n.$members$[t][0]);if((!($&8)||o===undefined)&&s!==o){l.$instanceValues$.set(t,s);if(r){if(($&(2|16))===2){Q(l)}}}};const le=(e,t,s)=>{if(t.$members$){const n=Object.entries(t.$members$);const l=e.prototype;n.map(([e,[n]])=>{if(n&31||s&2&&n&32){Object.defineProperty(l,e,{get(){return se(this,e)},set(s){ne(this,e,s,t)},configurable:true,enumerable:true})}});if(s&1){const t=new Map;l.attributeChangedCallback=function(e,s,n){m.jmp(()=>{const s=t.get(e);this[s]=n===null&&typeof this[s]==="boolean"?false:n})};e.observedAttributes=n.filter(([e,t])=>t[0]&15).map(([e,s])=>{const n=s[1]||e;t.set(n,e);return n})}}return e};const oe=async(e,t,s,n,l)=>{if((t.$flags$&32)===0){t.$flags$|=32;{l=be(s);if(l.then){const e=b();l=await l;e()}if(!l.isProxied){le(l,s,2);l.isProxied=true}const e=p("createInstance",s.$tagName$);{t.$flags$|=8}try{new l(t)}catch(r){ge(r)}{t.$flags$&=~8}e();$e(t.$lazyInstance$)}}const o=t.$ancestorComponent$;const $=()=>Q(t);if(o&&o["s-rc"]){o["s-rc"].push($)}else{$()}};const $e=e=>{{Y(e,"connectedCallback")}};const re=e=>{if((m.$flags$&1)===0){const t=ue(e);const s=t.$cmpMeta$;const n=p("connectedCallback",s.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(s.$flags$&(4|8)){ce(e)}}{let s=e;while(s=s.parentNode||s.host){if(s["s-p"]){D(t,t.$ancestorComponent$=s);break}}}if(s.$members$){Object.entries(s.$members$).map(([t,[s]])=>{if(s&31&&e.hasOwnProperty(t)){const s=e[t];delete e[t];e[t]=s}})}{oe(e,t,s)}}else{$e(t.$lazyInstance$)}n()}};const ce=e=>{const t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const ie=e=>{if((m.$flags$&1)===0){const t=ue(e);const s=t.$lazyInstance$;if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Y(s,"disconnectedCallback")}}};const ae=e("b",(e,t={})=>{const s=p();const n=[];const l=t.exclude||[];const o=f.customElements;const $=d.head;const r=$.querySelector("meta[charset]");const c=d.createElement("style");const i=[];let a;let u=true;Object.assign(m,t);m.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){m.$flags$|=4}e.map(e=>e[1].map(t=>{const s={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{s.$members$=t[2]}const $=s.$tagName$;const r=class extends HTMLElement{constructor(e){super(e);e=this;me(e,s)}connectedCallback(){if(a){clearTimeout(a);a=null}if(u){i.push(this)}else{m.jmp(()=>re(this))}}disconnectedCallback(){m.jmp(()=>ie(this))}forceUpdate(){K(this)}componentOnReady(){return ue(this).$onReadyPromise$}};s.$lazyBundleIds$=e[0];if(!l.includes($)&&!o.get($)){n.push($);o.define($,le(r,s,1))}}));{c.innerHTML=n+g;c.setAttribute("data-styles","");$.insertBefore(c,r?r.nextSibling:$.firstChild)}u=false;if(i.length){i.map(e=>e.connectedCallback())}else{{m.jmp(()=>a=setTimeout(X,30))}}s()});const fe=new WeakMap;const ue=e=>fe.get(e);const de=e("r",(e,t)=>fe.set(t.$lazyInstance$=e,t));const me=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{s.$onReadyPromise$=new Promise(e=>s.$onReadyResolve$=e);e["s-p"]=[];e["s-rc"]=[]}return fe.set(e,s)};const he=(e,t)=>t in e;const ge=e=>console.error(e);const pe=new Map;const be=(e,s,n)=>{const l=e.$tagName$.replace(/-/g,"_");const o=e.$lazyBundleIds$;const $=pe.get(o);if($){return $[l]}return t.import(`./${o}.entry.js${""}`).then(e=>{{pe.set(o,e)}return e[l]},ge)};const ye=[];const Re=[];const Ne=[];const we=(e,t)=>s=>{e.push(s);if(!a){a=true;if(t&&m.$flags$&4){Te(Ce)}else{m.raf(Ce)}}};const ve=e=>{for(let s=0;s<e.length;s++){try{e[s](performance.now())}catch(t){ge(t)}}e.length=0};const xe=(e,t)=>{let s=0;let n=0;while(s<e.length&&(n=performance.now())<t){try{e[s++](n)}catch(l){ge(l)}}if(s===e.length){e.length=0}else if(s!==0){e.splice(0,s)}};const Ce=()=>{i++;ve(ye);const e=(m.$flags$&6)===2?performance.now()+10*Math.ceil(i*(1/22)):Infinity;xe(Re,e);xe(Ne,e);if(Re.length>0){Ne.push(...Re);Re.length=0}if(a=ye.length+Re.length+Ne.length>0){m.raf(Ce)}else{i=0}};const Te=e=>h().then(e);const Se=we(Re,true);const Ee=e("a",()=>{if(!(u&&u.supports&&u.supports("color","var(--c)"))){return t.import("./p-8408381d.system.js").then(()=>{if(m.$cssShim$=f.__cssshim){return m.$cssShim$.i()}else{return 0}})}return h()});const je=e("p",()=>{{m.$cssShim$=f.__cssshim}const e=Array.from(d.querySelectorAll("script")).find(e=>new RegExp(`/${s}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===s);const n=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then(){}}}{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,f.location.href)).href;{Me(n.resourcesUrl,e)}if(!f.customElements){return t.import("./p-83541d71.system.js").then(()=>n)}}return h(n)});const Me=(e,t)=>{const n=N(s);try{f[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;f[n]=l=>{const o=new URL(l,e).href;let $=s.get(o);if(!$){const e=d.createElement("script");e.type="module";e.crossOrigin=t.crossOrigin;e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${n}.m = m;`],{type:"application/javascript"}));$=new Promise(t=>{e.onload=()=>{t(f[n].m);e.remove()}});s.set(o,$);d.head.appendChild(e)}return $}}}}}}));