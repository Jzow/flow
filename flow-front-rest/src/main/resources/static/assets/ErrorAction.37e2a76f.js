import{A as l,a8 as m,bC as d,a as f,j as _,a0 as e,B as g,a1 as E,a5 as a,w as c}from"./vendor.ff87b2f6.js";/* empty css                */import{_ as C,I as L,am as h,e as B,P as I}from"./index.960d5979.js";const T=l({name:"ErrorAction",components:{Icon:L,Tooltip:m,Badge:d},setup(){const{t:o}=B(),{push:n}=f(),t=h(),r=_(()=>t.getErrorLogListCount);function s(){n(I.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function b(o,n,t,r,s,j){const i=e("Icon"),u=e("Badge"),p=e("Tooltip");return g(),E(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(u,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(i,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var R=C(T,[["render",b]]);export{R as default};