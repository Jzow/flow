import{a as l,s as p,v as s,cU as d,L as u,aF as a,o as f,f as _,m as n,l as t,t as m}from"./index.54e75e3e.js";import v from"./QuickNav.6bde2de5.js";import{A as g}from"./index.c5343d42.js";import{h}from"./header.d801b988.js";import"./index.24ba8bad.js";import"./index.e86f36de.js";import"./index.49848cb6.js";import"./index.2167587e.js";import"./useRefs.ab942c9d.js";import"./index.4d74564a.js";import"./index.4c5a4512.js";import"./useFlexGapSupport.f9214675.js";import"./index.5a03476b.js";import"./data.93390901.js";import"./process.0c905273.js";import"./useSize.5174038b.js";import"./eagerComputed.e474cd0d.js";const k=l({components:{Avatar:g,QuickNav:v},setup(){const e=p(),o=s(),r=s(!1);return s(new Date),o.value=e.getUserInfo||{},{headerImg:h,loading:r,loginUser:o,currentDate:d(new Date)}}}),x={class:"lg:flex"},F={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},D={class:"md:text-lg text-md"},N={class:"text-secondary"},U={class:"flex-1 md:mt-0 mt-4"};function y(e,o,r,A,C,$){const c=a("Avatar"),i=a("QuickNav");return f(),_("div",x,[n(c,{src:e.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),t("div",F,[t("h1",D,m(e.loginUser.name),1),t("span",N,m(e.currentDate)+"\uFF0C\u6674\uFF0C20\u2103 - 32\u2103\uFF01 ",1)]),t("div",U,[n(i,{loading:e.loading,class:"enter-y"},null,8,["loading"])])])}var K=u(k,[["render",y]]);export{K as default};