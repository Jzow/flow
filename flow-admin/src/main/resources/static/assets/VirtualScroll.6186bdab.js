import{k as t}from"./index.734d8392.js";import{c as e}from"./createAsyncComponent.ed3ddf1d.js";import{k as a,aV as s,l as r,m as i,K as o,o as d,n as l,q as m,s as c,x as n,Y as p}from"./vendor.9d9efc92.js";/* empty css              */import{_ as u}from"./PageWrapper.d199a033.js";import"./usePageContext.2e777b50.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";const _=e((()=>t((()=>import("./VirtualScroll.2b1e312d.js")),["/assets/VirtualScroll.2b1e312d.js","/assets/VirtualScroll.7ff9340b.css","/assets/index.734d8392.js","/assets/index.69000eb3.css","/assets/vendor.9d9efc92.js","/assets/vendor.70495537.css"]))),f=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var v=a({components:{VScroll:_,Divider:s,PageWrapper:u},setup:()=>({data:f})});const h=n();r("data-v-918662a0");const j=p("基础滚动示例"),g={class:"virtual-scroll-demo-wrap"},b={class:"virtual-scroll-demo__item"},x=p("即使不可见，也预先加载50条数据，防止空白"),P={class:"virtual-scroll-demo-wrap"},V={class:"virtual-scroll-demo__item"};i();const w=h(((t,e,a,s,r,i)=>{const n=o("Divider"),p=o("VScroll"),u=o("PageWrapper");return d(),l(u,{class:"virtual-scroll-demo"},{default:h((()=>[m(n,null,{default:h((()=>[j])),_:1}),m("div",g,[m(p,{itemHeight:41,items:t.data,height:300,width:300},{default:h((({item:t})=>[m("div",b,c(t.title),1)])),_:1},8,["items"])]),m(n,null,{default:h((()=>[x])),_:1}),m("div",P,[m(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:h((({item:t})=>[m("div",V,c(t.title),1)])),_:1},8,["items"])])])),_:1})}));v.render=w,v.__scopeId="data-v-918662a0";export default v;