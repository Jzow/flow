import{_ as e}from"./TableImg.67f55203.js";import"./BasicForm.d23c40e0.js";import{E as o}from"./index.11db6968.js";import{c as t,d as s,j as a}from"./data.8277dc63.js";import{b as r}from"./useModal.14f2a57c.js";import{_ as i}from"./PageWrapper.745b68b0.js";import{k as d,K as n,o as p,n as m,Q as c,q as f,Y as j}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.a6964f79.js";import"./index.407e4786.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.ab37f9af.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";/* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";import"./createAsyncComponent.165c6751.js";import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */var l=d({components:{BasicTable:e,ExpExcelModel:o,PageWrapper:i},setup(){const[e,{openModal:o}]=r();return{defaultHeader:function({filename:e,bookType:o}){a({data:s,filename:e,write2excelOpts:{bookType:o}})},columns:t,data:s,register:e,openModal:o}}});const u=j(" 导出 ");l.render=function(e,o,t,s,a,r){const i=n("a-button"),d=n("BasicTable"),j=n("ExpExcelModel"),l=n("PageWrapper");return p(),m(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[f(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[f(i,{onClick:e.openModal},{default:c((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),f(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;