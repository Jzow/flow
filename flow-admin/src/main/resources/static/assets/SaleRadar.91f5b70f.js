import{az as r,a as i,x as s,a9 as n,aB as l,i as d,l as m,C as p,p as u,bp as c}from"./index.ef013507.js";import{C as f}from"./index.0a407472.js";import"./index.09ae92e2.js";/* empty css               */import{u as h}from"./useECharts.3f03c88a.js";import"./index.c6737256.js";import"./index.4e2ec58e.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useRefs.5ed2b70f.js";import"./PlusOutlined.95fc7300.js";const g=i({components:{Card:f},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=s(null),{setOptions:t}=h(a);return n(()=>e.loading,()=>{e.loading||t({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),{chartRef:a}}});function y(e,a,t,C,S,w){const o=l("Card");return d(),m(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:p(()=>[u("div",{ref:"chartRef",style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var k=r(g,[["render",y]]);export{k as default};