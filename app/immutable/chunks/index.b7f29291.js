function y(){}function J(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function T(){return Object.create(null)}function b(t){t.forEach(P)}function C(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(Q(e,n))}function mt(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function yt(t,e,n,i,r,u){if(r){const s=W(e,n,i,u);t.p(s,r)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function bt(t){return t??""}function xt(t){return t&&C(t.destroy)?t.destroy:y}let v=!1;function R(){v=!0}function U(){v=!1}function V(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:V(1,r,x=>e[n[x]].claim_order,c))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const u=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<u.length&&s[o].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[o],f)}}function Y(t,e){t.appendChild(e)}function Z(t,e){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function wt(t,e,n){v&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function vt(){return k(" ")}function Et(){return k("")}function L(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:et(t,e,n)}function nt(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,i,r=!1){it(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function q(t,e,n,i){return I(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function At(t,e,n){return q(t,e,n,D)}function St(t,e,n){return q(t,e,n,tt)}function rt(t,e){return I(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function Ct(t){return rt(t," ")}function kt(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let w;function st(){if(w===void 0){w=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{w=!0}}return w}function Mt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=D("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=st();let u;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",u=L(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{u=L(i.contentWindow,"resize",e),e()}),Y(t,i),()=>{(r||u&&i.contentWindow)&&u(),B(i)}}function zt(t,e,n){t.classList[n?"add":"remove"](e)}function ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Tt(t,e){return new t(e)}let g;function p(t){g=t}function j(){if(!g)throw new Error("Function called outside component initialization");return g}function Lt(t){j().$$.on_mount.push(t)}function Ot(t){j().$$.after_update.push(t)}function Pt(){const t=j();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=ot(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}const h=[],O=[];let m=[];const N=[],F=Promise.resolve();let A=!1;function H(){A||(A=!0,F.then(G))}function Wt(){return H(),F}function S(t){m.push(t)}function Bt(t){N.push(t)}const E=new Set;let _=0;function G(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),ct(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;O.length;)O.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();A=!1,E.clear(),p(t)}function ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function ut(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Dt(){d={r:0,c:[],p:d}}function It(){d.r||b(d.c),d=d.p}function lt(t,e){t&&t.i&&($.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ft=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ht(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Gt(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function at(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||S(()=>{const s=t.$$.on_mount.map(P).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),u.forEach(S)}function ft(t,e){const n=t.$$;n.fragment!==null&&(ut(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,i,r,u,s,l=[-1]){const o=g;p(t);const c=t.$$={fragment:null,ctx:[],props:u,update:y,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:T(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,x,...M)=>{const z=M.length?M[0]:x;return c.ctx&&r(c.ctx[a],c.ctx[a]=z)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](z),f&&dt(t,a)),x}):[],c.update(),f=!0,b(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){R();const a=nt(e.target);c.fragment&&c.fragment.l(a),a.forEach(B)}else c.fragment&&c.fragment.c();e.intro&&lt(t.$$.fragment),at(t,e.target,e.anchor,e.customElement),U(),G()}p(o)}class Qt{$destroy(){ft(this,1),this.$destroy=y}$on(e,n){if(!C(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{at as A,ft as B,mt as C,yt as D,gt as E,pt as F,Z as G,y as H,ht as I,tt as J,St as K,bt as L,$t as M,L as N,b as O,zt as P,S as Q,Nt as R,Qt as S,Ft as T,Ht as U,Bt as V,xt as W,Pt as X,Mt as Y,vt as a,wt as b,Ct as c,qt as d,Et as e,It as f,lt as g,B as h,Kt as i,Ot as j,D as k,At as l,nt as m,et as n,Lt as o,jt as p,k as q,rt as r,_t as s,Wt as t,kt as u,Dt as v,O as w,Tt as x,Gt as y,Jt as z};
