import{L as r,a as n,v as i,K as l,aF as s,o as d,i as u,z as f,l as m,b0 as p}from"./index.1ef32c91.js";import{C as h}from"./index.bc5223a6.js";import"./index.26a0bf38.js";import"./index.47cfff6d.js";import{u as c}from"./useECharts.c8deb3a9.js";import"./index.b5d3e327.js";import"./index.dd31a320.js";import"./useRefs.5083d02e.js";import"./useFlexGapSupport.0db0d170.js";const b=n({components:{Card:h},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=i(null),{setOptions:t}=c(a);return l(()=>e.loading,()=>{e.loading||t({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{show:!0,orient:"vertical",left:"right",data:["S","A","B","C","D","E"]},series:[{color:["#00eebb","#ffeebb","#ff6600","#b6a2de","#fbb000","#00c7c9"],name:"\u4E2A\u4EBA\u7EE9\u6548",type:"pie",avoidLabelOverlap:!1,itemStyle:{borderRadius:4,borderColor:"#fff",borderWidth:2},label:{show:!0,position:"left"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"},shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},labelLine:{show:!1},data:[{value:1048,name:"S"},{value:735,name:"A"},{value:580,name:"B"},{value:484,name:"C"},{value:334,name:"D"},{value:484,name:"E"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),{chartRef:a}}});function g(e,a,t,v,w,C){const o=s("Card");return d(),u(o,{title:"\u4E2A\u4EBA\u7EE9\u6548",loading:e.loading},{default:f(()=>[m("div",{ref:"chartRef",style:p({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var x=r(b,[["render",g]]);export{x as default};