import{_ as e}from"./TableImg.3a357da5.js";import"./BasicForm.9dacb4c6.js";import{u as o}from"./useTable.4c66a5b7.js";import{getBasicColumns as i}from"./tableData.83d6955e.js";import{d as r}from"./table.4a445053.js";import{j as s,K as t,o as n,m as d,n as a}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.04030879.js";import"./index.643db95a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.2d1288e4.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.b1caa3b4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              */import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";var m=s({components:{BasicTable:e},setup(){const[e]=o({title:"表尾行合计示例",api:r,rowSelection:{type:"checkbox"},columns:i(),showSummary:!0,summaryFunc:function(e){const o=e.reduce(((e,o)=>e+=o.no),0);return[{_row:"合计",_index:"平均值",no:o},{_row:"合计",_index:"平均值",no:o}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const c={class:"p-4"};m.render=function(e,o,i,r,s,m){const p=t("BasicTable");return n(),d("div",c,[a(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default m;