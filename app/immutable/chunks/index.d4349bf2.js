function $(){}function J(t,e){for(const n in e)t[n]=e[n];return t}function O(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(O)}function B(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function _t(t,e,n,i){if(t){const r=P(t,e,n,i);return t[0](r)}}function P(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(e.dirty.length,r.length);for(let u=0;u<o;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,l){if(r){const o=P(e,n,i,l);t.p(o,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function yt(t){return t??""}let v=!1;function R(){v=!0}function U(){v=!1}function V(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const c=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:V(1,r,b=>e[n[b]].claim_order,c))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const l=[],o=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);u>=s;u--)o.push(e[u]);u--}for(;u>=0;u--)o.push(e[u]);l.reverse(),o.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<o.length;s++){for(;c<l.length&&o[s].claim_order>=l[c].claim_order;)c++;const f=c<l.length?l[c]:null;t.insertBefore(o[s],f)}}function Y(t,e){t.appendChild(e)}function Z(t,e){if(v){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){v&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function xt(){return S(" ")}function wt(){return S("")}function M(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,e,n,i,r=!1){nt(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(e(u)){const s=n(u);return s===void 0?t.splice(o,1):t[o]=s,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(e(u)){const s=n(u);return s===void 0?t.splice(o,1):t[o]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function q(t,e,n,i){return T(t,r=>r.nodeName===e,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];n[u.name]||l.push(u.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(e))}function vt(t,e,n){return q(t,e,n,I)}function Et(t,e,n){return q(t,e,n,tt)}function it(t,e){return T(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function Nt(t){return it(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function St(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let x;function rt(){if(x===void 0){x=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{x=!0}}return x}function jt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=I("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=rt();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=M(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=M(i.contentWindow,"resize",e),e()}),Y(t,i),()=>{(r||l&&i.contentWindow)&&l(),W(i)}}function Ct(t,e,n){t.classList[n?"add":"remove"](e)}function kt(t,e){return new t(e)}let y;function p(t){y=t}function D(){if(!y)throw new Error("Function called outside component initialization");return y}function Mt(t){D().$$.on_mount.push(t)}function zt(t){D().$$.after_update.push(t)}const h=[],z=[];let m=[];const L=[],F=Promise.resolve();let N=!1;function H(){N||(N=!0,F.then(G))}function Lt(){return H(),F}function A(t){m.push(t)}const E=new Set;let _=0;function G(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),ot(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;z.length;)z.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;L.length;)L.pop()();N=!1,E.clear(),p(t)}function ot(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function st(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const w=new Set;let d;function Ot(){d={r:0,c:[],p:d}}function Bt(){d.r||g(d.c),d=d.p}function ct(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Pt(t,e,n,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Wt(t){t&&t.c()}function It(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||A(()=>{const o=t.$$.on_mount.map(O).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...o):g(o),t.$$.on_mount=[]}),l.forEach(A)}function ut(t,e){const n=t.$$;n.fragment!==null&&(st(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Tt(t,e,n,i,r,l,o,u=[-1]){const s=y;p(t);const c=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:k(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};o&&o(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,b,...j)=>{const C=j.length?j[0]:b;return c.ctx&&r(c.ctx[a],c.ctx[a]=C)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](C),f&&at(t,a)),b}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){R();const a=et(e.target);c.fragment&&c.fragment.l(a),a.forEach(W)}else c.fragment&&c.fragment.c();e.intro&&ct(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),U(),G()}p(s)}class qt{$destroy(){ut(this,1),this.$destroy=$}$on(e,n){if(!B(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{lt as A,ut as B,_t as C,mt as D,pt as E,ht as F,Z as G,$ as H,dt as I,Ct as J,M as K,g as L,tt as M,Et as N,yt as O,bt as P,A as Q,jt as R,qt as S,xt as a,gt as b,Nt as c,Pt as d,wt as e,Bt as f,ct as g,W as h,Tt as i,zt as j,I as k,vt as l,et as m,$t as n,Mt as o,St as p,S as q,it as r,ft as s,Lt as t,At as u,Ot as v,z as w,kt as x,Wt as y,It as z};
