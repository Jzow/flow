import{a as _,bJ as h,aM as v,v as o,b as y,e as S,J as w,L as C,h as i,cD as $,ar as x,aF as z,o as H,f as E,m as F,z as R,l as W,p as d,b0 as m}from"./index.2df1abd3.js";import{u as b}from"./useWindowSizeFn.3d5076e0.js";const k=_({name:"IFrame",components:{Spin:h},props:{frameSrc:v.string.def("")},setup(){const e=o(!1),l=o(50),r=o(window.innerHeight),a=o(null),{prefixCls:c}=y("iframe-page");b(s,150,{immediate:!0});const p=S(()=>({height:`${i(r)}px`}));function s(){const n=i(a);if(!n)return;let{top:t}=$(n);t+=20,l.value=t,r.value=window.innerHeight-t;const g=document.documentElement.clientHeight-t;n.style.height=`${g}px`}function f(){e.value=!1,s()}function u(){x(()=>{const n=i(a);if(!n)return;const t=n;t.attachEvent?t.attachEvent("onload",()=>{f()}):n.onload=()=>{f()}})}return w(()=>{e.value=!0,u()}),{getWrapStyle:p,loading:e,frameRef:a,prefixCls:c}}}),B=["src"];function V(e,l,r,a,c,p){const s=z("Spin");return H(),E("div",{class:d(e.prefixCls),style:m(e.getWrapStyle)},[F(s,{spinning:e.loading,size:"large",style:m(e.getWrapStyle)},{default:R(()=>[W("iframe",{src:e.frameSrc,class:d(`${e.prefixCls}__main`),ref:"frameRef"},null,10,B)]),_:1},8,["spinning","style"])],6)}var J=C(k,[["render",V],["__scopeId","data-v-4d9a5dd8"]]);export{J as default};