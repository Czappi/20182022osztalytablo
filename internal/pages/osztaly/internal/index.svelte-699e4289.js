import{S as g,i as v,s as k,w as $,x as y,y as b,q as f,o as u,B as q,k as w,e as I,K as B,d as m,m as C,c as E,a as F,b as S,g as _,p as z,R as D,n as K}from"../../../chunks/index-9d55655f.js";import{a as M}from"../../../chunks/functions-927932af.js";import{F as O}from"../../../chunks/friendsItem-8cb62957.js";import{i as P}from"../../../chunks/paths-b27dcd08.js";import"../../../chunks/paths-4b3c6e7e.js";function h(i,l,n){const t=i.slice();return t[2]=l[n],t}function p(i){let l,n;return l=new O({props:{img:i[2].fimg,name:i[2].fname,link:i[1](i[2].link)}}),{c(){$(l.$$.fragment)},l(t){y(l.$$.fragment,t)},m(t,o){b(l,t,o),n=!0},p(t,o){const e={};o&1&&(e.img=t[2].fimg),o&1&&(e.name=t[2].fname),o&1&&(e.link=t[1](t[2].link)),l.$set(e)},i(t){n||(f(l.$$.fragment,t),n=!0)},o(t){u(l.$$.fragment,t),n=!1},d(t){q(l,t)}}}function R(i){let l,n,t,o=i[0],e=[];for(let s=0;s<o.length;s+=1)e[s]=p(h(i,o,s));const d=s=>u(e[s],1,1,()=>{e[s]=null});return{c(){l=w(),n=I("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){B('[data-svelte="svelte-ftay6m"]',document.head).forEach(m),l=C(s),n=E(s,"DIV",{class:!0});var a=F(n);for(let c=0;c<e.length;c+=1)e[c].l(a);a.forEach(m),this.h()},h(){document.title="2018-2022 Oszt\xE1lytabl\xF3",S(n,"class","allclassmates svelte-15smm4i")},m(s,r){_(s,l,r),_(s,n,r);for(let a=0;a<e.length;a+=1)e[a].m(n,null);t=!0},p(s,[r]){if(r&3){o=s[0];let a;for(a=0;a<o.length;a+=1){const c=h(s,o,a);e[a]?(e[a].p(c,r),f(e[a],1)):(e[a]=p(c),e[a].c(),f(e[a],1),e[a].m(n,null))}for(K(),a=o.length;a<e.length;a+=1)d(a);z()}},i(s){if(!t){for(let r=0;r<o.length;r+=1)f(e[r]);t=!0}},o(s){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)u(e[r]);t=!1},d(s){s&&m(l),s&&m(n),D(e,s)}}}async function L({params:i,fetch:l,session:n,stuff:t}){return{props:{classmates:await M(l)}}}function V(i,l,n){let{classmates:t}=l,o=e=>P(e);return i.$$set=e=>{"classmates"in e&&n(0,t=e.classmates)},[t,o]}class N extends g{constructor(l){super(),v(this,l,V,R,k,{classmates:0})}}export{N as default,L as load};