import{a as d,b1 as l,L as u,aF as o,o as f,i as y,z as t,m as s,B as I,l as r,t as i,aG as C}from"./index.54e75e3e.js";import{C as L}from"./index.e86f36de.js";import"./index.2167587e.js";import"./index.4c5a4512.js";import{L as n}from"./index.1d2ce225.js";import{R as h,C as v}from"./index.4d74564a.js";import"./index.49848cb6.js";import"./useRefs.ab942c9d.js";import"./useFlexGapSupport.f9214675.js";import"./eagerComputed.e474cd0d.js";const B=d({props:{dataSource:Array},components:{Card:L,List:n,ListItem:n.Item,ListItemMeta:n.Item.Meta,Icon:l,Row:h,Col:v},setup(e){return{items:e.dataSource}}}),x={class:""},$={class:"content"},b=["title"];function g(e,S,k,z,A,D){const c=o("a-button"),m=o("ListItem"),p=o("List"),_=o("Card");return f(),y(_,C({title:"\u65B0\u95FB\u52A8\u6001"},e.$attrs,{bodyStyle:"padding-top:0;"}),{extra:t(()=>[s(c,{type:"link",size:"small"},{default:t(()=>[I("\u66F4\u591A")]),_:1})]),default:t(()=>[s(p,{"item-layout":"horizontal","data-source":e.items},{renderItem:t(({item:a})=>[s(m,{class:"custom-list-item"},{actions:t(()=>[r("span",x,i(a.date),1)]),default:t(()=>[r("div",$,[r("a",{href:"/",title:a.title},i(a.title),9,b)])]),_:2},1024)]),_:1},8,["data-source"])]),_:1},16)}var q=u(B,[["render",g]]);export{q as default};