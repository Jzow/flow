import e from"./index.81372485.js";import{u as a}from"./useFrameKeepAlive.ad33b388.js";import{j as r,a as t,u as m,r as n,I as s,i as o,K as i,o as d,m as l,n as f}from"./vendor.686fd1d4.js";import{a0 as u}from"./index.91a03d82.js";import{a as c}from"./modelInfo.c9012fcd.js";import"./useWindowSizeFn.d82e06bf.js";var p=r({name:"BpmnDesigner",components:{FramePage:e},setup(){const{currentRoute:e}=t(),{query:{modelId:r}}=m(e),i=n(""),d=n({}),l=u(),f=t(),p=l.getTabList.find((e=>e.fullPath===f.currentRoute.value.fullPath));s((()=>{0!==p.meta.title.indexOf("设计流程-")&&c(r).then((e=>{p.meta.title&&-1===p.meta.title.indexOf("-"+e.name)&&(p.meta.title=p.meta.title+"-"+e.name)})).catch((()=>{}))})),i.value="/flow-bpmn/index.html/#/bpmn/designer?modelId="+r;const{getFramePages:h,hasRenderFrame:g,showIframe:F}=a(),j=o((()=>m(h).length>0));return{getFramePages:h,hasRenderFrame:g,showIframe:F,showFrame:j,url:i,frame:d}}});p.render=function(e,a,r,t,m,n){const s=i("FramePage");return d(),l("div",null,[f(s,{frameSrc:e.url},null,8,["frameSrc"])])};export default p;