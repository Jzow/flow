import{L as l,a as m,b1 as d,bX as _,q as f,bQ as g,eK as E,e as C,aF as e,o as L,i as h,z as a,m as c,bC as b}from"./index.bd2622a4.js";import{B}from"./index.9f418e95.js";const T=m({name:"ErrorAction",components:{Icon:d,Tooltip:_,Badge:B},setup(){const{t:o}=f(),{push:n}=g(),t=E(),r=C(()=>t.getErrorLogListCount);function s(){n(b.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function k(o,n,t,r,s,I){const u=e("Icon"),i=e("Badge"),p=e("Tooltip");return L(),h(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var v=l(T,[["render",k]]);export{v as default};