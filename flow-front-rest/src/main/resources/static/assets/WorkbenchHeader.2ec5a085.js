import{a as l,s as p,v as s,cU as d,L as u,aF as a,o as f,f as _,m as n,l as e,t as m}from"./index.75df828b.js";import v from"./QuickNav.b2ba1da3.js";import{A as g}from"./index.1274b7b1.js";import{h}from"./header.d801b988.js";import"./index.4961ba28.js";import"./index.f7065eda.js";import"./index.04511fa8.js";import"./index.e72a2c0b.js";import"./useRefs.2caae181.js";import"./PlusOutlined.58f79c9c.js";import"./index.9f5ee9cb.js";import"./index.4ae6698d.js";import"./useFlexGapSupport.4972a32f.js";import"./index.bfd414b8.js";import"./data.93390901.js";import"./process.91b5dfff.js";import"./useSize.f8b8ed9e.js";import"./eagerComputed.117d0821.js";const k=l({components:{Avatar:g,QuickNav:v},setup(){const t=p(),o=s(),r=s(!1);return s(new Date),o.value=t.getUserInfo||{},{headerImg:h,loading:r,loginUser:o,currentDate:d(new Date)}}}),x={class:"lg:flex"},F={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},D={class:"md:text-lg text-md"},N={class:"text-secondary"},U={class:"flex-1 md:mt-0 mt-4"};function y(t,o,r,A,C,$){const i=a("Avatar"),c=a("QuickNav");return f(),_("div",x,[n(i,{src:t.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),e("div",F,[e("h1",D,m(t.loginUser.name),1),e("span",N,m(t.currentDate)+"\uFF0C\u6674\uFF0C20\u2103 - 32\u2103\uFF01 ",1)]),e("div",U,[n(c,{loading:t.loading,class:"enter-y"},null,8,["loading"])])])}var M=u(k,[["render",y]]);export{M as default};