import{_ as x,K as l,l as b,be as T,a as L,a0 as _}from"./index.e84e956c.js";import{A as k,cD as F,j as f,u as o,a0 as s,B as n,D as w,w as B,a1 as m,ad as c,K as v,ab as y}from"./vendor.5879c5ca.js";import{c as S,u as C}from"./index.26d10332.js";import D from"./SessionTimeoutLogin.92aa9d52.js";import"./index.96c912c6.js";import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.ccc8749b.js";import"./useFrameKeepAlive.6cc008f1.js";/* empty css               *//* empty css               */import"./useSortable.a10c06e7.js";import"./lock.cd1c3bea.js";import"./Login.152045ad.js";import"./LoginForm.9d400008.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               */import"./LoginFormTitle.7136b85b.js";import"./ForgetPasswordForm.dc2193ab.js";import"./index.8b70aabd.js";import"./RegisterForm.6a20514a.js";import"./index.e83a4b09.js";import"./MobileForm.8639e4d5.js";import"./QrCodeForm.8384f452.js";import"./index.678f0f6a.js";import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";const P=k({name:"LayoutFeatures",components:{BackTop:F,LayoutLockPage:S(()=>l(()=>import("./index.2111c1fc.js"),["assets/index.2111c1fc.js","assets/vendor.5879c5ca.js","assets/vendor.484f97d2.css","assets/LockPage.b035e91e.js","assets/LockPage.2bff9ea2.css","assets/index.e84e956c.js","assets/index.378876c6.css","assets/lock.cd1c3bea.js","assets/header.d801b988.js"])),SettingDrawer:S(()=>l(()=>import("./index.fb63d7f0.js").then(function(e){return e.i}),["assets/index.fb63d7f0.js","assets/index.17eb4c41.css","assets/index.b78cb146.js","assets/index.c39445e0.css","assets/index.9cdef23c.css","assets/index.e84e956c.js","assets/index.378876c6.css","assets/vendor.5879c5ca.js","assets/vendor.484f97d2.css","assets/index.26d10332.js","assets/index.26a7f7e0.css","assets/index.3889cae4.css","assets/index.96c912c6.js","assets/index.0935299d.css","assets/useWindowSizeFn.6a6adedd.js","assets/useContentViewHeight.ccc8749b.js","assets/useFrameKeepAlive.6cc008f1.js","assets/useSortable.a10c06e7.js","assets/lock.cd1c3bea.js"])),SessionTimeoutLogin:D},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:d,getFullContent:u}=b(),g=T(),{prefixCls:j}=L("setting-drawer-fearure"),{getShowHeader:i}=C(),r=f(()=>g.getSessionTimeout),a=f(()=>{if(!o(p))return!1;const t=o(d);return t===_.AUTO?!o(i)||o(u):t===_.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a,prefixCls:j,getIsSessionTimeout:r}}});function E(e,p,d,u,g,j){const i=s("LayoutLockPage"),r=s("BackTop"),a=s("SettingDrawer"),t=s("SessionTimeoutLogin");return n(),w(y,null,[B(i),e.getUseOpenBackTop?(n(),m(r,{key:0,target:e.getTarget},null,8,["target"])):c("",!0),e.getIsFixedSettingDrawer?(n(),m(a,{key:1,class:v(e.prefixCls)},null,8,["class"])):c("",!0),e.getIsSessionTimeout?(n(),m(t,{key:2})):c("",!0)],64)}var ae=x(P,[["render",E]]);export{ae as default};